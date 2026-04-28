function DecisionSystem({ title, description, signalGroups = [], proof, operatingModel, children }) {
  const [signalGroup, decisionGroup] = signalGroups
  const translationRows =
    Array.isArray(signalGroup?.value) && Array.isArray(decisionGroup?.value)
      ? signalGroup.value.map((signal, index) => ({
          signal,
          decision: decisionGroup.value[index] ?? '',
        }))
      : []

  return (
    <article className="card decision-card decision-system-card">
      <div className="decision-system-main">
        <div className="decision-system-top">
          <span className="eyebrow">Decision System</span>
          <h2 className="section-title">{title}</h2>
          <p className="decision-lead">{description}</p>
        </div>

        <div className="decision-system-lower">
          {translationRows.length > 0 ? (
            <div className="decision-translation-card" aria-label="Signals translated into decisions">
              <div className="decision-translation-header">
                <span className="decision-info-label">{signalGroup.label}</span>
                <span className="decision-translation-arrow decision-translation-arrow-header" aria-hidden="true">
                  →
                </span>
                <span className="decision-info-label">{decisionGroup.label}</span>
              </div>

              <div className="decision-translation-list">
                {translationRows.map(({ signal, decision }) => (
                  <div key={`${signal}-${decision}`} className="decision-translation-row">
                    <p className="decision-info-copy decision-translation-cell">{signal}</p>
                    <span className="decision-translation-arrow" aria-hidden="true">
                      →
                    </span>
                    <p className="decision-info-copy decision-translation-cell">{decision}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : signalGroups.length > 0 ? (
            <div className="decision-info-grid" aria-label="Decision inputs and outputs">
              {signalGroups.map((group) => (
                <div key={group.label} className="decision-info-block">
                  <span className="decision-info-label">{group.label}</span>
                  {Array.isArray(group.value) ? (
                    <ul className="decision-info-list">
                      {group.value.map((item) => (
                        <li key={item} className="decision-info-copy">
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="decision-info-copy">{group.value}</p>
                  )}
                </div>
              ))}
            </div>
          ) : null}

          <div className="decision-system-footer">
            <blockquote className="decision-proof">{proof}</blockquote>

            <div className="operating-strip">
              <span className="operating-label">Operating Model</span>
              <div className="decision-model-steps">
                {operatingModel.map((step) => (
                  <span key={step} className="decision-model-step">
                    {step}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="decision-system-proof-slot">{children}</div>
    </article>
  )
}

export default DecisionSystem
