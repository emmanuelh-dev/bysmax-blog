'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from './Link'
import dynamic from 'next/dynamic'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import { LocaleTypes } from '@/app/[locale]/i18n/settings'

import ThemeSwitch from './ThemeSwitch'
import LangSwitch from './langswitch'

const Navigation = dynamic(() => import('./NavigationMenu'), { ssr: false })
const MobileNav = dynamic(() => import('./MobileNav'), { ssr: false })
const SearchButton = dynamic(() => import('./search/SearchButton'), { ssr: false })

export default function Header() {
  const locale = useParams()?.locale as LocaleTypes
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()

    let timeoutId: NodeJS.Timeout
    const debouncedResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(handleResize, 100)
    }

    window.addEventListener('resize', debouncedResize)
    return () => {
      window.removeEventListener('resize', debouncedResize)
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <header className="container mx-auto flex items-center justify-between px-6 py-4 max-md:mt-24">
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
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {!isMobile && (
          <>
            <Navigation />
            {headerNavLinks
              .filter((link) => link.href !== '/')
              .map((link) => (
                <Link
                  key={link.title}
                  href={`/${locale}${link.href}`}
                  className="text-sm font-medium text-neutral-400 transition-colors duration-200 hover:text-black dark:hover:text-white"
                >
                  {link.title}
                </Link>
              ))}
          </>
        )}
        <SearchButton />
        <ThemeSwitch />
        <LangSwitch />
        {isMobile && <MobileNav />}
      </div>
    </header>
  )
}
