import * as React from "react"
import { Link } from "gatsby"

import { primaryNav } from "../utils/routes"
import Logo from "./Logo"

type NavbarProps = {
  siteTitle: string
}

export default function Navbar({ siteTitle }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-ink-950/10 bg-sand-50/80 backdrop-blur supports-[backdrop-filter]:bg-sand-50/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <Link to="/" className="group inline-flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white/70 shadow-soft ring-1 ring-ink-950/10 transition group-hover:shadow-lift">
              <Logo className="h-8 w-8" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight text-ink-950">
              {siteTitle}
            </span>
          </Link>
        </div>

        <nav className="hidden items-center gap-5 md:flex" aria-label="Primary">
          {primaryNav.map(item => (
            <Link
              key={item.to}
              to={item.to}
              className="group relative font-ui text-sm font-semibold text-ink-950/70 no-underline transition hover:text-ink-950 hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-marigold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-sand-50"
              activeClassName="active text-ink-950"
            >
              <span className="relative">
                {item.label}
                <span className="absolute -bottom-2 left-0 h-0.5 w-0 rounded bg-marigold-500 transition-all duration-200 group-hover:w-full group-[.active]:w-full" />
              </span>
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-ink-950/10 bg-white/60 px-3 py-2 font-ui text-sm font-semibold text-ink-950 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-marigold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-sand-50 md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsOpen(v => !v)}
        >
          Menu
        </button>
      </div>

      <div
        id="mobile-nav"
        className={isOpen ? "block border-t border-ink-950/10 md:hidden" : "hidden md:hidden"}
      >
        <nav className="mx-auto max-w-6xl px-4 py-3 sm:px-6" aria-label="Mobile">
          <div className="grid gap-2">
            {primaryNav.map(item => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-xl px-3 py-2 font-ui text-sm font-semibold text-ink-950/80 hover:bg-ink-950/5 hover:text-ink-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-marigold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-sand-50"
                activeClassName="bg-ink-950/5 text-ink-950"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}
