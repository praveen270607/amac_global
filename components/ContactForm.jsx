// components/ContactForm.jsx
import { useState } from 'react'

const COUNTRY_CODES = [
  { code: '+971', label: '🇦🇪 +971 (UAE)' },
  { code: '+44',  label: '🇬🇧 +44 (UK)' },
  { code: '+91',  label: '🇮🇳 +91 (India)' },
  { code: '+1',   label: '🇺🇸 +1 (USA/Canada)' },
  { code: '+61',  label: '🇦🇺 +61 (Australia)' },
  { code: '+65',  label: '🇸🇬 +65 (Singapore)' },

  // Newly added
  { code: '+975', label: '🇧🇹 +975 (Bhutan)' },
  { code: '+880', label: '🇧🇩 +880 (Bangladesh)' },
  { code: '+977', label: '🇳🇵 +977 (Nepal)' },
  { code: '+94',  label: '🇱🇰 +94 (Sri Lanka)' },
]

export default function ContactForm() {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    countryCode: '+971',
    phone: '',
    service: '',
    message: '',
  })

  const [status, setStatus] = useState(null) // 'idle' | 'sending' | 'success' | 'error'
  const [serverMessage, setServerMessage] = useState('')

  function handleChange(e) {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  function validate() {
    if (!values.fullName.trim()) return 'Please enter your full name.'
    if (!values.email.trim()) return 'Please enter your email address.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      return 'Please enter a valid email address.'
    if (!values.phone.trim()) return 'Please enter your phone number.'
    if (!values.service.trim()) return 'Please select a service.'
    if (!values.message.trim()) return 'Please tell us a bit about your requirements.'
    return null
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setServerMessage('')
    const err = validate()
    if (err) {
      setStatus('error')
      setServerMessage(err)
      return
    }

    try {
      setStatus('sending')

      const fd = new FormData()
      // These field names are what the API will see (formidable -> fields)
      fd.append('FullName', values.fullName)
      fd.append('Email', values.email)
      fd.append('CountryCode', values.countryCode)
      fd.append('Phone', values.phone)
      fd.append('Service', values.service)
      fd.append('Message', values.message)
      fd.append('FormSource', 'Contact page')

      const res = await fetch('/api/send-consultation-netlify', {
        method: 'POST',
        body: fd,
      })

      const ct = res.headers.get('content-type') || ''
      const payload = ct.includes('application/json')
        ? await res.json()
        : { message: await res.text() }

      if (!res.ok) {
        const msg =
          payload.error ||
          payload.message ||
          'Failed to send message. Please try again.'
        setStatus('error')
        setServerMessage(String(msg))
        return
      }

      setStatus('success')
      setServerMessage('Thank you! Your message has been sent.')

      // reset form (keep default country code)
      setValues({
        fullName: '',
        email: '',
        countryCode: '+971',
        phone: '',
        service: '',
        message: '',
      })
    } catch (err) {
      console.error('contact form submit error', err)
      setStatus('error')
      setServerMessage('Network error. Please try again.')
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {/* Full name */}
      <input
        type="text"
        name="fullName"
        value={values.fullName}
        onChange={handleChange}
        placeholder="Full Name"
        className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white dark:bg-gray-900 transition"
      />

      {/* Email */}
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Email Address"
        className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white dark:bg-gray-900 transition"
      />

      {/* Phone with country code + flag */}
      <div className="flex gap-2">
        <select
          name="countryCode"
          value={values.countryCode}
          onChange={handleChange}
          className="w-32 p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
        >
          {COUNTRY_CODES.map((c) => (
            <option key={c.code} value={c.code}>
              {c.label}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          placeholder="Phone number"
          className="flex-1 p-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white dark:bg-gray-900 transition"
        />
      </div>

      {/* Service select */}
      <select
        name="service"
        value={values.service}
        onChange={handleChange}
        className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white dark:bg-gray-900 transition text-gray-600 dark:text-gray-300"
      >
        <option value="">Select a service</option>
        <option>International Manpower & Staffing Solutions</option>
        <option>International Education & Admissions Consultancy</option>
        <option>Global Business Setup & Licensing</option>
        <option>HR & Payroll Outsourcing Services</option>
        <option>IT Infrastructure & Technology Solutions</option>
        <option>Interior & Fit Out Works</option>
        <option>Educational Training & Skill Development</option>
        <option>Tax Consultancy & Corporate Identity Design</option>
        <option>Cross-Border Business Expansion Services</option>
        <option>Branding & Corporate Identity Design</option>
        <option>Real Estate & Commercial Brokerage Services</option>
        <option>Travels & Tourism Services</option>
      </select>

      {/* Message */}
      <textarea
        name="message"
        value={values.message}
        onChange={handleChange}
        placeholder="Tell us about your requirements..."
        rows="4"
        className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white dark:bg-gray-900 transition"
      ></textarea>

      {/* Button + status message */}
      <div className="space-y-2">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full py-3 bg-brand-500 text-white rounded-lg font-medium shadow hover:scale-[1.02] active:scale-[0.98] transition-transform disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? 'Sending…' : 'Send Message'}
        </button>

        {status === 'success' && (
          <p className="text-xs text-green-700 bg-green-50 px-3 py-2 rounded">
            {serverMessage}
          </p>
        )}
        {status === 'error' && (
          <p className="text-xs text-red-700 bg-red-50 px-3 py-2 rounded">
            {serverMessage}
          </p>
        )}
      </div>
    </form>
  )
}
