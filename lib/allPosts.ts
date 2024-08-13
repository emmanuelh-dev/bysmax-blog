import { getPosts } from '@/components/util/wpGraphQL'
import { allBlogs, Blog } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'

export default async function getAllPosts({ locale }) {
  const posts = await getPosts({ locale })

  const blogs = allCoreContent(allBlogs).filter((post) => post.language === locale)

  const allPosts = [...posts, ...blogs]
  const sortedPosts = sortPosts(allPosts)

  return sortedPosts as any as Blog[]
}
