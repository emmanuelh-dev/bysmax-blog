import Link from 'next/link'
import { Button, buttonVariants } from '@/components/ui/button'
import { genPageMetadata } from '@/app/[locale]/seo'
import { cn } from 'lib/utils'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { BookText, Play } from 'lucide-react'
import { CursoLayout } from '@/layouts/CursoLayout'
import TRACCAR from '@/data/traccar'

export const metadata = genPageMetadata({
  title: 'Curso Gratuito de Traccar desde Cero hasta Avanzado en español',
  description:
    'Este curso en español te guiará desde la configuración inicial de tu propio servidor de rastreo hasta la gestión avanzada de dispositivos y la personalización de la plataforma.',
  openGraph: {
    title: 'Curso Gratuito de Traccar desde Cero hasta Avanzado en español',
    description:
      'Este curso en español te guiará desde la configuración inicial de tu propio servidor de rastreo hasta la gestión avanzada de dispositivos y la personalización de la plataforma.',
    locale: 'es_MX',
    url: './',
    images: '/static/images/curso-traccar.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Curso Gratuito de Traccar desde Cero hasta Avanzado en español',
    description:
      'Este curso en español te guiará desde la configuración inicial de tu propio servidor de rastreo hasta la gestión avanzada de dispositivos y la personalización de la plataforma',
    images: '/static/images/curso-traccar.jpg',
  },
})

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
    // syllabusSections: TEMARIO.map((section) => ({
    //   name: section.title,
    //   description: section.description,
    // })),
  }
}
export function Home() {
  return (
    <>
      <CursoLayout
        sidebar={TRACCAR}
        title={'Curso Gratuito de Traccar desde Cero hasta Avanzado en español'}
        description={
          'Te guiará desde la configuración inicial de tu propio servidor de rastreo hasta la gestión avanzada de dispositivos y la personalización de la plataforma.'
        }
        path={{ title: 'Traccar', href: '/traccar' }}
        toc={[]}
        authorDetails={[]}
        slug={'/traccar'}
      >
        <div className="bg-background text-foreground flex min-h-screen flex-col">
          <main className="flex-1">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
            />
            <div>
              <div className="flex gap-4">
                <Link className={buttonVariants({ variant: 'default' })} href="#course">
                  Comenzar ahora
                </Link>
                <Link
                  href="https://gpstrackingsystem.bysmax.com/"
                  className={buttonVariants({ variant: 'outline' })}
                >
                  Necesito un servidor
                </Link>
              </div>
            </div>
            <section className="py-12 md:py-24">
              <div className="">
                <div className="mx-auto ">
                  <h2 id="course" className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Temario
                  </h2>
                  <p className="text-muted-foreground md: mt-4">
                    Comienza instalando tu propio servidor hasta darle mantenimiento para albergar
                    más de 5k equipos.
                  </p>
                  <div className="mt-8 space-y-4">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                      {TRACCAR.filter((item) => item.show == !false).map((item, i) => (
                        <AccordionItem key={item.title} value={`item-${i + 1}`}>
                          <AccordionTrigger>
                            <div className="text-left">
                              <h3 className="text-lg font-bold">{item.title}</h3>
                              <p className="text-neutral-400">{item.description}</p>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-4 py-3">
                            <ul className="space-y-4 ">
                              {item.sections.map((section) => (
                                <li key={section.title}>
                                  <div className="flex items-center">
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
              <div className="">
                <div className="mx-auto  text-center">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Sobre el Curso
                  </h2>
                  <p className="text-muted-foreground md: mt-4">
                    Te guiará desde la configuración inicial de tu propio servidor Traccar de
                    rastreo hasta la gestión avanzada de dispositivos y la personalización de la
                    plataforma.{' '}
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
      </CursoLayout>
    </>
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
