import { useEffect } from 'react'

type Publication = {
  title: string
  summary: string
  date: string
  source: string
  url: string
}

const publications: Publication[] = [
  {
    title:
      'ACRC Hosts Transformative Action Research and Safeguarding Workshop in Lagos',
    summary:
      'A detailed account of a high-impact workshop held in Lagos on action research and safeguarding strategies, convened by the African Cities Research Consortium via CHSD UNILAG.',
    date: 'June 26, 2025',
    source: 'CHSD UNILAG',
    url: 'https://chsdunilag.org/acrc-hosts-transformative-action-research-and-safeguarding-workshop-in-lagos/',
  },
  
  {
    title:
      'Transforming Informal Settlements in Lagos Through Community-Driven WASH Innovation: The Okerube Project',
    summary:
      'A project report on community-led WASH innovation in Okerube, Lagos, highlighting community resilience, governance, and sustainable solutions.',
    date: 'July 10, 2025',
    source: 'African Cities Research Consortium',
    url: 'https://www.african-cities.org/transforming-informal-settlements-in-lagos-through-community-driven-wash-innovation-the-okerube-project/',
  },
  {
    title:
      'Group unveils water, sanitation project in Lagos settlement',
    summary:
      'An article covering the launch of a new water and sanitation initiative in a Lagos informal settlement, focusing on community impact and project goals.',
    date: 'September 22, 2025',
    source: 'The Guardian Nigeria',
    url: 'https://guardian.ng/news/nigeria/metro/group-unveils-water-sanitation-project-in-lagos-settlement/',
  },
  
  {
    title:
      'Building Partnerships in Development: What Needs to Change?',
    summary:
      'An analytical blog exploring priorities for transforming partnership paradigms in development practice and policy, with a focus on inclusivity and local leadership.',
    date: 'November 26, 2025',
    source: 'African Cities Research Consortium',
    url: 'https://www.african-cities.org/building-partnerships-in-development-what-needs-to-change/',
  },
  
]

export default function Publications() {
  useEffect(() => {
    document.title = 'Publications | Shantytown Empowerment Foundation'
  }, [])

  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <h1 className="text-3xl font-bold">
        Publications
      </h1>

      <p className="mt-4 max-w-2xl text-gray-600">
        Our publications and featured articles highlight community-driven
        research, policy engagement, and field interventions carried out by
        SHEF and its partners across informal settlements.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {publications.map((pub, index) => (
          <article
            key={index}
            className="rounded-lg border border-gray-200 bg-white p-6 transition hover:shadow-md"
          >
            <h2 className="text-lg font-semibold">
              {pub.title}
            </h2>

            <p className="mt-3 text-sm text-gray-600">
              {pub.summary}
            </p>

            <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
              <span>{pub.date}</span>
              <span>{pub.source}</span>
            </div>

            <a
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-md bg-green-600 px-5 py-2 text-sm font-medium text-white hover:bg-green-700 transition"
            >
              View on Source Website →
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
