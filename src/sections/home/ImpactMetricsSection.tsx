import * as React from "react"

import Card from "../../components/ui/Card"

const metrics = [
  { label: `Families engaged`, value: `2,500+` },
  { label: `Schools partnered`, value: `30+` },
  { label: `Workshops conducted`, value: `120+` },
  { label: `Games revived`, value: `25+` },
]

export default function ImpactMetricsSection() {
  return (
    <section className="mt-14">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-heading text-3xl font-bold text-ink-950">Impact Metrics</h2>
          <p className="mt-3 max-w-2xl font-body text-base leading-relaxed text-ink-950/70">
            Placeholder metrics for now—swap with real numbers as you gather more data.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map(m => (
          <Card key={m.label} className="transition hover:shadow-lift">
            <div className="font-display text-4xl font-bold text-ink-950">{m.value}</div>
            <div className="mt-2 font-caption text-sm font-semibold text-ink-950/70 uppercase tracking-wider">{m.label}</div>
          </Card>
        ))}
      </div>
    </section>
  )
}
