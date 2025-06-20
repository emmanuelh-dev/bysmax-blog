import { MetadataRoute } from 'next'
import siteMetadata from '@/data/siteMetadata'
import { i18nConfig } from '@/data/i18n/config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteMetadata.siteUrl

  // Rutas estáticas principales
  const routes = [
    '',
    '/blog',
    '/servicios',
    '/software',
    '/help',
    '/author',
    '/about',
    '/cursos',
    '/traccar',
    '/componentes-electronicos',
    '/compuertas-logicas',
    '/servicios/reparacion-de-computadoras-en-monterrey',
    '/servicios/reparacion-de-computadoras-en-guadalupe',
    '/servicios/reparacion-de-computadoras-en-san-nicolas',
    '/cursos/curso-de-python-basico',
    '/software/proteus',
    '/software/pseint',
    '/componentes-electronicos/compuertas-logicas',
    '/traccar/tutoriales',
  ]

  const staticRoutes: MetadataRoute.Sitemap = []

  for (const route of routes) {
    for (const locale of i18nConfig.locales) {
      const url = `${baseUrl}${locale === i18nConfig.defaultLocale ? '' : `/${locale}`}${route}`

      staticRoutes.push({
        url,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : route.includes('/blog') ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : route.includes('/servicios') ? 0.8 : 0.6,
        alternates: {
          languages: Object.fromEntries(
            i18nConfig.locales.map((lang) => [
              lang,
              `${baseUrl}${lang === i18nConfig.defaultLocale ? '' : `/${lang}`}${route}`,
            ])
          ),
        },
      })
    }
  }

  return staticRoutes
}
