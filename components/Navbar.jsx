// components/Navbar.jsx
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router'

// Password for Consultant Access
const CONSULTANT_PASSWORD = "AMAC2025"   // <<< CHANGE THIS PASSWORD WHEN NEEDED

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

/* -----------------------------------------------------------
   PASSWORD CHECK MODAL
----------------------------------------------------------- */
function PasswordModal({ open, onClose, onSuccess }) {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  if (!open) return null

  function checkPassword(e) {
    e.preventDefault()
    if (password === CONSULTANT_PASSWORD) {
      setError("")
      onClose()
      onSuccess()
    } else {
      setError("Incorrect password. Try again.")
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-xl w-full max-w-sm p-6 mx-4">
        <h2 className="text-xl font-semibold mb-2">Consultant Login</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Enter password to access Consultant / Agent Details
        </p>

        <form onSubmit={checkPassword} className="space-y-3">
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
              required
            />
          </div>

          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-brand-500 text-white rounded-md text-sm shadow hover:opacity-90"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

/* -----------------------------------------------------------
   MAIN CONSULTANT / AGENT DETAILS MODAL
----------------------------------------------------------- */
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

  const [status, setStatus] = useState(null) // null | sending | success | error
  const [serverMessage, setServerMessage] = useState("")

  if (!open) return null

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus("sending")
    setServerMessage("")

    try {
      const fd = new FormData()

      // Add fields in a readable format for email
      fd.append("FormSource", "Consultant Registration")
      fd.append("ConsultantName", form.name)
      fd.append("Organization", form.organization)
      fd.append("City", form.city)
      fd.append("District", form.district)
      fd.append("State", form.state)
      fd.append("Country", form.country)
      fd.append("Phone", `${form.phoneCountryCode} ${form.phone}`)
      fd.append("Email", form.email)

      const res = await fetch("/api/send-consultation-netlify", {
        method: "POST",
        body: fd,
      })

      const payload = await res.json()
      if (!res.ok) throw new Error(payload.error || "Email failed")

      setStatus("success")
      setServerMessage("Registration is pending. We will contact you soon.")

      // reset form
      setForm({
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

      return
    } catch (err) {
      console.error("consultant modal submit error", err)
      setStatus("error")
      setServerMessage("Something went wrong. Please try again.")
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-xl w-full max-w-lg p-6 mx-4">
        <h2 className="text-xl font-semibold mb-2">Consultant / Agent Details</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* FORM FIELDS SAME AS BEFORE */}

          <div>
            <label className="block text-sm font-medium mb-1">Name (Consultant)</label>
            <input name="name" value={form.name} onChange={handleChange}
              className="w-full p-2 border rounded border-gray-300 dark:border-gray-700" required />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Organization</label>
            <input name="organization" value={form.organization} onChange={handleChange}
              className="w-full p-2 border rounded border-gray-300 dark:border-gray-700" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium mb-1">City / Village</label>
              <input name="city" value={form.city} onChange={handleChange}
                className="w-full p-2 border rounded border-gray-300 dark:border-gray-700" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">District</label>
              <input name="district" value={form.district} onChange={handleChange}
                className="w-full p-2 border rounded border-gray-300 dark:border-gray-700" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium mb-1">State</label>
              <input name="state" value={form.state} onChange={handleChange}
                className="w-full p-2 border rounded border-gray-300 dark:border-gray-700" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Country</label>
              <input name="country" value={form.country} onChange={handleChange}
                className="w-full p-2 border rounded border-gray-300 dark:border-gray-700" />
            </div>
          </div>

          {/* Phone with flag */}
          <div>
            <label className="block text-sm font-medium mb-1">Contact Phone No</label>
            <div className="flex items-center gap-2">
              <select
                name="phoneCountryCode"
                value={form.phoneCountryCode}
                onChange={handleChange}
                className="p-2 w-28 rounded border border-gray-300 dark:border-gray-700"
              >
                {PHONE_COUNTRIES.map((c) => (
                  <option key={c.label} value={c.code}>
                    {c.flag} {c.code}
                  </option>
                ))}
              </select>

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className="flex-1 p-2 border rounded border-gray-300 dark:border-gray-700"
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
              className="w-full p-2 border rounded border-gray-300 dark:border-gray-700"
            />
          </div>

          {/* STATUS MESSAGE */}
          {status === "success" && (
            <p className="text-sm text-green-700 bg-green-50 px-3 py-2 rounded">
              {serverMessage}
            </p>
          )}

          {status === "error" && (
            <p className="text-sm text-red-700 bg-red-50 px-3 py-2 rounded">
              {serverMessage}
            </p>
          )}

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-sm"
            >
              Close
            </button>

            <button
              type="submit"
              disabled={status === "sending"}
              className="px-4 py-2 bg-brand-500 text-white rounded-md text-sm shadow hover:opacity-90 disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}


/* -----------------------------------------------------------
   NAVBAR MAIN COMPONENT
----------------------------------------------------------- */
export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)
  const [showPasswordModal, setShowPasswordModal] = useState(false)
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

  // When user clicks menu item → open password modal
  function openProtectedModal() {
    setShowPasswordModal(true)
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
                  alt="Logo"
                  width={70}
                  height={35}
                />
                <div className="hidden sm:block">
                  <div className="text-sm font-semibold">AMAC GLOBAL</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">
                    Management Consultancy
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
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

              {/* NEW protected item */}
              <button
                type="button"
                onClick={openProtectedModal}
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

            {/* Mobile */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleTheme}
                className="mr-3 p-2 rounded-md border dark:border-gray-700"
              >
                {theme === 'light' ? '🌞' : '🌙'}
              </button>

              <button
                onClick={() => setOpen((v) => !v)}
                className="p-2 rounded-md border dark:border-gray-700"
              >
                ☰
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
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

            <button
              type="button"
              onClick={openProtectedModal}
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

      {/* PASSWORD MODAL */}
      <PasswordModal
        open={showPasswordModal}
        onClose={() => setShowPasswordModal(false)}
        onSuccess={() => setShowConsultantModal(true)}
      />

      {/* MAIN CONSULTANT MODAL */}
      <ConsultantModal
        open={showConsultantModal}
        onClose={() => setShowConsultantModal(false)}
      />
    </>
  )
}
