import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"
import Card from "../components/ui/Card"

const brands = [
  { 
    title: `Roll the Dice`, 
    to: `/brands/roll-the-dice`, 
    desc: `Game collections, workshops, corporate programs.`,
    image: `Roll the Dice Logo (1200 x 628 px).png`
  },
  { 
    title: `TolluGatti`, 
    to: `/brands/tollugatti`, 
    desc: `Digital board games, mindful play, community events.`,
    image: `tollugatti-inverse.png`
  },
  { 
    title: `UnCamp`, 
    to: `/brands/uncamp`, 
    desc: `Thematic camps and family learning programs.`,
    image: `uncamp-logo.png`
  },
  { 
    title: `Dahi Handi`, 
    to: `/brands/dahi-handi`, 
    desc: `Cultural festivals, youth engagement, heritage celebrations.`,
    image: `dahi-handi-game.png`
  },
]

export default function BrandsPage() {
  return (
    <SiteLayout>
      <header className="space-y-4">
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink-950">Our Brands</h1>
        <p className="max-w-2xl font-body text-lg leading-relaxed text-ink-950/70">
          Explore Trita's ecosystem of brands and programs.
        </p>
      </header>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        {brands.map(b => (
          <Card key={b.to} className="group transition hover:shadow-lift">
            <div className="mt-4 flex items-center gap-4">
              <img
                src={`/${b.image}`}
                alt={`${b.title} logo`}
                className="h-16 w-auto max-w-24 object-contain"
              />
              <div className="font-ui text-xl font-bold text-ink-950 group-hover:text-marigold-600 transition">
                {b.title}
              </div>
            </div>
            <p className="mt-3 font-caption text-sm leading-relaxed text-ink-950/70">{b.desc}</p>
            <div className="mt-6">
              <Link to={b.to} className="font-ui text-sm font-bold text-marigold-500 hover:text-marigold-600 flex items-center gap-1 transition">
                View details
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="transition group-hover:translate-x-1"><path d="m9 18 6-6-6-6"/></svg>
              </Link>
            </div>
          </Card>
        ))}
      </section>
    </SiteLayout>
  )
}

export const Head = () => <Seo title="Brands" pathname="/brands" />
