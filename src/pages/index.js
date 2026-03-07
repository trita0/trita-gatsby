import * as React from "react"
import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"

import HeroSection from "../sections/home/HeroSection"
import EcosystemSection from "../sections/home/EcosystemSection"
import WhatWeDoSection from "../sections/home/WhatWeDoSection"
import ImpactMetricsSection from "../sections/home/ImpactMetricsSection"
import CtaSection from "../sections/home/CtaSection"

const IndexPage = () => {
  return (
    <SiteLayout>
      <HeroSection />
      <section className="mt-14">
        <h2 className="font-heading text-3xl font-bold text-ink-950">About Trita</h2>
        <p className="mt-3 max-w-2xl font-body text-lg leading-relaxed text-ink-950/70">
          Trita is a culture-and-play studio building games, programs, and digital experiences rooted in Indian
          knowledge systems.
        </p>
      </section>
      <EcosystemSection />
      <WhatWeDoSection />
      <ImpactMetricsSection />
      <section className="mt-14">
        <h2 className="font-heading text-3xl font-bold text-ink-950">Featured Work</h2>
        <p className="mt-3 max-w-2xl font-body text-lg leading-relaxed text-ink-950/70">
          Placeholder: experiential game installations, events, programs, and media mentions.
        </p>
      </section>
      <CtaSection />
    </SiteLayout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
