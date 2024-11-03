import { allCursos } from 'contentlayer/generated'
import { sortPosts } from 'pliny/utils/contentlayer'
import PropTypes from 'prop-types'

interface Section {
  title: string
  show: boolean
  description: string
  sections: Array<{ title: string; link: string }>
  position?: number
}

const useTemario = (locale: string, curso: string): Section[] => {
  const groupedSections: Record<string, Section> = {}
  const sortedCoreContents = sortPosts(allCursos)

  const posts = sortedCoreContents
    .filter((p) => p.language === locale)
    .filter((p) => p.id === curso)

  posts.forEach((p) => {
    const sectionTitle = p.section ? p.section.title : ''

    if (!groupedSections[sectionTitle]) {
      groupedSections[sectionTitle] = {
        title: sectionTitle,
        show: true,
        description: '',
        sections: [],
      }
    }

    groupedSections[sectionTitle].sections.push({
      title: p.shortTitle,
      link: '/' + curso + '/' + p.slug,
    })
  })

  const sidebar = Object.values(groupedSections).sort((a, b) => {
    return (a.position || 0) - (b.position || 0)
  })

  const traccar = curso === 'traccar'

  return [
    {
      title: 'Inicio',
      show: true,
      description: '',
      sections: [{ title: 'Introducción', link: '/' + curso }],
    },
    ...sidebar,
    ...(traccar
      ? [
          {
            title: 'Necesito un servidor',
            show: true,
            description: '',
            sections: [{ title: 'Contáctanos', link: '/contacto' }],
          },
        ]
      : []),
  ]
}

export default useTemario
