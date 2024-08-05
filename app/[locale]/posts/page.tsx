import React from 'react'
import Main from '@/app/[locale]/Main'
import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from 'pliny/utils/formatDate'
import siteMetadata from '@/data/siteMetadata'
const getPosts = async () => {
  const response = await fetch('https://cdn.bysmax.com/index.php?graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query PostQuery {
          posts {
            nodes {
              title
              date
              slug
              author {
                cursor
              }
              content
            }
          }
        }
      `,
    }),
  })

  const { data } = await response.json()
  return data.posts.nodes
}

export default async function Page() {
  const posts = await getPosts()
  return (
    <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {!posts.length && 'No posts found.'}
      {posts.map((post) => {
        const { slug, date, title, summary, tags, cover, authors, images } = post
        return (
          <li key={slug}>
            <article className="h-full flex-1">
              <div className="block w-full lg:col-span-2">
                {images ? (
                  <Image
                    className="aspect-[384/246] h-full bg-center object-cover"
                    width={600}
                    height={400}
                    src={images[0]}
                    alt="The Time Traveler's Notebook"
                  />
                ) : (
                  <div className="aspect-[384/246] h-full bg-amber-200 bg-center object-cover dark:bg-amber-400" />
                )}
              </div>
              <div className="-mt-20 flex w-full flex-col items-start justify-between p-4">
                <div className="flex h-full w-full flex-col justify-between text-balance p-4">
                  <div>
                    <div className="bg-black/50 p-2 text-white">
                      <Link className="font-medium uppercase" href={`/posts/${slug}`}>
                        {title}
                      </Link>
                    </div>
                    <p className="mt-6 line-clamp-2 text-sm text-slate-600">{summary}</p>
                  </div>
                  <div className="mt-1 inline-flex items-center space-x-1">
                    {authors &&
                      authors.map((author) => (
                        <p
                          className="text-xs font-medium text-gray-900 dark:text-gray-400"
                          key={author}
                        >
                          {author}
                        </p>
                      ))}

                    <span aria-hidden="true">·</span>
                    <div className="flex text-xs text-gray-500">
                      <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </li>
        )
      })}
    </ul>
  )
}
