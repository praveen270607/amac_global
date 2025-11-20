// components/ConsultationForm.jsx
import { useState } from 'react'

const MAX_FILE_SIZE = 20 * 1024 * 1024 // 20 MB

const COUNTRY_CODES = [
  { code: '+971', label: 'UAE (+971)' },
  { code: '+91', label: 'India (+91)' },
  { code: '+1', label: 'USA / Canada (+1)' },
  { code: '+44', label: 'UK (+44)' },
  { code: '+61', label: 'Australia (+61)' },
  { code: '+65', label: 'Singapore (+65)' },
  { code: '+966', label: 'Saudi Arabia (+966)' },
  { code: '+974', label: 'Qatar (+974)' },
  { code: '+973', label: 'Bahrain (+973)' },
  { code: '+968', label: 'Oman (+968)' },
  { code: '+962', label: 'Jordan (+962)' },
  { code: '+964', label: 'Iraq (+964)' },
  { code: '+20', label: 'Egypt (+20)' },
  { code: '+27', label: 'South Africa (+27)' },
  { code: '+49', label: 'Germany (+49)' },
  { code: '+33', label: 'France (+33)' },
  { code: '+39', label: 'Italy (+39)' },
  { code: '+34', label: 'Spain (+34)' },
  { code: '+81', label: 'Japan (+81)' },
  { code: '+82', label: 'South Korea (+82)' },
  { code: '+86', label: 'China (+86)' },
]

function prettyBytes(bytes) {
  if (!bytes) return '0 B'
  const units = ['B', 'KB', 'MB', 'GB']
  let i = 0
  while (bytes >= 1024 && i < units.length - 1) {
    bytes /= 1024
    i++
  }
  return `${Math.round(bytes * 10) / 10} ${units[i]}`
}

function FilePicker({ label, name, file, onChange, accept }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium mb-1">{label}</label>

      <div className="flex items-center gap-3">
        <label
          htmlFor={name}
          className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-sm cursor-pointer text-sm"
        >
          <span className="text-lg">+</span>
          <span>{file ? 'Change file' : 'Choose File'}</span>
          <input
            id={name}
            name={name}
            accept={accept}
            type="file"
            className="hidden"
            onChange={(e) => onChange(e.target.files && e.target.files[0])}
          />
        </label>

        {file ? (
          <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded px-3 py-2 w-full justify-between">
            <div className="truncate text-sm">
              <div className="font-medium">{file.name}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {prettyBytes(file.size)}
              </div>
            </div>

            <div className="flex items-center gap-2">
              {file.size > MAX_FILE_SIZE && (
                <div className="text-xs text-amber-600 px-2 py-1 rounded bg-amber-50 dark:bg-amber-900/30">
                  Too large
                </div>
              )}
              <button
                type="button"
                onClick={() => onChange(null)}
                aria-label={`Remove ${label}`}
                className="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                ✕
              </button>
            </div>
          </div>
        ) : (
          <div className="text-sm text-gray-500">No file chosen</div>
        )}
      </div>
    </div>
  )
}

export default function ConsultationForm() {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    countryCode: '+971',
    phone: '',
    email: '',
    street: '',
    area: '',
    city: '',
    state: '',
    purpose: '',
    contactWithin48: '',
    contactWithin15: '',
  })

  const [files, setFiles] = useState({
    passport: null,
    photo: null,
    idProof: null,
    cv: null,
    other: null,
    selfDeclaration: null,
  })

  const [errors, setErrors] = useState({})
  const [submitStatus, setSubmitStatus] = useState(null)
  const [serverMessage, setServerMessage] = useState('')

  function handleChange(e) {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    setErrors((err) => ({ ...err, [name]: null }))
  }

  function handleFileChange(key, file) {
    setFiles((f) => ({ ...f, [key]: file }))
    setErrors((err) => ({ ...err, [key]: null }))
  }

  function validate() {
    const errs = {}
    if (!values.firstName.trim()) errs.firstName = 'First name is required'
    if (!values.lastName.trim()) errs.lastName = 'Last name is required'

    if (!values.countryCode) errs.countryCode = 'Country code is required'
    if (!values.phone.trim()) {
      errs.phone = 'Phone number is required'
    } else if (!/^\d{6,}$/.test(values.phone.replace(/\s+/g, ''))) {
      errs.phone = 'Enter a valid phone number'
    }

    if (!values.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      errs.email = 'Enter a valid email'

    Object.entries(files).forEach(([k, f]) => {
      if (f && f.size > MAX_FILE_SIZE) {
        errs[k] = `File too large (max ${prettyBytes(MAX_FILE_SIZE)})`
      }
    })

    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitStatus(null)
    setServerMessage('')
    if (!validate()) {
      setSubmitStatus('error')
      return
    }

    const fd = new FormData()
    Object.entries(values).forEach(([k, v]) => {
      fd.append(k, v || '')
    })

    if (files.passport && files.passport.size > 0)
      fd.append('passport', files.passport)
    if (files.photo && files.photo.size > 0) fd.append('photo', files.photo)
    if (files.idProof && files.idProof.size > 0)
      fd.append('idProof', files.idProof)
    if (files.cv && files.cv.size > 0) fd.append('cv', files.cv)
    if (files.other && files.other.size > 0) fd.append('other', files.other)
    if (files.selfDeclaration && files.selfDeclaration.size > 0)
      fd.append('selfDeclaration', files.selfDeclaration)

    try {
      setSubmitStatus('sending')
      const res = await fetch('/api/send-consultation-netlify', {
        method: 'POST',
        body: fd,
      })

      let payload = null
      const ct = res.headers.get('content-type') || ''
      if (ct.includes('application/json')) {
        payload = await res.json()
      } else {
        payload = { message: await res.text() }
      }

      if (!res.ok) {
        const errMsg =
          (payload && (payload.error || payload.message)) ||
          (typeof payload === 'string' && payload) ||
          JSON.stringify(payload)
        setServerMessage(String(errMsg))
        setSubmitStatus('error')
        return
      }

      let friendly = 'Submission received — email sent.'
      if (payload) {
        if (payload.info && payload.info.messageId) {
          friendly = `Email queued (id: ${payload.info.messageId})`
        } else if (payload.message) {
          friendly = String(payload.message)
        } else if (payload.info) {
          try {
            const s = JSON.stringify(payload.info)
            friendly = s.length > 200 ? s.slice(0, 200) + '...' : s
          } catch (e) {
            friendly = String(payload.info)
          }
        } else if (payload.ok) {
          friendly = 'Submission received.'
        }
      }

      setSubmitStatus('success')
      setServerMessage(friendly)

      setFiles({
        passport: null,
        photo: null,
        idProof: null,
        cv: null,
        other: null,
        selfDeclaration: null,
      })

      const resets = [
        'passport',
        'photo',
        'idProof',
        'cv',
        'other',
        'selfDeclaration',
      ]
      resets.forEach((n) => {
        const inp = document.getElementById(n)
        if (inp) inp.value = ''
      })
    } catch (err) {
      console.error('submit error', err)
      setServerMessage(String(err.message || 'Network error'))
      setSubmitStatus('error')
    }
  }

  return (
    <form
      id="consultForm"
      onSubmit={handleSubmit}
      /* increased max width so form background is wider and fits the phone field */
      className="max-w-5xl lg:max-w-6xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow"
      encType="multipart/form-data"
    >
      {/* first row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="md:col-span-1">
          <label className="block text-sm font-medium mb-1">First Name*</label>
          <input
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            className={`w-full p-2 border rounded ${
              errors.firstName
                ? 'border-red-500'
                : 'border-gray-200 dark:border-gray-700'
            } bg-white dark:bg-gray-900`}
            aria-invalid={!!errors.firstName}
            aria-describedby={errors.firstName ? 'err-firstName' : undefined}
          />
          {errors.firstName && (
            <p id="err-firstName" className="text-xs text-red-600 mt-1">
              {errors.firstName}
            </p>
          )}
        </div>

        <div className="md:col-span-1">
          <label className="block text-sm font-medium mb-1">
            Surname / Last Name*
          </label>
          <input
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            className={`w-full p-2 border rounded ${
              errors.lastName
                ? 'border-red-500'
                : 'border-gray-200 dark:border-gray-700'
            } bg-white dark:bg-gray-900`}
            aria-invalid={!!errors.lastName}
            aria-describedby={errors.lastName ? 'err-lastName' : undefined}
          />
          {errors.lastName && (
            <p id="err-lastName" className="text-xs text-red-600 mt-1">
              {errors.lastName}
            </p>
          )}
        </div>

        {/* phone with country code - fixed width for select so code is visible */}
        <div className="md:col-span-1">
          <label className="block text-sm font-medium mb-1">Phone Number*</label>

          <div className="flex gap-2 items-center">
            <select
              name="countryCode"
              value={values.countryCode}
              onChange={handleChange}
              className={`p-2 border rounded text-sm text-center w-20 shrink-0 ${
                errors.countryCode
                  ? 'border-red-500'
                  : 'border-gray-200 dark:border-gray-700'
              } bg-white dark:bg-gray-900`}
              aria-invalid={!!errors.countryCode}
              aria-describedby={
                errors.countryCode ? 'err-countryCode' : undefined
              }
              title={COUNTRY_CODES.find((c) => c.code === values.countryCode)?.label || ''}
            >
              {COUNTRY_CODES.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.code}
                </option>
              ))}
            </select>

            <input
              name="phone"
              value={values.phone}
              onChange={handleChange}
              placeholder="50 123 4567"
              className={`flex-1 p-2 border rounded ${
                errors.phone
                  ? 'border-red-500'
                  : 'border-gray-200 dark:border-gray-700'
              } bg-white dark:bg-gray-900`}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'err-phone' : undefined}
            />
          </div>

          {errors.countryCode && (
            <p id="err-countryCode" className="text-xs text-red-600 mt-1">
              {errors.countryCode}
            </p>
          )}
          {errors.phone && (
            <p id="err-phone" className="text-xs text-red-600 mt-1">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      {/* email + street */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
        <div>
          <label className="block text-sm font-medium mb-1">
            Email Address*
          </label>
          <input
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            className={`w-full p-2 border rounded ${
              errors.email
                ? 'border-red-500'
                : 'border-gray-200 dark:border-gray-700'
            } bg-white dark:bg-gray-900`}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'err-email' : undefined}
          />
          {errors.email && (
            <p id="err-email" className="text-xs text-red-600 mt-1">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Street Address
          </label>
          <input
            name="street"
            value={values.street}
            onChange={handleChange}
            className="w-full p-2 border rounded border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
          />
        </div>
      </div>

      {/* area / city / state */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
        <input
          name="area"
          value={values.area}
          onChange={handleChange}
          placeholder="Area"
          className="p-2 border rounded border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
        />
        <input
          name="city"
          value={values.city}
          onChange={handleChange}
          placeholder="City"
          className="p-2 border rounded border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
        />
        <input
          name="state"
          value={values.state}
          onChange={handleChange}
          placeholder="State / Country"
          className="p-2 border rounded border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
        />
      </div>

      {/* purpose of submission */}
      <div className="mt-4">
        <label className="block text-sm font-medium mb-1">
          Purpose of Submission
        </label>
        <textarea
          name="purpose"
          value={values.purpose}
          onChange={handleChange}
          rows={3}
          placeholder="Briefly describe the purpose of this submission..."
          className="w-full p-2 border rounded border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm"
        />
      </div>

      {/* contact within 48 hours / 15 days */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Contact me within 48 hours (preferred date & time)
          </label>
          <input
            type="datetime-local"
            name="contactWithin48"
            value={values.contactWithin48}
            onChange={handleChange}
            className="w-full p-2 border rounded border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Contact me within 15 days (preferred date & time)
          </label>
          <input
            type="datetime-local"
            name="contactWithin15"
            value={values.contactWithin15}
            onChange={handleChange}
            className="w-full p-2 border rounded border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm"
          />
        </div>
      </div>

      {/* files */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <FilePicker
            label="Passport Copy"
            name="passport"
            file={files.passport}
            accept=".pdf,image/*"
            onChange={(f) => handleFileChange('passport', f)}
          />
          {errors.passport && (
            <p className="text-xs text-red-600 mt-1">{errors.passport}</p>
          )}
        </div>

        <div>
          <FilePicker
            label="Photo"
            name="photo"
            file={files.photo}
            accept="image/*"
            onChange={(f) => handleFileChange('photo', f)}
          />
          {errors.photo && (
            <p className="text-xs text-red-600 mt-1">{errors.photo}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <FilePicker
            label="ID Proof"
            name="idProof"
            file={files.idProof}
            accept=".pdf,image/*"
            onChange={(f) => handleFileChange('idProof', f)}
          />
          {errors.idProof && (
            <p className="text-xs text-red-600 mt-1">{errors.idProof}</p>
          )}
        </div>

        <div>
          <FilePicker
            label="CV"
            name="cv"
            file={files.cv}
            accept=".pdf,.doc,.docx"
            onChange={(f) => handleFileChange('cv', f)}
          />
          {errors.cv && (
            <p className="text-xs text-red-600 mt-1">{errors.cv}</p>
          )}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <FilePicker
            label="Other Documents"
            name="other"
            file={files.other}
            accept=".pdf,image/*,.doc,.docx"
            onChange={(f) => handleFileChange('other', f)}
          />
          {errors.other && (
            <p className="text-xs text-red-600 mt-1">{errors.other}</p>
          )}
        </div>

        <div>
          <FilePicker
            label="Self Declaration"
            name="selfDeclaration"
            file={files.selfDeclaration}
            accept=".pdf,image/*,.doc,.docx"
            onChange={(f) => handleFileChange('selfDeclaration', f)}
          />
          {errors.selfDeclaration && (
            <p className="text-xs text-red-600 mt-1">
              {errors.selfDeclaration}
            </p>
          )}
        </div>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <button
          type="submit"
          disabled={submitStatus === 'sending'}
          className="px-4 py-2 bg-brand-500 text-white rounded-md shadow hover:scale-105 transition-transform disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitStatus === 'sending' ? 'Sending...' : 'Submit'}
        </button>

        {submitStatus === 'success' && (
          <div className="text-sm text-green-600 bg-green-50 dark:bg-green-900/30 px-3 py-2 rounded">
            {serverMessage || 'Form submitted and email sent.'}
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="text-sm text-red-600 bg-red-50 dark:bg-red-900/30 px-3 py-2 rounded">
            {serverMessage ||
              'Submission failed. Check required fields or try again.'}
          </div>
        )}
      </div>
    </form>
  )
}
