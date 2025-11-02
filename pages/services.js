// pages/services.js
import Link from 'next/link'

const SERVICES = [
  {
    emoji: '💻',
    recommended: 'IT Infrastructure & Technology Solutions',
    alts: [
      'Enterprise IT Support & Services',
      'Smart Tech & Infrastructure Management',
      'Business IT Systems & Security'
    ],
    desc: 'Managed IT, support, security, cloud migration, and infrastructure advisory for businesses.'
  },
  {
    emoji: '📝',
    recommended: 'Global Business Setup & Licensing',
    alts: [
      'Company Formation & Legal Structuring',
      'Business Incorporation & Regulatory Services',
      'Startup & Expansion Advisory'
    ],
    desc: 'Company formation, licensing and regulatory compliance support in UAE and abroad.'
  },
  {
    emoji: '🌍',
    recommended: 'International Manpower & Staffing Solutions',
    alts: [
      'Global Workforce Recruitment',
      'Skilled Talent Sourcing & Deployment',
      'Overseas Employment Services'
    ],
    desc: 'End-to-end overseas recruitment, sourcing skilled talent and workforce deployment services.'
  },
  {
    emoji: '👥',
    recommended: 'HR & Payroll Outsourcing Services',
    alts: [
      'Workforce Management & Compliance',
      'Employee Lifecycle & Payroll Solutions',
      'Human Capital Administration'
    ],
    desc: 'Payroll processing, HR policies, compliance, attendance & benefits management.'
  },
  {
    emoji: '✈️',
    recommended: 'Visa & Immigration Advisory Services',
    alts: [
      'Global Mobility & Residency Solutions',
      'Immigration Strategy & Visa Processing',
      'Cross-Border Relocation Support'
    ],
    desc: 'Visa application guidance, immigration strategy, residency and relocation assistance.'
  },
  {
    emoji: '🎓',
    recommended: 'International Education & Admissions Consultancy',
    alts: [
      'Study Abroad Guidance & Visa Support',
      'Global University Placement Services',
      'Overseas Academic Pathways'
    ],
    desc: 'Study abroad counselling, admissions support, and student visa assistance.'
  },
  {
    emoji: '🌐',
    recommended: 'Global Career Placement Services',
    alts: [
      'International Job Opportunities',
      'Overseas Employment Facilitation',
      'Career Abroad Advisory'
    ],
    desc: 'Job matching, placement services and guidance for professionals seeking international careers.'
  },
  {
    emoji: '🏢',
    recommended: 'Cross-Border Business Expansion Services',
    alts: [
      'Global Market Entry Strategy',
      'International Trade & Setup Advisory',
      'Multinational Business Development'
    ],
    desc: 'Market research, entry strategy and local partner identification to expand internationally.'
  },
  {
    emoji: '🎨',
    recommended: 'Branding & Corporate Identity Design',
    alts: [
      'Visual Branding & Strategy',
      'Corporate Image & Marketing Asset',
      'Brand Development & Repositioning'
    ],
    desc: 'Logo, brand identity, and marketing asset creation to build consistent corporate presence.'
  }
]

export default function Services() {
  return (
    <div className="pb-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Services</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          We provide deep-dive consulting across Business & Strategy, Talent & Education, and Tech & Infrastructure.
        </p>
      </header>

      <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <article key={s.recommended} className="p-6 rounded-xl glass shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full">
            <div className="flex items-start gap-4">
              <div className="text-4xl">{s.emoji}</div>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold leading-tight">{s.recommended}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{s.desc}</p>
              </div>
            </div>

            <div className="mt-4 flex-1">
              <h4 className="text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">Alternate options</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                {s.alts.map((a) => (
                  <li key={a} className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-brand-500 mt-1" />
                    <span className="truncate">{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <Link href="/consultation" className="inline-block px-4 py-2 bg-brand-500 text-white rounded-md shadow hover:opacity-95 transition">
                Get Consultation
              </Link>
              <Link href="/services" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">Learn more →</Link>
            </div>
          </article>
        ))}
      </section>

      <footer className="mt-10 border-t border-gray-200 dark:border-gray-700 pt-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">Want a tailored service package? Contact us and we’ll build a custom solution for your needs.</p>
          <Link href="/contact" className="inline-block px-5 py-2 border border-brand-500 text-brand-500 rounded-md hover:bg-brand-500 hover:text-white transition">
            Contact Us
          </Link>
        </div>
      </footer>
    </div>
  )
}
