import * as React from "react"

import Card from "../../components/ui/Card"
import Button from "../../components/ui/Button"

const items = [
  {
    title: `Roll the Dice`,
    logo: `/Roll the Dice Logo (1200 x 628 px).png`,
    desc: `Experiential game collections and installations designed for families, schools, and communities.`,
    to: `/brands/roll-the-dice`,
    number: `01`,
  },
  {
    title: `TolluGatti`,
    logo: `/tollugatti-inverse.png`,
    desc: `Digital-first board games, mindful play, companion experiences, and community events.`,
    to: `/brands/tollugatti`,
    number: `02`,
  },
  {
    title: `UnCamp`,
    logo: `/Uncamp Logo.png`,
    desc: `Thematic camps and challenges that blend culture, curiosity, and creativity.`,
    to: `/brands/uncamp`,
    number: `03`,
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
          <a
            key={item.title}
            href={item.to}
            className="group flex flex-col overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft transition-all duration-300 active:scale-[0.98] lg:hover:shadow-lift no-underline"
          >
            <div className="flex items-center justify-center rounded-2xl bg-sand-50 mx-5 mt-5 px-6 py-8">
              <img
                src={item.logo}
                alt={item.title}
                className="h-20 w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between gap-4 p-5">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-ui text-xl font-bold text-ink-950 transition group-hover:text-marigold-600">
                    {item.title}
                  </span>
                  <span className="font-ui text-xs font-medium tracking-widest text-ink-950/25">
                    {item.number}
                  </span>
                </div>
                <p className="font-caption text-sm leading-relaxed text-ink-950/65">{item.desc}</p>
              </div>
              <Button to={item.to} variant="ghost" className="w-fit px-0 font-ui text-sm font-bold shadow-none">
                Learn more
              </Button>
            </div>
          </a>
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