function ExecutiveProof({ title, blocks = [], closing }) {
  return (
    <article className="card proof-card executive-proof-card">
      <span className="eyebrow">Executive Proof</span>
      <h2>{title}</h2>
      <div className="executive-proof-body">
        <div className="proof-blocks" aria-label="Executive proof highlights">
          {blocks.map((block) => (
            <div key={block.title} className="proof-block">
              <span className="proof-block-title">{block.title}</span>
              <p className="proof-block-copy">{block.text}</p>
            </div>
          ))}
        </div>
        {closing ? <p className="proof-closing">{closing}</p> : null}
      </div>
    </article>
  )
}

export default ExecutiveProof
