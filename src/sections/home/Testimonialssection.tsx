import * as React from "react"

import Button from "../../components/ui/Button"


const testimonials = [
  {
    quote: `Playing this brought back memories of summer afternoons with my grandmother. We had Chowka Bara etched on the floor of our living room. The game itself is so much fun. Especially if you have a 'gatti'. Buy and play!`,
    author: `Rashmi Canchi`,
    product: `Chowka Bara`,
  },
  {
    quote: `The quality of the product is outstanding. The fabric used is excellent and durable too. It has been my go-to gift for kids. Applaud the efforts in reviving the lost Indian games.`,
    author: `Rianshi`,
    product: `Chowka Bara`,
  },
  {
    quote: `I ordered this as a gift for my nephew visiting India in his summer holidays. I wanted to gift him something related to Indian culture. The cloth board is beautiful and easy to play anywhere.`,
    author: `Shopaholic Aunty`,
    product: `Chowka Bara`,
  },
  {
    quote: `Very beautiful, traditional products. Must buy as gifts, presents, return gifts etc.`,
    author: `Venkat`,
    product: `Sri Rama Pattabhisheka Puzzle`,
  },
  {
    quote: `This is my choice of gift for kids. Kids love animals and these are our Devata Vahanas. This puzzle is an excellent start in introducing our devatas to kids.`,
    author: `Sachidananda Urs`,
    product: `Devata Vahanas Puzzle`,
  },
  {
    quote: `Lovely! Thanks for bringing the traditional games alive. My 5-year-old grand daughter loves this game. Thanks for creating something so meaningful.`,
    author: `Uma`,
    product: `Chowka Bara`,
  },
  {
    quote: `A wonderful initiative. These games enhance competitive and healthy mindful thinking in children and teach skills no textbook can. Thank you for bringing the child in me alive again.`,
    author: `Sushmitha Shravan`,
    product: `Chowka Bara`,
  },
  {
    quote: `It's so beautifully designed and very well made. Anyone who sees the quality will feel it's totally worth the money. Hope your products reach many more homes and make them happy too.`,
    author: `Chandana Chandrashekhar`,
    product: `Chowka Bara`,
  },
]


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


type TestimonialsSectionProps = {
  /** Max number of testimonials to show. Defaults to all 8. */
  limit?: number
  /** Whether to show the "Your feedback matters" review links panel. Defaults to true. */
  showReviewLinks?: boolean
  /** Whether to show the section header. Defaults to true. */
  showHeader?: boolean
  /** Whether to wrap in mt-14 like other home sections. Defaults to true. */
  withMargin?: boolean
}


export default function TestimonialsSection({
  limit,
  showReviewLinks = true,
  showHeader = true,
  withMargin = true,
}: TestimonialsSectionProps) {
  const displayed = limit ? testimonials.slice(0, limit) : testimonials

  return (
    <section className={withMargin ? "mt-14" : undefined}>

      {/* Header */}
      {showHeader && (
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
      )}

      {/* Masonry testimonial cards */}
      <div className={`columns-1 gap-6 sm:columns-2 lg:columns-3 ${showHeader ? "mt-8" : ""}`}>
        {displayed.map((t, i) => (
          <Reveal key={t.author} delay={i * 50}>
            <div className="mb-6 break-inside-avoid overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white p-6 shadow-soft">
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

      {/* Mobile "all reviews" link */}
      {showHeader && (
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
      )}

      {/* Review links panel */}
      {showReviewLinks && (
        <Reveal>
          <div className="mt-8 overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft">
            <div className="border-b border-ink-950/[0.08] px-8 py-6">
              <h3 className="font-heading text-xl font-bold text-ink-950">Your feedback matters</h3>
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
        </Reveal>
      )}

    </section>
  )
}