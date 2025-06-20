'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { electronicComponents, getLogicGateTranslation } from '@/data/electronic-components'
import { getUITranslation } from '@/data/logic-gates-ui'
import { ArrowLeft, Menu, X, Search } from 'lucide-react'
import AdComponent from '@/data/AdComponent'
import { SLOTS } from '@/data/ad-slots'

interface Props {
  children: React.ReactNode
}

export default function Sidebar({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const pathname = usePathname()

  // Obtener el locale de manera más robusta
  const pathSegments = pathname.split('/').filter(Boolean)
  const locale =
    pathSegments[0] && ['es', 'en', 'pt'].includes(pathSegments[0]) ? pathSegments[0] : 'es'

  const ui = getUITranslation(locale as 'es' | 'en' | 'pt')
  const baseLogicGatesPath = `/${locale}/componentes-electronicos`
  const baseComponentsPath = `/${locale}/componentes-electronicos`

  // Obtener todos los componentes electrónicos agrupados por categoría
  const allComponents = electronicComponents.getAllComponents()
  const componentsByCategory = allComponents.reduce(
    (acc, component) => {
      if (!acc[component.category]) {
        acc[component.category] = []
      }
      acc[component.category].push(component)
      return acc
    },
    {} as Record<string, any[]>
  )

  // Traducciones de categorías
  const categoryTranslations = {
    'logic-gates':
      locale === 'en' ? 'Logic Gates' : locale === 'pt' ? 'Portas Lógicas' : 'Compuertas Lógicas',
    decoders:
      locale === 'en' ? 'Decoders' : locale === 'pt' ? 'Decodificadores' : 'Decodificadores',
    counters: locale === 'en' ? 'Counters' : locale === 'pt' ? 'Contadores' : 'Contadores',
    multiplexers:
      locale === 'en' ? 'Multiplexers' : locale === 'pt' ? 'Multiplexadores' : 'Multiplexores',
    displays: locale === 'en' ? 'Displays' : locale === 'pt' ? 'Displays' : 'Displays',
    'flip-flops': locale === 'en' ? 'Flip-Flops' : locale === 'pt' ? 'Flip-Flops' : 'Flip-Flops',
    comparators:
      locale === 'en' ? 'Comparators' : locale === 'pt' ? 'Comparadores' : 'Comparadores',
    buffers: locale === 'en' ? 'Buffers' : locale === 'pt' ? 'Buffers' : 'Buffers',
    leds: locale === 'en' ? 'LEDs' : locale === 'pt' ? 'LEDs' : 'LEDs',
    relays: locale === 'en' ? 'Relays' : locale === 'pt' ? 'Relés' : 'Relés',
    'shift-registers':
      locale === 'en' ? 'Shift Registers' : locale === 'pt' ? 'Registradores' : 'Registros',
    microcontrollers:
      locale === 'en'
        ? 'Microcontrollers'
        : locale === 'pt'
          ? 'Microcontroladores'
          : 'Microcontroladores',
    'voltage-regulators':
      locale === 'en' ? 'Voltage Regulators' : locale === 'pt' ? 'Reguladores' : 'Reguladores',
  }

  // Función genérica para obtener traducciones
  const getComponentTranslation = (component: any) => {
    switch (component.category) {
      case 'logic-gates':
        return getLogicGateTranslation(component.url, locale as 'es' | 'en' | 'pt')
      case 'decoders':
      case 'counters':
      case 'multiplexers':
      case 'displays':
      default:
        // Para otros tipos, usar directamente las traducciones
        return component.translations[locale as 'es' | 'en' | 'pt']
    }
  }

  // Función para obtener la URL correcta según el tipo de componente
  const getComponentUrl = (component: any) => {
    switch (component.category) {
      case 'logic-gates':
        return `${baseLogicGatesPath}/${component.url}`
      default:
        // Todos los demás componentes van bajo /componentes-electronicos
        return `${baseComponentsPath}/${component.url}`
    }
  }

  const toggleSidebar = () => setIsOpen(!isOpen)

  // Función simple para verificar si un componente está activo
  const isComponentActive = (componentUrl: string) => {
    const currentUrlParts = pathname.split('/')
    const lastSegment = currentUrlParts[currentUrlParts.length - 1]
    return lastSegment === componentUrl
  }

  // Función para filtrar componentes por búsqueda
  const filterComponents = (components: any[], searchTerm: string) => {
    if (!searchTerm.trim()) return components

    const search = searchTerm.toLowerCase()
    return components.filter((component) => {
      const translation = getComponentTranslation(component)
      if (!translation) return false

      return (
        component.url.toLowerCase().includes(search) ||
        component.partNumber?.toLowerCase().includes(search) ||
        translation.label.toLowerCase().includes(search) ||
        translation.description?.toLowerCase().includes(search)
      )
    })
  }

  // Verificación de seguridad para ui
  if (!ui || !ui.labels) {
    console.error('UI translations not found for locale:', locale)
    return <div>Error loading translations</div>
  }

  return (
    <div className="contan min-h-screen bg-light dark:bg-dark">
      <div className="lg:container">
        <div className="flex">
          <aside
            className={`fixed inset-y-0 left-0 z-40 w-[280px] transform border-r border-[#e5e5e5] bg-light transition-transform duration-200 ease-out dark:border-[#333333] dark:bg-dark md:sticky md:top-0 md:h-screen md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
          >
            <nav
              aria-label="Navegación de la barra lateral"
              className="flex h-full flex-col overflow-hidden"
            >
              {/* Navigation links */}
              <div className="flex-1 overflow-y-auto px-3 py-4">
                {/* Buscador de componentes */}
                <div className="mb-4">
                  <div className="relative">
                    <Search
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 transform text-[#737373]"
                    />
                    <input
                      type="text"
                      placeholder={
                        locale === 'en'
                          ? 'Search components...'
                          : locale === 'pt'
                            ? 'Buscar componentes...'
                            : 'Buscar componentes...'
                      }
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full rounded-md border border-[#e5e5e5] bg-white py-2 pl-10 pr-3 text-sm text-dark placeholder-[#737373] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#0070f3] dark:border-[#333333] dark:bg-[#1a1a1a] dark:text-white"
                    />
                    {searchTerm && (
                      <button
                        onClick={() => setSearchTerm('')}
                        className="absolute right-2 top-1/2 -translate-y-1/2 transform rounded p-1 hover:bg-[#f9f9f9] dark:hover:bg-[#333333]"
                      >
                        <X size={14} className="text-[#737373]" />
                      </button>
                    )}
                  </div>
                </div>

                <div className="space-y-1">
                  <a
                    href={baseComponentsPath}
                    onClick={() => setIsOpen(false)}
                    className={`flex h-9 items-center rounded-md text-sm font-medium transition-colors hover:bg-white dark:hover:bg-[#1a1a1a] max-sm:px-3 ${
                      pathname === baseComponentsPath
                        ? 'bg-white text-[#0070f3] dark:bg-[#1a1a1a] dark:text-[#0070f3]'
                        : 'text-[#737373] hover:text-dark dark:hover:text-white'
                    }`}
                  >
                    {locale === 'en'
                      ? 'All Components'
                      : locale === 'pt'
                        ? 'Todos Componentes'
                        : 'Todos los Componentes'}
                  </a>
                  <a
                    href={baseLogicGatesPath}
                    onClick={() => setIsOpen(false)}
                    className={`flex h-9 items-center rounded-md text-sm font-medium transition-colors hover:bg-[#f9f9f9] dark:hover:bg-[#1a1a1a] max-sm:px-3 ${
                      pathname === baseLogicGatesPath
                        ? 'bg-[#f9f9f9] text-[#0070f3] dark:bg-[#1a1a1a] dark:text-[#0070f3]'
                        : 'text-[#737373] hover:text-dark dark:hover:text-white'
                    }`}
                  >
                    {ui.labels.allGates}
                  </a>
                  <a
                    href={`/${locale}/arduino`}
                    onClick={() => setIsOpen(false)}
                    className={`flex h-9  items-center rounded-md px-2 text-sm font-medium transition-colors hover:bg-[#f9f9f9] dark:hover:bg-[#1a1a1a] max-sm:px-3 `}
                  >
                    Guia Arduinos <ArrowLeft size={15} className="ml-5" />
                  </a>

                  {/* Componentes por categoría */}
                  {Object.entries(componentsByCategory).map(([category, components]) => {
                    const filteredComponents = filterComponents(components, searchTerm)

                    // Si hay búsqueda y no hay resultados en esta categoría, no mostrar la categoría
                    if (searchTerm.trim() && filteredComponents.length === 0) {
                      return null
                    }

                    return (
                      <div key={category} className="mt-4">
                        <div className="mb-2">
                          <span className="text-xs font-medium uppercase tracking-wide text-[#737373]">
                            {categoryTranslations[category as keyof typeof categoryTranslations] ||
                              category}
                            {searchTerm.trim() && (
                              <span className="ml-2 text-[#0070f3]">
                                ({filteredComponents.length})
                              </span>
                            )}
                          </span>
                        </div>
                        <div className="ml-2 space-y-1">
                          {filteredComponents.map((component) => {
                            const componentPath = getComponentUrl(component)
                            const componentTranslation = getComponentTranslation(component)

                            if (!componentTranslation) return null

                            return (
                              <a
                                key={`${component.category}-${component.url}`}
                                href={componentPath}
                                onClick={() => setIsOpen(false)}
                                className={`flex h-8 items-center rounded-md px-2 text-sm transition-colors hover:bg-[#f9f9f9] dark:hover:bg-[#1a1a1a] ${
                                  isComponentActive(component.url)
                                    ? 'bg-[#f9f9f9] text-[#0070f3] dark:bg-[#1a1a1a] dark:text-[#0070f3]'
                                    : 'text-[#737373] hover:text-dark dark:hover:text-white'
                                }`}
                              >
                                <span className="truncate text-xs">
                                  {componentTranslation.label}
                                </span>
                                <span className="ml-auto text-xs opacity-60">
                                  {component.partNumber?.split('/')[0] || component.url}
                                </span>
                              </a>
                            )
                          })}
                        </div>
                      </div>
                    )
                  })}

                  {/* Mensaje cuando no hay resultados */}
                  {searchTerm.trim() &&
                    Object.entries(componentsByCategory).every(
                      ([, components]) => filterComponents(components, searchTerm).length === 0
                    ) && (
                      <div className="mt-4 py-8 text-center">
                        <p className="text-sm text-[#737373]">
                          {locale === 'en'
                            ? 'No components found'
                            : locale === 'pt'
                              ? 'Nenhum componente encontrado'
                              : 'No se encontraron componentes'}
                        </p>
                        <p className="mt-1 text-xs text-[#999]">
                          {locale === 'en'
                            ? 'Try a different search term'
                            : locale === 'pt'
                              ? 'Tente um termo diferente'
                              : 'Intenta con otro término'}
                        </p>
                      </div>
                    )}
                </div>

                {/* Language switcher */}
                <div className="mt-6 border-t border-[#e5e5e5] pt-4 dark:border-[#333333]">
                  <div className="mb-2">
                    <span className="text-xs font-medium uppercase tracking-wide text-[#737373]">
                      {locale === 'en' ? 'Language' : locale === 'pt' ? 'Idioma' : 'Idioma'}
                    </span>
                  </div>
                  <div className="flex gap-1">
                    <a
                      href={`/es${pathname.replace(`/${locale}`, '')}`}
                      className={`flex h-8 w-8 items-center justify-center rounded-md text-xs font-medium transition-colors hover:bg-[#f9f9f9] dark:hover:bg-[#1a1a1a] ${
                        locale === 'es'
                          ? 'bg-[#f9f9f9] text-[#0070f3] dark:bg-[#1a1a1a] dark:text-[#0070f3]'
                          : 'text-[#737373] hover:text-dark dark:hover:text-white'
                      }`}
                      title="Español"
                      onClick={() => setIsOpen(false)}
                    >
                      🇪🇸
                    </a>
                    <a
                      href={`/en${pathname.replace(`/${locale}`, '')}`}
                      className={`flex h-8 w-8 items-center justify-center rounded-md text-xs font-medium transition-colors hover:bg-[#f9f9f9] dark:hover:bg-[#1a1a1a] ${
                        locale === 'en'
                          ? 'bg-[#f9f9f9] text-[#0070f3] dark:bg-[#1a1a1a] dark:text-[#0070f3]'
                          : 'text-[#737373] hover:text-dark dark:hover:text-white'
                      }`}
                      title="English"
                      onClick={() => setIsOpen(false)}
                    >
                      🇺🇸
                    </a>
                    <a
                      href={`/pt${pathname.replace(`/${locale}`, '')}`}
                      className={`flex h-8 w-8 items-center justify-center rounded-md text-xs font-medium transition-colors hover:bg-[#f9f9f9] dark:hover:bg-[#1a1a1a] ${
                        locale === 'pt'
                          ? 'bg-[#f9f9f9] text-[#0070f3] dark:bg-[#1a1a1a] dark:text-[#0070f3]'
                          : 'text-[#737373] hover:text-dark dark:hover:text-white'
                      }`}
                      title="Português"
                      onClick={() => setIsOpen(false)}
                    >
                      🇧🇷
                    </a>
                  </div>
                </div>
                <AdComponent slot={SLOTS[3]} />
              </div>
            </nav>
          </aside>

          {/* Overlay para móvil */}
          {isOpen && (
            <div
              className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden"
              onClick={toggleSidebar}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  toggleSidebar()
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={ui.labels.closeSidebar}
            />
          )}

          {/* Main content */}
          <main className="min-h-screen flex-1 overflow-x-hidden">
            {/* Header móvil con menú hamburguesa - FIXED */}
            <div className="fixed left-0 right-0 top-0 z-10 flex h-16 items-center justify-between border-b border-[#e5e5e5] bg-light px-6 dark:border-[#333333] dark:bg-dark md:hidden">
              <span className="text-sm font-medium text-dark dark:text-white">
                {locale === 'en'
                  ? 'Browse components'
                  : locale === 'pt'
                    ? 'Navegar componentes'
                    : 'Navegar entre componentes'}
              </span>
              <button
                onClick={toggleSidebar}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#e5e5e5] transition-colors hover:bg-[#f9f9f9] dark:border-[#333333] dark:hover:bg-[#1a1a1a]"
                aria-label={isOpen ? ui.labels.closeMenu : ui.labels.openMenu}
              >
                {isOpen ? (
                  <X size={18} className="text-dark dark:text-white" />
                ) : (
                  <Menu size={18} className="text-dark dark:text-white" />
                )}
              </button>
            </div>
            <div className="flex h-16 items-center justify-between border-b border-[#e5e5e5] dark:border-[#333333] max-sm:px-6 md:hidden  md:justify-start">
              <h2 className="text-lg font-semibold tracking-tight text-dark dark:text-white">
                {ui.pageTitle}
              </h2>
              <button
                onClick={toggleSidebar}
                className="flex h-8 w-8 items-center justify-center rounded-md transition-colors hover:bg-[#f9f9f9] dark:hover:bg-[#1a1a1a]"
                aria-label={ui.labels.closeMenu}
              >
                <X size={16} className="text-[#737373]" />
              </button>
            </div>

            {/* Espaciado para compensar el header fijo en móvil */}
            <div className="mx-auto max-w-6xl px-6 py-8 pt-24 md:px-8 md:pt-8">{children}</div>
          </main>
        </div>
      </div>
    </div>
  )
}
