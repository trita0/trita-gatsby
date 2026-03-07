import * as React from "react"

import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"
import Card from "../components/ui/Card"

export default function AboutPage() {
  return (
    <SiteLayout>
      <header className="space-y-4">
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink-950">About Trita</h1>
        <p className="max-w-2xl font-body text-lg leading-relaxed text-ink-950/70">
          Trita brings together cultural research, thoughtful design, and technology to create playful learning
          experiences rooted in Indian heritage.
        </p>
      </header>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        <Card className="transition hover:shadow-lift">
          <div className="font-heading text-lg font-bold text-ink-950">Our Story</div>
          <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Placeholder story narrative for Trita.</p>
        </Card>
        <Card className="transition hover:shadow-lift">
          <div className="font-heading text-lg font-bold text-ink-950">Vision</div>
          <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">A future where culture is lived through play.</p>
        </Card>
        <Card className="transition hover:shadow-lift">
          <div className="font-heading text-lg font-bold text-ink-950">Mission</div>
          <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">
            Design programs, games, and platforms that make cultural learning accessible and joyful.
          </p>
        </Card>
      </section>

      <section className="mt-16">
        <h2 className="font-heading text-3xl font-bold text-ink-950">Founders</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <Card className="transition hover:shadow-lift">
            <div className="font-ui text-xl font-bold text-ink-950">Tanushri SN</div>
            <div className="mt-1 font-caption text-sm font-semibold text-ink-950/70 uppercase tracking-wide">Founder & CEO</div>
          </Card>
          <Card className="transition hover:shadow-lift">
            <div className="font-ui text-xl font-bold text-ink-950">Shashishekhar S</div>
            <div className="mt-1 font-caption text-sm font-semibold text-ink-950/70 uppercase tracking-wide">Co-Founder & COO</div>
          </Card>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-heading text-3xl font-bold text-ink-950">Our Approach</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <Card className="transition hover:shadow-lift">
            <div className="font-heading text-lg font-bold text-ink-950">Research</div>
            <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Games documentation, knowledge systems, field learning.</p>
          </Card>
          <Card className="transition hover:shadow-lift">
            <div className="font-heading text-lg font-bold text-ink-950">Design</div>
            <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Human-centered facilitation, experience design, iteration.</p>
          </Card>
          <Card className="transition hover:shadow-lift">
            <div className="font-heading text-lg font-bold text-ink-950">Technology</div>
            <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Digital preservation and playful platforms.</p>
          </Card>
        </div>
      </section>
    </SiteLayout>
  )
}

export const Head = () => <Seo title="About" pathname="/about" />
