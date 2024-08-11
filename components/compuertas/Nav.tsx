interface Props {
  children: React.ReactNode
}
import { LOGICGATES } from '@/data/logic-gates'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
export default function Sidebar({ children }: Props) {
  return (
    <aside className="sticky -top-4 z-[100] bg-white dark:bg-black">
      <nav aria-label="Navegación de la barra lateral" className="sticky top-10">
        <div className="flex flex-row-reverse items-center overflow-x-auto">
          <p className="text-nowrap font-bold">Compuertas Lógicas</p>
          <div className="flex">
            <div>
              <Link className={buttonVariants({ variant: 'link' })} href="/compuertas-logicas">
                Todas
              </Link>
            </div>
            {LOGICGATES.map((gate) => (
              <div key={gate.heading}>
                <Link
                  className={buttonVariants({ variant: 'link' })}
                  href={`/compuertas-logicas/${gate.url}`}
                >
                  {gate.heading}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </aside>
  )
}
