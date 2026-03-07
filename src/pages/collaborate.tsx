import * as React from "react"

import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"
import Card from "../components/ui/Card"
import Button from "../components/ui/Button"

export default function CollaboratePage() {
  return (
    <SiteLayout>
      <header className="space-y-4">
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink-950">Collaborate With Us</h1>
        <p className="max-w-2xl font-body text-lg leading-relaxed text-ink-950/70">
          Schools, cultural institutions, corporates, retail partners, and research collaborations.
        </p>
      </header>

      <section className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="transition hover:shadow-lift">
          <div className="font-heading text-lg font-bold text-ink-950">Schools</div>
          <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Workshops, leagues, and culture connect sessions.</p>
        </Card>
        <Card className="transition hover:shadow-lift">
          <div className="font-heading text-lg font-bold text-ink-950">Cultural Institutions</div>
          <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Exhibits, installations, and community programming.</p>
        </Card>
        <Card className="transition hover:shadow-lift">
          <div className="font-heading text-lg font-bold text-ink-950">Corporates</div>
          <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Team play, leadership workshops, and events.</p>
        </Card>
        <Card className="transition hover:shadow-lift">
          <div className="font-heading text-lg font-bold text-ink-950">Retail & Distribution</div>
          <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Bring games to stores and community spaces.</p>
        </Card>
        <Card className="transition hover:shadow-lift">
          <div className="font-heading text-lg font-bold text-ink-950">Research Collaborations</div>
          <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Co-create studies, archives, and prototypes.</p>
        </Card>
      </section>

      <section className="mt-16 rounded-3xl border border-ink-950/10 bg-white p-8 shadow-soft sm:p-12">
        <h2 className="font-heading text-3xl font-bold text-ink-950">Collaboration Form</h2>
        <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-ink-950/70">
          Placeholder UI for now. This will submit to a Resend-backed Gatsby Function once dependencies are installed.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button to="/contact" className="px-8 py-3 text-base">Use contact form</Button>
          <Button variant="secondary" href="mailto:hello@trita.example" className="px-8 py-3 text-base">
            Email us
          </Button>
        </div>
      </section>
    </SiteLayout>
  )
}

export const Head = () => <Seo title="Collaborate" pathname="/collaborate" />
