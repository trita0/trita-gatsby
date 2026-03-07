import * as React from "react"

import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"
import Card from "../components/ui/Card"
import Button from "../components/ui/Button"

export default function ContactPage() {
  const [status, setStatus] = React.useState<"idle" | "sending" | "success" | "error">("idle")
  const [error, setError] = React.useState<string | null>(null)
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    company: "",
  })

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setError(null)
    setStatus("sending")

    const name = values.name.trim()
    const email = values.email.trim()
    const phone = values.phone.trim()
    const message = values.message.trim()

    if (!name || !email || !message) {
      setStatus("error")
      setError("Please fill in name, email, and message.")
      return
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: phone || undefined,
          message,
          company: values.company,
        }),
      })

      const data = (await res.json().catch(() => null)) as null | { ok?: boolean; error?: string }

      if (!res.ok || !data?.ok) {
        setStatus("error")
        setError(data?.error ?? "Something went wrong. Please try again.")
        return
      }

      setStatus("success")
      setValues({ name: "", email: "", phone: "", message: "", company: "" })
    } catch {
      setStatus("error")
      setError("Network error. Please try again.")
    }
  }

  return (
    <SiteLayout>
      <header className="space-y-4">
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink-950">Contact</h1>
        <p className="max-w-2xl font-body text-lg leading-relaxed text-ink-950/70">
          Reach out for collaborations, programs, or media inquiries.
        </p>
      </header>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <Card className="transition hover:shadow-lift">
          <div className="font-heading text-xl font-bold text-ink-950">Contact Form</div>
          <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">We usually respond within 1–2 working days.</p>

          <form className="mt-8 space-y-5" onSubmit={onSubmit}>
            <label className="hidden" aria-hidden="true">
              Company
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
              value={values.company}
              onChange={e => setValues(v => ({ ...v, company: e.target.value }))}
            />
            </label>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-1.5 font-ui text-sm font-semibold">
                <span className="text-ink-950/80">Name</span>
                <input
                  className="h-11 rounded-xl border border-ink-950/10 bg-white px-4 font-body text-base text-ink-950 shadow-soft outline-none transition focus:border-marigold-500/60 focus:ring-2 focus:ring-marigold-500/20"
                  value={values.name}
                  onChange={e => setValues(v => ({ ...v, name: e.target.value }))}
                  required
                />
              </label>

              <label className="grid gap-1.5 font-ui text-sm font-semibold">
                <span className="text-ink-950/80">Email</span>
                <input
                  type="email"
                  className="h-11 rounded-xl border border-ink-950/10 bg-white px-4 font-body text-base text-ink-950 shadow-soft outline-none transition focus:border-marigold-500/60 focus:ring-2 focus:ring-marigold-500/20"
                  value={values.email}
                  onChange={e => setValues(v => ({ ...v, email: e.target.value }))}
                  required
                />
              </label>
            </div>

            <label className="grid gap-1.5 font-ui text-sm font-semibold">
              <span className="text-ink-950/80">Phone (optional)</span>
              <input
                type="tel"
                className="h-11 rounded-xl border border-ink-950/10 bg-white px-4 font-body text-base text-ink-950 shadow-soft outline-none transition focus:border-marigold-500/60 focus:ring-2 focus:ring-marigold-500/20"
                value={values.phone}
                onChange={e => setValues(v => ({ ...v, phone: e.target.value }))}
              />
            </label>

            <label className="grid gap-1.5 font-ui text-sm font-semibold">
              <span className="text-ink-950/80">Message</span>
              <textarea
                className="min-h-[140px] rounded-xl border border-ink-950/10 bg-white px-4 py-3 font-body text-base text-ink-950 shadow-soft outline-none transition focus:border-marigold-500/60 focus:ring-2 focus:ring-marigold-500/20"
                value={values.message}
                onChange={e => setValues(v => ({ ...v, message: e.target.value }))}
                required
              />
            </label>

            {status === "success" ? (
              <div className="rounded-xl bg-indigo-50 px-4 py-3 font-ui text-sm font-semibold text-indigo-600">
                Thanks — your message has been sent.
              </div>
            ) : null}

            {status === "error" && error ? (
              <div className="rounded-xl bg-terracotta-50 px-4 py-3 font-ui text-sm font-semibold text-terracotta-600">
                {error}
              </div>
            ) : null}

            <div className="flex items-center gap-4 pt-2">
              <Button type="submit" variant="primary" disabled={status === "sending"} className="px-8 py-3 text-base">
                {status === "sending" ? "Sending…" : "Submit"}
              </Button>
              <Button href="mailto:hello@trita.example" variant="secondary" className="px-8 py-3 text-base">
                Email instead
              </Button>
            </div>
          </form>
        </Card>

        <Card className="transition hover:shadow-lift">
          <div className="font-heading text-xl font-bold text-ink-950">Office</div>
          <div className="mt-4 space-y-3 font-caption text-base text-ink-950/70">
            <div className="leading-relaxed">1 Floor, "Samputa", 8th Cross, Adipampa Road, V V Mohalla, Mysore 570002</div>
            <div>
              <a className="font-ui font-semibold text-marigold-500 hover:text-marigold-600 transition" href="mailto:hello@trita.example">
                hello@trita.example
              </a>
            </div>
            <div>
              <a className="font-ui font-semibold text-marigold-500 hover:text-marigold-600 transition" href="tel:+910000000000">
                +91 00000 00000
              </a>
            </div>
          </div>
        </Card>
      </section>
    </SiteLayout>
  )
}

export const Head = () => <Seo title="Contact" pathname="/contact" />
