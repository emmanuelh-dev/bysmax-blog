'use client'

import { useState, useMemo } from 'react'
import { nav } from '@/data/headerNavLinks'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { Search, X, ExternalLink } from 'lucide-react'

export default function SitemapSearch() {
  const [searchQuery, setSearchQuery] = useState('')

  // Aplanar todos los enlaces para facilitar la búsqueda
  const allLinks = useMemo(() => {
    return nav.flatMap((section) =>
      section.links.map((link) => ({
        ...link,
        category: section.title,
      }))
    )
  }, [])

  // Filtrar enlaces basado en la búsqueda
  const filteredLinks = useMemo(() => {
    if (!searchQuery.trim()) return []

    const query = searchQuery.toLowerCase()
    return allLinks.filter(
      (link) =>
        link.title.toLowerCase().includes(query) ||
        link.description?.toLowerCase().includes(query) ||
        link.category.toLowerCase().includes(query) ||
        link.href.toLowerCase().includes(query)
    )
  }, [searchQuery, allLinks])

  const clearSearch = () => {
    setSearchQuery('')
  }

  return (
    <div className="space-y-4">
      {/* Barra de búsqueda */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder="Buscar en el sitio web... (ej: arduino, calculadora, proteus)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-10"
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearSearch}
            className="absolute right-1 top-1/2 h-8 w-8 -translate-y-1/2 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Resultados de búsqueda */}
      {searchQuery && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Resultados de búsqueda
            </h3>
            <Badge variant="secondary">
              {filteredLinks.length} {filteredLinks.length === 1 ? 'resultado' : 'resultados'}
            </Badge>
          </div>

          {filteredLinks.length > 0 ? (
            <div className="grid gap-3">
              {filteredLinks.map((link, index) => (
                <Card key={index} className="transition-all hover:shadow-md">
                  <CardContent className="p-4">
                    <Link href={link.href} className="group flex items-start gap-3">
                      {link.icon && (
                        <link.icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                      )}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium text-gray-900 group-hover:text-blue-600 dark:text-gray-100 dark:group-hover:text-blue-400">
                            {link.title}
                          </h4>
                          {link.href.startsWith('http') && (
                            <ExternalLink className="h-3 w-3 text-gray-400" />
                          )}
                        </div>
                        {link.description && (
                          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            {link.description}
                          </p>
                        )}
                        <div className="mt-2 flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {link.category}
                          </Badge>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {link.href}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-6 text-center">
                <Search className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-gray-100">
                  No se encontraron resultados
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Intenta con otros términos de búsqueda o navega por las categorías.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {/* Sugerencias cuando no hay búsqueda */}
      {!searchQuery && (
        <div className="rounded-lg border border-gray-200 bg-gray-50/50 p-4 dark:border-gray-700 dark:bg-gray-800/50">
          <h4 className="mb-2 font-medium text-gray-900 dark:text-gray-100">
            Sugerencias de búsqueda:
          </h4>
          <div className="flex flex-wrap gap-2">
            {['Arduino', 'Calculadora', 'Proteus', 'Traccar', 'Componentes', 'Reparación'].map(
              (suggestion) => (
                <Button
                  key={suggestion}
                  variant="outline"
                  size="sm"
                  onClick={() => setSearchQuery(suggestion)}
                  className="h-auto px-3 py-1 text-xs"
                >
                  {suggestion}
                </Button>
              )
            )}
          </div>
        </div>
      )}
    </div>
  )
}
