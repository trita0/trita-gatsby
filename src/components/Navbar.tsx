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
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl">
      <div className="flex items-center justify-between rounded-full border border-ink-950/10 bg-white/90 px-2 py-2 shadow-lift backdrop-blur-md transition-all hover:bg-white">
        <div className="flex items-center gap-2 pl-3">
          <Link to="/" className="group flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sand-100 shadow-soft transition group-hover:scale-105">
              <Logo className="h-7 w-7" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight text-ink-950">
              {siteTitle}
            </span>
          </Link>
        </div>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group relative flex items-center rounded-full px-4 py-2 font-ui text-sm font-bold text-ink-950/70 transition-all hover:text-ink-950"
              activeClassName="active !bg-marigold-500/20 !text-ink-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 pr-1 lg:hidden">
          <button
            type="button"
            className="flex h-10 items-center justify-center rounded-full border border-ink-950/5 bg-ink-950/5 px-5 font-ui text-sm font-bold text-ink-950 transition hover:bg-ink-950/10"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsOpen(v => !v)}
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        id="mobile-nav"
        className={`${
          isOpen ? "mt-3 translate-y-0 opacity-100" : "pointer-events-none mt-0 -translate-y-2 opacity-0"
        } overflow-hidden rounded-3xl border border-ink-950/10 bg-white/95 p-2 shadow-lift backdrop-blur-md transition-all duration-300 lg:hidden`}
      >
        <nav className="grid max-h-[70vh] overflow-y-auto gap-1 p-2" aria-label="Mobile">
          {primaryNav.map(item => (
            <Link
              key={item.to}
              to={item.to}
              className="flex items-center justify-between rounded-2xl px-5 py-3 font-ui text-base font-bold text-ink-950/80 transition hover:bg-ink-950/5 hover:text-ink-950"
              activeClassName="!bg-marigold-500/10 !text-ink-950"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
