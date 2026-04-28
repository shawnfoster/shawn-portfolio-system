function ExecutiveProof({ title, lead, bullets, closing }) {
  return (
    <article className="card proof-card executive-proof-card">
      <span className="eyebrow">Executive Proof</span>
      <h2>{title}</h2>
      <div className="executive-proof-body">
        {lead ? <p>{lead}</p> : null}
        <ul className="proof-list">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
        {closing ? <p className="proof-closing">{closing}</p> : null}
      </div>
    </article>
  )
}

export default ExecutiveProof
