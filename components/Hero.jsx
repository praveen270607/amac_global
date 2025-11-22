import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-lg p-8 sm:p-12 glass shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
            Excellence in<br/>Management Consultancy
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Empowering businesses and individuals with strategic guidance, talent solutions,
            and technology advisory services across India, UAE, and global markets.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/services" className="px-5 py-2 bg-brand-500 text-white rounded-md shadow hover:scale-105 transition transform">
              Explore services
            </Link>
            <a href="tel:+971503096657" className="px-5 py-2 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              Call now
            </a>
            <a href="https://wa.me/971503096657" className="px-5 py-2 bg-green-500 text-white rounded-md hover:scale-105 transition transform">
              Whatsapp
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="p-4 bg-white/80 dark:bg-gray-800/70 rounded-lg shadow-sm">
              <h4 className="text-sm font-semibold">Why Choose Us</h4>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                Comprehensive solutions that drive growth and success.
              </p>
            </div>
            <div className="p-4 bg-white/80 dark:bg-gray-800/70 rounded-lg shadow-sm">
              <h4 className="text-sm font-semibold">Global Reach</h4>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                India, UAE and global markets.
              </p>
            </div>
          </div>
        </div>

        {/* Updated Graphic Section */}
        <div className="order-first md:order-last flex items-center justify-center">
          <div className="w-full max-w-md aspect-video rounded-lg overflow-hidden shadow-lg">
            <img
              src="/istockphoto-1366137792-612x612.jpg"
              alt="AMAC Global"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
