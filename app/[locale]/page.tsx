import { allBlogs } from 'contentlayer/generated'
import Image from 'next/image'
import Link from 'next/link'

import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { buttonVariants } from '@/components/ui/button'
import Services from '@/components/Services'
import { createTranslation } from './i18n/server'
import dynamic from 'next/dynamic'
import SuspencePosts from '@/layouts/components/SuspencePosts'

const Blog = dynamic(() => import('./Main'), {
  loading: () => <SuspencePosts />,
  ssr: false,
})

export default async function Page({ params: { locale } }) {
  const images = ['/static/notes/01.png', '/static/notes/02.png']

  function getRandom() {
    return Math.floor(Math.random() * images.length)
  }

  const image = images[getRandom()]
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  const filteredPosts = posts.filter((p) => p.language === locale)

  const { t } = await createTranslation(locale, 'common')
  return (
    <div>
      <section className="flex w-full items-center justify-between py-12 max-sm:flex-col-reverse max-sm:font-semibold">
        <div className="space-y-4">
          <h1 className="text-6xl font-semibold leading-tight md:max-w-[40rem] md:text-7xl">
            Electrónica para Estudiantes, Recursos y Más
          </h1>
          <p className="pt-2 text-lg text-gray-500 dark:text-gray-400">
            Accede a tutoriales detallados, guías prácticas y proyectos innovadores que te ayudarán
            a dominar el mundo de la electrónica.
          </p>
          <div className="flex gap-4">
            <Link href="/blog" className={buttonVariants({ variant: 'default' })}>
              Blog y Tutoriales
            </Link>
            <Link href="/servicios" className={buttonVariants({ variant: 'outline' })}>
              Nuestros Servicios
            </Link>
          </div>
        </div>
        <Image
          alt="Sonrie"
          width="400"
          height="400"
          decoding="async"
          src={'/static/notes/02.png'}
        />
      </section>
      <section className="py-12">
        <div className=" divide-gray-200 dark:divide-gray-700">
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {t('blog')}
          </h2>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {/*siteMetadata.description*/}
          </p>
          <Blog posts={filteredPosts} />
        </div>
      </section>
      <Services />
    </div>
  )
}
