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
  title: 'ESP32 vs Arduino: Diferencias, Comparación y Cuál Elegir 2024',
  description:
    'Comparación completa ESP32 vs Arduino Uno y Mega. Descubre las diferencias técnicas, precios, conectividad WiFi/Bluetooth y cuál elegir para tu proyecto IoT.',
  keywords:
    'esp32 vs arduino, arduino vs esp32, diferencia entre arduino y esp32, esp32 vs arduino uno, arduino uno vs esp32, arduino mega vs esp32, esp32 arduino, microcontrolador, iot, wifi bluetooth',
  openGraph: {
    title: 'ESP32 vs Arduino: Guía Completa de Diferencias y Comparación 2024',
    description:
      'Guía definitiva para elegir entre ESP32 y Arduino. Comparamos Uno, Mega, características técnicas, precios, conectividad y aplicaciones prácticas.',
    siteName: siteMetadata.title,
    locale: 'es_MX',
    url: './',
    images: '/static/images/ardino-vs-esp32.png',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ESP32 vs Arduino: Diferencias y Cuál Elegir para tu Proyecto',
    description:
      'Comparación técnica completa entre ESP32 y Arduino (Uno/Mega). Conectividad WiFi, precios, rendimiento y guía de decisión.',
    images: '/static/images/ardino-vs-esp32.png',
  },
  alternates: {
    canonical: './diferencia-entre-un-esp32-y-un-arduino',
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
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'ESP32 vs Arduino: Diferencias y Comparación Completa',
            description:
              'Comparación técnica detallada entre ESP32 y Arduino (Uno, Mega). Características, precios, conectividad WiFi/Bluetooth y guía de decisión.',
            author: {
              '@type': 'Person',
              name: 'Emmanuel Herrera',
            },
            publisher: {
              '@type': 'Organization',
              name: siteMetadata.title,
            },
            datePublished: '2024-05-12',
            dateModified: new Date().toISOString(),
            image: '/static/images/ardino-vs-esp32.png',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://bysmax.com/es/blog/diferencia-entre-un-esp32-y-un-arduino',
            },
            about: [
              {
                '@type': 'Thing',
                name: 'ESP32',
                description: 'Microcontrolador con WiFi y Bluetooth integrado',
              },
              {
                '@type': 'Thing',
                name: 'Arduino',
                description: 'Plataforma de desarrollo de hardware libre',
              },
            ],
            mentions: [
              { '@type': 'Thing', name: 'Arduino Uno' },
              { '@type': 'Thing', name: 'Arduino Mega' },
              { '@type': 'Thing', name: 'ESP32' },
              { '@type': 'Thing', name: 'IoT' },
              { '@type': 'Thing', name: 'Microcontrolador' },
            ],
          }),
        }}
      />

      <div className="prose mx-auto w-full text-lg dark:prose-invert">
        <QuickComparisonButtons locale={locale} />
        <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} />
      </div>
    </PostLayout>
  )
}
