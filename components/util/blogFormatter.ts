export function graphqlToBlog({ post }) {
  const { id, title, date, slug, authorId, tags } = post.postBy
  return {
    filePath: null,
    path: `posts/${slug}`,
    slug: null,
    date,
    title,
    tags: tags ? [...tags.nodes.map((tag) => tag.name)] : null,
    toc: null,
  }
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
  ]
}
