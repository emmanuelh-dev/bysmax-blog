import { type LocaleContent } from './types'
import { i18nConfig } from './config'

export const traccarContent: LocaleContent = {
  pt: {
    metadata: {
      title: 'Curso Gratuito de Traccar do Zero ao Avançado',
      description: 'Este curso irá guiá-lo desde a configuração inicial do seu próprio servidor de rastreamento até o gerenciamento avançado de dispositivos e personalização da plataforma.',
      locale: 'pt_BR'
    },
    ui: {
      startNow: 'Começar agora',
      needServer: 'Preciso de um servidor',
      courseContent: 'Conteúdo do Curso',
      aboutCourse: 'Sobre o Curso',
      courseDescription: 'Comece instalando seu próprio servidor até mantê-lo para hospedar mais de 5 mil equipamentos.'
    },
    content: [
      {
        title: 'Início',
        show: true,
        description: '',
        sections: [{ title: 'Introdução', link: '/traccar' }]
      },
      {
        title: 'Instalação',
        show: true,
        description: '',
        sections: [
          {
            title: 'Instalação no Ubuntu',
            link: '/traccar/traccar/como-instalar-traccar-en-ubuntu-en-digitalocean'
          },
          {
            title: 'Conexão segura por SSL',
            link: '/traccar/traccar/conexion-segura-para-traccar-https'
          }
        ]
      }
    ]
  },
  es: {
    metadata: {
      title: 'Curso Gratuito de Traccar desde Cero hasta Avanzado en español',
      description: 'Este curso en español te guiará desde la configuración inicial de tu propio servidor de rastreo hasta la gestión avanzada de dispositivos y la personalización de la plataforma.',
      locale: 'es_MX'
    },
    ui: {
      startNow: 'Comenzar ahora',
      needServer: 'Necesito un servidor',
      courseContent: 'Temario',
      aboutCourse: 'Sobre el Curso',
      courseDescription: 'Comienza instalando tu propio servidor hasta darle mantenimiento para albergar más de 5k equipos.'
    },
    content: [
      {
        title: 'Inicio',
        show: true,
        description: '',
        sections: [{ title: 'Introducción', link: '/traccar' }]
      },
      {
        title: 'Instalación',
        show: true,
        description: '',
        sections: [
          {
            title: 'Instalación en Ubuntu',
            link: '/traccar/traccar/como-instalar-traccar-en-ubuntu-en-digitalocean'
          },
          {
            title: 'Conexión segura por SSL',
            link: '/traccar/traccar/conexion-segura-para-traccar-https'
          }
        ]
      }
    ]
  },
  en: {
    metadata: {
      title: 'Free Traccar Course from Zero to Advanced',
      description: 'This course will guide you from the initial setup of your own tracking server to advanced device management and platform customization.',
      locale: 'en_US'
    },
    ui: {
      startNow: 'Start Now',
      needServer: 'I Need a Server',
      courseContent: 'Course Content',
      aboutCourse: 'About the Course',
      courseDescription: 'Start by installing your own server and learn to maintain it to host over 5k devices.'
    },
    content: [
      {
        title: 'Getting Started',
        show: true,
        description: '',
        sections: [{ title: 'Introduction', link: '/en/traccar' }]
      },
      {
        title: 'Installation',
        show: true,
        description: '',
        sections: [
          {
            title: 'Ubuntu Installation',
            link: '/en/traccar/traccar/how-to-install-traccar-on-ubuntu-in-digitalocean'
          },
          {
            title: 'Secure SSL Connection',
            link: '/en/traccar/traccar/secure-connection-for-traccar-https'
          }
        ]
      }
    ]
  }
}