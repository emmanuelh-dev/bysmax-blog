import ListLayout from '@/layouts/ListLayoutWithTags'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allAuthors, allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import Link from 'next/link'

const POSTS_PER_PAGE = 5

export const metadata = genPageMetadata({ title: 'Authors' })

export default function BlogPage() {
  const authors = allCoreContent(allAuthors)
  const pageNumber = 1
  const posts = allCoreContent(sortPosts(allBlogs))

  const getTotalPosts = (author) => {
    const authorPosts = posts.filter((post) => post.authors?.includes(author))
    return authorPosts.length
  }

  return (
    <div>
      <div className="pb-6 pt-6">
        <h1 className="text-5xl font-bold">Sobre Nosotros</h1>
        <p className="text-gray-400">Conoce a nuestros autores</p>
        <div>
          <div className="space-y-4 divide-y py-6">
            {authors.map((author) => (
              <article className="flex flex-col space-y-2 py-4 xl:space-y-0" key={author.name}>
                <div className="space-y-3">
                  <div>
                    <h2 className="text-2xl font-bold leading-8 tracking-tight">
                      <Link
                        className="text-gray-900 dark:text-gray-100"
                        href={`/author/${author.slug}`}
                      >
                        {author.name}
                      </Link>
                    </h2>
                  </div>
                  <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                    {author.occupation}
                    <span className="block font-bold">{getTotalPosts(author.slug)} Posts</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
