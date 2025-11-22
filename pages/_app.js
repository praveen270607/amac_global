// pages/_app.js
import '../styles/globals.css'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const t = localStorage.getItem('theme') || 'light'
    setTheme(t)
    document.documentElement.classList.toggle('dark', t === 'dark')
  }, [])

  function toggleTheme() {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    localStorage.setItem('theme', next)
    document.documentElement.classList.toggle('dark', next === 'dark')
  }

  return (
    <div className="site-bg min-h-screen flex flex-col text-gray-800 dark:text-gray-100 transition-colors">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Component {...pageProps} />
      </main>

      <Footer />
    </div>
  )
}

export default MyApp
