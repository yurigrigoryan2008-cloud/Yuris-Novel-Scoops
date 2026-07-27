'use client'

import { useEffect, useState } from 'react'
import type { Flavor, Book } from '@/lib/flavors'
import { FlavorIcon } from '@/components/flavor-icon'

type Props = {
  flavor: Flavor | null
  onClose: () => void
}

export function RecommendationTray({ flavor, onClose }: Props) {
  const open = flavor !== null

  // Close on Escape + lock body scroll while open
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Slide-out panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={flavor ? `${flavor.name} recommendations` : undefined}
        className={`paper-grain absolute right-0 top-0 flex h-full w-full flex-col border-gold/30 bg-card shadow-2xl transition-transform duration-500 ease-out sm:max-w-md sm:border-l lg:max-w-lg ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {flavor && (
          <>
            {/* Header */}
            <header className="relative flex items-center gap-4 border-b border-gold/20 px-6 py-6 sm:px-8">
              <FlavorIcon
                icon={flavor.icon}
                className="h-12 w-12 shrink-0 text-terracotta"
              />
              <div className="min-w-0">
                <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold">
                  Today&apos;s Scoop
                </p>
                <h2 className="font-serif text-3xl font-bold text-foreground">
                  {flavor.name}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close panel"
                className="ml-auto shrink-0 rounded-full border border-border p-3 text-muted-foreground transition-colors hover:border-terracotta hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:p-2.5"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 sm:h-4 sm:w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.75}
                  strokeLinecap="round"
                  aria-hidden
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </header>

            {/* Book stack */}
            <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8">
              <p className="mb-6 font-serif text-lg italic text-muted-foreground">
                Three pairings, served fresh.
              </p>
              <ol className="flex flex-col gap-5">
                {flavor.books.map((book, i) => (
                  <BookEntry key={book.title} book={book} index={i + 1} />
                ))}
              </ol>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}

/** Warm-toned SVG book icon shown when no cover is available */
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
        {/* Book body */}
        <rect x="6" y="4" width="36" height="56" rx="3" />
        {/* Spine */}
        <line x1="14" y1="4" x2="14" y2="60" />
        {/* Lines suggesting text */}
        <line x1="20" y1="18" x2="36" y2="18" />
        <line x1="20" y1="24" x2="36" y2="24" />
        <line x1="20" y1="30" x2="36" y2="30" />
        <line x1="20" y1="36" x2="30" y2="36" />
      </svg>
    </div>
  )
}

function BookEntry({ book, index }: { book: Book; index: number }) {
  const [coverUrl, setCoverUrl] = useState<string | null>(null)
  const [coverLoaded, setCoverLoaded] = useState(false)

  useEffect(() => {
    let cancelled = false

    async function fetchCover() {
      try {
        const params = new URLSearchParams({
          title: book.title,
          author: book.author,
        })
        const res = await fetch(`/api/book-cover?${params.toString()}`)
        if (!res.ok) return
        const json = (await res.json()) as { coverUrl?: string | null }
        if (!cancelled && json.coverUrl) {
          setCoverUrl(json.coverUrl)
        }
      } catch {
        // Silently swallow — fallback placeholder will render instead
      }
    }

    fetchCover()
    return () => {
      cancelled = true
    }
  }, [book.title, book.author])

  return (
    <li className="paper-grain group relative rounded-lg border border-border bg-background/40 p-5 transition-colors hover:border-terracotta/70">
      {/* Book cover — floated right so original text flow is preserved */}
      <div className="relative float-right ml-4 mb-2 h-24 w-16 overflow-hidden rounded shadow-md shadow-black/30 clear-right">
        {coverUrl ? (
          <>
            {!coverLoaded && <BookCoverFallback />}
            <img
              src={coverUrl}
              alt={`Cover of ${book.title}`}
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

      {/* Original card content — classes and structure unchanged */}
      <span
        aria-hidden
        className="absolute right-4 top-3 font-serif text-3xl font-bold text-gold/15"
      >
        {index}
      </span>
      <h3 className="pr-8 font-serif text-xl font-bold leading-tight text-foreground text-balance">
        {book.title}
      </h3>
      <p className="mt-1 font-sans text-sm text-muted-foreground">
        by {book.author}
      </p>
      <span className="mt-3 inline-block rounded-full border border-terracotta/50 bg-terracotta/10 px-2.5 py-0.5 font-sans text-[0.7rem] font-medium uppercase tracking-wide text-terracotta">
        {book.genre}
      </span>
      <p className="mt-3 font-sans text-sm leading-relaxed text-foreground/80 text-pretty">
        {book.description}
      </p>
    </li>
  )
}
