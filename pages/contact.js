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
            Reach out and we&apos;ll get back within 1–2 business days.
          </p>
          <ContactForm />
        </div>

        {/* --- Map with 3 locations --- */}
        <div className="p-3 rounded-xl glass shadow-lg overflow-hidden">
          <h2 className="text-lg font-semibold mb-2">Our Global Offices</h2>
          <div className="rounded-lg overflow-hidden">
            {/*
              TODO: Replace the src URL with your own Google My Maps embed link
              that has 3 markers:
                - 1–3 Brixton Rd, London, UK
                - Al Marsa Street, Dubai Marina, Dubai, UAE
                - Haddows Rd, Thousand Lights West, Nungambakkam, Chennai 600004, India

              Example My Maps embed format:
              https://www.google.com/maps/d/embed?mid=YOUR_CUSTOM_MAP_ID&ehbc=2E312F
            */}
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
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* UK OFFICE */}
        <div className="p-6 rounded-xl glass shadow-md hover:-translate-y-1 transition-transform">
          <h3 className="font-semibold text-lg mb-2">United Kingdom Office</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            UK Address<br />
            1&nbsp;-&nbsp;3 Brixton Rd,<br />
            London, United Kingdom
          </p>
          <div className="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <p className="flex items-center gap-2">
              <Clock size={16} /> Monday – Friday: 9:00 AM – 6:00 PM
            </p>
            {/* Replace with real UK contact when available */}
            <p className="flex items-center gap-2">
              <Phone size={16} /> +44 0000 000000
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={16} /> 1–3 Brixton Rd, London, UK
            </p>
          </div>
        </div>

        {/* UAE OFFICE */}
        <div className="p-6 rounded-xl glass shadow-md hover:-translate-y-1 transition-transform">
          <h3 className="font-semibold text-lg mb-2">UAE Office</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            UAE Office<br />
            Al Marsa Street, Dubai Marina,<br />
            Dubai, UAE
          </p>
          <div className="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <p className="flex items-center gap-2">
              <Clock size={16} /> Monday – Friday: 9:00 AM – 6:00 PM
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} /> +971 50 309 6657
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={16} /> Al Marsa Street, Dubai Marina, Dubai, UAE
            </p>
          </div>
        </div>

        {/* INDIA OFFICE */}
        <div className="p-6 rounded-xl glass shadow-md hover:-translate-y-1 transition-transform">
          <h3 className="font-semibold text-lg mb-2">India Office</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            India Office<br />
            Haddows Rd, Thousand Lights West,<br />
            Nungambakkam, Chennai 600004,<br />
            Tamil Nadu, India
          </p>
          <div className="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <p className="flex items-center gap-2">
              <Clock size={16} /> Monday – Friday: 9:30 AM – 6:00 PM
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} /> +91 12345 67890
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={16} /> Nungambakkam, Chennai, Tamil Nadu, India
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
