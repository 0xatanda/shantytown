import { useEffect } from 'react'

export default function Donate() {
  useEffect(() => {
    document.title = 'Donate & Partner | Shantytown Empowerment Foundation'
  }, [])

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 space-y-16">
      
      {/* Page Header */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-green-700">
          Support Our Work
        </h1>
        <p className="mt-4 text-gray-600">
          Your contributions and partnerships enable SHEF to strengthen
          community savings, research, advocacy, and inclusive development
          across informal settlements.
        </p>
      </div>

      {/* Donation Account Details – Single Box */}
      <div className="rounded-lg border border-gray-200 p-8">
        <h2 className="text-2xl font-semibold">
          Donation Account Details
        </h2>

        <p className="mt-4 text-gray-600 max-w-3xl">
          Donations can be made locally or internationally using the account
          details below. For confirmation, receipts, or additional information,
          please contact us via email.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          
          {/* NGN */}
          <div>
            <h3 className="font-semibold text-lg">
              Local (NGN)
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Bank Name: Access Bank<br />
              Account Name: Shantytown Empowerment Foundation<br />
              Account Number: 1526597971 
            </p>
          </div>

          {/* USD */}
          <div>
            <h3 className="font-semibold text-lg">
              International (USD)
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Bank Name: Access Bank<br />
              Account Name: Shantytown Empowerment Foundation<br />
              Account Number: 1526607153 <br />
              SWIFT/BIC: ABNGNGLA <br />
              SORT code: 044152804 <br />
            </p>
          </div>

          {/* GBP */}
          <div>
            <h3 className="font-semibold text-lg">
              International (GBP)
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Bank Name: [Bank Name]<br />
              Account Name: Shantytown Empowerment Foundation<br />
              Account Number: XXXXXXXX<br />
              Sort Code: XXXX
            </p>
          </div>
        </div>

        <p className="mt-8">
          <a
            href="mailto:shantytownfoundation@gmail.com?subject=Donation%20Inquiry"
            className="text-green-700 font-medium hover:underline"
          >
            Reach out via email for donation support or confirmation
          </a>
        </p>
      </div>

      {/* Partnership Section */}
      <div className="rounded-lg border border-gray-200 p-8">
        <h2 className="text-2xl font-semibold text-green-700">
          Partnership & Collaboration
        </h2>

        <p className="mt-4 text-gray-600 max-w-3xl">
          Shantytown Empowerment Foundation welcomes partnerships with institutions,
          researchers, funders, and development organizations aligned with
          community-led, inclusive, and evidence-based development.
        </p>

        <p className="mt-6 font-medium">
          To discuss partnership opportunities, proposals, or institutional
          support, please contact us via email:
        </p>

        <p className="mt-4">
          <a
            href="mailto:shantytownfoundation@gmail.com?subject=Partnership%20Inquiry"
            className="inline-block rounded-md bg-green-600 px-6 py-3 text-sm font-medium text-white hover:bg-green-700 transition"
          >
            Contact Us for Partnership
          </a>
        </p>
      </div>

    </section>
  )
}
