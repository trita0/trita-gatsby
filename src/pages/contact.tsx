import * as React from "react"

import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"
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
        body: JSON.stringify({ name, email, phone: phone || undefined, message, company: values.company }),
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

  const inputCls =
    "h-11 w-full rounded-2xl border border-ink-950/[0.08] bg-sand-50 px-4 font-body text-base text-ink-950 outline-none transition-all duration-200 focus:border-marigold-500/60 focus:bg-white focus:ring-2 focus:ring-marigold-500/20 placeholder:text-ink-950/30"

  return (
    <SiteLayout>

      <header className="space-y-4 text-center">
        <h1 className="font-display text-5xl font-bold tracking-tight text-ink-950">Contact</h1>
        <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-ink-950/70">
          Reach out for collaborations, programs, or media inquiries.
        </p>
      </header>

      <section className="mt-12 grid gap-6 lg:grid-cols-[2fr_1fr]">

        <div className="overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft">
          <div className="border-b border-ink-950/[0.08] px-8 py-6">
            <div className="font-heading text-xl font-bold text-ink-950">Send a message</div>
            <p className="mt-1 font-caption text-sm text-ink-950/55">We usually respond within 1–2 working days.</p>
          </div>

          <form className="space-y-5 p-8" onSubmit={onSubmit}>

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
              <label className="grid gap-1.5">
                <span className="font-ui text-sm font-semibold text-ink-950/70">Name</span>
                <input
                  className={inputCls}
                  value={values.name}
                  onChange={e => setValues(v => ({ ...v, name: e.target.value }))}
                  required
                />
              </label>
              <label className="grid gap-1.5">
                <span className="font-ui text-sm font-semibold text-ink-950/70">Email</span>
                <input
                  type="email"
                  className={inputCls}
                  value={values.email}
                  onChange={e => setValues(v => ({ ...v, email: e.target.value }))}
                  required
                />
              </label>
            </div>

            <label className="grid gap-1.5">
              <span className="font-ui text-sm font-semibold text-ink-950/70">
                Phone <span className="font-normal text-ink-950/35">(optional)</span>
              </span>
              <input
                type="tel"
                className={inputCls}
                value={values.phone}
                onChange={e => setValues(v => ({ ...v, phone: e.target.value }))}
              />
            </label>

            <label className="grid gap-1.5">
              <span className="font-ui text-sm font-semibold text-ink-950/70">Message</span>
              <textarea
                className={`${inputCls} h-auto min-h-[140px] py-3`}
                value={values.message}
                onChange={e => setValues(v => ({ ...v, message: e.target.value }))}
                required
              />
            </label>

            {status === "success" && (
              <div className="rounded-2xl bg-indigo-50 px-4 py-3 font-ui text-sm font-semibold text-indigo-600">
                Thanks — your message has been sent.
              </div>
            )}

            {status === "error" && error && (
              <div className="rounded-2xl bg-terracotta-50 px-4 py-3 font-ui text-sm font-semibold text-terracotta-600">
                {error}
              </div>
            )}

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button type="submit" variant="primary" disabled={status === "sending"} className="px-8 py-3 text-base">
                {status === "sending" ? "Sending…" : "Submit"}
              </Button>
              <Button href="mailto: namaste@trita.in" variant="secondary" className="px-8 py-3 text-base">
                Email instead
              </Button>
            </div>
          </form>
        </div>

        <div className="flex flex-col gap-0 overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft">
          <div className="border-b border-ink-950/[0.08] px-7 py-6">
            <span className="font-ui text-xs font-medium uppercase tracking-widest text-ink-950/30">Office</span>
            <div className="mt-1 font-heading text-xl font-bold text-ink-950">Find us here</div>
          </div>

          <div className="flex flex-col gap-0 flex-1">
            <div className="border-b border-ink-950/[0.08] px-7 py-5">
              <span className="font-ui text-xs font-medium uppercase tracking-widest text-ink-950/25">Address</span>
              <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/65">
                1 Floor, "Samputa", 8th Cross,<br />
                Adipampa Road, V V Mohalla,<br />
                Mysore 570002
              </p>
            </div>
            <div className="border-b border-ink-950/[0.08] px-7 py-5">
              <span className="font-ui text-xs font-medium uppercase tracking-widest text-ink-950/25">Email</span>
              <div className="mt-2">
                <a
                  href="mailto: namaste@trita.in"
                  className="font-ui text-sm font-semibold text-ink-950/70 no-underline transition-all duration-200 active:text-ink-950 lg:hover:text-ink-950"
                >
                   namaste@trita.in
                </a>
              </div>
            </div>
            <div className="px-7 py-5">
              <span className="font-ui text-xs font-medium uppercase tracking-widest text-ink-950/25">Phone</span>
              <div className="mt-2">
                <a
                  href="tel:+919342184698"
                  className="font-ui text-sm font-semibold text-ink-950/70 no-underline transition-all duration-200 active:text-ink-950 lg:hover:text-ink-950"
                >
                  +91 93421 84698
                </a>
              </div>
            </div>
          </div>
        </div>

      </section>
    </SiteLayout>
  )
}

export const Head = () => <Seo title="Contact" pathname="/contact" />