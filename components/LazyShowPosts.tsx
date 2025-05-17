'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import SuspencePosts from '@/layouts/components/SuspencePosts'

// Carga diferida del componente ShowPosts
const ShowPostsComponent = dynamic(() => import('./ShowPosts'), {
  ssr: false, // Deshabilitar SSR para este componente
})

export default function LazyShowPosts({ locale }) {
  return (
    <Suspense fallback={<SuspencePosts />}>
      <ShowPostsComponent locale={locale} />
    </Suspense>
  )
}
