import Image from '@/components/Image'
import React from 'react'
import { ARDUINO_BOARDS } from '@/data/arduinos'
import { getArduinoUITranslation } from '@/data/arduino-ui'
import ArduinoSidebar from '@/components/arduino/ArduinoSidebar'
import { genPageMetadata } from '@/app/[locale]/seo'
import { SectionContainerWithAds } from '@/components/SectionContainer'
import Script from 'next/script'
import SupabaseCommentsWrapper from '@/components/comments/SupabaseCommentsWrapper'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { LocaleTypes } from '../../i18n/settings'
import { SLOTS } from '@/data/ad-slots'
import AdComponent from '@/data/AdComponent'
import { ExternalLink, Microchip, Zap, Cpu, HardDrive, MemoryStick, Power } from 'lucide-react'
import { notFound } from 'next/navigation'

interface Props {
  params: {
    locale: LocaleTypes
    board: string
  }
}

export async function generateStaticParams() {
  const locales = ['es', 'en', 'pt']
  const params: { locale: string; board: string }[] = []

  for (const locale of locales) {
    for (const board of ARDUINO_BOARDS) {
      params.push({
        locale,
        board: board.id,
      })
    }
  }

  return params
}

export async function generateMetadata({ params: { locale, board } }: Props) {
  const ui = getArduinoUITranslation(locale as 'es' | 'en' | 'pt')
  const boardData = ARDUINO_BOARDS.find((b) => b.id === board)

  if (!boardData) {
    return genPageMetadata({
      title: 'Board not found',
      description: 'The requested Arduino board was not found.',
    })
  }

  const title = `${boardData.name} - ${ui.pageTitle.split(' - ')[0]}`
  const description = boardData.description[locale as keyof typeof boardData.description]

  return genPageMetadata({
    title,
    description,
    openGraph: {
      title,
      description,
      images: boardData.image || '/static/images/arduino-placeholder.png',
      locale: locale === 'es' ? 'es_MX' : locale === 'en' ? 'en_US' : 'pt_BR',
      type: 'website',
    },
    twitter: {
      title,
      card: boardData.image || '/static/images/arduino-placeholder.png',
      images: boardData.image || '/static/images/arduino-placeholder.png',
    },
  })
}

export default function ArduinoBoardPage({ params: { locale, board } }: Props) {
  const ui = getArduinoUITranslation(locale as 'es' | 'en' | 'pt')
  const boardData = ARDUINO_BOARDS.find((b) => b.id === board)

  if (!boardData) {
    notFound()
  }

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
        name: 'Arduino',
        item: `https://bysmax.com/${locale}/arduino`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: boardData.name,
        item: `https://bysmax.com/${locale}/arduino/${board}`,
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
            <div className="mb-8 flex items-start gap-8">
              <div className="flex-1">
                <h1 className="mb-4 text-4xl font-semibold tracking-tight text-[#0a0a0a] dark:text-white">
                  {boardData.name}
                </h1>
                <p className="text-lg leading-relaxed text-[#737373]">
                  {boardData.description[locale as keyof typeof boardData.description]}
                </p>
              </div>

              {/* Board Image */}
              <div className="flex-shrink-0">
                <Image
                  src={boardData.image || '/static/images/arduino-placeholder.png'}
                  width={300}
                  height={200}
                  alt={`${boardData.name} ${ui.imageAlts.boardImage}`}
                  className="h-auto w-full rounded-lg object-cover"
                  style={{ width: '300px', height: 'auto' }}
                />
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-4">
              <a
                href={boardData.officialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg border border-[#0070f3] bg-[#0070f3] px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-[#0070f3]/90"
              >
                {ui.labels.officialStore}
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>

              {boardData.pdf && (
                <a
                  href={boardData.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg border border-[#e5e5e5] px-6 py-3 text-sm font-medium text-[#0a0a0a] transition-all duration-200 hover:border-[#0070f3] hover:text-[#0070f3] dark:border-[#333333] dark:text-white dark:hover:border-[#0070f3] dark:hover:text-[#0070f3]"
                >
                  {ui.labels.datasheet}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              )}
            </div>
          </header>

          {/* Ad Section */}
          <AdComponent slot={SLOTS[0]} />

          {/* Detailed Specifications */}
          <section className="mb-16">
            <h2 className="mb-8 text-2xl font-semibold tracking-tight text-[#0a0a0a] dark:text-white">
              {ui.sections.specifications}
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Processor */}
              <div className="rounded-lg border border-[#e5e5e5] p-6 dark:border-[#333333]">
                <div className="mb-4 flex items-center gap-3">
                  <Microchip className="h-5 w-5 text-[#0070f3]" />
                  <h3 className="font-medium text-[#0a0a0a] dark:text-white">
                    {ui.labels.microcontroller}
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-[#737373]">Chip</span>
                    <span className="text-sm font-medium text-[#0a0a0a] dark:text-white">
                      {boardData.microcontroller}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-[#737373]">{ui.labels.architecture}</span>
                    <span className="text-sm font-medium text-[#0a0a0a] dark:text-white">
                      {boardData.architecture}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-[#737373]">{ui.labels.clockSpeed}</span>
                    <span className="text-sm font-medium text-[#0a0a0a] dark:text-white">
                      {boardData.clockSpeed}
                    </span>
                  </div>
                </div>
              </div>

              {/* Memory */}
              <div className="rounded-lg border border-[#e5e5e5] p-6 dark:border-[#333333]">
                <div className="mb-4 flex items-center gap-3">
                  <HardDrive className="h-5 w-5 text-[#0070f3]" />
                  <h3 className="font-medium text-[#0a0a0a] dark:text-white">Memoria</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-[#737373]">{ui.labels.flashMemory}</span>
                    <span className="text-sm font-medium text-[#0a0a0a] dark:text-white">
                      {boardData.flashMemory}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-[#737373]">{ui.labels.sram}</span>
                    <span className="text-sm font-medium text-[#0a0a0a] dark:text-white">
                      {boardData.sram}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-[#737373]">EEPROM</span>
                    <span className="text-sm font-medium text-[#0a0a0a] dark:text-white">
                      {boardData.eeprom}
                    </span>
                  </div>
                </div>
              </div>

              {/* Power */}
              <div className="rounded-lg border border-[#e5e5e5] p-6 dark:border-[#333333]">
                <div className="mb-4 flex items-center gap-3">
                  <Power className="h-5 w-5 text-[#0070f3]" />
                  <h3 className="font-medium text-[#0a0a0a] dark:text-white">Alimentación</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-[#737373]">{ui.labels.operatingVoltage}</span>
                    <span className="text-sm font-medium text-[#0a0a0a] dark:text-white">
                      {boardData.operatingVoltage}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-[#737373]">{ui.labels.inputVoltage}</span>
                    <span className="text-sm font-medium text-[#0a0a0a] dark:text-white">
                      {boardData.inputVoltage}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-[#737373]">{ui.labels.usb}</span>
                    <span className="text-sm font-medium text-[#0a0a0a] dark:text-white">
                      {boardData.usb}
                    </span>
                  </div>
                </div>
              </div>

              {/* I/O */}
              <div className="rounded-lg border border-[#e5e5e5] p-6 dark:border-[#333333]">
                <div className="mb-4 flex items-center gap-3">
                  <Zap className="h-5 w-5 text-[#0070f3]" />
                  <h3 className="font-medium text-[#0a0a0a] dark:text-white">Entradas/Salidas</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-[#737373]">{ui.labels.digitalIO}</span>
                    <span className="text-sm font-medium text-[#0a0a0a] dark:text-white">
                      {boardData.digitalIO}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-[#737373]">{ui.labels.analogIO}</span>
                    <span className="text-sm font-medium text-[#0a0a0a] dark:text-white">
                      {boardData.analogIO}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-[#737373]">{ui.labels.dimensions}</span>
                    <span className="text-sm font-medium text-[#0a0a0a] dark:text-white">
                      {boardData.dimensions}
                    </span>
                  </div>
                </div>
              </div>

              {/* Communication */}
              <div className="rounded-lg border border-[#e5e5e5] p-6 dark:border-[#333333] md:col-span-2 lg:col-span-1">
                <div className="mb-4 flex items-center gap-3">
                  <Cpu className="h-5 w-5 text-[#0070f3]" />
                  <h3 className="font-medium text-[#0a0a0a] dark:text-white">
                    {ui.labels.communication}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {boardData.communication.split(', ').map((comm, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center rounded-full bg-[#f9f9f9] px-2.5 py-0.5 text-xs font-medium text-[#0a0a0a] dark:bg-[#1a1a1a] dark:text-white"
                    >
                      {comm}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Features & Applications */}
          <section className="mb-16">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Features */}
              <div>
                <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[#0a0a0a] dark:text-white">
                  {ui.sections.features}
                </h2>
                <div className="space-y-3">
                  {boardData.features[locale as keyof typeof boardData.features].map(
                    (feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-[#0070f3]"></div>
                        <span className="text-[#737373]">{feature}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Applications */}
              <div>
                <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[#0a0a0a] dark:text-white">
                  {ui.sections.applications}
                </h2>
                <div className="space-y-3">
                  {boardData.applications[locale as keyof typeof boardData.applications].map(
                    (app, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-[#0070f3]"></div>
                        <span className="text-[#737373]">{app}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Additional Ad */}
          <AdComponent slot={SLOTS[1]} />

          {/* Comments and Navigation */}
          <div className="mt-16 space-y-8">
            <SupabaseCommentsWrapper slug={`/arduino/${board}`} />
            <ScrollTopAndComment />
          </div>
        </div>
      </ArduinoSidebar>
    </SectionContainerWithAds>
  )
}
