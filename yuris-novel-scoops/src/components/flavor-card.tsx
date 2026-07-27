import type { Flavor } from '@/lib/flavors'
import { FlavorIcon } from '@/components/flavor-icon'

type Props = {
  flavor: Flavor
  onSelect: (flavor: Flavor) => void
}

export function FlavorCard({ flavor, onSelect }: Props) {
  return (
    <button
      type="button"
      onClick={() => onSelect(flavor)}
      aria-label={`View book recommendations for ${flavor.name}`}
      className="paper-grain group relative flex aspect-square w-full flex-col items-center justify-center gap-4 rounded-xl border border-terracotta/40 bg-card p-6 text-center shadow-md shadow-black/30 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-terracotta hover:shadow-xl hover:shadow-black/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {/* thin gold inner frame */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-2 rounded-lg border border-gold/15 transition-colors duration-300 group-hover:border-gold/40"
      />

      <FlavorIcon
        icon={flavor.icon}
        className="h-16 w-16 text-terracotta transition-colors duration-300 group-hover:text-gold sm:h-20 sm:w-20"
      />

      <div className="flex flex-col gap-1">
        <h3 className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">
          {flavor.name}
        </h3>
        <p className="px-2 font-sans text-xs leading-relaxed text-muted-foreground sm:text-sm">
          {flavor.tagline}
        </p>
      </div>
    </button>
  )
}
