'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { LOGICGATES } from '@/data/logic-gates'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

interface Props {
  children: React.ReactNode
}

export default function Sidebar({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const locale = pathname.split('/')[1]
  const baseLogicGatesPath = `/${locale}`

  const toggleSidebar = () => setIsOpen(!isOpen)

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <button
        onClick={toggleSidebar}
        className="dark:text-wh text- fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-lg border border-[#a1a1a1] bg-white shadow-sm transition-all duration-200 hover:border-[#0070f3] dark:border-[#333333] dark:bg-[#0a0a0a] md:hidden"
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
      >
        {isOpen ? (
          <X size={20} className="text-black dark:text-white" />
        ) : (
          <Menu size={20} className="text-black dark:text-white" />
        )}
      </button>

      <div className="flex">
        <aside
          className={`fixed inset-y-0 left-0 z-40 w-[280px] transform border-r border-[#e5e5e5] bg-white transition-transform duration-200 ease-out dark:border-[#333333] dark:bg-[#0a0a0a] md:sticky md:top-0 md:h-screen md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <nav
            aria-label="Navegación de la barra lateral"
            className="flex h-full flex-col overflow-hidden"
          >
            <div className="flex h-16 items-center justify-between border-b border-[#e5e5e5] px-6 dark:border-[#333333] md:justify-start">
              <h2 className="text-lg font-semibold tracking-tight text-[#0a0a0a] dark:text-white">
                Compuertas Lógicas
              </h2>
              <button
                onClick={toggleSidebar}
                className="flex h-8 w-8 items-center justify-center rounded-md transition-colors hover:bg-[#f9f9f9] dark:hover:bg-[#1a1a1a] md:hidden"
                aria-label="Cerrar menú"
              >
                <X size={16} className="text-[#737373]" />
              </button>
            </div>

            {/* Navigation links */}
            <div className="flex-1 overflow-y-auto px-3 py-4">
              <div className="space-y-1">
                <Link
                  href={baseLogicGatesPath}
                  onClick={() => setIsOpen(false)}
                  className={`flex h-9 items-center rounded-md px-3 text-sm font-medium transition-colors hover:bg-[#f9f9f9] dark:hover:bg-[#1a1a1a] ${
                    pathname === baseLogicGatesPath
                      ? 'bg-[#f9f9f9] text-[#0070f3] dark:bg-[#1a1a1a] dark:text-[#0070f3]'
                      : 'text-[#737373] hover:text-[#0a0a0a] dark:hover:text-white'
                  }`}
                >
                  Todas las compuertas
                </Link>

                {LOGICGATES.map((gate) => {
                  const gatePath = `${baseLogicGatesPath}/${gate.url}`
                  return (
                    <Link
                      key={gate.heading}
                      href={gatePath}
                      onClick={() => setIsOpen(false)}
                      className={`flex h-9 items-center rounded-md px-3 text-sm font-medium transition-colors hover:bg-[#f9f9f9] dark:hover:bg-[#1a1a1a] ${
                        pathname === gatePath
                          ? 'bg-[#f9f9f9] text-[#0070f3] dark:bg-[#1a1a1a] dark:text-[#0070f3]'
                          : 'text-[#737373] hover:text-[#0a0a0a] dark:hover:text-white'
                      }`}
                    >
                      Compuerta {gate.url.toUpperCase()}
                    </Link>
                  )
                })}
              </div>
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
            aria-label="Close sidebar"
          />
        )}

        {/* Main content */}
        <main className="min-h-screen flex-1 overflow-x-hidden">
          <div className="mx-auto max-w-4xl px-6 py-8 md:px-8">{children}</div>
        </main>
      </div>
    </div>
  )
}
