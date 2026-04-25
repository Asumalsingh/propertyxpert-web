import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()

  const apiKey = process.env.OPCRM_API_KEY
  const apiUrl = process.env.OPCRM_BASE_URL

  if (!apiKey || !apiUrl) {
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })
  }

  let res: Response
  try {
    res = await fetch(`${apiUrl}/api/v1/public/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': apiKey,
      },
      body: JSON.stringify(body),
    })
  } catch (err) {
    console.error('[leads proxy] fetch failed:', err)
    return NextResponse.json({ error: 'Could not reach CRM server' }, { status: 502 })
  }

  const text = await res.text()
  let data: unknown
  try {
    data = JSON.parse(text)
  } catch {
    console.error('[leads proxy] non-JSON response from CRM:', res.status, text.slice(0, 200))
    return NextResponse.json({ error: 'Unexpected CRM response' }, { status: 502 })
  }

  return NextResponse.json(data, { status: res.status })
}
