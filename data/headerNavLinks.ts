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
  Sigma,
  FolderCode,
  ShoppingBag,
} from 'lucide-react'
import TOOLS from './tools'

const createUrl = `${siteMetadata.siteRepo}/new/main/data/blog`

interface HeaderLink {
  href: string
  title: string
  icon?: LucideIcon
}

const headerNavLinks: HeaderLink[] = [
  { href: '/donate', title: 'Donate or Contribute', icon: GraduationCap },
  { href: '/blog', title: 'Blog', icon: BookMarked },
  { href: '/contacto', title: 'Contacto', icon: Lightbulb },
  { href: '/store', title: 'Tienda', icon: ShoppingBag },
]

export default headerNavLinks

interface Links {
  title: string
  description?: string | undefined
  icon?: LucideIcon
  href: string
}

interface Nav {
  title: string
  links: Links[]
}

export const nav: Nav[] = [
  {
    title: 'Herramientas',
    links: [...TOOLS],
  },
  {
    title: 'Cursos',
    links: [
      {
        title: 'Curso de Traccar',
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
    title: 'Software',
    links: [
      { title: 'Todos', href: '/software' },
      {
        title: 'Proteus 8.8',
        description: 'Circuitos electrónicos',
        href: '/software/proteus',
        icon: Cpu,
      },
      {
        title: 'NI Multisim',
        description: 'Circuitos electrónicos',
        href: '/software/multisim',
        icon: Cpu,
      },
      {
        title: 'MathCAD 14',
        href: '/software/mathcad-14',
        description: 'Calculo técnico',
        icon: Sigma,
      },
      {
        title: 'MathCAD Prime 7',
        href: '/software/mathcad-prime-7',
        description: 'Calculo técnico',
        icon: Sigma,
      },
      {
        title: 'PSeInt',
        href: '/software/pseint',
        description: 'Programación',
        icon: FolderCode,
      },
    ],
  },
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
        href: 'https://gpstrackingsystem.bysmax.com/',
        icon: MapPin,
      },
    ],
  },
]
