import { CheckIcon, PlayIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import React, { Suspense } from 'react'
import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { LocaleTypes } from '@/app/[locale]/i18n/settings'
import dynamic from 'next/dynamic'
import { createTranslation } from '@/app/[locale]/i18n/server'
import { SectionContainerWithAds } from '@/components/SectionContainer'
import ImageViewer from '@/components/Image'

interface PageProps {
  params: { locale: LocaleTypes }
}

// Lazy load de componentes pesados
const Gallery = dynamic(() => import('@/components/Gallery'), {
  ssr: false,
  loading: () => (
    <div className="h-48 animate-pulse rounded-lg bg-neutral-100 dark:bg-neutral-800" />
  ),
})

const images = [
  {
    src: '/static/images/multisim/1.jpg',
    alt: 'NI Multisim Interfaz Principal - Simulador de Circuitos',
  },
  { src: '/static/images/multisim/2.jpg', alt: 'NI Multisim Diseño de Circuitos Electrónicos' },
  { src: '/static/images/multisim/3.jpg', alt: 'NI Multisim Biblioteca de Componentes' },
]

export async function generateMetadata({ params: { slug, locale } }) {
  const { t } = await createTranslation(locale, 'multisim')
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      images: [
        {
          url: 'https://electronica.bysmax.com/static/images/multisim/3.jpg',
          width: 800,
          height: 600,
          alt: t('imageAlt'),
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['https://electronica.bysmax.com/static/images/multisim/3.jpg'],
    },
  }
}

// const Recommended = dynamic(() => import('@/layouts/components/Recomended'), {
//   loading: () => <SuspencePosts />,
//   ssr: false,
// })

export default async function Page({ params: { locale } }: PageProps) {
  const { t } = await createTranslation(locale, 'multisim')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    image: 'https://electronica.bysmax.com/static/images/multisim/3.jpg',
    name: 'NI Multisim 14.2',
    applicationCategory: 'BusinessApplication',
    downloadUrl: `https://electronica.bysmax.com/${locale}/software/multisim`,
    description: t('description'),
    offers: {
      '@type': 'Offer',
      price: 0,
      priceCurrency: 'USD',
    },
    operatingSystem: 'Windows 7, Windows 8, Windows 10, Windows 11',
    softwareVersion: '14.2',
    author: {
      '@type': 'Organization',
      name: 'National Instruments',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingCount: 15,
      ratingValue: 4.2,
      bestRating: 5,
      worstRating: 1,
    },
  }

  return (
    <SectionContainerWithAds>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-wide text-neutral-500">
                {t('title')}
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 lg:text-5xl">
                {t('mainHeading')}
              </h1>
              <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                {t('description')}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                className={buttonVariants({ variant: 'default', size: 'lg' })}
                data-umami-event={t('mainHeading')}
                target="_blank"
                href="https://drive.google.com/drive/folders/1YozgQmI_2nll_4jj-Z2GdZIAnEV_vhFO?usp=sharing"
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

          <div className="flex justify-center">
            <ImageViewer
              src="/static/images/multisim/3.jpg"
              alt={t('imageAlt')}
              width={600}
              height={400}
              className="rounded-lg border border-neutral-200 shadow-sm dark:border-neutral-800"
              priority
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Galería de NI Multisim</h2>
          <Suspense
            fallback={
              <div className="h-48 animate-pulse rounded-lg bg-neutral-100 dark:bg-neutral-800" />
            }
          >
            <Gallery gallery={images} />
          </Suspense>
        </div>
      </section>
      {/* Ad Section */}
      <div className="py-8">
        <ins
          className="adsbygoogle block h-[280px] w-full bg-white dark:bg-black"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-3646138644530578"
          data-ad-slot="6395288197"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
      {/* Download and Requirements Section */}
      <section className="py-12" id="requisitos">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Video Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Tutorial de NI Multisim
            </h2>
            <div className="aspect-video overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube-nocookie.com/embed/rfAdK5NeFdE?si=6ud__qw6jsgaZy9i"
                title={`Tutorial ${t('title')}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Requirements Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {t('requirementsHeader')}
              </h2>
              <ul className="mt-6 space-y-4">
                {(t('requirementsList', { returnObjects: true }) as any[]).map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-green-500" />
                    <div>
                      <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
                        {req.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400">{req.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 rounded-lg border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900/50">
              <h3 className="text-xl font-semibold">{t('downloadHeader')}</h3>
              <p className="text-neutral-600 dark:text-neutral-400">{t('downloadDescription')}</p>
              <a
                href={t('downloadLink.url')}
                className={buttonVariants({ variant: 'default', size: 'lg' })}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('downloadLink.text')}
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="bg-neutral-50 py-12 dark:bg-neutral-900/50">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('faqTitle')}</h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              {t('faqDescription')}
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              {(t('accordionItems', { returnObjects: true }) as any[]).map((faq, i) => (
                <AccordionItem
                  value={`item-${i}`}
                  key={i}
                  className="rounded-lg border border-neutral-200 bg-white px-6 dark:border-neutral-800 dark:bg-neutral-900"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                    {faq.section}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="space-y-3 text-neutral-600 dark:text-neutral-400">
                      {faq.content.map((item, index) => (
                        <p key={index} className="leading-relaxed">
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
      </section>

      {/* Commented out resources section */}
      {/* <section id="resources" className="bg-muted py-12 md:py-24 lg:py-32">
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
    </SectionContainerWithAds>
  )
}
