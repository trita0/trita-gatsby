import * as React from "react"

import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"

type Article = {
  id: number
  title: string
  handle: string
  href: string
  excerpt: string
  published_at: string
  image: string | null
}

function formatDate(dateStr: string) {
  try {
    return new Date(dateStr).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  } catch {
    return dateStr
  }
}

function BlogCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  const href = article.href || `https://rollthedice.in/blogs/talk/${article.handle}`

  if (featured) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group col-span-full flex flex-col overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft transition-all duration-300 active:scale-[0.99] lg:hover:shadow-md no-underline md:flex-row"
      >
        <div className="relative h-56 flex-shrink-0 overflow-hidden bg-sand-50 md:h-auto md:w-80 lg:w-96">
          {article.image ? (
            <img
              src={article.image}
              alt={article.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-sand-100">
              <span className="font-ui text-xs text-ink-950/25">Roll the Dice</span>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-between gap-4 p-7 md:p-8">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="rounded-full border border-ink-950/[0.12] px-3 py-0.5 font-ui text-xs tracking-wide text-ink-950/45">
                Latest
              </span>
              <span className="font-ui text-xs text-ink-950/35">{formatDate(article.published_at)}</span>
            </div>
            <h2 className="font-heading text-2xl font-bold text-ink-950 transition group-hover:text-marigold-600 sm:text-3xl">
              {article.title}
            </h2>
            <p className="font-caption text-sm leading-relaxed text-ink-950/65">{article.excerpt}…</p>
          </div>
          <span className="font-ui text-sm font-semibold text-ink-950/40 transition group-hover:text-ink-950">
            Read on Roll the Dice →
          </span>
        </div>
      </a>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft transition-all duration-300 active:scale-[0.98] lg:hover:shadow-md no-underline"
    >
      <div className="relative mx-5 mt-5 overflow-hidden rounded-2xl bg-sand-50" style={{ aspectRatio: "16/9" }}>
        {article.image ? (
          <img
            src={article.image}
            alt={article.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-sand-100">
            <span className="font-ui text-xs text-ink-950/25">Roll the Dice</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col justify-between gap-4 p-5">
        <div className="space-y-1.5">
          <span className="font-ui text-xs text-ink-950/35">{formatDate(article.published_at)}</span>
          <h3 className="font-heading text-lg font-bold text-ink-950 transition group-hover:text-marigold-600">
            {article.title}
          </h3>
          <p className="font-caption text-sm leading-relaxed text-ink-950/65">{article.excerpt}…</p>
        </div>
        <span className="font-ui text-sm font-semibold text-ink-950/40 transition group-hover:text-ink-950">
          Read on Roll the Dice →
        </span>
      </div>
    </a>
  )
}

function SkeletonCard() {
  return (
    <div className="overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft">
      <div className="mx-5 mt-5 animate-pulse rounded-2xl bg-sand-100" style={{ aspectRatio: "16/9" }} />
      <div className="space-y-2.5 p-5">
        <div className="h-3 w-1/4 animate-pulse rounded-full bg-sand-100" />
        <div className="h-5 w-3/4 animate-pulse rounded-full bg-sand-100" />
        <div className="h-3 w-full animate-pulse rounded-full bg-sand-100" />
        <div className="h-3 w-2/3 animate-pulse rounded-full bg-sand-100" />
      </div>
    </div>
  )
}

export default function BlogIndexPage() {
  const [articles, setArticles] = React.useState<Article[]>([])
  const [status, setStatus] = React.useState<"loading" | "success" | "error">("loading")

  React.useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        // In development, Gatsby serves API functions during dev server
        // In production build, we need to handle the fact that API isn't available during build
        const response = await fetch("/api/blog-posts")
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`)
        }
        
        const data = await response.json()
        const posts: Article[] = data?.articles ?? []
        setArticles(posts)
        setStatus(posts.length > 0 ? "success" : "error")
      } catch (error) {
        // During build time or if API fails, show error state
        console.warn("Failed to fetch blog posts:", error)
        setStatus("error")
      }
    }

    // Only fetch on client-side, not during SSR/build
    if (typeof window !== 'undefined') {
      fetchBlogPosts()
    }
  }, [])

  const [featured, ...rest] = articles

  return (
    <SiteLayout>
      {/* Header */}
      <header className="space-y-4 text-center">
        <h1 className="font-display text-5xl font-bold tracking-tight text-ink-950">Blog</h1>
        <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-ink-950/70">
          Stories behind Indian games, culture and play, parenting, strategy, and festival traditions — from the Roll the Dice team.
        </p>
      </header>

      <section className="mt-12">

        {/* Loading skeletons */}
        {status === "loading" && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
        )}

        {/* Error fallback */}
        {status === "error" && (
          <div className="flex flex-col items-center gap-4 rounded-3xl border border-ink-950/[0.08] bg-white p-12 text-center shadow-soft">
            <p className="font-body text-base text-ink-950/60">
              Couldn't load posts right now. Read all articles directly on Roll the Dice.
            </p>
            <a
              href="https://rollthedice.in/blogs/talk"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-ink-950/[0.08] bg-sand-50 px-5 py-2.5 font-ui text-sm font-semibold text-ink-950 no-underline transition hover:bg-sand-100"
            >
              Visit the blog →
            </a>
          </div>
        )}

        {/* Posts grid */}
        {status === "success" && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured && <BlogCard article={featured} featured />}
            {rest.map(article => (
              <BlogCard key={article.id} article={article} />
            ))}
          </div>
        )}

      </section>

      {/* Footer CTA */}
      {status === "success" && (
        <div className="mt-10 flex justify-center">
          <a
            href="https://rollthedice.in/blogs/talk"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-ink-950/[0.08] bg-white px-6 py-3 font-ui text-sm font-semibold text-ink-950/60 shadow-soft no-underline transition hover:bg-sand-50 hover:text-ink-950"
          >
            View all posts on Roll the Dice →
          </a>
        </div>
      )}
    </SiteLayout>
  )
}

export const Head = () => <Seo title="Blog" pathname="/blog" />