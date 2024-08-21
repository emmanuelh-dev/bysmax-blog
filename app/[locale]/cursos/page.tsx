import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Filter from '@/components/cursos/Filter'

export default function Page() {
  return (
    <>
      <section className="py-12 md:py-16 lg:py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Cursos gratis para estudiantes
            </h1>
            <p className="text-muted-foreground md:text-lg">
              Encuentra cursos gratuitos que te permitan mejorar tu calidad de vida, muchos están en
              desarrollo y otros están en camino.
            </p>
            <div className="flex gap-4">
              <Button>Explorar Cursos</Button>
              <Button variant="outline">Más Información</Button>
            </div>
          </div>
          <Image
            src="/static/images/computer.jpg"
            width={800}
            height={600}
            alt="Hero Image"
            className="aspect-video h-full w-full rounded-md object-cover"
          />
        </div>
      </section>
      <Filter />
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
