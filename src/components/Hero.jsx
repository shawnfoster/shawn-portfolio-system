import DecisionSystem from './DecisionSystem'
import ExecutiveProof from './ExecutiveProof'

function Hero({ profile, decisionSystem, executiveProof }) {
  return (
    <section className="site-section hero-section">
      <div className="home-stage">
        <div className="hero-grid">
          <article className="card profile-card">
            <span className="eyebrow">Profile</span>
            <h1 className="profile-name">
              {(profile.heroNameLines ?? [profile.name]).map((line) => (
                <span key={line} className="profile-name-line">
                  {line}
                </span>
              ))}
            </h1>
            <p className="profile-title">{profile.title}</p>
            <p className="hero-kicker">{profile.body}</p>
            <p className="profile-summary">{profile.support}</p>
            <div className="profile-fit">
              <span className="profile-fit-label">{profile.fitLabel}</span>
              <p className="profile-fit-copy">{profile.fitCopy}</p>
            </div>

            <div className="hero-actions profile-actions">
              <a className="button button-primary" href="#impact">
                Selected Impact
              </a>
              <a className="button button-secondary" href="#contact">
                Start a conversation
              </a>
            </div>
          </article>

          <DecisionSystem
            title={decisionSystem.title}
            description={decisionSystem.description}
            signalGroups={decisionSystem.signalGroups}
            proof={decisionSystem.proof}
            operatingModel={decisionSystem.operatingModel}
          >
            <ExecutiveProof title={executiveProof.title} bullets={executiveProof.bullets} />
          </DecisionSystem>
        </div>
      </div>
    </section>
  )
}

export default Hero
