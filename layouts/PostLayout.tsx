import { ReactNode } from 'react'
import { allCoreContent, CoreContent, sortPosts } from 'pliny/utils/contentlayer'
import type { Blog, Authors } from 'contentlayer/generated'
import Comments from '@/components/Comments'
import PageTitle from '@/components/PageTitle'
import { SectionContainerWithAds } from '@/components/SectionContainer'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const editUrl = (path) => `${siteMetadata.siteRepo}/edit/main/data/${path}`
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

const Recommended = dynamic(() => import('./components/Recomended'), {
  loading: () => <p>Cargando...</p>,
  ssr: false,
})
const Sidebar = dynamic(() => import('./components/SideBar'), {
  loading: () => <Lazy />,
})
export default function PostLayout({ content, authorDetails, next, prev, children }: LayoutProps) {
  const { filePath, path, slug, date, title, tags } = content

  return (
    <SectionContainerWithAds>
      <ScrollTopAndComment />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0">
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <header className="pt-6 xl:pb-6">
                <div className="space-y-1">
                  <dl className="space-y-10">
                    <div>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>
                          {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                        </time>
                      </dd>
                    </div>
                  </dl>
                  <div>
                    <PageTitle>{title}</PageTitle>
                  </div>
                </div>
              </header>
              <div>
                <ins
                  className="adsbygoogle"
                  style={{ display: 'block' }}
                  data-ad-client="ca-pub-3646138644530578"
                  data-ad-slot="6395288197"
                  data-ad-format="auto"
                  data-full-width-responsive="true"
                ></ins>
              </div>
              <div className="prose max-w-none pb-8 pt-10 dark:prose-invert">{children}</div>
              <div className="pb-6 pt-6 text-sm text-gray-700 dark:text-gray-300">
                <Link href={discussUrl(path)} rel="nofollow">
                  Revisar en X
                </Link>
                {` • `}
                <Link href={editUrl(filePath)}>Editar en Github</Link>
              </div>
              {siteMetadata.comments && (
                <div
                  className="pb-6 pt-6 text-center text-gray-700 dark:text-gray-300"
                  id="comment"
                >
                  <Comments slug={slug} />
                </div>
              )}
            </div>
            <Sidebar authorDetails={authorDetails} next={next} prev={prev} content={content} />
          </div>
        </div>
      </article>
      <Recommended tags={tags} />
    </SectionContainerWithAds>
  )
}
const Lazy = () => (
  <div className="space-y-6">
    <div className="aspect-square w-full rounded-md bg-neutral-200 dark:bg-neutral-900"></div>
    <div className="aspect-video w-full rounded-md bg-neutral-200 dark:bg-neutral-900"></div>
    <div className="aspect-square w-full rounded-md bg-neutral-200 dark:bg-neutral-900"></div>
  </div>
)
