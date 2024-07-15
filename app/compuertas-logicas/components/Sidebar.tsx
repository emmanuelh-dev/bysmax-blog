interface Props {
  children: React.ReactNode
}
import { LOGICGATES } from '@/data/logic-gates'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
export default function Sidebar({ children }: Props) {
  return (
    <div className="flex flex-col md:flex-row">
      <aside className=" p-2 pt-10 md:max-w-[300px]">
        <nav aria-label="Sidebar navigation" className="sticky top-10">
          <ul className="space-y-2">
            <li>
              <div className="font-bold">Compuertas Lógicas</div>
            </li>
            <li>
              <Link className={buttonVariants({ variant: 'link' })} href={`/compuertas-logicas`}>
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
          {/* <ins
            className="adsbygoogle sticky top-10 mt-6"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-3646138644530578"
            data-ad-slot="9734184827"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins> */}
        </nav>
      </aside>
      <main className="w-full flex-1 p-4">{children}</main>
    </div>
  )
}
