/* eslint-disable react-hooks/rules-of-hooks */
import 'css/prism.css'
import 'katex/dist/katex.css'
import { Metadata } from 'next'
import { components } from '@/components/MDXComponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { allAuthors, allCursos } from 'contentlayer/generated'
import type { Authors, Curso } from 'contentlayer/generated'
import PostSimple from '@/layouts/PostSimple'
import PostLayout from '@/layouts/PostLayout'
import PostBanner from '@/layouts/PostBanner'
import siteMetadata from '@/data/siteMetadata'
import { maintitle } from '@/data/localeMetadata'
import { notFound } from 'next/navigation'
import { LocaleTypes } from 'app/[locale]/i18n/settings'
import getAllPosts from '@/lib/allPosts'
import { coreContent, sortPosts } from 'pliny/utils/contentlayer'
import CursoLayout from '@/layouts/CursoLayout'
import useTemario from '@/data/cursoTraccar'

interface CursoPageProps {
  params: { slug: string[]; locale: LocaleTypes }
}

const defaultLayout = 'PostLayout'
const layouts = {
  PostSimple,
  PostLayout,
  PostBanner,
}

const curso = 'arduino'

export async function generateMetadata({
  params: { slug, locale },
}: CursoPageProps): Promise<Metadata | undefined> {
  const dslug = decodeURI(slug.join('/'))
  const sortedCoreContents = sortPosts(allCursos)
  const posts = sortedCoreContents
    .filter((p) => p.language === locale)
    .filter((p) => p.id === curso)
  const post = posts.find((p) => p.slug === dslug)

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

// export const generateStaticParams = async () => {
//   const paths = allCursos.map((p) => ({ slug: p.slug.split('/') }))
//   return paths
// }

export default async function Page({ params: { slug, locale } }: CursoPageProps) {
  const dslug = decodeURI(slug.join('/'))
  const curso = 'traccar'
  // Filter out drafts in production + locale filtering
  const sortedCoreContents = sortPosts(allCursos)
  const postIndex = sortedCoreContents.findIndex((p) => p.slug === dslug)

  if (postIndex === -1) return notFound()

  const prev = sortedCoreContents[postIndex + 1]
  const next = sortedCoreContents[postIndex - 1]
  const posts = sortedCoreContents
    .filter((p) => p.language === locale)
    .filter((p) => p.id === curso)
  const post = posts.find((p) => p.slug === dslug)

  if (!post) return notFound()

  const author = allAuthors.filter((a) => a.language === locale).find((a) => a.default === true)

  const authorList = post.authors || author
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors
      .filter((a) => a.language === locale)
      .find((a) => a.slug.includes(author))
    return coreContent(authorResults as Authors)
  })

  const jsonLd = post.structuredData
  jsonLd['author'] = authorDetails.map((author) => {
    return {
      '@type': 'Person',
      name: author.name,
    }
  })

  const TEMARIO = useTemario(locale, curso)

  return (
    <CursoLayout
      sidebar={TEMARIO}
      title={post.title}
      description={post.summary}
      authorDetails={[]}
      toc={post.toc}
      path={{ title: 'Traccar', href: '/traccar' }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="prose text-lg dark:prose-invert">
        <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} />
      </div>
    </CursoLayout>
  )
}
