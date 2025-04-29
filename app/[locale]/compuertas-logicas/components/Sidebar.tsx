'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { LOGICGATES } from '@/data/logic-gates'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { SectionContainerWithAds } from '@/components/SectionContainer'
import { Menu, X } from 'lucide-react'

interface Props {
  children: React.ReactNode
}

export default function Sidebar({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const locale = pathname.split('/')[1] // Extract locale from pathname
  const baseLogicGatesPath = `/${locale}`

  const toggleSidebar = () => setIsOpen(!isOpen)

  return (
    <div>
      {/* Botón para abrir/cerrar en móviles */}
      <button
        onClick={toggleSidebar}
        className="fixed bottom-8 left-4 z-50 rounded-full bg-primary-500 p-2 text-white md:hidden"
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
      >
        {isOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-40 w-[80vw] transform bg-white transition-transform duration-300 ease-in-out dark:bg-black md:sticky md:top-0 md:z-auto md:block md:max-w-[400px] md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <nav
            aria-label="Navegación de la barra lateral"
            className="sticky top-10 h-full overflow-y-auto"
          >
            {/* Botón de cierre dentro del sidebar en móviles */}
            <button
              onClick={toggleSidebar}
              className="absolute right-4 top-4 z-50 text-primary-500 dark:text-primary-500 md:hidden"
              aria-label="Cerrar menú"
            >
              <X size={24} />
            </button>
            <ul className="flex flex-col space-y-2 p-4 pt-16 md:pt-4">
              <li>
                <h2 className="text-nowrap font-bold">Compuertas Lógicas</h2>
              </li>
              <li>
                <Link
                  className={`${buttonVariants({ variant: 'link' })} ${pathname === baseLogicGatesPath ? 'text-primary font-bold' : ''}`}
                  href={baseLogicGatesPath}
                  onClick={() => setIsOpen(false)}
                >
                  Todas
                </Link>
              </li>
              {LOGICGATES.map((gate) => {
                const gatePath = `${baseLogicGatesPath}/${gate.url}`
                return (
                  <li key={gate.heading}>
                    <Link
                      className={`${buttonVariants({ variant: 'link' })} ${pathname === gatePath ? 'text-primary font-bold' : ''}`}
                      href={gatePath}
                      onClick={() => setIsOpen(false)}
                    >
                      Compuerta Lógica {gate.url}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </aside>
        {/* Overlay para cerrar el menú en móviles */}
        {isOpen && (
          <div
            className="fixed inset-0 z-30 bg-black opacity-50 md:hidden"
            onClick={toggleSidebar}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                toggleSidebar()
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="Close sidebar"
          ></div>
        )}
        <main className="w-full flex-1 space-y-4 p-4 pt-20 md:pt-4">{children}</main>
      </div>
    </div>
  )
}
