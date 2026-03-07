import * as React from "react"

import SiteLayout from "../../layouts/SiteLayout"
import Seo from "../../components/Seo"
import Card from "../../components/ui/Card"
import Button from "../../components/ui/Button"

export default function RollTheDicePage() {
  return (
    <SiteLayout>
      <header className="space-y-6">
        <div>
          <button type="button" onClick={() => window.history.back()} aria-label="Back" className="group">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="transition group-hover:-translate-x-1"><path d="m12 19-7-7 7-7"/></svg>
              <span className="font-ui text-sm font-semibold text-ink-950/70 group-hover:text-ink-950 transition">Brand / Roll the Dice</span>
            </div>
          </button>
        </div>
        <div className="flex items-center gap-4">
          <img
            src="/Roll the Dice Logo (1200 x 628 px).png"
            alt="Roll the Dice logo"
            className="h-20 w-auto max-w-40 object-contain"
          />
          <h1 className="font-ui text-4xl font-extrabold tracking-tight text-ink-950">Roll the Dice</h1>
        </div>
        <p className="max-w-2xl font-body text-lg leading-relaxed text-ink-950/70">
          Experiential game collections and installations designed for families, schools, and communities.
        </p>
        <div className="pt-2">
          <Button href="https://rollthedice.in" target="_blank" rel="noopener noreferrer" className="px-8 py-3 text-base">
            Visit rollthedice.in
          </Button>
        </div>
      </header>

      <section className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="transition hover:shadow-lift">
          <div className="font-heading text-lg font-bold text-ink-950">Game Collections</div>
          <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Curated sets of traditional and contemporary Indian games.</p>
        </Card>
        <Card className="transition hover:shadow-lift">
          <div className="font-heading text-lg font-bold text-ink-950">Experiential Game Sets</div>
          <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Large-format play for installations and festivals.</p>
        </Card>
        <Card className="transition hover:shadow-lift">
          <div className="font-heading text-lg font-bold text-ink-950">Workshops</div>
          <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Facilitated learning and play sessions.</p>
        </Card>
        <Card className="transition hover:shadow-lift">
          <div className="font-heading text-lg font-bold text-ink-950">Corporate Programs</div>
          <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Team building through strategy and culture.</p>
        </Card>
        <Card className="transition hover:shadow-lift">
          <div className="font-heading text-lg font-bold text-ink-950">Experience Centre</div>
          <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Visit and play (placeholder details).</p>
        </Card>
      </section>
    </SiteLayout>
  )
}

export const Head = () => <Seo title="Roll the Dice" pathname="/brands/roll-the-dice" />
