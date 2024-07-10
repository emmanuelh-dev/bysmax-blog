import siteMetadata from '@/data/siteMetadata'
import { allCursos, allServicios } from 'contentlayer/generated'
import { allCoreContent } from 'pliny/utils/contentlayer'
const services = allCoreContent(allServicios)
const courses = allCoreContent(allCursos)

const createUrl = `${siteMetadata.siteRepo}/new/main/data/blog` // Change if you want to create a new file in a different directory

const headerNavLinks = [
  { href: '/blog', title: 'Blog' },
  { href: '/blog/generador-de-cabeceras-para-tailwind-nextjs-starter-blog', title: 'Crear nuevo' },
]

export default headerNavLinks

interface Links {
  title: string
  description?: string
  href: string
}
interface Nav {
  title: string
  links: Links[]
}

export const nav: Nav[] = [
  {
    title: 'Servicios',
    links: services.map((s) => {
      return {
        title: s.title,
        description: s.summary,
        href: '/' + s.path,
      }
    }),
  },
  {
    title: 'Cursos',
    links: courses.map((s) => {
      return {
        title: s.title,
        href: '/' + s.path,
      }
    }),
  },
]
