import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  BookOpen,
  Bug,
  FileText,
  Globe,
  GraduationCap,
  Heart,
  BookHeart,
  Users,
  Lightbulb,
  XCircle,
} from 'lucide-react'

export default function PaginaEstudiantes() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-10 text-center text-4xl font-bold">Apoya a BysMax</h1>
      <Tabs defaultValue="contribuir" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="contribuir">Contribuir</TabsTrigger>
          <TabsTrigger value="donar">Donar</TabsTrigger>
        </TabsList>
        <TabsContent value="contribuir">
          <>
            <CardHeader>
              <CardTitle>Contribuye a BysMax</CardTitle>
              <CardDescription>
                BysMax es una comunidad abierta que te ayuda a alcanzar tus metas a través del
                aprendizaje en línea gratuito y especializado. Aquí puedes aprender, mejorar tus
                habilidades y prepararte para el futuro. Contribuye de diferentes maneras para
                mejorar la plataforma y apoyar a la comunidad.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Escribir Guías',
                  icon: BookOpen,
                  description:
                    'Comparte tu experiencia creando guías de aprendizaje para los cursos especializados de BysMax.',
                },
                {
                  title: 'Reportar Errores',
                  icon: Bug,
                  description:
                    'Ayúdanos a mejorar nuestro contenido reportando cualquier error o problema que encuentres en nuestros cursos.',
                },
                {
                  title: 'Mejorar Documentación',
                  icon: FileText,
                  description:
                    'Mejora nuestros materiales de aprendizaje haciéndolos más claros y completos.',
                },
                {
                  title: 'Traducir Contenido',
                  icon: Globe,
                  description:
                    'Haz que BysMax sea accesible para más estudiantes traduciendo nuestro contenido especializado.',
                },
                {
                  title: 'Sugerir Nuevos Cursos',
                  icon: GraduationCap,
                  description:
                    'Propón nuevos cursos especializados para expandir nuestra oferta de aprendizaje.',
                },
              ].map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <item.icon className="h-5 w-5" />
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{item.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline">Aprende Más</Button>
                  </CardFooter>
                </Card>
              ))}
            </CardContent>
          </>
        </TabsContent>
        <TabsContent value="donar">
          <>
            <CardHeader>
              <CardTitle className="text-center text-3xl font-bold">
                Empodera Estudiantes, Expande el Conocimiento
              </CardTitle>
              <CardDescription className="mt-2 text-center text-lg">
                Tu donación nos ayuda a proporcionar cursos en línea gratuitos y especializados a
                estudiantes de todo el mundo. ¡Únete a nosotros para hacer que la educación de
                calidad sea accesible para todos!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    amount: '5€',
                    description: 'Ayuda a crear nuevos ejercicios prácticos para un curso',
                  },
                  {
                    amount: '20€',
                    description: 'Apoya la creación de material de estudio para un estudiante',
                  },
                  {
                    amount: '50€',
                    description: 'Financia la creación de una nueva lección especializada',
                  },
                  {
                    amount: '100€',
                    description: 'Permite producir una serie de tutoriales en video',
                  },
                  {
                    amount: '500€',
                    description: 'Patrocina el desarrollo de un curso especializado completo',
                  },
                  {
                    amount: 'Personalizado',
                    description: 'Elige tu propia cantidad para apoyar la educación gratuita',
                  },
                ].map((item, index) => (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <CardTitle>{item.amount}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{item.description}</p>
                    </CardContent>
                    <CardFooter className="justify-center">
                      <Button>Donar {item.amount}</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle>Eliminar Anuncios</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Disfruta de una experiencia de aprendizaje sin interrupciones eliminando todos
                    los anuncios de la plataforma.
                  </p>
                </CardContent>
                <CardFooter className="justify-center">
                  <Button>
                    <XCircle className="mr-2 h-4 w-4" />
                    Eliminar Anuncios por 10€/mes
                  </Button>
                </CardFooter>
              </Card>
              <div className="bg-primary/10 mt-8 rounded-md p-6">
                <h3 className="mb-4 text-2xl font-semibold">Nuestro Impacto</h3>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="flex flex-col items-center">
                    <BookHeart className="text-primary mb-2 h-12 w-12" />
                    <p className="text-center">
                      <strong>1 Millón+</strong> de Estudiantes Activos
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Users className="text-primary mb-2 h-12 w-12" />
                    <p className="text-center">
                      <strong>200+</strong> Países Alcanzados
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Lightbulb className="text-primary mb-2 h-12 w-12" />
                    <p className="text-center">
                      <strong>500+</strong> Cursos Especializados
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Nuestra Misión</h3>
                <p>
                  La misión de BysMax es proporcionar cursos en línea gratuitos, de alta calidad y
                  especializados a estudiantes de todo el mundo. Creemos que todos deberían tener
                  acceso a conocimientos expertos en diversos campos, independientemente de su
                  ubicación o situación financiera.
                </p>
                <h3 className="text-2xl font-semibold">Nuestros Valores</h3>
                <p>
                  BysMax se guía por los principios de accesibilidad, comunidad y aprendizaje
                  continuo. Nos esforzamos por ofrecer contenido diverso y especializado para todos,
                  fomentar una comunidad de aprendizaje inclusiva y promover el desarrollo continuo
                  de habilidades.
                </p>
                <h3 className="text-2xl font-semibold">Nuestro Objetivo</h3>
                <p>
                  BysMax aspira a ser la plataforma de referencia para el aprendizaje en línea
                  gratuito y especializado en diversos campos. Tu donación nos ayuda a expandir
                  nuestra oferta de cursos, mejorar nuestra plataforma y llegar a más estudiantes en
                  todo el mundo.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="outline">Aprende Más Sobre Nuestro Impacto</Button>
            </CardFooter>
          </>
        </TabsContent>
      </Tabs>
    </div>
  )
}
