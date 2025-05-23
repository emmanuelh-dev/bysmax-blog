import { Calculator, LucideIcon, QrCode, Truck  } from "lucide-react";
interface Links {
  title: string
  description: string
  icon: LucideIcon
  href: string
}
const TOOLS = [
  {
    icon: Truck,
    title: 'Cortes GPS',
    href: '/gps-cuts',
    description: 'Aplicación de cortes GPS para el transporte en tierra, mar y aire',
  },
  {
    icon: QrCode,
    title: 'Generador de QR',
    href: '/tools/qr-code-generator',
    description: 'Crea códigos QR personalizados para cualquier enlace o texto',
  },
  {
    icon: Calculator,
    title: 'Calculadora de la Ley de Ohm',
    href: '/tools/calculadora-ley-ohm',
    description: 'Calcula la resistencia, voltaje y corriente en un circuito eléctrico',
  },
] as Links[]

export default TOOLS