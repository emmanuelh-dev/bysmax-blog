import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface BuyButtonProps {
  href: string
  eventName: string
  text: string
  className?: string
}

export default function BuyButton({ href, eventName, text, className }: BuyButtonProps) {
  return (
    <a
      href={href}
      data-umami-event={eventName}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(buttonVariants({ variant: 'mercadolibre', size: 'default' }), className)}
    >
      {text}
    </a>
  )
}
