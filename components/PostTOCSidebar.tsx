'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FileText, X } from 'lucide-react'
import AdComponent from '@/data/AdComponent'
import { SLOTS } from '@/data/ad-slots'

interface TocItem {
  url: string
  value: string
  depth: number
}

interface PostTOCSidebarProps {
  toc: TocItem[]
}

export default function PostTOCSidebar({ toc }: PostTOCSidebarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeId, setActiveId] = useState<string>('')

  // Función para extraer heading IDs del contenido y manejar scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
      const scrollTop = window.scrollY

      let current = ''
      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect()
        if (rect.top <= 100) {
          current = heading.id
        }
      })

      setActiveId(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Si no hay TOC, no renderizar nada
  if (!toc || toc.length === 0) {
    return null
  }

  const toggleSidebar = () => setIsOpen(!isOpen)

  return (
    <>
      {/* Desktop Sidebar - Solo visible en pantallas grandes */}
      <aside className="hidden xl:fixed xl:right-0 xl:top-0 xl:block xl:h-screen xl:w-80 xl:border-l xl:border-neutral-200 xl:bg-white xl:dark:border-neutral-800 xl:dark:bg-dark">
        <div className="sticky top-0 h-screen overflow-y-auto">
          <nav className="space-y-6 p-6 pt-32">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
              <h2 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                Tabla de contenido
              </h2>
            </div>

            <div className="space-y-2">
              {toc.map((item, index) => {
                const isActive = activeId === item.url.replace('#', '')
                const indentLevel = Math.max(0, item.depth - 1) * 12

                return (
                  <Link
                    key={index}
                    href={item.url}
                    className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                      isActive
                        ? 'bg-blue-50 font-medium text-blue-600 dark:bg-blue-950 dark:text-blue-400'
                        : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-neutral-100'
                    }`}
                    style={{ paddingLeft: `${12 + indentLevel}px` }}
                  >
                    <span className="line-clamp-2">{item.value}</span>
                  </Link>
                )
              })}
            </div>

            {/* Ad Section */}
            <div className="pt-6">
              <AdComponent slot={SLOTS[3]} />
            </div>
          </nav>
        </div>
      </aside>

      {/* Mobile/Tablet TOC Button */}
      <div className="fixed bottom-20 right-8 z-50 xl:hidden">
        <button
          onClick={toggleSidebar}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-500 text-white shadow-lg transition-all hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          aria-label="Toggle table of contents"
        >
          {isOpen ? <X className="h-5 w-5" /> : <FileText className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile/Tablet Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm xl:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Mobile/Tablet Sidebar */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-80 transform border-l border-neutral-200 bg-white transition-transform duration-300 ease-out dark:border-neutral-800 dark:bg-dark xl:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-neutral-200 p-4 dark:border-neutral-800">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
              <h2 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                Tabla de contenido
              </h2>
            </div>
            <button
              onClick={toggleSidebar}
              className="rounded-md p-2 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-300"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* TOC Content */}
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-2">
              {toc.map((item, index) => {
                const isActive = activeId === item.url.replace('#', '')
                const indentLevel = Math.max(0, item.depth - 1) * 12

                return (
                  <Link
                    key={index}
                    href={item.url}
                    onClick={toggleSidebar}
                    className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                      isActive
                        ? 'bg-blue-50 font-medium text-blue-600 dark:bg-blue-950 dark:text-blue-400'
                        : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-neutral-100'
                    }`}
                    style={{ paddingLeft: `${12 + indentLevel}px` }}
                  >
                    <span className="line-clamp-2">{item.value}</span>
                  </Link>
                )
              })}
            </div>
          </nav>

          {/* Ad Section for Mobile */}
          <div className="border-t border-neutral-200 p-4 dark:border-neutral-800">
            <AdComponent slot={SLOTS[4] || SLOTS[3]} />
          </div>
        </div>
      </aside>
    </>
  )
}
