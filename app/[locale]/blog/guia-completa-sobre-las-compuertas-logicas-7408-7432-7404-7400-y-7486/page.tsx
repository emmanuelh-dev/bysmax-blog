import React from 'react'
import { genPageMetadata } from '../../seo'
import siteMetadata from '@/data/siteMetadata'
import Sidebar from '../../compuertas-logicas/components/Sidebar'
import DynamicBlogPost from '@/components/blog/DynamicBlogPost'
import { generateBlogPostMetadata } from '@/lib/blog-metadata'

const SLUG = 'guia-completa-sobre-las-compuertas-logicas-7408-7432-7404-7400-y-7486'
const LOCALE = 'es'

// Generar metadata con sobrescrituras específicas
export const metadata = genPageMetadata(
  generateBlogPostMetadata(SLUG, LOCALE, {
    keywords:
      'compuertas logicas, 7408, 7432, 7404, 7400, 7486, circuitos digitales, electronica digital, compuertas AND, OR, NOT, NAND, XOR',
    openGraph: {
      images: '/static/images/compuertas-logicas.png',
    },
    twitter: {
      images: '/static/images/compuertas-logicas.png',
    },
  })
)

// JSON-LD específico para este post
const customJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Guía Completa sobre las Compuertas Lógicas 7408, 7432, 7404, 7400 y 7486',
  description:
    'Guía completa sobre compuertas lógicas digitales: funcionamiento, aplicaciones y circuitos práticos de las compuertas AND, OR, NOT, NAND y XOR.',
  author: {
    '@type': 'Person',
    name: 'Emmanuel Herrera',
  },
  publisher: {
    '@type': 'Organization',
    name: siteMetadata.title,
  },
  image: '/static/images/compuertas-logicas.png',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `https://bysmax.com/${LOCALE}/blog/${SLUG}`,
  },
  about: [
    {
      '@type': 'Thing',
      name: 'Compuertas Lógicas',
      description: 'Circuitos digitales fundamentales para la electrónica',
    },
    {
      '@type': 'Thing',
      name: 'Electrónica Digital',
      description: 'Rama de la electrónica que utiliza señales digitales',
    },
  ],
  mentions: [
    { '@type': 'Thing', name: '7408 AND' },
    { '@type': 'Thing', name: '7432 OR' },
    { '@type': 'Thing', name: '7404 NOT' },
    { '@type': 'Thing', name: '7400 NAND' },
    { '@type': 'Thing', name: '7486 XOR' },
  ],
}

export default function Page() {
  return (
    <DynamicBlogPost
      slug={SLUG}
      locale={LOCALE}
      SidebarComponent={Sidebar}
      customJsonLd={customJsonLd}
      showHeader={true}
    />
  )
}
