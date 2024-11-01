'use client'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  ArrowLeft,
  BookText,
  ChevronDown,
  CircuitBoard,
  Cpu,
  Database,
  ExternalLink,
  Menu,
  Microchip,
  Play,
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export function CursoLayout({ children, sidebar, title, description, authorDetails, path, toc }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  console.log(toc)
  return (
    <div className="container my-12 grid grid-cols-1 md:grid-cols-[250px_1fr_250px]">
      {/* Left Sidebar - Fixed with scroll */}
      <aside className="sticky top-10 h-[calc(100vh-8rem)] overflow-y-auto border-r border-gray-800 max-sm:hidden">
        <nav className="space-y-6 p-4">
          <div className="space-y-2">
            {sidebar.map((item, index) => (
              <div key={index} className="space-y-2">
                <h2 className="flex items-center text-sm font-semibold">{item.title}</h2>
                <div className="ml-4 space-y-1">
                  {item.sections.map((section) => (
                    <Link
                      className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                      href={section.link}
                      key={section.title}
                      target={section.type === 'video' ? '_blank' : '_self'}
                    >
                      {section.type === 'doc' && <BookText className="size-4" />}
                      {section.type === 'video' && <Play className="size-4" />}

                      {section.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </nav>
      </aside>

      {/* Main Content - Scrollable */}
      <main>
        <div className="mx-auto max-w-3xl space-y-8">
          {/* Back Link */}
          <Link
            href={path.href}
            className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {path.title}
          </Link>

          {/* Author Info */}
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-gray-400">Emmanuel Hernandez</h2>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>May 25, 2024</span>
              <span>•</span>
              <Badge variant="secondary">Intermediate</Badge>
              <span>•</span>
              <Badge variant="secondary">Short</Badge>
            </div>
          </div>

          {/* Title and Description */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-xl text-gray-400">{description}</p>
          </div>
        </div>
        <div className=" mx-auto max-w-3xl pb-8 pt-10">{children}</div>
      </main>

      {/* Right Sidebar - Fixed with scroll */}
      <aside className="sticky top-10 h-[calc(100vh-4rem)] overflow-y-auto border-l border-gray-800 max-sm:hidden">
        <nav className="space-y-2 p-4">
          <h2 className="flex items-center text-sm font-semibold">Tabla de contenido</h2>
          {toc.map((item) => (
            <Link
              key={item.value}
              className="block text-sm text-gray-400 transition-colors hover:text-white"
              href={item.url}
            >
              {item.value}
            </Link>
          ))}
        </nav>
      </aside>
    </div>
  )
}

export default CursoLayout
