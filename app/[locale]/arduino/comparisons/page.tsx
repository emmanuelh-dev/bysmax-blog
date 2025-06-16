import React from 'react'
import { ARDUINO_BOARDS } from '@/data/arduinos'
import { getComparisonUITranslation, POPULAR_COMPARISONS } from '@/data/arduino-comparison'
import ArduinoSidebar from '@/components/arduino/ArduinoSidebar'
import ComparisonSelector from '@/components/arduino/ComparisonSelector'
import { genPageMetadata } from '@/app/[locale]/seo'
import { SectionContainerWithAds } from '@/components/SectionContainer'
import Script from 'next/script'
import { LocaleTypes } from '../../i18n/settings'
import { SLOTS } from '@/data/ad-slots'
import AdComponent from '@/data/AdComponent'
import { Trophy, ArrowRight, Zap, HardDrive } from 'lucide-react'
import Link from 'next/link'
import Image from '@/components/Image'

interface Props {
  params: { locale: LocaleTypes }
}

export async function generateMetadata({ params: { locale } }: Props) {
  const ui = getComparisonUITranslation(locale as 'es' | 'en' | 'pt')

  const title =
    locale === 'es'
      ? 'Comparativas Arduino - Encuentra la Mejor Placa 2025'
      : locale === 'en'
        ? 'Arduino Comparisons - Find the Best Board 2025'
        : 'Comparações Arduino - Encontre a Melhor Placa 2025'

  const description =
    locale === 'es'
      ? 'Compara todas las placas Arduino disponibles. Especificaciones detalladas, pros y contras, y recomendaciones de expertos para elegir la mejor opción.'
      : locale === 'en'
        ? 'Compare all available Arduino boards. Detailed specifications, pros and cons, and expert recommendations to choose the best option.'
        : 'Compare todas as placas Arduino disponíveis. Especificações detalhadas, prós e contras, e recomendações de especialistas para escolher a melhor opção.'

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

export default function ArduinoComparisonsPage({ params: { locale } }: Props) {
  const ui = getComparisonUITranslation(locale as 'es' | 'en' | 'pt')

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
        name: locale === 'en' ? 'Comparisons' : locale === 'pt' ? 'Comparações' : 'Comparativas',
        item: `https://bysmax.com/${locale}/arduino/comparisons`,
      },
    ],
  }

  const pageTitle =
    locale === 'es'
      ? 'Comparativas de Placas Arduino'
      : locale === 'en'
        ? 'Arduino Board Comparisons'
        : 'Comparações de Placas Arduino'

  const pageDescription =
    locale === 'es'
      ? 'Encuentra la placa Arduino perfecta para tu proyecto. Comparamos especificaciones, rendimiento, precio y características de todas las placas disponibles.'
      : locale === 'en'
        ? 'Find the perfect Arduino board for your project. We compare specifications, performance, price and features of all available boards.'
        : 'Encontre a placa Arduino perfeita para seu projeto. Comparamos especificações, desempenho, preço e características de todas as placas disponíveis.'

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
          <header className="mb-16 text-center">
            <h1 className="mb-6 text-4xl font-semibold tracking-tight text-[#0a0a0a] dark:text-white">
              {pageTitle}
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-[#737373]">{pageDescription}</p>

            <div className="flex justify-center">
              <Image
                src="/static/images/arduino-comparison.png"
                width={600}
                height={300}
                alt="Arduino Comparisons"
                className="rounded-lg"
              />
            </div>
          </header>

          {/* Ad Section */}
          <AdComponent slot={SLOTS[0]} />

          {/* Popular Comparisons */}
          <section className="mb-16">
            <h2 className="mb-8 flex items-center gap-3 text-2xl font-semibold tracking-tight text-[#0a0a0a] dark:text-white">
              <Trophy className="h-6 w-6 text-yellow-500" />
              {locale === 'es'
                ? 'Comparativas Más Populares'
                : locale === 'en'
                  ? 'Most Popular Comparisons'
                  : 'Comparações Mais Populares'}
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {POPULAR_COMPARISONS.map((comp) => {
                const board1 = ARDUINO_BOARDS.find((b) => b.id === comp.board1)
                const board2 = ARDUINO_BOARDS.find((b) => b.id === comp.board2)

                if (!board1 || !board2) return null

                return (
                  <a
                    key={`${comp.board1}-${comp.board2}`}
                    href={`/${locale}/arduino/comparisons/${comp.board1}-vs-${comp.board2}`}
                    className="group block rounded-lg border border-[#e5e5e5] p-6 transition-all duration-200 hover:border-[#0070f3] hover:shadow-sm dark:border-[#333333] dark:hover:border-[#0070f3]"
                  >
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-[#0a0a0a] transition-colors group-hover:text-[#0070f3] dark:text-white">
                        {board1.name} <span className="text-[#737373]">vs</span> {board2.name}
                      </h3>
                      <p className="mt-1 text-sm text-[#737373]">
                        {board1.microcontroller} vs {board2.microcontroller}
                      </p>
                    </div>

                    <div className="mb-4 grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Image
                          src={board1.image || '/static/images/arduino-placeholder.png'}
                          width={40}
                          height={30}
                          alt={board1.name}
                          className="rounded"
                        />
                        <div className="text-xs">
                          <div className="font-medium">{board1.clockSpeed}</div>
                          <div className="text-[#737373]">{board1.flashMemory}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Image
                          src={board2.image || '/static/images/arduino-placeholder.png'}
                          width={40}
                          height={30}
                          alt={board2.name}
                          className="rounded"
                        />
                        <div className="text-xs">
                          <div className="font-medium">{board2.clockSpeed}</div>
                          <div className="text-[#737373]">{board2.flashMemory}</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#737373]">
                        {locale === 'es'
                          ? 'Ver comparativa'
                          : locale === 'en'
                            ? 'View comparison'
                            : 'Ver comparação'}
                      </span>
                      <ArrowRight className="h-4 w-4 text-[#737373] transition-colors group-hover:text-[#0070f3]" />
                    </div>
                  </a>
                )
              })}
            </div>
          </section>

          {/* Comparison Categories */}
          <section className="mb-16">
            <h2 className="mb-8 text-2xl font-semibold tracking-tight text-[#0a0a0a] dark:text-white">
              {locale === 'es'
                ? 'Comparar por Categorías'
                : locale === 'en'
                  ? 'Compare by Categories'
                  : 'Comparar por Categorias'}
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Performance Focused */}
              <div className="rounded-lg border border-[#e5e5e5] p-6 dark:border-[#333333]">
                <div className="mb-4 flex items-center gap-3">
                  <Zap className="h-5 w-5 text-[#0070f3]" />
                  <h3 className="font-semibold text-[#0a0a0a] dark:text-white">
                    {locale === 'es'
                      ? 'Alto Rendimiento'
                      : locale === 'en'
                        ? 'High Performance'
                        : 'Alto Desempenho'}
                  </h3>
                </div>
                <p className="mb-4 text-sm text-[#737373]">
                  {locale === 'es'
                    ? 'Placas con mayor velocidad de procesamiento y arquitecturas avanzadas'
                    : locale === 'en'
                      ? 'Boards with higher processing speed and advanced architectures'
                      : 'Placas com maior velocidade de processamento e arquiteturas avançadas'}
                </p>
                <div className="space-y-2">
                  <Link
                    href={`/${locale}/arduino/comparisons/due-vs-portenta-h7`}
                    className="block text-sm text-[#0070f3] hover:underline"
                  >
                    Arduino Due vs Portenta H7
                  </Link>
                  <Link
                    href={`/${locale}/arduino/comparisons/uno-vs-due`}
                    className="block text-sm text-[#0070f3] hover:underline"
                  >
                    Arduino Uno vs Due
                  </Link>
                </div>
              </div>

              {/* Compact Size */}
              <div className="rounded-lg border border-[#e5e5e5] p-6 dark:border-[#333333]">
                <div className="mb-4 flex items-center gap-3">
                  <HardDrive className="h-5 w-5 text-[#0070f3]" />
                  <h3 className="font-semibold text-[#0a0a0a] dark:text-white">
                    {locale === 'es'
                      ? 'Formato Compacto'
                      : locale === 'en'
                        ? 'Compact Size'
                        : 'Formato Compacto'}
                  </h3>
                </div>
                <p className="mb-4 text-sm text-[#737373]">
                  {locale === 'es'
                    ? 'Placas pequeñas ideales para proyectos con espacio limitado'
                    : locale === 'en'
                      ? 'Small boards ideal for projects with limited space'
                      : 'Placas pequenas ideais para projetos com espaço limitado'}
                </p>
                <div className="space-y-2">
                  <Link
                    href={`/${locale}/arduino/comparisons/nano-vs-nano_every`}
                    className="block text-sm text-[#0070f3] hover:underline"
                  >
                    Arduino Nano vs Nano Every
                  </Link>
                  <Link
                    href={`/${locale}/arduino/comparisons/leonardo-vs-micro`}
                    className="block text-sm text-[#0070f3] hover:underline"
                  >
                    Arduino Leonardo vs Micro
                  </Link>
                </div>
              </div>

              {/* IoT Projects */}
              <div className="rounded-lg border border-[#e5e5e5] p-6 dark:border-[#333333]">
                <div className="mb-4 flex items-center gap-3">
                  <Trophy className="h-5 w-5 text-[#0070f3]" />
                  <h3 className="font-semibold text-[#0a0a0a] dark:text-white">
                    {locale === 'es'
                      ? 'Proyectos IoT'
                      : locale === 'en'
                        ? 'IoT Projects'
                        : 'Projetos IoT'}
                  </h3>
                </div>
                <p className="mb-4 text-sm text-[#737373]">
                  {locale === 'es'
                    ? 'Placas con conectividad inalámbrica integrada'
                    : locale === 'en'
                      ? 'Boards with integrated wireless connectivity'
                      : 'Placas com conectividade sem fio integrada'}
                </p>
                <div className="space-y-2">
                  <Link
                    href={`/${locale}/arduino/comparisons/mkr_wifi_1010-vs-mkr_zero`}
                    className="block text-sm text-[#0070f3] hover:underline"
                  >
                    MKR WiFi 1010 vs MKR Zero
                  </Link>
                  <Link
                    href={`/${locale}/arduino/comparisons/uno-vs-mkr_wifi_1010`}
                    className="block text-sm text-[#0070f3] hover:underline"
                  >
                    Arduino Uno vs MKR WiFi
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* All Boards Quick Compare */}
          <section className="mb-16">
            <h2 className="mb-8 text-2xl font-semibold tracking-tight text-[#0a0a0a] dark:text-white">
              {locale === 'es'
                ? 'Todas las Placas de un Vistazo'
                : locale === 'en'
                  ? 'All Boards at a Glance'
                  : 'Todas as Placas em um Olhar'}
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#e5e5e5] dark:border-[#333333]">
                    <th className="p-4 text-left font-medium text-[#0a0a0a] dark:text-white">
                      {locale === 'es' ? 'Placa' : locale === 'en' ? 'Board' : 'Placa'}
                    </th>
                    <th className="p-4 text-left font-medium text-[#0a0a0a] dark:text-white">
                      {locale === 'es' ? 'Velocidad' : locale === 'en' ? 'Speed' : 'Velocidade'}
                    </th>
                    <th className="p-4 text-left font-medium text-[#0a0a0a] dark:text-white">
                      {locale === 'es' ? 'Memoria' : locale === 'en' ? 'Memory' : 'Memória'}
                    </th>
                    <th className="p-4 text-left font-medium text-[#0a0a0a] dark:text-white">
                      {locale === 'es' ? 'Pines E/S' : locale === 'en' ? 'I/O Pins' : 'Pinos E/S'}
                    </th>
                    <th className="p-4 text-left font-medium text-[#0a0a0a] dark:text-white">
                      {locale === 'es' ? 'Comparar' : locale === 'en' ? 'Compare' : 'Comparar'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ARDUINO_BOARDS.slice(0, 6).map((board) => (
                    <tr key={board.id} className="border-b border-[#e5e5e5] dark:border-[#333333]">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <Image
                            src={board.image || '/static/images/arduino-placeholder.png'}
                            width={40}
                            height={30}
                            alt={board.name}
                            className="rounded"
                          />
                          <div>
                            <div className="font-medium text-[#0a0a0a] dark:text-white">
                              {board.name}
                            </div>
                            <div className="text-xs text-[#737373]">{board.microcontroller}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-sm text-[#737373]">{board.clockSpeed}</td>
                      <td className="p-4 text-sm text-[#737373]">{board.flashMemory}</td>
                      <td className="p-4 text-sm text-[#737373]">{board.digitalIO}</td>
                      <td className="p-4">
                        <ComparisonSelector
                          currentBoardId={board.id}
                          locale={locale}
                          placeholder={
                            locale === 'es'
                              ? 'Seleccionar...'
                              : locale === 'en'
                                ? 'Select...'
                                : 'Selecionar...'
                          }
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Ad Section */}
          <AdComponent slot={SLOTS[1]} />
        </div>
      </ArduinoSidebar>
    </SectionContainerWithAds>
  )
}
