import { genPageMetadata } from 'app/seo'
import siteMetadata from '@/data/siteMetadata'

export const metadata = genPageMetadata({
  title: 'Curso Gratuito de Traccar desde Cero hasta Avanzado en español',
  description:
    'Este curso en español te guiará desde la configuración inicial de tu propio servidor de rastreo hasta la gestión avanzada de dispositivos y la personalización de la plataforma.',
  openGraph: {
    title: 'Curso Gratuito de Traccar desde Cero hasta Avanzado en español',
    description:
      'Este curso en español te guiará desde la configuración inicial de tu propio servidor de rastreo hasta la gestión avanzada de dispositivos y la personalización de la plataforma.',
    siteName: siteMetadata.title,
    locale: 'es_MX',
    url: './',
    images: '/static/images/curso-traccar.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Curso Gratuito de Traccar desde Cero hasta Avanzado en español',
    description:
      'Este curso en español te guiará desde la configuración inicial de tu propio servidor de rastreo hasta la gestión avanzada de dispositivos y la personalización de la plataforma',
    images: '/static/images/curso-traccar.jpg',
  },
})
export { Home as default } from '@/components/arduino/Home'
