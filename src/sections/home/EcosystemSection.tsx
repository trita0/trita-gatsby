import * as React from "react"

import Card from "../../components/ui/Card"
import Button from "../../components/ui/Button"

const items = [
  {
    title: `Roll the Dice`,
    desc: `Experiential game collections and installations designed for families, schools, and communities.`,
    to: `/brands/roll-the-dice`,
  },
  {
    title: `TolluGatti`,
    desc: `Digital-first board games, mindful play, companion experiences, and community events.`,
    to: `/brands/tollugatti`,
  },
  {
    title: `UnCamp`,
    desc: `Thematic camps and challenges that blend culture, curiosity, and creativity.`,
    to: `/brands/uncamp`,
  },
]

export default function EcosystemSection() {
  return (
    <section className="mt-14">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="font-heading text-3xl font-bold text-ink-950">Our Ecosystem</h2>
          <p className="mt-3 max-w-2xl font-body text-base leading-relaxed text-ink-950/70">
            A family of brands and programs built to make culture accessible, joyful, and relevant.
          </p>
        </div>
        <div className="hidden sm:block">
          <Button to="/brands" variant="secondary">
            View all brands
          </Button>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {items.map(item => (
          <Card key={item.title} className="group transition hover:shadow-lift">
            <div className="font-ui text-xl font-bold text-ink-950 transition group-hover:text-marigold-600">
              {item.title}
            </div>
            <p className="mt-3 font-caption text-sm leading-relaxed text-ink-950/70">{item.desc}</p>
            <div className="mt-6">
              <Button to={item.to} variant="ghost" className="px-0 font-ui text-sm font-bold shadow-none">
                Learn more
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-6 sm:hidden">
        <Button to="/brands" variant="secondary">
          View all brands
        </Button>
      </div>
    </section>
  )
}
