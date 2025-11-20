// pages/about.jsx
import Head from 'next/head'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar' // adjust path if your Navbar is elsewhere
import Image from 'next/image'

export default function AboutPage() {
  // simple theme state so Navbar's toggle button works
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    // Keep a consistent initial theme — toggle body class for tailwind dark mode if needed
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  function toggleTheme() {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }

  return (
    <>
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              About AMAC Global Management Consultancy
            </h1>
            <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-3xl">
              Empowering Global Growth through Expertise, Integrity & Innovation
            </p>
          </div>

          {/* Content card */}
          <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg shadow-sm p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* left: image / brand */}
              <div className="flex flex-col items-start gap-4">
                <div className="w-full">
                  {/* place a real logo or hero image if available */}
                  <div className="w-40 h-20 relative">
                    <Image src="/logo-placeholder.svg" alt="AMAC Global logo" width={160} height={80} />
                  </div>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300">
                  We are more than just advisors — we are global enablers. Established to bridge opportunity and expertise, AMAC serves individuals, entrepreneurs, and corporations across continents.
                </p>

                <dl className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <div>
                    <dt className="font-semibold">What we do</dt>
                    <dd>International recruitment, education consulting, business setup, HR & payroll, IT, AI design, skill development, tax consultancy.</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Our approach</dt>
                    <dd>Insight + Innovation — certified professionals combining domain experience with modern technologies.</dd>
                  </div>
                </dl>
              </div>

              {/* right: main copy */}
              <div className="lg:col-span-2">
                <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  At AMAC Global Management Consultancy, we help clients move confidently towards success. Our mission is to empower global growth using a blend of expertise, integrity, and innovation. We partner with each client to build tailored, practical strategies that work across borders and sectors.
                </p>

                <h3 className="text-lg font-semibold mb-2">How we help</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li><strong>Overseas employment:</strong> Recruitment and placement services matched to market needs.</li>
                  <li><strong>Education abroad:</strong> End-to-end counselling and placement for students seeking international education.</li>
                  <li><strong>Offshore business setup:</strong> Company formation, regulatory compliance, and banking introductions.</li>
                  <li><strong>HR & Payroll:</strong> Managed services for payroll, benefits, and local HR compliance.</li>
                  <li><strong>IT & AI-powered design:</strong> Web, apps and AI-assisted interior design solutions.</li>
                  <li><strong>Skill development & Tax consultancy:</strong> Training programs and tax advisory for cross-border operations.</li>
                </ul>

                <h3 className="text-lg font-semibold mb-2">Why choose AMAC?</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Our team of certified professionals, industry veterans, and technology experts combine insight with innovation to ensure your goals are not just met — they are exceeded. Your ambition knows no borders — neither do we.
                </p>

                <div className="flex gap-3">
                  <a href="/consultation" className="inline-block bg-brand-500 text-white px-4 py-2 rounded-md shadow hover:opacity-90">Get Consultation</a>
                  <a href="/contact" className="inline-block border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-md">Contact Us</a>
                </div>
              </div>
            </div>

            {/* footer note */}
            <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
              <strong>Start your global journey with AMAC today.</strong> Contact our team for a tailored consultation.
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
