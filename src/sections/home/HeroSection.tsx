import * as React from "react"

import Button from "../../components/ui/Button"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-ink-950/10 bg-white p-8 shadow-soft sm:p-12">
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-marigold-500/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-indigo-600/20 blur-3xl" />

      <div className="relative">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.24em] text-ink-950/70">
          Trita
        </p>
        <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-bold leading-tight text-ink-950 sm:text-6xl">
          Reimagining Indian Culture Through Play, Learning, and Technology
        </h1>
        <p className="mt-6 max-w-2xl text-pretty font-body text-base leading-relaxed text-ink-950/70 sm:text-xl">
          We design experiences that revive traditional games, create cultural learning programs, and build digital
          platforms that bring families, schools, and communities together.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button to="/collaborate">Collaborate with us</Button>
          <Button to="/programs" variant="secondary">
            Explore our work
          </Button>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-ink-950/10 bg-sand-50 px-5 py-4 transition hover:shadow-soft">
            <div className="font-heading text-base font-semibold text-ink-950">Play-led learning</div>
            <div className="mt-1 font-caption text-sm text-ink-950/60">Games as a cultural bridge</div>
          </div>
          <div className="rounded-2xl border border-ink-950/10 bg-sand-50 px-5 py-4 transition hover:shadow-soft">
            <div className="font-heading text-base font-semibold text-ink-950">Research to design</div>
            <div className="mt-1 font-caption text-sm text-ink-950/60">Grounded in lived heritage</div>
          </div>
          <div className="rounded-2xl border border-ink-950/10 bg-sand-50 px-5 py-4 transition hover:shadow-soft">
            <div className="font-heading text-base font-semibold text-ink-950">Technology with soul</div>
            <div className="mt-1 font-caption text-sm text-ink-950/60">Digital preservation & platforms</div>
          </div>
        </div>
      </div>
    </section>
  )
}
