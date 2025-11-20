// components/Navbar.jsx
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  // generic click handler for Links: prevents navigation when already on same path,
  // and closes mobile menu when navigating to a different path.
  function handleNavClick(e, href) {
    // if already on the same route, prevent the navigation (avoids the Next error)
    if (router.asPath === href) {
      e.preventDefault()
      // also close mobile menu (optional) — keep it closed if already on same page
      setOpen(false)
      return
    }

    // otherwise allow navigation and close mobile menu
    setOpen(false)
    // NOTE: we don't call router.push here; letting Link do client-side nav is fine
  }

  return (
    <nav className="w-full bg-white/60 dark:bg-gray-800/60 backdrop-blur sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link href="/" onClick={(e) => handleNavClick(e, '/')} className="flex items-center gap-3">
              <Image src="/logo-placeholder.svg" alt="Kite" width={70} height={35} />
              <div className="hidden sm:block">
                <div className="text-sm font-semibold">AMAC Global</div>
                <div className="text-xs text-gray-600 dark:text-gray-300">
                  Excellence in Management Consultancy
                </div>
              </div>
            </Link>
          </div>

          {/* desktop links */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" onClick={(e) => handleNavClick(e, '/')} className="hover:underline">
              Home
            </Link>

            <Link href="/services" onClick={(e) => handleNavClick(e, '/services')} className="hover:underline">
              Services
            </Link>

            <Link href="/about" onClick={(e) => handleNavClick(e, '/about')} className="hover:underline">
              About Us
            </Link>

            <Link href="/contact" onClick={(e) => handleNavClick(e, '/contact')} className="hover:underline">
              Contact Us
            </Link>

            <Link
              href="/consultation"
              onClick={(e) => handleNavClick(e, '/consultation')}
              className="bg-brand-500 text-white px-3 py-2 rounded-md shadow hover:opacity-90"
            >
              Get Consultation
            </Link>

            <button onClick={toggleTheme} className="p-2 rounded-md border dark:border-gray-700">
              {theme === 'light' ? '🌞' : '🌙'}
            </button>
          </div>

          {/* mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleTheme} className="mr-3 p-2 rounded-md border dark:border-gray-700">
              {theme === 'light' ? '🌞' : '🌙'}
            </button>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Toggle menu"
              className="p-2 rounded-md border dark:border-gray-700"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link href="/" onClick={(e) => handleNavClick(e, '/')} className="block">
            Home
          </Link>

          <Link href="/services" onClick={(e) => handleNavClick(e, '/services')} className="block">
            Services
          </Link>

          <Link href="/about" onClick={(e) => handleNavClick(e, '/about')} className="block">
            About Us
          </Link>

          <Link href="/contact" onClick={(e) => handleNavClick(e, '/contact')} className="block">
            Contact Us
          </Link>

          <Link
            href="/consultation"
            onClick={(e) => handleNavClick(e, '/consultation')}
            className="block bg-brand-500 text-white px-3 py-2 rounded-md"
          >
            Get Consultation
          </Link>
        </div>
      )}
    </nav>
  )
}
