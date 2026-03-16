import * as React from "react"

import BrandPageLayout from "../../layouts/BrandPageLayout"
import Button from "../../components/ui/Button"

const offerings = [
  {
    number: `01`,
    title: `Traditional Board Games`,
    desc: `Handcrafted sets of Chowka Bara, Aadu Huli, Pagade, Navakankari, Sholo Gutti, and more — made by artisans using sustainable materials.`,
    tag: `Shop`,
    href: `https://rollthedice.in/collections/traditional-board-games`,
  },
  {
    number: `02`,
    title: `Cultural Games & Puzzles`,
    desc: `Jigsaw puzzles and activity sets rooted in Indian mythology and heritage — Dashavatara, Ramayana, Devata Vahanas, and more.`,
    tag: `Shop`,
    href: `https://rollthedice.in/collections/cultural-games-activities-books`,
  },
  {
    number: `03`,
    title: `Experiential Game Sets`,
    desc: `Life-size, large-format board games for schools, cultural centres, museums, resorts, and public spaces. Custom-designed and built sustainably.`,
    tag: `Installations`,
    href: `https://rollthedice.in/pages/experiential-game-sets`,
  },
  {
    number: `04`,
    title: `School Workshops`,
    desc: `Structured programs for schools and Montessori — game festivals, culture connect sessions, strategy game leagues, and classroom workshops.`,
    tag: `Programs`,
    href: `https://rollthedice.in/pages/schools-montessori`,
  },
  {
    number: `05`,
    title: `Corporate Programs`,
    desc: `Holiday events, retreats, employee recreation, family day events, and corporate gifting — all rooted in traditional Indian gaming culture.`,
    tag: `Corporate`,
    href: `https://rollthedice.in/pages/corporate-engagements`,
  },
  {
    number: `06`,
    title: `Gifting & Bulk Orders`,
    desc: `Unique, heritage-rich gifts for festivals, milestones, and corporate occasions. Wholesale and retail partnership formats also available.`,
    tag: `Gifting`,
    href: `https://rollthedice.in/pages/gifting`,
  },
]

const experientialGames = [
  { name: `Pagade`, image: `https://rollthedice.in/cdn/shop/files/ANJ8593.jpg?v=1761819633&width=800` },
  { name: `Aadu Huli`, image: `https://rollthedice.in/cdn/shop/files/ANJ8528.jpg?v=1761820994&width=800` },
  { name: `Chess`, image: `https://rollthedice.in/cdn/shop/files/ANJ8572_1.jpg?v=1761822131&width=800` },
  { name: `Channe Mane`, image: `https://rollthedice.in/cdn/shop/files/ANJ8556.jpg?v=1761820994&width=800` },
  { name: `Navakankari`, image: `https://rollthedice.in/cdn/shop/files/ANJ8553.jpg?v=1761820992&width=800` },
  { name: `Sholo Gutti & more`, image: `https://rollthedice.in/cdn/shop/files/ANJ8595_1.jpg?v=1762157420&width=800` },
]

export default function RollTheDicePage() {
  return (
    <BrandPageLayout
      title="Roll the Dice"
      subtitle="Brand / Roll the Dice"
      logo="/Roll the Dice Logo (1200 x 628 px).png"
      website="https://rollthedice.in"
      description={
        <p>
          Roll the Dice is Trita's flagship brand dedicated to researching, reviving, and reimagining traditional
          Indian board games for modern audiences. Handcrafted by 30+ artisan families using sustainable materials,
          each game carries over 2,000 years of cultural heritage — from Chowka Bara and Pagade to Aadu Huli and
          Navakankari.
        </p>
      }
    >
      {/* Offerings grid — rendered inside BrandPageLayout's sm:grid-cols-2 lg:grid-cols-3 */}
      {offerings.map(o => (
        <a
          key={o.title}
          href={o.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white p-6 shadow-soft transition-shadow duration-300 hover:shadow-md no-underline"
        >
          <div className="flex items-center justify-between">
            <span className="font-ui text-xs font-medium tracking-widest text-ink-950/25">{o.number}</span>
            <span className="rounded-full border border-ink-950/[0.12] px-3 py-0.5 font-ui text-xs tracking-wide text-ink-950/45">
              {o.tag}
            </span>
          </div>
          <h3 className="mt-3 font-heading text-lg font-bold text-ink-950 transition group-hover:text-marigold-600">
            {o.title}
          </h3>
          <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/65 flex-1">{o.desc}</p>
          <span className="mt-4 font-ui text-sm font-semibold text-ink-950/35 transition group-hover:text-ink-950">
            Explore →
          </span>
        </a>
      ))}

      {/* Experiential gallery — spans full width outside the grid via col-span trick */}
      <div className="col-span-full mt-4 space-y-6">
        <div>
          <h2 className="font-heading text-2xl font-bold text-ink-950">Experiential Game Sets</h2>
          <p className="mt-2 font-body text-sm leading-relaxed text-ink-950/65 max-w-2xl">
            Life-size board games designed for schools, cultural centres, museums, resorts, and public spaces.
            Custom-designed. Built sustainably. Loved by all ages.
          </p>
        </div>

        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {experientialGames.map(g => (
            <div key={g.name} className="group overflow-hidden rounded-2xl border border-ink-950/[0.08] bg-sand-50 shadow-soft">
              <div className="relative overflow-hidden" style={{ aspectRatio: "1/1" }}>
                <img
                  src={g.image}
                  alt={g.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink-950/50 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="rounded-xl bg-white/90 px-2 py-0.5 font-ui text-xs font-semibold text-ink-950">
                    {g.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Button
            href="https://rollthedice.in/pages/experiential-game-sets"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 text-sm"
          >
            View experiential sets
          </Button>
          <Button
            href="https://rollthedice.in/pages/contact-us"
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 text-sm"
          >
            Enquire about hosting
          </Button>
        </div>
      </div>
    </BrandPageLayout>
  )
}