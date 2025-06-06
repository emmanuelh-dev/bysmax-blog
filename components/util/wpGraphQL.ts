import { graphqlToBlog } from './blogFormatter'

export const getPosts = async ({ locale }) => {
  const response = await fetch('https://cdn.bysmax.com/index.php?graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query GetPostsByCategory($categoryName: String!) {
          posts(where: {categoryName: $categoryName}) {
            nodes {
              title
              content
              date
              slug
              authorId
              excerpt
              featuredImage {
                node {
                  sourceUrl
                }
              }
              tags {
                nodes {
                  name
                }
              }
              categories {
                nodes {
                  name
                }
              }
            }
          }
        }
      `,
      variables: {
        categoryName: locale,
      },
    }),
    next: { revalidate: 3600 },
  })

  const { data } = await response.json()
  const posts = data.posts.nodes
  const formattedPosts = posts.map((post) => graphqlToBlog({ post, locale }))
  return formattedPosts
}

export const getPostBySlug = async (slug: string) => {
  const response = await fetch('https://cdn.bysmax.com/index.php?graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query PostQuery($slug: String!) {
        postBy(slug: $slug) {
          id
          title
          date
          authorId
          slug
          excerpt
          content
          tags {
            nodes {
              name
            }
          }
        }
      }
    `,
      variables: {
        slug: slug,
      },
    }),
    next: { revalidate: 10 },
  })
  const { data } = await response.json()
  return data
}

export const getAuthorByID = async (id: string) => {
  const response = await fetch('https://cdn.bysmax.com/index.php?graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query AuthorQuery($id: ID!) {
        user(id: $id) {
          id
          name
          url
          email
          description
          posts {
            nodes {
              id
              title
              date
            }
          }
        }
      }
      `,
      variables: {
        id: id,
      },
    }),
    next: { revalidate: 10 },
  })
  const { data } = await response.json()
  return data
}
