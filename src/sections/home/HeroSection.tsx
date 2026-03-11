import * as React from "react"

import Button from "../../components/ui/Button"

const pillars = [
  {
    title: `Play-led learning`,
    desc: `Games as a cultural bridge`,
  },
  {
    title: `Research to design`,
    desc: `Grounded in lived heritage`,
  },
  {
    title: `Technology with soul`,
    desc: `Digital preservation & platforms`,
  },
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-ink-950/10 bg-white shadow-soft">

      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-marigold-500/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-indigo-600/15 blur-3xl" />

      <div className="relative grid gap-0 lg:grid-cols-[1fr_auto]">

        <div className="flex flex-col justify-between gap-10 p-8 sm:p-12">

          {/* <div className="flex items-center gap-3">
            <img src="/trita-logo.png" alt="Trita logo" className="h-10 w-auto" />
            <span className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-ink-950/50">
              Trita
            </span>
          </div> */}

          <div className="space-y-5">
            <h1 className="max-w-2xl text-balance font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink-950 sm:text-5xl lg:text-6xl">
              Reimagining Indian Culture Through{" "}
              <span className="text-ink-950">Play, Learning & Technology</span>
            </h1>
            <p className="max-w-xl font-body text-base leading-relaxed text-ink-950/60 sm:text-lg">
              We design experiences that revive traditional games, create cultural learning programs,
              and build digital platforms that bring families, schools, and communities together.
            </p>
          </div>


          <div className="flex flex-col gap-3 sm:flex-row">
            <Button to="/collaborate">Collaborate with us</Button>
            <Button to="/programs" variant="secondary">
              Explore our work
            </Button>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-0 border-t border-ink-950/8 lg:border-l lg:border-t-0">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`group flex flex-col gap-1 px-8 py-6 transition hover:bg-sand-50 ${
                i !== pillars.length - 1 ? "border-b border-ink-950/8" : ""
              }`}
            >
              <span className="font-ui text-xs font-medium tracking-widest text-ink-950/25">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-heading text-base font-semibold text-ink-950">{p.title}</span>
              <span className="font-caption text-sm text-ink-950/55">{p.desc}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}