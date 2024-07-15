interface Props {
  children: React.ReactNode
}
import { LOGICGATES } from '@/data/logic-gates'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
export default function Sidebar({ children }: Props) {
  return (
    <div className="flex flex-col md:flex-row">
      <aside className="p-2 pt-10 md:max-w-[300px]">
        <nav aria-label="Navegación de la barra lateral" className="sticky top-10">
          <ul className="space-y-2">
            <li>
              <h2 className="font-bold">Compuertas Lógicas</h2>
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
          <div className="sticky top-10 mt-6">
            <ins
              className="adsbygoogle"
              style={{ display: 'block' }}
              data-ad-client="ca-pub-3646138644530578"
              data-ad-slot="9734184827"
              data-ad-format="auto"
              data-full-width-responsive="true"
              aria-hidden="true"
            ></ins>
          </div>
        </nav>
      </aside>

      <main className="w-full flex-1 space-y-4 p-4">{children}</main>
    </div>
  )
}
