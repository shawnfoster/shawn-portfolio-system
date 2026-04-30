import Contact from './components/Contact'
import Experience from './components/Experience'
import Header from './components/Header'
import Hero from './components/Hero'
import JumpCard from './components/JumpCard'
import SelectedBuilds from './components/SelectedBuilds'
import SelectedImpact from './components/SelectedImpact'
import Strengths from './components/Strengths'
import { siteContent } from './data/copy'

function App() {
  return (
    <div className="app-shell" id="top">
      <main className="site-shell">
        <div className="home-page hero-screen">
          <Header items={siteContent.topNav} />
          <Hero
            profile={siteContent.profile}
            decisionSystem={siteContent.decisionSystem}
            executiveProof={siteContent.executiveProof}
          />
        </div>

        <section className="site-section page-stage scroll-section post-grid">
          <aside className="left-rail">
            <div className="jump-rail">
              <JumpCard items={siteContent.stickyNav} quote={siteContent.jumpQuotes?.[0]} />
            </div>
          </aside>

          <div className="right-rail">
            <SelectedImpact
              title={siteContent.impact.title}
              intro={siteContent.impact.intro}
              cards={siteContent.impact.cards}
            />
            <SelectedBuilds
              title={siteContent.builds.title}
              intro={siteContent.builds.intro}
              items={siteContent.builds.items}
            />
            <Strengths items={siteContent.strengths} />
            <Experience items={siteContent.experience.items} />
            <Contact contact={siteContent.contact} base={siteContent.base} />
          </div>
        </section>

        <footer className="site-section page-stage footer-section">
          <div className="card footer-card">
            <p>© 2026 Shawn Foster. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
