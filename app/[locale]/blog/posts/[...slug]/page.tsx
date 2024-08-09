import PageTitle from '@/components/PageTitle'
import siteMetadata from '@/data/siteMetadata'
import 'css/prism.css'
import 'katex/dist/katex.css'

import dynamic from 'next/dynamic'
import { getAuthorByID, getPostBySlug, getPosts } from '@/components/util/wpGraphQL'
import { graphqlToBlog, graphqlToBlogAuthor } from '@/components/util/blogFormatter'
import { components } from '@/components/MDXComponents'
import Layout from '@/layouts/PostLayout'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { LocaleTypes } from '@/app/[locale]/i18n/settings'
interface BlogPageProps {
  params: { slug: string[]; locale: LocaleTypes }
}

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}
const Sidebar = dynamic(() => import('@/components/SideBar'), {
  loading: () => <Lazy />,
  ssr: false,
})
export async function generateMetadata({ params: { slug, locale } }) {
  const dslug = decodeURI(slug.join('/'))
  const post = await getPostBySlug(dslug)

  if (!post) {
    null
  }
  return {
    title: post.postBy.title,
  }
}
export const generateStaticParams = async ({ params: { slug, locale } }) => {
  const posts = await getPosts({ locale })
  const paths = await posts.map((p) => ({ slug: p.slug.split('/') }))
  return paths
}

export default async function Page({ params: { slug, locale } }: BlogPageProps) {
  const dslug = decodeURI(slug.join('/'))
  const post = await getPostBySlug(dslug)
  const blog = graphqlToBlog({ post })
  const author = await getAuthorByID(post.postBy.authorId)
  const authorDetails = graphqlToBlogAuthor({ author })

  const jsonLd = authorDetails.map((author) => {
    return {
      '@type': 'Person',
      name: author.name,
    }
  })
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Layout content={blog} authorDetails={authorDetails} params={{ locale: locale }}>
        {/* <MDXLayoutRenderer code={blog.content} components={components} toc={post.toc} /> */}
        <div dangerouslySetInnerHTML={{ __html: post.postBy.content }} />
      </Layout>
    </>
  )
}
const Lazy = () => (
  <div className="space-y-6">
    <div className="aspect-square w-full rounded-md bg-neutral-200 dark:bg-neutral-900"></div>
    <div className="aspect-video w-full rounded-md bg-neutral-200 dark:bg-neutral-900"></div>
    <div className="aspect-square w-full rounded-md bg-neutral-200 dark:bg-neutral-900"></div>
  </div>
)
