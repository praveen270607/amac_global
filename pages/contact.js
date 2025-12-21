// pages/contact.js
import ContactForm from '../components/ContactForm'
import { MapPin, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <div className="space-y-10">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* --- Contact Form --- */}
        <div className="p-6 rounded-xl glass shadow-lg">
          <h1 className="text-2xl font-bold mb-1">Send Us a Message</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Reach out and we&apos;ll get back within 1–2 business days.
          </p>
          <ContactForm />
        </div>

        {/* --- Map --- */}
        <div className="p-3 rounded-xl glass shadow-lg overflow-hidden">
          <h2 className="text-lg font-semibold mb-2">Our Global Offices</h2>
          <div className="rounded-lg overflow-hidden">
            <iframe
              title="Global offices map"
              src="https://www.google.com/maps/d/embed?mid=1w4Wz8keo7f3HKDchbcLUJiKonfSWwPA&ehbc=2E312F&noprof=1"
              width="100%"
              height="400"
              loading="lazy"
              className="rounded-lg border-0"
            ></iframe>
          </div>
        </div>
      </section>

      {/* --- Office Info --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* UK OFFICE */}
        <div className="p-6 rounded-xl glass shadow-md hover:-translate-y-1 transition-transform">
          <h3 className="font-semibold text-lg mb-2">United Kingdom</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            1–3 Brixton Rd,<br />
            London,<br />
            United Kingdom
          </p>
          <div className="mt-3 text-sm text-gray-700 dark:text-gray-300">
            <p className="flex items-center gap-2">
              <Clock size={16} /> Monday – Friday: 9:00 AM – 6:00 PM
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={16} /> London, United Kingdom
            </p>
          </div>
        </div>

        {/* UAE OFFICE */}
        <div className="p-6 rounded-xl glass shadow-md hover:-translate-y-1 transition-transform">
          <h3 className="font-semibold text-lg mb-2">United Arab Emirates</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Al Marsa Street,<br />
            Dubai Marina,<br />
            Dubai, UAE
          </p>
          <div className="mt-3 text-sm text-gray-700 dark:text-gray-300">
            <p className="flex items-center gap-2">
              <Clock size={16} /> Monday – Friday: 9:00 AM – 6:00 PM
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={16} /> Dubai Marina, Dubai, UAE
            </p>
          </div>
        </div>

        {/* CHENNAI OFFICE */}
        <div className="p-6 rounded-xl glass shadow-md hover:-translate-y-1 transition-transform">
          <h3 className="font-semibold text-lg mb-2">India – Chennai</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Nungabakkam,<br />
            Chennai,<br />
            India
          </p>
          <div className="mt-3 text-sm text-gray-700 dark:text-gray-300">
            <p className="flex items-center gap-2">
              <Clock size={16} /> Monday – Friday: 9:30 AM – 6:00 PM
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={16} /> Chennai, India
            </p>
          </div>
        </div>

        {/* BANGALORE OFFICE */}
        <div className="p-6 rounded-xl glass shadow-md hover:-translate-y-1 transition-transform">
          <h3 className="font-semibold text-lg mb-2">India – Bangalore</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Hanumanth Nagar,<br />
            Bangalore,<br />
            India
          </p>
          <div className="mt-3 text-sm text-gray-700 dark:text-gray-300">
            <p className="flex items-center gap-2">
              <Clock size={16} /> Monday – Friday: 9:30 AM – 6:00 PM
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={16} /> Bangalore, India
            </p>
          </div>
        </div>

      </section>
    </div>
  )
}
