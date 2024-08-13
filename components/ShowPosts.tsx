import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from 'pliny/utils/formatDate'
import React from 'react'
import { getPosts } from './util/wpGraphQL'
import ListLayout from '@/layouts/ListLayout'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'

export default async function ShowPosts({ locale }) {
  const posts = await getPosts({ locale })
  const blogs = allCoreContent(sortPosts(allBlogs))
  const filteredPosts = blogs.filter((post) => post.language === locale)
  const allPosts = [...posts, ...filteredPosts]
  return <ListLayout params={{ locale: locale }} posts={allPosts} title="all" />
}
