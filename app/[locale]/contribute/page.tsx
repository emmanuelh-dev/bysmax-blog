import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <section id="contribute" className="container py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Contribuye a BysMax
          </h1>
          <p className="text-muted-foreground md:text-xl">
            BysMax es una comunidad abierta que te ayuda a alcanzar tus metas como estudiante. Aquí,
            puedes aprender, mejorar tus habilidades y prepararte para el futuro. Contribuye de
            diferentes maneras para mejorar la plataforma y apoyar a la comunidad.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div className="bg-muted rounded-3xl border p-4 shadow-sm">
            <h3 className="text-lg font-semibold">Escribir guías</h3>
            <p className="text-muted-foreground">
              Comparte tu conocimiento y experiencia escribiendo guías para el blog de BysMax.
            </p>
            <Link
              href="/#"
              className="text-primary mt-2 inline-flex items-center text-sm font-medium hover:underline"
              prefetch={false}
            >
              Aprende más
              <ArrowRightIcon className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="bg-muted rounded-3xl border p-4 shadow-sm">
            <h3 className="text-lg font-semibold">Reportar errores</h3>
            <p className="text-muted-foreground">
              Ayúdanos a mejorar la plataforma reportando cualquier error o problema que encuentres.
            </p>
            <Link
              href="/#"
              className="text-primary mt-2 inline-flex items-center text-sm font-medium hover:underline"
              prefetch={false}
            >
              Aprende más
              <ArrowRightIcon className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="bg-muted rounded-3xl border p-4 shadow-sm">
            <h3 className="text-lg font-semibold">Mejorar la documentación</h3>
            <p className="text-muted-foreground">
              Ayúdanos a hacer que la documentación sea más clara y completa para todos los
              usuarios.
            </p>
            <Link
              href="/#"
              className="text-primary mt-2 inline-flex items-center text-sm font-medium hover:underline"
              prefetch={false}
            >
              Aprende más
              <ArrowRightIcon className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="bg-muted rounded-3xl border p-4 shadow-sm">
            <h3 className="text-lg font-semibold">Traducir contenido</h3>
            <p className="text-muted-foreground">
              Ayúdanos a hacer que BysMax sea accesible para más personas traduciendo contenido a
              diferentes idiomas.
            </p>
            <Link
              href="/#"
              className="text-primary mt-2 inline-flex items-center text-sm font-medium hover:underline"
              prefetch={false}
            >
              Aprende más
              <ArrowRightIcon className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="bg-muted rounded-3xl border p-4 shadow-sm">
            <h3 className="text-lg font-semibold">Mejorar el currículo</h3>
            <p className="text-muted-foreground">
              Ayúdanos a mejorar la experiencia de aprendizaje mejorando el currículo y los
              materiales de las lecciones.
            </p>
            <Link
              href="/#"
              className="text-primary mt-2 inline-flex items-center text-sm font-medium hover:underline"
              prefetch={false}
            >
              Aprende más
              <ArrowRightIcon className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="bg-muted rounded-3xl border p-4 shadow-sm">
            <h3 className="text-lg font-semibold">Donar</h3>
            <p className="text-muted-foreground">Si deseas donar, puedes hacerlo aquí.</p>
            <Link
              href="/donate"
              className="text-primary mt-2 inline-flex items-center text-sm font-medium hover:underline"
              prefetch={false}
            >
              Aprende más
              <ArrowRightIcon className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
