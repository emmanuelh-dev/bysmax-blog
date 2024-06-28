import React from 'react'
import Main from './Main'
import { allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { SectionContainerWithAds } from '@/components/SectionContainer'

export default function Recommended({ tags, title }) {
  const filteredPosts = allBlogs.filter((post) => tags.some((tag) => post.tags.includes(tag)))

  const posts = allCoreContent(filteredPosts)

  return (
    <SectionContainerWithAds>
      <Main posts={posts} title={title} />
    </SectionContainerWithAds>
  )
}
