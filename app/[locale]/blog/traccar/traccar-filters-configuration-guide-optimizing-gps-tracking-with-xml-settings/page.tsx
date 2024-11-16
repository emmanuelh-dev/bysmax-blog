import CursoLayout from '@/layouts/CursoLayout'
import React from 'react'
import { genPageMetadata } from '../../../seo'
import siteMetadata from '@/data/siteMetadata'
import TRACCAR from '@/data/traccar'
import getAllPosts from '@/lib/allPosts'
import { allBlogs, Blog } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { components } from '@/components/MDXComponents'
export const metadata = genPageMetadata({
  title: 'Traccar Filters Configuration Guide: Optimizing GPS Tracking with XML Settings',
  description:
    'Traccar, an open-source GPS tracking system, offers powerful filtering capabilities to enhance location data accuracy and efficiency',
  openGraph: {
    title: 'Traccar Filters Configuration Guide: Optimizing GPS Tracking with XML Settings',
    description:
      'Traccar, an open-source GPS tracking system, offers powerful filtering capabilities to enhance location data accuracy and efficiency',
    siteName: siteMetadata.title,
    locale: 'es_MX',
    url: './',
    images: '/static/images/curso-traccar.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Traccar Filters Configuration Guide: Optimizing GPS Tracking with XML Settings',
    description:
      'Traccar, an open-source GPS tracking system, offers powerful filtering capabilities to enhance location data accuracy and efficiency',
    images: '/static/images/curso-traccar.jpg',
  },
})

export default function Page() {
  return (
    <CursoLayout
      sidebar={TRACCAR}
      title={'Traccar Filters Configuration Guide: Optimizing GPS Tracking with XML Settings'}
      description={
        'Traccar, an open-source GPS tracking system, offers powerful filtering capabilities to enhance location data accuracy and efficiency'
      }
      authorDetails={[]}
      path={{ title: 'Traccar', href: '/traccar' }}
      toc={[]}
      slug={
        '/traccar/traccar/traccar-filters-configuration-guide-optimizing-gps-tracking-with-xml-settings'
      }
    >
      <Content />
    </CursoLayout>
  )
}

const Content = async ({ locale = 'es' }) => {
  const posts = allBlogs
  const post = posts
    .filter((p) => p.language === locale)
    .find(
      (p) =>
        p.slug ===
        'traccar/traccar-filters-configuration-guide-optimizing-gps-tracking-with-xml-settings'
    ) as Blog

  console.log(post)
  return (
    <div className="prose text-lg dark:prose-invert">
      <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} />
    </div>
  )
}
