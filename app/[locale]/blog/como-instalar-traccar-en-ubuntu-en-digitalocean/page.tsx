import CursoLayout from '@/layouts/CursoLayout'
import React from 'react'
import { genPageMetadata } from '../../seo'
import siteMetadata from '@/data/siteMetadata'
import TRACCAR from '@/data/traccar'
import getAllPosts from '@/lib/allPosts'
import { allBlogs, Blog } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { components } from '@/components/MDXComponents'
export const metadata = genPageMetadata({
  title: 'Curso Gratuito de Traccar desde Cero hasta Avanzado en español',
  description:
    'Este curso en español te guiará desde la configuración inicial de tu propio servidor de rastreo hasta la gestión avanzada de dispositivos y la personalización de la plataforma.',
  openGraph: {
    title: 'Curso Gratuito de Traccar desde Cero hasta Avanzado en español',
    description:
      'Este curso en español te guiará desde la configuración inicial de tu propio servidor de rastreo hasta la gestión avanzada de dispositivos y la personalización de la plataforma.',
    siteName: siteMetadata.title,
    locale: 'es_MX',
    url: './',
    images: '/static/images/curso-traccar.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Curso Gratuito de Traccar desde Cero hasta Avanzado en español',
    description:
      'Este curso en español te guiará desde la configuración inicial de tu propio servidor de rastreo hasta la gestión avanzada de dispositivos y la personalización de la plataforma',
    images: '/static/images/curso-traccar.jpg',
  },
})

export default function Page() {
  return (
    <CursoLayout
      sidebar={TRACCAR}
      title={'Curso Gratuito de Traccar desde Cero hasta Avanzado en español'}
      description={'Curso Gratuito de Traccar desde Cero hasta Avanzado en español'}
      authorDetails={[]}
      path={{ title: 'Traccar', href: '/traccar' }}
      toc={[]}
      slug={'/traccar/traccar/como-instalar-traccar-en-ubuntu-en-digitalocean'}>
      <Content />
    </CursoLayout>
  )
}

const Content = async ({ locale = 'es' }) => {
  const posts = allBlogs
  const post = posts.filter(p => p.language === locale).find(p => p.slug === 'como-instalar-traccar-en-ubuntu-en-digitalocean') as Blog
  return (
    <div className="prose text-lg dark:prose-invert">
      <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} />
    </div>
  )
}