function JumpCard({ items, mediaProof, quote }) {
  return (
    <div className="jump-media-wrap">
      {quote ? (
        <article className="card jump-quote-card" aria-label="Quote billboard">
          <p className="jump-quote-text">“{quote.quote}”</p>
          <div className="jump-quote-meta">
            <span className="jump-quote-author">{quote.author}</span>
            {quote.context ? <span className="jump-quote-context">{quote.context}</span> : null}
          </div>
        </article>
      ) : null}

      <aside className="card jump-card">
        <div className="jump-card-top">
          <span className="eyebrow">Jump</span>
          <nav className="jump-links" aria-label="Section navigation">
            {items.map((item) => (
              <a key={item.href} href={item.href}>
                <span>{item.label}</span>
                <span aria-hidden="true">→</span>
              </a>
            ))}
          </nav>
        </div>
      </aside>

      {mediaProof ? (
        <article className="card jump-media-proof" aria-label="Media proof">
          <span className="jump-media-proof-title">{mediaProof.title}</span>
          <p className="jump-media-proof-body">{mediaProof.body}</p>
          <p className="jump-media-proof-support">{mediaProof.support}</p>
          <a className="jump-media-proof-cta" href={mediaProof.href} target="_blank" rel="noreferrer">
            {mediaProof.cta}
          </a>
        </article>
      ) : null}
    </div>
  )
}

export default JumpCard
