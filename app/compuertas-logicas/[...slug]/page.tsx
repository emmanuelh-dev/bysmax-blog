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
export default async function Page({ params }: { params: { slug: string[] } }) {
  const slug = decodeURI(params.slug.join('/'))

  const page = LOGICGATES.find((p) => p.url === slug)

  if (!page) return notFound()

  return (
    <div>
      <Sidebar>
        <h1 className="text-4xl font-bold">{page.heading}</h1>
        <p>{page.description}</p>
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
        <Recommended tags={[slug]} title={`Proyectos con ${slug}`} />
      </Sidebar>
    </div>
  )
}
