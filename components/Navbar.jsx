import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)
  return (
    <nav className="w-full bg-white/60 dark:bg-gray-800/60 backdrop-blur sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo-placeholder.svg" alt="Kite" width={70} height={35} />
              <div className="hidden sm:block">
                <div className="text-sm font-semibold">AMAC Global</div>
                <div className="text-xs text-gray-600 dark:text-gray-300">Excellence in Management Consultancy</div>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/services" className="hover:underline">Services</Link>
            <Link href="/about" className="hover:underline">About Us</Link>
            <Link href="/contact" className="hover:underline">Contact Us</Link>
            <Link href="/consultation" className="bg-brand-500 text-white px-3 py-2 rounded-md shadow hover:opacity-90">Get Consultation</Link>
            <button onClick={toggleTheme} className="p-2 rounded-md border dark:border-gray-700">
              {theme === 'light' ? '🌞' : '🌙'}
            </button>
          </div>

          {/* mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleTheme} className="mr-3 p-2 rounded-md border dark:border-gray-700">
              {theme === 'light' ? '🌞' : '🌙'}
            </button>
            <button onClick={() => setOpen(!open)} className="p-2 rounded-md border dark:border-gray-700">
              ☰
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link href="/" className="block">Home</Link>
          <Link href="/services" className="block">Services</Link>
          <Link href="/about" className="block">About Us</Link>
          <Link href="/contact" className="block">Contact Us</Link>
          <Link href="/consultation" className="block bg-brand-500 text-white px-3 py-2 rounded-md">Get Consultation</Link>
        </div>
      )}
    </nav>
  )
}
