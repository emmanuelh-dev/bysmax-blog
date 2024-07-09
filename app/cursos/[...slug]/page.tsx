import 'css/prism.css'
import 'katex/dist/katex.css'

import PageTitle from '@/components/PageTitle'
import { components } from '@/components/MDXComponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { sortPosts, coreContent, allCoreContent } from 'pliny/utils/contentlayer'
import { allAuthors, allCursos } from 'contentlayer/generated'
import type { Authors, Blog, Cursos } from 'contentlayer/generated'
import ServicesLayout from '@/layouts/ServicesLayout'
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import { notFound } from 'next/navigation'
export async function generateMetadata({
  params,
}: {
  params: { slug: string[] }
}): Promise<Metadata | undefined> {
  const slug = decodeURI(params.slug.join('/'))
  const post = allCursos.find((p) => p.slug === slug)
  if (!post) {
    return
  }
  // const publishedAt = new Date(post.date).toISOString()
  // let imageList = [siteMetadata.socialBanner]
  // if (post.images) {
  //   imageList = typeof post.images === 'string' ? [post.images] : post.images
  // }
  // const ogImages = imageList.map((img) => {
  //   return {
  //     url: img.includes('http') ? img : siteMetadata.siteUrl + img,
  //   }
  // })

  // return {
  //   title: post.title,
  //   description: post.summary,
  //   openGraph: {
  //     title: post.title,
  //     description: post.summary,
  //     siteName: siteMetadata.title,
  //     locale: 'en_US',
  //     type: 'article',
  //     publishedTime: publishedAt,
  //     url: './',
  //     images: ogImages,
  //   },
  //   twitter: {
  //     card: 'summary_large_image',
  //     title: post.title,
  //     description: post.summary,
  //     images: imageList,
  //   },
  // }
  return {
    title: post.title,
  }
}

export const generateStaticParams = async () => {
  const paths = allCursos.map((p) => ({ slug: p.slug.split('/') }))

  return paths
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const slug = decodeURI(params.slug.join('/'))
  // Filter out drafts in production
  const postIndex = allCursos.findIndex((p) => p.slug === slug)
  if (postIndex === -1) {
    return notFound()
  }

  const prev = allCursos[postIndex + 1]
  const next = allCursos[postIndex - 1]
  const post = allCursos.find((p) => p.slug === slug) as Cursos

  const mainContent = coreContent(post)

  return (
    <ServicesLayout>
      <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} />
    </ServicesLayout>
  )
}
