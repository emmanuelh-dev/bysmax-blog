import React from 'react'
import { electronicComponents, getLogicGateTranslation } from '@/data/electronic-components'
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

// Función genérica para obtener traducciones de componente
const getComponentTranslation = (component: any, locale: string) => {
  switch (component.category) {
    case 'logic-gates':
      return getLogicGateTranslation(component.url, locale as 'es' | 'en' | 'pt')
    case 'decoders':
    case 'counters':
    case 'multiplexers':
    case 'displays':
    default:
      // Para otros tipos, usar directamente las traducciones
      return {
        ...component.translations[locale],
        datasheet: component.datasheet,
        pdf: component.pdf,
        url: component.url,
        partNumber: component.partNumber,
        manufacturer: component.manufacturer,
        alternatives: component.alternatives,
      }
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string[]; locale: LocaleTypes }
}): Promise<Metadata | undefined> {
  const slug = decodeURI(params.slug.join('/'))
  const component = electronicComponents.getComponentByUrl(slug)
  const ui = getUITranslation(params.locale as 'es' | 'en' | 'pt')

  if (!component) return

  const page = getComponentTranslation(component, params.locale)
  if (!page) return

  const title = `${page.heading} ${ui.metadata.titleSuffix}`
  const description = ui.metadata.description(
    page.heading,
    page.truthTable?.length || 0,
    page.booleanFunction || page.type || '',
    page.applications
  )
  const imageUrl = page.datasheet.startsWith('http')
    ? page.datasheet
    : `https://bysmax.com${page.datasheet}`

  return {
    title: title,
    description: description,
    keywords: [
      page.heading,
      'electronic component',
      'integrated circuit',
      'datasheet',
      'truth table',
      'boolean function',
      'diagram',
      'pins',
      'applications',
      'digital electronics',
      ...page.applications,
    ],
    openGraph: {
      title: title,
      description: description,
      siteName: 'Bysmax',
      locale: params.locale === 'en' ? 'en_US' : params.locale === 'pt' ? 'pt_BR' : 'es_MX',
      type: 'article',
      url: `https://bysmax.com/${params.locale}/componentes-electronicos/${slug}`,
      images: [
        {
          url: imageUrl,
          width: 1100,
          height: 400,
          alt: ui.metadata.altText(page.heading),
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
  const paths = electronicComponents.getAllComponents().map((p) => ({ slug: p.url.split('/') }))
  return paths
}

export default async function Page({ params: { locale, slug: slugArray } }: Props) {
  const decodeSlug = decodeURI(slugArray.join('/'))
  const component = electronicComponents.getComponentByUrl(decodeSlug)
  const ui = getUITranslation(locale as 'es' | 'en' | 'pt')

  if (!component) return notFound()

  const page = getComponentTranslation(component, locale)
  if (!page) return notFound()

  // Construct base URL dynamically if needed, otherwise hardcode
  const siteBaseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bysmax.com'
  const pageUrl = `${siteBaseUrl}/${locale}/componentes-electronicos/${page.url}`
  const logoUrl = `${siteBaseUrl}/static/images/logo.png`
  const imageUrl = page.datasheet.startsWith('http')
    ? page.datasheet
    : `${siteBaseUrl}${page.datasheet}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `All about the ${page.heading}`,
    description: ui.metadata.description(
      page.heading,
      page.truthTable?.length || 0,
      page.booleanFunction || page.type || '',
      page.applications
    ),
    image: imageUrl,
    keywords: [
      page.heading,
      'electronic component',
      'integrated circuit',
      'datasheet',
      'truth table',
      'boolean function',
      'diagram',
      'pins',
      'applications',
      'digital electronics',
      ...page.applications,
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
                {page.heading}
              </h1>
              <p className="mb-6 text-lg leading-relaxed text-[#737373]">{page.description}</p>
              <AdComponent slot={SLOTS[1]} />

              <section className="mb-12">
                <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[#0a0a0a] dark:text-white">
                  {ui.sections.datasheet}
                </h2>
                <div className="rounded-lg border border-[#e5e5e5] bg-white p-6 dark:border-[#333333] dark:bg-[#0a0a0a]">
                  <p className="mb-6 text-[#737373]">
                    The{' '}
                    <span className="font-medium text-[#0a0a0a] dark:text-white">datasheet</span>{' '}
                    {ui.descriptions.datasheet}
                  </p>
                  <figure>
                    <div className="w-full overflow-hidden rounded-lg">
                      <Image
                        src={page.datasheet}
                        alt={ui.metadata.altText(page.heading)}
                        width={1200}
                        height={800}
                        className="h-auto w-full object-cover"
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </div>
                    <figcaption className="mt-3 text-center text-sm text-[#737373]">
                      {ui.descriptions.datasheetOfficial}
                    </figcaption>
                  </figure>
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
              <div className="rounded-lg border border-[#e5e5e5] bg-[#f9f9f9] p-6 dark:border-[#333333] dark:bg-[#1a1a1a]">
                <p className="leading-relaxed text-[#737373]">
                  {ui.descriptions.heroIntro(page.label, page.configuration)}{' '}
                  {page.booleanFunction && (
                    <code className="rounded bg-white px-2 py-1 font-medium text-[#0a0a0a] dark:bg-[#0a0a0a] dark:text-white">
                      {page.booleanFunction.split('=')[0].trim()}
                    </code>
                  )}
                  .
                </p>
              </div>
              {/* Anuncio después del datasheet */}
              <AdComponent slot={SLOTS[0]} />
            </header>
            {/* Featured Datasheet */}

            {/* Main Content Grid */}
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Left Column */}
              <div className="space-y-8">
                {/* Boolean Function */}
                {page.booleanFunction && (
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
                )}

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
                {page.truthTable && page.truthTable.length > 0 && (
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
                                    {String(value)}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>
                )}

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
