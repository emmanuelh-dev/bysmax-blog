export interface AdSlot {
  name: string
  slotId: string
  format: 'display' | 'in-article'
}

// Slots para páginas individuales de compuertas lógicas
export const SLOTS: AdSlot[] = [
  { name: 'Scroll 2', slotId: '9734184827', format: 'display' },
  { name: 'Scroll 2', slotId: '6731750998', format: 'display' },
  { name: 'Scroll 3', slotId: '9208040409', format: 'in-article' },
  { name: 'Scroll 4', slotId: '3802570056', format: 'in-article' },
  { name: 'Scroll 5', slotId: '7426120296', format: 'in-article' },
  { name: 'Scroll 6', slotId: '8249630265', format: 'in-article' },
]

// Componente de anuncio reutilizable
export const AdComponent = ({ slot }: { slot: AdSlot }) => (
  <section className="my-8">
    <ins
      className="adsbygoogle h-[280px] w-full bg-white dark:bg-black"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-3646138644530578"
      data-ad-slot={slot.slotId}
     data-ad-format="auto"
      data-full-width-responsive="true"
    />
  </section>
)
