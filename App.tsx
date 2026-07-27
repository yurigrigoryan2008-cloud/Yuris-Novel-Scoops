import { useState } from 'react'
import { menuSections, type Flavor } from '@/lib/flavors'
import { FlavorCard } from '@/components/flavor-card'
import { RecommendationTray } from '@/components/recommendation-tray'
import { FlavourReading } from '@/components/flavour-reading'

export default function App() {
  const [selected, setSelected] = useState<Flavor | null>(null)

  return (
    <div className="dark">
      <main className="mx-auto flex min-h-dvh w-full max-w-6xl flex-col px-4 py-10 sm:px-8 sm:py-16">
        {/* Header */}
        <header className="mb-12 text-center sm:mb-16">
          <div
            aria-hidden
            className="mx-auto mb-6 h-px w-24 bg-gradient-to-r from-transparent via-gold/60 to-transparent"
          />
          <h1 className="font-serif text-3xl font-bold leading-tight tracking-tight text-gold text-balance sm:text-5xl lg:text-6xl">
            Yuri&apos;s Novel Scoops
          </h1>
          <p className="mx-auto mt-4 max-w-md font-serif text-base italic text-muted-foreground sm:text-lg text-pretty">
            Book recommendations served fresh by flavour profile.
          </p>
          <div
            aria-hidden
            className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-gold/60 to-transparent"
          />
        </header>

        {/* The Flavour Reading */}
        <div className="mb-16 sm:mb-20">
          <FlavourReading />
        </div>

        {/* Visual separator */}
        <div className="mb-16 flex items-center gap-4 sm:mb-20">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/30 to-gold/30" />
          <span className="shrink-0 font-sans text-[0.65rem] uppercase tracking-[0.25em] text-gold/50">
            The Full Menu
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gold/30 to-gold/30" />
        </div>

        {/* Menu sections */}
        <div className="flex flex-col gap-16 sm:gap-20">
          {menuSections.map((section) => (
            <section key={section.id} aria-labelledby={`menu-${section.id}-heading`}>
              <div className="mb-8 text-center sm:mb-10">
                <h2
                  id={`menu-${section.id}-heading`}
                  className="font-serif text-2xl font-bold uppercase tracking-[0.18em] text-terracotta text-balance sm:text-3xl"
                >
                  {section.title}
                </h2>
                <p className="mt-2 font-serif text-sm italic text-muted-foreground sm:text-base">
                  {section.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
                {section.flavors.map((flavor) => (
                  <FlavorCard key={flavor.id} flavor={flavor} onSelect={setSelected} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-auto pt-20">
          <div
            aria-hidden
            className="mx-auto mb-6 h-px w-24 bg-gradient-to-r from-transparent via-gold/60 to-transparent"
          />
          <p className="text-center font-sans text-xs uppercase leading-relaxed tracking-[0.25em] text-muted-foreground/70 sm:text-sm">
            Yuri&apos;s Novel Scoops &middot; Est. 2026 &middot; A Scoop for Every Story
          </p>
        </footer>

        <RecommendationTray flavor={selected} onClose={() => setSelected(null)} />
      </main>
    </div>
  )
}
