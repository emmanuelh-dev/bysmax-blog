'use client'

import { useState, useEffect } from 'react'

export function useActiveHeading() {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
      let current = ''

      // Buscar el heading más cercano al top del viewport
      headings.forEach((heading) => {
        if (heading.id) {
          // Solo considerar headings con ID
          const rect = heading.getBoundingClientRect()
          // Considerar un heading como activo si está cerca del top (dentro de 150px)
          if (rect.top <= 150 && rect.top >= -rect.height) {
            current = heading.id
          }
        }
      })

      // Si no encontramos ninguno cerca del top, buscar el último que haya pasado
      if (!current) {
        headings.forEach((heading) => {
          if (heading.id) {
            const rect = heading.getBoundingClientRect()
            if (rect.top <= 150) {
              current = heading.id
            }
          }
        })
      }

      setActiveId(current)
    }

    // Throttle para mejor performance
    let ticking = false
    const scrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', scrollHandler, { passive: true })
    handleScroll() // Set initial active heading

    return () => window.removeEventListener('scroll', scrollHandler)
  }, [])

  return activeId
}
