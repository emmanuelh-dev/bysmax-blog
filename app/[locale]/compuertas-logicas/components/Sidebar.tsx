'use client'

import { usePathname } from 'next/navigation'
interface Props {
  children: React.ReactNode
}
import { LOGICGATES } from '@/data/logic-gates'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { SectionContainerWithAds } from '@/components/SectionContainer'
export default function Sidebar({ children }: Props) {
  const pathname = usePathname()
  const locale = pathname.split('/')[1] // Extract locale from pathname
  const baseLogicGatesPath = `/${locale}`

  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <aside className="sticky -top-1 z-[40] bg-white dark:bg-black max-sm:bg-neutral-900 md:max-w-[300px]">
          <nav aria-label="Navegación de la barra lateral" className="sticky top-10">
            <ul className="flex flex-row-reverse space-y-2 overflow-x-auto lg:flex-col">
              <li>
                <h2 className="text-nowrap p-4 font-bold">Compuertas Lógicas</h2>
              </li>
              <li>
                <Link
                  className={`${buttonVariants({ variant: 'link' })} ${pathname === baseLogicGatesPath ? 'text-primary font-bold' : ''}`}
                  href={baseLogicGatesPath}
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
                    >
                      {gate.heading}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </aside>
        <main className="w-full flex-1 space-y-4 p-4">{children}</main>
      </div>
    </div>
  )
}
