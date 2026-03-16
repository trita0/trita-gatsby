import * as React from "react"
import { Link } from "gatsby"

import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"

const links = [
  { label: `Home`, to: `/` },
  { label: `Products`, to: `/products` },
  { label: `Programs`, to: `/programs` },
  { label: `About`, to: `/about` },
  { label: `Contact`, to: `/contact` },
]

const NotFoundPage = () => (
  <SiteLayout>
    <div className="relative overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white px-8 py-20 text-center shadow-soft sm:px-16">
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-marigold-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-indigo-600/15 blur-3xl" />

      <div className="relative space-y-6">
        {/* Big 404 */}
        <div className="font-display text-[8rem] font-bold leading-none tracking-tight text-ink-950/[0.06] sm:text-[12rem]">
          404
        </div>

        {/* Heading */}
        <div className="-mt-6 space-y-3">
          <h1 className="font-display text-4xl font-bold tracking-tight text-ink-950 sm:text-5xl">
            Page not found
          </h1>
          <p className="mx-auto max-w-md font-body text-base leading-relaxed text-ink-950/60">
            Looks like this route got lost somewhere between the board and the finish line. Let's get you back in the game.
          </p>
        </div>

        {/* Quick nav */}
        <div className="flex flex-wrap justify-center gap-2 pt-2">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-2xl border border-ink-950/[0.08] bg-white px-4 py-2 font-ui text-sm font-semibold text-ink-950/60 shadow-soft no-underline transition hover:bg-sand-50 hover:text-ink-950"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Primary CTA */}
        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-500 px-8 py-3 font-ui text-base font-semibold text-ink-950 no-underline shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  </SiteLayout>
)

export const Head = () => <Seo title="404 — Page Not Found" />

export default NotFoundPage