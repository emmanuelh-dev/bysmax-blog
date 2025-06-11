import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog, Authors } from 'contentlayer/generated'
import Comments from '@/components/Comments'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer, { SectionContainerWithAds } from '@/components/SectionContainer'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { ArrowLeft, Clock } from 'lucide-react'
import SupabaseCommentsWrapper from '@/components/comments/SupabaseCommentsWrapper'

const editUrl = (path) => `${siteMetadata.siteRepo}/blob/main/data/${path}`
const discussUrl = (path) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`${siteMetadata.siteUrl}/${path}`)}`

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function PostLayout({ content, authorDetails, next, prev, children }: LayoutProps) {
  const { filePath, path, slug, date, title, tags } = content
  const basePath = path.split('/')[0]

  return (
    <SectionContainerWithAds>
      <ScrollTopAndComment />

      {/* Fondo con cuadrados */}
      <div className="mt-20 h-full min-h-screen w-full bg-[linear-gradient(to_right,_#88888839_1px,_transparent_1px),_linear-gradient(to_bottom,_#88888839_1px,_transparent_1px)] bg-[length:50%_33%] dark:bg-dark dark:bg-[linear-gradient(to_right,_#5e5e5e3c_1px,_transparent_1px),_linear-gradient(to_bottom,_#5e5e5e3c_1px,_transparent_1px)] dark:text-white lg:bg-[length:33%_33%]">
        <article className="relative z-10 mx-auto max-w-4xl px-6 py-20">
          <div className="mb-12 flex justify-center">
            <a
              href="/"
              className="flex items-center text-sm text-neutral-400 hover:text-black dark:hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Blog / Engineering
            </a>
          </div>
          <h1 className="mb-12 text-balance text-center text-3xl font-medium leading-tight md:text-6xl lg:text-5xl">
            {title}
          </h1>
          <div className="flex items-center justify-center space-x-1">
            <dl>
              <dt className="sr-only">Authors</dt>
              <dd>
                <ul className="mb-4 flex items-center space-x-1">
                  {authorDetails.map((author) => (
                    <li className="flex items-center space-x-2" key={author.name}>
                      {author.avatar && (
                        <Image
                          src={author.avatar}
                          width={24}
                          height={24}
                          alt="avatar"
                          className="h-6 w-6 rounded-full bg-neutral-600"
                        />
                      )}
                      <dl className="sr-only">
                        <dt className="sr-only">Name</dt>
                        <dd className="text-neutral-900 dark:text-neutral-100">{author.name}</dd>
                        <dt className="sr-only">Twitter</dt>
                        <dd>
                          {author.twitter && (
                            <Link
                              href={author.twitter}
                              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            >
                              {author.twitter
                                .replace('https://twitter.com/', '@')
                                .replace('https://x.com/', '@')}
                            </Link>
                          )}
                        </dd>
                      </dl>
                    </li>
                  ))}
                </ul>
              </dd>
            </dl>
          </div>
          <div className="mb-12 flex items-center justify-between text-sm text-neutral-400">
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              <span>14 min read</span>
            </div>
            <span className="mx-8 text-neutral-600">·</span>
            <dt className="sr-only">Published on</dt>
            <dd className="leading-6 text-neutral-500 dark:text-neutral-400">
              <time dateTime={date}>
                {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
              </time>
            </dd>
          </div>
          <div>
            <ins
              className="adsbygoogle h-[280px] w-full bg-white dark:bg-black"
              style={{ display: 'block' }}
              data-ad-client="ca-pub-3646138644530578"
              data-ad-slot="6395288197"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
          </div>
          <div>
            <div className="prose max-w-5xl text-pretty pb-8 pt-10 text-lg dark:prose-invert">
              {children}
            </div>
            <SupabaseCommentsWrapper slug={path} />
          </div>
          {/* Footer */}
          <footer className="mt-12 border-t border-neutral-200 pt-8 dark:border-neutral-700">
            <div className="text-md divide-neutral-200 font-medium leading-5 dark:divide-neutral-700 xl:divide-y">
              <div className="flex items-center justify-center py-4 xl:py-6">
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
                <div className="py-4 xl:py-6">
                  <h2 className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
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
                <div className="flex justify-between py-4 text-sm xl:block xl:space-y-6 xl:py-6">
                  {prev && prev.path && (
                    <div>
                      <h2 className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                        Previous Article
                      </h2>
                      <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                        <Link href={`/${prev.path}`}>{prev.title}</Link>
                      </div>
                    </div>
                  )}
                  {next && next.path && (
                    <div>
                      <h2 className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                        Next Article
                      </h2>
                      <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                        <Link href={`/${next.path}`}>{next.title}</Link>
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
            <ins
              className="adsbygoogle sticky top-10 mt-6 h-[600px] w-full bg-white dark:bg-black"
              style={{ display: 'block' }}
              data-ad-client="ca-pub-3646138644530578"
              data-ad-slot="9734184827"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
          </footer>
        </article>
      </div>
    </SectionContainerWithAds>
  )
}
