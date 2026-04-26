import DecisionSystem from './DecisionSystem'
import ExecutiveProof from './ExecutiveProof'

function Hero({ profile, decisionSystem, executiveProof }) {
  return (
    <section className="site-section hero-section">
      <div className="home-stage">
        <div className="hero-grid">
          <article className="card profile-card">
            <span className="eyebrow">Profile</span>
            <h1>{profile.name}</h1>
            <p className="profile-title">{profile.title}</p>
            <p className="hero-kicker">{profile.body}</p>
            <p className="profile-summary">{profile.support}</p>

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
