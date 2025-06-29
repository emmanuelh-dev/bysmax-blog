import React from 'react'
import { genPageMetadata } from '../../seo'
import siteMetadata from '@/data/siteMetadata'
import Sidebar from '../../compuertas-logicas/components/Sidebar'
import DynamicBlogPost from '@/components/blog/DynamicBlogPost'
import { generateBlogPostMetadata } from '@/lib/blog-metadata'

const SLUG = 'guia-completa-sobre-las-compuertas-logicas-7408-7432-7404-7400-y-7486'
const LOCALE = 'es'

// Generar metadata con sobrescrituras específicas optimizadas para datasheet
export const metadata = genPageMetadata(
  generateBlogPostMetadata(SLUG, LOCALE, {
    keywords:
      'datasheet 7408, datasheet 7432, datasheet 7404, datasheet 7400, datasheet 7486, compuertas logicas pdf, circuitos integrados TTL, 74HC series, pinout compuertas logicas, caracteristicas electricas, parametros tecnicos, hojas de datos, especificaciones tecnicas, voltaje alimentacion, corriente maxima, tiempo propagacion, familia logica TTL, DIP package, compuertas AND OR NOT NAND XOR',
    openGraph: {
      images: '/static/images/datashet-compuertas.jpg',
    },
    twitter: {
      images: '/static/images/datashet-compuertas.jpg',
    },
  })
)

// JSON-LD específico optimizado para datasheets
const customJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Article', 'TechArticle'],
  headline: 'Datasheet y Guía Completa de Compuertas Lógicas 7408, 7432, 7404, 7400 y 7486',
  description:
    'Datasheets completos y guía técnica de compuertas lógicas TTL: especificaciones eléctricas, pinout, parámetros técnicos y aplicaciones prácticas de las familias 74XX.',
  author: {
    '@type': 'Person',
    name: 'Emmanuel Herrera',
    url: 'https://bysmax.com',
  },
  publisher: {
    '@type': 'Organization',
    name: siteMetadata.title,
    url: 'https://bysmax.com',
  },
  image: {
    '@type': 'ImageObject',
    url: 'https://bysmax.com/static/images/datashet-compuertas.jpg',
    width: 1200,
    height: 630,
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `https://bysmax.com/${LOCALE}/blog/${SLUG}`,
  },
  about: [
    {
      '@type': 'Thing',
      name: 'Datasheets Compuertas Lógicas',
      description: 'Especificaciones técnicas y hojas de datos de circuitos integrados TTL',
    },
    {
      '@type': 'Thing',
      name: 'Familia TTL 74XX',
      description: 'Serie de circuitos integrados de lógica transistor-transistor',
    },
    {
      '@type': 'Thing',
      name: 'Especificaciones Eléctricas',
      description: 'Parámetros técnicos, voltajes y corrientes de operación',
    },
  ],
  mentions: [
    {
      '@type': 'Product',
      name: '7408 Datasheet',
      description: 'Circuito integrado con 4 compuertas AND de 2 entradas',
      manufacturer: { '@type': 'Organization', name: 'Texas Instruments' },
    },
    {
      '@type': 'Product',
      name: '7432 Datasheet',
      description: 'Circuito integrado con 4 compuertas OR de 2 entradas',
      manufacturer: { '@type': 'Organization', name: 'Texas Instruments' },
    },
    {
      '@type': 'Product',
      name: '7404 Datasheet',
      description: 'Circuito integrado con 6 compuertas NOT inversoras',
      manufacturer: { '@type': 'Organization', name: 'Texas Instruments' },
    },
    {
      '@type': 'Product',
      name: '7400 Datasheet',
      description: 'Circuito integrado con 4 compuertas NAND de 2 entradas',
      manufacturer: { '@type': 'Organization', name: 'Texas Instruments' },
    },
    {
      '@type': 'Product',
      name: '7486 Datasheet',
      description: 'Circuito integrado con 4 compuertas XOR de 2 entradas',
      manufacturer: { '@type': 'Organization', name: 'Texas Instruments' },
    },
  ],
  inLanguage: 'es',
  keywords: [
    'datasheet 7408',
    'datasheet 7432',
    'datasheet 7404',
    'datasheet 7400',
    'datasheet 7486',
    'TTL logic gates',
    'pinout diagrams',
    'electrical specifications',
    'truth tables',
    'logic gates pdf',
  ],
  educationalLevel: 'intermediate',
  learningResourceType: ['reference', 'tutorial'],
  teaches: [
    'TTL logic gate specifications',
    'Electrical parameters reading',
    'Pinout identification',
    'Circuit design with logic gates',
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
