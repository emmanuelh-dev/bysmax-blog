'use client'

import { useState } from 'react'
import Link from '@/components/Link'
import { FileText, X } from 'lucide-react'
import { useActiveHeading } from '@/components/util/useActiveHeading'
import AdComponent from '@/data/AdComponent'
import { SLOTS } from '@/data/ad-slots'

interface MobileTOCSidebarProps {
  toc: Array<{
    url: string
    value: string
    depth: number
  }>
}

export default function MobileTOCSidebar({ toc }: MobileTOCSidebarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const activeId = useActiveHeading()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  if (!toc || toc.length === 0) {
    return null
  }

  return (
    <>
      {/* Mobile TOC Sticky Button */}
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
  )
}
