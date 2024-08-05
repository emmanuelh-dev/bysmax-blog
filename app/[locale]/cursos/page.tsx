import { Button } from '@/components/ui/button'
import { CloudIcon, CodeIcon, DatabaseIcon, GamepadIcon, SmartphoneIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
export default function Page() {
  return (
    <>
      <section className="py-12 md:py-16 lg:py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Aprende nuevas habilidades con nuestros cursos en línea
            </h1>
            <p className="text-muted-foreground md:text-lg">
              Explora una amplia variedad de cursos en línea diseñados para ayudarte a desarrollar
              nuevas habilidades y avanzar en tu carrera.
            </p>
            <div className="flex gap-4">
              <Button>Explorar Cursos</Button>
              <Button variant="outline">Más Información</Button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg"
              width={800}
              height={600}
              alt="Hero Image"
              className="h-full w-full object-cover"
              style={{ aspectRatio: '800/600', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>
      <section>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Categories</h2>
          <Link href="/#" className="text-sm font-medium hover:underline" prefetch={false}>
            View All
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          <Link
            href="/#"
            className="hover:bg-accent hover:text-accent-foreground group flex flex-col items-center justify-center gap-2 rounded-lg bg-neutral-100 p-4 transition-colors dark:bg-neutral-900"
            prefetch={false}
          >
            <CodeIcon className="h-8 w-8" />
            <span className="text-sm font-medium">Web Development</span>
          </Link>
          <Link
            href="/#"
            className="hover:bg-accent hover:text-accent-foreground group flex flex-col items-center justify-center gap-2 rounded-lg bg-neutral-100 p-4 transition-colors dark:bg-neutral-900"
            prefetch={false}
          >
            <DatabaseIcon className="h-8 w-8" />
            <span className="text-sm font-medium">Data Science</span>
          </Link>
          <Link
            href="/#"
            className="hover:bg-accent hover:text-accent-foreground group flex flex-col items-center justify-center gap-2 rounded-lg bg-neutral-100 p-4 transition-colors dark:bg-neutral-900"
            prefetch={false}
          >
            <SmartphoneIcon className="h-8 w-8" />
            <span className="text-sm font-medium">Mobile Development</span>
          </Link>
          <Link
            href="/#"
            className="hover:bg-accent hover:text-accent-foreground group flex flex-col items-center justify-center gap-2 rounded-lg bg-neutral-100 p-4 transition-colors dark:bg-neutral-900"
            prefetch={false}
          >
            <CloudIcon className="h-8 w-8" />
            <span className="text-sm font-medium">Cloud Computing</span>
          </Link>
          <Link
            href="/#"
            className="hover:bg-accent hover:text-accent-foreground group flex flex-col items-center justify-center gap-2 rounded-lg bg-neutral-100 p-4 transition-colors dark:bg-neutral-900"
            prefetch={false}
          >
            <GamepadIcon className="h-8 w-8" />
            <span className="text-sm font-medium">Game Development</span>
          </Link>
        </div>
      </section>
      <section className="bg-muted py-12 md:py-16 lg:py-20">
        <div className="space-y-6 md:space-y-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              Testimonios de Estudiantes
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Escucha lo que dicen nuestros estudiantes sobre sus experiencias.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  Card
                  <div className="space-y-2">
                    <div className="font-medium">John Doe</div>
                    <div className="text-muted-foreground text-sm">Software Engineer</div>
                  </div>
                </div>
                <p className="text-muted-foreground mt-4">
                  "Los cursos de BysMax me han ayudado a adquirir\n nuevas habilidades y a
                  mejorar mi carrera. ¡Altamente\n recomendados!"
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  Card
                  <div className="space-y-2">
                    <div className="font-medium">Jane Smith</div>
                    <div className="text-muted-foreground text-sm">Product Manager</div>
                  </div>
                </div>
                <p className="text-muted-foreground mt-4">
                  "BysMax ha sido una excelente inversión para mi\n carrera. Los instructores
                  son expertos y los cursos son\n muy prácticos."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  Avatar
                  <div className="space-y-2">
                    <div className="font-medium">Michael Johnson</div>
                    <div className="text-muted-foreground text-sm">Data Analyst</div>
                  </div>
                </div>
                <p className="text-muted-foreground mt-4">
                  "Estoy muy satisfecho con los cursos de BysMax.\n Aprendí mucho y pude
                  aplicar los conocimientos\n directamente en mi trabajo."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
