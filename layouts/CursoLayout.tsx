'use client'
import { SectionContainerWithAds } from '@/components/SectionContainer'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowLeft, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import Contribuye from './components/Contribuye'
import SupabaseCommentsWrapper from '@/components/comments/SupabaseCommentsWrapper'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

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

      {/* Mobile Navigation Header - Sticky */}
      <div className="sticky top-0 z-40 lg:hidden">
        <div className="border-b border-neutral-200 bg-white/95 backdrop-blur-md dark:border-neutral-800 dark:bg-dark">
          <div className="flex items-center justify-between p-4">
            <h2 className="text-base font-semibold text-black dark:text-white">
              Contenido del curso
            </h2>
            <Button
              className="h-8 w-8 rounded-lg border border-neutral-200 p-0 transition-all hover:border-blue-500 dark:border-neutral-800 dark:hover:border-blue-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              variant="outline"
              size="sm"
            >
              {isMenuOpen ? (
                <ChevronDown className="h-4 w-4 rotate-180 transition-transform" />
              ) : (
                <ChevronDown className="h-4 w-4 transition-transform" />
              )}
            </Button>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`overflow-hidden transition-all duration-200 ease-out ${
              isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <nav className="max-h-96 overflow-y-auto border-t border-neutral-200 dark:border-neutral-800">
              <div className="space-y-1 p-4">
                {sidebar.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                      {item.title}
                    </h3>
                    <div className="space-y-1">
                      {item.sections.map((section) => {
                        const active = slug === section.link
                        return (
                          <Link
                            className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-all duration-200 ${
                              active
                                ? 'bg-blue-50 font-medium text-blue-600 dark:bg-blue-950 dark:text-blue-400'
                                : 'text-neutral-600 hover:bg-neutral-50 hover:text-black dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-white'
                            }`}
                            href={section.link}
                            key={section.title}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div
                              className={`h-1 w-1 rounded-full ${
                                active
                                  ? 'bg-blue-600 dark:bg-blue-400'
                                  : 'bg-neutral-300 dark:bg-neutral-600'
                              }`}
                            />
                            <span className="leading-5">{section.title}</span>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div className="my-8 grid grid-cols-1 rounded-lg bg-white dark:bg-dark lg:my-12 lg:grid-cols-[20%_60%_20%]">
        <SectionContainerWithAds>
          {/* Left Sidebar - Desktop Only */}
          <div className="hidden lg:block">
            <aside className="sticky top-10 h-[calc(100vh-4rem)] overflow-y-auto border-r border-neutral-200 dark:border-neutral-800">
              <nav className="space-y-1 p-6">
                <div className="space-y-6">
                  {sidebar.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <h3 className="text-base font-semibold text-black dark:text-white">
                        {item.title}
                      </h3>
                      <div className="space-y-1">
                        {item.sections.map((section) => {
                          const active = slug === section.link
                          return (
                            <Link
                              className={`group flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-900 ${
                                active
                                  ? 'border border-blue-200 bg-blue-50 font-medium text-blue-600 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-400'
                                  : 'text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white'
                              }`}
                              href={section.link}
                              key={section.title}
                            >
                              <div
                                className={`h-1.5 w-1.5 rounded-full ${
                                  active
                                    ? 'bg-blue-600 dark:bg-blue-400'
                                    : 'bg-neutral-300 dark:bg-neutral-600'
                                }`}
                              />
                              <span className="leading-5">{section.title}</span>
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
          <main className="mx-auto w-full max-w-4xl space-y-8 md:px-4">
            <div className="space-y-8">
              {/* Back Link */}
              <Link
                href={path.href}
                className="inline-flex items-center rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-600 transition-all duration-200 hover:border-blue-500 hover:text-black dark:border-neutral-800 dark:bg-black dark:text-neutral-400 dark:hover:border-blue-400 dark:hover:text-white"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                {path.title}
              </Link>

              {/* Author Info */}
              <div className="space-y-3 rounded-lg border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-black">
                <h2 className="text-base font-semibold text-black dark:text-white">
                  Emmanuel Díaz Leal Hernández
                </h2>
                <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
                  <span>May 25, 2024</span>
                  <div className="h-1 w-1 rounded-full bg-neutral-300 dark:bg-neutral-600" />
                  <Badge
                    variant="secondary"
                    className="border border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-400"
                  >
                    Intermediate
                  </Badge>
                </div>
              </div>

              {/* Title and Description */}
              <div className="space-y-6">
                <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-white lg:text-5xl">
                  {title}
                </h1>
                <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {description}
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-neutral-200 dark:border-neutral-800">
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

          <div className="border-l border-neutral-200 dark:border-neutral-800">
            {/* Right Sidebar - Fixed with scroll */}
            <aside className="sticky top-10 h-[calc(100vh-4rem)] max-sm:hidden">
              <nav className="space-y-6 p-6">
                <h2 className="text-sm font-semibold text-black dark:text-white">
                  Tabla de contenido
                </h2>
                <Contribuye url="https://github.com/emmanuelh-dev/bysmax-blog/tree/main/data/cursos/es/traccar" />
              </nav>
              <div className="p-6">
                <ins
                  className="adsbygoogle sticky top-10 mt-6 h-[600px] w-full rounded-lg border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-black"
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
