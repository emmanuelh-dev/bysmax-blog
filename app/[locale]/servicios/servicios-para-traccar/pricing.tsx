import { buttonVariants } from '@/components/ui/button'
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Card,
} from '@/components/ui/card'
import { CheckIcon } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

export default function pricing() {
  return (
    <section id="precios" className="py-12 md:py-24 lg:py-32">
      <div className="container grid gap-12 px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Precios</h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Elige el plan que mejor se adapte a las necesidades de tu negocio.
          </p>
        </div>
        <div className="grid justify-center gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-card rounded-md p-6 shadow-sm">
            <CardHeader>
              <CardTitle>Básico</CardTitle>
              <CardDescription>Ideal para flotas pequeñas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">$19</span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>
                    <CheckIcon className="text-primary mr-2 inline-block h-5 w-5 text-green-500" />
                    Hasta 10 Dispositivos de Seguimiento
                  </li>
                  <li>
                    <CheckIcon className="text-primary mr-2 inline-block h-5 w-5 text-green-500" />
                    Seguimiento en Tiempo Real
                  </li>
                  <li>
                    <CheckIcon className="text-primary mr-2 inline-block h-5 w-5 text-green-500" />
                    Geovallas
                  </li>
                  <li>
                    <CheckIcon className="text-primary mr-2 inline-block h-5 w-5 text-green-500" />
                    Informes Completos
                  </li>
                  <li>
                    <CheckIcon className="text-primary mr-2 inline-block h-5 w-5 text-green-500" />
                    Alertas Personalizables
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/contacto" className={buttonVariants({ variant: 'default' })}>
                Empezar
              </Link>
            </CardFooter>
          </Card>
          <Card className="bg-card rounded-md p-6 shadow-sm">
            <CardHeader>
              <CardTitle>Pro</CardTitle>
              <CardDescription>Ideal para flotas grandes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">$49</span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>
                    <CheckIcon className="text-primary mr-2 inline-block h-5 w-5 text-green-500" />
                    Hasta 50 Dispositivos de Seguimiento
                  </li>
                  <li>
                    <CheckIcon className="text-primary mr-2 inline-block h-5 w-5 text-green-500" />
                    Seguimiento en Tiempo Real
                  </li>
                  <li>
                    <CheckIcon className="text-primary mr-2 inline-block h-5 w-5 text-green-500" />
                    Geovallas
                  </li>
                  <li>
                    <CheckIcon className="text-primary mr-2 inline-block h-5 w-5 text-green-500" />
                    Informes Completos
                  </li>
                  <li>
                    <CheckIcon className="text-primary mr-2 inline-block h-5 w-5 text-green-500" />
                    Alertas Personalizables
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/contacto" className={buttonVariants({ variant: 'default' })}>
                Empezar
              </Link>
            </CardFooter>
          </Card>
          <Card className="bg-card rounded-md p-6 shadow-sm">
            <CardHeader>
              <CardTitle>Advanced</CardTitle>
              <CardDescription>Ideal para Empresas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">+ $30</span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>
                    <CheckIcon className="text-primary mr-2 inline-block h-5 w-5 text-green-500" />
                    Branding de tu empresa
                  </li>
                  <li>
                    <CheckIcon className="text-primary mr-2 inline-block h-5 w-5 text-green-500" />
                    Soporte Para Termos
                  </li>
                  <li className="flex">
                    <CheckIcon className="text-primary mr-2 inline-block h-5 w-5 text-green-500" />
                    Usa tu dominio como punto de entrada.
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/contacto" className={buttonVariants({ variant: 'default' })}>
                Empezar
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
