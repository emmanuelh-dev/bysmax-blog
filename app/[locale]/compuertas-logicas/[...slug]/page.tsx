import React from 'react'
import { LOGICGATES } from '@/data/logic-gates' // Assuming this path and data structure are correct
import { notFound } from 'next/navigation'
import Sidebar from '../components/Sidebar' // Assuming this path is correct
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table' // Assuming this path is correct
import { Metadata } from 'next'
import Image from '@/components/Image' // Assuming this is a custom Image component or next/image aliased
import { LocaleTypes } from '../../i18n/settings' // Assuming this path is correct
import dynamic from 'next/dynamic'
import Script from 'next/script' // <-- Added missing import for Script component
import SuspencePosts from '@/layouts/components/SuspencePosts' // Assuming this path is correct
import SupabaseCommentsWrapper from '@/components/comments/SupabaseCommentsWrapper'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

const Recommended = dynamic(() => import('@/app/[locale]/Recommended'), {
  loading: () => <SuspencePosts />,
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
    <div className="container mx-auto max-w-7xl">
      {/* Inject JSON-LD */}
      <Script
        id={`${page.url}-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <Sidebar>
        <ScrollTopAndComment />
        <article>
          <h1 className="text-4xl font-bold">{`${page.heading} (${page.configuration})`}</h1>
          <p className="mt-2 text-lg">{page.description}</p>
          <p className="mt-4">
            La compuerta <strong>{page.heading}</strong> es un componente fundamental en la
            electrónica digital, parte de la familia de circuitos integrados (CI){' '}
            <strong>{page.configuration}</strong>. Su operación se basa en la función lógica{' '}
            <strong>{page.booleanFunction.split('=')[0].trim()}</strong>. En esta página, detallamos
            sus características esenciales: la <strong>tabla de verdad</strong>, la{' '}
            <strong>función booleana</strong>, el <strong>diagrama de pines</strong> (datasheet), y
            sus <strong>aplicaciones</strong> más comunes en el diseño de circuitos digitales.
          </p>

          {/* Datasheet Image Section */}
          <section className="my-8">
            <h2 className="mb-4 text-2xl font-semibold">
              Datasheet y Diagrama de Pines ({page.configuration})
            </h2>
            <p className="mb-4">
              El <strong>datasheet</strong> proporciona información técnica crucial sobre el
              circuito integrado {page.configuration}, incluyendo el{' '}
              <strong>diagrama de pines</strong>, características eléctricas y encapsulado. Consulta
              la imagen a continuación para ver la disposición de los pines.
            </p>
            <Image
              src={page.datasheet} // Use the datasheet path from your data
              alt={`Datasheet y diagrama de pines de la compuerta ${page.heading} (${page.configuration})`} // Optimized alt text
              width={1100} // Adjust width as needed
              height={400} // Adjust height as needed
              className="rounded-md shadow-md"
            />
          </section>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Left Column: Function, Applications, Truth Table */}
            <div>
              <h2 className="mb-2 text-xl font-semibold">Función Booleana</h2>
              <div className="mb-4 rounded-md bg-neutral-200 p-4 dark:bg-neutral-800">
                <code>{page.booleanFunction}</code>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Esta expresión matemática define cómo la salida (Y o Q) de la compuerta{' '}
                  {page.heading} depende de sus entradas (A, B, etc.).
                </p>
              </div>

              <h2 className="mb-2 text-xl font-semibold">
                Aplicaciones Comunes del CI {page.configuration}
              </h2>
              <div className="mb-4 rounded-md bg-neutral-200 p-4 dark:bg-neutral-800">
                <ul className="list-disc pl-5">
                  {page.applications.map((app) => (
                    <li key={app}>{app}</li>
                  ))}
                </ul>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  El circuito integrado {page.configuration} se utiliza en diversas aplicaciones de
                  lógica digital.
                </p>
              </div>

              <section className="mb-4">
                <h2 className="mb-2 text-xl font-semibold">Tabla de Verdad - {page.heading}</h2>
                <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                  La <strong>tabla de verdad</strong> ilustra la salida de la compuerta{' '}
                  {page.heading} para cada combinación posible de sus entradas lógicas (0 o 1).
                </p>
              </section>
            </div>

            {/* Right Column: Datasheet, Electrical, Package */}
            <div>
              <h2 className="mb-2 text-2xl font-bold">Datasheet</h2>
              <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                El datasheet proporciona información técnica detallada sobre la compuerta{' '}
                {page.heading}, incluyendo sus características eléctricas y encapsulado.
              </p>
              <figure className="pb-4">
                {/* Ensure the Image component handles external URLs correctly or use a standard img tag */}
                <Image
                  src={page.datasheet} // Use the original path/URL from data
                  width={1100} // Adjust as needed
                  height={400} // Adjust as needed
                  alt={`datasheet ${page.heading}`}
                  className="w-full rounded-md object-contain" // Added object-contain
                />
                <figcaption className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                  {`Datasheet para la compuerta ${page.heading}`}
                </figcaption>
              </figure>

              <div>
                <h2 className="mb-2 text-xl font-semibold">Características Eléctricas</h2>
                <div className="mb-4 rounded-md bg-neutral-200 p-4 dark:bg-neutral-800">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-muted-foreground text-sm font-medium">
                        Voltaje de Operación
                      </p>
                      <p>{page.electricalCharacteristics?.voltage || 'No especificado'}</p>{' '}
                      {/* Use fallback */}
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm font-medium">
                        Corriente de Entrada Máx.
                      </p>
                      <p>{page.electricalCharacteristics?.inputCurrent || 'No especificado'}</p>{' '}
                      {/* Use fallback */}
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm font-medium">
                        Corriente de Salida Máx.
                      </p>
                      <p>{page.electricalCharacteristics?.outputCurrent || 'No especificado'}</p>{' '}
                      {/* Use fallback */}
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm font-medium">
                        Retardo de Propagación
                      </p>
                      <p>{page.electricalCharacteristics?.propagationDelay || 'No especificado'}</p>{' '}
                      {/* Use fallback */}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="mb-2 text-xl font-semibold">Información del Encapsulado</h2>
                <div className="mb-4 rounded-md bg-neutral-200 p-4 dark:bg-neutral-800">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-muted-foreground text-sm font-medium">Tipo</p>
                      <p>{page.packageInfo?.type || 'No especificado'}</p> {/* Use fallback */}
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm font-medium">Paso de Pines</p>
                      <p>{page.packageInfo?.pinSpacing || 'No especificado'}</p>{' '}
                      {/* Use fallback */}
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm font-medium">Ancho</p>
                      <p>{page.packageInfo?.width || 'No especificado'}</p> {/* Use fallback */}
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm font-medium">Longitud</p>
                      <p>{page.packageInfo?.length || 'No especificado'}</p> {/* Use fallback */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <SupabaseCommentsWrapper slug={decodeSlug} />
        <ScrollTopAndComment />
        {/* Additional Info Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold">Información Adicional</h2>
          <div className="prose mt-4 max-w-none dark:prose-invert">
            {' '}
            {/* Ensure prose styles are available */}
            <p>
              Para profundizar en el funcionamiento y las aplicaciones de la compuerta{' '}
              <strong>{page.heading}</strong>, puedes consultar recursos adicionales sobre álgebra
              booleana y diseño de circuitos digitales. Experimentar con simuladores de circuitos o
              montar circuitos físicos con CIs como el {page.configuration} te ayudará a consolidar
              tu comprensión.
            </p>
            {/* Add more relevant content here if needed */}
          </div>
        </section>
        {/* Recommended Projects Section */}
        <nav aria-labelledby="recommended-projects" className="mt-12">
          <h2 id="recommended-projects" className="mb-4 text-2xl font-bold">
            Proyectos Relacionados con {page.heading}
          </h2>
          {/* Pass the decoded slug string, not the array */}
          <Recommended tags={[decodeSlug]} locale={locale} />
        </nav>
      </Sidebar>
    </div>
  )
}
