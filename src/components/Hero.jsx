import DecisionSystem from './DecisionSystem'
import ExecutiveProof from './ExecutiveProof'

const HERO_TITLE = 'Shawn Foster, MS'
const HERO_SUBTITLE = 'Customer Success + BI for SaaS Growth'
const HERO_SUMMARY =
  'I connect customer insight, revenue signals, and operational context to help teams make clearer growth decisions.'

const DECISION_TITLE = 'I turn customer behavior into revenue decisions that move growth.'
const DECISION_DESCRIPTION =
  'I connect behavior, revenue data, and operations to decisions that drive measurable outcomes.'

const PROOF_TITLE = 'Customer truth, revenue visibility, and execution in the same system.'
const PROOF_BULLETS = [
  'Tie reporting to ARR, churn, and expansion',
  'Build systems used in real decisions',
  'Move from insight to execution fast',
]

function Hero({ decisionSystem }) {
  return (
    <section className="site-section hero-section">
      <div className="home-stage">
        <div className="hero-grid">
          <article className="card profile-card">
            <span className="eyebrow">Profile</span>
            <h1>{HERO_TITLE}</h1>
            <p className="profile-title">{HERO_SUBTITLE}</p>
            <p className="profile-summary">{HERO_SUMMARY}</p>

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
            title={DECISION_TITLE}
            description={DECISION_DESCRIPTION}
            operatingModel={decisionSystem.operatingModel}
          >
            <ExecutiveProof title={PROOF_TITLE} bullets={PROOF_BULLETS} />
          </DecisionSystem>
        </div>
      </div>
    </section>
  )
}

export default Hero
