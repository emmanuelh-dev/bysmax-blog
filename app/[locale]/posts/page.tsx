import React from 'react'

const getPosts = async () => {
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
  return data.posts.nodes
}

export default async function Page() {
  const posts = await getPosts()
  return (
    <div>
      {posts &&
        posts.map((post, index) => (
          <div key={index}>
            <h2>{post.title}</h2>
            <p>{post.date}</p>
            <a href={`/posts/${post.slug}`}>{post.slug}</a>
            <p>{post.author.cursor}</p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        ))}
    </div>
  )
}
