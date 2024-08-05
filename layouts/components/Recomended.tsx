import React from 'react'
import Main from '@/app/[locale]/Main'
import { allBlogs } from 'contentlayer/generated'
import { allCoreContent } from 'pliny/utils/contentlayer'

export default function Recomended({ tags, locale }) {
  const filteredPosts = tags
    ? allBlogs
        .filter((p) => p.language === locale)
        .filter((post) => tags.some((tag) => post.tags.includes(tag)))
    : []
  const posts = allCoreContent(filteredPosts)

  return <Main posts={posts} locale={locale} />
}
