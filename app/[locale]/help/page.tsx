import {
  ArrowRightIcon,
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
  Calculator,
  Edit3,
  Clock,
  PenTool,
} from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'

export default function Page() {
  return (
    <section
      id="donate"
      className="container min-h-screen bg-black/10 py-8 dark:bg-neutral-900/20 md:py-16"
    >
      <div className="mx-auto max-w-3xl space-y-12">
        <div className="space-y-4 rounded-lg bg-black/30 p-6 dark:bg-neutral-800/30">
          <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
            ¡Únete a la familia BysMax!
          </h1>
          <p className="text-neutral-400 md:text-lg">
            Somos una comunidad apasionada por el aprendizaje gratuito y de calidad. Con tu ayuda,
            podemos seguir creando cursos increíbles y herramientas útiles para estudiantes de todo
            el mundo. ¡Cada granito de arena cuenta!
          </p>
        </div>

        {/* Nueva sección de Herramientas */}
        <div className="space-y-6 rounded-xl bg-black/20 p-8 dark:bg-neutral-900/30">
          <h2 className="text-2xl font-bold text-white">
            Herramientas que facilitan tu aprendizaje
          </h2>
          <p className="text-neutral-400">
            En BysMax no solo creamos cursos: desarrollamos herramientas gratuitas que hacen más
            sencilla la vida académica. Desde calculadoras especializadas hasta generadores de
            citas, ¡todo pensado para ti!
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Calculadoras Interactivas',
                icon: Calculator,
                description:
                  'Resuelve problemas complejos al instante con nuestras calculadoras especializadas para matemáticas, física, finanzas y más.',
              },
              {
                title: 'Generador de Formato APA',
                icon: Edit3,
                description:
                  'Crea citas y referencias perfectas sin estrés. Cumple con los estándares académicos en segundos.',
              },
              {
                title: 'Convertidores y Formateadores',
                icon: PenTool,
                description:
                  'Transforma archivos, formatea código, convierte unidades y más con nuestras herramientas de uso diario.',
              },
              {
                title: 'Planificador de Estudios',
                icon: Clock,
                description:
                  'Organiza tu tiempo de estudio de forma eficiente con nuestro planificador inteligente y personalizable.',
              },
              {
                title: 'Editor de Textos Académicos',
                icon: PenTool,
                description:
                  'Escribe y edita tus trabajos académicos con nuestra herramienta de escritura inteligente.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col space-y-2 rounded-lg bg-black/40 p-4 transition-colors hover:bg-black/60 dark:bg-neutral-800/40 dark:hover:bg-neutral-800/60"
              >
                <div className="flex items-center gap-2">
                  <item.icon className="text-primary h-5 w-5" />
                  <h3 className="font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-sm text-neutral-400">{item.description}</p>
                <Button
                  variant="ghost"
                  className="self-start px-0 hover:bg-transparent hover:underline"
                >
                  Probar ahora
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Descubre todas nuestras herramientas
            </Button>
          </div>
        </div>

        {/* Sección de Contribución */}
        <div className="space-y-6 rounded-xl bg-black/20 p-8 dark:bg-neutral-900/30">
          <h2 className="text-2xl font-bold text-white">¿Cómo puedes ayudar?</h2>
          <p className="text-neutral-400">
            En BysMax creemos que todos merecen acceso a educación de calidad. Aquí puedes aprender
            sin barreras, desarrollar nuevas habilidades y prepararte para el futuro. ¡Y hay muchas
            formas de ser parte de esta revolución educativa!
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Comparte tu conocimiento',
                icon: BookOpen,
                description:
                  '¿Eres experto en algo? ¡Escribe guías que inspiren y ayuden a otros a aprender!',
              },
              {
                title: '¡Cazador de bugs!',
                icon: Bug,
                description:
                  'Ayúdanos a mejorar señalando errores o problemas que encuentres mientras aprendes.',
              },
              {
                title: 'Clarifica y mejora',
                icon: FileText,
                description: 'Haz nuestros materiales más claros y comprensibles para todos.',
              },
              {
                title: 'Lleva BysMax al mundo',
                icon: Globe,
                description:
                  '¿Hablas varios idiomas? Ayúdanos a romper barreras traduciendo nuestro contenido.',
              },
              {
                title: 'Imagina el futuro',
                icon: GraduationCap,
                description:
                  '¿Qué te gustaría aprender? Propón ideas para nuevos cursos que necesita el mundo.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col space-y-2 rounded-lg bg-black/40 p-4 transition-colors hover:bg-black/60 dark:bg-neutral-800/40 dark:hover:bg-neutral-800/60"
              >
                <div className="flex items-center gap-2">
                  <item.icon className="text-primary h-5 w-5" />
                  <h3 className="font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-sm text-neutral-400">{item.description}</p>
                <Button
                  variant="ghost"
                  className="self-start px-0 hover:bg-transparent hover:underline"
                >
                  ¡Quiero ayudar!
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Sección de Donación */}
        <div className="mt-8 space-y-8 rounded-xl bg-black/20 p-8 dark:bg-neutral-900/30">
          <div>
            <h2 className="text-2xl font-bold text-white">Transforma vidas con nosotros</h2>
            <p className="mt-2 text-neutral-400">
              Tu apoyo hace magia: convierte sueños en oportunidades reales. Cada donación nos
              permite crear más contenido gratuito, desarrollar nuevas herramientas educativas y
              llegar a personas que buscan cambiar su futuro a través del conocimiento. ¡Sé parte
              del cambio!
            </p>
          </div>

          <div className="rounded-lg bg-black/40 p-6 transition-colors hover:bg-black/60 dark:bg-neutral-800/40 dark:hover:bg-neutral-800/60">
            <div className="flex items-center gap-2">
              <XCircle className="text-primary h-5 w-5" />
              <h3 className="font-semibold text-white">¡Adiós anuncios, hola concentración!</h3>
            </div>
            <p className="mt-2 text-sm text-neutral-400">
              Disfruta de tu aprendizaje sin interrupciones. Con solo 10€ al mes, tendrás una
              experiencia limpia y enfocada mientras apoyas nuestra misión. Además, obtendrás acceso
              prioritario a nuestras nuevas herramientas y funciones.
            </p>
            <button className="text-primary mt-2 inline-flex items-center text-sm font-medium hover:underline">
              ¡Quiero aprender sin distracciones!
              <ArrowRightIcon className="ml-1 h-4 w-4" />
            </button>
          </div>

          {/* Sección de Impacto */}
          <div className="mt-8 space-y-4 rounded-lg bg-black/30 p-6 dark:bg-neutral-800/30">
            <h3 className="text-xl font-semibold text-white">Juntos estamos logrando esto:</h3>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="flex flex-col items-center rounded-lg bg-black/20 p-4 dark:bg-neutral-900/40">
                <BookHeart className="text-primary mb-2 h-8 w-8" />
                <p className="text-center text-sm text-neutral-300">
                  <strong className="text-white">¡Más de 100.000</strong> estudiantes transformando
                  sus vidas!
                </p>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-black/20 p-4 dark:bg-neutral-900/40">
                <Users className="text-primary mb-2 h-8 w-8" />
                <p className="text-center text-sm text-neutral-300">
                  <strong className="text-white">En 120+ países,</strong> sin fronteras para el
                  aprendizaje
                </p>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-black/20 p-4 dark:bg-neutral-900/40">
                <Lightbulb className="text-primary mb-2 h-8 w-8" />
                <p className="text-center text-sm text-neutral-300">
                  <strong className="text-white">500+ cursos y 50+ herramientas</strong> que abren
                  puertas al futuro
                </p>
              </div>
            </div>
          </div>

          {/* Sección de Misión y Valores */}
          <div className="mt-8 space-y-6">
            <div className="rounded-lg bg-black/30 p-6 dark:bg-neutral-800/30">
              <h3 className="text-xl font-semibold text-white">Lo que nos mueve</h3>
              <p className="mt-2 text-sm text-neutral-400">
                Soñamos con un mundo donde cualquier persona pueda acceder a educación de calidad,
                sin importar dónde viva o cuánto dinero tenga. Trabajamos cada día para hacer este
                sueño realidad, curso a curso, herramienta a herramienta, estudiante a estudiante.
              </p>
            </div>
            <div className="rounded-lg bg-black/30 p-6 dark:bg-neutral-800/30">
              <h3 className="text-xl font-semibold text-white">En qué creemos</h3>
              <p className="mt-2 text-sm text-neutral-400">
                Creemos en la educación sin barreras, en aprender juntos y apoyarnos mutuamente.
                BysMax es más que una plataforma: somos una comunidad donde todos pueden crecer,
                enseñar y aprender sin límites, con acceso a las mejores herramientas educativas.
              </p>
            </div>
            <div className="rounded-lg bg-black/30 p-6 dark:bg-neutral-800/30">
              <h3 className="text-xl font-semibold text-white">Hacia dónde vamos</h3>
              <p className="mt-2 text-sm text-neutral-400">
                Queremos ser tu hogar para aprender lo que realmente importa. Con tu apoyo, podemos
                crear más cursos, desarrollar herramientas innovadoras y cambiar más vidas. El
                conocimiento y las herramientas para acceder a él son un derecho, no un privilegio.
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Button
              variant="outline"
              className="border-neutral-700 bg-black/40 text-white hover:bg-black/60 hover:text-white dark:bg-neutral-800/40"
            >
              Descubre las historias de éxito de nuestra comunidad
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
