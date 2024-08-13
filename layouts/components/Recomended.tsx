import React from 'react'
import Main from '@/app/[locale]/Main'
import { allCoreContent } from 'pliny/utils/contentlayer'
import getAllPosts from '@/lib/allPosts'

export default async function Recomended({ tags, locale }) {
  const allPosts = await getAllPosts({ locale })
  const filteredPosts = tags
    ? allPosts
        .filter((p) => p.language === locale)
        .filter((post) => tags.some((tag) => post.tags.includes(tag)))
    : []
  const posts = allCoreContent(filteredPosts)

  return <Main posts={posts} locale={locale} />
}
