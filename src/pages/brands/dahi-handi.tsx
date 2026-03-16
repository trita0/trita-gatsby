import * as React from "react"

import BrandPageLayout from "../../layouts/BrandPageLayout"
import Button from "../../components/ui/Button"

const features = [
  {
    number: `01`,
    title: `Slingshot Physics Gameplay`,
    desc: `Master the realistic swing of the pots and the trajectory of your slingshot. Time your shot perfectly and smash the swinging matkas filled with butter.`,
    tag: `Gameplay`,
  },
  {
    number: `02`,
    title: `Festive Levels`,
    desc: `Progress through dozens of unique levels with increasing difficulty and movement patterns — each inspired by the Janmashtami celebration.`,
    tag: `Gameplay`,
  },
  {
    number: `03`,
    title: `Simple One-Touch Controls`,
    desc: `Intuitive one-touch gameplay designed for quick pickup by kids aged 3+. No complicated buttons — just aim, pull, and release.`,
    tag: `Design`,
  },
  {
    number: `04`,
    title: `Authentic Indian Design`,
    desc: `Beautiful semi-flat art inspired by traditional Indian folk styles and temple motifs. Soothing, authentic Indian soundscapes and satisfying butter-burst animations.`,
    tag: `Design`,
  },
  {
    number: `05`,
    title: `No Data Collection`,
    desc: `Absolutely no data collection. Works fully offline. No in-app purchases, no hidden costs, no confusing subscriptions. Truly free.`,
    tag: `Safe`,
  },
  {
    number: `06`,
    title: `Cultural Awareness`,
    desc: `A fun, interactive way to introduce children to the significance of the Janmashtami festival and the playful stories of Lord Krishna.`,
    tag: `Education`,
  },
]

const educationalValues = [
  {
    title: `Hand-Eye Coordination`,
    desc: `Players judge the timing and angle needed to hit a fast-moving, swinging target — building core motor skills.`,
  },
  {
    title: `Focus & Patience`,
    desc: `Success depends on waiting for the exact perfect moment to release the slingshot, reinforcing focus and patience.`,
  },
  {
    title: `Cultural Awareness`,
    desc: `Children learn about the significance of Janmashtami and the playful stories of Lord Krishna through play.`,
  },
]

const whyParentsLove = [
  `Safe & Private — no data collection, works fully offline`,
  `Truly Free — no in-app purchases or hidden costs`,
  `Zero mess fun — break pots safely on screen`,
  `Quick sessions — perfect for 5–10 minute bursts`,
  `Rated 3+ — wholesome screen time for young children`,
]

const screenshots = [
  `https://play-lh.googleusercontent.com/-OB_WSs7ySkfUGj14oAWYTPM6eCRwqvW-60jo8oHQ1QoZpOSEoNX8t2z8xE_o5ZaIhFHap_R2bX-Fx9IbPVRro8=w526-h296`,
  `https://play-lh.googleusercontent.com/YAfMh_SkFm83jzcwTus9wFQgoz1vyL3zBzIq5gS1txx-VPNUa3MZQNYnCLCAhYvlobukCe9esWRXKhjhKQ51hQ=w526-h296`,
  `https://play-lh.googleusercontent.com/37o5nwiKNV0_tNpUWZ7zxnJKXgmqGMmiWE28qcwNFSA8vmGnsXxCqeQfPX6ZN3MJufiy_PuPUdYFuGb8wHVlooE=w526-h296`,
  `https://play-lh.googleusercontent.com/aGKBolz5K-n9i-GLKBA98Mj9t7FBmrHUOe_kDgdg-5N2z-2QNTMrJqu_EJSzV2q5k3j88o7paayKi6nKoUlo0QA=w526-h296`,
]

export default function DahiHandiPage() {
  return (
    <BrandPageLayout
      title="Dahi Handi"
      subtitle="Brand / Dahi Handi"
      logo="/dahi-handi-logo.png"
      website="https://play.google.com/store/apps/details?id=com.tollugatti.dahihandi&hl=en_IN"
      description={
        <p>
          Inspired by the vibrant Indian festival of Janmashtami and the playful antics of Lord Krishna, Dahi Handi
          is a relaxing, physics-based slingshot game perfect for kids and families. Aim your slingshot, time your
          shot perfectly, and smash the swinging matkas filled with butter. The spirit of Janmashtami — in your pocket.
          Made in India 🇮🇳 by Trita Infotainment LLP.
        </p>
      }
    >
      {/* Feature cards */}
      {features.map(f => (
        <div
          key={f.title}
          className="flex flex-col overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white p-6 shadow-soft"
        >
          <div className="flex items-center justify-between">
            <span className="font-ui text-xs font-medium tracking-widest text-ink-950/25">{f.number}</span>
            <span className="rounded-full border border-ink-950/[0.12] px-3 py-0.5 font-ui text-xs tracking-wide text-ink-950/45">
              {f.tag}
            </span>
          </div>
          <h3 className="mt-3 font-heading text-lg font-bold text-ink-950">{f.title}</h3>
          <p className="mt-2 flex-1 font-caption text-sm leading-relaxed text-ink-950/65">{f.desc}</p>
        </div>
      ))}

      {/* Screenshots */}
      <div className="col-span-full mt-4 space-y-5">
        <div>
          <h2 className="font-heading text-2xl font-bold text-ink-950">See It in Action</h2>
          <p className="mt-1 font-body text-sm leading-relaxed text-ink-950/60">
            Screenshots from the game — available on Google Play Store.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {screenshots.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-ink-950/[0.08] bg-sand-50 shadow-soft">
              <img
                src={src}
                alt={`Dahi Handi screenshot ${i + 1}`}
                className="w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Educational value + Why parents love it */}
      <div className="col-span-full mt-4 grid gap-6 sm:grid-cols-2">

        {/* Educational value */}
        <div className="overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft">
          <div className="border-b border-ink-950/[0.08] px-7 py-5">
            <span className="font-ui text-xs font-medium uppercase tracking-widest text-ink-950/30">Educational value</span>
          </div>
          <div className="flex flex-col gap-0">
            {educationalValues.map((e, i) => (
              <div
                key={e.title}
                className={`flex flex-col gap-1 px-7 py-5 ${i !== educationalValues.length - 1 ? "border-b border-ink-950/[0.08]" : ""}`}
              >
                <span className="font-heading text-sm font-bold text-ink-950">{e.title}</span>
                <span className="font-caption text-sm leading-relaxed text-ink-950/60">{e.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why parents love it */}
        <div className="overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft">
          <div className="border-b border-ink-950/[0.08] px-7 py-5">
            <span className="font-ui text-xs font-medium uppercase tracking-widest text-ink-950/30">Why parents love it</span>
          </div>
          <div className="flex flex-col gap-0">
            {whyParentsLove.map((item, i) => (
              <div
                key={item}
                className={`flex items-center gap-3 px-7 py-4 ${i !== whyParentsLove.length - 1 ? "border-b border-ink-950/[0.08]" : ""}`}
              >
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-marigold-500" />
                <span className="font-body text-sm text-ink-950/70">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="col-span-full mt-4 overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft">
        <div className="flex flex-col justify-between gap-8 p-8 sm:flex-row sm:items-center sm:p-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-marigold-500/15 px-3 py-0.5 font-ui text-xs font-semibold text-marigold-600">
                Free to download
              </span>
              <span className="font-ui text-xs text-ink-950/40">100+ downloads · Rated 3+</span>
            </div>
            <h2 className="font-heading text-2xl font-bold text-ink-950">Download Dahi Handi</h2>
            <p className="max-w-lg font-body text-sm leading-relaxed text-ink-950/65">
              Available on Google Play Store. No in-app purchases. No data collection. Works offline. Safe for kids aged 3+.
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-wrap gap-3">
            <Button
              href="https://play.google.com/store/apps/details?id=com.tollugatti.dahihandi&hl=en_IN"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 text-sm"
            >
              Download on Play Store
            </Button>
          </div>
        </div>
      </div>
    </BrandPageLayout>
  )
}