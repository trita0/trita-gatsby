import * as React from "react"
import { Link } from "gatsby"

import SiteLayout from "./SiteLayout"
import Seo from "../components/Seo"
import Button from "../components/ui/Button"

interface BrandPageLayoutProps {
  title: string
  subtitle: string
  logo: string
  website?: string
  description: React.ReactNode
  children: React.ReactNode
}

export default function BrandPageLayout({
  title,
  subtitle,
  logo,
  website,
  description,
  children,
}: BrandPageLayoutProps) {
  return (
    <SiteLayout>
      <Seo title={title} pathname={`/brands/${title.toLowerCase().replace(/\s/g, "-")}`} />
      <header className="space-y-6">
        <div>
          <Link to="/brands" className="group flex w-fit items-center gap-2 transition-all active:opacity-70">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition group-hover:-translate-x-1"
            >
              <path d="m12 19-7-7 7-7" />
            </svg>
            <span className="font-ui text-sm font-semibold text-ink-950/70 transition-all group-hover:text-ink-950">
              {subtitle}
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <img src={logo} alt={`${title} logo`} className="h-20 w-auto max-w-40 object-contain" />
          <h1 className="font-ui text-4xl font-extrabold tracking-tight text-ink-950">{title}</h1>
        </div>
        <div className="max-w-2xl font-body text-lg leading-relaxed text-ink-950/70">{description}</div>
        {website && (
          <div className="pt-2">
            <Button href={website} target="_blank" rel="noopener noreferrer" className="px-8 py-3 text-base">
              Visit {new URL(website).hostname}
            </Button>
          </div>
        )}
      </header>

      <section className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{children}</section>
    </SiteLayout>
  )
}
