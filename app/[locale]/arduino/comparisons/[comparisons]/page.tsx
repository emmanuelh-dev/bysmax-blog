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
import QuickComparisonButtons from '@/components/arduino/QuickComparisonButtons'

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

  const title = `${board1.name} vs ${board2.name}: Diferencias y Características - Comparativa Completa`

  const description = `Compara las diferencias y características entre ${board1.name} y ${board2.name}. Especificaciones técnicas, rendimiento, conectividad y recomendaciones para elegir el mejor microcontrolador para tu proyecto.`

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

        <div className="mx-auto max-w-4xl">
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-[#737373]">
              <li>
                <a href={`/${locale}`} className="transition-colors hover:text-[#0070f3]">
                  {locale === 'en' ? 'Home' : locale === 'pt' ? 'Início' : 'Inicio'}
                </a>
              </li>
              <li className="mx-2">/</li>
              <li>
                <a href={`/${locale}/arduino`} className="transition-colors hover:text-[#0070f3]">
                  Arduino
                </a>
              </li>
              <li className="mx-2">/</li>
              <li className="font-medium text-[#0a0a0a] dark:text-white">Comparaciones</li>
            </ol>

            {/* Hero Section */}
            <header className="mb-16 text-center">
              <h1 className="mb-6 text-4xl font-semibold leading-tight tracking-tight text-[#0a0a0a] dark:text-white">
                {board1.name} <span className="text-[#0070f3]">vs</span> {board2.name}
              </h1>
              <p className="mb-2 text-lg font-medium text-[#0a0a0a] dark:text-white">
                Diferencias y Características
              </p>
              <p className="mx-auto max-w-2xl leading-relaxed text-[#737373]">
                Comparativa completa entre {board1.name} y {board2.name}. Analizamos
                especificaciones técnicas, rendimiento, conectividad y te ayudamos a elegir el mejor
                microcontrolador para tu proyecto.
              </p>
            </header>
            <QuickComparisonButtons locale={locale} />
          </nav>
          {/* Quick Comparison Cards */}
          <div className="mb-16 grid gap-8 md:grid-cols-2">
            {/* Board 1 */}
            <div
              className={`rounded-lg border p-8 transition-all duration-200 ${
                comparisonData.winner.overall === 'board1'
                  ? 'border-[#0070f3] bg-white shadow-sm dark:bg-[#0a0a0a]'
                  : 'border-[#e5e5e5] bg-white dark:border-[#333333] dark:bg-[#0a0a0a]'
              }`}
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="relative">
                  <Image
                    src={board1.image || '/static/images/arduino-placeholder.png'}
                    width={80}
                    height={60}
                    alt={board1.name}
                    className="rounded-md"
                  />
                  {comparisonData.winner.overall === 'board1' && (
                    <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#0070f3]">
                      <Trophy className="h-3 w-3 text-white" />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h2 className="mb-1 text-xl font-semibold text-[#0a0a0a] dark:text-white">
                    {board1.name}
                  </h2>
                  <p className="text-sm text-[#737373]">{board1.microcontroller}</p>
                </div>
              </div>

              <p className="mb-6 text-sm leading-relaxed text-[#737373]">
                {board1.description[locale as keyof typeof board1.description]}
              </p>

              <div className="flex gap-3">
                <a
                  href={`/${locale}/arduino/${board1.id}`}
                  className="flex-1 rounded-md border border-[#e5e5e5] px-4 py-2.5 text-center text-sm font-medium transition-all duration-200 hover:border-[#0070f3] hover:text-[#0070f3] dark:border-[#333333] dark:hover:border-[#0070f3]"
                >
                  Ver detalles
                </a>
                <a
                  href={board1.officialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-md bg-[#0070f3] px-4 py-2.5 text-center text-sm font-medium text-white transition-all duration-200 hover:bg-[#0060df]"
                >
                  Comprar ahora
                </a>
              </div>
            </div>

            {/* Board 2 */}
            <div
              className={`rounded-lg border p-8 transition-all duration-200 ${
                comparisonData.winner.overall === 'board2'
                  ? 'border-[#0070f3] bg-white shadow-sm dark:bg-[#0a0a0a]'
                  : 'border-[#e5e5e5] bg-white dark:border-[#333333] dark:bg-[#0a0a0a]'
              }`}
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="relative">
                  <Image
                    src={board2.image || '/static/images/arduino-placeholder.png'}
                    width={80}
                    height={60}
                    alt={board2.name}
                    className="rounded-md"
                  />
                  {comparisonData.winner.overall === 'board2' && (
                    <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#0070f3]">
                      <Trophy className="h-3 w-3 text-white" />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h2 className="mb-1 text-xl font-semibold text-[#0a0a0a] dark:text-white">
                    {board2.name}
                  </h2>
                  <p className="text-sm text-[#737373]">{board2.microcontroller}</p>
                </div>
              </div>

              <p className="mb-6 text-sm leading-relaxed text-[#737373]">
                {board2.description[locale as keyof typeof board2.description]}
              </p>

              <div className="flex gap-3">
                <a
                  href={`/${locale}/arduino/${board2.id}`}
                  className="flex-1 rounded-md border border-[#e5e5e5] px-4 py-2.5 text-center text-sm font-medium transition-all duration-200 hover:border-[#0070f3] hover:text-[#0070f3] dark:border-[#333333] dark:hover:border-[#0070f3]"
                >
                  Ver detalles
                </a>
                <a
                  href={board2.officialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-md bg-[#0070f3] px-4 py-2.5 text-center text-sm font-medium text-white transition-all duration-200 hover:bg-[#0060df]"
                >
                  Comprar ahora
                </a>
              </div>
            </div>
          </div>
          {/* Score Summary */}
          <div className="mb-16 rounded-lg border border-[#e5e5e5] bg-white p-8 text-center dark:border-[#333333] dark:bg-[#0a0a0a]">
            <h3 className="mb-6 text-lg font-semibold text-[#0a0a0a] dark:text-white">
              Resultado de la Comparativa
            </h3>
            <div className="flex items-center justify-center gap-12">
              <div className="text-center">
                <div className="mb-1 text-3xl font-semibold text-[#0a0a0a] dark:text-white">
                  {comparisonData.scores.board1}
                </div>
                <div className="text-sm text-[#737373]">{board1.name}</div>
              </div>
              <div className="h-12 w-px bg-[#e5e5e5] dark:bg-[#333333]"></div>
              <div className="text-center">
                <div className="mb-1 text-3xl font-semibold text-[#0a0a0a] dark:text-white">
                  {comparisonData.scores.board2}
                </div>
                <div className="text-sm text-[#737373]">{board2.name}</div>
              </div>
            </div>
          </div>
          {/* Ad Section */}
          <div className="mb-16">
            <AdComponent slot={SLOTS[0]} />
          </div>

          {/* Comparison Table */}
          <section className="mb-16">
            <h2 className="mb-8 text-2xl font-semibold text-[#0a0a0a] dark:text-white">
              Tabla de Especificaciones Técnicas
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full rounded-lg border border-[#e5e5e5] bg-white dark:border-[#333333] dark:bg-[#0a0a0a]">
                <thead className="bg-[#f9f9f9] dark:bg-[#1a1a1a]">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#0a0a0a] dark:text-white">
                      Característica
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-[#0a0a0a] dark:text-white">
                      {board1.name}
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-[#0a0a0a] dark:text-white">
                      {board2.name}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e5e5e5] dark:divide-[#333333]">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-[#0a0a0a] dark:text-white">
                      Microcontrolador
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-[#737373]">
                      {board1.microcontroller}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-[#737373]">
                      {board2.microcontroller}
                    </td>
                  </tr>
                  <tr className="bg-[#f9f9f9] dark:bg-[#1a1a1a]">
                    <td className="px-6 py-4 text-sm font-medium text-[#0a0a0a] dark:text-white">
                      Frecuencia de reloj
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-[#737373]">
                      {board1.clockSpeed}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-[#737373]">
                      {board2.clockSpeed}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-[#0a0a0a] dark:text-white">
                      Arquitectura
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-[#737373]">
                      {board1.architecture}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-[#737373]">
                      {board2.architecture}
                    </td>
                  </tr>
                  <tr className="bg-[#f9f9f9] dark:bg-[#1a1a1a]">
                    <td className="px-6 py-4 text-sm font-medium text-[#0a0a0a] dark:text-white">
                      Memoria Flash
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-[#737373]">
                      {board1.flashMemory}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-[#737373]">
                      {board2.flashMemory}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-[#0a0a0a] dark:text-white">
                      SRAM
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-[#737373]">{board1.sram}</td>
                    <td className="px-6 py-4 text-center text-sm text-[#737373]">{board2.sram}</td>
                  </tr>
                  <tr className="bg-[#f9f9f9] dark:bg-[#1a1a1a]">
                    <td className="px-6 py-4 text-sm font-medium text-[#0a0a0a] dark:text-white">
                      EEPROM
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-[#737373]">
                      {board1.eeprom}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-[#737373]">
                      {board2.eeprom}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-[#0a0a0a] dark:text-white">
                      Pines digitales I/O
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-[#737373]">
                      {board1.digitalIO}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-[#737373]">
                      {board2.digitalIO}
                    </td>
                  </tr>
                  <tr className="bg-[#f9f9f9] dark:bg-[#1a1a1a]">
                    <td className="px-6 py-4 text-sm font-medium text-[#0a0a0a] dark:text-white">
                      Pines analógicos
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-[#737373]">
                      {board1.analogIO}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-[#737373]">
                      {board2.analogIO}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-[#0a0a0a] dark:text-white">
                      Voltaje de operación
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-[#737373]">
                      {board1.operatingVoltage}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-[#737373]">
                      {board2.operatingVoltage}
                    </td>
                  </tr>
                  <tr className="bg-[#f9f9f9] dark:bg-[#1a1a1a]">
                    <td className="px-6 py-4 text-sm font-medium text-[#0a0a0a] dark:text-white">
                      Voltaje de entrada
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-[#737373]">
                      {board1.inputVoltage}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-[#737373]">
                      {board2.inputVoltage}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-[#0a0a0a] dark:text-white">
                      Comunicación
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-[#737373]">
                      <div className="flex flex-wrap justify-center gap-1">
                        {board1.communication.split(', ').map((comm, idx) => (
                          <span
                            key={idx}
                            className="rounded-md border border-[#e5e5e5] bg-white px-2 py-1 text-xs font-medium dark:border-[#333333] dark:bg-[#0a0a0a]"
                          >
                            {comm}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-[#737373]">
                      <div className="flex flex-wrap justify-center gap-1">
                        {board2.communication.split(', ').map((comm, idx) => (
                          <span
                            key={idx}
                            className="rounded-md border border-[#e5e5e5] bg-white px-2 py-1 text-xs font-medium dark:border-[#333333] dark:bg-[#0a0a0a]"
                          >
                            {comm}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-[#f9f9f9] dark:bg-[#1a1a1a]">
                    <td className="px-6 py-4 text-sm font-medium text-[#0a0a0a] dark:text-white">
                      Dimensiones
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-[#737373]">
                      {board1.dimensions}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-[#737373]">
                      {board2.dimensions}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-[#0a0a0a] dark:text-white">
                      USB
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-[#737373]">{board1.usb}</td>
                    <td className="px-6 py-4 text-center text-sm text-[#737373]">{board2.usb}</td>
                  </tr>
                  <tr className="bg-[#f9f9f9] dark:bg-[#1a1a1a]">
                    <td className="px-6 py-4 text-sm font-medium text-[#0a0a0a] dark:text-white">
                      Precio aproximado
                    </td>
                    <td className="px-6 py-4 text-center text-sm font-semibold text-[#0070f3]">
                      $25-35 USD
                    </td>
                    <td className="px-6 py-4 text-center text-sm font-semibold text-[#0070f3]">
                      $20-30 USD
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Detailed Comparison */}
          <section className="mb-16">
            <h2 className="mb-8 text-2xl font-semibold text-[#0a0a0a] dark:text-white">
              Comparación Técnica Detallada
            </h2>

            <div className="space-y-8">
              {Object.entries(ui.categories).map(([key, title]) => {
                if (key === 'overall') return null
                const winner = comparisonData.winner[key as keyof typeof comparisonData.winner]

                return (
                  <div
                    key={key}
                    className="rounded-lg border border-[#e5e5e5] bg-white p-8 dark:border-[#333333] dark:bg-[#0a0a0a]"
                  >
                    <div className="mb-6 flex items-center gap-3">
                      <div className="rounded-md bg-[#f9f9f9] p-2 dark:bg-[#1a1a1a]">
                        {getCategoryIcon(key)}
                      </div>
                      <h3 className="text-xl font-semibold text-[#0a0a0a] dark:text-white">
                        {title}
                      </h3>
                    </div>

                    <p className="mb-8 leading-relaxed text-[#737373]">
                      {ui.descriptions[`${key}Desc` as keyof typeof ui.descriptions]}
                    </p>

                    <div className="grid gap-6 lg:grid-cols-3">
                      {/* Board 1 specs */}
                      <div
                        className={`rounded-lg border p-6 transition-all duration-200 ${
                          winner === 'board1'
                            ? 'border-[#0070f3] bg-[#f8faff] dark:bg-[#0a1629]'
                            : 'border-[#e5e5e5] bg-[#f9f9f9] dark:border-[#333333] dark:bg-[#1a1a1a]'
                        }`}
                      >
                        <div className="mb-4 flex items-center justify-between">
                          <span className="font-semibold text-[#0a0a0a] dark:text-white">
                            {board1.name}
                          </span>
                          {winner === 'board1' && (
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0070f3]">
                              <CheckCircle className="h-4 w-4 text-white" />
                            </div>
                          )}
                        </div>
                        <div className="space-y-3 text-sm">
                          {key === 'performance' && (
                            <>
                              <div className="flex justify-between">
                                <span className="text-[#737373]">CPU:</span>
                                <span className="font-medium">{board1.clockSpeed}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-[#737373]">Arquitectura:</span>
                                <span className="font-medium">{board1.architecture}</span>
                              </div>
                            </>
                          )}
                          {key === 'memory' && (
                            <>
                              <div className="flex justify-between">
                                <span className="text-[#737373]">Flash:</span>
                                <span className="font-medium">{board1.flashMemory}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-[#737373]">SRAM:</span>
                                <span className="font-medium">{board1.sram}</span>
                              </div>
                            </>
                          )}
                          {key === 'io' && (
                            <>
                              <div className="flex justify-between">
                                <span className="text-[#737373]">Digital:</span>
                                <span className="font-medium">{board1.digitalIO}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-[#737373]">Analógico:</span>
                                <span className="font-medium">{board1.analogIO}</span>
                              </div>
                            </>
                          )}
                          {key === 'power' && (
                            <>
                              <div className="flex justify-between">
                                <span className="text-[#737373]">Operación:</span>
                                <span className="font-medium">{board1.operatingVoltage}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-[#737373]">Entrada:</span>
                                <span className="font-medium">{board1.inputVoltage}</span>
                              </div>
                            </>
                          )}
                          {key === 'connectivity' && (
                            <div className="flex flex-wrap gap-2">
                              {board1.communication.split(', ').map((comm, idx) => (
                                <span
                                  key={idx}
                                  className="rounded-md border border-[#e5e5e5] bg-white px-3 py-1 text-xs font-medium dark:border-[#333333] dark:bg-[#0a0a0a]"
                                >
                                  {comm}
                                </span>
                              ))}
                            </div>
                          )}
                          {key === 'price' && (
                            <div className="text-lg font-semibold text-[#0070f3]">$25-35 USD</div>
                          )}
                        </div>
                      </div>

                      {/* Winner indicator */}
                      <div className="flex items-center justify-center">
                        <div className="text-center">
                          {winner === 'tie' ? (
                            <div className="text-[#737373]">
                              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-[#e5e5e5] bg-[#f9f9f9] dark:border-[#333333] dark:bg-[#1a1a1a]">
                                <MinusCircle className="h-6 w-6" />
                              </div>
                              <span className="text-sm font-medium">Empate</span>
                            </div>
                          ) : (
                            <div className="text-[#0070f3]">
                              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#0070f3]">
                                <CheckCircle className="h-6 w-6 text-white" />
                              </div>
                              <span className="text-sm font-medium">
                                {winner === 'board1' ? board1.name : board2.name} gana
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Board 2 specs */}
                      <div
                        className={`rounded-lg border p-6 transition-all duration-200 ${
                          winner === 'board2'
                            ? 'border-[#0070f3] bg-[#f8faff] dark:bg-[#0a1629]'
                            : 'border-[#e5e5e5] bg-[#f9f9f9] dark:border-[#333333] dark:bg-[#1a1a1a]'
                        }`}
                      >
                        <div className="mb-4 flex items-center justify-between">
                          <span className="font-semibold text-[#0a0a0a] dark:text-white">
                            {board2.name}
                          </span>
                          {winner === 'board2' && (
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0070f3]">
                              <CheckCircle className="h-4 w-4 text-white" />
                            </div>
                          )}
                        </div>
                        <div className="space-y-3 text-sm">
                          {key === 'performance' && (
                            <>
                              <div className="flex justify-between">
                                <span className="text-[#737373]">CPU:</span>
                                <span className="font-medium">{board2.clockSpeed}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-[#737373]">Arquitectura:</span>
                                <span className="font-medium">{board2.architecture}</span>
                              </div>
                            </>
                          )}
                          {key === 'memory' && (
                            <>
                              <div className="flex justify-between">
                                <span className="text-[#737373]">Flash:</span>
                                <span className="font-medium">{board2.flashMemory}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-[#737373]">SRAM:</span>
                                <span className="font-medium">{board2.sram}</span>
                              </div>
                            </>
                          )}
                          {key === 'io' && (
                            <>
                              <div className="flex justify-between">
                                <span className="text-[#737373]">Digital:</span>
                                <span className="font-medium">{board2.digitalIO}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-[#737373]">Analógico:</span>
                                <span className="font-medium">{board2.analogIO}</span>
                              </div>
                            </>
                          )}
                          {key === 'power' && (
                            <>
                              <div className="flex justify-between">
                                <span className="text-[#737373]">Operación:</span>
                                <span className="font-medium">{board2.operatingVoltage}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-[#737373]">Entrada:</span>
                                <span className="font-medium">{board2.inputVoltage}</span>
                              </div>
                            </>
                          )}
                          {key === 'connectivity' && (
                            <div className="flex flex-wrap gap-2">
                              {board2.communication.split(', ').map((comm, idx) => (
                                <span
                                  key={idx}
                                  className="rounded-md border border-[#e5e5e5] bg-white px-3 py-1 text-xs font-medium dark:border-[#333333] dark:bg-[#0a0a0a]"
                                >
                                  {comm}
                                </span>
                              ))}
                            </div>
                          )}
                          {key === 'price' && (
                            <div className="text-lg font-semibold text-[#0070f3]">$20-30 USD</div>
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
            <h2 className="mb-8 text-2xl font-semibold text-[#0a0a0a] dark:text-white">
              Ventajas y Desventajas
            </h2>
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Board 1 Pros/Cons */}
              <div className="rounded-lg border border-[#e5e5e5] bg-white p-8 dark:border-[#333333] dark:bg-[#0a0a0a]">
                <h3 className="mb-8 text-xl font-semibold text-[#0a0a0a] dark:text-white">
                  {board1.name}
                </h3>

                <div className="space-y-8">
                  <div>
                    <h4 className="mb-4 flex items-center gap-3 text-lg font-medium text-[#0a0a0a] dark:text-white">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                      </div>
                      Ventajas
                    </h4>
                    <ul className="space-y-3">
                      {board1.features[locale as keyof typeof board1.features]
                        .slice(0, 4)
                        .map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500"></div>
                            <span className="leading-relaxed text-[#737373]">{feature}</span>
                          </li>
                        ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-4 flex items-center gap-3 text-lg font-medium text-[#0a0a0a] dark:text-white">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
                        <XCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                      </div>
                      Desventajas
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500"></div>
                        <span className="leading-relaxed text-[#737373]">
                          {board1.clockSpeed === '16 MHz'
                            ? 'Velocidad de procesamiento limitada'
                            : 'Precio más elevado que alternativas básicas'}
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500"></div>
                        <span className="leading-relaxed text-[#737373]">
                          {board1.operatingVoltage === '5 V'
                            ? 'Mayor consumo energético'
                            : 'Compatibilidad limitada con sensores 5V'}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Board 2 Pros/Cons */}
              <div className="rounded-lg border border-[#e5e5e5] bg-white p-8 dark:border-[#333333] dark:bg-[#0a0a0a]">
                <h3 className="mb-8 text-xl font-semibold text-[#0a0a0a] dark:text-white">
                  {board2.name}
                </h3>

                <div className="space-y-8">
                  <div>
                    <h4 className="mb-4 flex items-center gap-3 text-lg font-medium text-[#0a0a0a] dark:text-white">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                      </div>
                      Ventajas
                    </h4>
                    <ul className="space-y-3">
                      {board2.features[locale as keyof typeof board2.features]
                        .slice(0, 4)
                        .map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500"></div>
                            <span className="leading-relaxed text-[#737373]">{feature}</span>
                          </li>
                        ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-4 flex items-center gap-3 text-lg font-medium text-[#0a0a0a] dark:text-white">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
                        <XCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                      </div>
                      Desventajas
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500"></div>
                        <span className="leading-relaxed text-[#737373]">
                          {board2.clockSpeed === '16 MHz'
                            ? 'Velocidad de procesamiento limitada'
                            : 'Precio más elevado que alternativas básicas'}
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500"></div>
                        <span className="leading-relaxed text-[#737373]">
                          {board2.operatingVoltage === '5 V'
                            ? 'Mayor consumo energético'
                            : 'Compatibilidad limitada con sensores 5V'}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Final Recommendation */}
          <section className="mb-16">
            <div className="rounded-lg border border-[#e5e5e5] bg-white p-8 dark:border-[#333333] dark:bg-[#0a0a0a]">
              <h2 className="mb-8 flex items-center gap-3 text-2xl font-semibold text-[#0a0a0a] dark:text-white">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0070f3]">
                  <Trophy className="h-5 w-5 text-white" />
                </div>
                Recomendaciones Finales
              </h2>

              <div className="grid gap-8 lg:grid-cols-2">
                <div className="rounded-lg border border-[#e5e5e5] bg-[#f9f9f9] p-6 dark:border-[#333333] dark:bg-[#1a1a1a]">
                  <h3 className="mb-4 font-semibold text-[#0a0a0a] dark:text-white">
                    ¿Cuándo elegir {board1.name}?
                  </h3>
                  <ul className="space-y-3">
                    {board1.applications[locale as keyof typeof board1.applications]
                      .slice(0, 3)
                      .map((app, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0070f3]"></div>
                          <span className="leading-relaxed text-[#737373]">{app}</span>
                        </li>
                      ))}
                  </ul>
                </div>

                <div className="rounded-lg border border-[#e5e5e5] bg-[#f9f9f9] p-6 dark:border-[#333333] dark:bg-[#1a1a1a]">
                  <h3 className="mb-4 font-semibold text-[#0a0a0a] dark:text-white">
                    ¿Cuándo elegir {board2.name}?
                  </h3>
                  <ul className="space-y-3">
                    {board2.applications[locale as keyof typeof board2.applications]
                      .slice(0, 3)
                      .map((app, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0070f3]"></div>
                          <span className="leading-relaxed text-[#737373]">{app}</span>
                        </li>
                      ))}
                  </ul>
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
