import Tag from '@/components/Tag'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Sidebar({ authorDetails, next, prev, content, locale }) {
  const { filePath, path, slug, date, title, tags, toc } = content
  const basePath = path.split('/')[0]
  return (
    <div>
      <dl className="pb-10 pt-6 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
        <dt className="sr-only">Authors</dt>
        <dd>
          <ul className="flex flex-wrap justify-center gap-4 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
            {authorDetails &&
              authorDetails.map((author) => (
                <li className="flex items-center space-x-2" key={author.name}>
                  {author.avatar ? (
                    <Image
                      src={author.avatar}
                      width={38}
                      height={38}
                      alt="avatar"
                      className="h-10 w-10 rounded-full"
                    />
                  ) : (
                    <Image
                      src={'/placeholder.svg'}
                      width={38}
                      height={38}
                      alt="avatar"
                      className="h-10 w-10 rounded-full"
                    />
                  )}
                  <dl className="whitespace-nowrap text-sm font-medium leading-5">
                    <dt className="sr-only">Name</dt>
                    <dd className="text-gray-900 dark:text-gray-100">
                      <Link href={`${author.url ? author.url : '/author/' + author.slug}`}>
                        {author.name}
                      </Link>
                    </dd>
                    <dt className="sr-only">Twitter</dt>
                    <dd>
                      {author.twitter ? (
                        <Link
                          href={author.twitter}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        >
                          {author.twitter.replace('https://twitter.com/', '@')}
                        </Link>
                      ) : author.url ? (
                        <Link
                          href={author.url}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        >
                          {author.url}
                        </Link>
                      ) : null}
                    </dd>
                  </dl>
                </li>
              ))}
          </ul>
        </dd>
      </dl>
      <footer>
        <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
          {/* Adds*/}
          <div className="flex items-center justify-center py-4 xl:py-8">
            <a href="https://www.digitalocean.com/?refcode=bcd15eddc0aa&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge">
              <Image
                width={200}
                height={200}
                src="https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%202.svg"
                alt="DigitalOcean Referral Badge"
              />
            </a>
          </div>
          {tags && (
            <div className="py-4 xl:py-8">
              <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Tags
              </h2>
              <div className="flex flex-wrap">
                {tags.map((tag) => (
                  <Tag key={tag} text={tag} />
                ))}
              </div>
            </div>
          )}
          {(next || prev) && (
            <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
              {prev && prev.slug && (
                <div>
                  <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Previous Article
                  </h2>
                  <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                    <Link href={`/${locale}/blog/${prev.slug}`}>{prev.title}</Link>
                  </div>
                </div>
              )}
              {next && next.slug && (
                <div>
                  <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Next Article
                  </h2>
                  <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                    <Link href={`/${locale}/blog/${next.slug}`}>{next.title}</Link>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="pt-4 xl:pt-8">
          <Link
            href={`/${basePath}`}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="Back to the blog"
          >
            &larr; Back to the blog
          </Link>
        </div>
        <div className="sticky top-0 pt-10">
          <ins
            className="adsbygoogle sticky top-10 mt-6"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-3646138644530578"
            data-ad-slot="9734184827"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </div>
      </footer>
    </div>
  )
}
