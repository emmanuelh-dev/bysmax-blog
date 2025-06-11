import React from 'react'
import { LOGICGATES } from '@/data/logic-gates'
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

const Recommended = dynamic(() => import('@/app/[locale]/Recommended'), {
  ssr: false,
})

interface Props {
  params: { slug: string[]; locale: LocaleTypes }
}

interface LogicGate {
  url: string
  heading: string
  description: string
  truthTable: Array<{ 'Entrada A': number; 'Entrada B': number; salida: number }>
  booleanFunction: string
  applications: string[]
  datasheet: string
  configuration: string
  electricalCharacteristics?: {
    voltage?: string
    inputCurrent?: string
    outputCurrent?: string
    propagationDelay?: string
  }
  packageInfo?: {
    type?: string
    pinSpacing?: string
    width?: string
    length?: string
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] }
}): Promise<Metadata | undefined> {
  const slug = decodeURI(params.slug.join('/'))
  const page: LogicGate | undefined = LOGICGATES.find((p) => p.url === slug)

  if (!page) return

  const title = `${page.heading} (${page.configuration}) - Datasheet, Tabla de Verdad y Diagrama`
  const description = `Información completa sobre la ${page.heading} (circuito integrado ${page.configuration}). Encuentra su datasheet, tabla de verdad (${page.truthTable.length} combinaciones), función booleana (${page.booleanFunction}), diagrama de pines y aplicaciones como ${page.applications.join(', ')}. Ideal para estudiantes y profesionales de electrónica.`
  const imageUrl = page.datasheet.startsWith('http')
    ? page.datasheet
    : `https://bysmax.com${page.datasheet}` // Ensure absolute URL

  return {
    title: title, // Use optimized title
    description: description, // Use optimized description
    keywords: [
      page.heading,
      page.configuration,
      'compuerta lógica',
      'circuito integrado',
      'datasheet',
      'tabla de verdad',
      'función booleana',
      'diagrama',
      'pines',
      'aplicaciones',
      'electrónica digital',
      ...page.applications,
    ],
    openGraph: {
      title: title, // Use optimized title
      description: description, // Use optimized description
      siteName: 'Bysmax',
      locale: 'es_MX',
      type: 'article',
      url: `https://bysmax.com/es/compuertas-logicas/${page.url}`,
      images: [
        {
          url: imageUrl,
          width: 1100,
          height: 400,
          alt: `Datasheet y diagrama de pines de la compuerta ${page.heading} (${page.configuration})`, // Optimized alt text
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title, // Use optimized title
      description: description, // Use optimized description
      images: [imageUrl],
    },
  }
}

export const generateStaticParams = async () => {
  // Ensure LOGICGATES is typed correctly if possible
  const paths = (LOGICGATES as LogicGate[]).map((p) => ({ slug: p.url.split('/') }))
  return paths
}

export default async function Page({ params: { locale, slug: slugArray } }: Props) {
  const decodeSlug = decodeURI(slugArray.join('/'))

  const page: LogicGate | undefined = LOGICGATES.find((p) => p.url === decodeSlug) // Use LogicGate type

  if (!page) return notFound()

  // Construct base URL dynamically if needed, otherwise hardcode
  const siteBaseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bysmax.com'
  const pageUrl = `${siteBaseUrl}/${locale}/compuertas-logicas/${page.url}`
  const logoUrl = `${siteBaseUrl}/static/images/logo.png`
  const imageUrl = page.datasheet.startsWith('http')
    ? page.datasheet
    : `${siteBaseUrl}${page.datasheet}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `Todo sobre la ${page.heading} (${page.configuration})`, // Optimized headline
    description: `Información detallada sobre la ${page.heading}, incluyendo su datasheet, tabla de verdad, función booleana (${page.booleanFunction}), diagrama de pines y aplicaciones comunes. Aprende sobre el circuito integrado ${page.configuration}.`, // Optimized description
    image: imageUrl,
    keywords: [
      page.heading,
      page.configuration,
      'compuerta lógica',
      'circuito integrado',
      'datasheet',
      'tabla de verdad',
      'función booleana',
      'diagrama',
      'pines',
      'aplicaciones',
      'electrónica digital',
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
    <SectionContainerWithAds>
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
                {page.heading} ({page.configuration})
              </h1>
              <p className="mb-6 text-lg leading-relaxed text-[#737373]">{page.description}</p>
              <div className="rounded-lg border border-[#e5e5e5] bg-[#f9f9f9] p-6 dark:border-[#333333] dark:bg-[#1a1a1a]">
                <p className="leading-relaxed text-[#737373]">
                  La compuerta{' '}
                  <span className="font-medium text-[#0a0a0a] dark:text-white">{page.heading}</span>{' '}
                  es un componente fundamental en la electrónica digital, parte de la familia de
                  circuitos integrados
                  <span className="font-medium text-[#0a0a0a] dark:text-white">
                    {' '}
                    {page.configuration}
                  </span>
                  . Su operación se basa en la función lógica{' '}
                  <code className="rounded bg-white px-2 py-1 font-medium text-[#0a0a0a] dark:bg-[#0a0a0a] dark:text-white">
                    {page.booleanFunction.split('=')[0].trim()}
                  </code>
                  .
                </p>
              </div>
            </header>

            {/* Featured Datasheet */}
            <section className="mb-12">
              <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[#0a0a0a] dark:text-white">
                Datasheet y Diagrama de Pines
              </h2>
              <div className="rounded-lg border border-[#e5e5e5] bg-white p-6 dark:border-[#333333] dark:bg-[#0a0a0a]">
                <p className="mb-6 text-[#737373]">
                  El <span className="font-medium text-[#0a0a0a] dark:text-white">datasheet</span>{' '}
                  proporciona información técnica crucial sobre el circuito integrado{' '}
                  {page.configuration}, incluyendo el diagrama de pines, características eléctricas
                  y encapsulado.
                </p>
                <figure>
                  <div className="w-full overflow-hidden rounded-lg">
                    <Image
                      src={page.datasheet}
                      alt={`Datasheet y diagrama de pines de la compuerta ${page.heading} (${page.configuration})`}
                      width={1200}
                      height={800}
                      className="h-auto w-full object-cover"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                  <figcaption className="mt-3 text-center text-sm text-[#737373]">
                    Datasheet oficial del circuito integrado {page.configuration}
                  </figcaption>
                </figure>
              </div>
            </section>
            {/* Main Content Grid */}
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Left Column */}
              <div className="space-y-8">
                {/* Boolean Function */}
                <section>
                  <h3 className="mb-4 text-xl font-semibold text-[#0a0a0a] dark:text-white">
                    Función Booleana
                  </h3>
                  <div className="rounded-lg border border-[#e5e5e5] bg-white p-6 dark:border-[#333333] dark:bg-[#0a0a0a]">
                    <code className="block rounded bg-[#f9f9f9] p-4 text-center text-lg font-medium text-[#0a0a0a] dark:bg-[#1a1a1a] dark:text-white">
                      {page.booleanFunction}
                    </code>
                    <p className="mt-4 text-sm text-[#737373]">
                      Esta expresión matemática define cómo la salida (Y o Q) de la compuerta{' '}
                      {page.heading} depende de sus entradas (A, B, etc.).
                    </p>
                  </div>
                </section>

                {/* Applications */}
                <section>
                  <h3 className="mb-4 text-xl font-semibold text-[#0a0a0a] dark:text-white">
                    Aplicaciones del CI {page.configuration}
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
                    <p className="mt-4 text-sm text-[#737373]">
                      El circuito integrado {page.configuration} se utiliza en diversas aplicaciones
                      de lógica digital y sistemas embebidos.
                    </p>
                  </div>
                </section>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {/* Truth Table */}
                <section>
                  <h3 className="mb-4 text-xl font-semibold text-[#0a0a0a] dark:text-white">
                    Tabla de Verdad
                  </h3>
                  <div className="rounded-lg border border-[#e5e5e5] bg-white p-6 dark:border-[#333333] dark:bg-[#0a0a0a]">
                    <p className="mb-4 text-sm text-[#737373]">
                      La tabla de verdad ilustra la salida de la compuerta {page.heading} para cada
                      combinación posible de sus entradas lógicas.
                    </p>
                    <div className="overflow-hidden rounded-lg border border-[#e5e5e5] dark:border-[#333333]">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-[#e5e5e5] bg-[#f9f9f9] dark:border-[#333333] dark:bg-[#1a1a1a]">
                            <th className="px-4 py-3 text-left text-sm font-medium text-[#0a0a0a] dark:text-white">
                              Entrada A
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-[#0a0a0a] dark:text-white">
                              Entrada B
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-[#0a0a0a] dark:text-white">
                              Salida
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {page.truthTable.map((row, index) => (
                            <tr
                              key={index}
                              className="border-b border-[#e5e5e5] last:border-0 dark:border-[#333333]"
                            >
                              <td className="px-4 py-3 text-center font-mono text-sm text-[#0a0a0a] dark:text-white">
                                {row['Entrada A']}
                              </td>
                              <td className="px-4 py-3 text-center font-mono text-sm text-[#0a0a0a] dark:text-white">
                                {row['Entrada B']}
                              </td>
                              <td className="px-4 py-3 text-center font-mono text-sm font-medium text-[#0070f3]">
                                {row.salida}
                              </td>
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
                    Especificaciones Técnicas
                  </h3>
                  <div className="space-y-4">
                    <div className="rounded-lg border border-[#e5e5e5] bg-white p-4 dark:border-[#333333] dark:bg-[#0a0a0a]">
                      <h4 className="mb-3 font-medium text-[#0a0a0a] dark:text-white">
                        Características Eléctricas
                      </h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-[#737373]">Voltaje de Operación</span>
                          <p className="font-medium text-[#0a0a0a] dark:text-white">
                            4.75V - 5.25V
                          </p>
                        </div>
                        <div>
                          <span className="text-[#737373]">Corriente Máx.</span>
                          <p className="font-medium text-[#0a0a0a] dark:text-white">20mA</p>
                        </div>
                        <div>
                          <span className="text-[#737373]">Retardo de Propagación</span>
                          <p className="font-medium text-[#0a0a0a] dark:text-white">15ns typ</p>
                        </div>
                        <div>
                          <span className="text-[#737373]">Temperatura</span>
                          <p className="font-medium text-[#0a0a0a] dark:text-white">0°C a 70°C</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border border-[#e5e5e5] bg-white p-4 dark:border-[#333333] dark:bg-[#0a0a0a]">
                      <h4 className="mb-3 font-medium text-[#0a0a0a] dark:text-white">
                        Información del Encapsulado
                      </h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-[#737373]">Tipo</span>
                          <p className="font-medium text-[#0a0a0a] dark:text-white">DIP-14</p>
                        </div>
                        <div>
                          <span className="text-[#737373]">Espaciado</span>
                          <p className="font-medium text-[#0a0a0a] dark:text-white">
                            0.1" (2.54mm)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* Comments and Related */}
            <div className="mt-16 space-y-12">
              <SupabaseCommentsWrapper slug={decodeSlug} />

              {/* Additional Information */}
              <section>
                <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[#0a0a0a] dark:text-white">
                  Información Adicional
                </h2>
                <div className="rounded-lg border border-[#e5e5e5] bg-white p-6 dark:border-[#333333] dark:bg-[#0a0a0a]">
                  <p className="leading-relaxed text-[#737373]">
                    Para profundizar en el funcionamiento y las aplicaciones de la compuerta{' '}
                    <span className="font-medium text-[#0a0a0a] dark:text-white">
                      {page.heading}
                    </span>
                    , puedes consultar recursos adicionales sobre álgebra booleana y diseño de
                    circuitos digitales. Experimentar con simuladores de circuitos o montar
                    circuitos físicos con CIs como el{' '}
                    <span className="font-medium text-[#0a0a0a] dark:text-white">
                      {page.configuration}
                    </span>{' '}
                    te ayudará a consolidar tu comprensión.
                  </p>
                </div>
              </section>

              {/* Related Projects */}
              <section>
                <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[#0a0a0a] dark:text-white">
                  Proyectos Relacionados con {page.heading}
                </h2>
                <Recommended tags={[decodeSlug]} locale={locale} />
              </section>

              <ScrollTopAndComment />
            </div>
          </div>
        </Sidebar>
      </div>
    </SectionContainerWithAds>
  )
}
