import React from 'react'
import Main from './Main'
import { allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import SectionContainer from '@/components/SectionContainer'

export default function Recommended({ tags, locale }) {
  const filteredPosts = allBlogs
    .filter((p) => p.language === locale)
    .filter((post) => tags.some((tag) => post.tags.includes(tag)))

  const posts = allCoreContent(filteredPosts)

  return (
    <SectionContainer>
      <Main posts={posts} locale={locale} />
    </SectionContainer>
  )
}
