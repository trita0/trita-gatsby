import * as React from "react"

import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"

export default function PrivacyPage() {
  return (
    <SiteLayout>
      <h1 className="font-display text-4xl font-bold tracking-tight text-ink-950">Privacy Policy</h1>
      <p className="mt-4 max-w-2xl font-body text-lg leading-relaxed text-ink-950/70">
        Placeholder privacy policy content. Add your data collection, cookie, and form submission details here.
      </p>
    </SiteLayout>
  )
}

export const Head = () => <Seo title="Privacy Policy" pathname="/privacy" />
