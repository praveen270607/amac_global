import Hero from '../components/Hero'
import WhyChoose from '../components/WhyChoose'
import ServicesSection from '../components/ServicesSection'

export default function Home() {
  return (
    <div>
      <Hero />
      <WhyChoose />
      <ServicesSection />

      {/* CTA section */}
      <section className="mt-12 p-8 rounded-lg glass shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="min-w-0">
            <h3 className="text-2xl font-bold">Ready to Transform Your Business?</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-3xl">
              Empowering businesses and individuals with strategic guidance, talent solutions,
              and technology advisory services across United Arab Emirates, India, and global markets.
            </p>
          </div>

          <div className="flex-shrink-0">
            <a
              href="/consultation"
              className="inline-flex items-center px-6 py-3 bg-brand-500 text-white rounded-md shadow hover:scale-105 transition-transform"
            >
              Start Your Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
