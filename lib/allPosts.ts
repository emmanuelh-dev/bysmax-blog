import { allBlogs, Blog } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'

export default async function getAllPosts({ locale }) {
  const allBlogPosts = allBlogs.filter((post) => post.language === locale)
  const sortedPosts = sortPosts(allBlogPosts)
  const blogs = allCoreContent(sortedPosts)

  return blogs as Blog[]
}
