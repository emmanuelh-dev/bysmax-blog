import React from 'react'
import { genPageMetadata } from '../../seo'
import siteMetadata from '@/data/siteMetadata'
import { allBlogs, allAuthors, Blog } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { components } from '@/components/MDXComponents'
import QuickComparisonButtons from '@/components/arduino/QuickComparisonButtons'
import PostLayout from '@/layouts/PostLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import type { Authors } from 'contentlayer/generated'

export const metadata = genPageMetadata({
  title: 'ESP32 vs Arduino Diferencias y Características',
  description:
    'Hoy hablaremos las diferencias entre un ESP32 y un Arduino sus capacidades de conectividad y potencia de procesamiento.',
  openGraph: {
    title: 'ESP32 vs Arduino Diferencias y Características',
    description:
      'Hoy hablaremos las diferencias entre un ESP32 y un Arduino sus capacidades de conectividad y potencia de procesamiento.',
    siteName: siteMetadata.title,
    locale: 'es_MX',
    url: './',
    images: '/static/images/ardino-vs-esp32.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ESP32 vs Arduino Diferencias y Características',
    description:
      'Hoy hablaremos las diferencias entre un ESP32 y un Arduino sus capacidades de conectividad y potencia de procesamiento.',
    images: '/static/images/ardino-vs-esp32.png',
  },
})

export default function Page() {
  return <Content />
}

const Content = async ({ locale = 'es' }) => {
  const posts = allBlogs
  const post = posts
    .filter((p) => p.language === locale)
    .find((p) => p.slug === 'diferencia-entre-un-esp32-y-un-arduino') as Blog

  if (!post) {
    return <div>Post not found</div>
  }

  const author = allAuthors.filter((a) => a.language === locale).find((a) => a.default === true)
  const authorList = post.authors || (author ? [author] : [])
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors
      .filter((a) => a.language === locale)
      .find((a) => a.slug.includes(author))
    return coreContent(authorResults as Authors)
  })

  return (
    <PostLayout content={coreContent(post)} authorDetails={authorDetails} next={null} prev={null}>
      <div className="prose text-lg dark:prose-invert">
        <QuickComparisonButtons locale={locale} />
        <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} />
      </div>
    </PostLayout>
  )
}
