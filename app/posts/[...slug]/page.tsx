import 'css/prism.css'
import 'katex/dist/katex.css'

import PageTitle from '@/components/PageTitle'
import { components } from '@/components/MDXComponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { sortPosts, coreContent, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs, allAuthors } from 'contentlayer/generated'
import type { Authors, Blog } from 'contentlayer/generated'
import PostSimple from '@/layouts/PostSimple'
import PostLayout from '@/layouts/PostLayout'
import PostBanner from '@/layouts/PostBanner'
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import { notFound } from 'next/navigation'

export const generateStaticParams = async () => {
  const paths = allBlogs.map((p) => ({ slug: p.slug.split('/') }))

  return paths
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const slug = decodeURI(params.slug.join('/'))

  const response = await fetch('https://cdn.bysmax.com/index.php?graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query PostQuery($slug: String!) {
        postBy(slug: $slug) {
          id
          title
          content
        }
      }
    `,
      variables: {
        slug: slug,
      },
    }),
  })

  const { data } = await response.json()

  console.log(data)
  return (
    <div>
      <h1 className="text-6xl font-bold">{data.postBy.title}</h1>
      <div className="prose dark:prose-invert">
        <div dangerouslySetInnerHTML={{ __html: data.postBy.content }} />
      </div>
    </div>
  )
}
