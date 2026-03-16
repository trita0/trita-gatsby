import * as React from "react"

import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"
import Button from "../components/ui/Button"

// ─── Data ────────────────────────────────────────────────────────────────────

const awards = [
  {
    title: `Startup Karnataka Elevate Winner`,
    year: `2024`,
    desc: `Selected as a Startup Karnataka Elevate Winner for promoting traditional board games — includes a government grant and participation in an enabling ecosystem.`,
    href: `https://rollthedice.in/blogs/talk/honoring-innovation-roll-the-dice-recognised-at-the-elevate-winners-ceremony`,
    image: `https://rollthedice.in/cdn/shop/files/IMG_20241113_134958688.jpg?v=1731493856&width=800`,
  },
]

const pressFeatures = [
  {
    outlet: `The Better India`,
    title: `How Roll the Dice is reviving India's traditional board games`,
    desc: `After years in tech, founders Tanushri SN and Shashishekhar S chose a different path — reviving India's traditional board games through eco-friendly craftsmanship and authentic materials, handcrafted by 30+ artisans across southern India.`,
    href: `https://thebetterindia.com/startup/sustainable-enterprises/roll-the-dice-traditional-games-revival-tanushri-sn-shashishekhar-s-indian-board-games-culture-10590541`,
    tag: `Feature`,
  },
  {
    outlet: `CNN News18`,
    title: `Breakfast Club — Roll the Dice featured`,
    desc: `CNN News18 covered Roll the Dice on their Breakfast Club show, spotlighting the mission to bring traditional Indian games back into family life.`,
    href: `https://rollthedice.in/pages/press-awards`,
    tag: `TV`,
  },
  {
    outlet: `Dinamalar`,
    title: `Roll the Dice in Dinamalar Tamil newspaper`,
    desc: `A feature story on Roll the Dice published in Dinamalar, one of India's leading Tamil-language newspapers, covering the cultural revival mission.`,
    href: `https://rollthedice.in/pages/press-awards`,
    tag: `Print`,
    image: `https://cdn.shopify.com/s/files/1/0700/1692/6010/files/Dinamalar_Tamil_newspaper.jpg?v=1766124048`,
  },
]

const galleryImages = [
  {
    src: `https://rollthedice.in/cdn/shop/files/Traditional_Games_and_Family.jpg?v=1770020495&width=800`,
    alt: `Family playing traditional games`,
    tag: `Family Moments`,
  },
  {
    src: `https://rollthedice.in/cdn/shop/files/RolltheDice_Event_Image.jpg?v=1770009750&width=800`,
    alt: `Roll the Dice event`,
    tag: `Events`,
  },
  {
    src: `https://rollthedice.in/cdn/shop/files/alagulimane_event.jpg?v=1753186796&width=800`,
    alt: `Alaguli Mane workshop`,
    tag: `Workshops`,
  },
  {
    src: `https://rollthedice.in/cdn/shop/files/alagulimane_event01.jpg?v=1753191262&width=800`,
    alt: `Alaguli Mane event`,
    tag: `Workshops`,
  },
  {
    src: `https://rollthedice.in/cdn/shop/files/alagulimane_event02.jpg?v=1753187128&width=800`,
    alt: `Festival game event`,
    tag: `Events`,
  },
  {
    src: `https://rollthedice.in/cdn/shop/files/ANJ8566.jpg?v=1761820994&width=800`,
    alt: `Board game photography`,
    tag: `Board Games`,
  },
  {
    src: `https://rollthedice.in/cdn/shop/files/Corporate_Leadership_Workshops.png?v=1767600466&width=800`,
    alt: `Corporate leadership workshop`,
    tag: `Workshops`,
  },
  {
    src: `https://rollthedice.in/cdn/shop/files/ANJ8595_1.jpg?v=1762157420&width=800`,
    alt: `Traditional game set`,
    tag: `Board Games`,
  },
  {
    src: `https://rollthedice.in/cdn/shop/files/Puli_Jhudam_aata_-_Indian_Tiger_and_Goat_game.jpg?v=1756732246&width=800`,
    alt: `Puli Jhudam - Tiger and Goat game`,
    tag: `Board Games`,
  },
]

// ─── Scroll animation hook ────────────────────────────────────────────────────

function useReveal(threshold = 0.15) {
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

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}


export default function MediaPage() {
  const [activeFilter, setActiveFilter] = React.useState(`All`)
  const filters = [`All`, `Board Games`, `Workshops`, `Events`, `Family Moments`]
  const filteredGallery = activeFilter === `All`
    ? galleryImages
    : galleryImages.filter(img => img.tag === activeFilter)

  return (
    <SiteLayout>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulse-soft {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 28s linear infinite; }
        .animate-float { animation: float 4s ease-in-out infinite; }
      `}</style>

      {/* ── Hero header ── */}
      <header className="relative space-y-4 overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white px-8 py-14 shadow-soft text-center sm:px-16">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-marigold-500/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-indigo-600/15 blur-3xl" />
        <div className="relative space-y-4">
          <div
            className="inline-block rounded-full border border-ink-950/[0.08] bg-sand-50 px-4 py-1.5 font-ui text-xs font-semibold uppercase tracking-widest text-ink-950/40"
            style={{ animation: "pulse-soft 3s ease-in-out infinite" }}
          >
            Press · Awards · Gallery
          </div>
          <h1 className="font-display text-5xl font-bold tracking-tight text-ink-950 sm:text-6xl">
            Media &{" "}
            <span className="text-ink-950">Recognition</span>
          </h1>
          <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-ink-950/65">
            News features, awards, press coverage, and moments from our workshops, events, and cultural celebrations.
          </p>
        </div>
      </header>

      {/* ── Scrolling marquee strip ── */}
      <div className="mt-10 overflow-hidden rounded-2xl border border-ink-950/[0.08] bg-sand-50 py-3">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, ri) => (
            <span key={ri} className="flex items-center">
              {[`Startup Karnataka Elevate`, `The Better India`, `CNN News18`, `Dinamalar`, `Traditional Games Revival`, `Cultural Heritage`, `Play & Learning`, `Indian Board Games`].map((item, i) => (
                <span key={i} className="mx-6 font-ui text-xs font-semibold uppercase tracking-widest text-ink-950/35">
                  {item}
                  <span className="ml-6 text-marigold-500">◆</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── Awards ── */}
      <section className="mt-16">
        <Reveal>
          <h2 className="font-heading text-3xl font-bold text-ink-950">Awards & Recognition</h2>
          <p className="mt-2 font-body text-base leading-relaxed text-ink-950/65">
            Milestones that mark our journey reviving India's gaming heritage.
          </p>
        </Reveal>

        <div className="mt-8 space-y-6">
          {awards.map((award, i) => (
            <Reveal key={award.title} delay={i * 100}>
              <a
                href={award.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft transition-all duration-300 active:scale-[0.99] lg:hover:shadow-md no-underline md:flex-row"
              >
                {award.image && (
                  <div className="relative h-52 flex-shrink-0 overflow-hidden bg-sand-50 md:h-auto md:w-72">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex flex-col justify-between gap-4 p-7 md:p-8">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-marigold-500/15 px-3 py-0.5 font-ui text-xs font-semibold tracking-wide text-marigold-600">
                        🏆 Award
                      </span>
                      <span className="font-ui text-xs text-ink-950/35">{award.year}</span>
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-ink-950 transition group-hover:text-marigold-600">
                      {award.title}
                    </h3>
                    <p className="font-caption text-sm leading-relaxed text-ink-950/65 max-w-2xl">{award.desc}</p>
                  </div>
                  <span className="font-ui text-sm font-semibold text-ink-950/40 transition group-hover:text-ink-950">
                    Read more →
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Press Features ── */}
      <section className="mt-16">
        <Reveal>
          <h2 className="font-heading text-3xl font-bold text-ink-950">In the Press</h2>
          <p className="mt-2 font-body text-base leading-relaxed text-ink-950/65">
            Features, interviews, and stories from media outlets across India.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {pressFeatures.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft transition-all duration-300 active:scale-[0.98] lg:hover:shadow-md no-underline"
              >
                {item.image && (
                  <div className="relative h-40 overflow-hidden bg-sand-50">
                    <img
                      src={item.image}
                      alt={item.outlet}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                )}
                {!item.image && (
                  <div className="flex h-24 items-center justify-center bg-sand-50 px-6">
                    <span className="font-display text-xl font-bold text-ink-950/20">{item.outlet}</span>
                  </div>
                )}
                <div className="flex flex-1 flex-col justify-between gap-4 p-6">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full border border-ink-950/[0.12] px-2.5 py-0.5 font-ui text-xs tracking-wide text-ink-950/45">
                        {item.tag}
                      </span>
                      <span className="font-ui text-xs font-semibold text-ink-950/40">{item.outlet}</span>
                    </div>
                    <h3 className="font-heading text-base font-bold text-ink-950 transition group-hover:text-marigold-600">
                      {item.title}
                    </h3>
                    <p className="font-caption text-sm leading-relaxed text-ink-950/60">{item.desc}</p>
                  </div>
                  <span className="font-ui text-sm font-semibold text-ink-950/35 transition group-hover:text-ink-950">
                    Read feature →
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Photo Gallery ── */}
      <section className="mt-16">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-heading text-3xl font-bold text-ink-950">Our Story in Pictures</h2>
              <p className="mt-2 font-body text-base leading-relaxed text-ink-950/65">
                Moments from workshops, family game nights, and cultural celebrations.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Filter pills */}
        <Reveal delay={100}>
          <div className="mt-6 flex flex-wrap gap-2">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`rounded-2xl border px-4 py-2 font-ui text-sm font-semibold transition-all duration-200 ${
                  activeFilter === f
                    ? "border-ink-950 bg-ink-950 text-white"
                    : "border-ink-950/[0.08] bg-white text-ink-950/60 shadow-soft hover:bg-sand-50 hover:text-ink-950"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Masonry-style grid */}
        <div className="mt-8 columns-2 gap-4 md:columns-3 lg:columns-4">
          {filteredGallery.map((img, i) => (
            <Reveal key={img.src} delay={i * 50}>
              <div className="group mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-ink-950/[0.08] bg-sand-50 shadow-soft transition-shadow duration-300 hover:shadow-md">
                <div className="relative overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink-950/40 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-xl bg-white/90 px-2.5 py-1 font-ui text-xs font-semibold text-ink-950">
                      {img.tag}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <Reveal>
        <section className="mt-16">
          <div className="relative overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white p-8 shadow-soft text-center sm:p-12">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-marigold-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-indigo-600/15 blur-3xl" />
            <div className="relative space-y-4">
              <h2 className="font-display text-3xl font-bold text-ink-950 sm:text-4xl">
                Want to feature us?
              </h2>
              <p className="mx-auto max-w-lg font-body text-base leading-relaxed text-ink-950/65">
                For press inquiries, media kits, or collaboration requests — reach out to our team directly.
              </p>
              <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row sm:justify-center">
                <Button to="/contact" className="px-8 py-3 text-base">Get in touch</Button>
                <Button
                  href="https://rollthedice.in/pages/press-awards"
                  variant="secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 text-base"
                >
                  Full press page →
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

    </SiteLayout>
  )
}

export const Head = () => <Seo title="Media & Recognition" pathname="/media" />