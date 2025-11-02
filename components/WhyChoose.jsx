export default function WhyChoose() {
  const items = [
    { title: 'Business Strategy', desc: 'Expert guidance for business setup and development strategies' },
    { title: 'Talent Solutions', desc: 'Comprehensive manpower recruitment and education consultancy' },
    { title: 'Global Reach', desc: 'Supporting businesses and individuals across international markets' },
    { title: 'Growth Focus', desc: 'Technology and infrastructure advisory for sustainable growth' },
  ]
  return (
    <section className="mt-10">
      <h3 className="text-2xl font-bold">Why Choose AMAC Global Management Consultancy?</h3>
      <p className="text-gray-600 dark:text-gray-300 mt-2">We deliver comprehensive solutions that drive growth and success for businesses and individuals worldwide.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((it) => (
          <div key={it.title} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:scale-102 transition-transform">
            <h4 className="font-semibold">{it.title}</h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
