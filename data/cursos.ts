import {
  BatteryCharging,
  CloudIcon,
  CodeIcon,
  GamepadIcon,
  MapPin,
  SmartphoneIcon,
} from 'lucide-react'

export const categorias = [
  { nombre: 'Todas', icono: CodeIcon },
  { nombre: 'Electronica', icono: BatteryCharging },
  { nombre: 'Traccar / Tracking', icono: MapPin },
  { nombre: 'Mobile Development', icono: SmartphoneIcon },
  { nombre: 'Cloud Computing', icono: CloudIcon },
  { nombre: 'Game Development', icono: GamepadIcon },
]

export const cursos = [
  {
    title: 'Curso de Arduino',
    categoria: 'Electronica',
    descripcion: 'Aprende las bases de arduino y domina la automatización.',
    link: '/arduino',
    icono: BatteryCharging,
  },
  {
    title: 'Curso de Traccar / Tracking',
    categoria: 'Traccar / Tracking',
    descripcion: 'Aprende las bases del tracking y ten tu propio servidor.',
    link: '/traccar',
    icono: MapPin,
  },
]
