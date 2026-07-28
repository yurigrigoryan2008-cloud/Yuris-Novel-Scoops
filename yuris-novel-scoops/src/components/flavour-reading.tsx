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
      setShowLimitMsg(false)
    }
  }

  // ── Execute Reading with AI Agent ───────────────────────────────────────────
  async function handleReadFlavors() {
    if (selected.length === 0) return
    setPhase('loading')
    setCoverLoaded(false)
    setCoverUrl(null)

    try {
      const response = await fetch('/api/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ flavors: selected })
      })

      if (!response.ok) throw new Error('API failure')
      const data = await response.json()
      setResult(data)
      
      if (data.bookTitle) {
        const coverRes = await fetch(/api/cover?title=${encodeURIComponent(data.bookTitle)}&author=${encodeURIComponent(data.bookAuthor || '')})
        if (coverRes.ok) {
          const coverData = await coverRes.json()
          if (coverData.url) setCoverUrl(coverData.url)
        }
      }
      setPhase('result')
    } catch (err) {
      setPhase('error')
    }
  }

  return (
    <div className="rounded-xl border border-gold/20 bg-background/50 p-6 backdrop-blur-sm sm:p-8">
      {phase === 'select' && (
        <div>
          <h3 className="font-serif text-xl text-gold mb-4">Select up to 3 Flavors for your literary reading</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {ALL_FLAVOUR_NAMES.map((name) => {
              const isSelected = selected.includes(name)
              return (
                <button
                  key={name}
                  onClick={() => handleToggle(name)}
                  className={
                    isSelected 
                      ? "px-3 py-1.5 rounded-full border text-xs font-medium transition-all bg-gold border-gold text-background" 
                      : "px-3 py-1.5 rounded-full border text-xs font-medium transition-all border-gold/30 text-gold/80 hover:border-gold"
                    }
                >
                  {name}
                </button>
              )
            })}
          </div>
          {showLimitMsg && <p className="text-xs text-terracotta mb-4">You can only select up to 3 flavors at a time!</p>}
          <button
            onClick={handleReadFlavors}
            disabled={selected.length === 0}
            className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-gold to-gold/80 hover:from-gold/90 text-background font-medium rounded shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-all uppercase tracking-wider text-xs"
          >
            Read My Flavors
          </button>
        </div>
      )}

      {phase === 'loading' && (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-gold border-t-transparent mb-4" />
          <p className="font-serif text-gold italic">Churning your flavor profile into stories...</p>
        </div>
      )}

      {phase === 'result' && result && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
          <div className="aspect-[3/4] relative overflow-hidden rounded bg-neutral-900 border border-gold/10 md:col-span-1">
            {coverUrl ? (
              <img 
                src={coverUrl} 
                alt={result.bookTitle} 
                onLoad={() => setCoverLoaded(true)}
                className={coverLoaded ? "h-full w-full object-cover transition-opacity duration-300 opacity-100" : "h-full w-full object-cover transition-opacity duration-300 opacity-0"}
              />
            ) : <BookCoverFallback />}
          </div>
          <div className="md:col-span-3">
            <h4 className="font-serif text-2xl text-gold font-bold mb-1">{result.bookTitle}</h4>
            <p className="text-sm text-muted-foreground mb-4">by {result.bookAuthor} • <span className="italic">{result.bookGenre}</span></p>
            <p className="text-sm leading-relaxed mb-6 text-gold/90 border-l-2 border-gold/30 pl-4 italic">{result.reading}</p>
            <p className="text-xs font-serif tracking-widest text-terracotta font-semibold uppercase">Mic Drop: {result.micDrop}</p>
            <button 
              onClick={() => { setPhase('select'); setSelected([]); }} 
              className="mt-6 text-xs text-gold/60 hover:text-gold transition-colors underline underline-offset-4"
            >
              Try another flavor combo
            </button>
          </div>
        </div>
      )}

      {phase === 'error' && (
        <div className="text-center py-8">
          <p className="text-sm text-terracotta mb-4">The literary agent is temporarily resting. Please try again in a moment.</p>
          <button 
            onClick={() => setPhase('select')} 
            className="px-4 py-2 bg-gold/10 hover:bg-gold/20 border border-gold/30 text-gold rounded text-xs"
          >
            Go Back
          </button>
        </div>
      )}
    </div>
  )
}
