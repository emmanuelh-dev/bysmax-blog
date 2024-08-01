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
  TimerIcon,
} from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <main>
      <section id="hero" className="bg-primary text-primary-foreground py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:grid-cols-2 md:px-6">
          <div className="space-y-4">
            <div>
              <h1 className="text-sm">
                Plataforma GPS Avanzada para Gestión y Monitoreo Eficiente
              </h1>
              <p className="text-5xl font-bold md:text-6xl">Plataforma de rastreo GPS</p>
            </div>
            <p className="text-lg md:text-xl">
              Nuestra plataforma utiliza tecnología de vanguardia para ofrecerte datos precisos y
              funcionalidad avanzada, ayudándote a optimizar tus operaciones y garantizar la
              seguridad de tus activos.
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
          <div className="flex justify-center">
            <img
              src="/placeholder.svg"
              width={400}
              height={400}
              alt="Dispositivo de seguimiento GPS"
              className="max-w-full"
            />
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
                Nuestra infraestructura de servidor confiable y segura garantiza la seguridad y
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
      <section id="caracteristicas" className="bg-muted py-12 md:py-24 lg:py-32">
        <div className="container grid gap-12 px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Características Principales</h2>
            <p className="text-muted-foreground text-lg md:text-xl">
              Descubre las poderosas características que hacen que nuestras soluciones de
              seguimiento GPS se destaquen.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-card rounded-md p-6 shadow-sm">
              <TimerIcon className="text-primary h-12 w-12" />
              <h3 className="mt-4 text-xl font-bold">Monitoreo en Tiempo Real</h3>
              <p className="text-muted-foreground mt-2">
                Monitorea la ubicación y el estado de tus activos en tiempo real para mejorar la
                eficiencia.
              </p>
            </div>
            <div className="bg-card rounded-md p-6 shadow-sm">
              <MapIcon className="text-primary h-12 w-12" />
              <h3 className="mt-4 text-xl font-bold">Geovallas</h3>
              <p className="text-muted-foreground mt-2">
                Configura límites virtuales para recibir alertas cuando tus activos entren o salgan
                de áreas designadas.
              </p>
            </div>
            <div className="bg-card rounded-md p-6 shadow-sm">
              <FilesIcon className="text-primary h-12 w-12" />
              <h3 className="mt-4 text-xl font-bold">Informes Detallados</h3>
              <p className="text-muted-foreground mt-2">
                Genera informes completos para analizar el rendimiento de tu flota y optimizar las
                operaciones.
              </p>
            </div>
            <div className="bg-card rounded-md p-6 shadow-sm">
              <BadgeAlertIcon className="text-primary h-12 w-12" />
              <h3 className="mt-4 text-xl font-bold">Alertas Personalizables</h3>
              <p className="text-muted-foreground mt-2">
                Recibe alertas en tiempo real por eventos como exceso de velocidad, inactividad y
                movimiento no autorizado.
              </p>
            </div>
            <div className="bg-card rounded-md p-6 shadow-sm">
              <MergeIcon className="text-primary h-12 w-12" />
              <h3 className="mt-4 text-xl font-bold">Integración Fluida</h3>
              <p className="text-muted-foreground mt-2">
                Integra fácilmente nuestras soluciones de seguimiento GPS con tus sistemas y flujos
                de trabajo empresariales existentes.
              </p>
            </div>
            <div className="bg-card rounded-md p-6 shadow-sm">
              <SmartphoneIcon className="text-primary h-12 w-12" />
              <h3 className="mt-4 text-xl font-bold">Accesibilidad Móvil</h3>
              <p className="text-muted-foreground mt-2">
                Accede a tus datos de seguimiento y gestiona tu flota sobre la marcha con nuestra
                plataforma optimizada para móviles.
              </p>
            </div>
          </div>
        </div>
      </section>
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
                <CardDescription>Ideal para pequeños negocios</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">$19</span>
                    <span className="text-muted-foreground">/mes</span>
                  </div>
                  <ul className="text-muted-foreground space-y-2">
                    <li>
                      <CheckIcon className="text-primary mr-2 inline-block h-5 w-5" />
                      10 Dispositivos de Seguimiento
                    </li>
                    <li>
                      <CheckIcon className="text-primary mr-2 inline-block h-5 w-5" />
                      Seguimiento en Tiempo Real
                    </li>
                    <li>
                      <CheckIcon className="text-primary mr-2 inline-block h-5 w-5" />
                      Geovallas
                    </li>
                    <li>
                      <CheckIcon className="text-primary mr-2 inline-block h-5 w-5" />
                      Informes Básicos
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Empezar</Button>
              </CardFooter>
            </Card>
            <Card className="bg-card rounded-md p-6 shadow-sm">
              <CardHeader>
                <CardTitle>Pro</CardTitle>
                <CardDescription>Ideal para negocios de tamaño mediano</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">$49</span>
                    <span className="text-muted-foreground">/mes</span>
                  </div>
                  <ul className="text-muted-foreground space-y-2">
                    <li>
                      <CheckIcon className="text-primary mr-2 inline-block h-5 w-5" />
                      50 Dispositivos de Seguimiento
                    </li>
                    <li>
                      <CheckIcon className="text-primary mr-2 inline-block h-5 w-5" />
                      Seguimiento en Tiempo Real
                    </li>
                    <li>
                      <CheckIcon className="text-primary mr-2 inline-block h-5 w-5" />
                      Geovallas
                    </li>
                    <li>
                      <CheckIcon className="text-primary mr-2 inline-block h-5 w-5" />
                      Informes Avanzados
                    </li>
                    <li>
                      <CheckIcon className="text-primary mr-2 inline-block h-5 w-5" />
                      Alertas Personalizables
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Empezar</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
