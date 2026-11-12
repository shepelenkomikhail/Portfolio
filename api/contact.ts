import nodemailer from 'nodemailer'

/**
 * POST /api/contact — sends the portfolio contact form through SMTP (Gmail).
 * Vercel serverless function. Configuration comes only from environment variables (see .env.example);
 * no credentials live in the repository.
 */

const LIMITS = { name: 100, email: 200, message: 5000 }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Best-effort rate limit per warm instance: 5 messages per IP per 10 minutes
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5
const hits = new Map<string, number[]>()

function json(status: number, body: Record<string, unknown>) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
  })
}

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)

function rateLimited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > MAX_PER_WINDOW
}

export async function POST(request: Request) {
  const env = process.env
  if (!env.SMTP_HOST || !env.SMTP_USER || !env.SMTP_PASSWORD) {
    console.error('contact: SMTP environment variables are missing')
    return json(500, { error: 'Email is not configured yet.' })
  }

  let body: Record<string, unknown>
  try {
    body = (await request.json()) as Record<string, unknown>
  } catch {
    return json(400, { error: 'Invalid request.' })
  }

  // Honeypot: real visitors never fill this hidden field; pretend success for bots
  if (body.company) return json(200, { ok: true })

  // Single-line fields: strip CR/LF so nothing can be smuggled into mail headers
  const name = String(body.name ?? '').replace(/[\r\n]+/g, ' ').trim()
  const email = String(body.email ?? '').replace(/[\r\n]+/g, '').trim()
  const message = String(body.message ?? '').trim()

  if (!name || !message || !EMAIL_RE.test(email)) {
    return json(400, { error: 'Please add your name, a valid email and a message.' })
  }
  if (name.length > LIMITS.name || email.length > LIMITS.email || message.length > LIMITS.message) {
    return json(400, { error: 'Your message is too long.' })
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  if (rateLimited(ip)) return json(429, { error: 'Too many messages — please try again later.' })

  const transporter = nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: Number(env.SMTP_PORT ?? 587),
    secure: env.SMTP_SECURE === 'true', // false on 587 → STARTTLS
    requireTLS: env.SMTP_SECURE !== 'true',
    auth: { user: env.SMTP_USER, pass: env.SMTP_PASSWORD.replace(/\s+/g, '') }, // Gmail app passwords are shown with spaces
  })

  const from = env.SMTP_FROM || env.SMTP_USER
  const to = env.CONTACT_TO || env.SMTP_USER

  try {
    await transporter.sendMail({
      from: { name: 'Portfolio contact form', address: from },
      to,
      replyTo: { name, address: email },
      subject: `Portfolio: message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}\n\n— sent from shepelenkomykhailo.com`,
      html: `<p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>
<p style="white-space:pre-wrap">${escapeHtml(message)}</p>
<p style="color:#888;font-size:12px">Sent from the contact form on shepelenkomykhailo.com — just press Reply to answer.</p>`,
    })
    return json(200, { ok: true })
  } catch (error) {
    console.error('contact: sending failed', error)
    return json(502, { error: 'Could not send right now.' })
  }
}

export function GET() {
  return json(405, { error: 'Use POST.' })
}
