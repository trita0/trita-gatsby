import * as React from "react"
import { Link } from "gatsby"

import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"

const SecondPage = () => (
  <SiteLayout>
    <h1 className="font-display text-4xl font-bold tracking-tight text-ink-950">Hi from the second page</h1>
    <p className="mt-4 font-body text-lg leading-relaxed text-ink-950/70">Welcome to page 2</p>
    <Link to="/" className="mt-6 inline-block font-ui text-sm font-bold text-marigold-500 hover:text-marigold-600 transition">Go back to the homepage</Link>
  </SiteLayout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
