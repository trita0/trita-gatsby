import * as React from "react"

import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"
import Card from "../components/ui/Card"

export default function CareersPage() {
  return (
    <SiteLayout>
      <header className="space-y-4">
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink-950">Careers</h1>
        <p className="max-w-2xl font-body text-lg leading-relaxed text-ink-950/70">
          Internship opportunities, event facilitators, developers, and designers.
        </p>
      </header>

      <section className="mt-12 grid gap-6 sm:grid-cols-2">
        <Card className="transition hover:shadow-lift">
          <div className="font-heading text-lg font-bold text-ink-950">Internships</div>
          <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Research, facilitation, design, and ops roles.</p>
        </Card>
        <Card className="transition hover:shadow-lift">
          <div className="font-heading text-lg font-bold text-ink-950">Event Facilitators</div>
          <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Lead workshops, leagues, and community play sessions.</p>
        </Card>
        <Card className="transition hover:shadow-lift">
          <div className="font-heading text-lg font-bold text-ink-950">Developers</div>
          <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Build digital game experiences and platforms.</p>
        </Card>
        <Card className="transition hover:shadow-lift">
          <div className="font-heading text-lg font-bold text-ink-950">Designers</div>
          <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Game UX, visual design, and storytelling.</p>
        </Card>
      </section>

      <section className="mt-16 rounded-3xl border border-ink-950/10 bg-white p-8 shadow-soft sm:p-12">
        <h2 className="font-heading text-3xl font-bold text-ink-950">Application Form</h2>
        <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-ink-950/70">
          Placeholder UI for now. This will submit to a Resend-backed Gatsby Function once dependencies are installed.
        </p>
      </section>
    </SiteLayout>
  )
}

export const Head = () => <Seo title="Careers" pathname="/careers" />
