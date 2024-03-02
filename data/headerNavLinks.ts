import siteMetadata from '@/data/siteMetadata'

const createUrl = `${siteMetadata.siteRepo}/new/main/data/blog` // Change if you want to create a new file in a different directory

const headerNavLinks = [
  { href: '/', title: 'Inicio' },
  { href: '/blog', title: 'Blog' },
  { href: '/tags', title: 'Tags' },
  { href: '/projects', title: 'Proyectos' },
  { href: '/about', title: 'Sobre Nosotros' },
  { href: createUrl, title: 'Crear nuevo' },
]

export default headerNavLinks
