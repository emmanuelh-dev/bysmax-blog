'use client'

import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import ThemeSwitch from './ThemeSwitch'
import LangSwitch from './langswitch'
import { useParams } from 'next/navigation'
import { LocaleTypes } from '@/app/[locale]/i18n/settings'
import dynamic from 'next/dynamic'

const Navigation = dynamic(() => import('./NavigationMenu'), {
  ssr: false,
})
const MobileNav = dynamic(() => import('./MobileNav'), {
  ssr: false,
})
const SearchButton = dynamic(() => import('./search/SearchButton'))

export default function Component() {
  const locale = useParams()?.locale as LocaleTypes
  const [isClient, setIsClient] = useState(false)
  const isDesktop = useMediaQuery({ minWidth: 768 }, undefined, (matches) => {
    if (isClient) setIsClient(matches)
  })

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <header className="flex items-center justify-between py-10">
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
        {isClient ? (
          <>
            {isDesktop ? (
              <>
                <Navigation />
                {headerNavLinks
                  .filter((link) => link.href !== '/')
                  .map((link) => (
                    <Link
                      key={link.title}
                      href={`/${locale}${link.href}`}
                      className="font-medium text-gray-900 dark:text-gray-100"
                    >
                      {link.title}
                    </Link>
                  ))}
              </>
            ) : null}
            {!isDesktop ? <MobileNav /> : null}
          </>
        ) : null}
        <SearchButton />
        <ThemeSwitch />
        <LangSwitch />
      </div>
    </header>
  )
}
