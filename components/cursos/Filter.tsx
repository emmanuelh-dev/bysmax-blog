'use client'
import React, { useState } from 'react'
import { categorias, cursos } from '@/data/cursos'
import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import { BookOpenIcon } from 'lucide-react'

export default function Filter() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas')

  const cursosFiltrados =
    categoriaSeleccionada === 'Todas'
      ? cursos
      : cursos.filter((curso) => curso.categoria === categoriaSeleccionada)
  return (
    <div className="mx-auto max-w-7xl px-8">
      <section>
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Categorías</h2>
          <Link href="/cursos" className={buttonVariants({ variant: 'link' })}>
            Ver cursos
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {categorias.map((categoria) => {
            const IconComponent = categoria.icono
            return (
              <button
                key={categoria.nombre}
                onClick={() => setCategoriaSeleccionada(categoria.nombre)}
                className={`flex flex-col items-center justify-center gap-2 rounded-md  ${
                  categoriaSeleccionada === categoria.nombre
                    ? 'bg-neutral-100 p-4 text-black transition-colors dark:bg-neutral-900 dark:text-white'
                    : 'bg-neutral-900 p-4 text-white transition-colors dark:bg-white dark:text-black'
                }`}
              >
                <IconComponent className="h-8 w-8" />
                <span className="text-sm font-medium">{categoria.nombre}</span>
              </button>
            )
          })}
        </div>
      </section>
      <section className="py-12">
        <h2 className="mb-6 text-2xl font-bold">{categoriaSeleccionada}</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cursosFiltrados.map((curso) => {
            const IconComponent = curso.icono
            return (
              <div
                key={curso.title}
                className="group relative overflow-hidden rounded-md bg-neutral-100 p-6 transition-all hover:shadow-md dark:bg-neutral-900"
              >
                <div className="from-primary to-secondary absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity group-hover:opacity-10"></div>
                <div className="relative z-10">
                  <IconComponent className="text-primary mb-4 h-12 w-12" />
                  <h3 className="mb-2 text-lg font-semibold">{curso.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{curso.descripcion}</p>
                  <div className="flex items-center justify-between">
                    <span className="bg-primary/10 text-primary rounded-full px-2 py-1 text-xs font-medium">
                      {curso.categoria}
                    </span>
                    <Link
                      href={curso.link}
                      className="text-primary flex items-center text-sm font-medium hover:underline"
                    >
                      Ver curso
                      <BookOpenIcon className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
