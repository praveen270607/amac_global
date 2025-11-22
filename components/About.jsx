// components/About.jsx
import Image from 'next/image'
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
          Empowering Global Growth through Expertise, Integrity &amp; Innovation
        </p>
      </div>

      {/* Main card */}
      <div className="glass rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg p-6 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* left: logo / summary */}
          <div className="flex flex-col items-start gap-4">
            <div className="w-full">
              <div
                className="w-full h-40 rounded-lg shadow-md bg-cover bg-center bg-no-repeat opacity-90"
                style={{
                  backgroundImage: "url('/A_photograph_captures_a_modern_office_environment_.png')"
                }}
              />
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              We are more than just advisors — we are global enablers. Established to bridge
              opportunity and expertise, AMAC serves individuals, entrepreneurs, and corporations
              across continents.
            </p>

            <dl className="mt-2 space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <div>
                <dt className="font-semibold">What we do</dt>
                <dd>
                  International recruitment, education consulting, business setup, HR &amp; payroll,
                  IT, AI design, skill development, tax consultancy.
                </dd>
              </div>
              <div>
                <dt className="font-semibold">Our approach</dt>
                <dd>
                  Insight + Innovation — certified professionals combining domain experience with
                  modern technologies.
                </dd>
              </div>
            </dl>
          </div>

          {/* right: main copy */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              At AMAC Global Management Consultancy, we help clients move confidently towards
              success. Our mission is to empower global growth using a blend of expertise, integrity,
              and innovation. We partner with each client to build tailored, practical strategies
              that work across borders and sectors.
            </p>

            <h3 className="text-lg font-semibold mb-2">How we help</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
              <li>
                <strong>Overseas employment:</strong> Recruitment and placement services matched to
                market needs.
              </li>
              <li>
                <strong>Education abroad:</strong> End-to-end counselling and placement for students
                seeking international education.
              </li>
              <li>
                <strong>Offshore business setup:</strong> Company formation, regulatory compliance,
                and banking introductions.
              </li>
              <li>
                <strong>HR &amp; Payroll:</strong> Managed services for payroll, benefits, and local
                HR compliance.
              </li>
              <li>
                <strong>IT &amp; AI-powered design:</strong> Web, apps and AI-assisted interior
                design solutions.
              </li>
              <li>
                <strong>Skill development &amp; Tax consultancy:</strong> Training programs and tax
                advisory for cross-border operations.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Why choose AMAC?</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Our team of certified professionals, industry veterans, and technology experts combine
              insight with innovation to ensure your goals are not just met — they are exceeded.
              Your ambition knows no borders — neither do we.
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
          <strong>Start your global journey with AMAC today.</strong> Contact our team for a tailored
          consultation.
        </div>
      </div>
    </section>
  )
}
