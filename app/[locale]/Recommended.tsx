import React from 'react'
import Main from './Main'
import { allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import SectionContainer from '@/components/SectionContainer'
import getAllPosts from '@/lib/allPosts'

export default async function Recommended({ tags, locale }) {
  console.log(tags)
  const blogs = await getAllPosts({ locale })
  const filteredPosts = blogs
    .filter((p) => p.language === locale)
    .filter((post) => tags.some((tag) => post.tags.includes(tag)))

  const posts = allCoreContent(filteredPosts)

  return (
    <SectionContainer>
      <Main posts={posts} locale={locale} />
    </SectionContainer>
  )
}
