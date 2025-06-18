'use client'

import { usePathname } from 'next/navigation'
import siteMetadata from '@/data/siteMetadata'

interface HrefLangLinksProps {
  currentLocale: string
}

export default function HrefLangLinks({ currentLocale }: HrefLangLinksProps) {
  const pathname = usePathname()
  
  // Remove current locale from pathname to get the base path
  const basePath = pathname.replace(/^\/(es|en|pt|fr)/, '') || '/'
  
  // Define all supported locales
  const locales = ['es', 'en', 'pt', 'fr']
  
  return (
    <>
      {locales.map((locale) => (
        <link
          key={locale}
          rel="alternate"
          hrefLang={locale}
          href={`${siteMetadata.siteUrl}/${locale}${basePath === '/' ? '' : basePath}`}
        />
      ))}
      {/* Add x-default for the default locale */}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${siteMetadata.siteUrl}/es${basePath === '/' ? '' : basePath}`}
      />
    </>
  )
}
