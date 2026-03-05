import qs from 'qs'
import { QuoteFormPayload } from '@/components/containers/QuoteForm/types'

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL!

export type StrapiId = number
export type StrapiEntity<TAttributes> = {
	id: StrapiId
	attributes: TAttributes
}
export type StrapiSingleResponse<TAttributes> = {
	data: StrapiEntity<TAttributes> | null
	meta: Record<string, unknown>
}

export type ApiFetchOptions = {
	method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
	headers?: HeadersInit
	params?: Record<string, unknown>
	body?: unknown
	cache?: RequestCache
	revalidate?: number
	tags?: string[]
}

function buildUrl(path: string, params?: Record<string, unknown>): string {
	const base = (STRAPI_URL || '').replace(/\/+$/, '')
	const normalizedPath = path.startsWith('/') ? path : `/${path}`
	const query = params
		? `?${qs.stringify(params, { encodeValuesOnly: true })}`
		: ''
	return `${base}${normalizedPath}${query}`
}

export async function apiFetch<TResponse>(
	path: string,
	options: ApiFetchOptions = {},
): Promise<TResponse> {
	const { params, body, revalidate, tags, cache, headers, ...rest } = options
	const url = buildUrl(path, params)

	const isFormData = body instanceof FormData
	const mergedHeaders: HeadersInit = {
		...(!isFormData && { 'Content-Type': 'application/json' }),
		...headers,
	}

	const nextOptions =
		typeof revalidate === 'number' || (tags && tags.length)
			? { next: { revalidate, tags } }
			: {}

	const res = await fetch(url, {
		...rest,
		headers: mergedHeaders,
		...(body ? { body } : {}),
		...(cache ? { cache } : {}),
		...nextOptions,
	} as RequestInit)

	if (!res.ok) {
		const text = await res.text().catch(() => '')
		throw new Error(
			`Strapi request failed: ${res.status} ${res.statusText} ${text}`,
		)
	}

	return (await res.json()) as TResponse
}

export type StrapiPagination = {
	page: number
	pageSize: number
	pageCount: number
	total: number
}

export type StrapiFlatCollectionResponse<T> = {
	data: T[]
	meta: {
		pagination: StrapiPagination
	}
}

export type UploadedFileInfo = {
	id: number
	url: string
}

export type PostEntryResult<T> = {
	entry: StrapiFlatCollectionResponse<T>
	uploadedFiles: UploadedFileInfo[]
}

export function getCollection<T>(
	collection: string,
	params?: Record<string, unknown>,
	opts?: Omit<ApiFetchOptions, 'params'>,
) {
	return apiFetch<StrapiFlatCollectionResponse<T>>(`/api/${collection}`, {
		...opts,
		params,
	})
}

export function getSingle<TAttributes>(
	single: string,
	params?: Record<string, unknown>,
	opts?: Omit<ApiFetchOptions, 'params'>,
) {
	return apiFetch<StrapiSingleResponse<TAttributes>>(`/api/${single}`, {
		...opts,
		params,
	})
}

export function getById<TAttributes>(
	collection: string,
	id: number | string,
	params?: Record<string, unknown>,
	opts?: Omit<ApiFetchOptions, 'params'>,
) {
	return apiFetch<StrapiSingleResponse<TAttributes>>(
		`/api/${collection}/${id}`,
		{
			...opts,
			params,
		},
	)
}

export async function postEntry<T>(
	collection: string,
	params?: Record<string, unknown>,
	opts?: Omit<ApiFetchOptions, 'params' | 'method'>,
): Promise<PostEntryResult<T>> {
	const body = opts?.body as Record<string, unknown>
	const { files = [], ...data } = body || {}

	let fileIds: number[] = []
	const uploadedFilesMeta: UploadedFileInfo[] = []

	if (Array.isArray(files) && files.length > 0) {
		console.log(`[Strapi] Starting upload of ${files.length} file(s)`)
		const startTime = performance.now()

		const uploadPromises = files.map(async (file: File) => {
			const fileStartTime = performance.now()
			const formData = new FormData()
			formData.append('files', file, file.name)

			console.log(
				`[Strapi] Uploading ${file.name} (${(file.size / 1024 / 1024).toFixed(
					2,
				)}MB)`,
			)

			const uploadedFiles = await apiFetch<Array<{ id: number; url: string }>>(
				`/api/upload`,
				{
					method: 'POST',
					body: formData,
				},
			)

			const fileEndTime = performance.now()
			console.log(
				`[Strapi] Uploaded ${file.name} in ${(
					fileEndTime - fileStartTime
				).toFixed(0)}ms`,
			)

			const uploaded = uploadedFiles?.[0]

			if (uploaded?.id) {
				uploadedFilesMeta.push({
					id: uploaded.id,
					url: uploaded.url,
				})
			}

			return uploaded?.id
		})

		const uploadedIds = await Promise.all(uploadPromises)
		fileIds = uploadedIds.filter((id): id is number => id !== undefined)

		const endTime = performance.now()
		console.log(
			`[Strapi] All files uploaded in ${(endTime - startTime).toFixed(0)}ms`,
		)
	}

	const createResponse = await apiFetch<{
		data: { id: number; documentId: string }
	}>(`/api/${collection}`, {
		...opts,
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			...opts?.headers,
		},
		body: JSON.stringify({
			data: {
				...data,
				...(fileIds.length > 0 && { files: fileIds }),
			},
		}),
		params,
	})

	return {
		entry: createResponse as unknown as StrapiFlatCollectionResponse<T>,
		uploadedFiles: uploadedFilesMeta,
	}
}

export function generateFilesLog(
	files: File[],
	values: QuoteFormPayload,
): string {
	if (files.length === 0) {
		return 'No files attached.'
	}

	let log = 'Attached files:\n'
	files.forEach((file, index) => {
		log += `${index + 1}. ${file.name} (${(file.size / 1024).toFixed(
			2,
		)} KB), file extension: ${file.name.split('.').pop()}\n`
	})
	Object.entries(values).forEach(([key, value]) => {
		if (key !== 'files') {
			log += `${key}: ${value}\n`
		}
	})
	return log
}
