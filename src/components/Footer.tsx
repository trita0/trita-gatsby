import * as React from "react"
import { Link } from "gatsby"

import { footerLinks } from "../utils/routes"

const socials = [
  { label: `Instagram`, href: `https://www.instagram.com/rollthedice_in` },
  { label: `LinkedIn`, href: `https://www.linkedin.com/company/trita-roll-the-dice/` },
  { label: `YouTube`, href: `https://www.youtube.com/@rollthedicein` },
]

const websites = [
  { label: `Roll the Dice`, href: `https://rollthedice.in` },
  { label: `TolluGatti`, href: `https://tollugatti.com` },
  { label: `UnCamp`, href: `https://uncamp.tollugatti.com/` },
  { label: `Dahi Handi`, href: `https://play.google.com/store/apps/details?id=com.tollugatti.dahihandi&hl=en_IN` },
]

export default function Footer() {
  return (
    <footer className="border-t border-ink-950/[0.08] bg-sand-100 text-ink-950">

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft">

          <div className="grid gap-0 md:grid-cols-[2fr_1fr_1fr_1fr]">

            <div className="flex flex-col justify-between gap-6 border-b border-ink-950/[0.08] p-8 md:border-b-0 md:border-r">
              <div className="space-y-3">
                <div className="font-display text-2xl font-bold text-ink-950">Trita</div>
                <p className="font-body text-sm leading-relaxed text-ink-950/60">
                  Reimagining Indian culture through play, learning, and technology.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {socials.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border border-ink-950/[0.08] bg-sand-50 px-3 py-1.5 font-ui text-xs font-semibold text-ink-950/60 no-underline transition-all active:bg-sand-100 active:text-ink-950 lg:hover:bg-sand-100 lg:hover:text-ink-950"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 border-b border-ink-950/[0.08] p-8 md:border-b-0 md:border-r">
              <span className="font-ui text-xs font-medium uppercase tracking-widest text-ink-950/30">
                Quick Links
              </span>
              <nav className="flex flex-col gap-2.5" aria-label="Footer">
                {footerLinks.map(item => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="py-1 font-ui text-sm font-semibold text-ink-950/65 no-underline transition-all active:text-ink-950 lg:hover:text-ink-950"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/privacy"
                  className="py-1 font-ui text-sm font-semibold text-ink-950/65 no-underline transition-all active:text-ink-950 lg:hover:text-ink-950"
                >
                  Privacy Policy
                </Link>
              </nav>
            </div>

            <div className="flex flex-col gap-4 border-b border-ink-950/[0.08] p-8 md:border-b-0 md:border-r">
              <span className="font-ui text-xs font-medium uppercase tracking-widest text-ink-950/30">
                Our Brands
              </span>
              <nav className="flex flex-col gap-2.5" aria-label="Our Websites">
                {websites.map(w => (
                  <a
                    key={w.label}
                    href={w.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-1 font-ui text-sm font-semibold text-ink-950/65 no-underline transition-all active:text-ink-950 lg:hover:text-ink-950"
                  >
                    {w.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-4 p-8">
              <span className="font-ui text-xs font-medium uppercase tracking-widest text-ink-950/30">
                Contact
              </span>
              <div className="flex flex-col gap-3">
                <p className="font-caption text-sm leading-relaxed text-ink-950/60">
                  1 Floor, "Samputa", 8th Cross,<br />
                  Adipampa Road, V V Mohalla,<br />
                  Mysore 570002
                </p>
                <a
                  href="mailto: namaste@trita.in"
                  className="py-1 font-ui text-sm font-semibold text-ink-950/65 no-underline transition-all active:text-ink-950 lg:hover:text-ink-950"
                >
                   namaste@trita.in
                </a>
                <a
                  href="tel:+919342184698"
                  className="py-1 font-ui text-sm font-semibold text-ink-950/65 no-underline transition-all active:text-ink-950 lg:hover:text-ink-950"
                >
                  +91 93421 84698
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 border-t border-ink-950/[0.08] px-8 py-5 md:flex-row md:items-center md:justify-between">
            <span className="font-caption text-xs font-medium text-ink-950/40">
              © {new Date().getFullYear()} Trita. All rights reserved.
            </span>
            <span className="font-caption text-xs font-medium text-ink-950/40">
              Built by{" "}
              <a
                href="https://www.inf.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-ink-950/50 no-underline transition hover:text-marigold-500"
              >
                infinAIte
              </a>
            </span>
          </div>

        </div>
      </div>
    </footer>
  )
}