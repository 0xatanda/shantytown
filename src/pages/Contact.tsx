import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact | Shantytown Empowerment Foundation'
  }, [])

  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      {/* Page Header */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-4 text-gray-600">
          Reach out to the Shantytown Empowerment Foundation (SHEF). We welcome
          partnerships, research collaboration, donations, and community
          engagement.
        </p>
      </div>

      {/* Content Grid */}
      <div className="mt-12 grid gap-10 md:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold">Office Address</h3>
            <p className="mt-2 text-gray-600">
              13 Bashiru Street (1st Floor)<br />
              Ojodu Berger<br />
              Lagos, Nigeria
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Phone</h3>
            <p className="mt-2 text-gray-600">
              +234 805 559 6821<br />
              +234 708 102 2172
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Email</h3>
            <p className="mt-2">
              <a
                href="mailto:shantytownfoundation@gmail.com"
                className="text-green-700 hover:underline"
              >
                shantytownfoundation@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Donation & Support */}
        <div className="rounded-lg border border-gray-200 p-8">
          <h3 className="text-xl font-semibold text-green-700">
            Support Us
          </h3>

          <p className="mt-4 text-gray-600">
            SHEF’s work is sustained through partnerships, grants, and individual
            contributions. Your support helps strengthen community savings,
            advocacy, research, and inclusive development initiatives.
          </p>

          <p className="mt-6 font-medium">
            For donations, funding support, or institutional partnerships,
            please contact us directly:
          </p>

          <p className="mt-3">
            <Link
              to="/donate"
              className="inline-block rounded-md bg-green-600 px-5 py-3 text-sm font-medium text-white hover:bg-green-700 transition"
            >
              Donate or Partner with Us
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
