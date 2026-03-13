import * as React from "react"

import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"
import Button from "../components/ui/Button"

const sections = [
  { id: `schools`, label: `Schools & Montessori` },
  { id: `corporates`, label: `Corporates` },
  { id: `cultural`, label: `Cultural Institutions` },
  { id: `retail`, label: `Retail & Distribution` },
  { id: `research`, label: `Research` },
]

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
}

const schoolPrograms = [
  {
    number: `01`,
    title: `Annual Game Festivals`,
    desc: `Schoolwide events bringing traditional Indian games to students across grades — fostering cultural pride and healthy competition.`,
  },
  {
    number: `02`,
    title: `Classroom Workshops`,
    desc: `Structured sessions that integrate traditional games into learning — building math, strategy, patience, and collaboration skills.`,
  },
  {
    number: `03`,
    title: `Game Leagues & Tournaments`,
    desc: `Inter-school and intra-school leagues where students compete through traditional board games across the year.`,
  },
  {
    number: `04`,
    title: `Montessori Game Kits`,
    desc: `Curated game sets designed for early childhood environments — tactile, culturally rooted, and developmentally appropriate.`,
  },
]

const corporatePrograms = [
  {
    number: `01`,
    title: `Holiday & Festive Events`,
    desc: `Celebrate Diwali, New Year, and other occasions with traditional games that add cultural depth to company gatherings.`,
  },
  {
    number: `02`,
    title: `Corporate Retreats`,
    desc: `Team-based games that foster strategic thinking, collaboration, and leadership — with a sense of nostalgia built in.`,
  },
  {
    number: `03`,
    title: `Employee Recreation Programs`,
    desc: `Transform break areas and recreation centers with traditional games from across India. Help employees connect and unwind.`,
  },
  {
    number: `04`,
    title: `Family Day Events`,
    desc: `Inclusive games that bring all ages together — ideal for employee family days and community-building events.`,
  },
  {
    number: `05`,
    title: `Corporate Gifting`,
    desc: `Unique, heritage-rich gifts for festivals and milestones. Long-lasting, meaningful, and far beyond a traditional gift box.`,
  },
]

const otherFormats = [
  {
    number: `01`,
    title: `Cultural Institutions`,
    desc: `Museum exhibits, gallery installations, heritage festivals, and community programming that bring traditional games to life for the public.`,
    href: `https://rollthedice.in/pages/experiential-game-sets`,
  },
  {
    number: `02`,
    title: `Retail & Distribution`,
    desc: `Bring traditional Indian games to stores, gift shops, libraries, and community spaces. Wholesale and retail partnership formats available.`,
    href: `https://rollthedice.in/pages/wholesale-retail`,
  },
  {
    number: `03`,
    title: `NGOs & Non-Profits`,
    desc: `Special pricing and program support for NGOs working in education, community development, and cultural preservation.`,
    href: `https://rollthedice.in/pages/ngos-non-profits`,
  },
  {
    number: `04`,
    title: `Research Collaborations`,
    desc: `Co-create studies, archives, game documentation projects, and experimental prototypes rooted in India's traditional knowledge systems.`,
    href: `/contact`,
  },
  {
    number: `05`,
    title: `Country Distributors`,
    desc: `Partner with us to bring traditional Indian games to international markets. Distribution partnerships open for multiple regions.`,
    href: `https://rollthedice.in/pages/country-distributors`,
  },
  {
    number: `06`,
    title: `Social Communities`,
    desc: `Game programs for housing societies, cultural clubs, senior communities, and neighbourhood groups that celebrate heritage together.`,
    href: `https://rollthedice.in/pages/social-communities`,
  },
]

export default function CollaboratePage() {
  return (
    <SiteLayout>

      {/* Header */}
      <header className="space-y-4 text-center">
        <h1 className="font-display text-5xl font-bold tracking-tight text-ink-950">Collaborate With Us</h1>
        <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-ink-950/70">
          Schools, corporates, cultural institutions, retail partners, NGOs, and research collaborations — there's a format that fits.
        </p>
      </header>

      {/* Section nav */}
      <nav className="mt-10 flex flex-wrap gap-2">
        {sections.map(s => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className="rounded-2xl border border-ink-950/[0.08] bg-white px-4 py-2 font-ui text-sm font-semibold text-ink-950/60 shadow-soft transition hover:bg-sand-50 hover:text-ink-950"
          >
            {s.label}
          </button>
        ))}
      </nav>

      {/* Schools & Montessori */}
      <section id="schools" className="mt-16 scroll-mt-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-heading text-3xl font-bold text-ink-950">Schools & Montessori</h2>
            <p className="mt-2 font-body text-base leading-relaxed text-ink-950/65">
              Programs and events that bring the heritage of Indian games into classrooms and school culture.
            </p>
          </div>
          <div className="hidden sm:block">
            <Button href="https://rollthedice.in/pages/schools-montessori" variant="secondary" target="_blank" rel="noopener noreferrer">
              Learn more
            </Button>
          </div>
        </div>
        <div className="mt-8 grid gap-0 overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft sm:grid-cols-2">
          {schoolPrograms.map((p, i) => (
            <div
              key={p.title}
              className={`flex flex-col gap-2 p-7 transition hover:bg-sand-50
                ${i % 2 === 0 ? "sm:border-r border-ink-950/[0.08]" : ""}
                ${i < schoolPrograms.length - 2 ? "border-b border-ink-950/[0.08]" : ""}
                ${i === schoolPrograms.length - 1 && schoolPrograms.length % 2 !== 0 ? "sm:border-r-0" : ""}`}
            >
              <span className="font-ui text-xs font-medium tracking-widest text-ink-950/25">{p.number}</span>
              <h3 className="font-heading text-lg font-bold text-ink-950">{p.title}</h3>
              <p className="font-caption text-sm leading-relaxed text-ink-950/65">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 sm:hidden">
          <Button href="https://rollthedice.in/pages/schools-montessori" variant="secondary" target="_blank" rel="noopener noreferrer">
            Learn more
          </Button>
        </div>
      </section>

      {/* Corporates */}
      <section id="corporates" className="mt-16 scroll-mt-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-heading text-3xl font-bold text-ink-950">Corporates</h2>
            <p className="mt-2 font-body text-base leading-relaxed text-ink-950/65">
              Team play, cultural events, gifting, and recreation programs designed for the workplace.
            </p>
          </div>
          <div className="hidden sm:block">
            <Button href="https://rollthedice.in/pages/corporate-engagements" variant="secondary" target="_blank" rel="noopener noreferrer">
              Learn more
            </Button>
          </div>
        </div>
        <div className="mt-8 grid gap-0 overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft sm:grid-cols-2 lg:grid-cols-3">
          {corporatePrograms.map((p, i) => (
            <div
              key={p.title}
              className={`flex flex-col gap-2 p-7 transition hover:bg-sand-50
                ${i % 3 !== 2 ? "lg:border-r border-ink-950/[0.08]" : ""}
                ${i % 2 === 0 ? "sm:border-r border-ink-950/[0.08] lg:border-r-0" : ""}
                ${i < corporatePrograms.length - 3 ? "lg:border-b border-ink-950/[0.08]" : ""}
                ${i < corporatePrograms.length - 2 ? "sm:border-b border-ink-950/[0.08] lg:border-b-0" : ""}
                border-b border-ink-950/[0.08] last:border-b-0`}
            >
              <span className="font-ui text-xs font-medium tracking-widest text-ink-950/25">{p.number}</span>
              <h3 className="font-heading text-lg font-bold text-ink-950">{p.title}</h3>
              <p className="font-caption text-sm leading-relaxed text-ink-950/65">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 sm:hidden">
          <Button href="https://rollthedice.in/pages/corporate-engagements" variant="secondary" target="_blank" rel="noopener noreferrer">
            Learn more
          </Button>
        </div>
      </section>

      {/* Other formats — Cultural, Retail, Research, etc. */}
      <section id="cultural" className="mt-16 scroll-mt-28">
        <div>
          <h2 className="font-heading text-3xl font-bold text-ink-950">More Ways to Collaborate</h2>
          <p className="mt-2 font-body text-base leading-relaxed text-ink-950/65">
            Cultural institutions, NGOs, retail partners, researchers, distributors, and community groups.
          </p>
        </div>
        <div className="mt-8 grid gap-0 overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft sm:grid-cols-2 lg:grid-cols-3">
          {otherFormats.map((f, i) => (
            <a
              key={f.title}
              href={f.href}
              target={f.href.startsWith("http") ? "_blank" : undefined}
              rel={f.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`group flex flex-col gap-2 p-7 transition hover:bg-sand-50 no-underline
                ${i % 3 !== 2 ? "lg:border-r border-ink-950/[0.08]" : ""}
                ${i % 2 === 0 ? "sm:border-r border-ink-950/[0.08] lg:border-r-0" : ""}
                ${i < otherFormats.length - 3 ? "lg:border-b border-ink-950/[0.08]" : ""}
                ${i < otherFormats.length - 2 ? "sm:border-b border-ink-950/[0.08] lg:border-b-0" : ""}
                border-b border-ink-950/[0.08] last:border-b-0`}
            >
              <div className="flex items-center justify-between">
                <span className="font-ui text-xs font-medium tracking-widest text-ink-950/25">{f.number}</span>
                <span className="font-ui text-xs text-ink-950/25 transition group-hover:text-ink-950/50">→</span>
              </div>
              <h3 className="font-heading text-lg font-bold text-ink-950 transition group-hover:text-marigold-600">{f.title}</h3>
              <p className="font-caption text-sm leading-relaxed text-ink-950/65">{f.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="research" className="mt-16 scroll-mt-28">
        <div className="relative overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-marigold-500/20 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-indigo-600/15 blur-3xl" />
          <div className="relative grid gap-0 lg:grid-cols-[1fr_auto]">
            <div className="flex flex-col justify-between gap-8 p-8 sm:p-12">
              <div className="space-y-4">
                <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-ink-950 sm:text-5xl">
                  Ready to get <span className="text-ink-950">started?</span>
                </h2>
                <p className="max-w-lg font-body text-base leading-relaxed text-ink-950/65">
                  Fill out our contact form or email us directly and our team will get back to you within 1–2 working days to explore options and plan your collaboration.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button to="/contact" className="px-8 py-3 text-base">Use contact form</Button>
                <Button variant="secondary" href="mailto:hello@trita.example" className="px-8 py-3 text-base">
                  Email us
                </Button>
              </div>
            </div>
            <div className="flex flex-col justify-center border-t border-ink-950/[0.08] lg:border-l lg:border-t-0">
              <div className="px-8 pb-4 pt-6 lg:pt-8">
                <span className="font-ui text-xs font-medium uppercase tracking-widest text-ink-950/30">We work with</span>
              </div>
              {[`Schools & Montessori`, `Corporates`, `Cultural Institutions`, `NGOs & Non-Profits`, `Retail Partners`, `Researchers`].map((a, i, arr) => (
                <div
                  key={a}
                  className={`flex items-center gap-3 px-8 py-4 ${i !== arr.length - 1 ? "border-b border-ink-950/[0.08]" : "pb-8"}`}
                >
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-marigold-500" />
                  <span className="font-heading text-base font-semibold text-ink-950">{a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </SiteLayout>
  )
}

export const Head = () => <Seo title="Collaborate" pathname="/collaborate" />