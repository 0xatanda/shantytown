import { blogPosts } from '../data/blogPosts'

export const content = [
  // BLOG (internal)
  {
    type: 'blog',
    id: 0,
    title: blogPosts[0].title,
    summary:
      'A field-based narrative on water access challenges in Lagos communities.',
    date: blogPosts[0].date,
    author: blogPosts[0].author,
  },

  // EXTERNAL PUBLICATIONS
  {
    type: 'external',
    title:
      'Transforming Informal Settlements in Lagos Through Community-Driven WASH Innovation',
    summary:
      'A project report on community-led WASH innovation in Okerube.',
    date: 'July 10, 2025',
    source: 'African Cities Research Consortium',
    url: 'https://www.african-cities.org/transforming-informal-settlements-in-lagos-through-community-driven-wash-innovation-the-okerube-project/',
  },
]