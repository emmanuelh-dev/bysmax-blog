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
      <div className="max-w-sm rounded-md border">
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
      </nav>{' '}
    </Sidebar>
  )
}
