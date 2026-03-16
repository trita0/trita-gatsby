import * as React from "react"

import Button from "../../components/ui/Button"

const audiences = [`Schools`, `Cultural institutions`, `Brand teams`, `Communities`]

export default function CtaSection() {
  return (
    <section className="mt-14">
      <div className="relative overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft">
        
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-marigold-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-indigo-600/15 blur-3xl" />

        <div className="relative grid gap-0 lg:grid-cols-[1fr_auto]">

          <div className="flex flex-col justify-between gap-8 p-8 sm:p-12">
            <div className="space-y-4">
              <h2 className="max-w-xl font-display text-4xl font-bold leading-tight tracking-tight text-ink-950 sm:text-5xl">
                Let's build cultural play{" "}
                <span className="text-ink-950">together</span>
              </h2>
              <p className="max-w-lg font-body text-base leading-relaxed text-ink-950/65 sm:text-lg">
                Whether you're a school, cultural institution, or a brand team — there's a collaboration format that fits.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button to="/collaborate" className="px-8 py-3 text-base">Collaborate with us</Button>
              <Button to="/contact" variant="secondary" className="px-8 py-3 text-base">Contact</Button>
            </div>
          </div>

          <div className="flex flex-col justify-center border-t border-ink-950/[0.08] lg:border-l lg:border-t-0">
            <div className="px-8 pb-4 pt-6 lg:pt-8">
              <span className="font-ui text-xs font-medium uppercase tracking-widest text-ink-950/30">
                We work with
              </span>
            </div>
            {audiences.map((a, i) => (
              <div
                key={a}
                className={`flex items-center gap-3 px-8 py-4 transition hover:bg-sand-50
                  ${i !== audiences.length - 1 ? "border-b border-ink-950/[0.08]" : "pb-8 lg:pb-8"}`}
              >
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-marigold-500" />
                <span className="font-heading text-base font-semibold text-ink-950">{a}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}