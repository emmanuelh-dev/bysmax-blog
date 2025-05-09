import { ReactNode } from 'react'
import { formatDate } from 'pliny/utils/formatDate'
import { allCoreContent, CoreContent } from 'pliny/utils/contentlayer'
import { allBlogs, type Blog } from 'contentlayer/generated'
import Comments from '@/components/Comments'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import { SectionContainerWithAds } from '@/components/SectionContainer'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import Recommended from '@/app/[locale]/Recommended'
import { LocaleTypes } from '@/app/[locale]/i18n/settings'

interface LayoutProps {
  params: { locale: LocaleTypes }
  content: CoreContent<Blog>
  children: ReactNode
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
}

export default function PostLayout({
  params: { locale },
  content,
  next,
  prev,
  children,
}: LayoutProps) {
  const { path, slug, date, title, tags } = content
  const filteredPosts = allBlogs.filter((post) => post.tags.includes(tags[0]))
  const posts = allCoreContent(filteredPosts)
  return (
    <SectionContainerWithAds>
      <ScrollTopAndComment />
      <article>
        <div>
          <header>
            <div className="space-y-1 border-b border-neutral-200 pb-10 text-center dark:border-neutral-700">
              <dl>
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-neutral-500 dark:text-neutral-400">
                    <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div className="grid-rows-[auto_1fr] divide-y divide-neutral-200 pb-8 dark:divide-neutral-700 xl:divide-y-0">
            <div className="divide-y divide-neutral-200 dark:divide-neutral-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-3646138644530578"
                data-ad-slot="6395288197"
                data-ad-format="auto"
                data-full-width-responsive="true"
              ></ins>
              <div className="prose max-w-none pb-8 pt-10 dark:prose-invert">{children}</div>
            </div>
            {siteMetadata.comments && (
              <div
                className="pb-6 pt-6 text-center text-neutral-700 dark:text-neutral-300"
                id="comment"
              >
                <Comments slug={slug} />
              </div>
            )}
            <footer>
              <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                {prev && prev.path && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/${prev.path}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      aria-label={`Previous post: ${prev.title}`}
                    >
                      &larr; {prev.title}
                    </Link>
                  </div>
                )}
                {next && next.path && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/${next.path}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      aria-label={`Next post: ${next.title}`}
                    >
                      {next.title} &rarr;
                    </Link>
                  </div>
                )}
              </div>
            </footer>
          </div>
        </div>
      </article>
      <Recommended tags={tags} locale={locale} />
    </SectionContainerWithAds>
  )
}
