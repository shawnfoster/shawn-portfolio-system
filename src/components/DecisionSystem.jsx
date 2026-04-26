function DecisionSystem({ title, description, signalGroups = [], proof, operatingModel, children }) {
  return (
    <article className="card decision-card decision-system-card">
      <div className="decision-system-main">
        <div className="decision-system-top">
          <span className="eyebrow">Decision System</span>
          <h2 className="section-title">{title}</h2>
          <p className="decision-lead">{description}</p>
        </div>

        {signalGroups.length > 0 ? (
          <div className="decision-info-grid" aria-label="Decision inputs and outputs">
            {signalGroups.map((group) => (
              <div key={group.label} className="decision-info-block">
                <span className="decision-info-label">{group.label}</span>
                <p className="decision-info-copy">{group.value}</p>
              </div>
            ))}
          </div>
        ) : null}

        <div className="decision-system-footer">
          <p className="decision-proof">{proof}</p>

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
      </div>

      <div className="decision-system-proof-slot">{children}</div>
    </article>
  )
}

export default DecisionSystem
