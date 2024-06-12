import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import Image from 'next/image'

const MAX_DISPLAY = 6

export default function Home({ posts, title, service = false, curso = false }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {/*siteMetadata.description*/}
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags, cover, authors } = post
            console.log(post)
            return (
              <li key={slug} className="py-12">
                <article className="h-full flex-1">
                  <div className="block w-full lg:col-span-2">
                    {cover ? (
                      <Image
                        className="aspect-[384/246] h-full bg-center object-cover"
                        width={600}
                        height={400}
                        src={cover}
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
                          <Link
                            className="font-medium uppercase"
                            href={`/${service ? 'servicios' : curso ? 'cursos' : 'blog'}/${slug}`}
                          >
                            {title}
                          </Link>
                        </div>
                        <p className="mt-6 line-clamp-2 text-sm text-slate-600">{summary}</p>
                      </div>
                      {!service && !curso && (
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
                      )}
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
