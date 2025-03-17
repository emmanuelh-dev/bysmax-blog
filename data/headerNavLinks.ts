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
  { href: '/donate', title: 'common:donate', icon: GraduationCap },
  { href: '/blog', title: 'common:blog', icon: BookMarked },
  { href: '/contacto', title: 'common:contact', icon: Lightbulb },
  { href: '/store', title: 'common:store', icon: ShoppingBag },
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
    title: 'common:tools',
    links: [...TOOLS],
  },
  {
    title: 'common:courses',
    links: [
      {
        title: 'common:traccar_course',
        href: '/traccar',
        icon: Navigation,
      },
      {
        title: 'common:arduino_course',
        href: '/arduino',
        icon: Cpu,
      },
    ],
  },
  {
    title: 'common:guides',
    links: [
      {
        title: 'common:logic_gates',
        href: '/compuertas-logicas',
      },
      {
        title: 'common:arduino_tutorials',
        href: '/arduino/tutoriales',
      },
    ],
  },
  {
    title: 'common:software',
    links: [
      { title: 'common:all', href: '/software' },
      {
        title: 'Proteus 8.8',
        description: 'proteus_desc',
        href: '/software/proteus',
        icon: Cpu,
      },
      {
        title: 'NI Multisim',
        description: 'multisim_desc',
        href: '/software/multisim',
        icon: Cpu,
      },
      {
        title: 'MathCAD 14',
        href: '/software/mathcad-14',
        description: 'mathcad_desc',
        icon: Sigma,
      },
      {
        title: 'MathCAD Prime 7',
        href: '/software/mathcad-prime-7',
        description: 'mathcad_desc',
        icon: Sigma,
      },
      {
        title: 'PSeInt',
        href: '/software/pseint',
        description: 'pseint_desc',
        icon: FolderCode,
      },
    ],
  },
  {
    title: 'common:services',
    links: [
      {
        title: 'common:computer_repair_mty',
        description: '',
        href: '/servicios/reparacion-de-computadoras-en-monterrey',
        icon: Wrench,
      },
      {
        title: 'common:computer_repair_gdl',
        description: '',
        href: '/servicios/reparacion-de-computadoras-en-guadalupe',
        icon: Wrench,
      },
      {
        title: 'common:computer_repair_sn',
        description: '',
        href: '/servicios/reparacion-de-computadoras-en-san-nicolas',
        icon: Wrench,
      },
      {
        title: 'common:gps_services',
        description: '',
        href: 'https://gpstrackingsystem.bysmax.com/',
        icon: MapPin,
      },
    ],
  },
]
