import React from 'react'
import { LOGICGATES } from '@/data/logic-gates'
import { notFound } from 'next/navigation'
import Sidebar from '../components/Sidebar'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Metadata } from 'next'
import Image from '@/components/Image'
import { LocaleTypes } from '../../i18n/settings'
import dynamic from 'next/dynamic'
import SuspencePosts from '@/layouts/components/SuspencePosts'

interface Props {
  params: { slug: string[]; locale: LocaleTypes }
}
export async function generateMetadata({
  params,
}: {
  params: { slug: string[] }
}): Promise<Metadata | undefined> {
  const slug = decodeURI(params.slug.join('/'))
  const page = LOGICGATES.find((p) => p.url === slug)

  if (!page) return

  return {
    title: page.heading,
    description: page.description,
    openGraph: {
      title: page.heading,
      description: page.description,
      siteName: page.heading,
      locale: 'es_MX',
      type: 'article',
      url: './',
      images: page.datasheet,
    },
    twitter: {
      card: 'summary_large_image',
      title: page.heading,
      description: page.description,
      images: page.datasheet,
    },
  }
}

const Recommended = dynamic(() => import('@/app/[locale]/Recommended'), {
  loading: () => <SuspencePosts />,
  ssr: false,
})
export default async function Page({ params: { locale, slug } }: Props) {
  const decodeSlug = decodeURI(slug.join('/'))

  const page = LOGICGATES.find((p) => p.url === decodeSlug)

  if (!page) return notFound()

  return (
    <Sidebar>
      <h1 className="text-4xl font-bold">{page.heading}</h1>
      <p>{page.description}</p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-2 text-lg font-bold">Funcion Booleana</h2>
          <div className="mb-4 rounded-lg bg-neutral-200 p-4 dark:bg-neutral-800">
            <p className="text-muted-foreground">Y = A AND B</p>
          </div>
          <section className="mb-4">
            <h2 className="mb-2 text-lg font-bold">Tabla de Verdad</h2>
            <div className="rounded-lg bg-neutral-200 p-4 dark:bg-neutral-800">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Entrada A</TableHead>
                    <TableHead>Entrada B</TableHead>
                    <TableHead>Salida</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {page.truthTable.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row['Entrada A']}</TableCell>
                      <TableCell>{row['Entrada B']}</TableCell>
                      <TableCell>{row.salida}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </section>
        </div>
        <div>
          <h2 className="mb-4 text-2xl font-bold">Datasheet</h2>
          <figure className="pb-4">
            <Image
              src={page.datasheet}
              width={1100}
              height={400}
              alt={`datasheet ${page.heading}`}
              className="w-full rounded-md"
            />
            <figcaption className="text-sm">{`datasheet ${page.heading}`}</figcaption>
          </figure>
          <div>
            <h2 className="mb-2 text-lg font-bold">Características Eléctricas</h2>
            <div className="mb-4 rounded-lg bg-neutral-200 p-4 dark:bg-neutral-800">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-muted-foreground">Voltaje de Operación</p>
                  <p>3.3V - 5V</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Corriente de Entrada Máxima</p>
                  <p>10mA</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Corriente de Salida Máxima</p>
                  <p>20mA</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Retardo de Propagación</p>
                  <p>10ns</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-bold">Información del Paquete</h2>
            <div className="mb-4 rounded-lg bg-neutral-200 p-4 dark:bg-neutral-800">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-muted-foreground">Tipo de Paquete</p>
                  <p>DIP-14</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Paso de Patilla</p>
                  <p>2.54mm</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Ancho</p>
                  <p>7.62mm</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Longitud</p>
                  <p>19.05mm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav aria-labelledby="recommended-projects">
        <h2 id="recommended-projects" className="text-2xl font-bold">
          Proyectos con {slug}
        </h2>
        <Recommended tags={[slug]} locale={locale} />
      </nav>
    </Sidebar>
  )
}
