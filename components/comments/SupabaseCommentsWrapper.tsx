'use client'

import { useState } from 'react'
import SupabaseComments from './SupabaseComments'
import { useParams } from 'next/navigation'
import { LocaleTypes } from 'app/[locale]/i18n/settings'
import { useTranslation } from 'app/[locale]/i18n/client'
import { Button } from '../ui/button'

type SupabaseCommentsWrapperProps = {
  slug: string
}

export default function SupabaseCommentsWrapper({ slug }: SupabaseCommentsWrapperProps) {
  const [loadComments, setLoadComments] = useState(false)
  const locale = useParams()?.locale as LocaleTypes
  const { t } = useTranslation(locale, 'home')

  return (
    <div className="py-4" id="comment">
      {!loadComments && (
        <Button onClick={() => setLoadComments(true)} className="w-full text-center">
          {t('comment') || 'Mostrar comentarios'}
        </Button>
      )}
      {loadComments && <SupabaseComments slug={slug} />}
    </div>
  )
}
