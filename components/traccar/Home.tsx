import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { genPageMetadata } from '@/app/[locale]/seo'
import { cn } from 'lib/utils'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  BookText,
  CheckCircle,
  ChevronRight,
  Play,
  Server,
  BookOpen,
  GraduationCapIcon as Graduation,
  Users,
} from 'lucide-react'
import { CursoLayout } from '@/layouts/CursoLayout'
import { traccarContent } from '@/data/i18n/traccar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

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
  }
}

export function Home({ params }: { params: { locale: string } }) {
  const courseContent = traccarContent[params?.locale || 'es'].content
  const ui = traccarContent[params?.locale || 'es'].ui

  return (
    <>
      <CursoLayout
        sidebar={courseContent}
        title={traccarContent[params?.locale || 'es'].metadata.title}
        description={traccarContent[params?.locale || 'es'].metadata.description}
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

            {/* Hero Section */}
            <section className="from-primary/10 to-background bg-gradient-to-b px-4 py-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Link
                  className={cn(
                    buttonVariants({ variant: 'default', size: 'lg' }),
                    'w-full justify-center gap-2 sm:w-auto'
                  )}
                  href="#course"
                >
                  <Play size={18} />
                  {ui.startNow}
                </Link>
                <Link
                  className={cn(
                    buttonVariants({ variant: 'default' }),
                    'w-full justify-center gap-2 sm:w-auto'
                  )}
                  href="https://www.youtube.com/watch?v=ZSVYhKHmXe8&list=PLjsxenlAapaC_gAQtYoUZa4tq5BhXdmWV"
                >
                  <BookText size={16} />
                  Ver en YouTube
                </Link>
                <Link
                  href="https://gpstrackingsystem.bysmax.com/"
                  className={cn(
                    buttonVariants({ variant: 'outline', size: 'lg' }),
                    'w-full justify-center gap-2 sm:w-auto'
                  )}
                >
                  <Server size={18} />
                  {ui.needServer}
                </Link>
              </div>
            </section>

            {/* Course Stats */}
            <section className="px-4 py-6">
              <div className="grid grid-cols-3 gap-2">
                <Card className="border-none shadow-sm">
                  <CardContent className="flex flex-col items-center justify-center p-3">
                    <BookOpen className="text-primary mb-1 h-5 w-5" />
                    <span className="text-lg font-bold">10+</span>
                    <span className="text-muted-foreground text-xs">
                      {params?.locale === 'en' ? 'Modules' : 'Módulos'}
                    </span>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-sm">
                  <CardContent className="flex flex-col items-center justify-center p-3">
                    <Graduation className="text-primary mb-1 h-5 w-5" />
                    <span className="text-lg font-bold">100%</span>
                    <span className="text-muted-foreground text-xs">
                      {params?.locale === 'en' ? 'Free' : 'Gratis'}
                    </span>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-sm">
                  <CardContent className="flex flex-col items-center justify-center p-3">
                    <Users className="text-primary mb-1 h-5 w-5" />
                    <span className="text-lg font-bold">12k+</span>
                    <span className="text-muted-foreground text-xs">
                      {params?.locale === 'en' ? 'Students' : 'Estudiantes'}
                    </span>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Course Benefits */}
            <section className="bg-muted/30 px-4 py-6">
              <h2 className="mb-4 text-xl font-bold tracking-tight">
                {params?.locale === 'en' ? 'Course Benefits' : 'Beneficios del Curso'}
              </h2>
              <div className="space-y-2">
                {[
                  params?.locale === 'en'
                    ? 'Free access to all content'
                    : 'Acceso gratuito a todo el contenido',
                  params?.locale === 'en' ? 'Learn at your own pace' : 'Aprende a tu propio ritmo',
                  params?.locale === 'en' ? 'Practical examples' : 'Ejemplos prácticos',
                  params?.locale === 'en'
                    ? 'From beginner to advanced'
                    : 'De principiante a avanzado',
                  params?.locale === 'en' ? 'Community support' : 'Soporte de la comunidad',
                ].map((benefit, i) => (
                  <div
                    key={i}
                    className="bg-background flex items-start gap-3 rounded-lg p-3 shadow-sm"
                  >
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Course Content Section */}
            <section id="course" className="scroll-mt-16 px-4 py-8">
              <h2 className="mb-3 text-xl font-bold tracking-tight">{ui.courseContent}</h2>
              <p className="text-muted-foreground mb-6 text-sm">{ui.courseDescription}</p>

              <div className="space-y-4">
                {courseContent
                  .filter((item) => item.show !== false)
                  .map((item, i) => (
                    <Card key={item.title} className="overflow-hidden">
                      <div className="bg-primary/5 p-4">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                          <h3 className="text-base font-medium">
                            <span className="bg-primary inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white">
                              {i + 1}
                            </span>
                            <span className="ml-2">{item.title}</span>
                          </h3>
                          <div>
                            <Badge variant="secondary" className="text-xs">
                              {item.sections.length}{' '}
                              {params?.locale === 'en' ? 'lessons' : 'lecciones'}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <Accordion type="single" collapsible className="-mt-10 w-full">
                        <AccordionItem value={`item-${i + 1}`} className="border-0">
                          <AccordionTrigger className="hover:bg-muted/20 px-4 py-3 text-sm hover:no-underline">
                            <span className="font-medium">
                              {params?.locale === 'en' ? 'View Lessons' : 'Ver Lecciones'}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="px-4 pb-4 pt-0">
                            <ul className="space-y-3">
                              {item.sections.map((section, idx) => (
                                <li
                                  key={section.title}
                                  className="hover:bg-muted/20 group list-none  rounded-lg p-2 transition-colors"
                                >
                                  <Link href={section.link} className="flex items-center gap-3">
                                    <div className="bg-background flex h-7 w-7 shrink-0 items-center justify-center rounded-full  text-xs font-medium">
                                      {idx + 1}
                                    </div>
                                    <span className="group-hover:text-primary flex-1 text-sm font-medium transition-colors">
                                      {section.title}
                                    </span>
                                    <ChevronRight className="text-muted-foreground group-hover:text-primary h-4 w-4 transition-colors" />
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </Card>
                  ))}
              </div>
            </section>

            {/* About Course CTA Section */}
            <section className="bg-primary/5 px-4 py-8">
              <h2 className="text-xl font-bold tracking-tight">{ui.aboutCourse}</h2>
              <p className="text-muted-foreground text-sm">
                {params?.locale === 'en'
                  ? 'This course will guide you from the initial setup of your own Traccar tracking server to advanced device management and platform customization.'
                  : 'Te guiará desde la configuración inicial de tu propio servidor Traccar de rastreo hasta la gestión avanzada de dispositivos y la personalización de la plataforma.'}{' '}
              </p>
              <div className="flex gap-3 pt-2">
                <Link
                  className={cn(
                    buttonVariants({ variant: 'default' }),
                    'w-full justify-center gap-2 sm:w-auto'
                  )}
                  href="#course"
                >
                  <BookText size={16} />
                  {ui.startNow}
                </Link>
                <Link
                  className={cn(
                    buttonVariants({ variant: 'default' }),
                    'w-full justify-center gap-2 sm:w-auto'
                  )}
                  href="https://www.youtube.com/watch?v=ZSVYhKHmXe8&list=PLjsxenlAapaC_gAQtYoUZa4tq5BhXdmWV"
                >
                  <BookText size={16} />
                  Ver en YouTube
                </Link>
                <Link
                  href="/contacto"
                  className={cn(
                    buttonVariants({ variant: 'outline' }),
                    'w-full justify-center gap-2 sm:w-auto'
                  )}
                >
                  {ui.needServer}
                </Link>
              </div>
            </section>
          </main>
        </div>
      </CursoLayout>
    </>
  )
}
