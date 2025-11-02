// components/ContactForm.jsx
export default function ContactForm() {
  return (
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Full Name"
        className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white dark:bg-gray-900 transition"
      />
      <input
        type="email"
        placeholder="Email Address"
        className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white dark:bg-gray-900 transition"
      />
      <input
        type="text"
        placeholder="+971 50 123 4567"
        className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white dark:bg-gray-900 transition"
      />
      <input
        type="text"
        placeholder="Company Name"
        className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white dark:bg-gray-900 transition"
      />
      <select className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white dark:bg-gray-900 transition text-gray-600 dark:text-gray-300">
        <option>Select a service</option>
        <option>Business & Strategy</option>
        <option>Talent & Education</option>
        <option>Tech & Infrastructure</option>
      </select>
      <textarea
        placeholder="Tell us about your requirements..."
        rows="4"
        className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white dark:bg-gray-900 transition"
      ></textarea>

      <button
        type="button"
        className="w-full py-3 bg-brand-500 text-white rounded-lg font-medium shadow hover:scale-[1.02] active:scale-[0.98] transition-transform"
      >
        Send Message
      </button>
    </form>
  )
}
