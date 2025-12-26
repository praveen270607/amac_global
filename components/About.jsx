// components/About.jsx
import Link from 'next/link'

export default function About() {
  return (
    <section className="mt-4 mb-12">
      {/* Page header */}
      <div className="mb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          About AMAC Global Management Consultancy
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Integrated solutions across business, technology, education, and human capital
        </p>
      </div>

      {/* Main card */}
      <div className="glass rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg p-6 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left section */}
          <div className="flex flex-col gap-4">
            <div
              className="w-full h-40 rounded-lg shadow-md bg-cover bg-center bg-no-repeat opacity-90"
              style={{
                backgroundImage:
                  "url('/A_photograph_captures_a_modern_office_environment_.png')",
              }}
            />

            <p className="text-sm text-gray-700 dark:text-gray-300">
              AMAC GLOBAL Management Consultancy is a multi-service advisory firm delivering
              integrated solutions across business, technology, education, and human capital.
              We empower enterprises, professionals, and students with tailored strategies
              designed to achieve sustainable growth and long-term success.
            </p>

            <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
              <p>
                <strong>Who we are</strong><br />
                A team of experienced consultants and industry specialists committed to
                excellence, compliance, and innovation.
              </p>
              <p>
                <strong>Our approach</strong><br />
                Client-focused, results-driven, scalable, and precision-led solutions.
              </p>
            </div>
          </div>

          {/* Right section */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold mb-3">What We Do</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Our portfolio spans <strong>15 specialized service verticals</strong>, offering
              end-to-end solutions across diverse domains:
            </p>

            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
              <li><strong>International Manpower & Staffing Solutions</strong> – Overseas recruitment, visa documentation, CV enhancement, and pre-departure training.</li>
              <li><strong>International Education & Admissions Consultancy</strong> – University selection, SOP/LOR drafting, visa filing, and accommodation advisory.</li>
              <li><strong>Global Business Setup & Licensing</strong> – Company formation, offshore incorporation, VAT registration, and PRO services.</li>
              <li><strong>HR & Payroll Outsourcing Services</strong> – HRMS implementation, manpower planning, and performance management systems.</li>
              <li><strong>IT Infrastructure & Technology Solutions</strong> – Software development, cybersecurity, CRM/ERP advisory, and digital transformation.</li>
              <li><strong>Interior & Fit-Out Works</strong> – Turnkey execution, sustainable design, and AI-powered space optimisation.</li>
              <li><strong>Educational Training & Skill Development</strong> – Corporate workshops, certification programs, soft skills training, and industrial workforce development.</li>
              <li><strong>Tax Consultancy & Accounting Services</strong> – VAT compliance, audit management, financial reporting, and international tax planning.</li>
              <li><strong>Branding & Corporate Identity Design</strong> – Brand strategy, logo design, visual identity systems, and digital content architecture.</li>
              <li><strong>Cross-Border Business Expansion Services</strong> – Market entry strategy, regulatory advisory, international SEO, and partner network development.</li>
              <li><strong>Real Estate & Commercial Brokerage Services</strong> – Property acquisition, leasing, investment advisory, and portfolio management.</li>
              <li><strong>Travels & Tourism Services</strong> – Corporate travel management, leisure packages, visa assistance, and itinerary planning.</li>
              <li><strong>Digital Marketing & Social Media Management</strong> – SEO, content strategy, paid campaigns, and influencer outreach.</li>
              <li><strong>Construction & Civil Engineering Consultancy</strong> – Project planning, estimation, site supervision, and regulatory compliance.</li>
              <li><strong>Legal Advisory & Documentation Services</strong> – Contract drafting, legal opinions, notarization, and compliance support.</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              To be recognized as the leading consultancy brand, delivering transformative
              solutions with integrity, innovation, and measurable impact.
            </p>

            <h3 className="text-lg font-semibold mb-2">Our Commitment</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              At AMAC GLOBAL, we uphold the highest standards of professionalism and service
              excellence. We serve as a trusted partner for businesses and individuals seeking
              growth, mobility, and success.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/consultation"
                className="inline-block bg-brand-500 text-white px-4 py-2 rounded-md shadow hover:opacity-90"
              >
                Get Consultation
              </Link>
              <Link
                href="/contact"
                className="inline-block border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-md"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 text-sm text-gray-600 dark:text-gray-400">
          <strong>Start your global journey with AMAC today.</strong> Let us help you
          transform ambition into achievement.
        </div>
      </div>
    </section>
  )
}
