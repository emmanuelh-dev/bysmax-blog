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

interface PageProps {
  params: { locale: LocaleTypes }
}

const images = [
  { src: '/static/images/pseint/1.jpg', alt: 'Descargar PseInt Imagen Circuito' },
  { src: '/static/images/pseint/1.png', alt: 'Descargar PseInt Imagen Circuito' },
  { src: '/static/images/pseint/2.jpg', alt: 'Descargar PseInt Imagen Home' },
]
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    image: 'https://www.pseint.com/static/images/pseint-logo.png',
    name: 'PSeInt',
    applicationCategory: 'EducationalApplication',
    downloadUrl: 'https://www.pseint.com/descargar.php',
    description:
      'PSeInt es un software educativo diseñado para ayudar a los estudiantes a dar sus primeros pasos en la programación mediante el uso de pseudocódigo. Ofrece una interfaz sencilla y amigable que facilita la creación, simulación y depuración de algoritmos, proporcionando una base sólida para aprender conceptos fundamentales de programación.',
    offers: { '@type': 'Offer', price: 0, priceCurrency: 'USD' },
    fileSize: '15 MB',
    operatingSystem: 'Windows, macOS, Linux',
    softwareVersion: '2024.2.0',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingCount: 154,
      ratingValue: 4.7,
      bestRating: 5,
      worstRating: 1,
    },
  },
]

const Recommended = dynamic(() => import('@/layouts/components/Recomended'), {
  loading: () => <SuspencePosts />,
  ssr: false,
})

const Software = dynamic(() => import('@/components/software/Software'), {
  loading: () => <Loading />,
  ssr: false,
})
const Gallery = dynamic(() => import('@/components/Gallery'), {
  ssr: false,
})

export async function generateMetadata({ params: { slug, locale } }) {
  const { t } = await createTranslation(locale, 'pseint')
  return {
    title: t('title'),
    description: t('description'),
  }
}
export default async function Page({ params: { locale } }: PageProps) {
  const { t } = await createTranslation(locale, 'pseint')

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
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
            <Link className={buttonVariants({ variant: 'outline' })} href="#resources">
              {t('resources')}
            </Link>
          </div>
        </div>
        <div className="flex aspect-video justify-center">
          <NextImage
            src={'/static/images/pseint/1.png'}
            alt={t('imageAlt')}
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
      <section className="py-12 md:py-24 lg:py-32" id={t('id')}>
        <div>
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
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
        <Recommended tags={['pseint']} locale={locale} />
      </section>
      <Software locale={locale} />
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
    </>
  )
}
