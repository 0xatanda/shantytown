import { useEffect } from 'react'
import AvatarCloud from '../components/AvatarCloud'
import { motion } from 'framer-motion'

const partners = [
  { name: 'SDI', logo: '/partners/sdi.jpg' },
  { name: 'hbs', logo: '/partners/hbs.jpg' },
  { name: 'ACRC', logo: '/partners/acrc.jpg' },
  { name: 'CHSD-UNILAG-logo', logo: '/partners/CHSD-UNILAG-logo.jpg' },
  { name: 'Cuso_logo_Colour', logo: '/partners/Cuso_logo_Colour.jpg' },
  { name: 'KYCTV', logo: '/partners/kyctv.jpg' },
  { name: 'Nigeria Slum/Informal Settlement Federation (NSISF)', logo: '/partners/federation.jpg' },
]

const metrics = [
  { value: '25+', label: 'Savings Groups Supported' },
  { value: '10+', label: 'Communities Reached' },
  { value: '5,000+', label: 'Households Impacted' },
  { value: '3+', label: 'Years of Community Organizing' },
]

export default function Home() {
  useEffect(() => {
    document.title = 'Home | Shantytown Empowerment Foundation'
  }, [])

  return (
    <>
      {/* HERO SECTION */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid items-center gap-16 md:grid-cols-2">
          
          {/* Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Shantytown Empowerment Foundation
            </h1>

            <p className="mt-6 mx-auto md:mx-0 max-w-xl text-gray-600">
              SHEF is a dedicated non-governmental organization supporting the Nigeria Slum/Informal Settlement Federation (NSISF), committed to empowering marginalized and deprived communities through social and economic transformation initiatives aimed at improving livelihoods, promoting sustainable development, and fostering inclusive growth across Nigeria. SHEF and the Nigeria Federation are Nigeria affiliates of Slum Dwellers International (SDI). Through partnerships, advocacy, and community-driven projects, SHEF works to address critical needs in housing, water, sanitation, health, and economic empowerment, helping communities build resilience and achieve lasting progress.
            </p>

            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="/projects"
                className="rounded-md bg-green-600 px-6 py-3 text-sm font-medium text-white hover:bg-green-700 transition"
              >
                Our Projects
              </a>

              <a
                href="/about"
                className="rounded-md border border-green-600 px-6 py-3 text-sm font-medium text-green-700 hover:bg-green-50 transition"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Avatar Section */}
          <div className="flex justify-center md:justify-end">
            <AvatarCloud />
          </div>

        </div>
      </section>



            {/* IMPACT METRICS SECTION */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-2xl font-semibold">
            Our Impact
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-center text-gray-600">
            Through community savings, data collection, advocacy, and
            partnerships, SHEF supports informal settlement communities to
            lead their own development and influence inclusive policies.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-lg border border-gray-200 bg-white p-6 text-center"
              >
                <div className="text-3xl font-bold text-green-700">
                  {metric.value}
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* PARTNERS SECTION */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-2xl font-semibold">
            Our Partners
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-center text-gray-600">
            We collaborate with trusted institutions, academic partners, and
            community networks to drive sustainable and inclusive impact.
          </p>

          <motion.div 
            className="mt-12 flex flex-wrap justify-center items-center gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
            {partners.map((partner) => (
              <motion.div
                key={partner.name}
                className="flex items-center justify-center"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 w-auto object-contain" // maintain original colors
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </>
  )
}
