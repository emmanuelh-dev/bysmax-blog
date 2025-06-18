import Image from '@/components/Image'
import React from 'react'
import { electronicComponents, getLogicGateTranslation } from '@/data/electronic-components'
import { getUITranslation } from '@/data/logic-gates-ui'
import Sidebar from './components/Sidebar'
import { genPageMetadata } from '@/app/[locale]/seo'
import { SectionContainerWithAds } from '@/components/SectionContainer'
import Script from 'next/script'
import SupabaseCommentsWrapper from '@/components/comments/SupabaseCommentsWrapper'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { LocaleTypes } from '../i18n/settings'
import { SLOTS } from '@/data/ad-slots'
import AdComponent from '@/data/AdComponent'
interface Props {
  params: { locale: LocaleTypes }
}

export async function generateMetadata({ params: { locale } }: Props) {
  const ui = getUITranslation(locale as 'es' | 'en' | 'pt')

  return genPageMetadata({
    title: ui.pageTitle,
    description: ui.pageDescription,
    openGraph: {
      title: ui.pageTitle,
      description: ui.pageDescription,
      images: '/static/images/compuertas.png',
      locale: locale === 'es' ? 'es_MX' : locale === 'en' ? 'en_US' : 'pt_BR',
      type: 'website',
    },
    twitter: {
      title: ui.pageTitle,
      card: '/static/images/compuertas.png',
      images: '/static/images/compuertas.png',
    },
  })
}

export default function page({ params: { locale } }: Props) {
  const ui = getUITranslation(locale as 'es' | 'en' | 'pt')

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
        name:
          locale === 'en'
            ? 'Logic Gates'
            : locale === 'pt'
              ? 'Portas Lógicas'
              : 'Compuertas Lógicas',
        item: `https://bysmax.com/${locale}/compuertas-logicas`,
      },
    ],
  }

  return (
    <SectionContainerWithAds>
      <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <Sidebar>
          <div className="mx-auto max-w-4xl">
            {/* Hero Section */}
            <header className="mb-12">
              <h1 className="mb-6 text-4xl font-semibold tracking-tight text-[#0a0a0a] dark:text-white">
                {ui.pageTitle}
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-[#737373]">{ui.pageDescription}</p>

              {/* Featured Images */}
              <div className="grid gap-6 md:grid-cols-2">
                <Image
                  src="/static/images/compuertas.png"
                  width={1280}
                  height={720}
                  className="h-auto w-full object-cover"
                  style={{ width: '100%', height: 'auto' }}
                  alt={ui.imageAlts?.featuredImage || 'Logic Gates Guide'}
                />
                <Image
                  src="/static/images/datashet-compuertas.jpg"
                  width={1280}
                  height={720}
                  className="h-auto w-full object-cover"
                  style={{ width: '100%', height: 'auto' }}
                  alt={ui.imageAlts?.datasheetImage || 'Logic Gates Datasheet Guide'}
                />
              </div>
            </header>

            {/* Ad Section - Primera vista */}
            <AdComponent slot={SLOTS[0]} />

            {/* Electronic Components Grid */}
            <section className="mb-16">
              <h2 className="mb-8 text-2xl font-semibold tracking-tight text-[#0a0a0a] dark:text-white">
                Componentes Electrónicos Disponibles
              </h2>
              <div className="grid gap-8">
                {electronicComponents
                  .getAllComponents()
                  .map((component, index) => {
                    // Función genérica para obtener traducciones
                    const getComponentTranslation = (comp: any, locale: string) => {
                      switch (comp.category) {
                        case 'logic-gates':
                          return getLogicGateTranslation(comp.url, locale as 'es' | 'en' | 'pt')
                        case 'decoders':
                        case 'counters':
                        case 'multiplexers':
                        case 'displays':
                        default:
                          // Para otros tipos, usar directamente las traducciones
                          return {
                            ...comp.translations[locale],
                            datasheet: comp.datasheet,
                            pdf: comp.pdf,
                            url: comp.url,
                            partNumber: comp.partNumber,
                            manufacturer: comp.manufacturer,
                            alternatives: comp.alternatives,
                          }
                      }
                    }

                    const componentTranslation = getComponentTranslation(component, locale)

                    if (!componentTranslation) return null

                    return (
                      <div key={component.url}>
                        <article className="rounded-lg border border-[#e5e5e5] bg-white p-6 transition-all duration-200 hover:border-[#0070f3] hover:shadow-sm dark:border-[#333333] dark:bg-[#0a0a0a] dark:hover:border-[#0070f3]">
                          {/* Component Header */}
                          <header className="mb-6">
                            <h3 className="mb-3 text-xl font-semibold text-[#0a0a0a] dark:text-white">
                              <a
                                href={`/${locale}/compuertas-logicas/${component.url}`}
                                className="transition-colors hover:text-[#0070f3]"
                              >
                                {componentTranslation.heading}
                              </a>
                            </h3>
                            <p className="mb-4 text-[#737373]">
                              {componentTranslation.description}
                            </p>

                            {/* Component Info */}
                            <div className="grid gap-4 md:grid-cols-3">
                              <div>
                                <span className="text-sm font-medium text-[#737373]">
                                  {ui.labels.configuration}
                                </span>
                                <p className="font-medium text-[#0a0a0a] dark:text-white">
                                  {componentTranslation.configuration}
                                </p>
                              </div>
                              <div>
                                <span className="text-sm font-medium text-[#737373]">
                                  {componentTranslation.booleanFunction
                                    ? ui.sections.booleanFunction
                                    : 'Tipo'}
                                </span>
                                <code className="block rounded bg-[#f9f9f9] px-2 py-1 text-sm font-medium text-[#0a0a0a] dark:bg-[#1a1a1a] dark:text-white">
                                  {componentTranslation.booleanFunction ||
                                    componentTranslation.type}
                                </code>
                              </div>
                              <div>
                                <span className="text-sm font-medium text-[#737373]">
                                  {ui.sections.applications}
                                </span>
                                <p className="text-sm text-[#0a0a0a] dark:text-white">
                                  {componentTranslation.applications.slice(0, 2).join(', ')}
                                  {componentTranslation.applications.length > 2 && '...'}
                                </p>
                              </div>
                            </div>
                          </header>

                          {/* Content Grid */}
                          <div className="grid gap-6 lg:grid-cols-2">
                            {/* Truth Table */}
                            {componentTranslation.truthTable &&
                              componentTranslation.truthTable.length > 0 && (
                                <div>
                                  <h4 className="mb-3 text-sm font-medium text-[#737373]">
                                    {ui.sections.truthTable}
                                  </h4>
                                  <div className="overflow-hidden rounded-lg border border-[#e5e5e5] dark:border-[#333333]">
                                    <table className="w-full">
                                      <thead>
                                        <tr className="border-b border-[#e5e5e5] bg-[#f9f9f9] dark:border-[#333333] dark:bg-[#1a1a1a]">
                                          <th className="px-4 py-3 text-left text-sm font-medium text-[#0a0a0a] dark:text-white">
                                            {ui.labels.inputA}
                                          </th>
                                          <th className="px-4 py-3 text-left text-sm font-medium text-[#0a0a0a] dark:text-white">
                                            {ui.labels.inputB}
                                          </th>
                                          <th className="px-4 py-3 text-left text-sm font-medium text-[#0a0a0a] dark:text-white">
                                            {ui.labels.output}
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {componentTranslation.truthTable.map((row, rowIndex) => (
                                          <tr
                                            key={rowIndex}
                                            className="border-b border-[#e5e5e5] last:border-0 dark:border-[#333333]"
                                          >
                                            <td className="px-4 py-3 text-sm text-[#0a0a0a] dark:text-white">
                                              {row[ui.labels.inputA] ||
                                                row['Entrada A'] ||
                                                row['Input A'] ||
                                                row['Entrada A']}
                                            </td>
                                            <td className="px-4 py-3 text-sm text-[#0a0a0a] dark:text-white">
                                              {row[ui.labels.inputB] ||
                                                row['Entrada B'] ||
                                                row['Input B'] ||
                                                row['Entrada B']}
                                            </td>
                                            <td className="px-4 py-3 text-sm font-medium text-[#0a0a0a] dark:text-white">
                                              {row[ui.labels.output] ||
                                                row['salida'] ||
                                                row['output'] ||
                                                row['saída']}
                                            </td>
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              )}

                            {/* Datasheet */}
                            <div>
                              <h4 className="mb-3 text-sm font-medium text-[#737373]">
                                {ui.labels.datasheetAndDiagram}
                              </h4>{' '}
                              <figure>
                                <Image
                                  src={componentTranslation.datasheet}
                                  width={400}
                                  height={250}
                                  alt={`Datasheet ${componentTranslation.heading}`}
                                  className="h-auto w-full object-cover"
                                  style={{ width: '100%', height: 'auto' }}
                                />
                                <figcaption className="mt-2 text-center text-sm text-[#737373]">
                                  Datasheet {componentTranslation.heading}
                                </figcaption>
                              </figure>
                            </div>
                          </div>

                          {/* View Details */}
                          <div className="mt-6 flex justify-end">
                            <a
                              href={`/${locale}/compuertas-logicas/${component.url}`}
                              className="inline-flex items-center rounded-lg border border-[#e5e5e5] px-4 py-2 text-sm font-medium text-[#0a0a0a] transition-all duration-200 hover:border-[#0070f3] hover:text-[#0070f3] dark:border-[#333333] dark:text-white dark:hover:border-[#0070f3] dark:hover:text-[#0070f3]"
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
                          </div>
                        </article>

                        <AdComponent
                          slot={SLOTS[index < SLOTS.length ? index : SLOTS.length - 1]}
                        />
                      </div>
                    )
                  })
                  .filter(Boolean)}
              </div>
            </section>

            {/* Comments and Navigation */}
            <div className="space-y-8">
              <SupabaseCommentsWrapper slug="/compuertas-logicas" />
              <ScrollTopAndComment />
            </div>

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
                        {ui.descriptions.activeLevels.title}
                      </h3>
                      <p className="text-sm leading-relaxed">
                        {ui.descriptions.activeLevels.description}
                      </p>
                    </div>

                    <div className="rounded-lg border border-[#e5e5e5] p-6 dark:border-[#333333]">
                      <h3 className="mb-3 font-medium text-[#0a0a0a] dark:text-white">
                        {ui.descriptions.integratedCircuits.title}
                      </h3>
                      <p className="text-sm leading-relaxed">
                        {ui.descriptions.integratedCircuits.description}
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
                  {electronicComponents
                    .getComponentsByCategory('logic-gates')
                    .slice(0, 5)
                    .map((gate) => {
                      const gateTranslation = getLogicGateTranslation(
                        gate.url,
                        locale as 'es' | 'en' | 'pt'
                      )

                      if (!gateTranslation) return null

                      return (
                        <div
                          key={gate.url}
                          className="rounded-lg border border-[#e5e5e5] p-4 dark:border-[#333333]"
                        >
                          <h3 className="mb-2 font-medium text-[#0a0a0a] dark:text-white">
                            {gate.url}
                          </h3>
                          <p className="text-sm text-[#737373]">
                            {gateTranslation.applications[0]}
                          </p>
                        </div>
                      )
                    })
                    .filter(Boolean)}
                </div>
              </div>
            </section>
          </div>
        </Sidebar>
      </div>
    </SectionContainerWithAds>
  )
}
