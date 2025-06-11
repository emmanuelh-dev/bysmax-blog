import Image from '@/components/Image'
import Link from 'next/link'
import React from 'react'
import { LOGICGATES } from '@/data/logic-gates'
import Sidebar from './components/Sidebar'
import { genPageMetadata } from '@/app/[locale]/seo'
import { SectionContainerWithAds } from '@/components/SectionContainer'
import Script from 'next/script'
import SupabaseCommentsWrapper from '@/components/comments/SupabaseCommentsWrapper'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

export const metadata = genPageMetadata({
  title: 'Guía Completa sobre las Compuertas Lógicas 7408, 7432, 7404, 7400 y 7486',
  description:
    'Explora nuestra guía completa sobre las compuertas lógicas 7408 (AND), 7432 (OR), 7404 (NOT), 7400 (NAND) y 7486 (XOR). Aprende sobre sus tablas de verdad, funciones booleanas, aplicaciones y cómo se usan en circuitos integrados.',
  openGraph: {
    title: 'Guía Completa sobre las Compuertas Lógicas 7408, 7432, 7404, 7400 y 7486',
    description:
      'Explora nuestra guía completa sobre las compuertas lógicas 7408 (AND), 7432 (OR), 7404 (NOT), 7400 (NAND) y 7486 (XOR). Aprende sobre sus tablas de verdad, funciones booleanas, aplicaciones y cómo se usan en circuitos integrados.',
    images: '/static/images/compuertas.png',
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    title: 'Guía Completa sobre las Compuertas Lógicas 7408, 7432, 7404, 7400 y 7486',
    card: '/static/images/compuertas.png',
    images: '/static/images/compuertas.png',
  },
})

export default function page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://bysmax.com/es', // Assuming 'es' locale, adjust if needed
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Compuertas Lógicas',
        item: 'https://bysmax.com/es/compuertas-logicas', // Assuming 'es' locale, adjust if needed
      },
    ],
  }

  return (
    <SectionContainerWithAds>
      <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <Sidebar>
          <div className="mx-auto max-w-4xl">
            {/* Hero Section */}
            <header className="mb-12">
              <h1 className="mb-6 text-4xl font-semibold tracking-tight text-[#0a0a0a] dark:text-white">
                Guía Completa sobre las Compuertas Lógicas
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-[#737373]">
                Explora los componentes fundamentales de la electrónica digital. Aprende sobre las
                series más comunes:{' '}
                <span className="font-medium text-[#0a0a0a] dark:text-white">7408 (AND)</span>,
                <span className="font-medium text-[#0a0a0a] dark:text-white"> 7432 (OR)</span>,
                <span className="font-medium text-[#0a0a0a] dark:text-white"> 7404 (NOT)</span>,
                <span className="font-medium text-[#0a0a0a] dark:text-white"> 7400 (NAND)</span> y
                <span className="font-medium text-[#0a0a0a] dark:text-white"> 7486 (XOR)</span>.
              </p>

              {/* Featured Images */}
              <div className="grid gap-6 md:grid-cols-2">
                <Image
                  src="/static/images/compuertas.png"
                  width={550}
                  height={300}
                  alt="Guía Completa sobre las Series 7408, 7432, 7404, 7400 y 7486"
                />
                <Image
                  src="/static/images/datashet-compuertas.jpg"
                  width={550}
                  height={300}
                  alt="Guía Completa con datasheet las Series 7408, 7432, 7404, 7400 y 7486"
                />
              </div>
            </header>

            {/* Ad Section */}
            <div>
              <ins
                className="adsbygoogle h-[280px] w-full bg-white dark:bg-black"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-3646138644530578"
                data-ad-slot="6395288197"
                data-ad-format="auto"
                data-full-width-responsive="true"
              ></ins>
            </div>

            {/* Logic Gates Grid */}
            <section className="mb-16">
              <h2 className="mb-8 text-2xl font-semibold tracking-tight text-[#0a0a0a] dark:text-white">
                Compuertas Lógicas Disponibles
              </h2>
              <div className="grid gap-8">
                {LOGICGATES.map((gate) => (
                  <article
                    key={gate.heading}
                    className="rounded-lg border border-[#e5e5e5] bg-white p-6 transition-all duration-200 hover:border-[#0070f3] hover:shadow-sm dark:border-[#333333] dark:bg-[#0a0a0a] dark:hover:border-[#0070f3]"
                  >
                    {/* Gate Header */}
                    <header className="mb-6">
                      <h3 className="mb-3 text-xl font-semibold text-[#0a0a0a] dark:text-white">
                        <Link
                          href={`/compuertas-logicas/${gate.url}`}
                          className="transition-colors hover:text-[#0070f3]"
                        >
                          {gate.heading}
                        </Link>
                      </h3>
                      <p className="mb-4 text-[#737373]">{gate.description}</p>

                      {/* Gate Info */}
                      <div className="grid gap-4 md:grid-cols-3">
                        <div>
                          <span className="text-sm font-medium text-[#737373]">Configuración</span>
                          <p className="font-medium text-[#0a0a0a] dark:text-white">
                            {gate.configuration}
                          </p>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-[#737373]">
                            Función Booleana
                          </span>
                          <code className="block rounded bg-[#f9f9f9] px-2 py-1 text-sm font-medium text-[#0a0a0a] dark:bg-[#1a1a1a] dark:text-white">
                            {gate.booleanFunction}
                          </code>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-[#737373]">Aplicaciones</span>
                          <p className="text-sm text-[#0a0a0a] dark:text-white">
                            {gate.applications.slice(0, 2).join(', ')}
                            {gate.applications.length > 2 && '...'}
                          </p>
                        </div>
                      </div>
                    </header>

                    {/* Content Grid */}
                    <div className="grid gap-6 lg:grid-cols-2">
                      {/* Truth Table */}
                      <div>
                        <h4 className="mb-3 text-sm font-medium text-[#737373]">Tabla de Verdad</h4>
                        <div className="overflow-hidden rounded-lg border border-[#e5e5e5] dark:border-[#333333]">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b border-[#e5e5e5] bg-[#f9f9f9] dark:border-[#333333] dark:bg-[#1a1a1a]">
                                <th className="px-4 py-3 text-left text-sm font-medium text-[#0a0a0a] dark:text-white">
                                  Entrada A
                                </th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-[#0a0a0a] dark:text-white">
                                  Entrada B
                                </th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-[#0a0a0a] dark:text-white">
                                  Salida
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {gate.truthTable.map((row, index) => (
                                <tr
                                  key={index}
                                  className="border-b border-[#e5e5e5] last:border-0 dark:border-[#333333]"
                                >
                                  <td className="px-4 py-3 text-sm text-[#0a0a0a] dark:text-white">
                                    {row['Entrada A']}
                                  </td>
                                  <td className="px-4 py-3 text-sm text-[#0a0a0a] dark:text-white">
                                    {row['Entrada B']}
                                  </td>
                                  <td className="px-4 py-3 text-sm font-medium text-[#0a0a0a] dark:text-white">
                                    {row.salida}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Datasheet */}
                      <div>
                        <h4 className="mb-3 text-sm font-medium text-[#737373]">
                          Datasheet y Diagrama
                        </h4>
                        <figure>
                          <Image
                            src={gate.datasheet}
                            width={400}
                            height={250}
                            alt={`Datasheet ${gate.heading}`}
                            className="w-full rounded-lg"
                          />
                          <figcaption className="mt-2 text-center text-sm text-[#737373]">
                            Datasheet {gate.heading}
                          </figcaption>
                        </figure>
                      </div>
                    </div>

                    {/* View Details Link */}
                    <div className="mt-6 flex justify-end">
                      <Link
                        href={`/compuertas-logicas/${gate.url}`}
                        className="inline-flex items-center rounded-lg border border-[#e5e5e5] px-4 py-2 text-sm font-medium text-[#0a0a0a] transition-all duration-200 hover:border-[#0070f3] hover:text-[#0070f3] dark:border-[#333333] dark:text-white dark:hover:border-[#0070f3] dark:hover:text-[#0070f3]"
                      >
                        Ver detalles completos
                        <svg
                          className="ml-2 h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Comments and Navigation */}
            <div className="space-y-8">
              <SupabaseCommentsWrapper slug="/compuertas-logicas" />
              <ScrollTopAndComment />
            </div>

            {/* Educational Content */}
            <section className="mt-16 space-y-12">
              <div>
                <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[#0a0a0a] dark:text-white">
                  Cómo Funcionan las Compuertas Lógicas
                </h2>
                <div className="space-y-6 text-[#737373]">
                  <p className="leading-relaxed">
                    Las compuertas lógicas son dispositivos electrónicos que realizan operaciones
                    lógicas básicas basadas en el{' '}
                    <span className="font-medium text-[#0a0a0a] dark:text-white">
                      álgebra de Boole
                    </span>
                    . Operan con señales binarias (0 y 1, bajo y alto voltaje) y son los bloques de
                    construcción esenciales de todos los{' '}
                    <span className="font-medium text-[#0a0a0a] dark:text-white">
                      sistemas digitales
                    </span>
                    .
                  </p>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-lg border border-[#e5e5e5] p-6 dark:border-[#333333]">
                      <h3 className="mb-3 font-medium text-[#0a0a0a] dark:text-white">
                        Activo Alto y Activo Bajo
                      </h3>
                      <p className="text-sm leading-relaxed">
                        Un pin bajo activo debe conectarse a un nivel lógico bajo (0 voltios) para
                        activarse, mientras que un pin alto activo debe conectarse a un nivel lógico
                        alto (3 o 5 voltios).
                      </p>
                    </div>

                    <div className="rounded-lg border border-[#e5e5e5] p-6 dark:border-[#333333]">
                      <h3 className="mb-3 font-medium text-[#0a0a0a] dark:text-white">
                        Circuitos Integrados
                      </h3>
                      <p className="text-sm leading-relaxed">
                        Se implementan en <span className="font-medium">ICs</span> como los de la
                        familia
                        <span className="font-medium"> TTL</span> o{' '}
                        <span className="font-medium">CMOS</span>, para ahorrar espacio y aumentar
                        la eficiencia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[#0a0a0a] dark:text-white">
                  Aplicaciones Principales
                </h2>
                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    { name: '7408', desc: 'Sistemas de control con condición AND' },
                    { name: '7432', desc: 'Circuitos con condición OR' },
                    { name: '7404', desc: 'Inversión de señales digitales' },
                    { name: '7400', desc: 'Creación de flip-flops y almacenamiento' },
                    { name: '7486', desc: 'Comparación de señales' },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className="rounded-lg border border-[#e5e5e5] p-4 dark:border-[#333333]"
                    >
                      <h3 className="mb-2 font-medium text-[#0a0a0a] dark:text-white">
                        {item.name}
                      </h3>
                      <p className="text-sm text-[#737373]">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </Sidebar>
      </div>
    </SectionContainerWithAds>
  )
}
