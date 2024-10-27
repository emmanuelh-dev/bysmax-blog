import Globe from '@/components/magicui/globe'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  BadgeAlertIcon,
  CheckIcon,
  ComputerIcon,
  FilesIcon,
  MapIcon,
  MergeIcon,
  PowerIcon,
  ReplaceIcon,
  ServerIcon,
  SmartphoneIcon,
  SunSnow,
  TimerIcon,
} from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { genPageMetadata } from '../../seo'
import dynamic from 'next/dynamic'

export const metadata = genPageMetadata({
  title: 'Plataforma GPS Avanzada para Gestión y Monitoreo en Tiempo Real',
  description:
    'Plataforma de localización GPS para administración de todo tipo de vehículos y activos.',
})

const Pricing = dynamic(() => import('./pricing'), {
  ssr: false,
})
const Features = dynamic(() => import('./features'), {
  ssr: false,
})
export default function Page() {
  return (
    <main>
      <section id="hero" className="bg-primary text-primary-foreground py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:grid-cols-2 md:px-6">
          <div className="space-y-4">
            <div>
              <h1 className="text-sm">
                <strong>Plataforma GPS </strong>Avanzada para Gestión y{' '}
                <strong>Monitoreo en Tiempo Real</strong>
              </h1>
              <p className="text-5xl font-bold md:text-6xl">Plataforma de rastreo GPS</p>
            </div>
            <p className="text-lg md:text-xl">
              <strong>Plataforma de localización GPS</strong> para{' '}
              <strong>administración de todo tipo de vehículos y activos</strong>. Visualiza tus
              unidades, kilometraje, combustible y minimizar los costos de operación.
            </p>
            <div className="flex gap-4">
              <Link href="/contacto" className={buttonVariants({ variant: 'default' })}>
                Empezar
              </Link>
              <Link href="/traccar" className={buttonVariants({ variant: 'outline' })}>
                Tutoriales
              </Link>
            </div>
          </div>
          <div className="flex aspect-square justify-center">
            <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden px-40 pb-40 pt-8 md:pb-60">
              <Globe />
            </div>
          </div>
        </div>
      </section>
      <section id="servicios" className="py-12 md:py-24 lg:py-32">
        <div className="container grid gap-12 px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Nuestros Servicios</h2>
            <p className="text-muted-foreground text-lg md:text-xl">
              Soluciones integrales de seguimiento GPS para satisfacer las necesidades de tu
              negocio.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-card rounded-md p-6 shadow-sm">
              <ServerIcon className="text-primary h-12 w-12" />
              <h3 className="mt-4 text-xl font-bold">Servidor Seguro</h3>
              <p className="text-muted-foreground mt-2">
                Nuestra infraestructura con servidores confiables y seguros garantiza la seguridad y
                accesibilidad de tus datos.
              </p>
            </div>
            <div className="bg-card rounded-md p-6 shadow-sm">
              <ComputerIcon className="text-primary h-12 w-12" />
              <h3 className="mt-4 text-xl font-bold">Dispositivos de Seguimiento</h3>
              <p className="text-muted-foreground mt-2">
                Elige entre nuestra amplia gama de dispositivos de seguimiento GPS para adaptarse a
                tus necesidades específicas.
              </p>
            </div>
            <div className="bg-card rounded-md p-6 shadow-sm">
              <PowerIcon className="text-primary h-12 w-12" />
              <h3 className="mt-4 text-xl font-bold">Soporte Experto</h3>
              <p className="text-muted-foreground mt-2">
                Nuestro equipo de soporte dedicado está disponible para ayudarte con cualquier
                pregunta o problema.
              </p>
            </div>
            <div className="bg-card rounded-md p-6 shadow-sm">
              <ReplaceIcon className="text-primary h-12 w-12" />
              <h3 className="mt-4 text-xl font-bold">Personalización</h3>
              <p className="text-muted-foreground mt-2">
                Adapta nuestras soluciones a los requisitos específicos de tu negocio para un
                rendimiento óptimo.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Features />
      <Pricing />
    </main>
  )
}
