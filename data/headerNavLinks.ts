import siteMetadata from '@/data/siteMetadata'

const createUrl = `${siteMetadata.siteRepo}/new/main/data/blog` // Change if you want to create a new file in a different directory

const headerNavLinks = [
  { href: '/blog', title: 'Blog' },
  { href: '/blog/generador-de-cabeceras-para-tailwind-nextjs-starter-blog', title: 'Crear nuevo' },
]

export default headerNavLinks
