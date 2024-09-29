interface Props {
  children: React.ReactNode
}
import { LOGICGATES } from '@/data/logic-gates'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { SectionContainerWithAds } from '@/components/SectionContainer'
export default function Sidebar({ children }: Props) {
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <aside className="sticky -top-4 z-[88] bg-white dark:bg-black md:max-w-[300px]">
          <nav aria-label="Navegación de la barra lateral" className="sticky top-10">
            <ul className="flex flex-row-reverse space-y-2 overflow-x-auto lg:flex-col">
              <li>
                <h2 className="text-nowrap p-4 font-bold">Compuertas Lógicas</h2>
              </li>
              <li>
                <Link className={buttonVariants({ variant: 'link' })} href="/compuertas-logicas">
                  Todas
                </Link>
              </li>
              {LOGICGATES.map((gate) => (
                <li key={gate.heading}>
                  <Link
                    className={buttonVariants({ variant: 'link' })}
                    href={`/compuertas-logicas/${gate.url}`}
                  >
                    {gate.heading}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className="w-full flex-1 space-y-4 p-4">{children}</main>
      </div>
    </div>
  )
}
