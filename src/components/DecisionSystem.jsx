function DecisionSystem({ title, description, operatingModel, children }) {
  return (
    <article className="card decision-card decision-system-card">
      <div className="decision-system-main">
        <span className="eyebrow">Decision System</span>
        <h2 className="section-title">{title}</h2>
        <p className="decision-lead">{description}</p>

        <div className="decision-support" aria-label="Decision support context">
          <div className="decision-meta-block">
            <span className="decision-meta-label">Signals I Connect</span>
            <p className="decision-meta-copy">
              Customer behavior · Revenue data · Operational context
            </p>
          </div>

          <div className="decision-meta-block">
            <span className="decision-meta-label">Decisions I Support</span>
            <p className="decision-meta-copy">Retention · Expansion · Growth prioritization</p>
          </div>
        </div>

        <div className="operating-strip" aria-label="Operating model">
          <span className="operating-label">Operating Model</span>
          <div className="operating-steps">
            {operatingModel.map((step) => (
              <span key={step} className="operating-step">
                {step}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="decision-system-proof-slot">{children}</div>
    </article>
  )
}

export default DecisionSystem
