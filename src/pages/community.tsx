import * as React from "react"

import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"
import Card from "../components/ui/Card"

export default function CommunityPage() {
  return (
    <SiteLayout>
      <header className="space-y-4">
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink-950">Community & Impact</h1>
        <p className="max-w-2xl font-body text-lg leading-relaxed text-ink-950/70">
          Working with schools, institutions, cultural organisations, and families.
        </p>
      </header>

      <section className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="transition hover:shadow-lift">
          <div className="font-heading text-lg font-bold text-ink-950">Schools & Institutions</div>
          <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Workshops, sessions, and play-based learning.</p>
        </Card>
        <Card className="transition hover:shadow-lift">
          <div className="font-heading text-lg font-bold text-ink-950">Cultural Organisations</div>
          <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Installations and heritage programming.</p>
        </Card>
        <Card className="transition hover:shadow-lift">
          <div className="font-heading text-lg font-bold text-ink-950">Families & Communities</div>
          <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Intergenerational play and community events.</p>
        </Card>
      </section>

      <section className="mt-16">
        <h2 className="font-heading text-3xl font-bold text-ink-950">Testimonials</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card className="transition hover:shadow-lift bg-white/50 italic">
            <div className="font-body text-lg font-medium text-ink-950 leading-relaxed">“Our kids discovered strategy and culture together.”</div>
            <p className="mt-4 font-caption text-sm font-semibold text-ink-950/60 not-italic uppercase tracking-wider">— Parent, Mysuru</p>
          </Card>
          <Card className="transition hover:shadow-lift bg-white/50 italic">
            <div className="font-body text-lg font-medium text-ink-950 leading-relaxed">“A beautiful blend of heritage and learning.”</div>
            <p className="mt-4 font-caption text-sm font-semibold text-ink-950/60 not-italic uppercase tracking-wider">— School Partner</p>
          </Card>
        </div>
      </section>
    </SiteLayout>
  )
}

export const Head = () => <Seo title="Community & Impact" pathname="/community" />
