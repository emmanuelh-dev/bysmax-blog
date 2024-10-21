import {
  TimerIcon,
  SunSnow,
  MapIcon,
  FilesIcon,
  BadgeAlertIcon,
  MergeIcon,
  SmartphoneIcon,
} from 'lucide-react'
import React from 'react'

export default function features() {
  return (
    <section id="caracteristicas" className="bg-muted py-12 md:py-24 lg:py-32">
      <div className="container grid gap-12 px-4 md:px-6">
        <div className="space-y-4 text-center">
          <div>
            <h2 className="text-sm text-neutral-600 dark:text-neutral-400">
              Monitoreo en Tiempo Real para Flotas
            </h2>
            <p className="text-3xl font-bold md:text-4xl">Características Principales</p>
          </div>
          <p className="text-muted-foreground text-lg md:text-xl">
            Descubre las poderosas características que hacen que nuestras soluciones de seguimiento
            GPS se destaquen.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-card rounded-3xl p-6 shadow-sm">
            <TimerIcon className="text-primary h-12 w-12" />
            <h3 className="mt-4 text-xl font-bold">Monitoreo en Tiempo Real</h3>
            <p className="text-muted-foreground mt-2">
              Monitorea la ubicación y el estado de tus activos en tiempo real para mejorar la
              eficiencia.
            </p>
          </div>
          <div className="bg-card rounded-3xl p-6 shadow-sm">
            <SunSnow className="text-primary h-12 w-12" />
            <h3 className="mt-4 text-xl font-bold">Monitoreo de Temperatura</h3>
            <p className="text-muted-foreground mt-2">
              Controla tus activos con una precisión de ±0.5 grados, ideal para la cadena en frío.
            </p>
          </div>
          <div className="bg-card rounded-3xl p-6 shadow-sm">
            <SunSnow className="text-primary h-12 w-12" />
            <h3 className="mt-4 text-xl font-bold">Compartir Ubicación</h3>
            <p className="text-muted-foreground mt-2">
              Comparte la ubicación con colaboradores y clientes sin tener que prestar tu cuenta.
            </p>
          </div>
          <div className="bg-card rounded-3xl p-6 shadow-sm">
            <MapIcon className="text-primary h-12 w-12" />
            <h3 className="mt-4 text-xl font-bold">Geovallas</h3>
            <p className="text-muted-foreground mt-2">
              Configura límites virtuales para recibir alertas cuando tus activos entren o salgan de
              áreas designadas.
            </p>
          </div>
          <div className="bg-card rounded-3xl p-6 shadow-sm">
            <FilesIcon className="text-primary h-12 w-12" />
            <h3 className="mt-4 text-xl font-bold">Informes Detallados</h3>
            <p className="text-muted-foreground mt-2">
              Genera informes completos para analizar el rendimiento de tu flota y optimizar las
              operaciones.
            </p>
          </div>
          <div className="bg-card rounded-3xl p-6 shadow-sm">
            <BadgeAlertIcon className="text-primary h-12 w-12" />
            <h3 className="mt-4 text-xl font-bold">Alertas Personalizables</h3>
            <p className="text-muted-foreground mt-2">
              Recibe alertas en tiempo real por eventos como exceso de velocidad, inactividad y
              movimiento no autorizado.
            </p>
          </div>
          <div className="bg-card rounded-3xl p-6 shadow-sm">
            <MergeIcon className="text-primary h-12 w-12" />
            <h3 className="mt-4 text-xl font-bold">Integración Fluida</h3>
            <p className="text-muted-foreground mt-2">
              Integra fácilmente nuestras soluciones de seguimiento GPS con tus sistemas y flujos de
              trabajo empresariales existentes.
            </p>
          </div>
          <div className="bg-card rounded-3xl p-6 shadow-sm">
            <SmartphoneIcon className="text-primary h-12 w-12" />
            <h3 className="mt-4 text-xl font-bold">Accesibilidad Móvil</h3>
            <p className="text-muted-foreground mt-2">
              Accede a tus datos de seguimiento y gestiona tu flota en cualquier lugar con nuestra
              aplicación móvil.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
