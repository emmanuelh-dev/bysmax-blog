import { MetadataRoute } from 'next'
import { allBlogs } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'
import { i18nConfig } from '@/data/i18n/config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteMetadata.siteUrl

  return allBlogs
    .filter((post) => !post.draft)
    .map((post) => ({
      url: `${baseUrl}${post.language === i18nConfig.defaultLocale ? '' : `/${post.language}`}/blog/${post.slug}`,
      lastModified: new Date(post.lastmod || post.date),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
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
}
