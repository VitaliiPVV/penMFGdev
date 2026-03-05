import {
	Attribution,
	QuoteFormPayload,
} from '@/components/containers/QuoteForm/types'
import { CompanyData, DealData, ContactData, SalesmateResponse } from '@/types'
import { UploadedFileInfo } from '../strapi/strapi'

const PIPELINE = process.env.NEXT_PUBLIC_SALESMATE_DEFAULT_PIPELINE!
const STATUS = process.env.NEXT_PUBLIC_SALESMATE_DEFAULT_STATUS!
const STAGE = process.env.NEXT_PUBLIC_SALESMATE_DEFAULT_STAGE!
const SALESMATE_DEFAULT_OWNER_ID = Number(
	process.env.NEXT_PUBLIC_SALESMATE_DEFAULT_OWNER_ID!
)

async function salesmatePost<TResponse>(
	resource: 'company' | 'contact' | 'deal',
	body: unknown
): Promise<TResponse> {
	const res = await fetch(`/api/salesmate/${resource}`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body),
	})

	if (!res.ok) {
		const err = await res.text().catch(() => '')
		throw new Error(
			`Create ${resource} failed: ${res.status} ${res.statusText} ${err}`
		)
	}

	return res.json() as Promise<TResponse>
}

export async function createCompany(payload: QuoteFormPayload) {
	return salesmatePost<SalesmateResponse<CompanyData>>('company', {
		name: payload.companyName,
		owner: SALESMATE_DEFAULT_OWNER_ID,
		website: payload.website,
		phone: payload.phone,
		billingAddressLine1: payload.address,
		billingCity: payload.city,
		billingState: payload.state,
		billingZipCode: payload.zipcode,
	})
}

export async function createContact(
	payload: QuoteFormPayload,
	companyId: number
) {
	const [firstName, ...rest] = payload.fullName.trim().split(' ')
	const lastName = rest.join(' ') || firstName

	return salesmatePost<SalesmateResponse<ContactData>>('contact', {
		firstName,
		lastName,
		owner: SALESMATE_DEFAULT_OWNER_ID,
		email: payload.email,
		company: companyId,
	})
}

export async function createDeal(
	quotePayload: QuoteFormPayload,
	files: UploadedFileInfo[],
	attributes: Attribution
) {
	const companyRes = await createCompany(quotePayload)
	const contactRes = await createContact(quotePayload, companyRes.Data.id)

	return salesmatePost<SalesmateResponse<DealData>>('deal', {
		title: quotePayload.fullName,
		owner: SALESMATE_DEFAULT_OWNER_ID,
		pipeline: PIPELINE,
		status: STATUS,
		stage: STAGE,
		primaryCompany: companyRes.Data.id,
		primaryContact: contactRes.Data.id,
		source: quotePayload.source,
		description: quotePayload.message,
		textAreaCustomField5: files.map((file) => file.url).join('\n'),
		...(attributes.utm_campaign && { campaign: attributes.utm_campaign }),
		...(attributes.utm_medium && { medium: attributes.utm_medium }),
	})
}
