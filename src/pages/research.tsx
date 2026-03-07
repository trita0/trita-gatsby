import * as React from "react"

import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"
import Card from "../components/ui/Card"

export default function ResearchPage() {
  return (
    <SiteLayout>
      <header className="space-y-4">
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink-950">Research & Innovation</h1>
        <p className="max-w-2xl font-body text-lg leading-relaxed text-ink-950/70">
          Traditional games research, knowledge systems, and digital preservation.
        </p>
      </header>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        <Card className="transition hover:shadow-lift">
          <div className="font-heading text-lg font-bold text-ink-950">Traditional Games Research</div>
          <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Field research, documentation, and revival.</p>
        </Card>
        <Card className="transition hover:shadow-lift">
          <div className="font-heading text-lg font-bold text-ink-950">Knowledge Systems</div>
          <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Mapping cultural context, learning methods, and play.</p>
        </Card>
        <Card className="transition hover:shadow-lift">
          <div className="font-heading text-lg font-bold text-ink-950">Digital Preservation</div>
          <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Digitization approaches for wider access and continuity.</p>
        </Card>
      </section>

      <section className="mt-16">
        <h2 className="font-heading text-3xl font-bold text-ink-950">Experimental Projects</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <Card className="transition hover:shadow-lift">
            <div className="font-heading text-lg font-bold text-ink-950">Cultural gaming platforms</div>
            <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Prototype platforms that connect play with learning.</p>
          </Card>
          <Card className="transition hover:shadow-lift">
            <div className="font-heading text-lg font-bold text-ink-950">Interactive storytelling</div>
            <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Narrative-led game concepts for cultural immersion.</p>
          </Card>
          <Card className="transition hover:shadow-lift">
            <div className="font-heading text-lg font-bold text-ink-950">AR/Drone learning concepts</div>
            <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Exploratory concepts for future learning experiences.</p>
          </Card>
        </div>
      </section>
    </SiteLayout>
  )
}

export const Head = () => <Seo title="Research & Innovation" pathname="/research" />
