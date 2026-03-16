import * as React from "react"

import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"
import Button from "../components/ui/Button"

// ─── Data ─────────────────────────────────────────────────────────────────────

const pillars = [
  {
    number: `01`,
    title: `Traditional Games Research`,
    desc: `Field research across regions of India — documenting gameplay methods, regional variations, materials, oral histories, and the cultural context of traditional games. We visit practitioners, artisans, and community elders to gather first-hand knowledge.`,
    tag: `Fieldwork`,
  },
  {
    number: `02`,
    title: `Knowledge Systems`,
    desc: `Mapping the embedded intelligence in traditional Indian games — how they taught arithmetic, strategy, patience, and collaboration long before formal education. Understanding the cultural logic behind game structures and rules.`,
    tag: `Cultural`,
  },
  {
    number: `03`,
    title: `Digital Preservation`,
    desc: `Building digital records, interactive documentation, and playable formats that carry traditional games beyond physical spaces — making them accessible to wider audiences including the Indian diaspora worldwide.`,
    tag: `Technology`,
  },
]

const origins = [
  {
    number: `01`,
    title: `With the same love, as your Ajji`,
    desc: `The inspiration to make high-quality traditional Indian board games began with a handmade Pagade mat stitched by our grandmother. When friends wanted similar mats, we searched for good-quality options but found only thin, dull fabrics — leading us to experiment with art silk and computerised embroidery to ensure quality and scale.`,
    image: `https://rollthedice.in/cdn/shop/files/pagade-high-quality.png?v=1731562638&width=800`,
    tag: `Origins`,
  },
  {
    number: `02`,
    title: `Learning by playing`,
    desc: `As our community grew, parents expressed a need to help kids connect with Indian culture. While stories and videos are popular, we saw that games and puzzles could make a lasting impression on young minds — leading us to create engaging, educational puzzles around topics like Vishnu's avatars, the Ramayana, and Devata traditions.`,
    image: `https://rollthedice.in/cdn/shop/files/Dashavatara_Puzzles.png?v=1731562427&width=800`,
    tag: `Cultural Moorings`,
  },
  {
    number: `03`,
    title: `Make everyone play`,
    desc: `Families who play our games together grow closer. These games sharpen kids' minds, improve arithmetic and memory, and build collaboration skills. We are now on a mission to share these games with more people of all ages — through high-quality physical sets and our digital platform at Tollugatti.`,
    image: `https://rollthedice.in/cdn/shop/files/make_you_play.png?v=1731565439&width=800`,
    tag: `Movement`,
  },
]

const experimental = [
  {
    number: `01`,
    title: `Cultural Gaming Platforms`,
    desc: `Tollugatti — our digital platform that extends traditional Indian games into online, multiplayer formats so a grandmother in Mysuru can play with her granddaughter abroad.`,
    href: `https://tollugatti.com`,
    tag: `Live`,
  },
  {
    number: `02`,
    title: `Interactive Storytelling`,
    desc: `Narrative-led game concepts that weave mythology, regional stories, and cultural immersion into playable experiences for children and families.`,
    href: `/collaborate`,
    tag: `In development`,
  },
  {
    number: `03`,
    title: `QR-linked Activity Sets`,
    desc: `Physical puzzles and game sets enhanced with QR codes that unlock digital content, how-to-play guides, and cultural context — bridging the physical and digital.`,
    href: `https://rollthedice.in/collections/cultural-games-activities-books`,
    tag: `Launched`,
  },
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
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}


export default function ResearchPage() {
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
            Research · Documentation · Innovation
          </div>
          <h1 className="font-display text-5xl font-bold tracking-tight text-ink-950 sm:text-6xl">
            Research &{" "}
            <span className="text-ink-950">Innovation</span>
          </h1>
          <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-ink-950/65">
            Field research, cultural documentation, and experimental platforms — grounding everything we build in the living intelligence of India's traditional games.
          </p>
        </div>
      </header>

      {/* ── Marquee ── */}
      <div className="mt-10 overflow-hidden rounded-2xl border border-ink-950/[0.08] bg-sand-50 py-3">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, ri) => (
            <span key={ri} className="flex items-center">
              {[`Field Research`, `Game Documentation`, `Knowledge Systems`, `Digital Preservation`, `Cultural Heritage`, `Traditional Games`, `Play & Learning`, `Experimental Platforms`].map((item, i) => (
                <span key={i} className="mx-6 font-ui text-xs font-semibold uppercase tracking-widest text-ink-950/35">
                  {item}<span className="ml-6 text-marigold-500">◆</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── Research Pillars ── */}
      <section className="mt-16">
        <Reveal>
          <h2 className="font-heading text-3xl font-bold text-ink-950">Our Research Approach</h2>
          <p className="mt-2 font-body text-base leading-relaxed text-ink-950/65">
            Research forms the foundation of everything we create — from the games we revive to the platforms we build.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-0 overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className={`flex h-full flex-col gap-3 p-7 transition hover:bg-sand-50
                ${i < pillars.length - 1 ? "border-b border-ink-950/[0.08] md:border-b-0 md:border-r" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-ui text-xs font-medium tracking-widest text-ink-950/25">{p.number}</span>
                  <span className="rounded-full border border-ink-950/[0.12] px-3 py-0.5 font-ui text-xs tracking-wide text-ink-950/45">{p.tag}</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-ink-950">{p.title}</h3>
                <p className="font-caption text-sm leading-relaxed text-ink-950/65">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Origin Stories ── */}
      <section className="mt-16 space-y-8">
        <Reveal>
          <h2 className="font-heading text-3xl font-bold text-ink-950">How It Started</h2>
          <p className="mt-2 font-body text-base leading-relaxed text-ink-950/65">
            Three moments that shaped Trita's research and design philosophy.
          </p>
        </Reveal>

        {origins.map((o, i) => (
          <Reveal key={o.title} delay={60}>
            <div className={`group flex flex-col overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft md:flex-row ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              <div className="relative h-56 flex-shrink-0 overflow-hidden bg-sand-50 md:h-auto md:w-72 lg:w-96">
                <img
                  src={o.image}
                  alt={o.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-between gap-4 p-7 md:p-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="font-ui text-xs font-medium tracking-widest text-ink-950/25">{o.number}</span>
                    <span className="rounded-full border border-ink-950/[0.12] px-3 py-0.5 font-ui text-xs tracking-wide text-ink-950/45">{o.tag}</span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-ink-950">{o.title}</h3>
                  <p className="font-body text-sm leading-relaxed text-ink-950/65 max-w-xl">{o.desc}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* ── Experimental Projects ── */}
      <section className="mt-16">
        <Reveal>
          <h2 className="font-heading text-3xl font-bold text-ink-950">Experimental Projects</h2>
          <p className="mt-2 font-body text-base leading-relaxed text-ink-950/65">
            Prototype platforms and concepts we're building at the intersection of culture, play, and technology.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experimental.map((e, i) => (
            <Reveal key={e.title} delay={i * 70}>
              <a
                href={e.href}
                target={e.href.startsWith("http") ? "_blank" : undefined}
                rel={e.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white p-6 shadow-soft transition-shadow duration-300 hover:shadow-md no-underline"
              >
                <div className="flex flex-1 flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="font-ui text-xs font-medium tracking-widest text-ink-950/25">{e.number}</span>
                    <span className={`rounded-full px-3 py-0.5 font-ui text-xs font-semibold tracking-wide
                      ${e.tag === "Live" || e.tag === "Launched"
                        ? "bg-marigold-500/15 text-marigold-600"
                        : "border border-ink-950/[0.12] text-ink-950/45"}`}
                    >
                      {e.tag}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-ink-950 transition group-hover:text-marigold-600">
                    {e.title}
                  </h3>
                  <p className="font-caption text-sm leading-relaxed text-ink-950/65">{e.desc}</p>
                </div>
                <span className="mt-4 font-ui text-sm font-semibold text-ink-950/35 transition group-hover:text-ink-950">
                  Explore →
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Stats ── */}
      <Reveal>
        <section className="mt-16">
          <div className="grid grid-cols-2 overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft lg:grid-cols-4">
            {[
              { value: `2000+`, label: `Years of game history` },
              { value: `15+`, label: `Game variants documented` },
              { value: `30+`, label: `Artisan families involved` },
              { value: `8+`, label: `Regions researched` },
            ].map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col justify-between gap-3 p-6 transition hover:bg-sand-50 sm:p-8
                  ${i < 3 ? "border-r border-ink-950/[0.08]" : ""}
                  ${i < 2 ? "border-b border-ink-950/[0.08] lg:border-b-0" : ""}`}
              >
                <div className="font-display text-4xl font-bold text-ink-950 sm:text-5xl">{s.value}</div>
                <div className="font-caption text-xs font-semibold uppercase tracking-wider text-ink-950/50">{s.label}</div>
              </div>
            ))}
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
                Interested in collaborating on research?
              </h2>
              <p className="mx-auto max-w-lg font-body text-base leading-relaxed text-ink-950/65">
                We work with researchers, institutions, and educators to document, preserve, and reimagine India's traditional game heritage.
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

export const Head = () => <Seo title="Research & Innovation" pathname="/research" />