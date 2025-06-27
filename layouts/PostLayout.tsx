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
import TOCSidebar from '@/components/TOCSidebar'
import AdComponent from '@/data/AdComponent'
import { SLOTS } from '@/data/ad-slots'
import MobileTOCSidebar from '@/components/MobileTOCSidebar'

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
  next?: { path: string; title: string } | null
  prev?: { path: string; title: string } | null
  children: ReactNode
}

export default function PostLayout({ content, authorDetails, next, prev, children }: LayoutProps) {
  const { filePath, path, slug, date, title, tags, toc } = content
  const basePath = path.split('/')[0]

  return (
    <div className="min-h-screen bg-light dark:bg-dark">
      <ScrollTopAndComment />

      <div className="mx-auto xl:container">
        <div className="grid grid-cols-1 pt-20 xl:grid-cols-[1fr_300px] xl:gap-8">
          {/* Main Content Column */}
          <main className="min-w-0">
            <article>
              {/* Minimal Article Header - Solo título y meta info esencial */}
              <header className="mx-auto mb-8 max-w-4xl space-y-4 text-center">
                <h1 className="text-4xl font-semibold leading-tight tracking-tight text-neutral-900 dark:text-white lg:text-5xl">
                  {title}
                </h1>

                {/* Meta Information Compacta */}
                <div className="flex items-center justify-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>14 min</span>
                  </div>
                  <time dateTime={date}>
                    {new Date(date).toLocaleDateString(siteMetadata.locale, {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </time>
                </div>
              </header>
              <AdComponent slot={SLOTS[0]} />

              {/* Article Content - Directo al grano */}
              <div className="px-8">
                <div className="prose prose-neutral mx-auto max-w-none dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-code:text-neutral-900 prose-pre:bg-neutral-100 prose-img:rounded-lg dark:prose-a:text-blue-400 dark:prose-code:text-neutral-100 dark:prose-pre:bg-neutral-900">
                  {children}
                </div>
              </div>
              {/* Comments */}
              <div className="mt-16 border-t border-neutral-200 px-4 pt-16 dark:border-neutral-800">
                <SupabaseCommentsWrapper slug={path} />
              </div>

              {/* Article Footer */}
              <footer className="mt-16 space-y-8 border-t border-neutral-200 pt-16 dark:border-neutral-800">
                {/* Author Info - Movido al final para dar crédito sin distraer */}
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-neutral-900 dark:text-white">
                    Sobre el autor
                  </h3>
                  <div className="flex items-center gap-4">
                    {authorDetails.map((author) => (
                      <div key={author.name} className="flex items-center gap-3">
                        {author.avatar && (
                          <Image
                            src={author.avatar}
                            width={48}
                            height={48}
                            alt={author.name}
                            className="h-12 w-12 rounded-full"
                          />
                        )}
                        <div className="flex flex-col">
                          <span className="text-base font-medium text-neutral-900 dark:text-white">
                            {author.name}
                          </span>
                          {author.occupation && (
                            <span className="text-sm text-neutral-600 dark:text-neutral-400">
                              {author.occupation}
                            </span>
                          )}
                          {author.twitter && (
                            <Link
                              href={author.twitter}
                              className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                            >
                              {author.twitter
                                .replace('https://twitter.com/', '@')
                                .replace('https://x.com/', '@')}
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                {tags && tags.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium text-neutral-900 dark:text-white">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Navigation */}
                {(next || prev) && (
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {prev && prev.path && (
                      <div className="space-y-2">
                        <div className="text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                          Previous Article
                        </div>
                        <Link
                          href={`/${prev.path}`}
                          className="block text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          {prev.title}
                        </Link>
                      </div>
                    )}
                    {next && next.path && (
                      <div className="space-y-2 md:text-right">
                        <div className="text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                          Next Article
                        </div>
                        <Link
                          href={`/${next.path}`}
                          className="block text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          {next.title}
                        </Link>
                      </div>
                    )}
                  </div>
                )}

                {/* Back to Blog */}
                <div className="pt-8">
                  <a
                    href={`/${basePath}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    aria-label="Back to the blog"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back to the blog
                  </a>
                </div>

                {/* Digital Ocean Badge */}
                <div className="flex justify-center pt-8">
                  <a
                    href="https://www.digitalocean.com/?refcode=bcd15eddc0aa&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge"
                    className="transition-opacity hover:opacity-80"
                  >
                    <Image
                      width={200}
                      height={200}
                      src="https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%202.svg"
                      alt="DigitalOcean Referral Badge"
                    />
                  </a>
                </div>
              </footer>
            </article>
          </main>

          <aside className="hidden xl:block">
            <div className="sticky top-0 space-y-6">
              {/* TOC */}
              {toc && toc.length > 0 && (
                <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900/50">
                  <h3 className="mb-3 text-sm font-semibold text-neutral-900 dark:text-white">
                    Contenido
                  </h3>
                  <TOCSidebar toc={toc} />
                </div>
              )}

              {/* Ad Sidebar - Más abajo para no interferir */}
              <div className="sticky top-[60vh]">
                <AdComponent slot={SLOTS[2]} />
              </div>
            </div>
          </aside>

          {/* Mobile TOC Component */}
          <MobileTOCSidebar toc={toc} />
        </div>
      </div>
    </div>
  )
}
