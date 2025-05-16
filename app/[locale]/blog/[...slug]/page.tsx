import 'css/prism.css'
import 'katex/dist/katex.css'
import { Suspense, lazy } from 'react'
import { Metadata } from 'next'
import { components } from '@/components/MDXComponents'
import { allBlogs, allAuthors } from 'contentlayer/generated'
import type { Authors, Blog } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'
import { maintitle } from '@/data/localeMetadata'
import { notFound } from 'next/navigation'
import { LocaleTypes } from 'app/[locale]/i18n/settings'
import getAllPosts from '@/lib/allPosts'
import { coreContent } from 'pliny/utils/contentlayer'

// Lazy load pesados componentes
const MDXLayoutRenderer = lazy(() =>
  import('pliny/mdx-components').then((mod) => ({
    default: mod.MDXLayoutRenderer,
  }))
)
const PostLayout = lazy(() => import('@/layouts/PostLayout'))
const PostBanner = lazy(() => import('@/layouts/PostBanner'))
const PostSimple = lazy(() => import('@/layouts/PostSimple'))

// Loading component
const LoadingFallback = () => (
  <div className="flex h-48 items-center justify-center">
    <div className="border-primary h-8 w-8 animate-spin rounded-full border-4"></div>
  </div>
)

interface BlogPageProps {
  params: { slug: string[]; locale: LocaleTypes }
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

export default async function BlogPage({ params }: BlogPageProps) {
  const slug = params?.slug?.join('/')
  const locale = params?.locale as LocaleTypes
  const posts = await getAllPosts({ locale })
  const postIndex = posts.findIndex((p) => p.slug === slug)
  const prev = posts[postIndex + 1] || null
  const next = posts[postIndex - 1] || null
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return notFound()
  }

  const authorList = post?.authors || ['default']
  const authorDetails = allAuthors.filter((author) => authorList.includes(author.slug))
  const mainContent = coreContent(post)
  const Layout = post?.layout || 'PostLayout'

  const layoutMap = {
    PostSimple: PostSimple,
    PostLayout: PostLayout,
    PostBanner: PostBanner,
  }

  const LayoutComponent = layoutMap[Layout]

  return (
    <Suspense fallback={<LoadingFallback />}>
      <LayoutComponent content={mainContent} authorDetails={authorDetails} next={next} prev={prev}>
        <Suspense fallback={<LoadingFallback />}>
          <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} />
        </Suspense>
      </LayoutComponent>
    </Suspense>
  )
}
