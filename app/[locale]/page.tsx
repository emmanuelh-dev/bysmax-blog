import { allBlogs, allCursos, allServicios } from 'contentlayer/generated'
import Image from 'next/image'
import Link from 'next/link'
import Main from './Main'

import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { buttonVariants } from '@/components/ui/button'
import Services from '@/components/Services'

export default async function Page() {
  const images = ['/static/notes/01.png', '/static/notes/02.png']

  function getRandom() {
    return Math.floor(Math.random() * images.length)
  }

  const image = images[getRandom()]
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  const servicios = allCoreContent(allServicios)
  const cursos = allCoreContent(allCursos)

  return (
    <div>
      <div className="flex w-full items-center justify-between max-sm:flex-col-reverse max-sm:font-semibold">
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
        <Image alt="Sonrie" width="400" height="400" decoding="async" data-nimg="1" src={image} />
      </div>
      <Main posts={posts} title="Blog" />
      <Services />
    </div>
  )
}
