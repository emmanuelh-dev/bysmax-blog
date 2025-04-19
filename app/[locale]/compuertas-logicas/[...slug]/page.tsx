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

const Recommended = dynamic(() => import('@/app/[locale]/Recommended'), {
  // Assuming this path is correct
  loading: () => <SuspencePosts />,
  ssr: false,
})

interface Props {
  params: { slug: string[]; locale: LocaleTypes }
}

// Define a type for the LOGICGATE entry for better type safety (optional but recommended)
// Adjust this type according to the actual structure of your LOGICGATES data
interface LogicGate {
  url: string
  heading: string
  description: string
  truthTable: Array<{ 'Entrada A': number; 'Entrada B': number; salida: number }>
  booleanFunction: string
  applications: string[]
  datasheet: string // Assuming this is a URL or path string
  configuration: string // Added based on usage in the component
  electricalCharacteristics?: {
    // Made optional
    voltage?: string
    inputCurrent?: string
    outputCurrent?: string
    propagationDelay?: string
  }
  packageInfo?: {
    // Made optional
    type?: string
    pinSpacing?: string
    width?: string
    length?: string
  }
  // Add any other properties used from LOGICGATES
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] }
}): Promise<Metadata | undefined> {
  const slug = decodeURI(params.slug.join('/'))
  const page: LogicGate | undefined = LOGICGATES.find((p) => p.url === slug) // Use LogicGate type

  if (!page) return

  const description = `Aprende todo sobre la compuerta lógica ${page.heading}. Descubre su tabla de verdad (${page.truthTable.length} combinaciones), función booleana (${page.booleanFunction}), y aplicaciones comunes como ${page.applications.join(', ')}. Datasheet incluido.`
  const imageUrl = page.datasheet.startsWith('http')
    ? page.datasheet
    : `https://bysmax.com${page.datasheet}` // Ensure absolute URL

  return {
    title: page.heading,
    description: description,
    openGraph: {
      title: page.heading,
      description: description,
      siteName: 'Bysmax', // Use consistent site name
      locale: 'es_MX',
      type: 'article',
      url: `https://bysmax.com/es/compuertas-logicas/${page.url}`, // Construct full canonical URL
      images: [
        {
          url: imageUrl, // Use absolute URL
          width: 1100, // Optional: Specify image dimensions if known
          height: 400, // Optional: Specify image dimensions if known
          alt: `Datasheet ${page.heading}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.heading,
      description: description,
      images: [imageUrl], // Use absolute URL
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
    headline: page.heading,
    description: `Aprende todo sobre la compuerta lógica ${page.heading}. Descubre su tabla de verdad, función booleana (${page.booleanFunction}), y aplicaciones comunes. Datasheet incluido.`,
    image: imageUrl,
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
    // Consider using a fixed build date or a date from your data source if available
    datePublished: new Date().toISOString(), // Or page.publishDate if available
    // dateModified: new Date().toISOString(), // Add if you track modifications
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
        {' '}
        {/* Assuming Sidebar handles its own layout/styling */}
        <h1 className="text-4xl font-bold">{page.heading}</h1>
        <p className="mt-2 text-lg">{page.description}</p>
        <p className="mt-4">
          La compuerta <strong>{page.heading}</strong> es un componente esencial en la electrónica
          digital, perteneciente a la familia de circuitos integrados {page.configuration}. Su
          función principal se define mediante la operación lógica{' '}
          <strong>{page.booleanFunction.split('=')[0].trim()}</strong>. A continuación, exploraremos
          sus características clave, incluyendo su tabla de verdad, función booleana detallada, y
          sus aplicaciones más frecuentes en el diseño de circuitos.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Left Column: Function, Applications, Truth Table */}
          <div>
            <h2 className="mb-2 text-xl font-semibold">Función Booleana</h2>
            <div className="mb-4 rounded-md bg-neutral-200 p-4 dark:bg-neutral-800">
              <code>{page.booleanFunction}</code>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Esta expresión define la salida (generalmente 'Y' o 'Q') en función de las entradas
                (generalmente 'A' y 'B').
              </p>
            </div>

            <h2 className="mb-2 text-xl font-semibold">Aplicaciones Comunes</h2>
            <div className="mb-4 rounded-md bg-neutral-200 p-4 dark:bg-neutral-800">
              <ul className="list-disc pl-5">
                {page.applications.map((app) => (
                  <li key={app}>{app}</li>
                ))}
              </ul>
            </div>

            <section className="mb-4">
              <h2 className="mb-2 text-xl font-semibold">Tabla de Verdad</h2>
              <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                La tabla de verdad muestra todas las posibles combinaciones de entrada y la salida
                resultante para la compuerta {page.heading}.
              </p>
              <div className="overflow-x-auto rounded-md bg-neutral-200 p-4 dark:bg-neutral-800">
                <Table>
                  <TableHeader>
                    <TableRow>
                      {/* Dynamically generate headers based on truthTable keys if needed, or keep fixed */}
                      <TableHead className="text-center">Entrada A</TableHead>
                      <TableHead className="text-center">Entrada B</TableHead>
                      <TableHead className="text-center">Salida</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {page.truthTable.map((row, index) => (
                      <TableRow
                        key={index}
                        className={index % 2 === 0 ? 'bg-neutral-100 dark:bg-neutral-700' : ''}
                      >
                        <TableCell className="text-center">{row['Entrada A']}</TableCell>
                        <TableCell className="text-center">{row['Entrada B']}</TableCell>
                        <TableCell className="text-center">{row.salida}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
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
                    <p>{page.packageInfo?.pinSpacing || 'No especificado'}</p> {/* Use fallback */}
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
