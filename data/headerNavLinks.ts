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
  { href: '/help', title: 'Ayúdanos', icon: GraduationCap },
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
        title: 'Curso de Arduino',
        href: '/arduino',
        icon: Cpu,
      },
    ],
  },
  {
    title: 'Guías',
    links: [
      {
        title: 'Compuertas Lógicas',
        description: 'Aprende sobre compuertas lógicas y su funcionamiento',
        href: '/compuertas-logicas',
      },
      {
        title: 'Componentes Electronicos',
        description: 'Guía completa de componentes electrónicos',
        href: '/componentes-electronicos',
      },
      {
        title: 'Comparativa de Placas Arduino',
        href: '/arduino',
      },
      {
        title: 'Arduino Uno vs Arduino Nano',
        description: 'Comparativa completa entre las dos placas más populares',
        href: '/arduino/comparisons/uno-vs-nano',
      },
      {
        title: 'Arduino Uno vs Arduino Mega',
        description: 'Diferencias entre potencia y versatilidad',
        href: '/arduino/comparisons/uno-vs-mega2560',
      },
    ],
  },
  {
    title: 'Software',
    links: [
      { title: 'Todos', href: '/software' },
      {
        title: 'Proteus 8.8',
        description: 'Simulador de circuitos electrónicos',
        href: '/software/proteus',
        icon: Cpu,
      },
      {
        title: 'NI Multisim',
        description: 'Diseño y simulación de circuitos eléctricos',
        href: '/software/multisim',
        icon: Cpu,
      },
      {
        title: 'MathCAD 14',
        description: 'Software de cálculo matemático',
        href: '/software/mathcad-14',
        icon: Sigma,
      },
      {
        title: 'MathCAD Prime 7',
        description: 'Software de cálculo matemático',
        href: '/software/mathcad-prime-7',
        icon: Sigma,
      },
      {
        title: 'PSeInt',
        description: 'Pseudocódigo para principiantes',
        href: '/software/pseint',
        icon: FolderCode,
      },
    ],
  },
  {
    title: 'Servicios',
    links: [
      {
        title: 'Reparación de computadoras en Monterrey',
        href: '/servicios/reparacion-de-computadoras-en-monterrey',
        icon: Wrench,
      },
      {
        title: 'Reparación de computadoras en Guadalupe',
        href: '/servicios/reparacion-de-computadoras-en-guadalupe',
        icon: Wrench,
      },
      {
        title: 'Reparación de computadoras en San Nicolás',
        href: '/servicios/reparacion-de-computadoras-en-san-nicolas',
        icon: Wrench,
      },
      {
        title: 'Servicios GPS',
        href: 'https://gpstrackingsystem.bysmax.com/',
        icon: MapPin,
      },
    ],
  },
]
