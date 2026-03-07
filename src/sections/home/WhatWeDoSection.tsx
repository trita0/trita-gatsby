import * as React from "react"

import Card from "../../components/ui/Card"

const items = [
  {
    title: `Traditional Games Revival`,
    points: [`Documentation`, `Design refinements`, `Facilitated play`],
  },
  {
    title: `Cultural Learning Programs`,
    points: [`School workshops`, `Family programs`, `Community events`],
  },
  {
    title: `Digital Platforms`,
    points: [`Board games`, `Interactive learning`, `Companion experiences`],
  },
  {
    title: `Research & Innovation`,
    points: [`Knowledge systems`, `Digital preservation`, `Experimental concepts`],
  },
]

export default function WhatWeDoSection() {
  return (
    <section className="mt-14">
      <h2 className="font-heading text-3xl font-bold text-ink-950">What We Do</h2>
      <p className="mt-3 max-w-2xl font-body text-base leading-relaxed text-ink-950/70">
        Our work sits at the intersection of heritage, learning science, and modern design.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {items.map(item => (
          <Card key={item.title} className="transition hover:shadow-lift">
            <div className="font-heading text-lg font-bold text-ink-950">{item.title}</div>
            <ul className="mt-4 grid gap-2 font-caption text-sm text-ink-950/70">
              {item.points.map(p => (
                <li key={p} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-marigold-500" aria-hidden="true" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  )
}
