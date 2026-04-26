function Strengths({ items }) {
  return (
    <section id="strengths" className="site-section section-block strengths-section">
      <div className="section-copy">
        <span className="eyebrow">Strengths</span>
        <h2 className="section-title">The system behind the outcomes.</h2>
      </div>

      <div className="section-inner card-grid-3 strength-grid">
        {items.map((item) => (
          <article key={item} className="card strength-card">
            <p>{item}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Strengths
