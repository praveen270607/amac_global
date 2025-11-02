// components/ServicesSection.jsx
import Link from 'next/link'

export default function ServicesSection() {
  const services = [
    {
      title: 'Business & Strategy',
      emoji: '🧭',
      items: ['Business Setup Services', 'Development Consultancy']
    },
    {
      title: 'Talent & Education',
      emoji: '🎓',
      items: ['Manpower Recruitment', 'Education Consultancy']
    },
    {
      title: 'Tech & Infrastructure',
      emoji: '🛠️',
      items: ['IT & Digital Transformation', 'Construction Consultancy']
    },
  ]

  return (
    <section className="mt-10">
      <h3 className="text-2xl font-bold">Our Core Services</h3>
      <p className="text-gray-600 dark:text-gray-300 mt-2">Comprehensive solutions across business strategy, talent acquisition, and technology advisory.</p>

      {/* grid layout - cards are rectangular */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {services.map(s => (
          <div
            key={s.title}
            className="flex flex-col justify-between h-44 p-6 rounded-xl glass shadow-lg hover:-translate-y-2 transition-transform"
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl">{s.emoji}</div>
              <div>
                <h4 className="font-bold text-lg">{s.title}</h4>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Explore our {s.title.toLowerCase()} offerings</p>
              </div>
            </div>

            <ul className="mt-4 text-sm text-gray-700 dark:text-gray-200 space-y-1">
              {s.items.map(i => <li key={i} className="flex items-center gap-2"> <span className="text-brand-500">•</span> {i}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <Link href="/services" className="inline-block px-5 py-2 bg-transparent border border-brand-500 text-brand-500 rounded-md hover:bg-brand-500 hover:text-white transition">
          View All Services &rarr;
        </Link>
      </div>
    </section>
  )
}
