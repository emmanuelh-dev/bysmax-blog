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
    .find((p) => p.slug === 'calculadora-ley-ohm') as Blog

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
    .find((p) => p.slug === 'calculadora-ley-ohm') as Blog

  return (
    <div>
      <main className="mx-auto mb-12 w-full text-pretty text-center text-neutral-600 dark:text-neutral-400">
        <div className="mx-auto max-w-5xl px-4 pb-6">
          <h2 className="mb-4 text-balance pb-4 pt-16 text-4xl font-bold tracking-tight text-black dark:text-white lg:text-6xl">
            Calculadora de la Ley de Ohm
          </h2>
          <h1>{post.title}</h1>
          <p>{post.summary}</p>
        </div>
        <div className="mx-auto max-w-6xl">
          <CalculadoraLeyOhm />
        </div>
      </main>
      <div className="prose mx-auto px-8 text-lg dark:prose-invert">
        <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} />
      </div>
    </div>
  )
}
