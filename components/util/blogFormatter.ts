import type { Blog, Authors } from 'contentlayer/generated'

export function graphqlToBlog({ post, locale }) {
  const { title, excerpt, date, slug, authorId, tags, content } = post

  // Función para eliminar etiquetas HTML
  const stripHTML = (htmlString: string) => {
    return htmlString.replace(/<\/?[^>]+(>|$)/g, '')
  }

  return {
    type: 'Blog',
    filePath: null,
    path: `posts/${slug}`,
    slug: slug,
    date,
    title,
    tags: tags ? [...tags.nodes.map((tag) => tag.name)] : [],
    toc: [],
    language: locale,
    authors: ['default'],
    readingTime: null,
    content,
    summary: excerpt ? stripHTML(excerpt) : '',
    wpBlog: true,
    structuredData: [],
  } as unknown as Blog
}

export function graphqlToBlogAuthor({ author }) {
  const { id, name, email, description, url } = author.user
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
