import { allBlogs } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'

export function generateBlogPostMetadata(slug: string, locale: string = 'es', customOverrides?: any) {
  const post = allBlogs
    .filter((p) => p.language === locale)
    .find((p) => p.slug === slug)

  if (!post) {
    return {
      title: 'Post not found',
      description: 'El post solicitado no fue encontrado',
      keywords: '',
    }
  }

  const baseMetadata = {
    title: post.title,
    description: post.summary || post.title,
    keywords: post.tags?.join(', ') || '',
    openGraph: {
      title: post.title,
      description: post.summary || post.title,
      siteName: siteMetadata.title,
      locale: `${locale}_MX`,
      url: `./${slug}`,
      images: post.images?.[0] || '/static/images/default-blog.png',
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.lastmod || post.date,
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: post.title,
      description: post.summary || post.title,
      images: post.images?.[0] || '/static/images/default-blog.png',
    },
    alternates: {
      canonical: `./${slug}`,
    },
  }

  // Merge con las sobrescrituras personalizadas
  if (customOverrides) {
    return {
      ...baseMetadata,
      ...customOverrides,
      openGraph: {
        ...baseMetadata.openGraph,
        ...customOverrides.openGraph,
      },
      twitter: {
        ...baseMetadata.twitter,
        ...customOverrides.twitter,
      },
    }
  }

  return baseMetadata
}
