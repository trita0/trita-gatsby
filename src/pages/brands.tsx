import * as React from "react"

import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"
import Button from "../components/ui/Button"

const brands = [
  {
    title: `Roll the Dice`,
    to: `/brands/roll-the-dice`,
    image: `/Roll the Dice Logo (1200 x 628 px).png`,
    tag: `Traditional Board Games`,
    number: `01`,
    desc: `Reviving India's traditional board games through handcrafted, high-quality physical sets — from Chowka Bara and Pagade to Aadu Huli and Navakankari. Made by artisans, for families.`,
    highlights: [`15+ game variants`, `30+ artisan families`, `Schools & corporates`],
    cta: `Shop games`,
    ctaHref: `https://rollthedice.in/collections/traditional-board-games`,
  },
  {
    title: `TolluGatti`,
    to: `/brands/tollugatti`,
    image: `/tollugatti-inverse.png`,
    tag: `Digital Platform`,
    number: `02`,
    desc: `Your ultimate destination for mind games, puzzles, and traditional board games — online. Play Chowka Bara, Aadu Huli, quizzes, crosswords, and more. Compete on leaderboards and earn badges.`,
    highlights: [`Play Chowka Bara online`, `Quizzes & puzzles`, `Leaderboards & badges`],
    cta: `Play now`,
    ctaHref: `https://tollugatti.com`,
  },
  {
    title: `UnCamp`,
    to: `/brands/uncamp`,
    image: `/Uncamp Logo.png`,
    tag: `Play & Learn`,
    number: `03`,
    desc: `A structured series of short, meaningful challenges that kids complete at home during holidays. Practical, hands-on, and purposeful — building thinking, confidence, and creative expression.`,
    highlights: [`Ages 4–14`, `15–45 min daily challenges`, `Badges & leaderboards`],
    cta: `Register for UnCamp`,
    ctaHref: `https://uncamp.tollugatti.com/register`,
  },
  {
    title: `Dahi Handi`,
    to: `/brands/dahi-handi`,
    image: `/dahi-handi-logo.png`,
    tag: `Mobile Game`,
    number: `04`,
    desc: `A cultural mobile game celebrating one of India's most beloved festival traditions — Dahi Handi. Youth engagement, heritage celebration, and community play in a digital format.`,
    highlights: [`Cultural festival game`, `Youth engagement`, `Available on Play Store`],
    cta: `Download app`,
    ctaHref: `https://play.google.com/store/apps/details?id=com.tollugatti.dahihandi&hl=en_IN`,
  },
]

export default function BrandsPage() {
  return (
    <SiteLayout>
      {/* Header */}
      <header className="space-y-4 text-center">
        <h1 className="font-display text-5xl font-bold tracking-tight text-ink-950">Our Brands</h1>
        <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-ink-950/70">
          Explore Trita's ecosystem of brands, each with a unique focus on culture, play, and learning.
        </p>
      </header>

      <div className="mt-16 grid gap-6 sm:grid-cols-2">
        {brands.map((b) => (
          <div
            key={b.to}
            className="group flex flex-col overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft transition-all duration-300 active:scale-[0.99] lg:hover:shadow-md"
          >
            {/* Number + tag */}
            <div className="flex items-center justify-between px-6 pt-5">
              <span className="font-ui text-xs font-medium tracking-widest text-ink-950/30">
                {b.number}
              </span>
              <span className="rounded-full border border-ink-950/[0.15] px-3 py-0.5 font-ui text-xs tracking-wide text-ink-950/50">
                {b.tag}
              </span>
            </div>

            {/* Logo */}
            <div className="mx-6 mt-4 flex items-center justify-center rounded-2xl bg-sand-50 px-8 py-8">
              <img
                src={b.image}
                alt={`${b.title} logo`}
                className="h-32 w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col justify-between gap-4 p-6">
              <div className="space-y-3">
                <h2 className="font-ui text-2xl font-extrabold tracking-tight text-ink-950">
                  {b.title}
                </h2>
                <p className="font-body text-sm leading-relaxed text-ink-950/65">{b.desc}</p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-x-4 gap-y-1.5 pt-1">
                  {b.highlights.map(h => (
                    <span key={h} className="flex items-center gap-1.5 font-ui text-xs font-semibold text-ink-950/50">
                      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-marigold-500" />
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-2">
                <Button href={b.ctaHref} target="_blank" rel="noopener noreferrer">
                  {b.cta}
                </Button>
                <Button to={b.to} variant="secondary" className="px-5 py-2.5 text-sm">
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SiteLayout>
  )
}

export const Head = () => <Seo title="Brands" pathname="/brands" />