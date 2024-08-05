import { Button } from '@/components/ui/button'
import { CheckIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import { genPageMetadata } from '@/app/[locale]/seo'
import Image from '@/components/Image'
import NextImage from 'next/image'
import { LocaleTypes } from '@/app/[locale]/i18n/settings'
import SuspencePosts from '@/layouts/components/SuspencePosts'
import dynamic from 'next/dynamic'

interface PageProps {
  params: { locale: LocaleTypes }
}

const FAQ = [
  {
    seccion: '¿Qué es Proteus?',
    contenido: [
      'Proteus es un software de diseño y simulación de circuitos electrónicos desarrollado por Labcenter Electronics. Es ampliamente utilizado por ingenieros, técnicos y estudiantes para crear y probar circuitos de manera virtual. Con Proteus, puedes diseñar y simular circuitos electrónicos en tu computadora, lo que te permite verificar su funcionamiento antes de construirlos físicamente. Esto no solo ahorra tiempo, sino también recursos al evitar errores en la etapa de diseño.',
    ],
  },
  {
    seccion: 'Características Principales de Proteus',
    contenido: [
      'Simulación en Tiempo Real: Puedes ver cómo se comporta tu circuito mientras lo estás diseñando, lo que facilita la detección y corrección de errores.',
      'Biblioteca de Componentes: Incluye una amplia variedad de componentes electrónicos, como resistencias, transistores, microcontroladores, sensores y más.',
      'Diseño de PCB: Además de simular circuitos, puedes diseñar placas de circuito impreso (PCB) para tus proyectos, lo que te permite pasar del diseño a la producción de manera eficiente.',
      'Visualización 3D: Proporciona una vista en 3D de tus PCB, permitiéndote visualizar cómo se verá el diseño final una vez ensamblado.',
      'Compatibilidad con Microcontroladores: Simula una gran variedad de microcontroladores, como los de la familia PIC, AVR y ARM, permitiendo probar el código directamente en el entorno simulado.',
    ],
  },
  {
    seccion: '¿Cómo Descargar Proteus?',
    contenido: [
      'Da click en descargar.',
      'Descarga proteus.exe',
      'Instalalo: Una vez lo descargaste, solo instalalo.',
      'Ejecuta como administrador: Una vez instalado, ejecutalo como administrador y todo debería funcionar correctamente.',
      'El software está en inglés, puedes descargar el paquete de español y la librería de arduino si la requieres.',
    ],
  },
  {
    seccion: '¿Cómo Instalar Proteus?',
    contenido: [
      'Ejecuta el Instalador: Abre el archivo que descargaste y sigue las instrucciones en pantalla.',
      'Acepta los Términos y Condiciones: Lee y acepta los términos de uso del software.',
      'Selecciona la Ubicación de Instalación: Elige dónde quieres instalar Proteus en tu computadora.',
      'Completa la Instalación: Una vez hecho esto, el instalador copiará todos los archivos necesarios y configura el software para que esté listo para usar.',
      'Ejecuta como administrador.',
    ],
  },
  {
    seccion: '¿Por Qué Usar Proteus?',
    contenido: [
      'Ahorro de Tiempo y Dinero: Al simular tus circuitos antes de construirlos, puedes identificar y corregir errores sin gastar en componentes físicos.',
      'Facilidad de Uso: Proteus tiene una interfaz amigable y es fácil de aprender, incluso para quienes están comenzando en el mundo de la electrónica.',
      'Aprendizaje Interactivo: Es una excelente herramienta educativa que permite a los estudiantes experimentar y aprender haciendo, probando diferentes configuraciones y viendo los resultados en tiempo real.',
      'Versatilidad: Proteus es adecuado tanto para proyectos simples como para diseños complejos, adaptándose a las necesidades de diferentes usuarios.',
      'Soporte y Comunidad: Existe una gran comunidad de usuarios de Proteus que comparte tutoriales, ejemplos y soluciones a problemas comunes, facilitando el aprendizaje y la resolución de dudas.',
    ],
  },
  {
    seccion: 'Conclusión',
    contenido: [
      'Proteus es una herramienta poderosa para diseñar y simular circuitos electrónicos. Su capacidad de simular en tiempo real, junto con una amplia biblioteca de componentes, lo convierte en una opción ideal tanto para principiantes como para expertos. Descargar e instalar Proteus es un proceso sencillo que te permitirá empezar a diseñar y probar tus propios circuitos sin necesidad de invertir en componentes físicos.',
    ],
  },
]

const images = [
  { src: '/static/images/proteus/3.png', alt: 'Descargar Proteus Imagen Circuito' },
  { src: '/static/images/virus-total-proteus.png', alt: 'Descargar Proteus Virus Total Image 1' },
  { src: '/static/images/proteus/2.png', alt: 'Descargar Proteus Imagen Home' },
]

export const metadata = genPageMetadata({
  title: 'Descargar Proteus 8 gratis para PC',
  description:
    'Proteus 8 es una herramienta de diseño y simulación de circuitos electrónicos que te permite crear y probar tus proyectos de manera sencilla y eficiente.',
})

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    image:
      'https://img-19.ccm.net/e-taDvkvQtl8wkrumfhmxP8gCvg=/80x80/2d9d38064f2f43b3813892fc0b55963f/ccmcms-esccm/38118736.png',
    name: 'Proteus',
    applicationCategory: 'BusinessApplication',
    downloadUrl: 'https://es.ccm.net/descargas/profesional/7974-proteus-para-pc/',
    description:
      'Proteus Design Suite es uno de los programas de dise\u00f1o electr\u00f3nico m\u00e1s utilizados del mercado. Sus versiones m\u00e1s recientes, adem\u00e1s, nos permiten crear simulaciones de dispositivos f\u00e1cilmente en nuestro PC utilizando las herramientas de Arduino.',
    offers: { '@type': 'Offer', price: 0, priceCurrency: 'EUR' },
    fileSize: '688,8 Mo',
    operatingSystem: 'Windows 7,Windows 8,Windows 10,Windows 11',
    softwareVersion: '8.16.36097.0',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingCount: 9,
      ratingValue: 4.3,
      bestRating: 5,
      worstRating: 1,
    },
  },
]

const Recommended = dynamic(() => import('@/layouts/components/Recomended'), {
  loading: () => <SuspencePosts />,
  ssr: false,
})

export default function Page({ params: { locale } }: PageProps) {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-sm text-neutral-400">
            Descargar Proteus Design Suite 8 gratis para PC
          </h1>
          <p className="mb-4 text-6xl font-bold">Descargar Proteus 8</p>
          <p className="text-muted-foreground mb-6">
            Proteus 8 es una herramienta de diseño y simulación de circuitos electrónicos que te
            permite crear y probar tus proyectos de manera sencilla y eficiente.
          </p>
          <div className="flex gap-4">
            <a
              className={buttonVariants({ variant: 'default' })}
              href="https://drive.google.com/drive/u/0/folders/1RZ3G9JXHu8lDZnKep8JWQYhilmPvsR-r"
            >
              Descargar Ahora
            </a>
            <Link className={buttonVariants({ variant: 'outline' })} href="#requisitos">
              Requisitos del sistema
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <NextImage
            src="/static/images/proteus/3.png"
            alt="Proteus 8"
            width={800}
            height={800}
            className="aspect-square rounded-lg object-cover shadow-lg"
          />
        </div>
      </section>
      <section>
        <div className="py-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Galeria</h2>
          <Gallery gallery={images} />
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32" id="requisitos">
        <div>
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Requisitos del sistema
              </h2>
              <ul className="mt-4 grid gap-4">
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0" />
                  <div>
                    <h3 className="font-medium">Sistema operativo</h3>
                    <p>Proteus es compatible con Windows 7, 8, 10 y 11.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0" />
                  <div>
                    <h3 className="font-medium">Procesador</h3>
                    <p>Se recomienda un procesador de 2 GHz o superior.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0" />
                  <div>
                    <h3 className="font-medium">Memoria RAM</h3>
                    <p>Se recomienda al menos 4 GB de RAM.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0" />
                  <div>
                    <h3 className="font-medium">Espacio en disco</h3>
                    <p>Se necesitan al menos 2 GB de espacio libre en disco.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start gap-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Descarga Proteus ahora
              </h2>
              <p className="md:text-xl/relaxed">
                ¡Comienza a diseñar y simular tus proyectos electrónicos con Proteus hoy mismo! Haz
                clic en el botón de descarga para obtener la última versión.
              </p>
              <a
                href="https://drive.google.com/drive/u/0/folders/1RZ3G9JXHu8lDZnKep8JWQYhilmPvsR-r"
                className={buttonVariants({ variant: 'default' })}
              >
                Descargar Proteus
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-muted w-full py-12 md:py-24 lg:py-32">
        <div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Preguntas Frecuentes
              </h2>
              <p className="text-lg text-neutral-400">
                Aquí encontrarás las respuestas a las preguntas más comunes sobre Proteus.
              </p>
            </div>
            <div className="w-full space-y-4">
              <Accordion type="single" collapsible>
                {FAQ.map((faq, i) => (
                  <AccordionItem value={`item-${i}`} key={i}>
                    <AccordionTrigger className="text-lg">
                      <h3>{faq.seccion}</h3>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="text-sm">
                        {faq.contenido.map((item) => (
                          <li key={item} className="list-disc">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      <section id="resources" className="bg-muted py-12 md:py-24 lg:py-32">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Recursos sobre Proteus
            </h2>
            <p className="text-lg text-neutral-400">
              Explora más sobre Proteus y cómo utilizarlo en tus proyectos.
            </p>
          </div>
          <div className="grid md:grid-cols-2" />
        </div>
        <Recommended tags={['proteus']} locale={locale} />
      </section>
    </main>
  )
}

function Gallery({ gallery }) {
  if (!gallery) return null

  return (
    <Carousel className="my-10 w-full overflow-hidden">
      <CarouselContent>
        {gallery.map((image, index) => (
          <CarouselItem key={index} className="basis-10/12 pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Image
                src={image.src}
                alt={image.alt || `Gallery image ${index + 1}`}
                className="aspect-square object-cover"
                width="1270"
                height="300"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
