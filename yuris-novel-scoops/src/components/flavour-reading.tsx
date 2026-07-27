import { useEffect, useState } from 'react'
import { menuSections } from '@/lib/flavors'

/** All 24 flavour names flat, in menu order */
const ALL_FLAVOUR_NAMES = menuSections.flatMap((s) => s.flavors.map((f) => f.name))

type Phase = 'select' | 'loading' | 'result' | 'error'

interface ReadingResult {
  reading: string
  bookTitle: string
  bookAuthor: string
  bookGenre: string
  micDrop: string
}

// ─── Shared SVG book cover fallback ──────────────────────────────────────────

function BookCoverFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center rounded bg-terracotta/10">
      <svg
        viewBox="0 0 48 64"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-10 w-8 text-terracotta/50"
        aria-hidden
      >
        <rect x="6" y="4" width="36" height="56" rx="3" />
        <line x1="14" y1="4" x2="14" y2="60" />
        <line x1="20" y1="18" x2="36" y2="18" />
        <line x1="20" y1="24" x2="36" y2="24" />
        <line x1="20" y1="30" x2="36" y2="30" />
        <line x1="20" y1="36" x2="30" y2="36" />
      </svg>
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export function FlavourReading() {
  const [selected, setSelected] = useState<string[]>([])
  const [phase, setPhase] = useState<Phase>('select')
  const [result, setResult] = useState<ReadingResult | null>(null)
  const [coverUrl, setCoverUrl] = useState<string | null>(null)
  const [coverLoaded, setCoverLoaded] = useState(false)
  const [showLimitMsg, setShowLimitMsg] = useState(false)

  // ── Flavour toggle ──────────────────────────────────────────────────────────
  function handleToggle(name: string) {
    if (selected.includes(name)) {
      setSelected((prev) => prev.filter((f) => f !== name))
    } else if (selected.length >= 3) {
      setShowLimitMsg(true)
    } else {
      setSelected((prev) => [...prev, name])
    }
  }

  // Auto-dismiss the limit message
  useEffect(() => {
    if (!showLimitMsg) return
    const t = setTimeout(() => setShowLimitMsg(false), 2500)
    return () => clearTimeout(t)
  }, [showLimitMsg])

  // ── Submit ──────────────────────────────────────────────────────────────────
  async function handleSubmit() {
    if (selected.length < 2) return
    setPhase('loading')
    setResult(null)
    setCoverUrl(null)
    setCoverLoaded(false)

    try {
      const res = await fetch('/api/flavour-reading', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ flavours: selected }),
      })
      const data = (await res.json()) as ReadingResult & { error?: string }
      if (!res.ok || data.error) {
        setPhase('error')
        return
      }
      setResult(data)
      setPhase('result')
    } catch {
      setPhase('error')
    }
  }

  // ── Fetch book cover after result arrives ───────────────────────────────────
  useEffect(() => {
    if (phase !== 'result' || !result) return
    let cancelled = false

    async function fetchCover() {
      try {
        const params = new URLSearchParams({
          title: result!.bookTitle,
          author: result!.bookAuthor,
        })
        const res = await fetch(`/api/book-cover?${params.toString()}`)
        if (!res.ok) return
        const json = (await res.json()) as { coverUrl?: string | null }
        if (!cancelled && json.coverUrl) {
          setCoverUrl(json.coverUrl)
        }
      } catch {
        // Fall through to SVG placeholder
      }
    }

    fetchCover()
    return () => {
      cancelled = true
    }
  }, [phase, result])

  // ── Reset ───────────────────────────────────────────────────────────────────
  function reset() {
    setSelected([])
    setPhase('select')
    setResult(null)
    setCoverUrl(null)
    setCoverLoaded(false)
    setShowLimitMsg(false)
  }

  const canSubmit = selected.length >= 2
  const isActive = phase !== 'select'

  return (
    <section aria-label="The Flavour Reading">
      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <div className="mb-8 text-center sm:mb-10">
        <h2 className="font-serif text-2xl font-bold text-gold text-balance sm:text-3xl lg:text-4xl">
          The Flavour Reading
        </h2>
        <p className="mt-2 font-serif text-sm italic text-muted-foreground sm:text-base">
          Select your flavours. We&apos;ll read between the scoops.
        </p>
      </div>

      {/* ── Flavour pills ───────────────────────────────────────────────────── */}
      <div
        role="group"
        aria-label="Choose your flavours (2–3)"
        className="flex flex-wrap gap-2"
      >
        {ALL_FLAVOUR_NAMES.map((name) => {
          const isSelected = selected.includes(name)
          return (
            <button
              key={name}
              type="button"
              onClick={() => handleToggle(name)}
              aria-pressed={isSelected}
              disabled={isActive}
              className={`rounded-full border px-3.5 py-1.5 font-sans text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 disabled:pointer-events-none disabled:opacity-50 sm:text-sm ${
                isSelected
                  ? 'border-terracotta bg-terracotta text-white'
                  : 'border-border bg-background/40 text-muted-foreground hover:border-terracotta/60 hover:text-foreground'
              }`}
            >
              {name}
            </button>
          )
        })}
      </div>

      {/* ── Limit message ───────────────────────────────────────────────────── */}
      <div
        aria-live="polite"
        className={`mt-3 text-center transition-opacity duration-300 ${showLimitMsg ? 'opacity-100' : 'opacity-0'}`}
      >
        <span className="font-serif text-xs italic text-muted-foreground">
          Three scoops is the perfect reading.
        </span>
      </div>

      {/* ── CTA button ─────────────────────────────────────────────────────── */}
      {!isActive && (
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!canSubmit}
            className="rounded-full bg-terracotta px-8 py-3 font-serif text-sm font-semibold text-white shadow-md shadow-terracotta/20 transition-all hover:bg-terracotta/90 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/50 disabled:cursor-not-allowed disabled:opacity-35 sm:text-base"
          >
            Read My Flavours
          </button>
          {selected.length === 1 && (
            <p className="mt-2 font-sans text-[0.7rem] italic text-muted-foreground/60">
              Select one more to begin.
            </p>
          )}
        </div>
      )}

      {/* ── Loading state ───────────────────────────────────────────────────── */}
      {phase === 'loading' && (
        <div className="mt-8 paper-grain rounded-xl border border-gold/30 bg-card p-10 text-center sm:p-14">
          <p className="animate-pulse font-serif text-lg italic text-gold sm:text-xl">
            The Flavour Reading is in progress…
          </p>
        </div>
      )}

      {/* ── Error state ─────────────────────────────────────────────────────── */}
      {phase === 'error' && (
        <div className="mt-8 paper-grain rounded-xl border border-terracotta/20 bg-card p-8 text-center">
          <p className="font-serif text-base italic text-muted-foreground">
            The reading is temporarily unavailable. Please try again.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-5 font-sans text-xs uppercase tracking-[0.15em] text-muted-foreground/60 underline-offset-4 transition-colors hover:text-muted-foreground hover:underline focus-visible:outline-none"
          >
            Try again
          </button>
        </div>
      )}

      {/* ── Result card ─────────────────────────────────────────────────────── */}
      {phase === 'result' && result && (
        <div className="mt-8 paper-grain rounded-xl border border-gold/30 bg-card p-6 sm:p-8">
          {/* Selected flavours label */}
          <p className="mb-5 font-sans text-xs uppercase tracking-[0.2em] text-terracotta">
            {selected.join(' · ')}
          </p>

          {/* Literary reading */}
          <p className="font-serif text-base leading-relaxed text-foreground text-pretty sm:text-lg">
            {result.reading}
          </p>

          {/* Divider */}
          <div
            aria-hidden
            className="my-7 h-px w-full bg-gradient-to-r from-transparent via-gold/25 to-transparent"
          />

          {/* Book card */}
          <div className="flex gap-5">
            {/* Cover */}
            <div className="relative h-36 w-24 shrink-0 overflow-hidden rounded shadow-lg shadow-black/50 sm:h-44 sm:w-28">
              {coverUrl ? (
                <>
                  {!coverLoaded && <BookCoverFallback />}
                  <img
                    src={coverUrl}
                    alt={`Cover of ${result.bookTitle}`}
                    onLoad={() => setCoverLoaded(true)}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
                      coverLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </>
              ) : (
                <BookCoverFallback />
              )}
            </div>

            {/* Book details */}
            <div className="min-w-0 flex-1">
              <h3 className="font-serif text-xl font-bold leading-snug text-foreground text-balance sm:text-2xl">
                {result.bookTitle}
              </h3>
              <p className="mt-1.5 font-sans text-sm text-muted-foreground">
                by {result.bookAuthor}
              </p>
              <span className="mt-3 inline-block rounded-full border border-terracotta/50 bg-terracotta/10 px-2.5 py-0.5 font-sans text-[0.7rem] font-medium uppercase tracking-wide text-terracotta">
                {result.bookGenre}
              </span>
            </div>
          </div>

          {/* Mic drop */}
          <p className="mt-6 font-serif text-sm italic leading-relaxed text-muted-foreground text-pretty sm:text-base">
            {result.micDrop}
          </p>

          {/* Reset */}
          <div className="mt-7 text-center">
            <button
              type="button"
              onClick={reset}
              className="rounded-full border border-gold/40 bg-gold/10 px-6 py-2.5 font-sans text-xs font-medium uppercase tracking-[0.15em] text-gold transition-colors hover:border-gold/70 hover:bg-gold/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 sm:text-sm"
            >
              Read My Flavours Again
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
