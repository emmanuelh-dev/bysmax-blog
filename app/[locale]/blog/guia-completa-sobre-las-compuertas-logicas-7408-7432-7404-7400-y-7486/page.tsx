import React from 'react'
import { genPageMetadata } from '../../seo'
import siteMetadata from '@/data/siteMetadata'
import Sidebar from '../../compuertas-logicas/components/Sidebar'
import DynamicBlogPost from '@/components/blog/DynamicBlogPost'
import { generateBlogPostMetadata } from '@/lib/blog-metadata'
import { LocaleTypes } from '../../i18n/settings'

const SLUG = 'guia-completa-sobre-las-compuertas-logicas-7408-7432-7404-7400-y-7486'

interface Props {
  params: { locale: LocaleTypes }
}

// Generar metadata dinámico basado en el locale
export async function generateMetadata({ params: { locale } }: Props) {
  return genPageMetadata(
    generateBlogPostMetadata(SLUG, locale, {
      keywords:
        locale === 'es'
          ? 'datasheet 7408, datasheet 7432, datasheet 7404, datasheet 7400, datasheet 7486, compuertas logicas pdf, circuitos integrados TTL, 74HC series, pinout compuertas logicas, caracteristicas electricas, parametros tecnicos, hojas de datos, especificaciones tecnicas, voltaje alimentacion, corriente maxima, tiempo propagacion, familia logica TTL, DIP package, compuertas AND OR NOT NAND XOR'
          : locale === 'pt'
            ? 'datasheet 7408, datasheet 7432, datasheet 7404, datasheet 7400, datasheet 7486, portas logicas pdf, circuitos integrados TTL, serie 74HC, pinout portas logicas, caracteristicas eletricas, parametros tecnicos, folhas de dados, especificacoes tecnicas, tensao alimentacao, corrente maxima, tempo propagacao, familia logica TTL, DIP package, portas AND OR NOT NAND XOR'
            : 'datasheet 7408, datasheet 7432, datasheet 7404, datasheet 7400, datasheet 7486, logic gates pdf, TTL integrated circuits, 74HC series, logic gates pinout, electrical characteristics, technical parameters, data sheets, technical specifications, supply voltage, maximum current, propagation time, TTL logic family, DIP package, AND OR NOT NAND XOR gates',
      openGraph: {
        images: '/static/images/datashet-compuertas.jpg',
      },
      twitter: {
        images: '/static/images/datashet-compuertas.jpg',
      },
    })
  )
}

// Función para generar JSON-LD dinámico basado en locale
function generateCustomJsonLd(locale: LocaleTypes) {
  return {
    '@context': 'https://schema.org',
    '@type': ['Article', 'TechArticle'],
    headline:
      locale === 'es'
        ? 'Datasheet y Guía Completa de Compuertas Lógicas 7408, 7432, 7404, 7400 y 7486'
        : locale === 'pt'
          ? 'Datasheet e Guia Completo de Portas Lógicas 7408, 7432, 7404, 7400 e 7486'
          : 'Complete Datasheet and Guide for Logic Gates 7408, 7432, 7404, 7400 and 7486',
    description:
      locale === 'es'
        ? 'Datasheets completos y guía técnica de compuertas lógicas TTL: especificaciones eléctricas, pinout, parámetros técnicos y aplicaciones prácticas de las familias 74XX.'
        : locale === 'pt'
          ? 'Datasheets completos e guia técnico de portas lógicas TTL: especificações elétricas, pinout, parâmetros técnicos e aplicações práticas das famílias 74XX.'
          : 'Complete datasheets and technical guide for TTL logic gates: electrical specifications, pinout, technical parameters and practical applications of the 74XX families.',
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
      '@id': `https://bysmax.com/${locale}/blog/${SLUG}`,
    },
    about: [
      {
        '@type': 'Thing',
        name:
          locale === 'es'
            ? 'Datasheets Compuertas Lógicas'
            : locale === 'pt'
              ? 'Datasheets Portas Lógicas'
              : 'Logic Gates Datasheets',
        description:
          locale === 'es'
            ? 'Especificaciones técnicas y hojas de datos de circuitos integrados TTL'
            : locale === 'pt'
              ? 'Especificações técnicas e folhas de dados de circuitos integrados TTL'
              : 'Technical specifications and data sheets for TTL integrated circuits',
      },
      {
        '@type': 'Thing',
        name:
          locale === 'es'
            ? 'Familia TTL 74XX'
            : locale === 'pt'
              ? 'Família TTL 74XX'
              : 'TTL 74XX Family',
        description:
          locale === 'es'
            ? 'Serie de circuitos integrados de lógica transistor-transistor'
            : locale === 'pt'
              ? 'Série de circuitos integrados de lógica transistor-transistor'
              : 'Series of transistor-transistor logic integrated circuits',
      },
      {
        '@type': 'Thing',
        name:
          locale === 'es'
            ? 'Especificaciones Eléctricas'
            : locale === 'pt'
              ? 'Especificações Elétricas'
              : 'Electrical Specifications',
        description:
          locale === 'es'
            ? 'Parámetros técnicos, voltajes y corrientes de operación'
            : locale === 'pt'
              ? 'Parâmetros técnicos, tensões e correntes de operação'
              : 'Technical parameters, operating voltages and currents',
      },
    ],
    mentions: [
      {
        '@type': 'Product',
        name: '7408 Datasheet',
        description:
          locale === 'es'
            ? 'Circuito integrado con 4 compuertas AND de 2 entradas'
            : locale === 'pt'
              ? 'Circuito integrado com 4 portas AND de 2 entradas'
              : 'Integrated circuit with 4 two-input AND gates',
        manufacturer: { '@type': 'Organization', name: 'Texas Instruments' },
      },
      {
        '@type': 'Product',
        name: '7432 Datasheet',
        description:
          locale === 'es'
            ? 'Circuito integrado con 4 compuertas OR de 2 entradas'
            : locale === 'pt'
              ? 'Circuito integrado com 4 portas OR de 2 entradas'
              : 'Integrated circuit with 4 two-input OR gates',
        manufacturer: { '@type': 'Organization', name: 'Texas Instruments' },
      },
      {
        '@type': 'Product',
        name: '7404 Datasheet',
        description:
          locale === 'es'
            ? 'Circuito integrado con 6 compuertas NOT inversoras'
            : locale === 'pt'
              ? 'Circuito integrado com 6 portas NOT inversoras'
              : 'Integrated circuit with 6 NOT inverter gates',
        manufacturer: { '@type': 'Organization', name: 'Texas Instruments' },
      },
      {
        '@type': 'Product',
        name: '7400 Datasheet',
        description:
          locale === 'es'
            ? 'Circuito integrado con 4 compuertas NAND de 2 entradas'
            : locale === 'pt'
              ? 'Circuito integrado com 4 portas NAND de 2 entradas'
              : 'Integrated circuit with 4 two-input NAND gates',
        manufacturer: { '@type': 'Organization', name: 'Texas Instruments' },
      },
      {
        '@type': 'Product',
        name: '7486 Datasheet',
        description:
          locale === 'es'
            ? 'Circuito integrado con 4 compuertas XOR de 2 entradas'
            : locale === 'pt'
              ? 'Circuito integrado com 4 portas XOR de 2 entradas'
              : 'Integrated circuit with 4 two-input XOR gates',
        manufacturer: { '@type': 'Organization', name: 'Texas Instruments' },
      },
    ],
    inLanguage: locale,
    keywords:
      locale === 'es'
        ? [
            'datasheet 7408',
            'datasheet 7432',
            'datasheet 7404',
            'datasheet 7400',
            'datasheet 7486',
            'compuertas logicas TTL',
            'diagramas pinout',
            'especificaciones electricas',
            'tablas de verdad',
            'compuertas logicas pdf',
          ]
        : locale === 'pt'
          ? [
              'datasheet 7408',
              'datasheet 7432',
              'datasheet 7404',
              'datasheet 7400',
              'datasheet 7486',
              'portas logicas TTL',
              'diagramas pinout',
              'especificacoes eletricas',
              'tabelas de verdade',
              'portas logicas pdf',
            ]
          : [
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
    teaches:
      locale === 'es'
        ? [
            'Especificaciones de compuertas lógicas TTL',
            'Lectura de parámetros eléctricos',
            'Identificación de pinout',
            'Diseño de circuitos con compuertas lógicas',
          ]
        : locale === 'pt'
          ? [
              'Especificações de portas lógicas TTL',
              'Leitura de parâmetros elétricos',
              'Identificação de pinout',
              'Design de circuitos com portas lógicas',
            ]
          : [
              'TTL logic gate specifications',
              'Electrical parameters reading',
              'Pinout identification',
              'Circuit design with logic gates',
            ],
  }
}

export default function Page({ params: { locale } }: Props) {
  const customJsonLd = generateCustomJsonLd(locale)

  return (
    <DynamicBlogPost
      slug={SLUG}
      locale={locale}
      SidebarComponent={Sidebar}
      customJsonLd={customJsonLd}
      showHeader={true}
    />
  )
}
