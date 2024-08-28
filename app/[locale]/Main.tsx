import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import Image from 'next/image'

const MAX_DISPLAY = 6

export default function Home({ posts, locale, title = '', service = false, curso = false }) {
  return (
    <div className="divide-y divide-neutral-200 pt-12 dark:divide-neutral-700">
      <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {!posts.length && 'No posts found.'}
        {posts.slice(0, MAX_DISPLAY).map((post) => {
          const { slug, date, title, summary, tags, cover, authors, images } = post
          const image = images ? images[0] : '/static/images/twitter-card.png'

          return (
            <li key={slug}>
              <article className="h-full flex-1">
                <div className="block w-full lg:col-span-2">
                  {images ? (
                    <Image
                      className="aspect-[384/246] h-full rounded-md bg-center object-cover"
                      width={600}
                      height={400}
                      src={image}
                      alt="The Time Traveler's Notebook"
                    />
                  ) : (
                    <div className="aspect-[384/246] h-full rounded-md bg-amber-200 bg-center object-cover dark:bg-amber-400" />
                  )}
                </div>
                <div className="-mt-20 flex w-full flex-col items-start justify-between p-4">
                  <div className="flex h-full w-full flex-col justify-between text-balance p-4">
                    <div>
                      <div className="rounded-md bg-black/50 p-2 text-white">
                        <h3>
                          <Link
                            className="font-medium uppercase"
                            href={`/${locale}/${service ? 'servicios' : curso ? 'cursos' : 'blog'}/${slug}`}
                          >
                            {title}
                          </Link>
                        </h3>
                      </div>
                      <p className="mt-6 line-clamp-2 text-sm text-neutral-600 dark:text-neutral-200">
                        {summary}
                      </p>
                    </div>
                    {!service && !curso && (
                      <div className="mt-1 inline-flex items-center space-x-1">
                        {authors &&
                          authors.map((author) => (
                            <p
                              className="text-xs font-medium text-neutral-900 dark:text-neutral-400"
                              key={author}
                            >
                              {author}
                            </p>
                          ))}

                        <span aria-hidden="true">·</span>
                        <div className="flex text-xs text-neutral-500">
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
  )
}
