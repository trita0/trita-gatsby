import * as React from "react"

import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"
import Button from "../components/ui/Button"

// ─── Data ─────────────────────────────────────────────────────────────────────

const sections = [
  { id: `why`, label: `Why Join Us` },
  { id: `internships`, label: `Internships & Gigs` },
  { id: `jobs`, label: `Full-Time Jobs` },
  { id: `apply`, label: `Apply` },
]

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
}

const whyJoin = [
  {
    number: `01`,
    title: `Hands-on Experience`,
    desc: `Real-world experience in event management, customer engagement, logistics, and cultural programming — not desk work.`,
  },
  {
    number: `02`,
    title: `Flexible Gigs`,
    desc: `Many opportunities to work at events in Mysore, Bangalore, and other cities on your own schedule.`,
  },
  {
    number: `03`,
    title: `Cultural Impact`,
    desc: `Be part of a movement that celebrates and shares India's traditional gaming heritage with communities across the country.`,
  },
  {
    number: `04`,
    title: `Play on the Job`,
    desc: `Where else can you say playing traditional Indian board games is actually part of your job description?`,
  },
]

const internships = [
  {
    number: `01`,
    title: `Event Representative & Customer Engagement`,
    type: `Internship / Gig`,
    location: `Mysore & Bangalore`,
    desc: `Represent Roll the Dice at events, festivals, and exhibitions. Engage with visitors, demonstrate games, and share the story behind each traditional game set.`,
    skills: [`Customer interaction`, `Product demonstrations`, `Stall setup & management`],
    ideal: `Outgoing, passionate about Indian culture, strong communication skills.`,
  },
  {
    number: `02`,
    title: `Logistics & Event Support`,
    type: `Internship / Gig`,
    location: `Mysore & Bangalore`,
    desc: `Assist with transporting game sets, setting up event locations, and supporting exhibitions from start to finish.`,
    skills: [`Event logistics`, `Equipment handling`, `Setup & takedown`],
    ideal: `Reliable, physically fit, keen sense of responsibility.`,
  },
  {
    number: `03`,
    title: `Accounts & Payment Coordination`,
    type: `Internship`,
    location: `Mysore`,
    desc: `Oversee on-site sales transactions, manage accounts, and ensure all payments are accurately recorded and synced with the central system.`,
    skills: [`Sales tracking`, `Financial record-keeping`, `Accounts coordination`],
    ideal: `Detail-oriented, good with numbers, interested in financial coordination.`,
  },
]

const jobs = [
  {
    number: `01`,
    title: `Sales & Customer Engagement`,
    type: `Full-Time`,
    location: `Mysore`,
    desc: `Drive sales at events and exhibitions, build relationships with customers, and help more families discover traditional Indian board games.`,
    skills: [`Sales`, `Customer service`, `Event representation`],
  },
  {
    number: `02`,
    title: `Operations & Logistics`,
    type: `Full-Time`,
    location: `Mysore`,
    desc: `Manage day-to-day logistics, inventory, and event operations to ensure seamless delivery of products and programs across locations.`,
    skills: [`Operations`, `Inventory management`, `Coordination`],
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


export default function CareersPage() {
  return (
    <SiteLayout>
      <style>{`
        @keyframes pulse-soft {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
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
            Internships · Gigs · Full-Time
          </div>
          <h1 className="font-display text-5xl font-bold tracking-tight text-ink-950 sm:text-6xl">
            Join the <span className="text-ink-950">Team</span>
          </h1>
          <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-ink-950/65">
            Are you passionate about Indian culture, eager to learn, and ready for hands-on experience? Join Roll the Dice and play a key role in bringing traditional Indian games to communities across the country.
          </p>
        </div>
      </header>

      {/* ── Section nav ── */}
      <nav className="mt-10 flex flex-wrap gap-2">
        {sections.map(s => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className="rounded-2xl border border-ink-950/[0.08] bg-white px-4 py-2 font-ui text-sm font-semibold text-ink-950/60 shadow-soft transition-all active:bg-sand-50 active:text-ink-950 lg:hover:bg-sand-50 lg:hover:text-ink-950"
          >
            {s.label}
          </button>
        ))}
      </nav>

      {/* ── Why Join ── */}
      <section id="why" className="mt-16 scroll-mt-28">
        <Reveal>
          <h2 className="font-heading text-3xl font-bold text-ink-950">Why Join Roll the Dice?</h2>
          <p className="mt-2 font-body text-base leading-relaxed text-ink-950/65">
            A rare opportunity to work on cultural impact — and yes, playing on the job is encouraged.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-0 overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft sm:grid-cols-2">
          {whyJoin.map((w, i) => (
            <Reveal key={w.title} delay={i * 70}>
              <div className={`flex h-full flex-col gap-2 p-7 transition hover:bg-sand-50
                ${i % 2 === 0 ? "sm:border-r border-ink-950/[0.08]" : ""}
                ${i < whyJoin.length - 2 ? "border-b border-ink-950/[0.08]" : ""}`}
              >
                <span className="font-ui text-xs font-medium tracking-widest text-ink-950/25">{w.number}</span>
                <h3 className="font-heading text-lg font-bold text-ink-950">{w.title}</h3>
                <p className="font-caption text-sm leading-relaxed text-ink-950/65">{w.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Internships ── */}
      <section id="internships" className="mt-16 scroll-mt-28">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="font-heading text-3xl font-bold text-ink-950">Internships & Gig Opportunities</h2>
              <p className="mt-2 font-body text-base leading-relaxed text-ink-950/65">
                Flexible roles in Mysore, Bangalore, and at events across India.
              </p>
            </div>
            <div className="hidden sm:block">
              <Button
                href="https://rollthedice.in/pages/internships-gig-opportunities"
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Full details
              </Button>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {internships.map((role, i) => (
            <Reveal key={role.title} delay={i * 70}>
              <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft">
                <div className="flex flex-col gap-3 p-6 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-ui text-xs font-medium tracking-widest text-ink-950/25">{role.number}</span>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-marigold-500/15 px-3 py-0.5 font-ui text-xs font-semibold text-marigold-600">
                        {role.type}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-ink-950">{role.title}</h3>
                  <span className="font-ui text-xs text-ink-950/40">{role.location}</span>
                  <p className="font-caption text-sm leading-relaxed text-ink-950/65">{role.desc}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {role.skills.map(s => (
                      <span key={s} className="rounded-full border border-ink-950/[0.08] bg-sand-50 px-2.5 py-0.5 font-ui text-xs text-ink-950/55">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="border-t border-ink-950/[0.08] px-6 py-4">
                  <p className="font-caption text-xs text-ink-950/45">
                    <span className="font-semibold text-ink-950/60">Ideal: </span>{role.ideal}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Full-Time Jobs ── */}
      <section id="jobs" className="mt-16 scroll-mt-28">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="font-heading text-3xl font-bold text-ink-950">Full-Time Opportunities</h2>
              <p className="mt-2 font-body text-base leading-relaxed text-ink-950/65">
                Based in Mysore. Work hard, connect with people, and dive into Indian culture.
              </p>
            </div>
            <div className="hidden sm:block">
              <Button
                href="https://rollthedice.in/pages/jobs"
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Full details
              </Button>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-0 overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft sm:grid-cols-2">
          {jobs.map((job, i) => (
            <Reveal key={job.title} delay={i * 80}>
              <div className={`flex h-full flex-col gap-3 p-7 transition hover:bg-sand-50
                ${i % 2 === 0 ? "sm:border-r border-ink-950/[0.08]" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-ui text-xs font-medium tracking-widest text-ink-950/25">{job.number}</span>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full border border-ink-950/[0.12] px-3 py-0.5 font-ui text-xs tracking-wide text-ink-950/45">
                      {job.type}
                    </span>
                    <span className="font-ui text-xs text-ink-950/35">{job.location}</span>
                  </div>
                </div>
                <h3 className="font-heading text-lg font-bold text-ink-950">{job.title}</h3>
                <p className="font-caption text-sm leading-relaxed text-ink-950/65">{job.desc}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {job.skills.map(s => (
                    <span key={s} className="rounded-full border border-ink-950/[0.08] bg-sand-50 px-2.5 py-0.5 font-ui text-xs text-ink-950/55">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Apply CTA ── */}
      <Reveal>
        <section id="apply" className="mt-16 scroll-mt-28">
          <div className="relative overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-marigold-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-indigo-600/15 blur-3xl" />
            <div className="relative grid gap-0 lg:grid-cols-[1fr_auto]">
              <div className="flex flex-col justify-between gap-8 p-8 sm:p-12">
                <div className="space-y-4">
                  <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-ink-950 sm:text-5xl">
                    Ready to <span className="text-ink-950">roll?</span>
                  </h2>
                  <p className="max-w-lg font-body text-base leading-relaxed text-ink-950/65">
                    Send us your details and the role you're interested in. We'll get back to you within a few working days.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button to="/contact" className="px-8 py-3 text-base">Apply via contact form</Button>
                  <Button
                    href="mailto:hello@trita.example"
                    variant="secondary"
                    className="px-8 py-3 text-base"
                  >
                    Email us directly
                  </Button>
                </div>
              </div>
              <div className="flex flex-col justify-center border-t border-ink-950/[0.08] lg:border-l lg:border-t-0">
                <div className="px-8 pb-4 pt-6 lg:pt-8">
                  <span className="font-ui text-xs font-medium uppercase tracking-widest text-ink-950/30">
                    Open roles
                  </span>
                </div>
                {[...internships.map(r => r.title), ...jobs.map(r => r.title)].map((title, i, arr) => (
                  <div
                    key={title}
                    className={`flex items-center gap-3 px-8 py-3.5 ${i !== arr.length - 1 ? "border-b border-ink-950/[0.08]" : "pb-8"}`}
                  >
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-marigold-500" />
                    <span className="font-heading text-sm font-semibold text-ink-950">{title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

    </SiteLayout>
  )
}

export const Head = () => <Seo title="Careers" pathname="/careers" />