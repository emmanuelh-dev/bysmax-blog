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

  const title =
    locale === 'es'
      ? 'Compuertas Lógicas: Guía Completa con Datasheet y Tabla de Verdad - AND 7408, OR 7432, NOT 7404'
      : locale === 'pt'
        ? 'Portas Lógicas: Guia Completo com Datasheet e Tabela de Verdade - AND 7408, OR 7432, NOT 7404'
        : 'Logic Gates: Complete Guide with Datasheet and Truth Table - AND 7408, OR 7432, NOT 7404'

  const description =
    locale === 'es'
      ? 'Guía completa de compuertas lógicas con datasheet y tabla de verdad. Aprende sobre circuitos integrados 7408 (AND), 7432 (OR), 7404 (NOT), 7400 (NAND), 7486 (XOR). Características eléctricas y aplicaciones.'
      : locale === 'pt'
        ? 'Guia completo de portas lógicas com datasheet e tabela de verdade. Aprenda sobre circuitos integrados 7408 (AND), 7432 (OR), 7404 (NOT), 7400 (NAND), 7486 (XOR). Características elétricas e aplicações.'
        : 'Complete guide to logic gates with datasheet and truth table. Learn about integrated circuits 7408 (AND), 7432 (OR), 7404 (NOT), 7400 (NAND), 7486 (XOR). Electrical characteristics and applications.'

  const keywords =
    locale === 'es'
      ? [
          'compuertas logicas',
          'compuerta and 7408',
          'compuerta or 7432',
          'compuerta not 7404',
          'compuerta nand 7400',
          'compuerta xor 7486',
          'tabla de verdad compuertas logicas',
          'datasheet compuertas logicas',
          'circuitos integrados compuertas',
          'compuertas logicas digitales',
          'compuerta and datasheet',
          'compuerta or datasheet',
          'compuerta not datasheet',
          'compuertas logicas basicas',
          'todas las compuertas logicas',
          'tabla compuertas logicas',
        ]
      : locale === 'pt'
        ? [
            'portas logicas',
            'porta and 7408',
            'porta or 7432',
            'porta not 7404',
            'porta nand 7400',
            'porta xor 7486',
            'tabela de verdade portas logicas',
            'datasheet portas logicas',
            'circuitos integrados portas',
            'portas logicas digitais',
          ]
        : [
            'logic gates',
            'and gate 7408',
            'or gate 7432',
            'not gate 7404',
            'nand gate 7400',
            'xor gate 7486',
            'truth table logic gates',
            'datasheet logic gates',
            'integrated circuits gates',
            'digital logic gates',
          ]

  return genPageMetadata({
    title: title,
    description: description,
    keywords: keywords,
    openGraph: {
      title: title,
      description: description,
      images: '/static/images/compuertas.png',
      locale: locale === 'es' ? 'es_MX' : locale === 'en' ? 'en_US' : 'pt_BR',
      type: 'website',
    },
    twitter: {
      title: title,
      card: 'summary_large_image',
      description: description,
      images: '/static/images/compuertas.png',
    },
  })
}

export default function page({ params: { locale } }: Props) {
  const ui = getUITranslation(locale as 'es' | 'en' | 'pt')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      locale === 'es'
        ? 'Compuertas Lógicas: Guía Completa con Datasheet y Tabla de Verdad'
        : locale === 'pt'
          ? 'Portas Lógicas: Guia Completo com Datasheet e Tabela de Verdade'
          : 'Logic Gates: Complete Guide with Datasheet and Truth Table',
    description:
      locale === 'es'
        ? 'Guía completa de compuertas lógicas AND 7408, OR 7432, NOT 7404, NAND 7400, XOR 7486 con datasheet, tabla de verdad y aplicaciones'
        : locale === 'pt'
          ? 'Guia completo de portas lógicas AND 7408, OR 7432, NOT 7404, NAND 7400, XOR 7486 com datasheet, tabela de verdade e aplicações'
          : 'Complete guide to logic gates AND 7408, OR 7432, NOT 7404, NAND 7400, XOR 7486 with datasheet, truth table and applications',
    keywords:
      locale === 'es'
        ? 'compuertas logicas, compuerta and 7408, compuerta or 7432, compuerta not 7404, tabla de verdad, datasheet compuertas logicas, circuitos integrados'
        : locale === 'pt'
          ? 'portas logicas, porta and 7408, porta or 7432, porta not 7404, tabela de verdade, datasheet portas logicas, circuitos integrados'
          : 'logic gates, and gate 7408, or gate 7432, not gate 7404, truth table, datasheet logic gates, integrated circuits',
    image: 'https://bysmax.com/static/images/compuertas.png',
    author: {
      '@type': 'Organization',
      name: 'Bysmax',
      url: 'https://bysmax.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Bysmax',
      logo: {
        '@type': 'ImageObject',
        url: 'https://bysmax.com/static/images/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://bysmax.com/${locale}/compuertas-logicas`,
    },
    breadcrumb: {
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
    },
  }

  return (
    <SectionContainerWithAds>
      <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
        <Script
          id="logic-gates-schema"
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
              {/* Ad Section - Primera vista */}
              <AdComponent slot={SLOTS[0]} />
              {/* Featured Images */}
              <div className="grid gap-6 md:grid-cols-2">
                <Image
                  src="/static/images/compuertas.png"
                  width={1280}
                  height={720}
                  className="h-auto w-full object-cover"
                  style={{ width: '100%', height: 'auto' }}
                  alt={
                    locale === 'es'
                      ? 'Compuertas Lógicas - Guía completa de compuertas AND, OR, NOT, NAND, NOR, XOR - Circuitos integrados 7408, 7432, 7404, 7400'
                      : locale === 'pt'
                        ? 'Portas Lógicas - Guia completo de portas AND, OR, NOT, NAND, NOR, XOR - Circuitos integrados 7408, 7432, 7404, 7400'
                        : 'Logic Gates - Complete guide to AND, OR, NOT, NAND, NOR, XOR gates - Integrated circuits 7408, 7432, 7404, 7400'
                  }
                />
                <Image
                  src="/static/images/datashet-compuertas.jpg"
                  width={1280}
                  height={720}
                  className="h-auto w-full object-cover"
                  style={{ width: '100%', height: 'auto' }}
                  alt={
                    locale === 'es'
                      ? 'Datasheet de Compuertas Lógicas - Tabla de verdad compuertas AND 7408, OR 7432, NOT 7404, NAND 7400, XOR 7486'
                      : locale === 'pt'
                        ? 'Datasheet de Portas Lógicas - Tabela de verdade portas AND 7408, OR 7432, NOT 7404, NAND 7400, XOR 7486'
                        : 'Logic Gates Datasheet - Truth table for AND 7408, OR 7432, NOT 7404, NAND 7400, XOR 7486 gates'
                  }
                />
              </div>
            </header>

            {/* Ad Section - Primera vista */}
            <AdComponent slot={SLOTS[0]} />

            {/* Logic Gates Grid */}
            <section className="mb-16">
              <h2 className="mb-8 text-2xl font-semibold tracking-tight text-[#0a0a0a] dark:text-white">
                {ui.sections.availableGates}
              </h2>
              <div className="grid gap-8">
                {electronicComponents
                  .getComponentsByCategory('logic-gates')
                  .map((gate, index) => {
                    const gateTranslation = getLogicGateTranslation(
                      gate.url,
                      locale as 'es' | 'en' | 'pt'
                    )

                    if (!gateTranslation) return null

                    return (
                      <div key={gate.url}>
                        <article className="rounded-lg border border-[#e5e5e5] bg-white p-6 transition-all duration-200 hover:border-[#0070f3] hover:shadow-sm dark:border-[#333333] dark:bg-[#0a0a0a] dark:hover:border-[#0070f3]">
                          {/* Gate Header */}
                          <header className="mb-6">
                            <h3 className="mb-3 text-xl font-semibold text-[#0a0a0a] dark:text-white">
                              <a
                                href={`/${locale}/compuertas-logicas/${gate.url}`}
                                className="transition-colors hover:text-[#0070f3]"
                              >
                                {gateTranslation.heading}
                              </a>
                            </h3>
                            <p className="mb-4 text-[#737373]">{gateTranslation.description}</p>

                            {/* Gate Info */}
                            <div className="grid gap-4 md:grid-cols-3">
                              <div>
                                <span className="text-sm font-medium text-[#737373]">
                                  {ui.labels.configuration}
                                </span>
                                <p className="font-medium text-[#0a0a0a] dark:text-white">
                                  {gateTranslation.configuration}
                                </p>
                              </div>
                              <div>
                                <span className="text-sm font-medium text-[#737373]">
                                  {ui.sections.booleanFunction}
                                </span>
                                <code className="block rounded bg-[#f9f9f9] px-2 py-1 text-sm font-medium text-[#0a0a0a] dark:bg-[#1a1a1a] dark:text-white">
                                  {gateTranslation.booleanFunction}
                                </code>
                              </div>
                              <div>
                                <span className="text-sm font-medium text-[#737373]">
                                  {ui.sections.applications}
                                </span>
                                <p className="text-sm text-[#0a0a0a] dark:text-white">
                                  {gateTranslation.applications.slice(0, 2).join(', ')}
                                  {gateTranslation.applications.length > 2 && '...'}
                                </p>
                              </div>
                            </div>
                          </header>

                          {/* Content Grid */}
                          <div className="grid gap-6 lg:grid-cols-2">
                            {/* Truth Table */}
                            {gateTranslation.truthTable &&
                              gateTranslation.truthTable.length > 0 && (
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
                                        {gateTranslation.truthTable.map((row, rowIndex) => (
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
                              </h4>
                              <figure>
                                <Image
                                  src={gateTranslation.datasheet}
                                  width={400}
                                  height={250}
                                  alt={
                                    locale === 'es'
                                      ? `Datasheet ${gateTranslation.heading} - Compuerta ${gate.url.toUpperCase()} tabla de verdad, diagrama y características eléctricas`
                                      : locale === 'pt'
                                        ? `Datasheet ${gateTranslation.heading} - Porta ${gate.url.toUpperCase()} tabela de verdade, diagrama e características elétricas`
                                        : `Datasheet ${gateTranslation.heading} - ${gate.url.toUpperCase()} gate truth table, diagram and electrical characteristics`
                                  }
                                  className="h-auto w-full object-cover"
                                  style={{ width: '100%', height: 'auto' }}
                                />
                                <figcaption className="mt-2 text-center text-sm text-[#737373]">
                                  {locale === 'es'
                                    ? `Datasheet ${gateTranslation.heading} - Circuito integrado ${gate.url.toUpperCase()}`
                                    : locale === 'pt'
                                      ? `Datasheet ${gateTranslation.heading} - Circuito integrado ${gate.url.toUpperCase()}`
                                      : `Datasheet ${gateTranslation.heading} - Integrated circuit ${gate.url.toUpperCase()}`}
                                </figcaption>
                              </figure>
                            </div>
                          </div>

                          {/* View Details a */}
                          <div className="mt-6 flex justify-end">
                            <a
                              href={`/${locale}/compuertas-logicas/${gate.url}`}
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
