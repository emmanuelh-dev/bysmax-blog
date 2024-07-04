import '/css/prism.css'
import 'katex/dist/katex.css'

import { components } from '@/components/MDXComponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components.js'

import { allPages } from 'contentlayer/generated'
import PostLayout from '@/layouts/SimplePage'
import type { Page } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

export default async function Page({ params }: { params: { slug: string[] } }) {
  const slug = decodeURI(params.slug.join('/'))

  const postIndex = allPages.findIndex((p) => p.slug === slug)
  if (postIndex === -1) {
    return notFound()
  }
  const page = allPages.find((p) => p.slug === slug) as Page

  return (
    <PostLayout content={page}>
      <MDXLayoutRenderer code={page.body.code} components={components} toc={page.toc} />
    </PostLayout>
  )
}
