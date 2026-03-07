import * as React from "react"

import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"
import Card from "../components/ui/Card"

export default function MediaPage() {
  return (
    <SiteLayout>
      <header className="space-y-4">
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink-950">Media & Recognition</h1>
        <p className="max-w-2xl font-body text-lg leading-relaxed text-ink-950/70">
          News, awards, podcasts, talks, and exhibitions.
        </p>
      </header>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <Card className="transition hover:shadow-lift">
          <div className="font-heading text-lg font-bold text-ink-950">News & Features</div>
          <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Placeholder entries for media features.</p>
        </Card>
        <Card className="transition hover:shadow-lift">
          <div className="font-heading text-lg font-bold text-ink-950">Awards & Recognitions</div>
          <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Example: Startup Karnataka Elevate.</p>
        </Card>
        <Card className="transition hover:shadow-lift">
          <div className="font-heading text-lg font-bold text-ink-950">Podcasts & Talks</div>
          <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Placeholder list of talks and interviews.</p>
        </Card>
        <Card className="transition hover:shadow-lift">
          <div className="font-heading text-lg font-bold text-ink-950">Events & Exhibitions</div>
          <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Conference appearances and showcases.</p>
        </Card>
      </section>
    </SiteLayout>
  )
}

export const Head = () => <Seo title="Media & Recognition" pathname="/media" />
