import Image from '@/components/Image'
import React from 'react'
import { ARDUINO_BOARDS } from '@/data/arduinos'
import {
  getComparisonUITranslation,
  calculateComparison,
  POPULAR_COMPARISONS,
} from '@/data/arduino-comparison'
import ArduinoSidebar from '@/components/arduino/ArduinoSidebar'
import { genPageMetadata } from '@/app/[locale]/seo'
import { SectionContainerWithAds } from '@/components/SectionContainer'
import Script from 'next/script'
import SupabaseCommentsWrapper from '@/components/comments/SupabaseCommentsWrapper'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { LocaleTypes } from '../../../i18n/settings'
import { SLOTS } from '@/data/ad-slots'
import AdComponent from '@/data/AdComponent'
import {
  ExternalLink,
  Trophy,
  Zap,
  HardDrive,
  Cpu,
  Power,
  Wifi,
  DollarSign,
  CheckCircle,
  XCircle,
  MinusCircle,
} from 'lucide-react'
import { notFound } from 'next/navigation'

interface Props {
  params: {
    locale: LocaleTypes
    comparisons: string
  }
}

export async function generateStaticParams() {
  const locales = ['es', 'en', 'pt']
  const params: { locale: string; comparisons: string }[] = []

  for (const locale of locales) {
    for (const comp of POPULAR_COMPARISONS) {
      params.push({
        locale,
        comparisons: `${comp.board1}-vs-${comp.board2}`,
      })
    }
  }

  return params
}

export async function generateMetadata({ params: { locale, comparisons } }: Props) {
  const ui = getComparisonUITranslation(locale as 'es' | 'en' | 'pt')
  const [board1Id, board2Id] = comparisons.split('-vs-')

  const board1 = ARDUINO_BOARDS.find((b) => b.id === board1Id)
  const board2 = ARDUINO_BOARDS.find((b) => b.id === board2Id)

  if (!board1 || !board2) {
    return genPageMetadata({
      title: 'Comparison not found',
      description: 'The requested Arduino comparison was not found.',
    })
  }

  const title = ui.pageTitle.replace('{board1}', board1.name).replace('{board2}', board2.name)

  const description = ui.pageDescription
    .replace('{board1}', board1.name)
    .replace('{board2}', board2.name)

  return genPageMetadata({
    title,
    description,
    openGraph: {
      title,
      description,
      images: '/static/images/arduino-comparison.png',
      locale: locale === 'es' ? 'es_MX' : locale === 'en' ? 'en_US' : 'pt_BR',
      type: 'website',
    },
    twitter: {
      title,
      card: '/static/images/arduino-comparison.png',
      images: '/static/images/arduino-comparison.png',
    },
  })
}

export default function ArduinoComparisonPage({ params: { locale, comparisons } }: Props) {
  const ui = getComparisonUITranslation(locale as 'es' | 'en' | 'pt')
  const [board1Id, board2Id] = comparisons.split('-vs-')

  const board1 = ARDUINO_BOARDS.find((b) => b.id === board1Id)
  const board2 = ARDUINO_BOARDS.find((b) => b.id === board2Id)

  if (!board1 || !board2) {
    notFound()
  }

  const comparisonData = calculateComparison(board1, board2)

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
        name: `${board1.name} ${ui.labels.vs} ${board2.name}`,
        item: `https://bysmax.com/${locale}/arduino/comparisons/${comparisons}`,
      },
    ],
  }

  const getWinnerIcon = (winner: string) => {
    switch (winner) {
      case 'board1':
      case 'board2':
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case 'tie':
        return <MinusCircle className="h-4 w-4 text-yellow-500" />
      default:
        return <XCircle className="h-4 w-4 text-red-500" />
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'performance':
        return <Zap className="h-5 w-5" />
      case 'memory':
        return <HardDrive className="h-5 w-5" />
      case 'io':
        return <Cpu className="h-5 w-5" />
      case 'power':
        return <Power className="h-5 w-5" />
      case 'connectivity':
        return <Wifi className="h-5 w-5" />
      case 'price':
        return <DollarSign className="h-5 w-5" />
      default:
        return <Trophy className="h-5 w-5" />
    }
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

        <div className="mx-auto max-w-6xl">
          {/* Hero Section */}
          <header className="mb-16">
            <div className="mb-8 text-center">
              <h1 className="mb-6 text-4xl font-semibold tracking-tight text-[#0a0a0a] dark:text-white">
                {board1.name} <span className="text-[#0070f3]">{ui.labels.vs}</span> {board2.name}
              </h1>
              <p className="mx-auto max-w-3xl text-lg text-[#737373]">
                {ui.descriptions.comparisonIntro
                  .replace('{board1}', board1.name)
                  .replace('{board2}', board2.name)}
              </p>
            </div>

            {/* Boards comparison cards */}
            <div className="mb-8 grid gap-8 md:grid-cols-2">
              {/* Board 1 */}
              <div
                className={`rounded-lg border-2 p-6 ${
                  comparisonData.winner.overall === 'board1'
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                    : 'border-[#e5e5e5] dark:border-[#333333]'
                }`}
              >
                <div className="mb-4 flex items-center gap-4">
                  <Image
                    src={board1.image || '/static/images/arduino-placeholder.png'}
                    width={80}
                    height={60}
                    alt={board1.name}
                    className="rounded-md"
                  />
                  <div>
                    <h2 className="text-xl font-semibold text-[#0a0a0a] dark:text-white">
                      {board1.name}
                    </h2>
                    <p className="text-sm text-[#737373]">{board1.microcontroller}</p>
                  </div>
                  {comparisonData.winner.overall === 'board1' && (
                    <Trophy className="ml-auto h-6 w-6 text-yellow-500" />
                  )}
                </div>
                <p className="mb-4 text-sm text-[#737373]">
                  {board1.description[locale as keyof typeof board1.description]}
                </p>
                <div className="flex gap-2">
                  <a
                    href={`/${locale}/arduino/${board1.id}`}
                    className="flex-1 rounded-md border border-[#e5e5e5] px-4 py-2 text-center text-sm font-medium transition-colors hover:border-[#0070f3]"
                  >
                    {ui.labels.viewDetails}
                  </a>
                  <a
                    href={board1.officialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-md bg-[#0070f3] px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-[#0070f3]/90"
                  >
                    {ui.labels.buyNow}
                  </a>
                </div>
              </div>

              {/* Board 2 */}
              <div
                className={`rounded-lg border-2 p-6 ${
                  comparisonData.winner.overall === 'board2'
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                    : 'border-[#e5e5e5] dark:border-[#333333]'
                }`}
              >
                <div className="mb-4 flex items-center gap-4">
                  <Image
                    src={board2.image || '/static/images/arduino-placeholder.png'}
                    width={80}
                    height={60}
                    alt={board2.name}
                    className="rounded-md"
                  />
                  <div>
                    <h2 className="text-xl font-semibold text-[#0a0a0a] dark:text-white">
                      {board2.name}
                    </h2>
                    <p className="text-sm text-[#737373]">{board2.microcontroller}</p>
                  </div>
                  {comparisonData.winner.overall === 'board2' && (
                    <Trophy className="ml-auto h-6 w-6 text-yellow-500" />
                  )}
                </div>
                <p className="mb-4 text-sm text-[#737373]">
                  {board2.description[locale as keyof typeof board2.description]}
                </p>
                <div className="flex gap-2">
                  <a
                    href={`/${locale}/arduino/${board2.id}`}
                    className="flex-1 rounded-md border border-[#e5e5e5] px-4 py-2 text-center text-sm font-medium transition-colors hover:border-[#0070f3]"
                  >
                    {ui.labels.viewDetails}
                  </a>
                  <a
                    href={board2.officialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-md bg-[#0070f3] px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-[#0070f3]/90"
                  >
                    {ui.labels.buyNow}
                  </a>
                </div>
              </div>
            </div>

            {/* Score summary */}
            <div className="rounded-lg bg-[#f9f9f9] p-6 text-center dark:bg-[#1a1a1a]">
              <h3 className="mb-4 text-lg font-semibold text-[#0a0a0a] dark:text-white">
                {ui.sections.verdict}
              </h3>
              <div className="flex items-center justify-center gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#0a0a0a] dark:text-white">
                    {comparisonData.scores.board1}
                  </div>
                  <div className="text-sm text-[#737373]">{board1.name}</div>
                </div>
                <div className="text-2xl font-bold text-[#737373]">-</div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#0a0a0a] dark:text-white">
                    {comparisonData.scores.board2}
                  </div>
                  <div className="text-sm text-[#737373]">{board2.name}</div>
                </div>
              </div>
            </div>
          </header>

          {/* Ad Section */}
          <AdComponent slot={SLOTS[0]} />

          {/* Detailed Comparison */}
          <section className="mb-16">
            <h2 className="mb-8 text-2xl font-semibold tracking-tight text-[#0a0a0a] dark:text-white">
              {ui.sections.comparison}
            </h2>

            <div className="space-y-6">
              {Object.entries(ui.categories).map(([key, title]) => {
                if (key === 'overall') return null
                const winner = comparisonData.winner[key as keyof typeof comparisonData.winner]

                return (
                  <div
                    key={key}
                    className="rounded-lg border border-[#e5e5e5] p-6 dark:border-[#333333]"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      {getCategoryIcon(key)}
                      <h3 className="text-lg font-semibold text-[#0a0a0a] dark:text-white">
                        {title}
                      </h3>
                    </div>

                    <p className="mb-4 text-sm text-[#737373]">
                      {ui.descriptions[`${key}Desc` as keyof typeof ui.descriptions]}
                    </p>

                    <div className="grid gap-4 md:grid-cols-3">
                      {/* Board 1 specs */}
                      <div
                        className={`rounded-md p-4 ${
                          winner === 'board1'
                            ? 'bg-green-50 dark:bg-green-900/20'
                            : 'bg-[#f9f9f9] dark:bg-[#1a1a1a]'
                        }`}
                      >
                        <div className="mb-2 flex items-center justify-between">
                          <span className="font-medium text-[#0a0a0a] dark:text-white">
                            {board1.name}
                          </span>
                          {winner === 'board1' && getWinnerIcon(winner)}
                        </div>
                        <div className="space-y-1 text-sm">
                          {key === 'performance' && (
                            <>
                              <div>CPU: {board1.clockSpeed}</div>
                              <div>Arch: {board1.architecture}</div>
                            </>
                          )}
                          {key === 'memory' && (
                            <>
                              <div>Flash: {board1.flashMemory}</div>
                              <div>SRAM: {board1.sram}</div>
                            </>
                          )}
                          {key === 'io' && (
                            <>
                              <div>Digital: {board1.digitalIO}</div>
                              <div>Analog: {board1.analogIO}</div>
                            </>
                          )}
                          {key === 'power' && (
                            <>
                              <div>Operating: {board1.operatingVoltage}</div>
                              <div>Input: {board1.inputVoltage}</div>
                            </>
                          )}
                          {key === 'connectivity' && (
                            <div className="flex flex-wrap gap-1">
                              {board1.communication.split(', ').map((comm, idx) => (
                                <span
                                  key={idx}
                                  className="rounded bg-white px-2 py-0.5 text-xs dark:bg-[#0a0a0a]"
                                >
                                  {comm}
                                </span>
                              ))}
                            </div>
                          )}
                          {key === 'price' && (
                            <div className="font-medium text-[#0070f3]">Aprox. $25-35 USD</div>
                          )}
                        </div>
                      </div>

                      {/* Winner indicator */}
                      <div className="flex items-center justify-center">
                        <div className="text-center">
                          {winner === 'tie' ? (
                            <div className="text-yellow-500">
                              <MinusCircle className="mx-auto mb-2 h-8 w-8" />
                              <span className="text-sm font-medium">{ui.labels.tie}</span>
                            </div>
                          ) : (
                            <div className="text-green-500">
                              <CheckCircle className="mx-auto mb-2 h-8 w-8" />
                              <span className="text-sm font-medium">
                                {winner === 'board1' ? board1.name : board2.name}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Board 2 specs */}
                      <div
                        className={`rounded-md p-4 ${
                          winner === 'board2'
                            ? 'bg-green-50 dark:bg-green-900/20'
                            : 'bg-[#f9f9f9] dark:bg-[#1a1a1a]'
                        }`}
                      >
                        <div className="mb-2 flex items-center justify-between">
                          <span className="font-medium text-[#0a0a0a] dark:text-white">
                            {board2.name}
                          </span>
                          {winner === 'board2' && getWinnerIcon(winner)}
                        </div>
                        <div className="space-y-1 text-sm">
                          {key === 'performance' && (
                            <>
                              <div>CPU: {board2.clockSpeed}</div>
                              <div>Arch: {board2.architecture}</div>
                            </>
                          )}
                          {key === 'memory' && (
                            <>
                              <div>Flash: {board2.flashMemory}</div>
                              <div>SRAM: {board2.sram}</div>
                            </>
                          )}
                          {key === 'io' && (
                            <>
                              <div>Digital: {board2.digitalIO}</div>
                              <div>Analog: {board2.analogIO}</div>
                            </>
                          )}
                          {key === 'power' && (
                            <>
                              <div>Operating: {board2.operatingVoltage}</div>
                              <div>Input: {board2.inputVoltage}</div>
                            </>
                          )}
                          {key === 'connectivity' && (
                            <div className="flex flex-wrap gap-1">
                              {board2.communication.split(', ').map((comm, idx) => (
                                <span
                                  key={idx}
                                  className="rounded bg-white px-2 py-0.5 text-xs dark:bg-[#0a0a0a]"
                                >
                                  {comm}
                                </span>
                              ))}
                            </div>
                          )}
                          {key === 'price' && (
                            <div className="font-medium text-[#0070f3]">Aprox. $20-30 USD</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Pros and Cons */}
          <section className="mb-16">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Board 1 Pros/Cons */}
              <div>
                <h3 className="mb-6 text-xl font-semibold text-[#0a0a0a] dark:text-white">
                  {board1.name}
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="mb-3 flex items-center gap-2 font-medium text-green-600">
                      <CheckCircle className="h-4 w-4" />
                      {ui.labels.pros}
                    </h4>
                    <ul className="space-y-2">
                      {board1.features[locale as keyof typeof board1.features]
                        .slice(0, 4)
                        .map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-[#737373]">
                            <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                            {feature}
                          </li>
                        ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-3 flex items-center gap-2 font-medium text-red-600">
                      <XCircle className="h-4 w-4" />
                      {ui.labels.cons}
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm text-[#737373]">
                        <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                        {board1.clockSpeed === '16 MHz' ? 'Velocidad limitada' : 'Precio elevado'}
                      </li>
                      <li className="flex items-center gap-2 text-sm text-[#737373]">
                        <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                        {board1.operatingVoltage === '5 V'
                          ? 'Mayor consumo'
                          : 'Compatibilidad limitada'}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Board 2 Pros/Cons */}
              <div>
                <h3 className="mb-6 text-xl font-semibold text-[#0a0a0a] dark:text-white">
                  {board2.name}
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="mb-3 flex items-center gap-2 font-medium text-green-600">
                      <CheckCircle className="h-4 w-4" />
                      {ui.labels.pros}
                    </h4>
                    <ul className="space-y-2">
                      {board2.features[locale as keyof typeof board2.features]
                        .slice(0, 4)
                        .map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-[#737373]">
                            <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                            {feature}
                          </li>
                        ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-3 flex items-center gap-2 font-medium text-red-600">
                      <XCircle className="h-4 w-4" />
                      {ui.labels.cons}
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm text-[#737373]">
                        <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                        {board2.clockSpeed === '16 MHz' ? 'Velocidad limitada' : 'Precio elevado'}
                      </li>
                      <li className="flex items-center gap-2 text-sm text-[#737373]">
                        <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                        {board2.operatingVoltage === '5 V'
                          ? 'Mayor consumo'
                          : 'Compatibilidad limitada'}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final Recommendation */}
          <section className="mb-16">
            <div className="rounded-lg bg-[#f9f9f9] p-8 dark:bg-[#1a1a1a]">
              <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-[#0a0a0a] dark:text-white">
                <Trophy className="h-6 w-6 text-yellow-500" />
                {ui.sections.recommendation}
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-[#0070f3] pl-4">
                  <h3 className="mb-2 font-semibold text-[#0a0a0a] dark:text-white">
                    {ui.labels.bestFor} {board1.name}:
                  </h3>
                  <p className="text-[#737373]">
                    {board1.applications[locale as keyof typeof board1.applications]
                      .slice(0, 3)
                      .join(', ')}
                  </p>
                </div>

                <div className="border-l-4 border-[#0070f3] pl-4">
                  <h3 className="mb-2 font-semibold text-[#0a0a0a] dark:text-white">
                    {ui.labels.bestFor} {board2.name}:
                  </h3>
                  <p className="text-[#737373]">
                    {board2.applications[locale as keyof typeof board2.applications]
                      .slice(0, 3)
                      .join(', ')}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Other Comparisons */}
          <section className="mb-16">
            <h2 className="mb-8 text-2xl font-semibold tracking-tight text-[#0a0a0a] dark:text-white">
              Otras Comparativas
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {POPULAR_COMPARISONS.filter(
                (comp) => comp.board1 !== board1Id || comp.board2 !== board2Id
              )
                .slice(0, 6)
                .map((comp) => {
                  const b1 = ARDUINO_BOARDS.find((b) => b.id === comp.board1)
                  const b2 = ARDUINO_BOARDS.find((b) => b.id === comp.board2)
                  if (!b1 || !b2) return null

                  return (
                    <a
                      key={`${comp.board1}-${comp.board2}`}
                      href={`/${locale}/arduino/comparisons/${comp.board1}-vs-${comp.board2}`}
                      className="block rounded-lg border border-[#e5e5e5] p-4 transition-colors hover:border-[#0070f3] dark:border-[#333333]"
                    >
                      <div className="text-sm font-medium text-[#0a0a0a] dark:text-white">
                        {b1.name} vs {b2.name}
                      </div>
                      <div className="mt-1 text-xs text-[#737373]">
                        {b1.microcontroller} vs {b2.microcontroller}
                      </div>
                    </a>
                  )
                })}
            </div>
          </section>

          {/* Ad Section */}
          <AdComponent slot={SLOTS[1]} />

          {/* Comments and Navigation */}
          <div className="mt-16 space-y-8">
            <SupabaseCommentsWrapper slug={`/arduino/comparisons/${comparisons}`} />
            <ScrollTopAndComment />
          </div>
        </div>
      </ArduinoSidebar>
    </SectionContainerWithAds>
  )
}
