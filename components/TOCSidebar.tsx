'use client'

import { ReactNode } from 'react'
import Link from '@/components/Link'
import { FileText } from 'lucide-react'
import { useActiveHeading } from '@/components/util/useActiveHeading'

interface TocItem {
  url: string
  value: string
  depth: number
}

interface TOCSidebarProps {
  toc: TocItem[]
  className?: string
}

export default function TOCSidebar({ toc, className = '' }: TOCSidebarProps) {
  const activeId = useActiveHeading()

  if (!toc || toc.length === 0) {
    return null
  }
  return (
    <div className={`bg-light dark:bg-neutral-950 ${className}`}>
      <div className="mb-3 flex items-center gap-2">
        <FileText className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
        <h2 className="text-sm font-semibold text-neutral-900 dark:text-white">
          Table of Contents
        </h2>
      </div>
      <nav className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-neutral-300 dark:scrollbar-thumb-neutral-600 max-h-[calc(100vh-400px)] space-y-0.5 overflow-y-auto">
        {toc.map((item, index) => {
          const isActive = activeId === item.url.replace('#', '')
          const indentLevel = Math.max(0, item.depth - 1) * 16
          return (
            <Link
              key={index}
              href={item.url}
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
      </nav>
    </div>
  )
}
