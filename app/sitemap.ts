import { MetadataRoute } from 'next'
import { allBlogs, allCursos, allAuthors } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'
import { i18nConfig } from '@/data/i18n/config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteMetadata.siteUrl

  // Rutas estáticas principales para cada idioma
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

  // Crear entradas para cada ruta y cada idioma
  const staticRoutes: MetadataRoute.Sitemap = []

  for (const route of routes) {
    for (const locale of i18nConfig.locales) {
      const url = `${baseUrl}${locale === i18nConfig.defaultLocale ? '' : `/${locale}`}${route}`

      staticRoutes.push({
        url,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : route.includes('/blog') ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : route.includes('/blog') ? 0.8 : 0.6,
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

  // Posts del blog dinámicos
  const blogRoutes: MetadataRoute.Sitemap = allBlogs
    .filter((post) => !post.draft)
    .map((post) => ({
      url: `${baseUrl}${post.language === i18nConfig.defaultLocale ? '' : `/${post.language}`}/blog/${post.slug}`,
      lastModified: new Date(post.lastmod || post.date),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
      alternates: {
        languages: Object.fromEntries(
          i18nConfig.locales.map((lang) => {
            // Buscar el post en el idioma correspondiente
            const localizedPost = allBlogs.find(
              (p) => p.slug === post.slug && p.language === lang && !p.draft
            )

            if (localizedPost) {
              return [
                lang,
                `${baseUrl}${lang === i18nConfig.defaultLocale ? '' : `/${lang}`}/blog/${localizedPost.slug}`,
              ]
            }

            // Si no existe en ese idioma, usar el post original
            return [
              lang,
              `${baseUrl}${lang === i18nConfig.defaultLocale ? '' : `/${lang}`}/blog/${post.slug}`,
            ]
          })
        ),
      },
    }))

  // Cursos dinámicos
  const cursoRoutes: MetadataRoute.Sitemap = allCursos.map((curso) => ({
    url: `${baseUrl}${curso.language === i18nConfig.defaultLocale ? '' : `/${curso.language}`}/cursos/${curso.slug}`,
    lastModified: new Date(curso.lastmod || curso.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
    alternates: {
      languages: Object.fromEntries(
        i18nConfig.locales.map((lang) => {
          // Buscar el curso en el idioma correspondiente
          const localizedCurso = allCursos.find((c) => c.slug === curso.slug && c.language === lang)

          if (localizedCurso) {
            return [
              lang,
              `${baseUrl}${lang === i18nConfig.defaultLocale ? '' : `/${lang}`}/cursos/${localizedCurso.slug}`,
            ]
          }

          // Si no existe en ese idioma, usar el curso original
          return [
            lang,
            `${baseUrl}${lang === i18nConfig.defaultLocale ? '' : `/${lang}`}/cursos/${curso.slug}`,
          ]
        })
      ),
    },
  }))

  // Autores dinámicos
  const authorRoutes: MetadataRoute.Sitemap = allAuthors.map((author) => ({
    url: `${baseUrl}${author.language === i18nConfig.defaultLocale ? '' : `/${author.language}`}/author/${author.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
    alternates: {
      languages: Object.fromEntries(
        i18nConfig.locales.map((lang) => {
          // Buscar el autor en el idioma correspondiente
          const localizedAuthor = allAuthors.find(
            (a) => a.slug === author.slug && a.language === lang
          )

          if (localizedAuthor) {
            return [
              lang,
              `${baseUrl}${lang === i18nConfig.defaultLocale ? '' : `/${lang}`}/author/${localizedAuthor.slug}`,
            ]
          }

          // Si no existe en ese idioma, usar el autor original
          return [
            lang,
            `${baseUrl}${lang === i18nConfig.defaultLocale ? '' : `/${lang}`}/author/${author.slug}`,
          ]
        })
      ),
    },
  }))

  // Tags dinámicos del blog
  const tagRoutes: MetadataRoute.Sitemap = []
  const uniqueTags = new Set<string>()

  allBlogs
    .filter((post) => !post.draft)
    .forEach((post) => {
      post.tags?.forEach((tag) => {
        if (!uniqueTags.has(`${tag}-${post.language}`)) {
          uniqueTags.add(`${tag}-${post.language}`)

          tagRoutes.push({
            url: `${baseUrl}${post.language === i18nConfig.defaultLocale ? '' : `/${post.language}`}/tags/${tag}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.4,
            alternates: {
              languages: Object.fromEntries(
                i18nConfig.locales.map((lang) => [
                  lang,
                  `${baseUrl}${lang === i18nConfig.defaultLocale ? '' : `/${lang}`}/tags/${tag}`,
                ])
              ),
            },
          })
        }
      })
    })

  return [...staticRoutes, ...blogRoutes, ...cursoRoutes, ...authorRoutes, ...tagRoutes]
}
