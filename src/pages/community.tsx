import * as React from "react"

import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"
import Button from "../components/ui/Button"

// ─── Data ─────────────────────────────────────────────────────────────────────

const communities = [
  {
    number: `01`,
    title: `Schools & Institutions`,
    desc: `Workshops, culture connect sessions, game leagues, and play-based learning programs that bring traditional Indian games into classrooms and school culture.`,
    tag: `Education`,
    href: `/collaborate`,
  },
  {
    number: `02`,
    title: `Cultural Organisations`,
    desc: `Museum exhibits, heritage festivals, and large-format game installations that make traditional games accessible to the public in meaningful settings.`,
    tag: `Culture`,
    href: `/collaborate`,
  },
  {
    number: `03`,
    title: `Families & Communities`,
    desc: `Intergenerational play experiences, community pop-ups, and family game nights that bring people together across generations through traditional games.`,
    tag: `Community`,
    href: `/collaborate`,
  },
  {
    number: `04`,
    title: `Corporates & Workplaces`,
    desc: `Team-building, employee recreation, family day events, and corporate gifting programs rooted in India's rich traditional gaming heritage.`,
    tag: `Corporate`,
    href: `/collaborate`,
  },
  {
    number: `05`,
    title: `NGOs & Non-Profits`,
    desc: `Special pricing and program support for NGOs working in education, cultural preservation, and community development across India.`,
    tag: `Social Impact`,
    href: `https://rollthedice.in/pages/ngos-non-profits`,
  },
  {
    number: `06`,
    title: `Social Communities`,
    desc: `Game programs for housing societies, senior communities, cultural clubs, and neighbourhood groups that celebrate heritage together.`,
    tag: `Grassroots`,
    href: `https://rollthedice.in/pages/social-communities`,
  },
]

const testimonials = [
  {
    quote: `Playing this brought back memories of summer afternoons with my grandmother. We had Chowka Bara etched on the floor of our living room. The game itself is so much fun. Especially if you have a 'gatti'. Buy and play!`,
    author: `Rashmi Canchi`,
    context: `Customer`,
    product: `Chowka Bara`,
  },
  {
    quote: `The quality of the product is outstanding. The fabric used is excellent and durable too. It has been my go-to gift for kids. Applaud the efforts in reviving the lost Indian games.`,
    author: `Rianshi`,
    context: `Customer`,
    product: `Chowka Bara`,
  },
  {
    quote: `I ordered this as a gift for my nephew visiting India in his summer holidays. I wanted to gift him something related to Indian culture. The cloth board is beautiful and easy to play anywhere.`,
    author: `Shopaholic Aunty`,
    context: `Customer`,
    product: `Chowka Bara`,
  },
  {
    quote: `Very beautiful, traditional products. Must buy as gifts, presents, return gifts etc.`,
    author: `Venkat`,
    context: `Customer`,
    product: `Sri Rama Pattabhisheka Puzzle`,
  },
  {
    quote: `This is my choice of gift for kids. Kids love animals and these are our Devata Vahanas. This puzzle is an excellent start in introducing our devatas to kids.`,
    author: `Sachidananda Urs`,
    context: `Customer`,
    product: `Devata Vahanas Puzzle`,
  },
  {
    quote: `Lovely! Thanks for bringing the traditional games alive. My 5-year-old grand daughter loves this game. Thanks for creating something so meaningful.`,
    author: `Uma`,
    context: `Customer`,
    product: `Chowka Bara`,
  },
  {
    quote: `A wonderful initiative. These games enhance competitive and healthy mindful thinking in children and teach skills no textbook can. Thank you for bringing the child in me alive again.`,
    author: `Sushmitha Shravan`,
    context: `Customer`,
    product: `Chowka Bara`,
  },
  {
    quote: `It's so beautifully designed and very well made. Anyone who sees the quality will feel it's totally worth the money. Hope your products reach many more homes and make them happy too.`,
    author: `Chandana Chandrashekhar`,
    context: `Customer`,
    product: `Chowka Bara`,
  },
]

const impactMetrics = [
  { value: `2,500+`, label: `Families engaged` },
  { value: `30+`, label: `Schools partnered` },
  { value: `120+`, label: `Workshops conducted` },
  { value: `62+`, label: `Customer reviews` },
]

// ─── Scroll animation ──────────────────────────────────────────────────────────

function useReveal(threshold = 0.12) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [visible, setVisible] = React.useState(false)
  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, visible }
}

function Reveal({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string
}) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}


export default function CommunityPage() {
  return (
    <SiteLayout>
      <style>{`
        @keyframes pulse-soft {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 30s linear infinite; }
      `}</style>

      {/* ── Hero ── */}
      <header className="relative overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white px-8 py-14 text-center shadow-soft sm:px-16">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-marigold-500/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-indigo-600/15 blur-3xl" />
        <div className="relative space-y-4">
          <div
            className="inline-block rounded-full border border-ink-950/[0.08] bg-sand-50 px-4 py-1.5 font-ui text-xs font-semibold uppercase tracking-widest text-ink-950/40"
            style={{ animation: "pulse-soft 3s ease-in-out infinite" }}
          >
            Schools · Families · Communities
          </div>
          <h1 className="font-display text-5xl font-bold tracking-tight text-ink-950 sm:text-6xl">
            Community &{" "}
            <span className="text-ink-950/35">Impact</span>
          </h1>
          <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-ink-950/65">
            Working with schools, families, cultural organisations, and communities to bring traditional Indian games back into everyday life.
          </p>
        </div>
      </header>

      {/* ── Marquee ── */}
      <div className="mt-10 overflow-hidden rounded-2xl border border-ink-950/[0.08] bg-sand-50 py-3">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, ri) => (
            <span key={ri} className="flex items-center">
              {[`Schools & Institutions`, `Cultural Festivals`, `Family Game Nights`, `NGOs & Non-Profits`, `Corporate Events`, `Community Pop-ups`, `Heritage Play`, `Intergenerational Fun`].map((item, i) => (
                <span key={i} className="mx-6 font-ui text-xs font-semibold uppercase tracking-widest text-ink-950/35">
                  {item}<span className="ml-6 text-marigold-500">◆</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── Who We Work With ── */}
      <section className="mt-16">
        <Reveal>
          <h2 className="font-heading text-3xl font-bold text-ink-950">Who We Work With</h2>
          <p className="mt-2 font-body text-base leading-relaxed text-ink-950/65">
            From classrooms to corporate retreats — bringing traditional games to every kind of community.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-0 overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft sm:grid-cols-2 lg:grid-cols-3">
          {communities.map((c, i) => (
            <Reveal key={c.title} delay={i * 60}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group flex h-full flex-col gap-2 p-7 transition-all duration-200 active:bg-sand-100 lg:hover:bg-sand-50 no-underline
                  ${i % 3 !== 2 ? "lg:border-r border-ink-950/[0.08]" : ""}
                  ${i % 2 === 0 ? "sm:border-r border-ink-950/[0.08] lg:border-r-0" : ""}
                  ${i < 3 ? "lg:border-b border-ink-950/[0.08]" : ""}
                  ${i < communities.length - 2 ? "sm:border-b border-ink-950/[0.08] lg:border-b-0" : ""}
                  border-b border-ink-950/[0.08] last:border-b-0`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-ui text-xs font-medium tracking-widest text-ink-950/25">{c.number}</span>
                  <span className="rounded-full border border-ink-950/[0.12] px-3 py-0.5 font-ui text-xs tracking-wide text-ink-950/45">{c.tag}</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-ink-950 transition group-hover:text-marigold-600">{c.title}</h3>
                <p className="font-caption text-sm leading-relaxed text-ink-950/65">{c.desc}</p>
                <span className="mt-1 font-ui text-xs font-semibold text-ink-950/30 transition group-hover:text-ink-950/60">
                  Learn more →
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Impact Metrics ── */}
      <Reveal>
        <section className="mt-16">
          <div className="grid grid-cols-2 overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft lg:grid-cols-4">
            {impactMetrics.map((m, i) => (
              <div
                key={m.label}
                className={`flex flex-col justify-between gap-3 p-6 transition hover:bg-sand-50 sm:p-8
                  ${i < impactMetrics.length - 1 ? "border-r border-ink-950/[0.08]" : ""}
                  ${i < 2 ? "border-b border-ink-950/[0.08] lg:border-b-0" : ""}`}
              >
                <div className="font-display text-4xl font-bold text-ink-950 sm:text-5xl">{m.value}</div>
                <div className="font-caption text-xs font-semibold uppercase tracking-wider text-ink-950/50">{m.label}</div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* ── Testimonials ── */}
      <section className="mt-16">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="font-heading text-3xl font-bold text-ink-950">What People Say</h2>
              <p className="mt-2 font-body text-base leading-relaxed text-ink-950/65">
                Real words from families, customers, and community members across India.
              </p>
            </div>
            <div className="hidden sm:block">
              <Button
                href="https://rollthedice.in/pages/customer-testimonials"
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                All reviews
              </Button>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 50}>
              <div className="mb-6 break-inside-avoid overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white p-6 shadow-soft">
                {/* Quote mark */}
                <div className="mb-3 font-display text-4xl leading-none text-marigold-500/40">"</div>
                <p className="font-body text-base italic leading-relaxed text-ink-950/75">
                  {t.quote}
                </p>
                <div className="mt-4 border-t border-ink-950/[0.06] pt-4">
                  <div className="font-ui text-sm font-bold text-ink-950">{t.author}</div>
                  <div className="font-caption text-xs text-ink-950/40">{t.product}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-4 sm:hidden">
          <Button
            href="https://rollthedice.in/pages/customer-testimonials"
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            All reviews
          </Button>
        </div>
      </section>

      {/* ── Leave a review ── */}
      <Reveal>
        <section className="mt-16">
          <div className="overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft">
            <div className="border-b border-ink-950/[0.08] px-8 py-6">
              <h2 className="font-heading text-2xl font-bold text-ink-950">Your feedback matters</h2>
              <p className="mt-1 font-body text-sm leading-relaxed text-ink-950/60">
                Tell us what you loved about our games and how we can make your next playtime even better.
              </p>
            </div>
            <div className="flex flex-wrap gap-0">
              {[
                { label: `Google Review`, href: `https://g.page/r/CXoWbNIAyv7wEAE/review` },
                { label: `Amazon Review`, href: `https://www.amazon.in/review/create-review/?ie=UTF8&channel=glance-detail&asin=B0FCXWHNG6` },
                { label: `Shopify Review`, href: `https://rollthedice.in/products/chowka-bara-5-7-houses-combo` },
              ].map((r, i, arr) => (
                <a
                  key={r.label}
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-1 items-center justify-center gap-2 px-8 py-5 font-ui text-sm font-semibold text-ink-950/60 no-underline transition-all duration-200 active:bg-sand-50 active:text-ink-950 lg:hover:bg-sand-50 lg:hover:text-ink-950
                    ${i !== arr.length - 1 ? "border-r border-ink-950/[0.08]" : ""}`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-marigold-500" />
                  {r.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── CTA ── */}
      <Reveal>
        <section className="mt-16">
          <div className="relative overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white p-8 text-center shadow-soft sm:p-12">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-marigold-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-indigo-600/15 blur-3xl" />
            <div className="relative space-y-4">
              <h2 className="font-display text-3xl font-bold text-ink-950 sm:text-4xl">
                Want to bring games to your community?
              </h2>
              <p className="mx-auto max-w-lg font-body text-base leading-relaxed text-ink-950/65">
                Whether you're a school, cultural institution, NGO, or community group — we have a format that fits. Get in touch to get started.
              </p>
              <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row sm:justify-center">
                <Button to="/collaborate" className="px-8 py-3 text-base">Collaborate with us</Button>
                <Button to="/contact" variant="secondary" className="px-8 py-3 text-base">Get in touch</Button>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

    </SiteLayout>
  )
}

export const Head = () => <Seo title="Community & Impact" pathname="/community" />