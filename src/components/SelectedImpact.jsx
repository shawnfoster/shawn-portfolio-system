function SelectedImpact({ title, intro, cards }) {
  return (
    <section id="impact" className="site-section section-block impact-section">
      <div className="section-copy">
        <span className="eyebrow">Selected Impact</span>
        <h2 className="section-title">{title}</h2>
        <p>{intro}</p>
      </div>

      <div className="section-inner card-grid-3 impact-grid">
        {cards.map((card) => (
          <article key={card.title} className="card impact-card">
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SelectedImpact
