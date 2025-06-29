import 'css/prism.css'
import 'katex/dist/katex.css'
import { Metadata } from 'next'
import { components } from '@/components/MDXComponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { allBlogs, allAuthors } from 'contentlayer/generated'
import type { Authors, Blog } from 'contentlayer/generated'
import PostSimple from '@/layouts/PostSimple'
import PostLayout from '@/layouts/PostLayout'
import PostBanner from '@/layouts/PostBanner'
import siteMetadata from '@/data/siteMetadata'
import { maintitle } from '@/data/localeMetadata'
import { notFound } from 'next/navigation'
import { LocaleTypes } from 'app/[locale]/i18n/settings'
import getAllPosts from '@/lib/allPosts'
import { coreContent } from 'pliny/utils/contentlayer'

interface BlogPageProps {
  params: { slug: string[]; locale: LocaleTypes }
}

const defaultLayout = 'PostLayout'
const layouts = {
  PostSimple,
  PostLayout,
  PostBanner,
}

export async function generateMetadata({
  params: { slug, locale },
}: BlogPageProps): Promise<Metadata | undefined> {
  const dslug = decodeURI(slug.join('/'))
  const sortedCoreContents = await getAllPosts({ locale })
  const post = sortedCoreContents.find((p) => p.slug === dslug && p.language === locale) as Blog
  if (!post) {
    return
  }
  const author = allAuthors.filter((a) => a.language === locale).find((a) => a.default === true)
  const authorList = post.authors || (author ? [author] : [])
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors
      .filter((a) => a.language === locale)
      .find((a) => a.slug.includes(author))
    return coreContent(authorResults as Authors)
  })
  const publishedAt = new Date(post.date).toISOString()
  const modifiedAt = new Date(post.lastmod || post.date).toISOString()
  const authors = authorDetails.map((author) => author.name)
  let imageList = [siteMetadata.socialBanner]
  if (post.images) {
    imageList = typeof post.images === 'string' ? [post.images] : post.images
  }
  const ogImages = imageList.map((img) => {
    return {
      url: img.includes('http') ? img : siteMetadata.siteUrl + img,
    }
  })

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      siteName: maintitle[locale],
      locale: post.language,
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      url: './',
      images: ogImages,
      authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: imageList,
    },
  }
}

export const generateStaticParams = async () => {
  const paths = allBlogs.map((p) => ({ slug: p.slug.split('/') }))
  return paths
}

export default async function Page({ params: { slug, locale } }: BlogPageProps) {
  const dslug = decodeURI(slug.join('/'))
  // Filter out drafts in production + locale filtering
  const sortedCoreContents = await getAllPosts({ locale })
  const postIndex = sortedCoreContents.findIndex((p) => p.slug === dslug)
  if (postIndex === -1) {
    return notFound()
  }

  const prev = sortedCoreContents[postIndex + 1]
  const next = sortedCoreContents[postIndex - 1]
  let post = sortedCoreContents.filter((p) => p.language === locale).find((p) => p.slug === dslug)

  if (!post) {
    return notFound()
  }

  post = allBlogs.filter((p) => p.language === locale).find((p) => p.slug === dslug) as Blog

  const author = allAuthors.filter((a) => a.language === locale).find((a) => a.default === true)

  const authorList = post.authors || author
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors
      .filter((a) => a.language === locale)
      .find((a) => a.slug.includes(author))
    return coreContent(authorResults as Authors)
  })
  const mainContent = coreContent(post)
  const jsonLd = post.structuredData
  jsonLd['author'] = authorDetails.map((author) => {
    return {
      '@type': 'Person',
      name: author.name,
    }
  })

  const Layout = layouts[post.layout || defaultLayout]

  post
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Layout
        content={mainContent}
        authorDetails={authorDetails}
        next={next}
        prev={prev}
        params={{ locale: locale }}
        toc={post.toc}
      >
        <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} />
      </Layout>
    </>
  )
}
