import { useParams } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'
import type { BlogBlock } from '../data/blogPosts'

export default function BlogDetails() {
  const { slug } = useParams()

const post = blogPosts.find(
  (p) => p.slug === slug
)

  if (!post) return <p className="p-10">Post not found</p>

  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      
      <h1 className="text-3xl font-bold">
        {post.title}
      </h1>

      <p className="mt-2 text-gray-500">
        {post.author} · {post.date}
      </p>

      <div className="mt-10 space-y-8">
        {post.blocks.map((block: BlogBlock, i: number) => {

            if (block.type === 'heading') {
                return (
                    <h2 key={i} className="text-2xl font-semibold mt-12">
                    {block.value}
                    </h2>
                )
            }

          if (block.type === 'text') {
            return (
              <p key={i} className="text-lg text-gray-700 leading-relaxed">
                {block.value}
              </p>
            )
          }

          

          if (block.type === 'image') {
            return (
              <div key={i}>
                <img
                  src={block.src}
                  alt={block.caption || 'Blog image'}
                  className="w-full rounded-lg"
                />

                {block.caption && (
                  <p className="text-sm text-gray-500 text-center mt-2">
                    {block.caption}
                  </p>
                )}
              </div>
            )
          }

          return null
        })}
      </div>
    </article>
  )
}