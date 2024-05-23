import siteMetadata from '@/data/siteMetadata'

const createUrl = `${siteMetadata.siteRepo}/new/main/data/blog` // Change if you want to create a new file in a different directory

const headerNavLinks = [
  { href: '/servicios', title: 'Servicios' },
  { href: '/cursos', title: 'Cursos' },
  { href: '/blog', title: 'Blog' },
  { href: '/tags', title: 'Tags' },
  { href: '/projects', title: 'Proyectos' },
  { href: '/author', title: 'Sobre Nosotros' },
  { href: '/blog/generador-de-cabeceras-para-tailwind-nextjs-starter-blog', title: 'Crear nuevo' },
]

export default headerNavLinks
