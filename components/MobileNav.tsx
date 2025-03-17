/* eslint-disable */
'use client'

import { useState } from 'react'
import Link from './Link'
import headerNavLinks, { nav } from '@/data/headerNavLinks'
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useParams } from 'next/navigation'
import { LocaleTypes } from '@/app/[locale]/i18n/settings'
import { useTranslation } from '@/app/[locale]/i18n/client'

const MobileNav = () => {
  const locale = useParams()?.locale as LocaleTypes
  const { t } = useTranslation(locale, 'common')
  const [navShow, setNavShow] = useState(false)
  const [expandedSections, setExpandedSections] = useState({})

  const onToggleNav = () => {
    setNavShow((status) => {
      document.body.style.overflow = !status ? 'hidden' : 'auto'
      return !status
    })
  }

  const toggleSection = (sectionTitle) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionTitle]: !prev[sectionTitle],
    }))
  }

  return (
    <>
      <button
        aria-label="Toggle Menu"
        onClick={onToggleNav}
        className="focus:ring-primary inline-flex items-center justify-center rounded-md p-2.5 text-neutral-700 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset dark:text-neutral-100 dark:hover:bg-neutral-800 sm:hidden"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Overlay */}
      <div
        className={cn(
          'fixed -inset-10 z-40 bg-neutral-600/20 backdrop-blur-sm dark:bg-black/40',
          navShow ? 'block' : 'hidden'
        )}
        onClick={onToggleNav}
      />

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed right-0 top-0 z-50 h-full w-full max-w-xs overflow-y-auto bg-white pb-12 shadow-xl dark:bg-black',
          'transform transition-transform duration-300 ease-in-out',
          navShow ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b px-4 py-4 dark:border-neutral-700  max-md:mt-24">
          <span className="text-lg font-semibold">Menú</span>
          <button
            className="focus:ring-primary inline-flex items-center justify-center rounded-md p-2.5 text-neutral-700 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset dark:text-neutral-100 dark:hover:bg-neutral-800"
            onClick={onToggleNav}
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation content */}
        <nav className="px-4 py-6">
          <div className="space-y-6">
            {/* Nav Sections */}
            <div className="space-y-4">
              {nav.map((section) => (
                <div key={section.title} className="border-b dark:border-neutral-700">
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="flex w-full items-center justify-between py-3 text-sm font-bold uppercase tracking-wide text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                  >
                    <span>{t(section.title)}</span>
                    {expandedSections[section.title] ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                  <div
                    className={cn(
                      'overflow-scroll transition-all duration-200 ease-in-out',
                      expandedSections[section.title] ? 'max-h-[600px]' : 'max-h-0'
                    )}
                  >
                    <div className="space-y-3 pb-4 pl-3">
                      {section.links.map((link) => (
                        <Link
                          key={link.title}
                          href={link.href}
                          onClick={onToggleNav}
                          className="hover:text-primary dark:hover:text-primary flex items-center py-2 text-base text-neutral-900 dark:text-neutral-100"
                        >
                          {link.icon && <link.icon className="mr-3 h-5 w-5" />}
                          <div>
                            <div>{t(link.title)}</div>
                            {link.description && (
                              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                                {link.description}
                              </p>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Header Links */}
            <div className="space-y-3">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  onClick={onToggleNav}
                  className="hover:text-primary dark:hover:text-primary flex items-center py-2 text-base font-medium text-neutral-900 dark:text-neutral-100"
                >
                  {link.icon && <link.icon className="mr-3 h-5 w-5" />}
                  {t(link.title)}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default MobileNav
