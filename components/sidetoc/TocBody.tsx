'use client'

import TOCInline from 'pliny/ui/TOCInline'
import { useTranslation } from 'app/[locale]/i18n/client'
import { LocaleTypes } from 'app/[locale]/i18n/settings'
import { useParams } from 'next/navigation'
import useSidebarStore from './store'
import { Toc, TocItem as OriginalTocItem } from 'pliny/mdx-plugins/remark-toc-headings'

interface TocBodyProps {
  toc: Toc
}

interface TocItem extends OriginalTocItem {
  children?: TocItem[]
}

const filterToc = (toc: TocItem[]): TocItem[] => {
  return toc.map((item) => {
    const modifiedValue = item.url.replace(/-\d+$/, '')

    return {
      ...item,
      url: modifiedValue,
    }
  })
}

const TocBody = ({ toc }: TocBodyProps) => {
  const locale = useParams()?.locale as LocaleTypes
  const { t } = useTranslation(locale, 'common')
  const { sidebarOpen } = useSidebarStore()

  const filteredToc = filterToc(toc as TocItem[])

  return (
    <div className="fixed left-0 top-0 z-50 h-screen md:flex">
      <div
        className={`fixed left-0 top-0 z-50 flex h-screen ${sidebarOpen ? 'w-72' : 'w-0 -translate-x-10'} flex-col border-r border-neutral-100 bg-neutral-100  px-2 py-4 transition-all duration-300 dark:border-neutral-800 dark:bg-black`}
      >
        <div className="mt-40">
          <div className="my-auto mt-5 max-h-[38rem]  overflow-y-auto pt-4">
            <div className="text-heading-400 text-xl font-bold">{t('sidetoc')}</div>
            <TOCInline
              toc={filteredToc}
              ulClassName="space-y-4 overflow-y-auto my-auto text-primary-500"
              liClassName="hover:text-heading-400"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TocBody
