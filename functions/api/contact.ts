interface Env {
  RESEND_API_KEY: string
  RESEND_TO_EMAIL: string
}

interface ContactPayload {
  name?: string
  email?: string
  phone?: string
  message?: string
  company?: string
}

function escapeHtml(input: string): string {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

export async function onRequestPost(context: { request: Request; env: Env }): Promise<Response> {
  const { request, env } = context

  const apiKey = env.RESEND_API_KEY
  const toEmail = env.RESEND_TO_EMAIL
  const fromEmail = "Trita <no-reply@inf.in>"

  if (!apiKey) {
    return new Response(JSON.stringify({ ok: false, error: "Missing RESEND_API_KEY" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    })
  }

  if (!toEmail || !fromEmail) {
    return new Response(JSON.stringify({ ok: false, error: "Missing configuration" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    })
  }

  let payload: ContactPayload = {}
  try {
    payload = await request.json() as ContactPayload
  } catch {
    return new Response(JSON.stringify({ ok: false, error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    })
  }

  const name = (payload.name ?? "").trim()
  const email = (payload.email ?? "").trim()
  const phone = (payload.phone ?? "").trim()
  const message = (payload.message ?? "").trim()
  const company = (payload.company ?? "").trim()

  // Simple honeypot
  if (company) {
    return new Response(JSON.stringify({ ok: true }), {
      headers: { "Content-Type": "application/json" }
    })
  }

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ ok: false, error: "Missing required fields" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    })
  }

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
    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: toEmail,
        subject,
        reply_to: email,
        html,
      }),
    })

    if (resendRes.ok) {
      return new Response(JSON.stringify({ ok: true }), {
        headers: { "Content-Type": "application/json" }
      })
    } else {
      const errorData: any = await resendRes.json()
      return new Response(JSON.stringify({ ok: false, error: errorData.message || "Failed to send" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      })
    }
  } catch (error) {
    return new Response(JSON.stringify({ ok: false, error: error instanceof Error ? error.message : "Failed to send" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    })
  }
}
