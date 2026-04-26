import { useEffect, useState } from 'react'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Header from './components/Header'
import Hero from './components/Hero'
import SelectedBuilds from './components/SelectedBuilds'
import SelectedImpact from './components/SelectedImpact'
import Strengths from './components/Strengths'
import { copy, defaultMode, siteContent } from './data/copy'

function getModeFromUrl() {
  if (typeof window === 'undefined') {
    return defaultMode
  }

  const mode = new URL(window.location.href).searchParams.get('mode')
  return Object.hasOwn(copy, mode) ? mode : defaultMode
}

function useAdaptiveMode() {
  const [mode, setMode] = useState(getModeFromUrl)

  useEffect(() => {
    const handlePopState = () => {
      setMode(getModeFromUrl())
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    const url = new URL(window.location.href)
    url.searchParams.set('mode', mode)
    window.history.replaceState({}, '', url)
  }, [mode])

  return [mode, setMode]
}

function App() {
  const [mode] = useAdaptiveMode()
  const currentCopy = copy[mode]

  return (
    <div className="app-shell" id="top">
      <main>
        <div className="home-page hero-screen">
          <Header items={siteContent.topNav} />
          <Hero decisionSystem={siteContent.decisionSystem} />
        </div>
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
        <Strengths items={currentCopy.strengths} />
        <Experience items={siteContent.experience.items} />
        <Contact contact={siteContent.contact} base={siteContent.base} jumpItems={siteContent.stickyNav} />
      </main>
    </div>
  )
}

export default App
