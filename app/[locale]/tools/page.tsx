'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { QrCode } from 'lucide-react'
import Link from 'next/link'
import TOOLS from '@/data/tools'



export default function Page() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredTools = TOOLS.filter(
    (tool) =>
      tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-3xl font-bold">Herramientas</h1>
      <Input
        type="search"
        placeholder="Buscar herramientas..."
        className="mb-8"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {filteredTools.map((tool, index) => (
          <Card key={index} className="transition-shadow duration-300 hover:shadow-lg">
            <CardHeader className="flex flex-row items-center space-x-4 pb-2">
              <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full">
                <tool.icon className="text-primary h-6 w-6" />
              </div>
              <CardTitle>
                <Link href={tool.href}>{tool.title}</Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{tool.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
