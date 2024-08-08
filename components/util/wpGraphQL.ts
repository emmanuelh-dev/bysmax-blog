export const getPosts = async ({ locale = 'es' }) => {
  const response = await fetch('https://cdn.bysmax.com/index.php?graphql', {
    next: { revalidate: 3600 },
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
  })

  const { data } = await response.json()
  return data.posts.nodes
}

export const getPostBySlug = async (slug: string) => {
  const response = await fetch('https://cdn.bysmax.com/index.php?graphql', {
    next: { revalidate: 3600 },
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
  })
  const { data } = await response.json()
  return data
}
