// pages/contact.js
import ContactForm from '../components/ContactForm'
import { MapPin, Phone, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <div className="space-y-10">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* --- Contact Form --- */}
        <div className="p-6 rounded-xl glass shadow-lg">
          <h1 className="text-2xl font-bold mb-1">Send Us a Message</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Reach out and we'll get back within 1–2 business days.
          </p>
          <ContactForm />
        </div>

        {/* --- Map --- */}
        <div className="p-3 rounded-xl glass shadow-lg overflow-hidden">
          <h2 className="text-lg font-semibold mb-2">Office Location</h2>
          <div className="rounded-lg overflow-hidden">
            <iframe
              title="Dubai office map"
              src="https://www.google.com/maps?q=Dubai+Marina&output=embed"
              width="100%"
              height="400"
              loading="lazy"
              className="rounded-lg border-0"
            ></iframe>
          </div>
        </div>
      </section>

      {/* --- Office Info --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl glass shadow-md hover:-translate-y-1 transition-transform">
          <h3 className="font-semibold text-lg mb-2">Dubai Office</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Auni Management Consultancy<br />
            United Arab Emirates
          </p>
          <div className="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <p className="flex items-center gap-2"><Clock size={16}/> Monday – Friday: 9:00 AM – 6:00 PM</p>
            <p className="flex items-center gap-2"><Phone size={16}/> +971 50 309 6657</p>
            <p className="flex items-center gap-2"><MapPin size={16}/> Dubai Marina, UAE</p>
          </div>
        </div>

        <div className="p-6 rounded-xl glass shadow-md hover:-translate-y-1 transition-transform">
          <h3 className="font-semibold text-lg mb-2">India Office</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Kite Consultancy India<br />
            Anna University, Chennai
          </p>
          <div className="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <p className="flex items-center gap-2"><Clock size={16}/> Monday – Friday: 9:30 AM – 6:00 PM</p>
            <p className="flex items-center gap-2"><Phone size={16}/> +91 12345 67890</p>
            <p className="flex items-center gap-2"><MapPin size={16}/> Chennai, Tamil Nadu, India</p>
          </div>
        </div>
      </section>
    </div>
  )
}
