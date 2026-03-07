import * as React from "react"

import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"
import Card from "../components/ui/Card"
import Button from "../components/ui/Button"

export default function ProductsPage() {
  return (
    <SiteLayout>
      <header className="space-y-4">
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink-950">Products</h1>
        <p className="max-w-2xl font-body text-lg leading-relaxed text-ink-950/70">
          Board games, educational products, and experiential game installations.
        </p>
      </header>

      <section className="mt-12">
        <h2 className="font-heading text-3xl font-bold text-ink-950">Board Games</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            `Chowka Bara`,
            `Aadu Huli`,
            `Navakankari`,
            `Pagade`,
            `Sholo Gutti`,
          ].map(name => (
            <Card key={name} className="transition hover:shadow-lift">
              <div className="font-heading text-lg font-bold text-ink-950">{name}</div>
              <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Placeholder product description.</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-heading text-3xl font-bold text-ink-950">Educational Products</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[`Cultural puzzles`, `Activity books`].map(name => (
            <Card key={name} className="transition hover:shadow-lift">
              <div className="font-heading text-lg font-bold text-ink-950">{name}</div>
              <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Placeholder product description.</p>
            </Card>
          ))}
        </div>
      </section>

      {/* <section className="mt-16">
        <h2 className="font-heading text-3xl font-bold text-ink-950">Experiential Game Installations</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card className="transition hover:shadow-lift">
            <div className="font-heading text-lg font-bold text-ink-950">Large-format play</div>
            <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">Installations for festivals, museums, schools, and events.</p>
            <div className="mt-6">
              <Button variant="secondary" to="/collaborate" className="px-6 py-2 text-sm font-bold">
                Enquire
              </Button>
            </div>
          </Card>
          <Card className="transition hover:shadow-lift bg-marigold-50/30">
            <div className="font-heading text-lg font-bold text-ink-950">Shop</div>
            <p className="mt-2 font-caption text-sm leading-relaxed text-ink-950/70">CTA placeholder.</p>
            <div className="mt-6">
              <Button href="#" variant="primary" className="px-6 py-2 text-sm font-bold">
                Shop Now
              </Button>
            </div>
          </Card>
        </div>
      </section> */}
    </SiteLayout>
  )
}

export const Head = () => <Seo title="Products" pathname="/products" />
