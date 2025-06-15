import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://electronica.bysmax.com'

  return [
    {
      url: `${baseUrl}/es/software/proteus`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          es: `${baseUrl}/es/software/proteus`,
          en: `${baseUrl}/en/software/proteus`,
          fr: `${baseUrl}/fr/software/proteus`,
          pt: `${baseUrl}/pt/software/proteus`,
        },
      },
    },
  ]
}
