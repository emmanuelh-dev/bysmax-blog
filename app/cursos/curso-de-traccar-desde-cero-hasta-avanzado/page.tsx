import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Curso Gratuito de Traccar desde Cero hasta Avanzado en español',
  description:
    'Este curso en español te guiará desde la configuración inicial de tu propio servidor de rastreo hasta la gestión avanzada de dispositivos y la personalización de la plataforma.',
  twitter: {
    card: 'summary_large_image',
    title: 'Curso Gratuito de Traccar desde Cero hasta Avanzado en español',
    description:
      'Este curso en español te guiará desde la configuración inicial de tu propio servidor de rastreo hasta la gestión avanzada de dispositivos y la personalización de la plataforma',
    images: '/static/images/curso-traccar.jpg',
  },
})
export { Home as default } from '@/components/traccar/Home'
