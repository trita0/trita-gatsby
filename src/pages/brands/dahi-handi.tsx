import * as React from "react"

import SiteLayout from "../../layouts/SiteLayout"
import Seo from "../../components/Seo"
import Card from "../../components/ui/Card"

export default function DahiHandiPage() {
  return (
    <SiteLayout>
      <header className="space-y-6">
        <div>
          <button type="button" onClick={() => window.history.back()} aria-label="Back" className="group">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="transition group-hover:-translate-x-1"><path d="m12 19-7-7 7-7"/></svg>
              <span className="font-ui text-sm font-semibold text-ink-950/70 group-hover:text-ink-950 transition">Brand / Dahi Handi</span>
            </div>
          </button>
        </div>
        <div className="flex items-center gap-4">
          <img
            src="/dahi-handi-game.png"
            alt="Dahi Handi logo"
            className="h-20 w-auto max-w-40 object-contain"
          />
          <h1 className="font-ui text-4xl font-extrabold tracking-tight text-ink-950">Dahi Handi</h1>
        </div>
        <p className="max-w-2xl font-body text-lg leading-relaxed text-ink-950/70">
          Cultural festivals, community play, youth engagement, competitions, and heritage celebrations.
        </p>
      </header>

      <section className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="transition hover:shadow-lift">
          <div className="font-heading text-lg font-bold text-ink-950">Cultural festivals</div>
          <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Festival activations and play-led cultural programming.</p>
        </Card>
        <Card className="transition hover:shadow-lift">
          <div className="font-heading text-lg font-bold text-ink-950">Community play</div>
          <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Neighborhood events that bring people together.</p>
        </Card>
        <Card className="transition hover:shadow-lift">
          <div className="font-heading text-lg font-bold text-ink-950">Youth engagement</div>
          <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Leadership, teamwork, and cultural participation.</p>
        </Card>
        <Card className="transition hover:shadow-lift">
          <div className="font-heading text-lg font-bold text-ink-950">Competitions</div>
          <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Playful challenges and festival competitions.</p>
        </Card>
        <Card className="transition hover:shadow-lift">
          <div className="font-heading text-lg font-bold text-ink-950">Heritage celebrations</div>
          <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Document and showcase local traditions.</p>
        </Card>
      </section>
    </SiteLayout>
  )
}

export const Head = () => <Seo title="Dahi Handi" pathname="/brands/dahi-handi" />
