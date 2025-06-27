import React from 'react'
import {
  LOGICGATES,
  getLogicGateTranslation,
  type LogicGate,
  type LogicGateTranslations,
} from '@/data/logic-gates'
import { getUITranslation } from '@/data/logic-gates-ui'
import { notFound } from 'next/navigation'
import Sidebar from '../components/Sidebar'
import { Metadata } from 'next'
import Image from '@/components/Image'
import { LocaleTypes } from '../../i18n/settings'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import SupabaseCommentsWrapper from '@/components/comments/SupabaseCommentsWrapper'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { SectionContainerWithAds } from '@/components/SectionContainer'
import { SLOTS } from '@/data/ad-slots'
import AdComponent from '@/data/AdComponent'

const Recommended = dynamic(() => import('@/app/[locale]/Recommended'), {
  ssr: false,
})

interface Props {
  params: { slug: string[]; locale: LocaleTypes }
}

interface ExtendedLogicGate extends LogicGateTranslations {
  url: string
  datasheet: string
  pdf: string
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string[]; locale: LocaleTypes }
}): Promise<Metadata | undefined> {
  const slug = decodeURI(params.slug.join('/'))
  const page = getLogicGateTranslation(slug, params.locale as 'es' | 'en' | 'pt')
  const ui = getUITranslation(params.locale as 'es' | 'en' | 'pt')

  if (!page) return

  // Enhanced title with circuit number for better SEO
  const circuitNumber = slug.match(/\d{4}/)?.[0] || ''
  const title =
    params.locale === 'es'
      ? `${page.heading} ${circuitNumber} - Datasheet, Tabla de Verdad y Diagrama | Compuerta ${page.type.toUpperCase()}`
      : params.locale === 'pt'
        ? `${page.heading} ${circuitNumber} - Datasheet, Tabela de Verdade e Diagrama | Porta ${page.type.toUpperCase()}`
        : `${page.heading} ${circuitNumber} - Datasheet, Truth Table and Diagram | ${page.type.toUpperCase()} Gate`

  const description =
    params.locale === 'es'
      ? `${page.heading} ${circuitNumber}: Datasheet completo con tabla de verdad, diagrama, características eléctricas y aplicaciones. Compuerta ${page.type.toUpperCase()} ${page.configuration}. Función booleana: ${page.booleanFunction}`
      : params.locale === 'pt'
        ? `${page.heading} ${circuitNumber}: Datasheet completo com tabela de verdade, diagrama, características elétricas e aplicações. Porta ${page.type.toUpperCase()} ${page.configuration}. Função booleana: ${page.booleanFunction}`
        : `${page.heading} ${circuitNumber}: Complete datasheet with truth table, diagram, electrical characteristics and applications. ${page.type.toUpperCase()} gate ${page.configuration}. Boolean function: ${page.booleanFunction}`

  const keywords =
    params.locale === 'es'
      ? [
          `${page.heading.toLowerCase()}`,
          `compuerta ${page.type.toLowerCase()} ${circuitNumber}`,
          `${circuitNumber} compuerta`,
          `${circuitNumber} tabla de verdad`,
          `compuerta ${page.type.toLowerCase()}`,
          `datasheet ${circuitNumber}`,
          `circuito integrado ${circuitNumber}`,
          `compuerta ${page.type.toLowerCase()} datasheet`,
          `tabla de verdad compuerta ${page.type.toLowerCase()}`,
          `${circuitNumber} diagrama`,
          'compuertas logicas',
          'circuitos integrados',
          ...page.applications.slice(0, 3),
        ]
      : params.locale === 'pt'
        ? [
            `${page.heading.toLowerCase()}`,
            `porta ${page.type.toLowerCase()} ${circuitNumber}`,
            `${circuitNumber} porta`,
            `${circuitNumber} tabela de verdade`,
            `porta ${page.type.toLowerCase()}`,
            `datasheet ${circuitNumber}`,
            `circuito integrado ${circuitNumber}`,
            'portas logicas',
            'circuitos integrados',
          ]
        : [
            `${page.heading.toLowerCase()}`,
            `${page.type.toLowerCase()} gate ${circuitNumber}`,
            `${circuitNumber} gate`,
            `${circuitNumber} truth table`,
            `${page.type.toLowerCase()} gate`,
            `datasheet ${circuitNumber}`,
            `integrated circuit ${circuitNumber}`,
            'logic gates',
            'integrated circuits',
          ]

  const imageUrl = page.datasheet.startsWith('http')
    ? page.datasheet
    : `https://bysmax.com${page.datasheet}`

  return {
    title: title,
    description: description,
    keywords: keywords,
    openGraph: {
      title: title,
      description: description,
      siteName: 'Bysmax',
      locale: params.locale === 'en' ? 'en_US' : params.locale === 'pt' ? 'pt_BR' : 'es_MX',
      type: 'article',
      url: `https://bysmax.com/${params.locale}/compuertas-logicas/${slug}`,
      images: [
        {
          url: imageUrl,
          width: 1100,
          height: 400,
          alt:
            params.locale === 'es'
              ? `${page.heading} ${circuitNumber} - Datasheet completo con tabla de verdad y diagrama`
              : params.locale === 'pt'
                ? `${page.heading} ${circuitNumber} - Datasheet completo com tabela de verdade e diagrama`
                : `${page.heading} ${circuitNumber} - Complete datasheet with truth table and diagram`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [imageUrl],
    },
  }
}

export const generateStaticParams = async () => {
  const paths = LOGICGATES.map((p) => ({ slug: p.url.split('/') }))
  return paths
}

export default async function Page({ params: { locale, slug: slugArray } }: Props) {
  const decodeSlug = decodeURI(slugArray.join('/'))
  const page = getLogicGateTranslation(decodeSlug, locale as 'es' | 'en' | 'pt')
  const ui = getUITranslation(locale as 'es' | 'en' | 'pt')

  if (!page) return notFound()

  // Construct base URL dynamically if needed, otherwise hardcode
  const siteBaseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bysmax.com'
  const pageUrl = `${siteBaseUrl}/${locale}/compuertas-logicas/${page.url}`
  const logoUrl = `${siteBaseUrl}/static/images/logo.png`
  const imageUrl = page.datasheet.startsWith('http')
    ? page.datasheet
    : `${siteBaseUrl}${page.datasheet}`

  const circuitNumber = decodeSlug.match(/\d{4}/)?.[0] || ''

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      locale === 'es'
        ? `${page.heading} ${circuitNumber} - Datasheet, Tabla de Verdad y Características`
        : locale === 'pt'
          ? `${page.heading} ${circuitNumber} - Datasheet, Tabela de Verdade e Características`
          : `${page.heading} ${circuitNumber} - Datasheet, Truth Table and Characteristics`,
    description:
      locale === 'es'
        ? `Datasheet completo del ${page.heading} ${circuitNumber} con tabla de verdad, diagrama, función booleana ${page.booleanFunction} y aplicaciones en electrónica digital`
        : locale === 'pt'
          ? `Datasheet completo do ${page.heading} ${circuitNumber} com tabela de verdade, diagrama, função booleana ${page.booleanFunction} e aplicações em eletrônica digital`
          : `Complete datasheet for ${page.heading} ${circuitNumber} with truth table, diagram, boolean function ${page.booleanFunction} and digital electronics applications`,
    image: imageUrl,
    keywords:
      locale === 'es'
        ? [
            `${page.heading.toLowerCase()}`,
            `compuerta ${page.type.toLowerCase()} ${circuitNumber}`,
            `${circuitNumber} compuerta`,
            `${circuitNumber} tabla de verdad`,
            `datasheet ${circuitNumber}`,
            'compuertas logicas',
            'circuitos integrados',
            ...page.applications.slice(0, 5),
          ].join(', ')
        : locale === 'pt'
          ? [
              `${page.heading.toLowerCase()}`,
              `porta ${page.type.toLowerCase()} ${circuitNumber}`,
              `${circuitNumber} porta`,
              `${circuitNumber} tabela de verdade`,
              `datasheet ${circuitNumber}`,
              'portas logicas',
              'circuitos integrados',
            ].join(', ')
          : [
              `${page.heading.toLowerCase()}`,
              `${page.type.toLowerCase()} gate ${circuitNumber}`,
              `${circuitNumber} gate`,
              `${circuitNumber} truth table`,
              `datasheet ${circuitNumber}`,
              'logic gates',
              'integrated circuits',
            ].join(', '),
    author: {
      '@type': 'Organization',
      name: 'Bysmax',
      url: siteBaseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Bysmax',
      logo: {
        '@type': 'ImageObject',
        url: logoUrl,
      },
    },
    datePublished: new Date().toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: locale === 'en' ? 'Home' : locale === 'pt' ? 'Início' : 'Inicio',
          item: `${siteBaseUrl}/${locale}`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name:
            locale === 'en'
              ? 'Logic Gates'
              : locale === 'pt'
                ? 'Portas Lógicas'
                : 'Compuertas Lógicas',
          item: `${siteBaseUrl}/${locale}/compuertas-logicas`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: `${page.heading} ${circuitNumber}`,
          item: pageUrl,
        },
      ],
    },
    about: {
      '@type': 'Thing',
      name:
        locale === 'es' ? 'Compuertas Lógicas' : locale === 'pt' ? 'Portas Lógicas' : 'Logic Gates',
      description:
        locale === 'es'
          ? 'Componentes fundamentales de la electrónica digital que realizan operaciones lógicas básicas'
          : locale === 'pt'
            ? 'Componentes fundamentais da eletrônica digital que realizam operações lógicas básicas'
            : 'Fundamental components of digital electronics that perform basic logical operations',
    },
  }

  return (
    <div>
      <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
        {/* Inject JSON-LD */}
        <Script
          id={`${page.url}-schema`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <Sidebar>
          <div className="mx-auto max-w-4xl">
            <ScrollTopAndComment />

            {/* Hero Section */}
            <header className="mb-12">
              <h1 className="mb-4 text-4xl font-semibold tracking-tight text-[#0a0a0a] dark:text-white">
                {page.heading} {circuitNumber}
              </h1>
              <div className="mb-6 rounded-lg border border-[#e5e5e5] bg-[#f9f9f9] p-4 dark:border-[#333333] dark:bg-[#1a1a1a]">
                <p className="text-sm text-[#737373]">
                  {locale === 'es' ? 'Compuerta' : locale === 'pt' ? 'Porta' : 'Gate'}:{' '}
                  <span className="font-medium text-[#0a0a0a] dark:text-white">
                    {page.type.toUpperCase()}
                  </span>{' '}
                  | {locale === 'es' ? 'Circuito' : locale === 'pt' ? 'Circuito' : 'Circuit'}:{' '}
                  <span className="font-medium text-[#0a0a0a] dark:text-white">
                    {circuitNumber}
                  </span>{' '}
                  |{' '}
                  {locale === 'es'
                    ? 'Configuración'
                    : locale === 'pt'
                      ? 'Configuração'
                      : 'Configuration'}
                  :{' '}
                  <span className="font-medium text-[#0a0a0a] dark:text-white">
                    {page.configuration}
                  </span>
                </p>
              </div>
              <AdComponent slot={SLOTS[0]} />

              <section className="mb-12">
                <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[#0a0a0a] dark:text-white">
                  {ui.sections.datasheet}
                </h2>
                <div className="rounded-lg border border-[#e5e5e5] bg-white p-6 dark:border-[#333333] dark:bg-[#0a0a0a]">
                  <figure>
                    <div className="w-full overflow-hidden rounded-lg">
                      <Image
                        src={page.datasheet}
                        alt={
                          locale === 'es'
                            ? `Datasheet ${page.heading} ${circuitNumber} - Compuerta ${page.type.toUpperCase()} con tabla de verdad, diagrama de pines y características eléctricas`
                            : locale === 'pt'
                              ? `Datasheet ${page.heading} ${circuitNumber} - Porta ${page.type.toUpperCase()} com tabela de verdade, diagrama de pinos e características elétricas`
                              : `Datasheet ${page.heading} ${circuitNumber} - ${page.type.toUpperCase()} gate with truth table, pin diagram and electrical characteristics`
                        }
                        width={1200}
                        height={800}
                        className="h-auto w-full object-cover"
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </div>
                    <figcaption className="mt-3 text-center text-sm text-[#737373]">
                      {locale === 'es'
                        ? `Datasheet oficial ${page.heading} ${circuitNumber} - Circuito integrado ${page.type.toUpperCase()}`
                        : locale === 'pt'
                          ? `Datasheet oficial ${page.heading} ${circuitNumber} - Circuito integrado ${page.type.toUpperCase()}`
                          : `Official datasheet ${page.heading} ${circuitNumber} - ${page.type.toUpperCase()} integrated circuit`}
                    </figcaption>
                  </figure>
                  <p className="mb-6 text-[#737373]">
                    {locale === 'es' ? 'El' : locale === 'pt' ? 'O' : 'The'}{' '}
                    <span className="font-medium text-[#0a0a0a] dark:text-white">datasheet</span>{' '}
                    {locale === 'es'
                      ? `del ${page.heading} ${circuitNumber} proporciona información técnica completa incluyendo diagrama de pines, características eléctricas, tabla de verdad y aplicaciones típicas del circuito integrado.`
                      : locale === 'pt'
                        ? `do ${page.heading} ${circuitNumber} fornece informações técnicas completas incluindo diagrama de pinos, características elétricas, tabela de verdade e aplicações típicas do circuito integrado.`
                        : `for ${page.heading} ${circuitNumber} provides complete technical information including pin diagram, electrical characteristics, truth table and typical applications of the integrated circuit.`}
                  </p>{' '}
                  {page.pdf && (
                    <div className="mt-6 text-center">
                      <a
                        href={page.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-lg bg-[#0070f3] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#0061d5] focus:outline-none focus:ring-2 focus:ring-[#0070f3] focus:ring-offset-2"
                      >
                        <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {ui.labels.downloadPdf}
                      </a>
                    </div>
                  )}
                </div>
              </section>

              {/* Anuncio después del datasheet */}
              <AdComponent slot={SLOTS[0]} />
            </header>
            {/* Featured Datasheet */}
            <section>
              <p className="mb-6 text-lg leading-relaxed text-[#737373]">{page.description}</p>
              <div className="rounded-lg border border-[#e5e5e5] bg-[#f9f9f9] p-6 dark:border-[#333333] dark:bg-[#1a1a1a]">
                <p className="leading-relaxed text-[#737373]">
                  {ui.descriptions.heroIntro(page.label, page.configuration)}{' '}
                  <code className="rounded bg-white px-2 py-1 font-medium text-[#0a0a0a] dark:bg-[#0a0a0a] dark:text-white">
                    {page.booleanFunction.split('=')[0].trim()}
                  </code>
                  .
                </p>
              </div>
            </section>
            <AdComponent slot={SLOTS[1]} />

            {/* Main Content Grid */}
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Left Column */}
              <div className="space-y-8">
                {/* Boolean Function */}
                <section>
                  <h3 className="mb-4 text-xl font-semibold text-[#0a0a0a] dark:text-white">
                    {ui.sections.booleanFunction}
                  </h3>
                  <div className="rounded-lg border border-[#e5e5e5] bg-white p-6 dark:border-[#333333] dark:bg-[#0a0a0a]">
                    <code className="block rounded bg-[#f9f9f9] p-4 text-center text-lg font-medium text-[#0a0a0a] dark:bg-[#1a1a1a] dark:text-white">
                      {page.booleanFunction}
                    </code>
                    <p className="mt-4 text-sm text-[#737373]">
                      {ui.descriptions.booleanFunction(page.label)}
                    </p>
                  </div>
                </section>

                {/* Applications */}
                <section>
                  <h3 className="mb-4 text-xl font-semibold text-[#0a0a0a] dark:text-white">
                    {ui.sections.applications}
                  </h3>
                  <div className="rounded-lg border border-[#e5e5e5] bg-white p-6 dark:border-[#333333] dark:bg-[#0a0a0a]">
                    <ul className="space-y-3">
                      {page.applications.map((app, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="mr-3 mt-1 h-4 w-4 flex-shrink-0 text-[#0070f3]"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-[#737373]">{app}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-sm text-[#737373]">{ui.descriptions.applications}</p>
                  </div>
                </section>

                {/* Anuncio después de aplicaciones */}
                <AdComponent slot={SLOTS[1]} />
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {/* Truth Table */}
                <section>
                  <h3 className="mb-4 text-xl font-semibold text-[#0a0a0a] dark:text-white">
                    {ui.sections.truthTable}
                  </h3>
                  <div className="rounded-lg border border-[#e5e5e5] bg-white p-6 dark:border-[#333333] dark:bg-[#0a0a0a]">
                    <p className="mb-4 text-sm text-[#737373]">
                      {ui.descriptions.truthTable(page.label)}
                    </p>
                    <div className="overflow-hidden rounded-lg border border-[#e5e5e5] dark:border-[#333333]">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-[#e5e5e5] bg-[#f9f9f9] dark:border-[#333333] dark:bg-[#1a1a1a]">
                            {Object.keys(page.truthTable[0]).map((key, index) => (
                              <th
                                key={index}
                                className="px-4 py-3 text-left text-sm font-medium text-[#0a0a0a] dark:text-white"
                              >
                                {key}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {page.truthTable.map((row, index) => (
                            <tr
                              key={index}
                              className="border-b border-[#e5e5e5] last:border-0 dark:border-[#333333]"
                            >
                              {Object.values(row).map((value, cellIndex) => (
                                <td
                                  key={cellIndex}
                                  className={`px-4 py-3 text-center font-mono text-sm ${
                                    cellIndex === Object.values(row).length - 1
                                      ? 'font-medium text-[#0070f3]'
                                      : 'text-[#0a0a0a] dark:text-white'
                                  }`}
                                >
                                  {value}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                {/* Technical Specifications */}
                <section>
                  <h3 className="mb-4 text-xl font-semibold text-[#0a0a0a] dark:text-white">
                    {ui.sections.technicalSpecs}
                  </h3>
                  <div className="space-y-4">
                    <div className="rounded-lg border border-[#e5e5e5] bg-white p-4 dark:border-[#333333] dark:bg-[#0a0a0a]">
                      <h4 className="mb-3 font-medium text-[#0a0a0a] dark:text-white">
                        {ui.sections.generalInfo}
                      </h4>
                      <div className="grid grid-cols-1 gap-4 text-sm">
                        <div>
                          <span className="text-[#737373]">{ui.labels.gateType}</span>
                          <p className="font-medium text-[#0a0a0a] dark:text-white">{page.type}</p>
                        </div>
                        <div>
                          <span className="text-[#737373]">{ui.labels.configuration}</span>
                          <p className="font-medium text-[#0a0a0a] dark:text-white">
                            {page.configuration}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border border-[#e5e5e5] bg-white p-4 dark:border-[#333333] dark:bg-[#0a0a0a]">
                      <h4 className="mb-3 font-medium text-[#0a0a0a] dark:text-white">
                        {ui.sections.electricalChars}
                      </h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-[#737373]">{ui.labels.operatingVoltage}</span>
                          <p className="font-medium text-[#0a0a0a] dark:text-white">
                            4.75V - 5.25V
                          </p>
                        </div>
                        <div>
                          <span className="text-[#737373]">{ui.labels.maxCurrent}</span>
                          <p className="font-medium text-[#0a0a0a] dark:text-white">20mA</p>
                        </div>
                        <div>
                          <span className="text-[#737373]">{ui.labels.propagationDelay}</span>
                          <p className="font-medium text-[#0a0a0a] dark:text-white">15ns typ</p>
                        </div>
                        <div>
                          <span className="text-[#737373]">{ui.labels.temperature}</span>
                          <p className="font-medium text-[#0a0a0a] dark:text-white">
                            {locale === 'en'
                              ? '0°C to 70°C'
                              : locale === 'pt'
                                ? '0°C a 70°C'
                                : '0°C a 70°C'}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border border-[#e5e5e5] bg-white p-4 dark:border-[#333333] dark:bg-[#0a0a0a]">
                      <h4 className="mb-3 font-medium text-[#0a0a0a] dark:text-white">
                        {ui.sections.packageInfo}
                      </h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-[#737373]">{ui.labels.packageType}</span>
                          <p className="font-medium text-[#0a0a0a] dark:text-white">DIP-14</p>
                        </div>
                        <div>
                          <span className="text-[#737373]">{ui.labels.pinSpacing}</span>
                          <p className="font-medium text-[#0a0a0a] dark:text-white">
                            0.1" (2.54mm)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Anuncio después de especificaciones técnicas */}
                <AdComponent slot={SLOTS[2]} />
              </div>
            </div>

            {/* Comments and Related */}
            <div className="mt-16 space-y-12">
              {/* Anuncio antes de comentarios */}
              <AdComponent slot={SLOTS[3]} />

              <SupabaseCommentsWrapper slug={decodeSlug} />

              {/* Additional Information */}
              <section>
                <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[#0a0a0a] dark:text-white">
                  {ui.sections.additionalInfo}
                </h2>
                <div className="rounded-lg border border-[#e5e5e5] bg-white p-6 dark:border-[#333333] dark:bg-[#0a0a0a]">
                  <p className="leading-relaxed text-[#737373]">
                    {ui.descriptions.additionalInfo(page.label)}
                  </p>
                </div>
              </section>

              {/* Related Projects */}
              <section>
                {/* Anuncio antes de proyectos relacionados */}
                <AdComponent slot={SLOTS[4]} />

                <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[#0a0a0a] dark:text-white">
                  {ui.sections.relatedProjects} {page.label}
                </h2>
                <Recommended tags={[decodeSlug]} locale={locale} />
              </section>

              <ScrollTopAndComment />
            </div>
          </div>
        </Sidebar>
      </div>
    </div>
  )
}
