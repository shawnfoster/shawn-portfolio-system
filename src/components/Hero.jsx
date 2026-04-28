import { useEffect, useRef } from 'react'
import DecisionSystem from './DecisionSystem'
import ExecutiveProof from './ExecutiveProof'

function Hero({ profile, decisionSystem, executiveProof }) {
  const heroGridRef = useRef(null)
  const profileCardRef = useRef(null)

  useEffect(() => {
    if (!heroGridRef.current || !profileCardRef.current) return

    const syncProfileHeight = () => {
      heroGridRef.current?.style.setProperty('--profile-card-height', `${profileCardRef.current?.offsetHeight ?? 0}px`)
    }

    syncProfileHeight()

    const resizeObserver = new ResizeObserver(syncProfileHeight)
    resizeObserver.observe(profileCardRef.current)
    window.addEventListener('resize', syncProfileHeight)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', syncProfileHeight)
    }
  }, [])

  return (
    <section className="site-section hero-section">
      <div className="home-stage">
        <div ref={heroGridRef} className="hero-grid">
          <article ref={profileCardRef} className="card profile-card">
            <span className="eyebrow">Profile</span>
            <h1 className="profile-name">
              {(profile.heroNameLines ?? [profile.name]).map((line) => (
                <span key={line} className="profile-name-line">
                  {line}
                </span>
              ))}
            </h1>
            <div className="profile-middle">
              {profile.title ? <p className="profile-title">{profile.title}</p> : null}
              {profile.body ? <p className="hero-kicker">{profile.body}</p> : null}
              {profile.support ? <p className="profile-summary">{profile.support}</p> : null}
              <div className="profile-fit">
                <span className="profile-fit-label">{profile.fitLabel}</span>
                <p className="profile-fit-copy">{profile.fitCopy}</p>
              </div>
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
            <ExecutiveProof
              title={executiveProof.title}
              blocks={executiveProof.blocks}
              closing={executiveProof.closing}
            />
          </DecisionSystem>
        </div>
      </div>
    </section>
  )
}

export default Hero
