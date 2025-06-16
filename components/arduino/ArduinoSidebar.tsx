'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { ARDUINO_BOARDS } from '@/data/arduinos'
import { getArduinoUITranslation } from '@/data/arduino-ui'
import { Menu, X } from 'lucide-react'
import { SLOTS } from '@/data/ad-slots'
import AdComponent from '@/data/AdComponent'
interface Props {
  children: React.ReactNode
}

export default function ArduinoSidebar({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Obtener el locale de manera más robusta
  const pathSegments = pathname.split('/').filter(Boolean)
  const locale =
    pathSegments[0] && ['es', 'en', 'pt'].includes(pathSegments[0]) ? pathSegments[0] : 'es'

  const ui = getArduinoUITranslation(locale as 'es' | 'en' | 'pt')
  const baseArduinoPath = `/${locale}/arduino`

  const toggleSidebar = () => setIsOpen(!isOpen)

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <div className="lg:container">
        <button
          onClick={toggleSidebar}
          className="fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-lg border border-[#e5e5e5] bg-white shadow-sm transition-all duration-200 hover:border-[#0070f3] dark:border-[#333333] dark:bg-[#0a0a0a] md:hidden"
          aria-label={isOpen ? ui.labels.closeMenu : ui.labels.openMenu}
        >
          {isOpen ? (
            <X size={20} className="text-[#0a0a0a] dark:text-white" />
          ) : (
            <Menu size={20} className="text-[#0a0a0a] dark:text-white" />
          )}
        </button>

        <div className="flex">
          <aside
            className={`fixed inset-y-0 left-0 z-40 w-[280px] transform border-r border-[#e5e5e5] bg-white transition-transform duration-200 ease-out dark:border-[#333333] dark:bg-[#0a0a0a] md:sticky md:top-0 md:h-screen md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
          >
            <nav
              aria-label="Navegación de Arduino"
              className="flex h-full flex-col overflow-hidden"
            >
              <div className="flex h-16 items-center justify-between border-b border-[#e5e5e5] dark:border-[#333333] max-sm:px-6 md:justify-start">
                <h2 className="text-lg font-semibold tracking-tight text-[#0a0a0a] dark:text-white">
                  {ui.pageTitle.split(' - ')[0]}
                </h2>
                <button
                  onClick={toggleSidebar}
                  className="flex h-8 w-8 items-center justify-center rounded-md transition-colors hover:bg-[#f9f9f9] dark:hover:bg-[#1a1a1a] md:hidden"
                  aria-label={ui.labels.closeMenu}
                >
                  <X size={16} className="text-[#737373]" />
                </button>
              </div>

              {/* Navigation links */}
              <div className="flex-1 overflow-y-auto px-3 py-4">
                <div className="space-y-1">
                  <a
                    href={baseArduinoPath}
                    onClick={() => setIsOpen(false)}
                    className={`flex h-9 items-center rounded-md px-3 text-sm font-medium transition-colors hover:bg-[#f9f9f9] dark:hover:bg-[#1a1a1a] ${
                      pathname === baseArduinoPath
                        ? 'bg-[#f9f9f9] text-[#0070f3] dark:bg-[#1a1a1a] dark:text-[#0070f3]'
                        : 'text-[#737373] hover:text-[#0a0a0a] dark:hover:text-white'
                    }`}
                  >
                    {ui.labels.allBoards}
                  </a>

                  {ARDUINO_BOARDS.map((board) => {
                    const boardPath = `${baseArduinoPath}/${board.id}`

                    return (
                      <a
                        key={board.id}
                        href={boardPath}
                        onClick={() => setIsOpen(false)}
                        className={`flex h-9 items-center rounded-md px-3 text-sm font-medium transition-colors hover:bg-[#f9f9f9] dark:hover:bg-[#1a1a1a] ${
                          pathname === boardPath
                            ? 'bg-[#f9f9f9] text-[#0070f3] dark:bg-[#1a1a1a] dark:text-[#0070f3]'
                            : 'text-[#737373] hover:text-[#0a0a0a] dark:hover:text-white'
                        }`}
                      >
                        {board.name}
                      </a>
                    )
                  })}
                </div>

                {/* Language switcher */}
                <div className="mt-6 border-t border-[#e5e5e5] pt-4 dark:border-[#333333]">
                  <div className="mb-2">
                    <span className="text-xs font-medium uppercase tracking-wide text-[#737373]">
                      {locale === 'en' ? 'Language' : locale === 'pt' ? 'Idioma' : 'Idioma'}
                    </span>
                  </div>
                  <div className="flex gap-1">
                    <a
                      href={`/es${pathname.replace(`/${locale}`, '')}`}
                      className={`flex h-8 w-8 items-center justify-center rounded-md text-xs font-medium transition-colors hover:bg-[#f9f9f9] dark:hover:bg-[#1a1a1a] ${
                        locale === 'es'
                          ? 'bg-[#f9f9f9] text-[#0070f3] dark:bg-[#1a1a1a] dark:text-[#0070f3]'
                          : 'text-[#737373] hover:text-[#0a0a0a] dark:hover:text-white'
                      }`}
                      title="Español"
                      onClick={() => setIsOpen(false)}
                    >
                      🇪🇸
                    </a>
                    <a
                      href={`/en${pathname.replace(`/${locale}`, '')}`}
                      className={`flex h-8 w-8 items-center justify-center rounded-md text-xs font-medium transition-colors hover:bg-[#f9f9f9] dark:hover:bg-[#1a1a1a] ${
                        locale === 'en'
                          ? 'bg-[#f9f9f9] text-[#0070f3] dark:bg-[#1a1a1a] dark:text-[#0070f3]'
                          : 'text-[#737373] hover:text-[#0a0a0a] dark:hover:text-white'
                      }`}
                      title="English"
                      onClick={() => setIsOpen(false)}
                    >
                      🇺🇸
                    </a>
                    <a
                      href={`/pt${pathname.replace(`/${locale}`, '')}`}
                      className={`flex h-8 w-8 items-center justify-center rounded-md text-xs font-medium transition-colors hover:bg-[#f9f9f9] dark:hover:bg-[#1a1a1a] ${
                        locale === 'pt'
                          ? 'bg-[#f9f9f9] text-[#0070f3] dark:bg-[#1a1a1a] dark:text-[#0070f3]'
                          : 'text-[#737373] hover:text-[#0a0a0a] dark:hover:text-white'
                      }`}
                      title="Português"
                      onClick={() => setIsOpen(false)}
                    >
                      🇧🇷
                    </a>
                  </div>
                </div>
                <AdComponent slot={SLOTS[3]} />
              </div>
            </nav>
          </aside>

          {/* Overlay for mobile */}
          {isOpen && (
            <div
              className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={toggleSidebar}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  toggleSidebar()
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={ui.labels.closeSidebar}
            />
          )}

          {/* Main content */}
          <main className="min-h-screen flex-1 overflow-x-hidden">
            <div className="mx-auto max-w-6xl px-6 py-8 md:px-8">{children}</div>
          </main>
        </div>
      </div>
    </div>
  )
}
