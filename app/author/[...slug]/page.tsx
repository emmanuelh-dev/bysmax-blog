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
import AuthorLayout from '@/layouts/AuthorLayout'
import { useRouter } from 'next/navigation'

const defaultLayout = 'PostLayout'
const layouts = {
  PostSimple,
  PostLayout,
  PostBanner,
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] }
}): Promise<Metadata | undefined> {
  const slug = decodeURI(params.slug.join('/'))
  const author = allAuthors.find((p) => p.slug === slug)
  if (!author) {
    return
  }

  console.log('author', author)
  return {
    title: author.name,
    description: author.body.raw,
    openGraph: {
      title: author.name,
      description: author.body.raw,
      siteName: siteMetadata.title,
      locale: 'es_MX',
      type: 'article',
      url: './',
    },
    twitter: {
      card: 'summary_large_image',
      title: author.name,
      description: author.body.raw,
    },
  }
}

export const generateStaticParams = async () => {
  const paths = allBlogs.map((p) => ({ slug: p.slug.split('/') }))

  return paths
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const slug = decodeURI(params.slug.join('/'))

  const authorIndex = allAuthors.findIndex((p) => p.slug === slug)
  if (authorIndex === -1) {
    return notFound()
  }
  const author = allAuthors.find((p) => p.slug === slug) as Authors
  const mainContent = coreContent(author)
  const posts = allCoreContent(sortPosts(allBlogs))

  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
        <div>
          <h2>Posts</h2>
          <ul>
            {posts
              .filter((post) => post.authors?.includes(author.slug))
              .map((post) => (
                <li key={post.slug}>
                  <a href={`/blog/${post.slug}`}>{post.title}</a>
                </li>
              ))}
          </ul>
        </div>
      </AuthorLayout>
    </>
  )
}
