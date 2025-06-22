'use client'

import { ReactNode, useState } from 'react'
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
import { ArrowLeft, Clock, FileText, Menu, X } from 'lucide-react'
import SupabaseCommentsWrapper from '@/components/comments/SupabaseCommentsWrapper'
import TOCSidebar from '@/components/TOCSidebar'
import AdComponent from '@/data/AdComponent'
import { SLOTS } from '@/data/ad-slots'
import { useActiveHeading } from '@/components/util/useActiveHeading'

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
  const { filePath, path, slug, date, title, tags, toc } = content
  const basePath = path.split('/')[0]
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const activeId = useActiveHeading()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="min-h-screen bg-light dark:bg-dark">
      <ScrollTopAndComment />

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 px-4 pt-20 xl:grid-cols-[1fr_300px] xl:gap-8">
          {/* Main Content Column */}
          <main className="min-w-0">
            <article>
              {/* Article Header */}
              <header className="mb-16 space-y-8">
                <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white lg:text-5xl">
                  {title}
                </h1>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  {authorDetails.map((author) => (
                    <div key={author.name} className="flex items-center gap-3">
                      {author.avatar && (
                        <Image
                          src={author.avatar}
                          width={40}
                          height={40}
                          alt={author.name}
                          className="h-10 w-10 rounded-full"
                        />
                      )}
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-neutral-900 dark:text-white">
                          {author.name}
                        </span>
                        {author.twitter && (
                          <Link
                            href={author.twitter}
                            className="text-sm text-neutral-600 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"
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

                {/* Meta Information */}
                <div className="flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-400">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>14 min read</span>
                  </div>
                  <time dateTime={date}>
                    {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                  </time>
                </div>

                {/* Divider */}
                <div className="h-px bg-neutral-200 dark:bg-neutral-800" />
              </header>

              {/* Ad Space - Después del header, antes del contenido */}
              <div className="mb-16">
                <AdComponent slot={SLOTS[0]} />
              </div>

              {/* Article Content */}
              <div className="prose prose-neutral max-w-none dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-code:text-neutral-900 prose-pre:bg-neutral-100 dark:prose-a:text-blue-400 dark:prose-code:text-neutral-100 dark:prose-pre:bg-neutral-900">
                {children}
              </div>

              {/* Comments */}
              <div className="mt-16 border-t border-neutral-200 pt-16 dark:border-neutral-800">
                <SupabaseCommentsWrapper slug={path} />
              </div>

              {/* Article Footer */}
              <footer className="mt-16 space-y-8 border-t border-neutral-200 pt-16 dark:border-neutral-800">
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
                  <Link
                    href={`/${basePath}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    aria-label="Back to the blog"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back to the blog
                  </Link>
                </div>

                {/* Bottom Ad - Solo uno al final */}
                <AdComponent slot={SLOTS[1]} />

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

          {/* Table of Contents Sidebar */}
          <aside className="hidden xl:block">
            <div className="sticky top-8">
              {/* TOC - Con altura limitada para mostrar ad */}
              {toc && toc.length > 0 && (
                <div className="mb-8">
                  <TOCSidebar toc={toc} />
                </div>
              )}

              {/* Ad Sidebar - Visible después del TOC */}
              <div className="sticky top-[calc(100vh-320px)]">
                <AdComponent slot={SLOTS[2]} />
              </div>
            </div>
          </aside>

          {/* Mobile TOC Sticky Button - Mejorado */}
          {toc && toc.length > 0 && (
            <div className="fixed bottom-6 right-6 z-30 xl:hidden">
              <button
                onClick={toggleMobileMenu}
                className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-neutral-900 text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl dark:bg-white dark:text-neutral-900"
                aria-label="Abrir tabla de contenido"
              >
                {/* Icono principal */}
                <div
                  className={`transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-45 scale-0' : 'rotate-0 scale-100'}`}
                >
                  <FileText className="h-6 w-6" />
                </div>

                {/* Icono cuando está abierto */}
                <div
                  className={`absolute transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-0 scale-100' : 'rotate-45 scale-0'}`}
                >
                  <X className="h-6 w-6" />
                </div>

                {/* Tooltip */}
                <div className="absolute bottom-full right-0 mb-2 hidden w-max rounded-lg bg-neutral-800 px-3 py-2 text-xs text-white shadow-lg group-hover:block dark:bg-neutral-200 dark:text-neutral-800">
                  {isMobileMenuOpen ? 'Cerrar' : 'Tabla de contenido'}
                  <div className="absolute left-3/4 top-full h-0 w-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-neutral-800 dark:border-t-neutral-200"></div>
                </div>
              </button>
            </div>
          )}

          {/* Mobile TOC Sidebar */}
          {toc && toc.length > 0 && (
            <>
              {/* Overlay */}
              {isMobileMenuOpen && (
                <div
                  className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm xl:hidden"
                  onClick={toggleMobileMenu}
                />
              )}

              {/* Mobile Sidebar */}
              <aside
                className={`fixed right-0 top-0 z-50 h-full w-80 transform border-l border-neutral-200 bg-white transition-transform duration-300 ease-out dark:border-neutral-800 dark:bg-neutral-950 xl:hidden ${
                  isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
              >
                <div className="flex h-full flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-neutral-200 p-6 dark:border-neutral-800">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
                      <h2 className="text-sm font-semibold text-neutral-900 dark:text-white">
                        Tabla de Contenido
                      </h2>
                    </div>
                    <button
                      onClick={toggleMobileMenu}
                      className="rounded-md p-2 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-300"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>

                  {/* TOC Content */}
                  <nav className="flex-1 overflow-y-auto p-6">
                    <div className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-neutral-300 dark:scrollbar-thumb-neutral-600 max-h-[calc(100vh-200px)] space-y-1 overflow-y-auto">
                      {toc.map((item, index) => {
                        const isActive = activeId === item.url.replace('#', '')
                        const indentLevel = Math.max(0, item.depth - 1) * 16
                        return (
                          <Link
                            key={index}
                            href={item.url}
                            onClick={toggleMobileMenu}
                            className={`block rounded-md px-2 py-1.5 text-sm transition-colors ${
                              isActive
                                ? 'bg-blue-50 font-medium text-blue-600 dark:bg-blue-950 dark:text-blue-400'
                                : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100'
                            }`}
                            style={{ paddingLeft: `${8 + indentLevel}px` }}
                          >
                            <span className="line-clamp-2">{item.value}</span>
                          </Link>
                        )
                      })}
                    </div>
                  </nav>

                  {/* Ad Section for Mobile */}
                  <div className="border-t border-neutral-200 p-6 dark:border-neutral-800">
                    <AdComponent slot={SLOTS[3]} />
                  </div>
                </div>
              </aside>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
