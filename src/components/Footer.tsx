import * as React from "react"
import { Link } from "gatsby"

import { footerLinks } from "../utils/routes"

export default function Footer() {
  return (
    <footer className="border-t border-ink-950/10 bg-sand-100 text-ink-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div className="space-y-4">
          <div className="font-display text-xl font-bold">Trita</div>
          <p className="font-body text-sm leading-relaxed text-ink-950/70">
            Reimagining Indian culture through play, learning, and technology.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              className="font-ui text-sm font-semibold text-ink-950/70 no-underline transition hover:text-ink-950 hover:no-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="border-b-2 border-transparent pb-0.5 transition hover:border-marigold-500">Instagram</span>
            </a>
            <a
              href="https://linkedin.com"
              className="font-ui text-sm font-semibold text-ink-950/70 no-underline transition hover:text-ink-950 hover:no-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="border-b-2 border-transparent pb-0.5 transition hover:border-marigold-500">LinkedIn</span>
            </a>
            <a
              href="https://youtube.com"
              className="font-ui text-sm font-semibold text-ink-950/70 no-underline transition hover:text-ink-950 hover:no-underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="border-b-2 border-transparent pb-0.5 transition hover:border-marigold-500">YouTube</span>
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <div className="font-heading text-lg font-bold">Quick Links</div>
          <nav className="grid gap-2" aria-label="Footer">
            {footerLinks.map(item => (
              <Link
                key={item.to}
                to={item.to}
                className="group inline-flex w-fit font-ui text-sm font-semibold text-ink-950/70 no-underline transition hover:text-ink-950 hover:no-underline"
              >
                <span className="border-b-2 border-transparent pb-0.5 transition group-hover:border-marigold-500">
                  {item.label}
                </span>
              </Link>
            ))}
            <Link
              to="/privacy"
              className="group inline-flex w-fit font-ui text-sm font-semibold text-ink-950/70 no-underline transition hover:text-ink-950 hover:no-underline"
            >
              <span className="border-b-2 border-transparent pb-0.5 transition group-hover:border-marigold-500">
                Privacy Policy
              </span>
            </Link>
          </nav>
        </div>

        <div className="space-y-4">
          <div className="font-heading text-lg font-bold">Contact</div>
          <div className="space-y-2 font-caption text-sm text-ink-950/70">
            <div className="leading-relaxed">1 Floor, "Samputa", 8th Cross, Adipampa Road, V V Mohalla, Mysore 570002</div>
            <div>
              <a
                className="group inline-flex w-fit font-ui font-semibold text-ink-950/70 no-underline transition hover:text-ink-950 hover:no-underline"
                href="mailto:hello@trita.example"
              >
                <span className="border-b-2 border-transparent pb-0.5 transition group-hover:border-marigold-500">
                  hello@trita.example
                </span>
              </a>
            </div>
            <div>
              <a
                className="group inline-flex w-fit font-ui font-semibold text-ink-950/70 no-underline transition hover:text-ink-950 hover:no-underline"
                href="tel:+910000000000"
              >
                <span className="border-b-2 border-transparent pb-0.5 transition group-hover:border-marigold-500">
                  +91 00000 00000
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-ink-950/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 font-caption text-xs font-medium text-ink-950/60 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Trita. All rights reserved.</div>
          <div className="text-ink-950/60">Built by Trita.</div>
        </div>
      </div>
    </footer>
  )
}
