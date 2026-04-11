import { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    document.title = 'About | Shantytown Empowerment Foundation'
  }, [])

  return (
    <section className="bg-white">
      {/* HERO IMAGE */}
      <div className="mx-auto max-w-7xl px-4 pt-16">
        <div className="overflow-hidden rounded-xl">
          <img
            src="/hero/about-hero.jpg"
            alt="Community empowerment and organizing"
            className="h-105 w-full object-cover"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Heading */}
        <h2 className="mb-6 text-center text-4xl font-bold">
          About Us
        </h2>

        {/* Introduction */}
        <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-gray-700">
          Shantytown Empowerment Foundation (SHEF) is a non-governmental
          organization that supports the Nigeria Slum/Informal Settlement Federation (NSISF). We work with
          marginalized and deprived urban communities to advance social and
          economic transformation through community-led initiatives, advocacy,
          and inclusive development practices.
        </p>

        {/* Focus Statement */}
        <div className="mx-auto mt-12 max-w-4xl text-center">
          <p className="text-lg leading-relaxed text-gray-700">
            Through our focal areas, SHEF seeks to build awareness around social
            and economic rights and explore practical strategies for securing
            their realization. We aim to broaden individual and community access
            to decision-making processes, while strengthening meaningful
            participation in the design and implementation of social and
            economic policies and programs that directly affect urban poor
            communities.
          </p>
        </div>

        {/* FOCAL AREAS */}
{/* FOCAL AREAS */}
        <div className="mt-16 max-w-5xl mx-auto">
            <h3 className="mb-6 text-center text-2xl font-bold">
                Our Focal Areas
            </h3>

            <div className="grid gap-6 sm:grid-cols-2">
                {[
                'Economic and Capacity Building Program',
                'Policy and Advocacy Program',
                'Community Health and Environment Program',
                'Housing and Community Upgrade Program',
                'Storytelling for Impact (Know-Your-City TV)',
                'Profiling and Data Collection Program',
                ].map((item) => (
                <div
                    key={item}
                    className="rounded-lg bg-green-600 px-6 py-4 text-white font-medium"
                >
                    {item}
                </div>
                ))}
            </div>
        </div>


        {/* MISSION */}
        <div className="mx-auto mt-20 max-w-4xl text-center">
          <h3 className="mb-4 text-2xl font-semibold">Our Mission</h3>
          <p className="text-lg leading-relaxed text-gray-600">
            Our mission is to empower informal settlement communities by
            strengthening their capacity to organize, generate data, influence
            policy, and drive inclusive urban development. We are committed to
            supporting community leadership, promoting equity, and enabling
            sustainable improvements in quality of life.
          </p>
        </div>
      </div>
    </section>
  )
}
