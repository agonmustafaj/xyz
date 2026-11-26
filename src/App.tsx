import { useEffect, useState } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { CustomCursor } from './components/CustomCursor'
import { Footer } from './components/Footer'
import { Grain } from './components/Grain'
import { Hero } from './components/Hero'
import { Journey } from './components/Journey'
import { Loader } from './components/Loader'
import { Nav } from './components/Nav'
import { Personality } from './components/Personality'
import { Projects } from './components/Projects'
import { Tech } from './components/Tech'

const LOADER_MS = 1600

export default function App() {
  const [loading, setLoading] = useState(true)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const delay = reduce ? 200 : LOADER_MS

    const t = window.setTimeout(() => {
      setLoading(false)
      window.setTimeout(() => setReady(true), reduce ? 50 : 120)
    }, delay)

    return () => window.clearTimeout(t)
  }, [])

  return (
    <>
      <Grain />
      <CustomCursor />
      <Loader visible={loading} />
      <Nav />
      <main>
        <Hero ready={ready} />
        <About />
        <Projects />
        <Tech />
        <Journey />
        <Personality />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
