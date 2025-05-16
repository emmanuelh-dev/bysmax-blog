import React from 'react'
import { getPosts } from './util/wpGraphQL'
import ListLayout from '@/layouts/ListLayout'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { POSTS_PER_PAGE } from '@/data/postsPerPage'

export default async function ShowPosts({ locale }) {
  // Cargar posts en paralelo
  const [wpPosts, blogs] = await Promise.all([
    getPosts({ locale }),
    Promise.resolve(allCoreContent(sortPosts(allBlogs))),
  ])

  // Filtrar y ordenar posts
  const filteredPosts = blogs.filter((post) => post.language === locale)
  const allPosts = [...wpPosts, ...filteredPosts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return <ListLayout params={{ locale }} posts={allPosts} title="all" />
}
