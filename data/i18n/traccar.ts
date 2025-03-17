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
    content:  [
      {
        title: 'Inicio',
        show: true,
        description: '',
        sections: [{ title: 'Introducción', link: '/traccar' }],
      },
      {
        title: 'Instalación ',
        show: true,
        description: '',
        sections: [
          {
            title: 'Instalación en Ubuntu',
            link: '/traccar/traccar/como-instalar-traccar-en-ubuntu-en-digitalocean',
          },
          {
            title: 'Conexión segura por SSL',
            link: '/traccar/traccar/conexion-segura-para-traccar-https',
          },
        ],
      },
      {
        title: 'Configuración',
        show: true,
        description: '',
        sections: [
          {
            title: 'Archivo de configuración',
            link: '/traccar/traccar/traccar-filters-configuration-guide-optimizing-gps-tracking-with-xml-settings',
          },
        ],
      },
      {
        title: 'Personalización',
        show: true,
        description: '',
        sections: [
          {
            title: 'Personalización basica',
            link: '/traccar/traccar/como-personalizar-la-aplicacion-web-de-traccar',
          },
          {
            title: 'Perzonalizacion avanzada',
            link: '/traccar/traccar/como-personalizar-traccar-web',
          },
          {
            title: 'Compilar y desplegar',
            link: '/traccar/traccar/compilar-y-desplegar',
          },
        ],
      },
      {
        title: 'Mantenimiento y optimización',
        show: true,
        description: '',
        sections: [
          {
            title: 'Actualizar Traccar',
            link: '/traccar/traccar/como-actualizar-traccar-a-la-version-mas-reciente-en-digital-ocean',
          },
          {
            title: 'Eliminando datos antiguos',
            link: '/traccar/traccar/removingpurging-old-tracking-data',
          },
        ],
      },
      {
        title: 'API',
        show: true,
        description: '',
        sections: [{ title: 'API de Traccar', link: '/traccar/traccar/api' }],
      },
      {
        title: 'GPS',
        show: true,
        description: '',
        sections: [
          {
            title: 'Configurar Coban por SMS',
            link: '/traccar/traccar/como-configurar-un-coban-por-sms-comandos-coban',
          },
          {
            title: 'Configurar GPS Teltonika',
            link: '/traccar/traccar/como-configurar-un-gps-de-teltonika-fmc920-con-el-teltonika-configurator-para-traccar',
          },
          {
            title: 'Teltonika BLE Sensor',
            link: '/traccar/traccar/como-configurar-dispositivos-ble-en-equipos-teltonika-como-el-eye-sensor',
          },
        ],
      },
      {
        title: 'Necesito un servidor',
        show: true,
        description: '',
        sections: [
          {
            title: 'Contáctanos',
            link: '/contacto',
          },
        ],
      },
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