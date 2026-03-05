import { NextRequest, NextResponse } from 'next/server'

const HOST = process.env.SALESMATE_HOST!
const TOKEN = process.env.SALESMATE_ACCESS_TOKEN!

const ALLOWED: Record<string, true> = {
	company: true,
	contact: true,
	deal: true,
}

function buildUrl(module: string) {
	return `https://${HOST}/apis/${module}/v4`
}

async function handlerPOST(req: NextRequest, module: string) {
	if (!ALLOWED[module]) {
		return NextResponse.json({ error: 'Forbidden module' }, { status: 403 })
	}

	let payload: unknown
	try {
		payload = await req.json()
	} catch {
		return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
	}

	const upstream = await fetch(buildUrl(module), {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			accessToken: TOKEN,
			'x-linkname': HOST,
		},
		body: JSON.stringify(payload),
		cache: 'no-store',
	})

	const body = await upstream.arrayBuffer()
	const headers = new Headers()
	const ct = upstream.headers.get('content-type')
	if (ct) headers.set('Content-Type', ct)

	return new NextResponse(body, { status: upstream.status, headers })
}

export async function POST(
	req: NextRequest,
	ctx: { params: Promise<{ module: string }> }
) {
	const { module } = await ctx.params
	return handlerPOST(req, module)
}
