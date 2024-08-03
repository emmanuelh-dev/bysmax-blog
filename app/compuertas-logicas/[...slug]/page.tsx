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
import Recommended from 'app/Recommended'
import { Metadata } from 'next'
import Image from '@/components/Image'

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

export default async function Page({ params }: { params: { slug: string[] } }) {
  const slug = decodeURI(params.slug.join('/'))

  const page = LOGICGATES.find((p) => p.url === slug)

  if (!page) return notFound()

  return (
    <Sidebar>
      <h1 className="text-4xl font-bold">{page.heading}</h1>
      <p>{page.description}</p>
      <h2 className="text-2xl font-bold">Tabla de verdad {page.heading}</h2>

      <div className="">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold">AND Gate</h2>
            <div className="mb-6 flex justify-center">
              <div className="bg-primary rounded-full p-4">aqui va un icono</div>
            </div>
            <p className="text-muted-foreground mb-4">
              The AND gate is a digital logic gate that implements the Boolean AND operation. It has
              two or more inputs and one output. The output is HIGH (1) only when all the inputs are
              HIGH (1).
            </p>
            <div className="mb-4 rounded-lg bg-neutral-200 p-4 dark:bg-neutral-800">
              <h3 className="mb-2 text-lg font-bold">Funcion Booleana</h3>
              <p className="text-muted-foreground">Y = A AND B</p>
            </div>
            <section className="mb-4 rounded-lg bg-neutral-200 p-4 dark:bg-neutral-800">
              <h3 className="mb-2 text-lg font-bold">Tabla de Verdad</h3>
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
            </section>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold">Datasheet</h2>
            <figure>
              <Image
                src={page.datasheet}
                width={1100}
                height={400}
                alt={`datasheet ${page.heading}`}
                className="w-full rounded-md"
              />
              <figcaption>{`datasheet ${page.heading}`}</figcaption>
            </figure>
            <div className="mb-4 rounded-lg bg-neutral-200 p-4 dark:bg-neutral-800">
              <h3 className="mb-2 text-lg font-bold">Electrical Characteristics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-muted-foreground">Operating Voltage</p>
                  <p>3.3V - 5V</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Maximum Input Current</p>
                  <p>10mA</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Maximum Output Current</p>
                  <p>20mA</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Propagation Delay</p>
                  <p>10ns</p>
                </div>
              </div>
            </div>
            <div className="mb-4 rounded-lg bg-neutral-200 p-4 dark:bg-neutral-800">
              <h3 className="mb-2 text-lg font-bold">Package Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-muted-foreground">Package Type</p>
                  <p>DIP-14</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Pin Pitch</p>
                  <p>2.54mm</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Width</p>
                  <p>7.62mm</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Length</p>
                  <p>19.05mm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <h2 className="text-2xl font-bold">{page.heading} Datasheet</h2>
        <figure>
          <Image src={page.datasheet} width={1100} height={400} alt={`datasheet ${page.heading}`} />
          <figcaption>{`datasheet ${page.heading}`}</figcaption>
        </figure>
      </section>
      <nav aria-labelledby="recommended-projects">
        <h2 id="recommended-projects" className="text-2xl font-bold">
          Proyectos relacionados con {slug}
        </h2>
        <Recommended tags={[slug]} title={`Proyectos con ${slug}`} />
      </nav>
    </Sidebar>
  )
}
