import { Metadata } from 'next'
import Link from 'next/link'
import { nav } from '@/data/headerNavLinks'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { createTranslation } from '../i18n/server'
import SitemapNavigation from '@/components/SitemapNavigation'
import SitemapSearch from '@/components/SitemapSearch'
import { Search, BookOpen, Users, Globe, BookMarked } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mapa del Sitio - Bysmax',
  description:
    'Navega por todas las secciones de Bysmax. Encuentra herramientas, cursos, guías, software y servicios de manera fácil y organizada.',
  openGraph: {
    title: 'Mapa del Sitio - Bysmax',
    description:
      'Navega por todas las secciones de Bysmax. Encuentra herramientas, cursos, guías, software y servicios de manera fácil y organizada.',
    type: 'website',
  },
}

interface SitemapPageProps {
  params: {
    locale: string
  }
}

export default async function SitemapPage({ params: { locale } }: SitemapPageProps) {
  const { t } = await createTranslation(locale, 'common')

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {/* Hero Section */}
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <div className="flex items-center gap-3">
          <Globe className="h-10 w-10 text-blue-600 dark:text-blue-400" />
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Mapa del Sitio
          </h1>
        </div>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Explora todas las secciones disponibles en Bysmax. Encuentra fácilmente lo que necesitas
          para aprender y crecer.
        </p>

        {/* Quick Stats */}
        <div className="flex flex-wrap gap-4 pt-4">
          <div className="flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 dark:bg-blue-950/20">
            <BookOpen className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {nav.length} Categorías
            </span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-green-50 px-3 py-2 dark:bg-green-950/20">
            <Search className="h-4 w-4 text-green-600 dark:text-green-400" />
            <span className="text-sm font-medium text-green-700 dark:text-green-300">
              {nav.reduce((total, section) => total + section.links.length, 0)} Enlaces
            </span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-purple-50 px-3 py-2 dark:bg-purple-950/20">
            <Users className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
              Siempre Actualizado
            </span>
          </div>
        </div>
      </div>

      <div className="container py-12">
        {/* Búsqueda del sitio */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
            Buscar en el Sitio
          </h2>
          <SitemapSearch />
        </div>

        {/* Navegación Principal Mejorada */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
            Navegación por Categorías
          </h2>
          <SitemapNavigation />
        </div>

        {/* Sección detallada de todas las categorías */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
            Todas las Secciones Detalladas
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {nav.map((section, index) => (
              <Card key={index} className="h-fit transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">{section.title}</CardTitle>
                  <CardDescription>
                    {section.links.length} {section.links.length === 1 ? 'enlace' : 'enlaces'}{' '}
                    disponibles
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <div key={linkIndex} className="group">
                        <Link
                          href={link.href}
                          className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                          {link.icon && (
                            <link.icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                          )}
                          <div className="min-w-0 flex-1">
                            <h3 className="font-medium text-gray-900 group-hover:text-blue-600 dark:text-gray-100 dark:group-hover:text-blue-400">
                              {link.title}
                            </h3>
                            {link.description && (
                              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                {link.description}
                              </p>
                            )}
                            <div className="mt-2">
                              <Badge variant="secondary" className="text-xs">
                                {link.href.startsWith('http') ? 'Externo' : 'Interno'}
                              </Badge>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Páginas principales con iconos */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
            Páginas Principales
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                href: '/blog',
                title: 'Blog',
                description: 'Artículos y tutoriales',
                icon: BookMarked,
              },
              {
                href: '/contacto',
                title: 'Contacto',
                description: 'Ponte en contacto con nosotros',
                icon: Users,
              },
              {
                href: '/help',
                title: 'Ayúdanos',
                description: 'Contribuye al proyecto',
                icon: BookOpen,
              },
              {
                href: '/store',
                title: 'Tienda',
                description: 'Productos y servicios',
                icon: Search,
              },
            ].map((page, index) => (
              <Link
                key={index}
                href={page.href}
                className="group block rounded-lg border border-gray-200 p-6 transition-all hover:border-blue-300 hover:bg-blue-50 hover:shadow-md dark:border-gray-700 dark:hover:border-blue-600 dark:hover:bg-blue-950/20"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/20">
                  <page.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 dark:text-gray-100 dark:group-hover:text-blue-400">
                  {page.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{page.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Información del sitio mejorada */}
        <div className="rounded-lg border border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50 p-6 dark:border-gray-700 dark:from-blue-950/20 dark:to-purple-950/20">
          <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
            Información del Sitio
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/20">
                  <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100">Categorías</h3>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{nav.length}</p>
            </div>
            <div className="text-center">
              <div className="mb-2 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
                  <Search className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100">Enlaces Totales</h3>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                {nav.reduce((total, section) => total + section.links.length, 0)}
              </p>
            </div>
            <div className="text-center">
              <div className="mb-2 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/20">
                  <Globe className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100">Estado</h3>
              <p className="text-lg font-bold text-purple-600 dark:text-purple-400">Actualizado</p>
            </div>
          </div>
          <div className="mt-6 rounded-lg bg-white/50 p-4 dark:bg-gray-900/50">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <strong>Nota:</strong> Este mapa del sitio se actualiza automáticamente cuando se
              agregan nuevas secciones o enlaces. Utiliza la navegación para explorar todas las
              herramientas, cursos y recursos disponibles.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
