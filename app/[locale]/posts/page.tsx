import React from 'react'
import dynamic from 'next/dynamic'
import SuspencePosts from '@/layouts/components/SuspencePosts'
import siteMetadata from '@/data/siteMetadata'
import { genPageMetadata } from '../seo'

const Posts = dynamic(() => import('@/components/ShowPosts'), {
  loading: () => <SuspencePosts />,
  ssr: false,
})

export async function generateMetadata({ params: { locale } }) {
  return genPageMetadata({
    title: 'Posts',
    params: { locale: locale },
  })
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
