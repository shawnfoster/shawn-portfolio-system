function SelectedBuilds({ title, intro, items }) {
  return (
    <section id="builds" className="site-section section-block builds-section">
      <div className="section-copy">
        <span className="eyebrow">Selected Builds</span>
        <h2 className="section-title">{title}</h2>
        <p>{intro}</p>
      </div>

      <div className="section-inner card-grid-3 build-grid">
        {items.map((item) => (
          <article key={item.title} className="card build-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="tag-row">
              {item.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <a className="inline-link" href={item.href} target="_blank" rel="noreferrer">
              {item.cta}
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SelectedBuilds
