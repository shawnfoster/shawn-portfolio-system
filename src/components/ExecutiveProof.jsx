function ExecutiveProof({ title, bullets }) {
  return (
    <article className="card proof-card executive-proof-card">
      <span className="eyebrow">Executive Proof</span>
      <h2>{title}</h2>
      <ul className="proof-list">
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </article>
  )
}

export default ExecutiveProof
