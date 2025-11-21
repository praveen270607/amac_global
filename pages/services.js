// pages/services.js
import Link from 'next/link'

const SERVICES = [
  {
    emoji: '🌍',
    title: 'International Manpower & Staffing Solutions',
    subtitle: 'Overseas Employment Consultancy',
    keywords:
      'Overseas job consultancy, visa guidance, employment documentation, international recruitment.',
    intro:
      'Embark on your global career with precision and confidence. Our Overseas Employment Division simplifies every stage of the international job process — from document verification to visa guidance and interview readiness.',
    bullets: [
      'Document review and attestation for work visas.',
      'Personalised job application advisory and CV enhancement.',
      'Country-specific visa filing support and embassy documentation.',
      'Pre-departure orientation and professional conduct training.'
    ],
    closing:
      'Turn opportunities abroad into reality with AMAC’s trusted employment experts.'
  },
  {
    emoji: '🎓',
    title: 'International Education & Admissions Consultancy',
    subtitle: 'Abroad Education Services',
    keywords:
      'Study abroad consultants, university admissions, SOP and LOR writing, student visa services.',
    intro:
      'Shape your future with education beyond borders. Our Abroad Education Services provide end-to-end guidance for students aiming to study in globally renowned universities.',
    bullets: [
      'University selection and complete application management.',
      'SOP (Statement of Purpose) and LOR (Letter of Recommendation) drafting support.',
      'Student visa filing and documentation guidance.',
      'Financial guidance and accommodation support.'
    ],
    closing: 'Let AMAC help you gain admission to your dream university abroad.'
  },
  {
    emoji: '📝',
    title: 'Global Business Setup & Licensing',
    subtitle: 'Offshore Business Setup',
    keywords:
      'Company formation UAE, business setup in UK/India, offshore banking, corporate compliance.',
    intro:
      'Expand globally with AMAC’s Offshore Business Setup Services. Whether you’re forming a company in the UAE, UK, or India, we ensure full legal, financial, and operational compliance.',
    bullets: [
      'Company registration and licensing.',
      'Virtual office and mail management solutions.',
      'Corporate bank account setup and KYC assistance.',
      'Ongoing compliance, VAT registration and PRO services.'
    ],
    closing:
      'Build your global business foundation with AMAC — your partner in borderless entrepreneurship.'
  },
  {
    emoji: '👥',
    title: 'HR & Payroll Outsourcing Services',
    subtitle: 'HR & Payroll Solutions',
    keywords:
      'HR outsourcing, payroll management, employee onboarding, HRMS software UAE.',
    intro:
      'Simplify your workforce management with our HR & Payroll Solutions tailored for businesses of all sizes. We combine automation and compliance to create smooth HR operations.',
    bullets: [
      'Employee onboarding and exit formalities.',
      'Payroll calculation, WPS compliance and payslip generation.',
      'HRMS implementation and employee self-service tools.',
      'Manpower planning and performance management systems.'
    ],
    closing: 'Optimise your HR efficiency with AMAC’s intelligent people management.'
  },
  {
    emoji: '💻',
    title: 'IT Infrastructure & Technology Solutions',
    subtitle: 'IT Services',
    keywords:
      'IT consulting, website development, mobile app development, cybersecurity, CRM/ERP solutions.',
    intro:
      'Drive your business digitally with our cutting-edge IT Services. We design, develop and secure technology solutions to empower your growth.',
    bullets: [
      'Website and mobile application development.',
      'Cloud infrastructure setup and migration.',
      'Cybersecurity audits and data protection strategies.',
      'CRM and ERP advisory for business automation.'
    ],
    closing:
      'Empower your business through smart, secure, and scalable technology with AMAC.'
  },
  {
    emoji: '🎨',
    title: 'Interior & Fit-Out Works',
    subtitle: 'AI-Powered Interior Design & Fit-Out Consulting',
    keywords:
      'AI interior design, commercial fit-out UAE, residential interior consultancy, turnkey projects.',
    intro:
      'Reimagine spaces through creativity and AI precision. Our Interior Design & Fit-Out Consulting merges technology with aesthetic brilliance to deliver stunning, functional spaces in India, UAE and the UK.',
    bullets: [
      'AI-assisted 3D planning and visualisation.',
      'Residential and commercial interior design.',
      'Turnkey project execution with material sourcing.',
      'Space optimisation and sustainable design concepts.'
    ],
    closing:
      'Experience intelligent design and flawless execution with AMAC’s interior specialists.'
  },
  {
    emoji: '📚',
    title: 'Educational Training & Skill Development',
    subtitle: 'Training & Skill Development Programs',
    keywords:
      'Corporate training India/UAE/UK, skill development workshops, professional certification programs.',
    intro:
      'Empower people with practical knowledge. Our Training Division delivers corporate learning, vocational programs and skill enhancement courses designed for today’s global workforce.',
    bullets: [
      'Leadership and corporate excellence workshops.',
      'IT and technical certification programs.',
      'Soft skills, communication and business etiquette training.',
      'Tailored corporate training modules for enterprises.',
      'Skill training for industrial and commercial workers.'
    ],
    closing:
      'Upgrade your team’s potential with AMAC’s skill development expertise.'
  },
  {
    emoji: '💼',
    title: 'Tax Consultancy & Accounting Services',
    subtitle: 'Tax Consultancy',
    keywords:
      'Tax consultancy UAE, accounting services, bookkeeping, auditing, VAT compliance.',
    intro:
      'Ensure financial transparency and compliance with AMAC’s Tax Consultancy Services. We deliver strategic, data-driven financial management for businesses operating locally or offshore.',
    bullets: [
      'Accounting, bookkeeping and financial reporting.',
      'VAT filing and compliance audits.',
      'Corporate tax advisory and financial planning.',
      'External and internal audit management.'
    ],
    closing: null
  },
  {
    emoji: '🪪',
    title: 'Branding & Corporate Identity Design',
    subtitle: 'Branding & Corporate Identity Design',
    keywords:
      'Brand strategy, logo design, visual identity systems, SEO-aligned brand content.',
    intro:
      'Crafting distinctive identities that resonate and endure. Branding today is the strategic articulation of your business’s essence — its values, voice and vision. AMAC Global specialises in bespoke branding and corporate identity design that captivates, builds trust and nurtures loyalty.',
    bullets: [
      'Brand discovery and strategy: defining purpose and positioning.',
      'Logo and visual system design for cohesive brand presence.',
      'Typography and colour systems that evoke emotion and clarity.',
      'Comprehensive brand guidelines for consistency across all media.',
      'SEO-aware brand content and structure to enhance online visibility.'
    ],
    closing:
      'Whether you’re launching or revitalising a brand, we help you articulate your identity with clarity, elegance and impact.'
  },
  {
    emoji: '🌐',
    title: 'Cross-Border Business Expansion Services',
    subtitle: 'Cross-Border Business Expansion',
    keywords:
      'International expansion, market entry strategy, regulatory advisory, international SEO.',
    intro:
      'In an interconnected world, cross-border expansion is a strategic imperative. AMAC Global provides comprehensive solutions that enable businesses to scale internationally with confidence, precision and cultural intelligence.',
    bullets: [
      'Market research and feasibility studies for target regions.',
      'Regulatory and tax advisory for local compliance.',
      'Cultural and linguistic adaptation of brand messaging.',
      'International SEO and digital strategy for multi-language visibility.',
      'Operational setup, local entities, partner networks and alliances.'
    ],
    closing:
      'From GCC to Southeast Asia and beyond, we combine cultural intelligence, digital agility and end-to-end support to make your global expansion a success.'
  }
]

export default function Services() {
  return (
    <div className="pb-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Our Services</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          AMAC Global provides integrated solutions across international manpower, education, business setup,
          HR, technology, design, training, tax, branding and global expansion.
        </p>
      </header>

      <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <article
            key={s.title}
            className="p-6 rounded-xl glass shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full"
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl">{s.emoji}</div>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold leading-tight">{s.title}</h3>
                <p className="text-sm font-medium text-brand-500 mt-1">{s.subtitle}</p>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Keywords:</span> {s.keywords}
                </p>
              </div>
            </div>

            <div className="mt-4 flex-1">
              <p className="text-sm text-gray-700 dark:text-gray-300">{s.intro}</p>

              <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              {s.closing && (
                <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">{s.closing}</p>
              )}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <Link
                href="/consultation"
                className="inline-block px-4 py-2 bg-brand-500 text-white rounded-md shadow hover:opacity-95 transition"
              >
                Get Consultation
              </Link>
              <Link
                href="/contact"
                className="text-sm text-gray-600 dark:text-gray-300 hover:underline"
              >
                Contact Us →
              </Link>
            </div>
          </article>
        ))}
      </section>

      <footer className="mt-10 border-t border-gray-200 dark:border-gray-700 pt-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Want a tailored service package? Contact us and we’ll build a custom solution for your needs.
          </p>
          <Link
            href="/contact"
            className="inline-block px-5 py-2 border border-brand-500 text-brand-500 rounded-md hover:bg-brand-500 hover:text-white transition"
          >
            Contact Us
          </Link>
        </div>
      </footer>
    </div>
  )
}
