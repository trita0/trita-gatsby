import * as React from "react"

import SiteLayout from "../../layouts/SiteLayout"
import Seo from "../../components/Seo"
import Card from "../../components/ui/Card"
import Button from "../../components/ui/Button"

const programs = [`Summer Challenges`, `Thematic Camps`, `Family Learning Programs`]

const themes = [
  `UnCamp Quest`,
  `UnCamp Sanskriti`,
  `UnCamp Innovators`,
  `UnCamp Wordsmiths`,
  `UnCamp Move`,
  `UnCamp Junior`,
]

export default function UnCampPage() {
  return (
    <SiteLayout>
      <header className="space-y-6">
        <div>
          <button type="button" onClick={() => window.history.back()} aria-label="Back" className="group">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="transition group-hover:-translate-x-1"><path d="m12 19-7-7 7-7"/></svg>
              <span className="font-ui text-sm font-semibold text-ink-950/70 group-hover:text-ink-950 transition">Brand / UnCamp</span>
            </div>
          </button>
        </div>
        <div className="flex items-center gap-4">
          <img
            src="/uncamp-logo.png"
            alt="UnCamp logo"
            className="h-20 w-auto max-w-40 object-contain"
          />
          <h1 className="font-ui text-4xl font-extrabold tracking-tight text-ink-950">UnCamp</h1>
        </div>
        <p className="max-w-2xl font-body text-lg leading-relaxed text-ink-950/70">
          Thematic camps and challenges that blend culture, curiosity, and creativity.
        </p>
        <div className="pt-2">
          <Button href="https://uncamp.in" target="blank" rel="noopener noreferrer" className="px-8 py-3 text-base">
            Visit uncamp.in
          </Button>
        </div>
      </header>

      <section className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="transition hover:shadow-lift">
          <div className="font-heading text-lg font-bold text-ink-950">Thematic Camps</div>
          <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Immersive learning experiences for children and adults.</p>
        </Card>
        <Card className="transition hover:shadow-lift">
          <div className="font-heading text-lg font-bold text-ink-950">Curiosity Challenges</div>
          <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Self-paced discovery quests.</p>
        </Card>
        <Card className="transition hover:shadow-lift">
          <div className="font-heading text-lg font-bold text-ink-950">Creative Workshops</div>
          <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Hands-on building and culture exploration.</p>
        </Card>
        <Card className="transition hover:shadow-lift">
          <div className="font-heading text-lg font-bold text-ink-950">Community Challenges</div>
          <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Collaborative problem-solving through play.</p>
        </Card>
      </section>
    </SiteLayout>
  )
}

export const Head = () => <Seo title="UnCamp" pathname="/brands/uncamp" />
