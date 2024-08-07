import siteMetadata from '@/data/siteMetadata'
import { allCoreContent } from 'pliny/utils/contentlayer'

const createUrl = `${siteMetadata.siteRepo}/new/main/data/blog` // Change if you want to create a new file in a different directory

const headerNavLinks = [
  { href: '/blog', title: 'Blog' },
  { href: '/posts', title: 'Posts' },
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
    links: [
      {
        title: 'Mantenimiento de Computadoras en Monterrey',
        description: '',
        href: '/servicios/reparacion-de-computadoras-en-monterrey',
      },
      {
        title: 'Mantenimiento de Computadoras en Guadalupe',
        description: '',
        href: '/servicios/reparacion-de-computadoras-en-guadalupe',
      },
      {
        title: 'Mantenimiento de Computadoras en San Nicolas',
        description: '',
        href: '/servicios/reparacion-de-computadoras-en-san-nicolas',
      },
      {
        title: 'Servicios GPS y Rastreo',
        description: '',
        href: '/servicios/servicios-para-traccar',
      },
    ],
  },
  {
    title: 'Cursos',
    links: [
      {
        title: 'Curso Gratis de Traccar',
        href: '/traccar',
      },
      {
        title: 'Curso Gratis de Arduino',
        href: '/arduino',
      },
    ],
  },
  {
    title: 'Guias',
    links: [
      {
        title: 'Compuertas Logicas',
        href: '/compuertas-logicas',
      },
      {
        title: 'Tutoriales de arduino',
        href: '/arduino/tutoriales',
      },
    ],
  },
]
