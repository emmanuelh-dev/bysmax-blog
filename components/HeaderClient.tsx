'use client'

import { useEffect, useState } from 'react'

// Import directo para componentes críticos - no lazy
import ThemeSwitch from './ThemeSwitch'
import LangSwitch from './langswitch'
import SearchButton from './search/SearchButton'
import NotificationBell from './NotificationBell'
import MobileNav from './MobileNav'

interface HeaderClientProps {
  isMobile?: boolean
}

export default function HeaderClient({ isMobile: initialIsMobile }: HeaderClientProps) {
  const [isMobile, setIsMobile] = useState(initialIsMobile ?? false) // Default a false para desktop-first

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)

    let resizeTimer: NodeJS.Timeout
    const debouncedResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(handleResize, 100)
    }

    handleResize()
    window.addEventListener('resize', debouncedResize)
    return () => {
      window.removeEventListener('resize', debouncedResize)
      clearTimeout(resizeTimer)
    }
  }, [])

  return (
    <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
      <SearchButton />
      <ThemeSwitch />
      <LangSwitch />
      <NotificationBell />
      {isMobile && <MobileNav />}
    </div>
  )
}
