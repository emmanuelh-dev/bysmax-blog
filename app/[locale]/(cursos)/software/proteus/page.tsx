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
import NextImage from 'next/image'
import { LocaleTypes } from '@/app/[locale]/i18n/settings'
import SuspencePosts from '@/layouts/components/SuspencePosts'
import dynamic from 'next/dynamic'
import { createTranslation } from '@/app/[locale]/i18n/server'
import Loading from '@/components/software/Loading'
import { SectionContainerWithAds } from '@/components/SectionContainer'
import AdComponent from '@/data/AdComponent'
import { SLOTS } from '@/data/ad-slots'

interface PageProps {
  params: { locale: LocaleTypes }
}

const images = [
  { src: '/static/images/proteus/3.png', alt: 'Descargar Proteus Imagen Circuito' },
  { src: '/static/images/virus-total-proteus.png', alt: 'Descargar Proteus Virus Total Image 1' },
  { src: '/static/images/proteus/2.png', alt: 'Descargar Proteus Imagen Home' },
]

export async function generateMetadata({ params: { slug, locale } }) {
  const { t } = await createTranslation(locale, 'downloadproteus')
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      images: [
        {
          url: 'https://electronica.bysmax.com/static/images/proteus/3.png',
          width: 600,
          height: 400,
          alt: t('imageAlt'),
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['https://electronica.bysmax.com/static/images/proteus/3.png'],
    },
    alternates: {
      canonical: `https://electronica.bysmax.com/${locale}/software/proteus`,
    },
  }
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    image: 'https://electronica.bysmax.com/static/images/proteus/3.png',
    name: 'Proteus Design Suite 8.8 Professional',
    applicationCategory: 'BusinessApplication',
    downloadUrl: 'https://electronica.bysmax.com/software/proteus',
    description:
      'Descargar Proteus 8.8 Professional gratis para Windows 10 y 11. Software de diseño y simulación de circuitos electrónicos con soporte para Arduino. Proteus Design Suite es uno de los programas de diseño electrónico más utilizados del mercado.',
    offers: { '@type': 'Offer', price: 0, priceCurrency: 'EUR' },
    fileSize: '688,8 Mo',
    operatingSystem: 'Windows 7, Windows 8, Windows 10, Windows 11',
    softwareVersion: '8.8',
    releaseNotes: 'Versión Professional con todas las características desbloqueadas',
    keywords:
      'proteus 8, descargar proteus, proteus professional, proteus gratis, proteus 8.8, simulador proteus',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingCount: 9,
      ratingValue: 4.3,
      bestRating: 5,
      worstRating: 1,
    },
    author: {
      '@type': 'Organization',
      name: 'Labcenter Electronics',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: '¿Cómo descargar e instalar Proteus 8 Professional gratis?',
    description:
      'Guía paso a paso para descargar e instalar Proteus 8 Professional en Windows 10 y 11',
    image: 'https://electronica.bysmax.com/static/images/proteus/3.png',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Descargar Proteus',
        text: 'Haz clic en el botón de descarga para obtener Proteus 8 Professional',
        url: 'https://electronica.bysmax.com/software/proteus',
      },
      {
        '@type': 'HowToStep',
        name: 'Ejecutar instalador',
        text: 'Ejecuta el archivo proteus.exe como administrador',
      },
      {
        '@type': 'HowToStep',
        name: 'Completar instalación',
        text: 'Sigue las instrucciones en pantalla para instalar Proteus',
      },
    ],
  },
]

// const Recommended = dynamic(() => import('@/layouts/components/Recomended'), {
//   loading: () => <SuspencePosts />,
//   ssr: false,
// })

const Gallery = dynamic(() => import('@/components/Gallery'), {
  ssr: false,
})
export default async function Page({ params: { locale } }: PageProps) {
  const { t } = await createTranslation(locale, 'downloadproteus')

  return (
    <SectionContainerWithAds>
      <div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <section>
          <div className="space-y-6 text-center">
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-wide text-neutral-500">
                {t('title')}
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 md:text-5xl">
                {t('mainHeading')}
              </h1>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                {t('description')}
              </p>
            </div>
            <AdComponent slot={SLOTS[0]} />
            <div className="flex flex-col justify-center gap-3 pt-8 sm:flex-row">
              <a
                className={buttonVariants({ variant: 'default', size: 'lg' })}
                data-umami-event={t('mainHeading')}
                target="_blank"
                href="https://drive.google.com/drive/u/0/folders/1RZ3G9JXHu8lDZnKep8JWQYhilmPvsR-r"
              >
                {t('downloadNowButton')}
              </a>
              <Link
                className={buttonVariants({ variant: 'outline', size: 'lg' })}
                href="#requisitos"
              >
                {t('systemRequirementsButton')}
              </Link>
            </div>
          </div>

          <div className="mt-16 flex justify-center">
            <div className="relative">
              <NextImage
                src="/static/images/proteus/3.png"
                alt={t('imageAlt')}
                width={600}
                height={400}
                className="rounded-lg border border-neutral-200 shadow-sm dark:border-neutral-800"
              />
            </div>
          </div>
        </section>

        <section>
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Galeria</h2>
            <Gallery gallery={images} />
          </div>
        </section>
        <AdComponent slot={SLOTS[1]} />

        <section>
          {/* Nueva sección: Contenido rico en palabras clave */}
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="prose max-w-none dark:prose-invert">
              <h2 className="mb-6 text-2xl font-semibold">{t('aboutProteusTitle')}</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                    {t('aboutProteusDescription1')}
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {t('aboutProteusDescription2')}
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-lg font-medium">{t('keyFeaturesTitle')}</h3>
                  <ul className="space-y-2">
                    {(t('keyFeaturesList', { returnObjects: true }) as any[]).map(
                      (feature, index) => (
                        <li key={index} className="flex gap-2 text-sm">
                          <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Nueva sección: Versiones disponibles */}
        <section className="py-12">
          <div>
            <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
              {t('versionsTitle')}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {(t('availableVersions', { returnObjects: true }) as any[]).map((version, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-neutral-200 p-6 dark:border-neutral-800"
                >
                  <h3 className="mb-2 text-xl font-semibold">{version.name}</h3>
                  <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                    {version.description}
                  </p>
                  <ul className="space-y-1 text-sm">
                    {version.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2">
                        <CheckIcon className="h-4 w-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12" id={t('id')}>
          <div>
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {t('requirementsHeader')}
                </h2>
                <ul className="grid gap-4">
                  {(t('requirementsList', { returnObjects: true }) as any[]).map((req, index) => (
                    <li key={index} className="flex gap-2">
                      <CheckIcon className="mt-1 h-4 w-4 shrink-0" />
                      <div>
                        <h3 className="font-medium">{req.title}</h3>
                        <p>{req.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-start gap-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {t('downloadHeader')}
                </h2>
                <p className="md:text-xl/relaxed">{t('downloadDescription')}</p>
                <a
                  href={t('downloadLink.url')}
                  className={buttonVariants({ variant: 'default' })}
                  target="_blank"
                >
                  {t('downloadLink.text')}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Nueva sección: Información específica de instalación */}
        <section className="bg-neutral-50 py-12 dark:bg-neutral-900/50">
          <div>
            <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
              {t('installationGuideTitle')}
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-semibold">{t('beforeInstallTitle')}</h3>
                <ul className="space-y-3">
                  {(t('beforeInstallSteps', { returnObjects: true }) as any[]).map(
                    (step, index) => (
                      <li key={index} className="flex gap-3">
                        <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-green-500" />
                        <span>{step}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <AdComponent slot={SLOTS[2]} />

              <div>
                <h3 className="mb-4 text-xl font-semibold">{t('installStepsTitle')}</h3>
                <ol className="space-y-3">
                  {(t('installationSteps', { returnObjects: true }) as any[]).map((step, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500 text-xs font-medium text-white">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted w-full py-12 ">
          <div>
            <div>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {t('faqTitle')}
                </h2>
                <p className="text-lg text-neutral-400">{t('faqDescription')}</p>
              </div>
              <div className="w-full space-y-4">
                <Accordion type="single" collapsible>
                  {(t('accordionItems', { returnObjects: true }) as any[]).map((faq, i) => (
                    <AccordionItem value={`item-${i}`} key={i}>
                      <AccordionTrigger className="text-lg">
                        <h3>{faq.section}</h3>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="text-base">
                          {faq.content.map((item, index) => (
                            <p key={index} className="mb-3 last:mb-0">
                              {item}
                            </p>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>
        {/* <section id="resources" className="bg-muted py-12 ">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t('resourcesTitle')}
            </h2>
            <p className="text-lg text-neutral-400">{t('resourcesDescription')}</p>
          </div>
          <div className="grid md:grid-cols-2" />
        </div>
        <Recommended tags={['proteus']} locale={locale} />
      </section> */}
      </div>
    </SectionContainerWithAds>
  )
}
