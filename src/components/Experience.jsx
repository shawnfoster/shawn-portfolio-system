function Experience({ items }) {
  return (
    <section id="experience" className="site-section section-block experience-section">
      <div className="section-copy">
        <span className="eyebrow">Experience</span>
        <h2 className="section-title">Tight systems, visible outcomes.</h2>
        <p>Three environments. Same job: make the decision clearer before the cost compounds.</p>
      </div>

      <div className="experience-list">
        {items.map((item) => (
          <article key={item.id} className="card experience-card">
            <div className="experience-header">
              <span className="experience-number">{item.id}</span>
              <div>
                <h3>{item.title}</h3>
                <p className="experience-subtitle">{item.subtitle}</p>
              </div>
            </div>

            <p>{item.description}</p>

            <ul className="result-list">
              {item.results.map((result) => (
                <li key={result}>{result}</li>
              ))}
            </ul>

            <div className="experience-tags">
              {item.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
