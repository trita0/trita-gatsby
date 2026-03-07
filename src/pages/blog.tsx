import * as React from "react"

import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"
import Card from "../components/ui/Card"

export default function BlogIndexPage() {
  return (
    <SiteLayout>
      <header className="space-y-4">
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink-950">Blog / Insights</h1>
        <p className="max-w-2xl font-body text-lg leading-relaxed text-ink-950/70">
          Stories behind Indian games, culture and play, parenting, strategy, and festival traditions.
        </p>
      </header>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <Card className="transition hover:shadow-lift">
          <div className="font-heading text-lg font-bold text-ink-950">Sample post</div>
          <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">
            MDX templates + pagination will be enabled next. A sample MDX file is already in `src/content/blog`.
          </p>
        </Card>
      </section>
    </SiteLayout>
  )
}

export const Head = () => <Seo title="Blog" pathname="/blog" />
