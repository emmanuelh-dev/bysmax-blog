import Image from '@/components/Image'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Link from 'next/link'
import React from 'react'
import { LOGICGATES } from '@/data/logic-gates'
import Sidebar from './components/Sidebar'
import { genPageMetadata } from '@/app/[locale]/seo'
import { SectionContainerWithAds } from '@/components/SectionContainer'
import Script from 'next/script'

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
    <div className="container mx-auto max-w-7xl">
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <Sidebar>
        <div>
          <h1 className="pb-8 text-4xl font-bold">
            Guía Completa sobre las Compuertas Lógicas 7408, 7432, 7404, 7400 y 7486
          </h1>
          <p className="mb-6 text-lg">
            Bienvenido a nuestra guía exhaustiva sobre las <strong>compuertas lógicas</strong>, los
            componentes fundamentales de la electrónica digital. Aquí exploraremos en detalle las
            series más comunes como la <strong>7408 (AND)</strong>, <strong>7432 (OR)</strong>,{' '}
            <strong>7404 (NOT)</strong>, <strong>7400 (NAND)</strong> y <strong>7486 (XOR)</strong>.
            Aprende sobre sus principios de funcionamiento basados en el{' '}
            <strong>álgebra booleana</strong>, sus tablas de verdad, cómo se representan en{' '}
            <strong>circuitos integrados (ICs)</strong> y sus diversas aplicaciones en el diseño de{' '}
            <strong>circuitos digitales</strong>, desde simples operaciones lógicas hasta la
            construcción de microprocesadores y memorias.
          </p>
          <div className="gap-8 md:flex">
            <Image
              src={'/static/images/compuertas.png'}
              width={1100}
              height={400}
              alt="Guía Completa sobre las Series 7408, 7432, 7404, 7400 y 7486"
            />
            <Image
              src={'/static/images/datashet-compuertas.jpg'}
              width={1100}
              height={400}
              alt="Guía Completa con datasheet las Series 7408, 7432, 7404, 7400 y 7486"
            />
          </div>
          <div>
            <ins
              className="adsbygoogle my-6 h-[280px] w-full rounded-md bg-neutral-400 dark:bg-neutral-900 max-sm:aspect-square"
              style={{ display: 'block' }}
              data-ad-client="ca-pub-3646138644530578"
              data-ad-slot="6395288197"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
          </div>
          {LOGICGATES.map((gate) => (
            <div key={gate.heading} className="space-y-4 pt-4">
              <article>
                <header>
                  <h2 className="text-2xl font-bold">
                    <Link href={`/compuertas-logicas/${gate.url}`}>{gate.heading}</Link>
                  </h2>
                  <p>{gate.description}</p>
                  <p>
                    <strong>Configuración:</strong> {gate.configuration}
                  </p>
                  <p>
                    <strong>Función Booleana:</strong> <code>{gate.booleanFunction}</code>
                  </p>
                  <p>
                    <strong>Aplicaciones Comunes:</strong> {gate.applications.join(', ')}
                  </p>
                </header>
                <section className="flex w-full flex-col justify-around gap-6 py-6 md:flex-row">
                  <div className="md:w-1/3">
                    <div className=" rounded-md bg-neutral-200 p-4 dark:bg-neutral-800">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Entrada A</TableHead>
                            <TableHead>Entrada B</TableHead>
                            <TableHead>Salida</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {gate.truthTable.map((row, index) => (
                            <TableRow key={index}>
                              <TableCell>{row['Entrada A']}</TableCell>
                              <TableCell>{row['Entrada B']}</TableCell>
                              <TableCell>{row.salida}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                  <section>
                    <figure>
                      <Image
                        src={gate.datasheet}
                        width={1100}
                        height={400}
                        alt={`datasheet ${gate.heading}`}
                      />
                      <figcaption>{`datasheet ${gate.heading}`}</figcaption>
                    </figure>
                  </section>
                </section>
              </article>
            </div>
          ))}
          <div className="prose dark:prose-invert">
            <h2>Cómo Funcionan las Compuertas Lógicas</h2>
            <p>
              Las compuertas lógicas son dispositivos electrónicos que realizan operaciones lógicas
              básicas basadas en el <strong>álgebra de Boole</strong>. Operan con señales binarias
              (0 y 1, bajo y alto voltaje) y son los bloques de construcción esenciales de todos los{' '}
              <strong>sistemas digitales</strong>, incluyendo computadoras, smartphones y otros
              dispositivos electrónicos. Entender su funcionamiento es clave para el diseño y
              análisis de <strong>circuitos digitales</strong>.
            </p>
            <h3>Activo Alto y Activo Bajo</h3>
            <p>
              Entender el concepto de <strong>activo alto y activo bajo</strong> es esencial para
              trabajar con compuertas lógicas. Un pin bajo activo debe conectarse a un nivel lógico
              bajo (0 voltios) para activarse, mientras que un pin alto activo debe conectarse a un
              nivel lógico alto (3 o 5 voltios).
            </p>

            <h3>Implementación en Circuitos Integrados (ICs)</h3>
            <p>
              Las compuertas lógicas se implementan en <strong>circuitos integrados (ICs)</strong>,
              como los de la familia <strong>TTL (Transistor-Transistor Logic)</strong> o{' '}
              <strong>CMOS (Complementary Metal-Oxide-Semiconductor)</strong>, para ahorrar espacio
              y aumentar la eficiencia. Por ejemplo, el IC 7408 contiene cuatro compuertas AND de
              dos entradas en un solo chip.
            </p>

            <h3>Operaciones Complejas</h3>
            <p>
              Combinando diferentes compuertas lógicas, se pueden realizar operaciones complejas.
              Por ejemplo, un flip-flop, que se utiliza para almacenar datos, puede construirse
              combinando compuertas NAND.
            </p>

            <h2>Aplicaciones de las Compuertas Lógicas</h2>

            <h3>Electrónica Digital</h3>
            <p>
              Las compuertas lógicas son la base de todos los dispositivos electrónicos digitales.
              Se utilizan en la creación de <strong>microprocesadores</strong>,{' '}
              <strong>memorias (RAM, ROM)</strong>, unidades aritmético-lógicas (ALU) y dispositivos
              de almacenamiento.
            </p>

            <h3>Diseño de Circuitos</h3>
            <p>
              En el diseño de circuitos, las compuertas lógicas permiten la implementación de
              funciones booleanas y la creación de sistemas de control digital.
            </p>

            <h3>Ejemplos Prácticos</h3>
            <ul>
              <li>
                <strong>7408</strong>: Utilizado en sistemas de control donde se requiere una
                condición AND.
              </li>
              <li>
                <strong>7432</strong>: Común en circuitos donde se necesita una condición OR.
              </li>
              <li>
                <strong>7404</strong>: Usado para invertir señales en circuitos digitales.
              </li>
              <li>
                <strong>7400</strong>: Componente esencial en la creación de flip-flops y otros
                dispositivos de almacenamiento.
              </li>
              <li>
                <strong>7486</strong>: Implementado en sistemas que requieren comparación de
                señales.
              </li>
            </ul>

            <h2>Conclusión</h2>
            <p>
              Las <strong>compuertas lógicas</strong> son componentes fundamentales en la{' '}
              <strong>electrónica digital</strong> y la <strong>ingeniería informática</strong>.
              Comprender cómo funcionan las compuertas 7408, 7432, 7404, 7400 y 7486 es crucial para
              cualquier persona interesada en la electrónica o el diseño de sistemas digitales.
              Estas compuertas permiten la creación de circuitos complejos y son esenciales en la
              mayoría de los dispositivos electrónicos que utilizamos hoy en día.
            </p>
            <p>
              Ahora que tienes una comprensión básica de las compuertas lógicas, puedes explorar más
              sobre cómo se utilizan en diferentes aplicaciones y experimentos prácticos en
              electrónica. ¡Adéntrate en el fascinante mundo de las compuertas lógicas y descubre
              cómo forman la base de la tecnología moderna!
            </p>
          </div>
        </div>
      </Sidebar>
    </div>
  )
}
