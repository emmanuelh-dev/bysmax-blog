/**
 * @deprecated Use HeaderServer instead for better performance
 * This component is kept for backwards compatibility
 */
'use client'

import { useEffect, useState, Suspense, lazy } from 'react'
import { useParams } from 'next/navigation'
import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import { LocaleTypes } from '@/app/[locale]/i18n/settings'
import { useTranslation } from '@/app/[locale]/i18n/client'
import { Button } from './ui/button'
import headerNavLinks from '@/data/headerNavLinks'

// Lazy load componentes no esenciales
const ThemeSwitch = lazy(() => import('./ThemeSwitch'))
const LangSwitch = lazy(() => import('./langswitch'))
const SearchButton = lazy(() => import('./search/SearchButton'))
const NotificationBell = lazy(() => import('./NotificationBell'))
const MobileNav = lazy(() => import('./MobileNav'))

// Loading fallback simple
const LoadingButton = () => <Button variant="ghost" size="icon" className="h-9 w-9" />

export default function Header() {
  const locale = useParams()?.locale as LocaleTypes
  const { t } = useTranslation(locale, 'common')
  const [isMounted, setIsMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    setIsMounted(true)
    const handleResize = () => setIsMobile(window.innerWidth < 768)

    let resizeTimer: NodeJS.Timeout
    const debouncedResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(handleResize, 100)
    }

    handleResize()
    window.addEventListener('resize', debouncedResize)
    return () => {
      window.removeEventListener('resize', debouncedResize)
      clearTimeout(resizeTimer)
    }
  }, [])

  if (!isMounted) return <header className="h-16" />

  return (
    <header className="mx-auto flex w-full items-center justify-between px-4 py-4 xl:container">
      {/* Logo - Estático */}
      <div>
        <Link href={`/${locale}`} aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="h-6 text-2xl font-semibold">{siteMetadata.headerTitle}</div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>

      <nav className="flex items-center space-x-4 leading-5 sm:space-x-6" role="navigation">
        {/* Enlaces principales - Solo desktop */}
        {!isMobile && (
          <div className="flex items-center space-x-4 sm:space-x-6">
            {headerNavLinks
              .filter((link) => link.href !== '/')
              .map((link) => (
                <Link
                  key={link.title}
                  href={`/${locale}${link.href}`}
                  className="text-sm font-medium text-neutral-400 transition-colors duration-200 hover:text-black dark:hover:text-white"
                >
                  {t(link.title)}
                </Link>
              ))}
          </div>
        )}

        {/* Componentes interactivos */}
        <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
          <Suspense fallback={<LoadingButton />}>
            <SearchButton />
          </Suspense>
          <Suspense fallback={<LoadingButton />}>
            <ThemeSwitch />
          </Suspense>
          <Suspense fallback={<LoadingButton />}>
            <LangSwitch />
          </Suspense>
          <Suspense fallback={<LoadingButton />}>
            <NotificationBell />
          </Suspense>
          {isMobile && (
            <Suspense fallback={<LoadingButton />}>
              <MobileNav />
            </Suspense>
          )}
        </div>
      </nav>
    </header>
  )
}
