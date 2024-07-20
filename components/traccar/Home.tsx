import Link from 'next/link'
import { Button, buttonVariants } from '@/components/ui/button'
import { genPageMetadata } from 'app/seo'
import { cn } from 'lib/utils'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { BookText, Play } from 'lucide-react'

const metadata = genPageMetadata({
  title: 'Curso Gratuito de Traccar desde Cero hasta Avanzado en español',
  description:
    'Este curso en español te guiará desde la configuración inicial de tu propio servidor de rastreo hasta la gestión avanzada de dispositivos y la personalización de la plataforma.',
})

const TEMARIO = [
  {
    title: 'Introducción al Tracking y Traccar',
    show: false,
    description: 'Logística y funcionamiento de Traccar, instalación en VPS',
    sectiones: [
      {
        title: 'Logística y funcionamiento de Traccar',
        link: 'URL_DE_LA_section',
        type: 'doc',
      },
      {
        title: 'Instalación en VPS',
        link: 'URL_DE_LA_section',
        type: 'doc',
      },
    ],
  },
  {
    title: 'Instalacion y configuracion Básica de Traccar',
    show: true,
    description:
      'Usuarios y dispositivos, mapas y geocercas, integraciones, alertas y notificaciones',
    sectiones: [
      {
        title: 'Instalación de Traccar',
        link: 'https://www.youtube.com/watch?v=ZSVYhKHmXe8&list=PLjsxenlAapaC_gAQtYoUZa4tq5BhXdmWV&index=2',
        type: 'video',
      },
      {
        title: 'Instalación de Traccar',
        link: '/blog/como-instalar-traccar-en-ubuntu-en-digitalocean',
        type: 'doc',
      },
    ],
  },
  {
    title: 'Agrega tu primer dispositivo a Traccar',
    show: true,
    description:
      'Usuarios y dispositivos, mapas y geocercas, integraciones, alertas y notificaciones',
    sectiones: [
      {
        title: 'Instalación de Traccar',
        link: 'https://www.youtube.com/watch?v=ZSVYhKHmXe8&list=PLjsxenlAapaC_gAQtYoUZa4tq5BhXdmWV&index=2',
        type: 'video',
      },
      {
        title: 'Instalación de Traccar',
        link: '/blog/como-instalar-traccar-en-ubuntu-en-digitalocean',
        type: 'doc',
      },
    ],
  },
  {
    title: 'Personalización y branding de la plataforma Traccar WEB',
    show: true,
    description: 'Configuración avanzada, theming',
    sectiones: [
      {
        title: 'Cómo Personalizar el branding de Traccar',
        link: 'https://www.youtube.com/watch?v=7B9Y7OERjo8&list=PLjsxenlAapaC_gAQtYoUZa4tq5BhXdmWV&index=3',
        type: 'video',
      },
      {
        title: 'Cómo Personalizar el branding de Traccar',
        link: '/blog/traccar/como-personalizar-la-aplicacion-web-de-traccar',
        type: 'doc',
      },
      {
        title: 'Cómo Personalizar la Aplicación Web de Traccar HTML React',
        link: 'https://www.youtube.com/watch?v=S5N441XGW7M&list=PLjsxenlAapaC_gAQtYoUZa4tq5BhXdmWV',
        type: 'video',
      },
      {
        title: 'Cómo Personalizar la Aplicación Web de Traccar HTML React',
        link: '/blog/traccar/como-personalizar-traccar-web',
        type: 'doc',
      },
    ],
  },
  {
    title: 'Optimización y Mantenimiento de Traccar',
    show: true,
    description: 'Rendimiento, copias de seguridad, escalabilidad',
    sectiones: [
      {
        title: 'Archivo de configuración de traccar',
        link: '/blog/traccar/traccar-filters-configuration-guide-optimizing-gps-tracking-with-xml-settings',
        type: 'doc',
      },
      {
        title: 'Limpiar o eliminar el historial de Traccar',
        link: '/blog/traccar/removingpurging-old-tracking-data',
        type: 'doc',
      },
      {
        title: 'Balanceadores de carga para Traccar',
        link: '/blog/traccar/traccar-filters-configuration-guide-optimizing-gps-tracking-with-xml-settings',
        type: 'doc',
      },
    ],
  },
  {
    title: 'Casos de Uso y Proyectos Avanzados',
    show: false,
    description: 'Flotas de vehículos, seguridad personal y laboral, proyectos finales',
    sectiones: [
      {
        title: 'Flotas de vehículos',
        link: 'URL_DE_LA_section',
        type: 'doc',
      },
      {
        title: 'Seguridad personal y laboral',
        link: 'URL_DE_LA_section',
        type: 'doc',
      },
      {
        title: 'Proyectos finales',
        link: 'URL_DE_LA_section',
        type: 'doc',
      },
    ],
  },
  {
    title: 'Teltonika y Traccar',
    show: true,
    description: 'Muestra la temperatura, rastreo en tiempo real y mucho más.',
    sectiones: [
      {
        title: 'Configurar dispositivos BLE en equipos teltonika como el eye sensor',
        link: '/blog/como-configurar-dispositivos-ble-en-equipos-teltonika-como-el-eye-sensor',
        type: 'doc',
      },
      {
        title: 'Configurar un gps de teltonika FMC920 con el Teltonika configurator para traccar',
        link: '/blog/como-configurar-un-gps-de-teltonika-fmc920-con-el-teltonika-configurator-para-traccar',
        type: 'doc',
      },
    ],
  },
  {
    title: 'Futuro del Tracking y Traccar',
    show: false,
    description: 'Tendencias en tracking, avances en GPS, sensores e IoT',
    sectiones: [
      {
        title: 'Tendencias en tracking',
        link: 'URL_DE_LA_section',
        type: 'doc',
      },
      {
        title: 'Avances en GPS y sensores',
        link: 'URL_DE_LA_section',
        type: 'doc',
      },
      {
        title: 'Integración con IoT',
        link: 'URL_DE_LA_section',
        type: 'doc',
      },
    ],
  },
]
const jsonLd = () => {
  return {
    '@context': 'https://schema.org/',
    '@type': 'Course',
    name: metadata.title,
    description: metadata.description,
    provider: {
      '@type': 'Organization',
      name: 'BysMax',
      url: 'https://www.bysmax.com',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: 4.7,
      ratingCount: 1234,
      reviewCount: 450,
    },
    offers: {
      '@type': 'Offer',
      category: 'Free',
    },
    hasCourseInstance: [
      {
        '@type': 'CourseInstance',
        courseMode: 'Online',
        instructor: [
          {
            '@type': 'Person',
            name: 'emmanuelhdev',
            description: 'Full Stack Developer at Gonzher Logistic and transport',
            image: 'https://avatars.githubusercontent.com/u/86961961',
          },
        ],
      },
      {
        // Online self-paced course that takes 2 days to complete.
        '@type': 'CourseInstance',
        courseMode: 'Online',
        courseWorkload: 'P2D',
      },
    ],
    totalHistoricalEnrollment: 12345,
    datePublished: '2024-07-12',
    educationalLevel: 'Beginner',
    about: ['Traccar'],
    teaches: ['Traccar'],
    inLanguage: 'es',
    availableLanguage: ['es', 'en'],
    syllabusSections: TEMARIO.map((section) => ({
      name: section.title,
      description: section.description,
    })),
  }
}
export function Home() {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col">
      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
        />
        <section className="bg-muted py-12 md:py-24">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="mx-auto  text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Curso Gratuito de Traccar desde Cero hasta Avanzado en español
              </h1>
              <p className="text-muted-foreground md: mt-4">
                Te guiará desde la configuración inicial de tu propio servidor Traccar de rastreo
                hasta la gestión avanzada de dispositivos y la personalización de la plataforma.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Link className={buttonVariants({ variant: 'default' })} href="#course">
                  Comenzar ahora
                </Link>
                <Link href="/contacto" className={buttonVariants({ variant: 'outline' })}>
                  Necesito un servidor
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="mx-auto ">
              <h2 id="course" className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Temario
              </h2>
              <p className="text-muted-foreground md: mt-4">
                Comienza instalando tu propio servidor hasta darle mantenimiento para albergar más
                de 5k equipos.
              </p>
              <div className="mt-8 space-y-4">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {TEMARIO.filter((item) => item.show == !false).map((item, i) => (
                    <AccordionItem key={item.title} value={`item-${i + 1}`}>
                      <AccordionTrigger>
                        <div className="text-left">
                          <h3 className="text-lg font-bold">{item.title}</h3>
                          <p className="text-neutral-400">{item.description}</p>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 py-3">
                        <ul className="space-y-4 ">
                          {item.sectiones.map((section) => (
                            <li key={section.title}>
                              <div className="flex items-center">
                                <Link href={section.link}>
                                  {section.type !== 'doc' ? <Play /> : <BookText />}
                                </Link>
                                <Link
                                  href={section.link}
                                  className={` ${buttonVariants({ variant: 'link' })}`}
                                >
                                  {section.title}
                                </Link>
                              </div>
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
        <section className="bg-muted py-12 md:py-24">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="mx-auto  text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Sobre el Curso</h2>
              <p className="text-muted-foreground md: mt-4">
                Te guiará desde la configuración inicial de tu propio servidor Traccar de rastreo
                hasta la gestión avanzada de dispositivos y la personalización de la plataforma.{' '}
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Link className={buttonVariants({ variant: 'default' })} href="#course">
                  Comenzar ahora
                </Link>{' '}
                <Link href="/contacto" className={buttonVariants({ variant: 'outline' })}>
                  Necesito un servidor
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}
