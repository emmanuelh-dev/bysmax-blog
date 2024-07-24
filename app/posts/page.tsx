import React from 'react'

export default async function Page() {
  const response = await fetch('https://cdn.bysmax.com/index.php?graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query PostQuery {
          posts {
            nodes {
              title
              date
              slug
              author {
                cursor
              }
              content
            }
          }
        }
      `,
    }),
  })

  const { data } = await response.json()
  const posts = data.posts.nodes

  return (
    <div>
      {posts &&
        posts.map((post, index) => (
          <div key={index}>
            <h2>{post.title}</h2>
            <p>{post.date}</p>
            <a className="text-primary-600" href={`/posts/${post.slug}`}>
              {post.slug}
            </a>
          </div>
        ))}
    </div>
  )
}
