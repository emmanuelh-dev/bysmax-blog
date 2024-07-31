/**
 * v0 by Vercel.
 * @see https://v0.dev/t/AG1St0F8tl8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { CgToolbox, CgLaptop, CgWebsite, CgSearch, CgCheckR } from 'react-icons/cg'

const services = [
  {
    title: 'Consultoría',
    Icon: <CgToolbox className="h-6 w-6" />,
    description:
      'Nuestros expertos te guiarán para optimizar tus procesos y alcanzar tus objetivos.',
    action: 'Agendar cita',
  },
  {
    title: 'Implementación',
    Icon: <CgToolbox className="h-6 w-6" />,
    description:
      'Nuestro equipo se encargará de la implementación y puesta en marcha de tus soluciones.',
    action: 'Agendar cita',
  },
  {
    title: 'Soporte',
    Icon: <CgToolbox className="h-6 w-6" />,
    description:
      'Nuestro equipo de soporte técnico estará disponible para asistirte en todo momento.',
    action: 'Agendar cita',
  },
  {
    title: 'Desarrollo a la Medida',
    Icon: <CgLaptop className="h-6 w-6" />,
    description:
      'Creamos software personalizado que se adapta a las necesidades específicas de tu negocio.',
    action: 'Solicitar cotización',
  },
  {
    title: 'Desarrollo iOS',
    Icon: <CgLaptop className="h-6 w-6" />,
    description:
      'Desarrollamos aplicaciones iOS robustas y eficientes que mejoran la experiencia del usuario.',
    action: 'Solicitar cotización',
  },
  {
    title: 'Desarrollo Android',
    Icon: <CgLaptop className="h-6 w-6" />,
    description: 'Desarrollamos aplicaciones Android innovadoras que impulsan tu negocio.',
    action: 'Solicitar cotización',
  },
  {
    title: 'Desarrollo Web',
    Icon: <CgWebsite className="h-6 w-6" />,
    description: 'Creamos sitios web atractivos y funcionales que representan tu marca en línea.',
    action: 'Solicitar cotización',
  },
  {
    title: 'Optimización SEO',
    Icon: <CgSearch className="h-6 w-6" />,
    description:
      'Mejoramos tu presencia en línea con estrategias SEO efectivas que aumentan tu visibilidad.',
    action: 'Solicitar análisis',
  },
  {
    title: 'Gestión de Equipos',
    Icon: <CgCheckR className="h-6 w-6" />,
    description: 'Ofrecemos soluciones completas para la gestión y mantenimiento de tus equipos.',
    action: 'Agendar consulta',
  },
]
export default function Services() {
  return (
    <section className="py-12 md:py-20">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
          Nuestros Servicios
        </h2>
        <p className="max-w-[600px] pb-4 text-neutral-400 dark:text-neutral-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Descubre cómo nuestros servicios pueden ayudarte a llevar tu negocio al siguiente nivel.
        </p>
      </div>
      <div className="">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, action, Icon }) => (
            <div
              className="bg-background hover:bg-muted group rounded-lg border p-6 shadow-sm transition-all hover:shadow-md"
              key={title}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
                  {Icon}
                </div>
                <h3 className="text-xl font-semibold">Web Development</h3>
              </div>
              <p className="text-muted-foreground mt-2">
                Unleash the power of the web with our expert web development services.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
