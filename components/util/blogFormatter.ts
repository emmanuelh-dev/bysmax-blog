import type { Blog, Authors } from 'contentlayer/generated'

export function graphqlToBlog({ post }) {
  console.log(post)
  const { id, title, date, slug, authorId, tags, content } = post.postBy
  return {
    type: 'Blog',
    filePath: null,
    path: `posts/${slug}`,
    slug: slug,
    date,
    title,
    tags: tags ? [...tags.nodes.map((tag) => tag.name)] : [],
    toc: [],
    language: 'es',
    authors: ['default'],
    readingTime: null,
    content,
    structuredData: [],
  } as unknown as Blog
}

export function graphqlToBlogAuthor({ author }) {
  const { id, name, email, description, url } = author.user
  console.log(author)
  return [
    {
      id,
      name,
      twitter: null,
      email,
      description,
      url,
    },
  ] as unknown as Authors[]
}
