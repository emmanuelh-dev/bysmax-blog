import siteMetadata from '@/data/siteMetadata'
import { allCoreContent } from 'pliny/utils/contentlayer'
import type { LucideIcon } from 'lucide-react'
import {
  MapPin,
  Wrench,
  Book,
  Cpu,
  Navigation,
  Lightbulb,
  BookOpen,
  QrCode,
  BookMarked,
  GraduationCap,
} from 'lucide-react'

const createUrl = `${siteMetadata.siteRepo}/new/main/data/blog`

interface HeaderLink {
  href: string
  title: string
  icon?: LucideIcon
}

const headerNavLinks: HeaderLink[] = [
  { href: '/blog', title: 'Blog', icon: BookMarked },
  { href: '/donate', title: 'Donate or Contribute', icon: GraduationCap },
]

export default headerNavLinks

interface Links {
  title: string
  description?: string
  icon?: LucideIcon
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
        icon: Wrench,
      },
      {
        title: 'Mantenimiento de Computadoras en Guadalupe',
        description: '',
        href: '/servicios/reparacion-de-computadoras-en-guadalupe',
        icon: Wrench,
      },
      {
        title: 'Mantenimiento de Computadoras en San Nicolas',
        description: '',
        href: '/servicios/reparacion-de-computadoras-en-san-nicolas',
        icon: Wrench,
      },
      {
        title: 'Servicios GPS y Rastreo',
        description: '',
        href: '/servicios/plataforma-de-rastreo-gps',
        icon: MapPin,
      },
    ],
  },
  {
    title: 'Cursos',
    links: [
      {
        title: 'Curso Gratis de Traccar',
        href: '/traccar',
        icon: Navigation,
      },
      {
        title: 'Curso Gratis de Arduino',
        href: '/arduino',
        icon: Cpu,
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
  {
    title: 'Herramientas',
    links: [
      {
        title: 'Todas',
        href: '/tools',
      },
      {
        title: 'Generador de QR',
        href: '/tools/qr-code-generator',
        icon: QrCode,
      },
    ],
  },
]
