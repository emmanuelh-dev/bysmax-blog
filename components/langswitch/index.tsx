'use client'
import { useState, useRef, useCallback, useMemo } from 'react'
import { usePathname, useParams } from 'next/navigation'
import { useOuterClick } from '../util/useOuterClick'
import { useTagStore } from '@/components/util/useTagStore'
import { LocaleTypes, locales } from '@/app/[locale]/i18n/settings'
import {
  Menu,
  Transition,
  RadioGroup,
  MenuButton,
  MenuItems,
  Radio,
  MenuItem,
} from '@headlessui/react'
import { ChevronDownIcon } from './icon'

const LangSwitch = () => {
  const pathname = usePathname()
  const params = useParams()
  const locale = (params.locale as string) || ''
  const setSelectedTag = useTagStore((state) => state.setSelectedTag)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const menubarRef = useRef<HTMLDivElement>(null)
  useOuterClick(menubarRef, () => setIsMenuOpen(false))

  const handleLocaleChange = useCallback(
    (newLocale: string): string => {
      const segments = pathname!.split('/')
      const localeIndex = segments.findIndex((segment) => locales.includes(segment as LocaleTypes))
      if (localeIndex !== -1) {
        segments[localeIndex] = newLocale
      } else {
        segments.splice(1, 0, newLocale)
      }
      const newPath = segments.join('/').replace(/\/$/, '')
      return newPath
    },
    [pathname]
  )

  const handleLinkClick = useCallback(
    (newLocale: string) => {
      setSelectedTag('')
      const resolvedUrl = handleLocaleChange(newLocale)
      // Navegación tradicional con recarga de página
      window.location.href = resolvedUrl
      setIsMenuOpen(false)
    },
    [handleLocaleChange, setSelectedTag]
  )

  const currentLocale = useMemo(() => locale.charAt(0).toUpperCase() + locale.slice(1), [locale])

  return (
    <div ref={menubarRef} className="relative inline-block text-left">
      <Menu>
        {({ open }) => (
          <>
            <MenuButton
              className="inline-flex rounded-md px-1 py-2 font-bold leading-5 text-neutral-700 dark:text-white"
              aria-haspopup="true"
              aria-expanded={open}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {currentLocale}
              <ChevronDownIcon
                className={`ml-1 mt-1 transform transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`}
              />
            </MenuButton>
            <Transition
              show={open}
              enter="transition-all ease-out duration-300"
              enterFrom="opacity-0 scale-95 translate-y-[-10px]"
              enterTo="opacity-100 scale-100 translate-y-0"
              leave="transition-all ease-in duration-200"
              leaveFrom="opacity-100 scale-100 translate-y-0"
              leaveTo="opacity-0 scale-95 translate-y-[10px]"
            >
              <MenuItems
                className="absolute right-0 z-50 mt-2 w-12 origin-top-right divide-y divide-neutral-100 rounded-md bg-white ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-neutral-800"
                aria-orientation="vertical"
                onBlur={() => setIsMenuOpen(false)}
              >
                <RadioGroup>
                  <div
                    className="py-1"
                    role="none"
                    style={{ listStyle: 'none', margin: 0, padding: 0 }}
                  >
                    {locales.map((newLocale: string) => (
                      <Radio key={newLocale} value={newLocale}>
                        <MenuItem>
                          {({ focus }) => (
                            <button
                              onClick={() => handleLinkClick(newLocale)}
                              className={`${
                                focus
                                  ? 'bg-neutral-100 dark:bg-neutral-600'
                                  : 'hover:bg-neutral-100 dark:hover:bg-neutral-600'
                              } px-4 py-2 text-sm text-neutral-700 hover:text-primary-500 dark:text-white dark:hover:text-primary-500`}
                              role="menuitem"
                              style={{ display: 'block', width: '100%', textDecoration: 'none' }}
                            >
                              {newLocale.charAt(0).toUpperCase() + newLocale.slice(1)}
                            </button>
                          )}
                        </MenuItem>
                      </Radio>
                    ))}
                  </div>
                </RadioGroup>
              </MenuItems>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  )
}

export default LangSwitch
