import CursoLayout from '@/layouts/CursoLayout'
import React from 'react'
import siteMetadata from '@/data/siteMetadata'
import TRACCAR from '@/data/traccar'
import { allBlogs, Blog } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { components } from '@/components/MDXComponents'
import { genPageMetadata } from '../../seo'
import CalculadoraLeyOhm from '@/components/calculadoras/CalculadoraLeyOhm'

export async function generateMetadata({ params, searchParams }, parent) {
  const posts = allBlogs
  const post = posts
    .filter((p) => p.language === 'es')
    .find((p) => p.slug === 'traccar/como-personalizar-traccar-web') as Blog

  return genPageMetadata({
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      siteName: siteMetadata.title,
      locale: 'es_MX',
      url: `./${post.slug}`,
      images: post.images || '/static/images/curso-traccar.jpg',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: post.images || '/static/images/curso-traccar.jpg',
    },
  })
}

export default function Page() {
  const posts = allBlogs
  const post = posts
    .filter((p) => p.language === 'es')
    .find((p) => p.slug === 'traccar/como-personalizar-traccar-web') as Blog

  return (
    <CursoLayout
      sidebar={TRACCAR}
      title={post.title}
      description={post.summary}
      authorDetails={post.authors || []}
      path={{ title: 'Traccar', href: '/traccar' }}
      toc={post.toc}
      slug={post.slug}
    >
      <CalculadoraLeyOhm />
      <div className="prose text-lg dark:prose-invert">
        <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} />
      </div>
    </CursoLayout>
  )
}
