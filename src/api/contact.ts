import type { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import { Resend } from "resend"

type ContactPayload = {
  name?: string
  email?: string
  phone?: string
  message?: string
  company?: string
}

export default async function handler(req: GatsbyFunctionRequest, res: GatsbyFunctionResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "Method Not Allowed" })
    return
  }

  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.RESEND_TO_EMAIL
  const fromEmail = "Trita <no-reply@inf.in>"

  if (!apiKey) {
    res.status(500).json({ ok: false, error: "Missing RESEND_API_KEY" })
    return
  }

  if (!toEmail || !fromEmail) {
    res.status(500).json({ ok: false, error: "Missing configuration" })
    return
  }

  let payload: ContactPayload = {}
  try {
    payload = (req.body ?? {}) as ContactPayload
  } catch {
    res.status(400).json({ ok: false, error: "Invalid JSON" })
    return
  }

  const name = (payload.name ?? "").trim()
  const email = (payload.email ?? "").trim()
  const phone = (payload.phone ?? "").trim()
  const message = (payload.message ?? "").trim()
  const company = (payload.company ?? "").trim()

  // Simple honeypot
  if (company) {
    res.status(200).json({ ok: true })
    return
  }

  if (!name || !email || !message) {
    res.status(400).json({ ok: false, error: "Missing required fields" })
    return
  }

  const resend = new Resend(apiKey)

  const subject = `New Contact Form Submission — ${name}`
  const html = `
    <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; line-height: 1.5; color: #07060a;">
      <h2 style="margin: 0 0 12px;">New Contact Form Submission</h2>
      <p style="margin: 0 0 6px;"><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p style="margin: 0 0 6px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p style="margin: 0 0 6px;"><strong>Phone:</strong> ${escapeHtml(phone || "—")}</p>
      <hr style="border: 0; border-top: 1px solid rgba(7,6,10,0.12); margin: 12px 0;" />
      <p style="white-space: pre-wrap; margin: 0;">${escapeHtml(message)}</p>
    </div>
  `.trim()

  try {
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject,
      replyTo: email,
      html,
    })

    res.status(200).json({ ok: true })
  } catch (error) {
    res.status(500).json({ ok: false, error: error instanceof Error ? error.message : "Failed to send" })
  }
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}
