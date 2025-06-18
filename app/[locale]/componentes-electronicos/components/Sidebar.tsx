'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { electronicComponents, getLogicGateTranslation } from '@/data/electronic-components'
import { getUITranslation } from '@/data/logic-gates-ui'
import Link from 'next/link'
import { ArrowLeft, Menu, X } from 'lucide-react'
import AdComponent from '@/data/AdComponent'
import { SLOTS } from '@/data/ad-slots'

interface Props {
  children: React.ReactNode
}

export default function Sidebar({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Obtener el locale de manera más robusta
  const pathSegments = pathname.split('/').filter(Boolean)
  const locale =
    pathSegments[0] && ['es', 'en', 'pt'].includes(pathSegments[0]) ? pathSegments[0] : 'es'

  const ui = getUITranslation(locale as 'es' | 'en' | 'pt')
  const baseLogicGatesPath = `/${locale}/compuertas-logicas`
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

  // Verificación de seguridad para ui
  if (!ui || !ui.labels) {
    console.error('UI translations not found for locale:', locale)
    return <div>Error loading translations</div>
  }

  return (
    <div className="contan min-h-screen bg-white dark:bg-dark">
      <div className="lg:container">
        <button
          onClick={toggleSidebar}
          className="dark:text-wh text- fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-lg border border-[#a1a1a1] bg-white shadow-sm transition-all duration-200 hover:border-[#0070f3] dark:border-[#333333] dark:bg-dark md:hidden"
          aria-label={isOpen ? ui.labels.closeMenu : ui.labels.openMenu}
        >
          {isOpen ? (
            <X size={20} className="text-black dark:text-white" />
          ) : (
            <Menu size={20} className="text-black dark:text-white" />
          )}
        </button>

        <div className="flex">
          <aside
            className={`fixed inset-y-0 left-0 z-40 w-[280px] transform border-r border-[#e5e5e5] bg-white transition-transform duration-200 ease-out dark:border-[#333333] dark:bg-dark md:sticky md:top-0 md:h-screen md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
          >
            <nav
              aria-label="Navegación de la barra lateral"
              className="flex h-full flex-col overflow-hidden"
            >
              <div className="flex h-16 items-center justify-between border-b border-[#e5e5e5] dark:border-[#333333] max-sm:px-6 md:justify-start">
                <h2 className="text-lg font-semibold tracking-tight text-dark dark:text-white">
                  {ui.pageTitle}
                </h2>
                <button
                  onClick={toggleSidebar}
                  className="flex h-8 w-8 items-center justify-center rounded-md transition-colors hover:bg-[#f9f9f9] dark:hover:bg-[#1a1a1a] md:hidden"
                  aria-label={ui.labels.closeMenu}
                >
                  <X size={16} className="text-[#737373]" />
                </button>
              </div>

              {/* Navigation links */}
              <div className="flex-1 overflow-y-auto px-3 py-4">
                <div className="space-y-1">
                  <a
                    href={baseComponentsPath}
                    onClick={() => setIsOpen(false)}
                    className={`flex h-9 items-center rounded-md text-sm font-medium transition-colors hover:bg-[#f9f9f9] dark:hover:bg-[#1a1a1a] max-sm:px-3 ${
                      pathname === baseComponentsPath
                        ? 'bg-[#f9f9f9] text-[#0070f3] dark:bg-[#1a1a1a] dark:text-[#0070f3]'
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
                  {Object.entries(componentsByCategory).map(([category, components]) => (
                    <div key={category} className="mt-4">
                      <div className="mb-2">
                        <span className="text-xs font-medium uppercase tracking-wide text-[#737373]">
                          {categoryTranslations[category as keyof typeof categoryTranslations] ||
                            category}
                        </span>
                      </div>
                      <div className="ml-2 space-y-1">
                        {components.map((component) => {
                          const componentPath = getComponentUrl(component)
                          const componentTranslation = getComponentTranslation(component)

                          if (!componentTranslation) return null

                          return (
                            <a
                              key={`${component.category}-${component.url}`}
                              href={componentPath}
                              onClick={() => setIsOpen(false)}
                              className={`flex h-8 items-center rounded-md px-2 text-sm transition-colors hover:bg-[#f9f9f9] dark:hover:bg-[#1a1a1a] ${
                                pathname === componentPath
                                  ? 'bg-[#f9f9f9] text-[#0070f3] dark:bg-[#1a1a1a] dark:text-[#0070f3]'
                                  : 'text-[#737373] hover:text-dark dark:hover:text-white'
                              }`}
                            >
                              <span className="truncate text-xs">{componentTranslation.label}</span>
                              <span className="ml-auto text-xs opacity-60">
                                {component.partNumber?.split('/')[0] || component.url}
                              </span>
                            </a>
                          )
                        })}
                      </div>
                    </div>
                  ))}
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

          {/* Overlay for mobile */}
          {isOpen && (
            <div
              className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm md:hidden"
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
            <div className="mx-auto max-w-6xl px-6 py-8 md:px-8">{children}</div>
          </main>
        </div>
      </div>
    </div>
  )
}
