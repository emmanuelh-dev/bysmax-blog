'use client'
import SupabaseCommentsWrapper from '@/components/comments/SupabaseCommentsWrapper'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { usePathname } from 'next/navigation'

import { ArrowLeft, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export function SoftwareLayout({
  children,
  sidebar,
  title,
  description,
  authorDetails,
  path,
  toc,
  slug,
}) {
  const router = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <ScrollTopAndComment />

      {/* Mobile Navigation Button */}
      <div className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/80 lg:hidden">
        <div className="flex h-14 items-center justify-between px-4">
          <Link
            href={path.href}
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            <ArrowLeft className="h-4 w-4" />
            {path.title}
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-md p-2 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMenuOpen(false)} />
          <div className="absolute left-0 top-14 h-[calc(100vh-3.5rem)] w-80 border-r border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
            <div className="h-full overflow-y-auto">
              <nav className="space-y-1 p-6">
                {sidebar.map((item, index) => (
                  <div key={index} className="space-y-3">
                    <h3 className="text-xs font-medium uppercase tracking-wider text-black dark:text-white">
                      {item.title}
                    </h3>
                    <div className="space-y-0.5">
                      {item.sections.map((section) => {
                        const active = router === section.link
                        return (
                          <Link
                            key={section.title}
                            href={section.link}
                            onClick={() => setIsMenuOpen(false)}
                            className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                              active
                                ? 'bg-neutral-100 font-medium text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100'
                                : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-neutral-100'
                            }`}
                          >
                            {section.title}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto">
        <div className="flex min-h-screen">
          {/* Left Sidebar - Navigation */}
          <aside className="hidden w-64 shrink-0 border-r border-neutral-200 dark:border-neutral-800 lg:block">
            <div className="sticky top-0 h-screen overflow-y-auto">
              <nav className="space-y-1 p-6 pt-8">
                {sidebar.map((item, index) => (
                  <div key={index} className="space-y-3">
                    <h3 className="text-xs font-medium uppercase tracking-wider text-black dark:text-white">
                      {item.title}
                    </h3>
                    <div className="space-y-0.5">
                      {item.sections.map((section) => {
                        const active = router === section.link
                        return (
                          <Link
                            key={section.title}
                            href={section.link}
                            className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                              active
                                ? 'bg-neutral-100 font-medium text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100'
                                : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-neutral-100'
                            }`}
                          >
                            {section.title}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </nav>
            </div>
          </aside>{' '}
          {/* Main Content */}
          <main className="min-w-0 flex-1">
            <div className="mx-auto max-w-4xl px-4 py-6 lg:px-8 lg:py-8">
              {/* Back Navigation - Hidden on mobile (shown in mobile header) */}
              <div className="mb-8 hidden lg:block">
                <Link
                  href={path.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                >
                  <ArrowLeft className="h-4 w-4" />
                  {path.title}
                </Link>
              </div>

              {/* Ad Space */}
              <div className="mb-8">
                <ins
                  className="adsbygoogle block h-[120px] w-full rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900"
                  style={{ display: 'block' }}
                  data-ad-client="ca-pub-3646138644530578"
                  data-ad-slot="6395288197"
                  data-ad-format="auto"
                  data-full-width-responsive="true"
                />
              </div>

              {/* Content */}
              <div className="prose prose-neutral max-w-none dark:prose-invert prose-headings:scroll-mt-20">
                {children}
              </div>

              {/* Comments */}
              <div className="mt-16 border-t border-neutral-200 pt-8 dark:border-neutral-800">
                <SupabaseCommentsWrapper slug={router} />
              </div>
            </div>
          </main>
          {/* Right Sidebar - Table of Contents */}
          <aside className="hidden w-64 shrink-0 border-l border-neutral-200 dark:border-neutral-800 xl:block">
            <div className="sticky top-0 h-screen overflow-y-auto">
              <nav className="space-y-3 p-6 pt-8">
                <h3 className="text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  Tabla de contenido
                </h3>
                <div className="space-y-1">
                  {toc.map((item) => (
                    <Link
                      key={item.value}
                      href={item.url}
                      className="block rounded-md px-3 py-1.5 text-sm text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-neutral-100"
                    >
                      {item.value}
                    </Link>
                  ))}
                </div>

                {/* Sidebar Ad */}
                <div className="mt-8 border-t border-neutral-200 pt-6 dark:border-neutral-800">
                  <ins
                    className="adsbygoogle block h-[400px] w-full rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900"
                    style={{ display: 'block' }}
                    data-ad-client="ca-pub-3646138644530578"
                    data-ad-slot="9734184827"
                    data-ad-format="auto"
                    data-full-width-responsive="true"
                  />
                </div>
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default SoftwareLayout
