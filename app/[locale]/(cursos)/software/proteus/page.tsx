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
  { src: '/static/images/proteus/3.png', alt: 'Descargar Proteus Imagen Circuito' },
  { src: '/static/images/virus-total-proteus.png', alt: 'Descargar Proteus Virus Total Image 1' },
  { src: '/static/images/proteus/2.png', alt: 'Descargar Proteus Imagen Home' },
]

export async function generateMetadata({ params: { slug, locale } }) {
  const { t } = await createTranslation(locale, 'downloadproteus')
  return {
    title: t('title'),
    description: t('description'),
  }
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    image: 'https://electronica.bysmax.com/static/images/proteus/3.png',
    name: 'Proteus',
    applicationCategory: 'BusinessApplication',
    downloadUrl: 'https://electronica.bysmax.com/software/proteus',
    description:
      'Proteus Design Suite es uno de los programas de dise\u00f1o electr\u00f3nico m\u00e1s utilizados del mercado. Sus versiones m\u00e1s recientes, adem\u00e1s, nos permiten crear simulaciones de dispositivos f\u00e1cilmente en nuestro PC utilizando las herramientas de Arduino.',
    offers: { '@type': 'Offer', price: 0, priceCurrency: 'EUR' },
    fileSize: '688,8 Mo',
    operatingSystem: 'Windows 7,Windows 8,Windows 10,Windows 11',
    softwareVersion: '8.8',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingCount: 9,
      ratingValue: 4.3,
      bestRating: 5,
      worstRating: 1,
    },
  },
]

// const Recommended = dynamic(() => import('@/layouts/components/Recomended'), {
//   loading: () => <SuspencePosts />,
//   ssr: false,
// })

const Software = dynamic(() => import('@/components/software/Software'), {
  loading: () => <Loading />,
  ssr: false,
})

const Gallery = dynamic(() => import('@/components/Gallery'), {
  ssr: false,
})
export default async function Page({ params: { locale } }: PageProps) {
  const { t } = await createTranslation(locale, 'downloadproteus')

  return (
    <div className="mx-auto max-w-7xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="py-24">
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

          <div className="flex flex-col justify-center gap-3 pt-8 sm:flex-row">
            <a
              className={buttonVariants({ variant: 'default', size: 'lg' })}
              data-umami-event={t('mainHeading')}
              target="_blank"
              href="https://drive.google.com/drive/u/0/folders/1RZ3G9JXHu8lDZnKep8JWQYhilmPvsR-r"
            >
              {t('downloadNowButton')}
            </a>
            <Link className={buttonVariants({ variant: 'outline', size: 'lg' })} href="#requisitos">
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
      <section className="py-12" id={t('id')}>
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
      <Software locale={locale} />
      <section className="bg-muted w-full py-12 ">
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
  )
}
