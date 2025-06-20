import React from 'react'
import ListLayout from '@/layouts/ListLayout'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { POSTS_PER_PAGE } from '@/data/postsPerPage'

export default async function ShowPosts({ locale }) {
  // Filtrar y ordenar posts
  const allBlogPosts = allBlogs.filter((post) => post.language === locale)
  const sortedPosts = sortPosts(allBlogPosts)
  const filteredPosts = allCoreContent(sortedPosts)

  return <ListLayout params={{ locale }} posts={filteredPosts} title="all" />
}
