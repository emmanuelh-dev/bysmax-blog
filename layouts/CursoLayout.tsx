'use client'
import { SectionContainerWithAds } from '@/components/SectionContainer'
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
import Contribuye from './components/Contribuye'
import SupabaseCommentsWrapper from '@/components/comments/SupabaseCommentsWrapper'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { IoClose } from 'react-icons/io5'

export function CursoLayout({
  children,
  sidebar,
  title,
  description,
  authorDetails,
  path,
  toc,
  slug,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="container mx-auto px-4 lg:px-8">
      <ScrollTopAndComment />
      <div className="my-8 grid grid-cols-1 rounded-lg dark:bg-black lg:my-12 lg:grid-cols-[20%_60%_20%]">
        <SectionContainerWithAds>
          {/* Left Sidebar - Fixed with scroll */}
          <div className="border-r border-neutral-200 dark:border-gray-800">
            <Button
              className="fixed bottom-6 left-4 z-50 aspect-square rounded-full p-2 lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <IoClose className="size-4" /> : <Menu className="size-4" />}
            </Button>
            <aside
              className={`
                fixed inset-0 z-40 transform bg-white transition-transform
                duration-300 ease-in-out dark:bg-black lg:sticky
                ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
                overflow-y-auto
                lg:h-[90vh] lg:translate-x-0
              `}
            >
              <nav className="space-y-4 p-6">
                <div className="space-y-3">
                  {sidebar.map((item, index) => (
                    <div key={index} className="space-y-1">
                      <h2 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h2>
                      <div className="ml-4">
                        {item.sections.map((section) => {
                          const active = slug === section.link
                          return (
                            <Link
                              className={`group flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-all hover:bg-gray-100 dark:hover:bg-gray-800 ${
                                active
                                  ? 'bg-blue-50 font-medium text-blue-600 dark:bg-gray-800 dark:text-blue-400'
                                  : 'text-gray-600 dark:text-gray-400'
                              }`}
                              href={section.link}
                              key={section.title}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {section.title}
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </nav>
            </aside>
          </div>

          {/* Main Content - Scrollable */}
          <main className="mx-auto w-full max-w-4xl space-y-8 px-4">
            <div className="space-y-8">
              {/* Back Link */}
              <Link
                href={path.href}
                className="inline-flex items-center rounded-full bg-gray-100 px-4 py-1 text-sm text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                {path.title}
              </Link>

              {/* Author Info */}
              <div className="space-y-2 rounded-lg bg-gray-50 p-6 dark:bg-gray-800/50">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                  Emmanuel Díaz Leal Hernández
                </h2>
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                  <span>May 25, 2024</span>
                  <span>•</span>
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                  >
                    Intermediate
                  </Badge>
                  <span>•</span>
                  <Badge
                    variant="secondary"
                    className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                  >
                    Short
                  </Badge>
                </div>
              </div>

              {/* Title and Description */}
              <div className="space-y-4">
                <h1 className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl font-bold text-transparent dark:from-white dark:to-gray-400">
                  {title}
                </h1>
                <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-400">
                  {description}
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-neutral-200 p-4 dark:border-gray-800">
              <ins
                className="adsbygoogle h-[280px] w-full bg-white dark:bg-black"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-3646138644530578"
                data-ad-slot="6395288197"
                data-ad-format="auto"
                data-full-width-responsive="true"
              ></ins>
            </div>

            <div className="prose prose-gray max-w-none dark:prose-invert">{children}</div>

            <SupabaseCommentsWrapper slug={slug} />
          </main>

          <div className="border-l border-neutral-200 dark:border-gray-800">
            {/* Right Sidebar - Fixed with scroll */}
            <aside className="sticky top-10 h-[calc(100vh-4rem)] max-sm:hidden">
              <nav className="space-y-3 p-6">
                <h2 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                  Tabla de contenido
                </h2>
                <Contribuye url="https://github.com/emmanuelh-dev/bysmax-blog/tree/main/data/cursos/es/traccar" />
              </nav>
              <div className="p-6">
                <ins
                  className="adsbygoogle sticky top-10 mt-6 h-[600px] w-full rounded-lg bg-white dark:bg-black"
                  style={{ display: 'block' }}
                  data-ad-client="ca-pub-3646138644530578"
                  data-ad-slot="9734184827"
                  data-ad-format="auto"
                  data-full-width-responsive="true"
                ></ins>
              </div>
            </aside>
          </div>
        </SectionContainerWithAds>
      </div>
    </div>
  )
}

export default CursoLayout
