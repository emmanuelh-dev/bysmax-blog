import CursoLayout from '@/layouts/CursoLayout'
import React from 'react'
import { genPageMetadata } from '../../seo'
import siteMetadata, { locale } from '@/data/siteMetadata'
import TRACCAR from '@/data/traccar'
import getAllPosts from '@/lib/allPosts'
import { allBlogs, Blog } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { components } from '@/components/MDXComponents'

export async function generateMetadata({ params, searchParams }, parent) {
  const posts = allBlogs
  const post = posts
    .filter((p) => p.language === 'es')
    .find((p) => p.slug === 'como-instalar-traccar-en-ubuntu-en-digitalocean') as Blog

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

export default function Page({ params: { locale } }) {
  const posts = allBlogs
  const post = posts
    .filter((p) => p.language === locale)
    .find((p) => p.slug === 'como-instalar-traccar-en-ubuntu-en-digitalocean') as Blog

  return (
    <CursoLayout
      sidebar={TRACCAR}
      title={post.title}
      description={post.summary}
      authorDetails={[]}
      path={{ title: 'Traccar', href: '/traccar' }}
      toc={post.toc}
      slug={'/traccar/traccar/como-instalar-traccar-en-ubuntu-en-digitalocean'}
    >
      <div className="prose text-lg dark:prose-invert">
        <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} />
      </div>
    </CursoLayout>
  )
}
