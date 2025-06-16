import Image from '@/components/Image'
import Link from 'next/link'
import React from 'react'
import { ARDUINO_BOARDS } from '@/data/arduinos'
import { getArduinoUITranslation } from '@/data/arduino-ui'
import ArduinoSidebar from '@/components/arduino/ArduinoSidebar'
import { genPageMetadata } from '@/app/[locale]/seo'
import { SectionContainerWithAds } from '@/components/SectionContainer'
import Script from 'next/script'
import SupabaseCommentsWrapper from '@/components/comments/SupabaseCommentsWrapper'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { LocaleTypes } from '../i18n/settings'
import { SLOTS } from '@/data/ad-slots'
import AdComponent from '@/data/AdComponent'
import { ExternalLink, Microchip, Zap, Wifi } from 'lucide-react'

interface Props {
  params: { locale: LocaleTypes }
}

export async function generateMetadata({ params: { locale } }: Props) {
  const ui = getArduinoUITranslation(locale as 'es' | 'en' | 'pt')

  return genPageMetadata({
    title: ui.pageTitle,
    description: ui.pageDescription,
    openGraph: {
      title: ui.pageTitle,
      description: ui.pageDescription,
      images: '/static/images/arduino-boards.png',
      locale: locale === 'es' ? 'es_MX' : locale === 'en' ? 'en_US' : 'pt_BR',
      type: 'website',
    },
    twitter: {
      title: ui.pageTitle,
      card: '/static/images/arduino-boards.png',
      images: '/static/images/arduino-boards.png',
    },
  })
}

export default function ArduinoPage({ params: { locale } }: Props) {
  const ui = getArduinoUITranslation(locale as 'es' | 'en' | 'pt')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: locale === 'en' ? 'Home' : locale === 'pt' ? 'Início' : 'Inicio',
        item: `https://bysmax.com/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: locale === 'en' ? 'Arduino' : locale === 'pt' ? 'Arduino' : 'Arduino',
        item: `https://bysmax.com/${locale}/arduino`,
      },
    ],
  }

  return (
    <SectionContainerWithAds>
      <ArduinoSidebar>
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <div className="mx-auto max-w-4xl">
          {/* Hero Section */}
          <header className="mb-16">
            <h1 className="mb-6 text-4xl font-semibold tracking-tight text-[#0a0a0a] dark:text-white">
              {ui.pageTitle.split(' - ')[0]}
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-[#737373]">{ui.pageDescription}</p>

            {/* Featured Image */}
            <div className="mb-8">
              <Image
                src="/static/images/arduino-boards.png"
                width={1280}
                height={720}
                className="h-auto w-full rounded-lg object-cover"
                style={{ width: '100%', height: 'auto' }}
                alt={ui.imageAlts.featuredImage}
              />
            </div>
          </header>

          {/* Ad Section */}
          <AdComponent slot={SLOTS[0]} />

          {/* Arduino Boards Grid */}
          <section className="mb-16">
            <h2 className="mb-8 text-2xl font-semibold tracking-tight text-[#0a0a0a] dark:text-white">
              {ui.sections.availableBoards}
            </h2>

            <div className="grid gap-8">
              {ARDUINO_BOARDS.map((board, index) => (
                <div key={board.id}>
                  <article className="rounded-lg border border-[#e5e5e5] bg-white p-8 transition-all duration-200 hover:border-[#0070f3] hover:shadow-sm dark:border-[#333333] dark:bg-[#0a0a0a] dark:hover:border-[#0070f3]">
                    {/* Board Header */}
                    <header className="mb-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="mb-3 text-xl font-semibold text-[#0a0a0a] dark:text-white">
                            <Link
                              href={`/${locale}/arduino/${board.id}`}
                              className="transition-colors hover:text-[#0070f3]"
                            >
                              {board.name}
                            </Link>
                          </h3>
                          <p className="mb-4 leading-relaxed text-[#737373]">
                            {board.description[locale as keyof typeof board.description]}
                          </p>
                        </div>

                        {/* Board Image */}
                        <div className="ml-6 flex-shrink-0">
                          <Image
                            src={board.image || '/static/images/arduino-placeholder.png'}
                            width={120}
                            height={80}
                            alt={`${board.name} ${ui.imageAlts.boardImage}`}
                            className="h-auto w-full rounded-md object-cover"
                            style={{ width: '120px', height: 'auto' }}
                          />
                        </div>
                      </div>

                      {/* Quick specs */}
                      <div className="grid gap-4 md:grid-cols-4">
                        <div className="flex items-center gap-2">
                          <Microchip className="h-4 w-4 text-[#737373]" />
                          <div>
                            <span className="text-xs font-medium text-[#737373]">
                              {ui.labels.microcontroller}
                            </span>
                            <p className="text-sm font-medium text-[#0a0a0a] dark:text-white">
                              {board.microcontroller}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Zap className="h-4 w-4 text-[#737373]" />
                          <div>
                            <span className="text-xs font-medium text-[#737373]">
                              {ui.labels.clockSpeed}
                            </span>
                            <p className="text-sm font-medium text-[#0a0a0a] dark:text-white">
                              {board.clockSpeed}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-[#737373]">
                            {ui.labels.flashMemory}
                          </span>
                          <p className="text-sm font-medium text-[#0a0a0a] dark:text-white">
                            {board.flashMemory}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          {board.communication.includes('Wi-Fi') && (
                            <Wifi className="h-4 w-4 text-[#737373]" />
                          )}
                          <div>
                            <span className="text-xs font-medium text-[#737373]">
                              {ui.labels.architecture}
                            </span>
                            <p className="text-sm font-medium text-[#0a0a0a] dark:text-white">
                              {board.architecture}
                            </p>
                          </div>
                        </div>
                      </div>
                    </header>

                    {/* Content Grid */}
                    <div className="grid gap-6 lg:grid-cols-3">
                      {/* Specifications */}
                      <div>
                        <h4 className="mb-3 text-sm font-medium text-[#737373]">
                          {ui.sections.specifications}
                        </h4>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-[#737373]">{ui.labels.digitalIO}</span>
                            <span className="font-medium text-[#0a0a0a] dark:text-white">
                              {board.digitalIO}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-[#737373]">{ui.labels.analogIO}</span>
                            <span className="font-medium text-[#0a0a0a] dark:text-white">
                              {board.analogIO}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-[#737373]">{ui.labels.sram}</span>
                            <span className="font-medium text-[#0a0a0a] dark:text-white">
                              {board.sram}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-[#737373]">{ui.labels.operatingVoltage}</span>
                            <span className="font-medium text-[#0a0a0a] dark:text-white">
                              {board.operatingVoltage}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="mb-3 text-sm font-medium text-[#737373]">
                          {ui.sections.features}
                        </h4>
                        <div className="space-y-1">
                          {board.features[locale as keyof typeof board.features]
                            .slice(0, 5)
                            .map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-[#0070f3]"></div>
                                <span className="text-sm text-[#737373]">{feature}</span>
                              </div>
                            ))}
                        </div>
                      </div>

                      {/* Applications */}
                      <div>
                        <h4 className="mb-3 text-sm font-medium text-[#737373]">
                          {ui.sections.applications}
                        </h4>
                        <div className="space-y-1">
                          {board.applications[locale as keyof typeof board.applications]
                            .slice(0, 5)
                            .map((app, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-[#0070f3]"></div>
                                <span className="text-sm text-[#737373]">{app}</span>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href={`/${locale}/arduino/${board.id}`}
                        className="inline-flex items-center rounded-lg border border-[#e5e5e5] bg-white px-4 py-2 text-sm font-medium text-[#0a0a0a] transition-all duration-200 hover:border-[#0070f3] hover:text-[#0070f3] dark:border-[#333333] dark:bg-[#0a0a0a] dark:text-white dark:hover:border-[#0070f3] dark:hover:text-[#0070f3]"
                      >
                        {ui.labels.viewDetails}
                        <svg
                          className="ml-2 h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>

                      <a
                        href={board.officialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-lg border border-[#0070f3] bg-[#0070f3] px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-[#0070f3]/90"
                      >
                        {ui.labels.officialStore}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>

                      {board.pdf && (
                        <a
                          href={board.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center rounded-lg border border-[#e5e5e5] px-4 py-2 text-sm font-medium text-[#737373] transition-all duration-200 hover:border-[#0070f3] hover:text-[#0070f3] dark:border-[#333333] dark:hover:border-[#0070f3] dark:hover:text-[#0070f3]"
                        >
                          {ui.labels.datasheet}
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </article>

                  {/* Ad between boards */}
                  {index < ARDUINO_BOARDS.length - 1 && (
                    <div className="my-8">
                      <AdComponent slot={SLOTS[index % SLOTS.length]} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Educational Content */}
          <section className="mt-16 space-y-12">
            <div>
              <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[#0a0a0a] dark:text-white">
                {ui.sections.howTheyWork}
              </h2>
              <div className="space-y-6 text-[#737373]">
                <p className="leading-relaxed">{ui.descriptions.howTheyWorkIntro}</p>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg border border-[#e5e5e5] p-6 dark:border-[#333333]">
                    <h3 className="mb-3 font-medium text-[#0a0a0a] dark:text-white">
                      {ui.descriptions.powerManagement.title}
                    </h3>
                    <p className="text-sm leading-relaxed">
                      {ui.descriptions.powerManagement.description}
                    </p>
                  </div>

                  <div className="rounded-lg border border-[#e5e5e5] p-6 dark:border-[#333333]">
                    <h3 className="mb-3 font-medium text-[#0a0a0a] dark:text-white">
                      {ui.descriptions.connectivity.title}
                    </h3>
                    <p className="text-sm leading-relaxed">
                      {ui.descriptions.connectivity.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[#0a0a0a] dark:text-white">
                {ui.sections.mainApplications}
              </h2>
              <div className="grid gap-4 md:grid-cols-3">
                {ARDUINO_BOARDS.slice(0, 6).map((board) => (
                  <div
                    key={board.id}
                    className="rounded-lg border border-[#e5e5e5] p-4 dark:border-[#333333]"
                  >
                    <h3 className="mb-2 font-medium text-[#0a0a0a] dark:text-white">
                      {board.name}
                    </h3>
                    <p className="text-sm text-[#737373]">
                      {board.applications[locale as keyof typeof board.applications][0]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Comments and Navigation */}
          <div className="mt-16 space-y-8">
            <SupabaseCommentsWrapper slug="/arduino" />
            <ScrollTopAndComment />
          </div>
        </div>
      </ArduinoSidebar>
    </SectionContainerWithAds>
  )
}
