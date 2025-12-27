import { useEffect } from 'react'

export default function Projects() {
  useEffect(() => {
    document.title = 'Projects | Shantytown Empowerment Foundation'
  }, [])

  return (
    <section className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center px-4 py-16 text-center">
      <h2 className="text-3xl font-bold">
        Projects
      </h2>

      <p className="mt-6 max-w-xl text-gray-600">
        We are currently documenting and curating our community-led projects,
        including climate mapping, housing documentation, savings groups,
        and environmental advocacy.
      </p>

      <div className="mt-8 rounded-lg border border-green-600 bg-green-50 px-6 py-4">
        <p className="font-medium text-green-700">
          🚧 Coming Soon
        </p>
        <p className="mt-2 text-sm text-gray-600">
          This page will be updated with detailed project information shortly.
        </p>
      </div>
    </section>
  )
}
