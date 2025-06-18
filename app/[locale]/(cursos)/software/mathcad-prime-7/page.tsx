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
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { genPageMetadata } from '@/app/[locale]/seo'
import Image from '@/components/Image'
import NextImage from 'next/image'
import { LocaleTypes } from '@/app/[locale]/i18n/settings'
import SuspencePosts from '@/layouts/components/SuspencePosts'
import dynamic from 'next/dynamic'
import { createTranslation } from '@/app/[locale]/i18n/server'
import Loading from '@/components/software/Loading'
import { SectionContainerWithAds } from '@/components/SectionContainer'
import ImageViewer from '@/components/Image'

interface PageProps {
  params: { locale: LocaleTypes }
}

const images = [
  { src: '/static/images/mathcad/1.jpg', alt: 'Descargar Proteus Imagen Circuito' },
  { src: '/static/images/mathcad/2.jpg', alt: 'Descargar Proteus Virus Total Image 1' },
  { src: '/static/images/mathcad/3.jpg', alt: 'Descargar Proteus Imagen Home' },
]

export async function generateMetadata({ params: { slug, locale } }) {
  const { t } = await createTranslation(locale, 'mathcad-prime-7')
  return {
    title: t('title'),
    description: t('description'),
  }
}

const Recommended = dynamic(() => import('@/layouts/components/Recomended'), {
  loading: () => <SuspencePosts />,
  ssr: false,
})

const Gallery = dynamic(() => import('@/components/Gallery'), {
  ssr: false,
})

export default async function Page({ params: { locale } }: PageProps) {
  const { t } = await createTranslation(locale, 'mathcad-prime-7')

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      image: 'https://electronica.bysmax.com/static/images/mathcad/1.jpg',
      name: 'Mathcad',
      applicationCategory: 'BusinessApplication',
      downloadUrl: 'https://electronica.bysmax.com/software/mathcad-prime-7',
      description:
        'Mathcad es una potente herramienta para cálculos matemáticos y análisis numéricos. Permite modelar y resolver ecuaciones, realizar gráficos, y trabajar con fórmulas y expresiones matemáticas.',
      offers: {
        '@type': 'Offer',
        price: 0,
        priceCurrency: 'EUR',
      },
      fileSize: 'TAMAÑO_DEL_ARCHIVO',
      operatingSystem: 'Windows 7, Windows 8, Windows 10, Windows 11',
      softwareVersion: 'mathcad prime 7',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingCount: 9,
        ratingValue: 4.3,
        bestRating: 5,
        worstRating: 4,
      },
    },
  ]

  return (
    <SectionContainerWithAds>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="grid grid-cols-1 gap-8 py-20 md:grid-cols-2">
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-sm text-neutral-400">{t('title')}</h1>
          <p className="mb-4 text-6xl font-bold">{t('mainHeading')}</p>
          <p className="text-muted-foreground mb-6">{t('description')}</p>
          <div className="flex gap-4">
            <a
              className={buttonVariants({ variant: 'default' })}
              data-umami-event={t('mainHeading')}
              target="_blank"
              href={t('downloadLink.url')}
            >
              {t('downloadNowButton')}
            </a>
            <Link className={buttonVariants({ variant: 'outline' })} href="#requisitos">
              {t('systemRequirementsButton')}
            </Link>
          </div>
        </div>
        <div className="flex aspect-video justify-center">
          <ImageViewer
            src="/static/images/mathcad/3.jpg"
            alt={t('imageAlt')}
            width={800}
            height={800}
            className="aspect-square rounded-md object-cover shadow-lg"
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
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {t('requirementsHeader')}
              </h2>
              <ul className="mt-4 grid gap-4">
                {(t('requirementsList', { returnObjects: true }) as any[]).map((req, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0" />
                    <div>
                      <h3 className="font-medium">{req.title}</h3>
                      <p>{req.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted w-full py-12 md:py-24 lg:py-32">
        <div>
          <div className="space-y-4">
            <div className="space-y-2">
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
                      <ul className="text-base">
                        {faq.content.map((item, index) => (
                          <li key={index} className="list-disc py-2">
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
              {t('resourcesTitle')}
            </h2>
            <p className="text-lg text-neutral-400">{t('resourcesDescription')}</p>
          </div>
          <div className="grid md:grid-cols-2" />
        </div>
        <Recommended tags={['proteus']} locale={locale} />
      </section>
    </SectionContainerWithAds>
  )
}
