// pages/about.js
import Head from 'next/head'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About' // use your existing component unchanged

export default function AboutPage() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    if (theme === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [theme])

  function toggleTheme() {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }

  return (
    <>
      <Head>
        <title>About Us — AMAC Global Management Consultancy</title>
        <meta
          name="description"
          content="AMAC Global delivers world-class solutions in overseas jobs, education abroad, business setup, HR, payroll, IT, AI-design, skill development & tax consultancy."
        />
      </Head>
    
      {/* Render the existing About component directly with no additional top padding */}
      <main className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Note: no pt-*, so About's own spacing controls placement */}
          <About />
        </div>
      </main>
    </>
  )
}
