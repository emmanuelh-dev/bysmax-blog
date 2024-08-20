import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Apoya a BysMax
              </h1>
              <p className="text-muted-foreground mt-4 max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Tu donación ayuda a BysMax a continuar su misión de proporcionar guías y recursos
                gratuitos para estudiantes, apoyándolos en alcanzar sus metas educativas.
              </p>
              <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                <Button>Donar Ahora</Button>
                <Link
                  href="/#"
                  className="border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring inline-flex h-10 items-center justify-center rounded-md border px-4 py-2 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Aprende más
                </Link>
              </div>
            </div>
            <div className="grid gap-6">
              <div>
                <h2 className="text-2xl font-bold">Nuestra Misión</h2>
                <p className="text-muted-foreground mt-2">
                  La misión de BysMax es ayudar a los estudiantes a alcanzar sus objetivos a través
                  de recursos gratuitos y accesibles. Creemos que todos deberían tener acceso a
                  herramientas educativas de alta calidad, sin importar su situación.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Nuestros Valores</h2>
                <p className="text-muted-foreground mt-2">
                  BysMax se guía por los principios de accesibilidad, comunidad e impacto. Nos
                  esforzamos por ofrecer recursos para todos, fomentar una comunidad inclusiva y
                  generar un cambio positivo en la vida de nuestros usuarios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-muted w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold">Nuestro Objetivo</h2>
              <p className="text-muted-foreground mt-2">
                El objetivo de BysMax es empoderar a estudiantes de todo el mundo para que puedan
                alcanzar sus metas académicas y personales. Tu donación nos ayuda a continuar
                ofreciendo recursos educativos de alta calidad a cualquiera que desee aprender.
              </p>
              <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                <Button>Donar Ahora</Button>
                <Link
                  href="/#"
                  className="border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring inline-flex h-10 items-center justify-center rounded-md border px-4 py-2 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Aprende más
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
