'use client'

import { ReactNode } from 'react'
import { KBarSearchProvider } from './kbar'
import { useParams, useRouter } from 'next/navigation'
import siteMetadata from '@/data/siteMetadata'
import { Authors, allAuthors } from 'contentlayer/generated'
import { CoreContent } from 'pliny/utils/contentlayer'
import { Blog } from 'contentlayer/generated'
import { LocaleTypes } from 'app/[locale]/i18n/settings'
import { useTranslation } from 'app/[locale]/i18n/client'
import { fallbackLng } from 'app/[locale]/i18n/locales'
import { HomeIcon, BlogIcon, AboutIcon } from './icons'
import { CgSoftwareDownload } from 'react-icons/cg'
import { FaPython } from 'react-icons/fa'

interface SearchProviderProps {
  children: ReactNode
}

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const locale = useParams()?.locale as LocaleTypes
  const { t } = useTranslation(locale, 'common')
  const router = useRouter()
  const authors = allAuthors
    .filter((a) => a.language === locale)
    .sort((a, b) => (a.default === b.default ? 0 : a.default ? -1 : 1)) as Authors[]

  const authorSearchItems = authors.map((author) => {
    const { name, slug } = author
    return {
      id: slug,
      name: name,
      keywords: '',
      shortcut: [],
      section: locale === fallbackLng ? 'Authors' : 'Auteurs',
      perform: () => router.push(`/${locale}/about/${slug}`),
      icon: (
        <i>
          <AboutIcon />
        </i>
      ),
    }
  })

  const showAuthorsSearch = siteMetadata.multiauthors
  const authorsActions = [
    ...(showAuthorsSearch ? authorSearchItems : []),
    ...(showAuthorsSearch
      ? []
      : [
          {
            id: 'about',
            name: locale === fallbackLng ? 'About' : 'À propos',
            keywords: '',
            shortcut: ['a'],
            section: locale === fallbackLng ? 'Navigate' : 'Naviguer',
            perform: () => router.push(`/${locale}/about`),
            icon: (
              <i>
                <AboutIcon />
              </i>
            ),
          },
        ]),
  ]
  /* issue when using regular translations, this is a workaround to show how to implement section titles */
  const navigationSection = locale === fallbackLng ? 'Navigate' : 'Naviguer'

  return (
    <KBarSearchProvider
      kbarConfig={{
        searchDocumentsPath: 'search.json',
        /* issue when using regular translations, this is a workaround to show how to implement translated menu titles */
        defaultActions: [
          {
            id: 'home',
            name: locale === fallbackLng ? 'Home' : 'Accueil',
            keywords: '',
            shortcut: ['h'],
            section: navigationSection,
            perform: () => router.push(`/${locale}`),
            icon: (
              <i>
                <HomeIcon />
              </i>
            ),
          },
          {
            id: 'blog',
            name: locale === fallbackLng ? 'Blog' : 'Blog',
            keywords: '',
            shortcut: ['b'],
            section: navigationSection,
            perform: () => router.push(`/${locale}/blog`),
            icon: (
              <i>
                <BlogIcon />
              </i>
            ),
          },
          {
            id: 'software',
            name: locale === fallbackLng ? 'Software' : 'Software',
            keywords: '',
            shortcut: ['s'],
            section: navigationSection,
            perform: () => router.push(`/${locale}/software`),
            icon: (
              <i>
                <CgSoftwareDownload />
              </i>
            ),
          },
          {
            id: 'cursos',
            name: locale === fallbackLng ? 'Cursos' : 'Cursos',
            keywords: '',
            shortcut: ['s'],
            section: navigationSection,
            perform: () => router.push(`/${locale}/software`),
            icon: (
              <i>
                <FaPython />
              </i>
            ),
          },
        ],
        onSearchDocumentsLoad(json) {
          const software = [
            {
              id: 'proteus',
              name: 'Descargar Proteus',
              keywords: 'Proteus, descargar',
              section: '',
              subtitle:
                'Proteus 8 es una herramienta de diseño y simulación de circuitos electrónicos.',
              perform: () => router.push(`/${locale}/software/proteus`),
            },
            {
              id: 'ni_multisim',
              name: 'Descargar NI Multisim',
              keywords: 'NI Multisim, descargar',
              section: 'Electrónica',
              subtitle:
                'NI Multisim es un software de simulación SPICE para el diseño y análisis de circuitos electrónicos.',
              perform: () => router.push(`/${locale}/software/ni_multisim`),
            },
            {
              id: 'mathcad_14',
              name: 'Descargar MathCAD 14',
              keywords: 'MathCAD 14, descargar',
              section: 'Matemáticas',
              subtitle:
                'MathCAD es una herramienta de cálculo técnico que permite realizar, analizar y compartir cálculos de ingeniería.',
              perform: () => router.push(`/${locale}/software/mathcad-14`),
            },
            {
              id: 'mathcad_prime_7',
              name: 'Descargar MathCAD Prime 7',
              keywords: 'MathCAD Prime 7, descargar',
              section: 'Matemáticas',
              subtitle:
                'MathCAD es una herramienta de cálculo técnico que permite realizar, analizar y compartir cálculos de ingeniería.',
              perform: () => router.push(`/${locale}/software/mathcad-prime-7`),
            },
            {
              id: 'pseint',
              name: 'Descargar PSeInt',
              keywords: 'PSeInt, descargar',
              section: 'Software',
              subtitle:
                'PSeInt es una herramienta para asistir a un estudiante en sus primeros pasos en programación.',
              perform: () => router.push(`/${locale}/software/pseint`),
            },
          ]

          const docs = json
            .filter((post: CoreContent<Blog>) => post.language === locale)
            .map((post: CoreContent<Blog>) => ({
              id: post.path,
              name: post.title,
              keywords: post?.summary || '',
              section: t('content'),
              subtitle: post.tags.join(', '),
              perform: () => router.push(`/${locale}/blog/${post.slug}`),
            }))
          return [...docs, ...software]
        },
      }}
    >
      {children}
    </KBarSearchProvider>
  )
}
