import PageTitle from '@/components/PageTitle'
import siteMetadata from '@/data/siteMetadata'
import 'css/prism.css'
import 'katex/dist/katex.css'
import { LocaleTypes } from '../../i18n/settings'
import dynamic from 'next/dynamic'
import { getAuthorByID, getPostBySlug, getPosts } from '@/components/util/wpGraphQL'
import { graphqlToBlog, graphqlToBlogAuthor } from '@/components/util/blogFormatter'
import { SectionContainerWithAds } from '@/components/SectionContainer'

interface BlogPageProps {
  params: { slug: string[]; locale: LocaleTypes }
}

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}
const Sidebar = dynamic(() => import('@/components/SideBar'), {
  loading: () => <Lazy />,
  ssr: false,
})
export async function generateMetadata({ params: { slug, locale } }) {
  const dslug = decodeURI(slug.join('/'))
  const post = await getPostBySlug(dslug)

  if (!post) {
    null
  }
  return {
    title: post.postBy.title,
  }
}
export const generateStaticParams = async () => {
  const posts = await getPosts()
  const paths = await posts.map((p) => ({ slug: p.slug.split('/') }))
  return paths
}

export default async function Page({ params: { slug, locale } }: BlogPageProps) {
  const dslug = decodeURI(slug.join('/'))
  const post = await getPostBySlug(dslug)
  const blog = graphqlToBlog({ post })
  const author = await getAuthorByID(post.postBy.authorId)
  const authorDetails = graphqlToBlogAuthor({ author })
  return (
    <SectionContainerWithAds>
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
                        <time dateTime={post.postBy.date}>
                          {new Date(post.postBy.date).toLocaleDateString(
                            siteMetadata.locale,
                            postDateTemplate
                          )}
                        </time>
                      </dd>
                    </div>
                  </dl>
                  <div>
                    <PageTitle>{post.postBy.title}</PageTitle>
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
                <div dangerouslySetInnerHTML={{ __html: post.postBy.content }} />
              </div>
            </div>
            <Sidebar
              authorDetails={authorDetails}
              next={null}
              prev={null}
              content={blog}
              locale={null}
            />
          </div>
        </div>
      </article>
    </SectionContainerWithAds>
  )
}
const Lazy = () => (
  <div className="space-y-6">
    <div className="aspect-square w-full rounded-md bg-neutral-200 dark:bg-neutral-900"></div>
    <div className="aspect-video w-full rounded-md bg-neutral-200 dark:bg-neutral-900"></div>
    <div className="aspect-square w-full rounded-md bg-neutral-200 dark:bg-neutral-900"></div>
  </div>
)
