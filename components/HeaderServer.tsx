import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import { LocaleTypes } from '@/app/[locale]/i18n/settings'
import headerNavLinks from '@/data/headerNavLinks'
import HeaderClient from './HeaderClient'
import { createTranslation } from '@/app/[locale]/i18n/server'

interface HeaderServerProps {
  locale: LocaleTypes
}

export default async function HeaderServer({ locale }: HeaderServerProps) {
  const { t } = await createTranslation(locale, 'common')

  return (
    <header className="mx-auto flex w-full items-center justify-between px-4 py-4 xl:container">
      {/* Logo - Estático */}
      <div>
        <Link href={`/${locale}`} aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="h-6 text-2xl font-semibold">{siteMetadata.headerTitle}</div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>

      {/* Navegación */}
      <nav className="flex items-center space-x-4 leading-5 sm:space-x-6" role="navigation">
        {/* Enlaces principales - Estáticos en desktop */}
        <div className="hidden items-center space-x-4 sm:space-x-6 md:flex">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={`/${locale}${link.href}`}
                className="text-sm font-medium text-neutral-400 transition-colors duration-200 hover:text-black dark:hover:text-white"
              >
                {t(link.title)}
              </Link>
            ))}
        </div>

        {/* Componentes interactivos */}
        <HeaderClient />
      </nav>
    </header>
  )
}
