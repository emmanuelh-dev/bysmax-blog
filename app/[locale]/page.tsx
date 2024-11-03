import { allBlogs } from 'contentlayer/generated'
import Image from 'next/image'
import Link from 'next/link'

import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { buttonVariants } from '@/components/ui/button'
import Services from '@/components/Services'
import { createTranslation } from './i18n/server'
import SuspencePosts from '@/layouts/components/SuspencePosts'
import getAllPosts from '@/lib/allPosts'
import Filter from '@/components/cursos/Filter'
import dynamic from 'next/dynamic'

const Blog = dynamic(() => import('./Main'), {
  loading: () => <SuspencePosts />,
  ssr: false,
})

export default async function Page({ params: { locale } }) {
  const posts = await getAllPosts({ locale })

  const { t } = await createTranslation(locale, 'home')
  return (
    <>
      <section>
        <header className="mx-auto flex w-full max-w-4xl items-center justify-center px-8 py-20 max-sm:flex-col-reverse max-sm:font-semibold lg:text-center 2xl:py-40">
          <div className="space-y-4">
            <h1 className="text-5xl font-semibold leading-tight lg:text-6xl">{t('title')}</h1>
            <p className="pt-2 text-lg text-neutral-500 dark:text-neutral-400">
              {t('description')}
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/blog" className={buttonVariants({ variant: 'default' })}>
                Blog y Tutoriales
              </Link>
              <Link href="/servicios" className={buttonVariants({ variant: 'outline' })}>
                Nuestros Servicios
              </Link>
            </div>
          </div>
        </header>
      </section>
      <Filter />

      <div className="mx-auto max-w-7xl px-8">
        <div className="divide-neutral-200 dark:divide-neutral-700">
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Blog
          </h2>
          <p className="text-lg leading-7 text-neutral-500 dark:text-neutral-400">
            {/*siteMetadata.description*/}
          </p>
          <Blog posts={posts} locale={locale} />
        </div>
      </div>
      <Services />
    </>
  )
}
