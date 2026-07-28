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
