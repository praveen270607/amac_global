// components/Navbar.jsx
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router'

// Option B: compact list of key countries with flags + codes
const PHONE_COUNTRIES = [
  { code: '+971', flag: '🇦🇪', label: 'UAE' },
  { code: '+91', flag: '🇮🇳', label: 'India' },
  { code: '+966', flag: '🇸🇦', label: 'Saudi Arabia' },
  { code: '+968', flag: '🇴🇲', label: 'Oman' },
  { code: '+974', flag: '🇶🇦', label: 'Qatar' },
  { code: '+965', flag: '🇰🇼', label: 'Kuwait' },
  { code: '+973', flag: '🇧🇭', label: 'Bahrain' },
  { code: '+1', flag: '🇺🇸', label: 'USA' },
  { code: '+44', flag: '🇬🇧', label: 'UK' },
  { code: '+1', flag: '🇨🇦', label: 'Canada' },
]

function ConsultantModal({ open, onClose }) {
  const [form, setForm] = useState({
    name: '',
    organization: '',
    city: '',
    district: '',
    state: '',
    country: '',
    phoneCountryCode: '+971',
    phone: '',
    email: '',
  })

  if (!open) return null

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    const selectedCountry = PHONE_COUNTRIES.find(
      (c) => c.code === form.phoneCountryCode
    )

    // For now just log; you can send this to an API later
    console.log('Consultant / Agent details submitted:', {
      ...form,
      fullPhone: `${form.phoneCountryCode} ${form.phone}`,
      phoneCountryLabel: selectedCountry?.label,
    })

    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />
      {/* dialog */}
      <div
        className="relative bg-white dark:bg-gray-900 rounded-lg shadow-xl w-full max-w-lg mx-4 p-6"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold">
              Consultant / Agent Details
            </h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Please fill in your details below.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-xl leading-none px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-sm font-medium mb-1">
              Name (Consultant)
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-2 border rounded border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Organization
            </label>
            <input
              name="organization"
              value={form.organization}
              onChange={handleChange}
              className="w-full p-2 border rounded border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium mb-1">
                City / Village
              </label>
              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                className="w-full p-2 border rounded border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                District
              </label>
              <input
                name="district"
                value={form.district}
                onChange={handleChange}
                className="w-full p-2 border rounded border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium mb-1">State</label>
              <input
                name="state"
                value={form.state}
                onChange={handleChange}
                className="w-full p-2 border rounded border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Country</label>
              <input
                name="country"
                value={form.country}
                onChange={handleChange}
                className="w-full p-2 border rounded border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
              />
            </div>
          </div>

          {/* Phone with country code + flag */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Contact Phone No
            </label>
            <div className="flex items-center gap-2">
              <select
                name="phoneCountryCode"
                value={form.phoneCountryCode}
                onChange={handleChange}
                className="p-2 border rounded text-sm w-28 shrink-0 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
              >
                {PHONE_COUNTRIES.map((c) => (
                  <option
                    key={`${c.flag}-${c.label}-${c.code}`}
                    value={c.code}
                  >
                    {c.flag} {c.code}
                  </option>
                ))}
              </select>

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className="flex-1 p-2 border rounded border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email ID</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-2 border rounded border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
            />
          </div>

          <div className="mt-4 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-brand-500 text-white text-sm shadow hover:opacity-90"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)
  const [showConsultantModal, setShowConsultantModal] = useState(false)
  const router = useRouter()

  function handleNavClick(e, href) {
    if (router.asPath === href) {
      e.preventDefault()
      setOpen(false)
      return
    }
    setOpen(false)
  }

  function openConsultantModal() {
    setShowConsultantModal(true)
    setOpen(false)
  }

  return (
    <>
      <nav className="w-full bg-white/60 dark:bg-gray-800/60 backdrop-blur sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                onClick={(e) => handleNavClick(e, '/')}
                className="flex items-center gap-3"
              >
                <Image
                  src="/logo-placeholder.svg"
                  alt="Kite"
                  width={70}
                  height={35}
                />
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
              <Link
                href="/"
                onClick={(e) => handleNavClick(e, '/')}
                className="hover:underline"
              >
                Home
              </Link>

              <Link
                href="/services"
                onClick={(e) => handleNavClick(e, '/services')}
                className="hover:underline"
              >
                Services
              </Link>

              <Link
                href="/about"
                onClick={(e) => handleNavClick(e, '/about')}
                className="hover:underline"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                onClick={(e) => handleNavClick(e, '/contact')}
                className="hover:underline"
              >
                Contact Us
              </Link>

              {/* Consultant / Agent Details */}
              <button
                type="button"
                onClick={openConsultantModal}
                className="hover:underline text-sm"
              >
                Consultant / Agent Details
              </button>

              <Link
                href="/consultation"
                onClick={(e) => handleNavClick(e, '/consultation')}
                className="bg-brand-500 text-white px-3 py-2 rounded-md shadow hover:opacity-90"
              >
                Get Consultation
              </Link>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-md border dark:border-gray-700"
              >
                {theme === 'light' ? '🌞' : '🌙'}
              </button>
            </div>

            {/* mobile */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleTheme}
                className="mr-3 p-2 rounded-md border dark:border-gray-700"
              >
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
            <Link
              href="/"
              onClick={(e) => handleNavClick(e, '/')}
              className="block"
            >
              Home
            </Link>

            <Link
              href="/services"
              onClick={(e) => handleNavClick(e, '/services')}
              className="block"
            >
              Services
            </Link>

            <Link
              href="/about"
              onClick={(e) => handleNavClick(e, '/about')}
              className="block"
            >
              About Us
            </Link>

            <Link
              href="/contact"
              onClick={(e) => handleNavClick(e, '/contact')}
              className="block"
            >
              Contact Us
            </Link>

            <button
              type="button"
              onClick={openConsultantModal}
              className="block w-full text-left"
            >
              Consultant / Agent Details
            </button>

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

      {/* Modal */}
      <ConsultantModal
        open={showConsultantModal}
        onClose={() => setShowConsultantModal(false)}
      />
    </>
  )
}
