import { useEffect } from 'react'
import { Link } from 'react-router-dom'

type Publication = {
  type: 'external'
  title: string
  summary: string
  date: string
  source: string
  url: string
}

type Blog = {
  type: 'blog'
  id: number
  title: string
  summary: string
  date: string
  author: string
}

type Content = Publication | Blog

const content: Content[] = [
  // ✅ BLOG (internal)
  {
    type: 'blog',
    id: 0,
    title:
      'No Water, No Dignity: The Everyday WASH Crisis in Lagos’ Informal Settlements',
    summary:
      'A field-based narrative on water access challenges in Lagos communities.',
    date: 'April 9, 2026',
    author: 'Nafiu Atanda',
  },

  // ✅ EXISTING PUBLICATIONS (unchanged, just add type)
  {
    type: 'external',
    title:
      'ACRC Hosts Transformative Action Research and Safeguarding Workshop in Lagos',
    summary:
      'A detailed account of a high-impact workshop held in Lagos on action research and safeguarding strategies.',
    date: 'June 26, 2025',
    source: 'CHSD UNILAG',
    url: 'https://chsdunilag.org/acrc-hosts-transformative-action-research-and-safeguarding-workshop-in-lagos/',
  },

  {
    type: 'external',
    title:
      'Transforming Informal Settlements in Lagos Through Community-Driven WASH Innovation: The Okerube Project',
    summary:
      'A project report on community-led WASH innovation in Okerube, Lagos.',
    date: 'July 10, 2025',
    source: 'African Cities Research Consortium',
    url: 'https://www.african-cities.org/transforming-informal-settlements-in-lagos-through-community-driven-wash-innovation-the-okerube-project/',
  },

  {
    type: 'external',
    title:
      'Group unveils water, sanitation project in Lagos settlement',
    summary:
      'Coverage of a WASH initiative improving sanitation in Lagos communities.',
    date: 'September 22, 2025',
    source: 'The Guardian Nigeria',
    url: 'https://guardian.ng/news/nigeria/metro/group-unveils-water-sanitation-project-in-lagos-settlement/',
  },

  {
    type: 'external',
    title:
      'Building Partnerships in Development: What Needs to Change?',
    summary:
      'An analytical blog exploring priorities for transforming partnership paradigms.',
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
        Publications & Blog
      </h1>

      <p className="mt-4 max-w-2xl text-gray-600">
        Our publications and blog articles highlight community-driven research,
        policy engagement, and field experiences across informal settlements.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {content.map((item, index) => (
          <article
            key={index}
            className="rounded-lg border border-gray-200 bg-white p-6 transition hover:shadow-md"
          >
            {/* TYPE BADGE */}
            <span className="text-xs bg-gray-100 px-2 py-1 rounded">
              {item.type === 'blog' ? 'Blog' : 'Publication'}
            </span>

            <h2 className="mt-3 text-lg font-semibold">
              {item.title}
            </h2>

            <p className="mt-3 text-sm text-gray-600">
              {item.summary}
            </p>

            <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
              <span>{item.date}</span>
              <span>
                {item.type === 'blog' ? item.author : item.source}
              </span>
            </div>

            {/* ✅ CONDITIONAL BUTTON */}
            {item.type === 'blog' ? (
              <Link
                to={`/blog/${item.id}`}
                className="mt-6 inline-block rounded-md bg-green-600 px-5 py-2 text-sm font-medium text-white hover:bg-green-700 transition"
              >
                Read Blog →
              </Link>
            ) : (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-md bg-green-600 px-5 py-2 text-sm font-medium text-white hover:bg-green-700 transition"
              >
                View Publication →
              </a>
            )}
          </article>
        ))}
      </div>

    </section>
  )
}