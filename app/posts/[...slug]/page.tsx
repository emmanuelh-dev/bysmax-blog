import 'css/prism.css'
import 'katex/dist/katex.css'
import Layout from '@/layouts/WordPressLayout'

export default async function Page({ params }: { params: { slug: string[] } }) {
  const slug = decodeURI(params.slug.join('/'))

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
          content
        }
      }
    `,
      variables: {
        slug: slug,
      },
    }),
  })

  const { data } = await response.json()

  console.log(data)
  return (
    <Layout content={data.postBy}>
      <h1 className="text-6xl font-bold">{data.postBy.title}</h1>
      <div className="prose mx-auto max-w-none dark:prose-invert">
        <div dangerouslySetInnerHTML={{ __html: data.postBy.content }} />
      </div>
    </Layout>
  )
}
