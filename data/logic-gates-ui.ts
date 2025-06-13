export type LocaleTypes = 'es' | 'en' | 'pt';

export interface UITranslations {
  pageTitle: string;
  pageDescription: string;
  imageAlts: {
    featuredImage: string;
    datasheetImage: string;
  };
  metadata: {
    titleSuffix: string;
    description: (heading: string, truthTableLength: number, booleanFunction: string, applications: string[]) => string;
    altText: (heading: string) => string;
  };
  sections: {
    datasheet: string;
    booleanFunction: string;
    applications: string;
    truthTable: string;
    technicalSpecs: string;
    generalInfo: string;
    electricalChars: string;
    packageInfo: string;
    additionalInfo: string;
    relatedProjects: string;
    availableGates: string;
    howTheyWork: string;
    mainApplications: string;
  };  labels: {
    downloadPdf: string;
    gateType: string;
    configuration: string;
    operatingVoltage: string;
    maxCurrent: string;
    propagationDelay: string;
    temperature: string;
    packageType: string;
    pinSpacing: string;
    viewDetails: string;
    inputA: string;
    inputB: string;
    output: string;
    datasheetAndDiagram: string;
    allGates: string;
    openMenu: string;
    closeMenu: string;
    closeSidebar: string;
  };
  descriptions: {
    datasheet: string;
    datasheetOfficial: string;
    booleanFunction: (label: string) => string;
    applications: string;
    truthTable: (label: string) => string;
    additionalInfo: (label: string) => string;
    heroIntro: (label: string, configuration: string) => string;
    howTheyWorkIntro: string;
    activeLevels: {
      title: string;
      description: string;
    };
    integratedCircuits: {
      title: string;
      description: string;
    };
  };
}

export const UI_TRANSLATIONS: Record<LocaleTypes, UITranslations> = {  es: {
    pageTitle: "Guía Completa sobre las Compuertas Lógicas",
    pageDescription: "Explora los componentes fundamentales de la electrónica digital. Aprende sobre las series más comunes: 7408 (AND), 7432 (OR), 7404 (NOT), 7400 (NAND) y 7486 (XOR).",
    imageAlts: {
      featuredImage: "Guía Completa sobre las Series 7408, 7432, 7404, 7400 y 7486",
      datasheetImage: "Guía Completa con datasheet las Series 7408, 7432, 7404, 7400 y 7486"
    },
    metadata: {
      titleSuffix: "- Datasheet, Tabla de Verdad y Diagrama",
      description: (heading, truthTableLength, booleanFunction, applications) => 
        `Información completa sobre la ${heading}. Encuentra su datasheet, tabla de verdad (${truthTableLength} combinaciones), función booleana (${booleanFunction}), diagrama de pines y aplicaciones como ${applications.join(', ')}. Ideal para estudiantes y profesionales de electrónica.`,
      altText: (heading) => `Datasheet y diagrama de pines de la ${heading}`,
    },
    sections: {
      datasheet: "Datasheet y Diagrama de Pines",
      booleanFunction: "Función Booleana",
      applications: "Aplicaciones",
      truthTable: "Tabla de Verdad",
      technicalSpecs: "Especificaciones Técnicas",
      generalInfo: "Información General",
      electricalChars: "Características Eléctricas",
      packageInfo: "Información del Encapsulado",
      additionalInfo: "Información Adicional",
      relatedProjects: "Proyectos Relacionados con",
      availableGates: "Compuertas Lógicas Disponibles",
      howTheyWork: "Cómo Funcionan las Compuertas Lógicas",
      mainApplications: "Aplicaciones Principales"
    },    labels: {
      downloadPdf: "Descargar Datasheet PDF",
      gateType: "Tipo de Compuerta",
      configuration: "Configuración",
      operatingVoltage: "Voltaje de Operación",
      maxCurrent: "Corriente Máx.",
      propagationDelay: "Retardo de Propagación",
      temperature: "Temperatura",
      packageType: "Tipo",
      pinSpacing: "Espaciado",
      viewDetails: "Ver detalles completos",
      inputA: "Entrada A",
      inputB: "Entrada B",
      output: "Salida",
      datasheetAndDiagram: "Datasheet y Diagrama",
      allGates: "Todas las compuertas",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      closeSidebar: "Cerrar barra lateral"
    },
    descriptions: {
      datasheet: "proporciona información técnica crucial sobre este circuito integrado, incluyendo el diagrama de pines, características eléctricas y encapsulado.",
      datasheetOfficial: "Datasheet oficial del circuito integrado",
      booleanFunction: (label) => `Esta expresión matemática define cómo la salida (Y o Q) de la ${label} depende de sus entradas (A, B, etc.).`,
      applications: "Este circuito integrado se utiliza en diversas aplicaciones de lógica digital y sistemas embebidos.",
      truthTable: (label) => `La tabla de verdad ilustra la salida de la ${label} para cada combinación posible de sus entradas lógicas.`,
      additionalInfo: (label) => `Para profundizar en el funcionamiento y las aplicaciones de la ${label}, puedes consultar recursos adicionales sobre álgebra booleana y diseño de circuitos digitales. Experimentar con simuladores de circuitos o montar circuitos físicos te ayudará a consolidar tu comprensión.`,
      heroIntro: (label, configuration) => `La ${label} es un componente fundamental en la electrónica digital. Su configuración es ${configuration}. Su operación se basa en la función lógica`,
      howTheyWorkIntro: "Las compuertas lógicas son dispositivos electrónicos que realizan operaciones lógicas básicas basadas en el álgebra de Boole. Operan con señales binarias (0 y 1, bajo y alto voltaje) y son los bloques de construcción esenciales de todos los sistemas digitales.",
      activeLevels: {
        title: "Activo Alto y Activo Bajo",
        description: "Un pin bajo activo debe conectarse a un nivel lógico bajo (0 voltios) para activarse, mientras que un pin alto activo debe conectarse a un nivel lógico alto (3 o 5 voltios)."
      },
      integratedCircuits: {
        title: "Circuitos Integrados",
        description: "Se implementan en ICs como los de la familia TTL o CMOS, para ahorrar espacio y aumentar la eficiencia."
      }
    },
  },  en: {
    pageTitle: "Complete Guide to Logic Gates",
    pageDescription: "Explore the fundamental components of digital electronics. Learn about the most common series: 7408 (AND), 7432 (OR), 7404 (NOT), 7400 (NAND) and 7486 (XOR).",
    imageAlts: {
      featuredImage: "Complete Guide to Series 7408, 7432, 7404, 7400 and 7486",
      datasheetImage: "Complete Guide with datasheets for Series 7408, 7432, 7404, 7400 and 7486"
    },
    metadata: {
      titleSuffix: "- Datasheet, Truth Table and Diagram",
      description: (heading, truthTableLength, booleanFunction, applications) => 
        `Complete information about the ${heading}. Find its datasheet, truth table (${truthTableLength} combinations), boolean function (${booleanFunction}), pin diagram and applications like ${applications.join(', ')}. Ideal for electronics students and professionals.`,
      altText: (heading) => `Datasheet and pin diagram of the ${heading}`,
    },
    sections: {
      datasheet: "Datasheet and Pin Diagram",
      booleanFunction: "Boolean Function",
      applications: "Applications",
      truthTable: "Truth Table",
      technicalSpecs: "Technical Specifications",
      generalInfo: "General Information",
      electricalChars: "Electrical Characteristics",
      packageInfo: "Package Information",
      additionalInfo: "Additional Information",
      relatedProjects: "Related Projects with",
      availableGates: "Available Logic Gates",
      howTheyWork: "How Logic Gates Work",
      mainApplications: "Main Applications"
    },    labels: {
      downloadPdf: "Download PDF Datasheet",
      gateType: "Gate Type",
      configuration: "Configuration",
      operatingVoltage: "Operating Voltage",
      maxCurrent: "Max Current",
      propagationDelay: "Propagation Delay",
      temperature: "Temperature",
      packageType: "Type",
      pinSpacing: "Pin Spacing",
      viewDetails: "View complete details",
      inputA: "Input A",
      inputB: "Input B",
      output: "Output",
      datasheetAndDiagram: "Datasheet and Diagram",
      allGates: "All gates",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      closeSidebar: "Close sidebar"
    },
    descriptions: {
      datasheet: "provides crucial technical information about this integrated circuit, including pin diagram, electrical characteristics and package information.",
      datasheetOfficial: "Official datasheet of the integrated circuit",
      booleanFunction: (label) => `This mathematical expression defines how the output (Y or Q) of the ${label} depends on its inputs (A, B, etc.).`,
      applications: "This integrated circuit is used in various digital logic applications and embedded systems.",
      truthTable: (label) => `The truth table illustrates the output of the ${label} for each possible combination of its logic inputs.`,
      additionalInfo: (label) => `To deepen your understanding of the ${label}, you can consult additional resources on Boolean algebra and digital circuit design. Experimenting with circuit simulators or building physical circuits will help you consolidate your understanding.`,
      heroIntro: (label, configuration) => `The ${label} is a fundamental component in digital electronics. Its configuration is ${configuration}. Its operation is based on the logic function`,
      howTheyWorkIntro: "Logic gates are electronic devices that perform basic logical operations based on Boolean algebra. They operate with binary signals (0 and 1, low and high voltage) and are the essential building blocks of all digital systems.",
      activeLevels: {
        title: "Active High and Active Low",
        description: "An active low pin must be connected to a low logic level (0 volts) to activate, while an active high pin must be connected to a high logic level (3 or 5 volts)."
      },
      integratedCircuits: {
        title: "Integrated Circuits",
        description: "They are implemented in ICs such as those from the TTL or CMOS family, to save space and increase efficiency."
      }
    },
  },  pt: {
    pageTitle: "Guia Completo sobre Portas Lógicas",
    pageDescription: "Explore os componentes fundamentais da eletrônica digital. Aprenda sobre as séries mais comuns: 7408 (AND), 7432 (OR), 7404 (NOT), 7400 (NAND) e 7486 (XOR).",
    imageAlts: {
      featuredImage: "Guia Completo sobre as Séries 7408, 7432, 7404, 7400 e 7486",
      datasheetImage: "Guia Completo com folha de dados das Séries 7408, 7432, 7404, 7400 e 7486"
    },
    metadata: {
      titleSuffix: "- Folha de Dados, Tabela Verdade e Diagrama",
      description: (heading, truthTableLength, booleanFunction, applications) => 
        `Informações completas sobre a ${heading}. Encontre sua folha de dados, tabela verdade (${truthTableLength} combinações), função booleana (${booleanFunction}), diagrama de pinos e aplicações como ${applications.join(', ')}. Ideal para estudantes e profissionais de eletrônica.`,
      altText: (heading) => `Folha de dados e diagrama de pinos da ${heading}`,
    },
    sections: {
      datasheet: "Folha de Dados e Diagrama de Pinos",
      booleanFunction: "Função Booleana",
      applications: "Aplicações",
      truthTable: "Tabela Verdade",
      technicalSpecs: "Especificações Técnicas",
      generalInfo: "Informações Gerais",
      electricalChars: "Características Elétricas",
      packageInfo: "Informações do Encapsulamento",
      additionalInfo: "Informações Adicionais",
      relatedProjects: "Projetos Relacionados com",
      availableGates: "Portas Lógicas Disponíveis",
      howTheyWork: "Como Funcionam as Portas Lógicas",
      mainApplications: "Aplicações Principais"
    },
    labels: {
      downloadPdf: "Baixar Folha de Dados PDF",
      gateType: "Tipo de Porta",
      configuration: "Configuração",
      operatingVoltage: "Tensão de Operação",
      maxCurrent: "Corrente Máx.",
      propagationDelay: "Atraso de Propagação",
      temperature: "Temperatura",
      packageType: "Tipo",
      pinSpacing: "Espaçamento dos Pinos",
      viewDetails: "Ver detalhes completos",
      inputA: "Entrada A",
      inputB: "Entrada B",      output: "Saída",
      datasheetAndDiagram: "Folha de Dados e Diagrama",
      allGates: "Todas as portas",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
      closeSidebar: "Fechar barra lateral"
    },
    descriptions: {
      datasheet: "fornece informações técnicas cruciais sobre este circuito integrado, incluindo diagrama de pinos, características elétricas e informações do encapsulamento.",
      datasheetOfficial: "Folha de dados oficial do circuito integrado",
      booleanFunction: (label) => `Esta expressão matemática define como a saída (Y ou Q) da ${label} depende de suas entradas (A, B, etc.).`,
      applications: "Este circuito integrado é usado em várias aplicações de lógica digital e sistemas embarcados.",
      truthTable: (label) => `A tabela verdade ilustra a saída da ${label} para cada combinação possível de suas entradas lógicas.`,
      additionalInfo: (label) => `Para aprofundar seu entendimento da ${label}, você pode consultar recursos adicionais sobre álgebra booleana e design de circuitos digitais. Experimentar com simuladores de circuitos ou construir circuitos físicos ajudará você a consolidar seu entendimento.`,
      heroIntro: (label, configuration) => `A ${label} é um componente fundamental na eletrônica digital. Sua configuração é ${configuration}. Sua operação é baseada na função lógica`,
      howTheyWorkIntro: "As portas lógicas são dispositivos eletrônicos que realizam operações lógicas básicas baseadas na álgebra de Boole. Operam com sinais binários (0 e 1, baixo e alto voltagem) e são os blocos de construção essenciais de todos os sistemas digitais.",
      activeLevels: {
        title: "Ativo Alto e Ativo Baixo",
        description: "Um pino ativo baixo deve ser conectado a um nível lógico baixo (0 volts) para ativar, enquanto um pino ativo alto deve ser conectado a um nível lógico alto (3 ou 5 volts)."
      },
      integratedCircuits: {
        title: "Circuitos Integrados",
        description: "São implementados em CIs como os da família TTL ou CMOS, para economizar espaço e aumentar a eficiência."
      }
    },
  },
};

export function getUITranslation(locale: LocaleTypes = 'es'): UITranslations {
  return UI_TRANSLATIONS[locale];
}
