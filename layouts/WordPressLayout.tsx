import Comments from '@/components/Comments'
import SectionContainer from '@/components/SectionContainer'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

export default function PostLayout({ content, children }) {
  const { path, slug } = content

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <section className="mx-auto max-w-4xl">
        <div>
          <div className="grid-rows-[auto_1fr] divide-y divide-neutral-200 pb-8 dark:divide-neutral-700 xl:divide-y-0">
            <div className="divide-y divide-neutral-200 dark:divide-neutral-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="max-w-4xl pb-8 pt-10 dark:prose-invert">{children}</div>
            </div>
            {siteMetadata.comments && (
              <div className="pb-6 pt-6 text-center text-neutral-700 dark:text-neutral-300" id="comment">
                <Comments slug={slug} />
              </div>
            )}
          </div>
        </div>
      </section>
    </SectionContainer>
  )
}
