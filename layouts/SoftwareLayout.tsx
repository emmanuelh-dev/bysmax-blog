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

export function SoftwareLayout({
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
    <div className="container mx-auto">
      <div className=" my-12 grid grid-cols-1 border border-neutral-300 dark:border-gray-800 lg:grid-cols-[15%_70%_15%]">
        <SectionContainerWithAds>
          {/* Left Sidebar - Fixed with scroll */}
          <div className="border-r border-neutral-300 dark:border-gray-800">
            <aside className="overflow-y-auto lg:h-[90vh] sticky top-10">
              <nav className="space-y-6 p-4">
                <div className="space-y-2">
                  {sidebar.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <h2 className="flex items-center text-sm font-semibold">{item.title}</h2>
                      <div className="ml-4 space-y-1">
                        {item.sections.map((section) => {
                          const active = slug === section.link
                          return (
                            <Link
                              className={`hover:font-semi-bold flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-black dark:hover:text-white ${active ? 'font-bold text-[#000] dark:text-white' : ''}`}
                              href={section.link}
                              key={section.title}
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
          <main className="mx-auto w-full max-w-4xl space-y-8 py-8">
            <div className="space-y-8">
              {/* Back Link */}
              <Link
                href={path.href}
                className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                {path.title}
              </Link>

              {/* Author Info */}
              {/* <div className="space-y-1">
              <h2 className="text-lg font-medium text-gray-500">Emmanuel Hernandez</h2>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>May 25, 2024</span>
                <span>•</span>
                <Badge variant="secondary">Intermediate</Badge>
                <span>•</span>
                <Badge variant="secondary">Short</Badge>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold">{title}</h1>
              <p className="text-xl text-gray-400">{description}</p>
            </div>*/}
            </div>
            <div>
              <ins
                className="adsbygoogle h-[280px] w-full bg-white dark:bg-black"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-3646138644530578"
                data-ad-slot="6395288197"
                data-ad-format="auto"
                data-full-width-responsive="true"
              ></ins>
            </div>
            <div>{children}</div>
          </main>

          <div className="border-l border-neutral-300 dark:border-gray-800">
            {/* Right Sidebar - Fixed with scroll */}
            <aside className="h-[calc(100vh-4rem)]max-sm:hidden sticky top-10">
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
              <ins
                className="adsbygoogle sticky top-10 mt-6 h-[600px] w-full bg-white dark:bg-black"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-3646138644530578"
                data-ad-slot="9734184827"
                data-ad-format="auto"
                data-full-width-responsive="true"
              ></ins>
            </aside>
          </div>
        </SectionContainerWithAds>
      </div>
    </div>
  )
}

export default SoftwareLayout
