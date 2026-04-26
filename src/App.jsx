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
      <main>
        <div className="home-page hero-screen">
          <Header items={siteContent.topNav} />
          <Hero
            profile={siteContent.profile}
            decisionSystem={siteContent.decisionSystem}
            executiveProof={siteContent.executiveProof}
          />
        </div>
        <div className="site-section split-layout">
          <aside className="split-rail">
            <div className="split-jump">
              <JumpCard items={siteContent.stickyNav} />
            </div>
          </aside>

          <div className="split-main">
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
          </div>
        </div>
        <Experience items={siteContent.experience.items} />
        <Contact contact={siteContent.contact} base={siteContent.base} jumpItems={siteContent.stickyNav} />
      </main>
    </div>
  )
}

export default App
