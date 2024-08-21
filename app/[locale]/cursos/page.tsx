'use client'
import { Button } from '@/components/ui/button'
import { CloudIcon, CodeIcon, DatabaseIcon, GamepadIcon, SmartphoneIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
const categorias = [
  { nombre: 'Todas', icono: CodeIcon },
  { nombre: 'Web Development', icono: CodeIcon },
  { nombre: 'Data Science', icono: DatabaseIcon },
  { nombre: 'Mobile Development', icono: SmartphoneIcon },
  { nombre: 'Cloud Computing', icono: CloudIcon },
  { nombre: 'Game Development', icono: GamepadIcon },
]

const cursos = [
  {
    id: 1,
    titulo: 'Introducción a React',
    categoria: 'Web Development',
    descripcion: 'Aprende los fundamentos de React',
  },
  {
    id: 2,
    titulo: 'Python para Data Science',
    categoria: 'Data Science',
    descripcion: 'Análisis de datos con Python',
  },
  {
    id: 3,
    titulo: 'Desarrollo de Apps con Flutter',
    categoria: 'Mobile Development',
    descripcion: 'Crea apps multiplataforma con Flutter',
  },
  {
    id: 4,
    titulo: 'AWS Fundamentals',
    categoria: 'Cloud Computing',
    descripcion: 'Fundamentos de Amazon Web Services',
  },
  {
    id: 5,
    titulo: 'Unity para Principiantes',
    categoria: 'Game Development',
    descripcion: 'Crea tu primer juego con Unity',
  },
  {
    id: 6,
    titulo: 'JavaScript Avanzado',
    categoria: 'Web Development',
    descripcion: 'Conceptos avanzados de JavaScript',
  },
]

export default function Page() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas')

  const cursosFiltrados =
    categoriaSeleccionada === 'Todas'
      ? cursos
      : cursos.filter((curso) => curso.categoria === categoriaSeleccionada)
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
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Categorías</h2>
          <Link href="/#" className="text-sm font-medium hover:underline" prefetch={false}>
            Ver Todas
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {categorias.map((categoria) => {
            const IconComponent = categoria.icono
            return (
              <button
                key={categoria.nombre}
                onClick={() => setCategoriaSeleccionada(categoria.nombre)}
                className={`flex flex-col items-center justify-center gap-2 rounded-lg  ${
                  categoriaSeleccionada === categoria.nombre
                    ? 'bg-neutral-100 p-4 text-black transition-colors dark:bg-neutral-900 dark:text-white'
                    : 'bg-neutral-900 p-4 text-white transition-colors dark:bg-neutral-100 dark:text-black'
                }`}
              >
                <IconComponent className="h-8 w-8" />
                <span className="text-sm font-medium">{categoria.nombre}</span>
              </button>
            )
          })}
        </div>
      </section>
      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-bold">Cursos de {categoriaSeleccionada}</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cursosFiltrados.map((curso) => (
            <Card key={curso.id} className="flex flex-col">
              <CardHeader>
                <CardTitle>{curso.titulo}</CardTitle>
                <CardDescription>{curso.categoria}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>{curso.descripcion}</p>
              </CardContent>
            </Card>
          ))}
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
                  "Los cursos de BysMax me han ayudado a adquirir\n nuevas habilidades y a mejorar
                  mi carrera. ¡Altamente\n recomendados!"
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
                  "BysMax ha sido una excelente inversión para mi\n carrera. Los instructores son
                  expertos y los cursos son\n muy prácticos."
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
                  "Estoy muy satisfecho con los cursos de BysMax.\n Aprendí mucho y pude aplicar los
                  conocimientos\n directamente en mi trabajo."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
