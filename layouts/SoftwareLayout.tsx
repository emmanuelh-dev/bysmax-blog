'use client'
import SupabaseCommentsWrapper from '@/components/comments/SupabaseCommentsWrapper'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { usePathname } from 'next/navigation'

import { ArrowLeft, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState, useMemo } from 'react'
import { SectionContainerWithAds } from '@/components/SectionContainer'
import AdComponent from '@/data/AdComponent'
import { SLOTS } from '@/data/ad-slots'

// Helper function to extract locale and path
function extractLocaleAndPath(fullPath: string) {
  const segments = fullPath.split('/').filter(Boolean)
  const possibleLocales = ['es', 'en', 'pt', 'fr']

  if (segments.length > 0 && possibleLocales.includes(segments[0])) {
    const locale = segments[0]
    const pathWithoutLocale = '/' + segments.slice(1).join('/')
    return { locale, pathWithoutLocale }
  }

  // Default locale (es) - no locale prefix in URL
  return { locale: 'es', pathWithoutLocale: fullPath }
}

// Helper function to normalize path for comparison
function normalizePath(path: string): string {
  return path === '' ? '/' : path
}

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
  const fullPathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Extract current locale and path without locale
  const { locale, pathWithoutLocale } = useMemo(
    () => extractLocaleAndPath(fullPathname),
    [fullPathname]
  )

  // Helper function to check if a link is active
  const isLinkActive = (linkPath: string) => {
    // Normalize the link path
    const normalizedLinkPath = normalizePath(linkPath)

    // Case 1: linkPath already includes a locale (e.g., /en/software/proteus)
    const linkSegments = normalizedLinkPath.split('/').filter(Boolean)
    if (linkSegments.length > 0 && ['es', 'en', 'pt', 'fr'].includes(linkSegments[0])) {
      return fullPathname === normalizedLinkPath
    }

    // Case 2: linkPath is without locale (e.g., /software/proteus)
    // Compare with the current path without locale
    const normalizedCurrentPath = normalizePath(pathWithoutLocale)
    return normalizedCurrentPath === normalizedLinkPath
  }

  // Helper function to get localized path link
  const getLocalizedPathLink = (pathHref: string) => {
    return getLocalizedLink(pathHref)
  }
  const getLocalizedLink = (linkPath: string) => {
    const normalizedLinkPath = normalizePath(linkPath)

    // If link already has a locale prefix, return as is
    const linkSegments = normalizedLinkPath.split('/').filter(Boolean)
    if (linkSegments.length > 0 && ['es', 'en', 'pt', 'fr'].includes(linkSegments[0])) {
      return normalizedLinkPath
    }

    // For default locale (es), don't add prefix
    if (locale === 'es') {
      return normalizedLinkPath
    }

    // For other locales, add prefix
    return `/${locale}${normalizedLinkPath}`
  }
  return (
    <div>
      <div className="min-h-screen bg-white dark:bg-dark">
        <ScrollTopAndComment />

        {/* Mobile Navigation Button */}
        <div className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/80 lg:hidden">
          <div className="flex h-14 items-center justify-between px-4">
            <a
              href={getLocalizedPathLink(path.href)}
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              <ArrowLeft className="h-4 w-4" />
              {path.title}
            </a>
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
                          const active = isLinkActive(section.link)
                          const localizedLink = getLocalizedLink(section.link)
                          return (
                            <a
                              key={section.title}
                              href={localizedLink}
                              onClick={() => setIsMenuOpen(false)}
                              className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                                active
                                  ? 'bg-neutral-100 font-medium text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100'
                                  : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-neutral-100'
                              }`}
                            >
                              {section.title}
                            </a>
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
                          const active = isLinkActive(section.link)
                          const localizedLink = getLocalizedLink(section.link)
                          return (
                            <a
                              key={section.title}
                              href={localizedLink}
                              className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                                active
                                  ? 'bg-neutral-100 font-medium text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100'
                                  : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-neutral-100'
                              }`}
                            >
                              {section.title}
                            </a>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </nav>
              </div>
            </aside>
            {/* Main Content */}
            <main className="min-w-0 flex-1">
              <div className="mx-auto max-w-4xl py-6 lg:px-8 lg:py-8">
                {/* Back Navigation - Hidden on mobile (shown in mobile header) */}
                <div className="mb-8 hidden lg:block">
                  <Link
                    href={getLocalizedPathLink(path.href)}
                    className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    {path.title}
                  </Link>
                </div>
                {/* Content */}
                <div className="max-w-none ">{children}</div>

                {/* Comments */}
                <div className="mt-16 border-t border-neutral-200 pt-8 dark:border-neutral-800">
                  <SupabaseCommentsWrapper slug={fullPathname} />
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
                    {toc.map((item) => {
                      const tocLink = item.url.startsWith('#')
                        ? `${fullPathname}${item.url}`
                        : item.url
                      return (
                        <Link
                          key={item.value}
                          href={tocLink}
                          className="block rounded-md px-3 py-1.5 text-sm text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-neutral-100"
                        >
                          {item.value}
                        </Link>
                      )
                    })}
                  </div>
                  <div className="hidden xl:block">
                    <AdComponent slot={SLOTS[3]} />
                  </div>
                </nav>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SoftwareLayout
