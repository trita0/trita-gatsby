import * as React from "react"
import { Link } from "gatsby"

import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"

const UsingSSR = ({ serverData }) => {
  return (
    <SiteLayout>
      <h1 className="font-display text-4xl font-bold tracking-tight text-ink-950">
        This page is <b>rendered server-side</b>
      </h1>
      <div className="mt-6 space-y-4 font-body text-lg leading-relaxed text-ink-950/70">
        <p>
          This page is rendered server side every time the page is requested.
          Reload it to see a(nother) random photo from{" "}
          <code>dog.ceo/api/breed/shiba/images/random</code>:
        </p>
        <div className="overflow-hidden rounded-2xl border border-ink-950/10 shadow-soft w-fit">
          <img
            style={{ width: "320px" }}
            alt="A random dog"
            src={serverData.message}
          />
        </div>
        <p>
          To learn more, head over to our{" "}
          <a href="https://www.gatsbyjs.com/docs/reference/rendering-options/server-side-rendering/" className="font-semibold text-marigold-500 hover:text-marigold-600 transition">
            documentation about Server Side Rendering
          </a>
          .
        </p>
      </div>
      <Link to="/" className="mt-8 inline-block font-ui text-sm font-bold text-marigold-500 hover:text-marigold-600 transition">Go back to the homepage</Link>
    </SiteLayout>
  )
}

export const Head = () => <Seo title="Using SSR" />

export default UsingSSR

export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breed/shiba/images/random`)
    if (!res.ok) {
      throw new Error(`Response failed`)
    }
    return {
      props: await res.json(),
    }
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    }
  }
}
