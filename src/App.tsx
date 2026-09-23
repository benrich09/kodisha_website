import { useState, useEffect } from 'react'
import { LanguageProvider } from './i18n/LanguageContext'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { Discover } from './pages/Discover'
import { HowItWorks } from './pages/HowItWorks'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { GetApp } from './pages/GetApp'
import { Register } from './pages/Register'
import type { Page } from './types'

function Shell() {
  const [page, setPage] = useState<Page>('home')
  const [scrolled, setScrolled] = useState(false)

  const heroPages: Page[] = [
    'home',
    'services',
    'how',
    'about',
    'contact',
    'get-app',
    'register-renter',
    'register-owner',
  ]
  const overHero = heroPages.includes(page) && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    setScrolled(false)
  }, [page])

  return (
    <div className="flex min-h-screen flex-col bg-white antialiased">
      <Navbar page={page} setPage={setPage} overHero={overHero} />
      <main className="flex-1">
        {page === 'home' && <Home setPage={setPage} />}
        {page === 'services' && <Discover />}
        {page === 'how' && <HowItWorks />}
        {page === 'about' && <About />}
        {page === 'contact' && <Contact />}
        {page === 'get-app' && <GetApp />}
        {page === 'register-renter' && <Register role="renter" />}
        {page === 'register-owner' && <Register role="owner" />}
      </main>
      <Footer setPage={setPage} />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <Shell />
    </LanguageProvider>
  )
}
