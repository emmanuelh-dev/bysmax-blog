import type { Blog, Authors } from 'contentlayer/generated'
import { TocItem } from 'pliny/mdx-plugins/remark-toc-headings'

export function graphqlToBlog({ post, locale }) {
  const { title, excerpt, date, slug, authorId, tags, content } = post

  // Función para eliminar etiquetas HTML
  const stripHTML = (htmlString: string) => {
    return htmlString.replace(/<\/?[^>]+(>|$)/g, '')
  }

  // Extraer los enlaces del TOC
  const extractTOC = (content: string): TocItem[] => {
    const tocItems: TocItem[] = []

    // Expresión regular para extraer los enlaces y su profundidad
    const linkRegex = /<a[^>]*href="([^"]*)"[^>]*>([^<]*)<\/a>/g
    let match

    while ((match = linkRegex.exec(content)) !== null) {
      // Buscamos el nivel de profundidad basado en la clase del elemento padre
      const depthMatch = /class="ez-toc-page-1 ez-toc-heading-level-(\d+)"/.exec(
        content.substring(0, match.index)
      )
      const depth = depthMatch ? parseInt(depthMatch[1], 10) : 1

      tocItems.push({
        value: match[2].trim(),
        url: match[1],
        depth: depth,
      })
    }

    return tocItems
  }

  const toc = extractTOC(content)

  return {
    type: 'Blog',
    filePath: null,
    path: `posts/${slug}`,
    slug: slug,
    date,
    title,
    tags: tags ? [...tags.nodes.map((tag) => tag.name)] : [],
    toc: toc,
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
