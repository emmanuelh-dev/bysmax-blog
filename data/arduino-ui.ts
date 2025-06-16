export interface ArduinoUITranslation {
  pageTitle: string
  pageDescription: string
  sections: {
    availableBoards: string
    specifications: string
    features: string
    applications: string
    howTheyWork: string
    mainApplications: string
  }
  labels: {
    microcontroller: string
    architecture: string
    flashMemory: string
    sram: string
    clockSpeed: string
    operatingVoltage: string
    inputVoltage: string
    digitalIO: string
    analogIO: string
    communication: string
    usb: string
    dimensions: string
    viewDetails: string
    officialStore: string
    datasheet: string
    allBoards: string
    openMenu: string
    closeMenu: string
    closeSidebar: string
  }
  descriptions: {
    howTheyWorkIntro: string
    powerManagement: {
      title: string
      description: string
    }
    connectivity: {
      title: string
      description: string
    }
  }
  imageAlts: {
    featuredImage: string
    boardImage: string
  }
}

const ES_TRANSLATIONS: ArduinoUITranslation = {
  pageTitle: 'Placas Arduino - Guía Completa y Especificaciones',
  pageDescription: 'Descubre todas las placas Arduino disponibles con sus especificaciones técnicas detalladas, aplicaciones y características principales para tus proyectos de electrónica.',
  sections: {
    availableBoards: 'Placas Arduino Disponibles',
    specifications: 'Especificaciones',
    features: 'Características',
    applications: 'Aplicaciones',
    howTheyWork: 'Cómo Funcionan las Placas Arduino',
    mainApplications: 'Aplicaciones Principales'
  },
  labels: {
    microcontroller: 'Microcontrolador',
    architecture: 'Arquitectura',
    flashMemory: 'Memoria Flash',
    sram: 'SRAM',
    clockSpeed: 'Velocidad de Reloj',
    operatingVoltage: 'Voltaje de Operación',
    inputVoltage: 'Voltaje de Entrada',
    digitalIO: 'E/S Digital',
    analogIO: 'E/S Analógica',
    communication: 'Comunicación',
    usb: 'USB',
    dimensions: 'Dimensiones',
    viewDetails: 'Ver Detalles',
    officialStore: 'Tienda Oficial',
    datasheet: 'Hoja de Datos',
    allBoards: 'Todas las Placas',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    closeSidebar: 'Cerrar barra lateral'
  },
  descriptions: {
    howTheyWorkIntro: 'Las placas Arduino son plataformas de desarrollo basadas en microcontroladores que permiten crear proyectos interactivos fácilmente. Cada placa tiene características específicas que las hacen ideales para diferentes tipos de aplicaciones.',
    powerManagement: {
      title: 'Gestión de Energía',
      description: 'Las placas Arduino pueden alimentarse mediante USB o fuentes externas, con reguladores de voltaje integrados para garantizar un funcionamiento estable.'
    },
    connectivity: {
      title: 'Conectividad',
      description: 'Soporte para múltiples protocolos de comunicación como UART, SPI, I2C y conexiones inalámbricas en modelos específicos.'
    }
  },
  imageAlts: {
    featuredImage: 'Guía de Placas Arduino',
    boardImage: 'Placa Arduino'
  }
}

const EN_TRANSLATIONS: ArduinoUITranslation = {
  pageTitle: 'Arduino Boards - Complete Guide and Specifications',
  pageDescription: 'Discover all available Arduino boards with detailed technical specifications, applications, and key features for your electronics projects.',
  sections: {
    availableBoards: 'Available Arduino Boards',
    specifications: 'Specifications',
    features: 'Features',
    applications: 'Applications',
    howTheyWork: 'How Arduino Boards Work',
    mainApplications: 'Main Applications'
  },
  labels: {
    microcontroller: 'Microcontroller',
    architecture: 'Architecture',
    flashMemory: 'Flash Memory',
    sram: 'SRAM',
    clockSpeed: 'Clock Speed',
    operatingVoltage: 'Operating Voltage',
    inputVoltage: 'Input Voltage',
    digitalIO: 'Digital I/O',
    analogIO: 'Analog I/O',
    communication: 'Communication',
    usb: 'USB',
    dimensions: 'Dimensions',
    viewDetails: 'View Details',
    officialStore: 'Official Store',
    datasheet: 'Datasheet',
    allBoards: 'All Boards',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    closeSidebar: 'Close sidebar'
  },
  descriptions: {
    howTheyWorkIntro: 'Arduino boards are microcontroller-based development platforms that make it easy to create interactive projects. Each board has specific characteristics that make them ideal for different types of applications.',
    powerManagement: {
      title: 'Power Management',
      description: 'Arduino boards can be powered via USB or external sources, with integrated voltage regulators to ensure stable operation.'
    },
    connectivity: {
      title: 'Connectivity',
      description: 'Support for multiple communication protocols like UART, SPI, I2C and wireless connections in specific models.'
    }
  },
  imageAlts: {
    featuredImage: 'Arduino Boards Guide',
    boardImage: 'Arduino Board'
  }
}

const PT_TRANSLATIONS: ArduinoUITranslation = {
  pageTitle: 'Placas Arduino - Guia Completo e Especificações',
  pageDescription: 'Descubra todas as placas Arduino disponíveis com especificações técnicas detalhadas, aplicações e características principais para seus projetos de eletrônica.',
  sections: {
    availableBoards: 'Placas Arduino Disponíveis',
    specifications: 'Especificações',
    features: 'Características',
    applications: 'Aplicações',
    howTheyWork: 'Como Funcionam as Placas Arduino',
    mainApplications: 'Aplicações Principais'
  },
  labels: {
    microcontroller: 'Microcontrolador',
    architecture: 'Arquitetura',
    flashMemory: 'Memória Flash',
    sram: 'SRAM',
    clockSpeed: 'Velocidade do Clock',
    operatingVoltage: 'Voltagem de Operação',
    inputVoltage: 'Voltagem de Entrada',
    digitalIO: 'E/S Digital',
    analogIO: 'E/S Analógica',
    communication: 'Comunicação',
    usb: 'USB',
    dimensions: 'Dimensões',
    viewDetails: 'Ver Detalhes',
    officialStore: 'Loja Oficial',
    datasheet: 'Folha de Dados',
    allBoards: 'Todas as Placas',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    closeSidebar: 'Fechar barra lateral'
  },
  descriptions: {
    howTheyWorkIntro: 'As placas Arduino são plataformas de desenvolvimento baseadas em microcontroladores que facilitam a criação de projetos interativos. Cada placa tem características específicas que as tornam ideais para diferentes tipos de aplicações.',
    powerManagement: {
      title: 'Gerenciamento de Energia',
      description: 'As placas Arduino podem ser alimentadas via USB ou fontes externas, com reguladores de voltagem integrados para garantir operação estável.'
    },
    connectivity: {
      title: 'Conectividade',
      description: 'Suporte para múltiplos protocolos de comunicação como UART, SPI, I2C e conexões sem fio em modelos específicos.'
    }
  },
  imageAlts: {
    featuredImage: 'Guia de Placas Arduino',
    boardImage: 'Placa Arduino'
  }
}

export function getArduinoUITranslation(locale: 'es' | 'en' | 'pt'): ArduinoUITranslation {
  switch (locale) {
    case 'en':
      return EN_TRANSLATIONS
    case 'pt':
      return PT_TRANSLATIONS
    case 'es':
    default:
      return ES_TRANSLATIONS
  }
}
