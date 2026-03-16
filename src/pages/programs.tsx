import * as React from "react"

import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"
import Button from "../components/ui/Button"

// ─── Data ─────────────────────────────────────────────────────────────────────

const workshops = [
  {
    number: `01`,
    title: `Indian Board Game Workshops`,
    desc: `Hands-on facilitated sessions introducing traditional Indian board games with full cultural context — for schools, corporates, and community groups.`,
    tag: `All ages`,
    href: `https://rollthedice.in/pages/schools-montessori`,
  },
  {
    number: `02`,
    title: `Culture Connect Sessions`,
    desc: `Interactive deep-dive sessions exploring the history, regional variations, and strategy behind India's traditional games. Designed for schools and institutions.`,
    tag: `Schools`,
    href: `https://rollthedice.in/pages/schools-montessori`,
  },
  {
    number: `03`,
    title: `Strategy Games for Schools`,
    desc: `Structured game programs that build decision-making, teamwork, and strategic thinking through traditional Indian strategy games like Aadu Huli and Navakankari.`,
    tag: `Schools`,
    href: `https://rollthedice.in/pages/schools-montessori`,
  },
  {
    number: `04`,
    title: `Corporate Leadership Workshops`,
    desc: `Team-building and leadership development through traditional games. Retreats, recreation programs, and family day events designed for the workplace.`,
    tag: `Corporate`,
    href: `https://rollthedice.in/pages/corporate-engagements`,
    image: `https://rollthedice.in/cdn/shop/files/Corporate_Leadership_Workshops.png?v=1767600466&width=800`,
  },
  {
    number: `05`,
    title: `Teacher Training Programs`,
    desc: `Workshops that equip teachers with traditional games as a culturally rooted toolkit for 21st-century student development and classroom engagement.`,
    tag: `Educators`,
    href: `https://rollthedice.in/blogs/talk/revolutionizing-teacher-training-with-traditional-indian-games-a-workshop-with-v-lead`,
  },
]

const upcomingEvents = [
  {
    title: `Webinar on Navakankari`,
    type: `Online`,
    date: `To be announced`,
    location: `Online`,
    desc: `A deep-dive webinar exploring the history, rules, and strategy of Navakankari — India's ancient version of Nine Men's Morris.`,
  },
  {
    title: `Chowka Bara Micro League`,
    type: `Online`,
    date: `To be announced`,
    location: `Online`,
    desc: `A community micro-league for Chowka Bara players. Compete, connect, and celebrate one of India's oldest board games.`,
  },
]

const pastEvents = [
  {
    title: `TTOX'24 — India's Premier Tabletop Games Convention`,
    date: `14–15 December, 2024`,
    location: `Bengaluru`,
    type: `Exhibition`,
    image: `https://rollthedice.in/cdn/shop/files/RolltheDice_Event_Image.jpg?v=1770009750&width=800`,
  },
  {
    title: `Indica Mysuru Yoga Utsava`,
    date: `12–15 December, 2024`,
    location: `Mysuru`,
    type: `Cultural Festival`,
    image: `https://rollthedice.in/cdn/shop/files/alagulimane_event02.jpg?v=1753187128&width=800`,
  },
  {
    title: `Gayu's Glitz Flea Market`,
    date: `5 January, 2025`,
    location: `Davanagere`,
    type: `Pop-up`,
    image: `https://rollthedice.in/cdn/shop/files/alagulimane_event01.jpg?v=1753191262&width=800`,
  },
  {
    title: `Private Event`,
    date: `26 January, 2025`,
    location: `Bengaluru`,
    type: `Invite-only`,
    image: `https://rollthedice.in/cdn/shop/files/Traditional_Games_and_Family.jpg?v=1770020495&width=800`,
  },
]

const experienceTypes = [
  { label: `Board Game Leagues`, desc: `Recurring community leagues that build connection through competitive traditional play.` },
  { label: `Display & Sales at Events`, desc: `We participate in exhibitions, fun fairs, school events, and cultural festivals across cities.` },
  { label: `Community Pop-ups`, desc: `Drop-in game sessions open to families, neighbourhoods, and cultural communities.` },
  { label: `Experiential Game Installations`, desc: `Large-format traditional game sets for festivals, museums, and corporate spaces.` },
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

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
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


export default function ProgramsPage() {
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

      {/* ── Hero header ── */}
      <header className="relative overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white px-8 py-14 text-center shadow-soft sm:px-16">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-marigold-500/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-indigo-600/15 blur-3xl" />
        <div className="relative space-y-4">
          <div
            className="inline-block rounded-full border border-ink-950/[0.08] bg-sand-50 px-4 py-1.5 font-ui text-xs font-semibold uppercase tracking-widest text-ink-950/40"
            style={{ animation: "pulse-soft 3s ease-in-out infinite" }}
          >
            Workshops · Events · Experiences
          </div>
          <h1 className="font-display text-5xl font-bold tracking-tight text-ink-950 sm:text-6xl">
            Programs &{" "}
            <span className="text-ink-950">Experiences</span>
          </h1>
          <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-ink-950/65">
            Workshops, leagues, festivals, and play-led learning experiences — bringing traditional Indian games into schools, workplaces, and communities.
          </p>
        </div>
      </header>

      {/* ── Marquee ── */}
      <div className="mt-10 overflow-hidden rounded-2xl border border-ink-950/[0.08] bg-sand-50 py-3">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, ri) => (
            <span key={ri} className="flex items-center">
              {[`Board Game Workshops`, `School Programs`, `Corporate Events`, `Community Leagues`, `Cultural Festivals`, `Teacher Training`, `Family Play`, `Game Installations`].map((item, i) => (
                <span key={i} className="mx-6 font-ui text-xs font-semibold uppercase tracking-widest text-ink-950/35">
                  {item}<span className="ml-6 text-marigold-500">◆</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── Workshops ── */}
      <section className="mt-16">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="font-heading text-3xl font-bold text-ink-950">Workshops</h2>
              <p className="mt-2 font-body text-base leading-relaxed text-ink-950/65">
                Structured, facilitated sessions for schools, corporates, and communities.
              </p>
            </div>
            <div className="hidden sm:block">
              <Button href="https://rollthedice.in/pages/schools-montessori" variant="secondary" target="_blank" rel="noopener noreferrer">
                School programs
              </Button>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workshops.map((w, i) => (
            <Reveal key={w.title} delay={i * 70}>
              <a
                key={w.title}
                href={w.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft transition-all duration-300 active:scale-[0.98] lg:hover:shadow-md no-underline"
              >
                {w.image && (
                  <div className="relative h-40 overflow-hidden bg-sand-50">
                    <img
                      src={w.image}
                      alt={w.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col justify-between gap-4 p-6">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-ui text-xs font-medium tracking-widest text-ink-950/25">{w.number}</span>
                      <span className="rounded-full border border-ink-950/[0.12] px-3 py-0.5 font-ui text-xs tracking-wide text-ink-950/45">{w.tag}</span>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-ink-950 transition group-hover:text-marigold-600">{w.title}</h3>
                    <p className="font-caption text-sm leading-relaxed text-ink-950/65">{w.desc}</p>
                  </div>
                  <span className="font-ui text-sm font-semibold text-ink-950/35 transition group-hover:text-ink-950">
                    Learn more →
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Upcoming Events ── */}
      <section className="mt-16">
        <Reveal>
          <h2 className="font-heading text-3xl font-bold text-ink-950">Upcoming Events</h2>
          <p className="mt-2 font-body text-base leading-relaxed text-ink-950/65">
            Online and in-person events — leagues, webinars, and community competitions.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-0 overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft sm:grid-cols-2">
          {upcomingEvents.map((e, i) => (
            <Reveal key={e.title} delay={i * 80}>
              <div className={`flex flex-col gap-3 p-7 transition hover:bg-sand-50 h-full
                ${i % 2 === 0 ? "sm:border-r border-ink-950/[0.08]" : ""}
                ${i < upcomingEvents.length - 2 ? "border-b border-ink-950/[0.08]" : ""}`}
              >
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-marigold-500/15 px-3 py-0.5 font-ui text-xs font-semibold text-marigold-600">
                    {e.type}
                  </span>
                  <span className="font-ui text-xs text-ink-950/35">{e.date}</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-ink-950">{e.title}</h3>
                <p className="font-caption text-sm leading-relaxed text-ink-950/65">{e.desc}</p>
                <span className="font-ui text-xs text-ink-950/30">{e.location}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Past Events ── */}
      <section className="mt-16">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="font-heading text-3xl font-bold text-ink-950">Past Events</h2>
              <p className="mt-2 font-body text-base leading-relaxed text-ink-950/65">
                Exhibitions, festivals, and showcases from across India.
              </p>
            </div>
            <div className="hidden sm:block">
              <Button href="https://rollthedice.in/pages/events" variant="secondary" target="_blank" rel="noopener noreferrer">
                View all events
              </Button>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pastEvents.map((e, i) => (
            <Reveal key={e.title} delay={i * 60}>
              <div className="group flex flex-col overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft">
                <div className="relative overflow-hidden bg-sand-50" style={{ aspectRatio: "4/3" }}>
                  <img
                    src={e.image}
                    alt={e.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink-950/50 to-transparent p-4">
                    <span className="rounded-xl bg-white/90 px-2.5 py-1 font-ui text-xs font-semibold text-ink-950">
                      {e.type}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1 p-5">
                  <h3 className="font-heading text-sm font-bold text-ink-950 leading-snug">{e.title}</h3>
                  <span className="font-ui text-xs text-ink-950/40">{e.date} · {e.location}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Experience types ── */}
      <section className="mt-16">
        <Reveal>
          <h2 className="font-heading text-3xl font-bold text-ink-950">How We Show Up</h2>
          <p className="mt-2 font-body text-base leading-relaxed text-ink-950/65">
            The different formats we use to bring traditional games into the world.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-0 overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft sm:grid-cols-2">
          {experienceTypes.map((e, i) => (
            <Reveal key={e.label} delay={i * 60}>
              <div className={`flex flex-col gap-2 p-7 transition hover:bg-sand-50 h-full
                ${i % 2 === 0 ? "sm:border-r border-ink-950/[0.08]" : ""}
                ${i < experienceTypes.length - 2 ? "border-b border-ink-950/[0.08]" : ""}`}
              >
                <span className="font-ui text-xs font-medium tracking-widest text-ink-950/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-lg font-bold text-ink-950">{e.label}</h3>
                <p className="font-caption text-sm leading-relaxed text-ink-950/65">{e.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <Reveal>
        <section className="mt-16">
          <div className="relative overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white p-8 text-center shadow-soft sm:p-12">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-marigold-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-indigo-600/15 blur-3xl" />
            <div className="relative space-y-4">
              <h2 className="font-display text-3xl font-bold text-ink-950 sm:text-4xl">
                Want to host a program?
              </h2>
              <p className="mx-auto max-w-lg font-body text-base leading-relaxed text-ink-950/65">
                We bring traditional Indian games to your school, office, festival, or community. Get in touch to design a format that fits.
              </p>
              <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row sm:justify-center">
                <Button to="/collaborate" className="px-8 py-3 text-base">Collaborate with us</Button>
                <Button href="https://rollthedice.in/pages/events" variant="secondary" target="_blank" rel="noopener noreferrer" className="px-8 py-3 text-base">
                  All events →
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

    </SiteLayout>
  )
}

export const Head = () => <Seo title="Programs & Experiences" pathname="/programs" />