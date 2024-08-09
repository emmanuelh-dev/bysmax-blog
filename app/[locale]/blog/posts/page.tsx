import React from 'react'
import dynamic from 'next/dynamic'
import SuspencePosts from '@/layouts/components/SuspencePosts'
import siteMetadata from '@/data/siteMetadata'
import { genPageMetadata } from '../../seo'
import { getPostBySlug } from '@/components/util/wpGraphQL'
import { graphqlToBlog } from '@/components/util/blogFormatter'
import { maintitle } from '@/data/localeMetadata'

const Posts = dynamic(() => import('@/components/ShowPosts'), {
  loading: () => <SuspencePosts />,
  ssr: false,
})

export async function generateMetadata({ params: { slug, locale } }) {
  const dslug = decodeURI(slug.join('/'))
  const post = await getPostBySlug(dslug)
  const blog = graphqlToBlog({ post })

  if (!post) {
    null
  }
  return {
    title: blog.title,
    description: blog.summary,
    openGraph: {
      title: blog.title,
      description: blog.summary,
      siteName: maintitle[locale],
      locale: blog.language,
      type: 'article',
      publishedTime: blog.date,
      modifiedTime: blog.date,
      url: './',
      images: siteMetadata.socialBanner,
      authors: [siteMetadata.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.summary,
      images: siteMetadata.socialBanner,
    },
  }
}

export default async function Page({ params: { locale } }) {
  return (
    <>
      <section>
        <div className="py-4">
          <h1 className="text-sm text-neutral-500 dark:text-neutral-400">{siteMetadata.title}</h1>
          <p className="text-4xl font-bold xl:text-6xl">Posts</p>
        </div>
        <Posts locale={locale} />
      </section>
    </>
  )
}
