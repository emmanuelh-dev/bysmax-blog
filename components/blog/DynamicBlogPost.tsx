import React from 'react'
import { allBlogs, allAuthors, Blog } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { components } from '@/components/MDXComponents'
import { coreContent } from 'pliny/utils/contentlayer'
import type { Authors } from 'contentlayer/generated'
import AdComponent from '@/data/AdComponent'
import { SLOTS } from '@/data/ad-slots'
import { Clock } from 'lucide-react'
import siteMetadata from '@/data/siteMetadata'

interface DynamicBlogPostProps {
  slug: string
  locale?: string
  SidebarComponent?: React.ComponentType<{ children: React.ReactNode }>
  customJsonLd?: any
  showHeader?: boolean
  className?: string
}

export default function DynamicBlogPost({
  slug,
  locale = 'es',
  SidebarComponent,
  customJsonLd,
  showHeader = true,
  className = '',
}: DynamicBlogPostProps) {
  const posts = allBlogs
  const post = posts.filter((p) => p.language === locale).find((p) => p.slug === slug) as
    | Blog
    | undefined

  if (!post) {
    return (
      <div className="py-12 text-center">
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">Post not found</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          El post "{slug}" no fue encontrado para el locale "{locale}"
        </p>
      </div>
    )
  }

  const author = allAuthors.filter((a) => a.language === locale).find((a) => a.default === true)
  const authorList = post.authors || (author ? [author] : [])
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors
      .filter((a) => a.language === locale)
      .find((a) => a.slug.includes(author))
    return coreContent(authorResults as Authors)
  })

  // JSON-LD por defecto basado en los datos del post
  const defaultJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.summary || post.title,
    author: {
      '@type': 'Person',
      name: authorDetails[0]?.name || 'Emmanuel Herrera',
    },
    publisher: {
      '@type': 'Organization',
      name: siteMetadata.title,
    },
    datePublished: post.date,
    dateModified: post.lastmod || new Date().toISOString(),
    image: post.images?.[0] || '/static/images/default-blog.png',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://bysmax.com/${locale}/blog/${post.slug}`,
    },
    keywords: post.tags?.join(', '),
  }

  const jsonLdData = customJsonLd || defaultJsonLd

  const ContentWrapper = SidebarComponent || React.Fragment

  const content = (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdData),
        }}
      />

      {showHeader && (
        <header className="mx-auto mb-8 max-w-4xl space-y-4 text-center">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-neutral-900 dark:text-white lg:text-5xl">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{post.readingTime?.text || '10 min'}</span>
            </div>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString(siteMetadata.locale, {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </time>
          </div>
        </header>
      )}

      <AdComponent slot={SLOTS[0]} />

      <div className={`prose mx-auto w-full text-lg dark:prose-invert ${className}`}>
        <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} />
      </div>
    </>
  )

  return SidebarComponent ? <ContentWrapper>{content}</ContentWrapper> : <div>{content}</div>
}
