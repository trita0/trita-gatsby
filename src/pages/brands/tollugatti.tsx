import * as React from "react"

import SiteLayout from "../../layouts/SiteLayout"
import Seo from "../../components/Seo"
import Card from "../../components/ui/Card"
import Button from "../../components/ui/Button"

export default function TolluGattiPage() {
  return (
    <SiteLayout>
      <header className="space-y-6">
        <div>
          <button type="button" onClick={() => window.history.back()} aria-label="Back" className="group">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="transition group-hover:-translate-x-1"><path d="m12 19-7-7 7-7"/></svg>
              <span className="font-ui text-sm font-semibold text-ink-950/70 group-hover:text-ink-950 transition">Brand / TolluGatti</span>
            </div>
          </button>
        </div>
        <div className="flex items-center gap-4">
          <img
            src="/tollugatti-inverse.png"
            alt="TolluGatti logo"
            className="h-20 w-auto max-w-40 object-contain"
          />
          <h1 className="font-ui text-4xl font-extrabold tracking-tight text-ink-950">TolluGatti</h1>
        </div>
        <p className="max-w-2xl font-body text-lg leading-relaxed text-ink-950/70">
          Digital board games, mindful play, companion experiences, and community events.
        </p>
        <div className="pt-2">
          <Button href="https://tollugatti.com" target="_blank" rel="noopener noreferrer" className="px-8 py-3 text-base">
            Visit tollugatti.com
          </Button>
        </div>
      </header>

      <section className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="transition hover:shadow-lift">
          <div className="font-heading text-lg font-bold text-ink-950">Digital Board Games</div>
          <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Mobile/web-first board game experiences.</p>
        </Card>
        <Card className="transition hover:shadow-lift">
          <div className="font-heading text-lg font-bold text-ink-950">UnCamp Challenges</div>
          <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Challenge-based learning journeys.</p>
        </Card>
        <Card className="transition hover:shadow-lift">
          <div className="font-heading text-lg font-bold text-ink-950">Mindful Games</div>
          <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Slow play, reflection, and creativity.</p>
        </Card>
        <Card className="transition hover:shadow-lift">
          <div className="font-heading text-lg font-bold text-ink-950">Companion App</div>
          <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Play support and content (placeholder).</p>
        </Card>
        <Card className="transition hover:shadow-lift">
          <div className="font-heading text-lg font-bold text-ink-950">Community Events</div>
          <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Meetups and play circles.</p>
        </Card>
      </section>
    </SiteLayout>
  )
}

export const Head = () => <Seo title="TolluGatti" pathname="/brands/tollugatti" />
