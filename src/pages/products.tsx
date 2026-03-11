import * as React from "react"

import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"
import Button from "../components/ui/Button"

const sections = [
  { id: `board-games`, label: `Board Games` },
  { id: `puzzles-activities`, label: `Puzzles & Activities` },
  { id: `browse`, label: `Browse by Category` },
  { id: `experiential`, label: `Experiential Sets` },
]

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
}

const boardGames = [
  {
    name: `Chowka Bara`,
    desc: `Ancient Indian cross-and-circle board game. Available in 5-house and 7-house variants, handcrafted with Channapatna pawns.`,
    tag: `Karnataka`,
    href: `https://rollthedice.in/collections/chowka-bara`,
    images: [`/images/products/chowka-bara-1.png`, `/images/products/chowka-bara-2.png`],
  },
  {
    name: `Aadu Huli`,
    desc: `Tigers and Goats — a traditional strategy game of pursuit and capture, available across 4 difficulty levels.`,
    tag: `Strategy`,
    href: `https://rollthedice.in/products/classic-aadu-huli-3-4-board-game`,
    images: [`/images/products/aadu-huli-1.png`, `/images/products/aadu-huli-2.png`],
  },
  {
    name: `Pagade`,
    desc: `The ancient Indian predecessor to Ludo and Pachisi, played on a cross-shaped cloth board with cowrie shells.`,
    tag: `Ancient`,
    href: `https://rollthedice.in/products/pagade-traditional-board-game`,
    images: [`/images/products/pagade-1.png`, `/images/products/pagade-2.png`],
  },
  {
    name: `Navakankari`,
    desc: `India's version of Nine Men's Morris — a two-player strategy game of placement, movement, and capture.`,
    tag: `Strategy`,
    href: `https://rollthedice.in/products/navakankari-traditional-board-game`,
    images: [`/images/products/navakankari-1.png`, `/images/products/navakankari-2.png`],
  },
  {
    name: `Sholo Gutti`,
    desc: `Bead 16 — a traditional Bengal strategy game requiring sharp calculation and spatial thinking.`,
    tag: `Bengal`,
    href: `https://rollthedice.in/products/sholo-gutti-traditional-board-game`,
    images: [
      `/images/products/sholo-gutti-1.png`,
      `/images/products/sholo-gutti-2.png`,
    ],
  },
  {
    name: `Alaguli Mane / Channe Mane`,
    desc: `Known as Pallanguzhi or Vamana Guntalu — a mancala-style seed-sowing game in a carved wooden board.`,
    tag: `Tamil Nadu`,
    href: `https://rollthedice.in/products/teak-wood-alaguli-mane-traditional-board-game`,
    images: [
      `/images/products/channe-mane-1.png`,
      `/images/products/channe-mane-2.png`,
    ],
  },
]

const puzzlesAndActivities = [
  {
    name: `Dashavatara Jigsaw Puzzles`,
    desc: `A full set of 10 puzzles depicting the ten avatars of Vishnu — vibrant, educational, and collectible.`,
    tag: `Puzzle`,
    href: `https://rollthedice.in/products/dashavatara-full-set-jigsaw-puzzles`,
    images: [
      `/images/products/dashavatara-1.png`,
      `/images/products/dashavatara-2.png`,
    ],
  },
  {
    name: `Ekashloki Ramayana Puzzle`,
    desc: `A single-shloka retelling of the Ramayana rendered as a beautiful jigsaw puzzle for kids.`,
    tag: `Puzzle`,
    href: `https://rollthedice.in/products/ekashloki-ramayana-jigsaw-puzzle-for-kids`,
    images: [
      `/images/products/ramayana-puzzle-1.png`,
      `/images/products/ramayana-puzzle-2.png`,
    ],
  },
  {
    name: `Cultural Games & Activity Books`,
    desc: `A curated collection of culture-based games, activity books, and learning sets rooted in Indian heritage.`,
    tag: `Activity`,
    href: `https://rollthedice.in/collections/cultural-games-activities-books`,
    images: [
      `/images/products/cultural-activities-1.png`,
      `/images/products/cultural-activities-2.png`,
    ],
  },
]

const categories = [
  {
    label: `By Skill`,
    href: `https://rollthedice.in/collections/games-by-skills`,
  },
  {
    label: `By Region`,
    href: `https://rollthedice.in/collections/games-by-region`,
  },
  {
    label: `By Age`,
    href: `https://rollthedice.in/collections/activity-sets-by-age`,
  },
  {
    label: `By Players`,
    href: `https://rollthedice.in/collections/games-by-number-of-players`,
  },
  {
    label: `Heritage Sets`,
    href: `https://rollthedice.in/collections/heritage-game-sets`,
  },
  {
    label: `Classic Sets`,
    href: `https://rollthedice.in/collections/classic-game-sets`,
  },
]

function ProductCard({
  name,
  desc,
  tag,
  href,
  number,
  images,
}: {
  name: string
  desc: string
  tag: string
  href: string
  number: string
  images: string[]
}) {
  const [img1, img2] = images

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft transition-shadow duration-300 hover:shadow-md no-underline"
    >
      {/* Image zone — swap on hover */}
      <div
        className="relative mx-5 mt-5 overflow-hidden rounded-2xl bg-sand-50"
        style={{ aspectRatio: "4/3" }}
      >
        <img
          src={img1}
          alt={name}
          className="absolute inset-0 h-full w-full object-cover opacity-100 transition-opacity duration-500 ease-in-out group-hover:opacity-0"
        />
        {img2 && (
          <img
            src={img2}
            alt={`${name} alternate view`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
          />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between gap-4 p-5">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="font-ui text-xs font-medium tracking-widest text-ink-950/25">
              {number}
            </span>
            <span className="rounded-full border border-ink-950/[0.12] px-3 py-0.5 font-ui text-xs tracking-wide text-ink-950/45">
              {tag}
            </span>
          </div>
          <h3 className="font-heading text-lg font-bold text-ink-950 transition group-hover:text-marigold-600">
            {name}
          </h3>
          <p className="font-caption text-sm leading-relaxed text-ink-950/65">
            {desc}
          </p>
        </div>
        <span className="font-ui text-sm font-semibold text-ink-950/40 transition group-hover:text-ink-950">
          Shop on Roll the Dice →
        </span>
      </div>
    </a>
  )
}

export default function ProductsPage() {
  return (
    <SiteLayout>
      {/* Header */}
      <header className="space-y-4 text-center">
        <h1 className="font-display text-5xl font-bold tracking-tight text-ink-950">
          Products
        </h1>
        <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-ink-950/70">
          Board games, puzzles, and activity sets inspired by Indian heritage —
          handcrafted and designed to bring culture alive through play.
        </p>
      </header>

      {/* Section nav */}
      <nav className="mt-10 flex flex-wrap gap-2">
        {sections.map(s => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className="rounded-2xl border border-ink-950/[0.08] bg-white px-4 py-2 font-ui text-sm font-semibold text-ink-950/60 shadow-soft transition hover:bg-sand-50 hover:text-ink-950"
          >
            {s.label}
          </button>
        ))}
      </nav>

      {/* Board Games */}
      <section id="board-games" className="mt-16 scroll-mt-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-heading text-3xl font-bold text-ink-950">
              Board Games
            </h2>
            <p className="mt-2 font-body text-base leading-relaxed text-ink-950/65">
              Traditional Indian strategy and family games, revived and
              handcrafted.
            </p>
          </div>
          <div className="hidden sm:block">
            <Button
              href="https://rollthedice.in/collections/traditional-board-games"
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View all
            </Button>
          </div>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {boardGames.map((g, i) => (
            <ProductCard
              key={g.name}
              {...g}
              number={String(i + 1).padStart(2, "0")}
            />
          ))}
        </div>
        <div className="mt-6 sm:hidden">
          <Button
            href="https://rollthedice.in/collections/traditional-board-games"
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View all board games
          </Button>
        </div>
      </section>

      {/* Puzzles & Activities */}
      <section id="puzzles-activities" className="mt-16 scroll-mt-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-heading text-3xl font-bold text-ink-950">
              Puzzles & Activities
            </h2>
            <p className="mt-2 font-body text-base leading-relaxed text-ink-950/65">
              Cultural jigsaw puzzles, activity books, and learning kits for
              children and families.
            </p>
          </div>
          <div className="hidden sm:block">
            <Button
              href="https://rollthedice.in/collections/cultural-games-activities-books"
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View all
            </Button>
          </div>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {puzzlesAndActivities.map((p, i) => (
            <ProductCard
              key={p.name}
              {...p}
              number={String(i + 1).padStart(2, "0")}
            />
          ))}
        </div>
      </section>

      {/* Browse by Category */}
      <section id="browse" className="mt-16 scroll-mt-28">
        <h2 className="font-heading text-3xl font-bold text-ink-950">
          Browse by Category
        </h2>
        <p className="mt-2 font-body text-base leading-relaxed text-ink-950/65">
          Find the right game by skill, region, age group, or number of players.
        </p>
        <div className="mt-8 grid gap-0 overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center justify-between px-7 py-5 transition hover:bg-sand-50 no-underline
                ${i % 3 !== 2 ? "lg:border-r border-ink-950/[0.08]" : ""}
                ${i < 3 ? "lg:border-b border-ink-950/[0.08]" : ""}
                ${
                  i % 2 === 0
                    ? "sm:border-r border-ink-950/[0.08] lg:border-r-0"
                    : ""
                }
                ${
                  i < categories.length - 2
                    ? "sm:border-b border-ink-950/[0.08] lg:border-b-0"
                    : ""
                }
                border-b border-ink-950/[0.08] last:border-b-0`}
            >
              <span className="font-heading text-base font-bold text-ink-950">
                {c.label}
              </span>
              <span className="font-ui text-xs font-medium text-ink-950/30 transition group-hover:text-ink-950/60">
                →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Experiential + Shop CTA */}
      <section id="experiential" className="mt-16 scroll-mt-28">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col justify-between gap-6 overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white p-8 shadow-soft">
            <div className="space-y-2">
              <span className="font-ui text-xs font-medium uppercase tracking-widest text-ink-950/30">
                For events
              </span>
              <h3 className="font-heading text-2xl font-bold text-ink-950">
                Experiential Game Sets
              </h3>
              <p className="font-body text-sm leading-relaxed text-ink-950/65">
                Large-format game installations for festivals, museums, schools,
                and corporate events.
              </p>
            </div>
            <Button
              href="https://rollthedice.in/pages/experiential-game-sets"
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit"
            >
              Learn more
            </Button>
          </div>
          <div className="flex flex-col justify-between gap-6 overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white p-8 shadow-soft">
            <div className="space-y-2">
              <span className="font-ui text-xs font-medium uppercase tracking-widest text-ink-950/30">
                Shop online
              </span>
              <h3 className="font-heading text-2xl font-bold text-ink-950">
                Visit Roll the Dice Store
              </h3>
              <p className="font-body text-sm leading-relaxed text-ink-950/65">
                Browse the full catalogue of traditional Indian games, puzzles,
                and activity kits at rollthedice.in.
              </p>
            </div>
            <Button
              href="https://rollthedice.in"
              variant="primary"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit"
            >
              Shop now
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}

export const Head = () => <Seo title="Products" pathname="/products" />
