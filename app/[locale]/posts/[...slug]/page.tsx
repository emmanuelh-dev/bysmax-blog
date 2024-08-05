import PageTitle from '@/components/PageTitle'
import { SectionContainerWithAds } from '@/components/SectionContainer'
import siteMetadata from '@/data/siteMetadata'
import 'css/prism.css'
import 'katex/dist/katex.css'
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
const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}
export const generateStaticParams = async () => {
  const posts = await getPosts()
  const paths = await posts.map((p) => ({ slug: p.slug.split('/') }))
  return paths
}

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
          date
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
    <>
      <div className="w-full overflow-hidden">
        <h1 className="text-6xl font-bold">{data.postBy.title}</h1>
        <div className="prose dark:prose-invert">
          <div dangerouslySetInnerHTML={{ __html: data.postBy.content }} />
        </div>
      </div>
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0">
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <header className="pt-6 xl:pb-6">
                <div className="space-y-1">
                  <dl className="space-y-10">
                    <div>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={data.postBy.date}>
                          {new Date(data.postBy.date).toLocaleDateString(
                            siteMetadata.locale,
                            postDateTemplate
                          )}
                        </time>
                      </dd>
                    </div>
                  </dl>
                  <div>
                    <PageTitle>{data.postBy.title}</PageTitle>
                  </div>
                </div>
              </header>
              <div>
                <ins
                  className="adsbygoogle h-[280px] w-full rounded-md bg-neutral-400 dark:bg-neutral-900 max-sm:aspect-square"
                  style={{ display: 'block' }}
                  data-ad-client="ca-pub-3646138644530578"
                  data-ad-slot="6395288197"
                  data-ad-format="auto"
                  data-full-width-responsive="true"
                ></ins>
              </div>
              <div className="prose max-w-none pb-8 pt-10 dark:prose-invert">
                <div dangerouslySetInnerHTML={{ __html: data.postBy.content }} />
              </div>
            </div>
          </div>
        </div>
      </article>
      <div className="w-full overflow-hidden">
        <h1 className="text-6xl font-bold"></h1>
        <div className="prose dark:prose-invert">
          <div dangerouslySetInnerHTML={{ __html: data.postBy.content }} />
        </div>
      </div>
    </>
  )
}
