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
    pageTitle: "Compuertas Lógicas: Guía Completa con Datasheet y Tabla de Verdad",
    pageDescription: "Guía completa de compuertas lógicas con datasheet, tabla de verdad y aplicaciones. Circuitos integrados 7408 (AND), 7432 (OR), 7404 (NOT), 7400 (NAND), 7486 (XOR). Características eléctricas y diagramas.",
    imageAlts: {
      featuredImage: "Compuertas Lógicas AND 7408, OR 7432, NOT 7404, NAND 7400, XOR 7486 - Datasheet y tabla de verdad",
      datasheetImage: "Datasheet compuertas lógicas - Circuitos integrados 7408, 7432, 7404, 7400, 7486 con tabla de verdad y diagrama"
    },
    metadata: {
      titleSuffix: "- Datasheet, Tabla de Verdad y Características Eléctricas",
      description: (heading, truthTableLength, booleanFunction, applications) => 
        `${heading}: Datasheet completo con tabla de verdad (${truthTableLength} combinaciones), función booleana ${booleanFunction}, diagrama de pines y características eléctricas. Aplicaciones: ${applications.slice(0,3).join(', ')}. Circuito integrado para electrónica digital.`,
      altText: (heading) => `Datasheet ${heading} - Tabla de verdad, diagrama de pines y características eléctricas del circuito integrado`,
    },
    sections: {
      datasheet: "Datasheet y Diagrama - Circuito Integrado",
      booleanFunction: "Función Booleana y Operación Lógica",
      applications: "Aplicaciones en Electrónica Digital",
      truthTable: "Tabla de Verdad Completa",
      technicalSpecs: "Especificaciones Técnicas y Eléctricas",
      generalInfo: "Información General del CI",
      electricalChars: "Características Eléctricas",
      packageInfo: "Encapsulado y Pines",
      additionalInfo: "Información Técnica Adicional",
      relatedProjects: "Proyectos con Compuertas Lógicas",
      availableGates: "Circuitos Integrados de Compuertas Lógicas",
      howTheyWork: "Funcionamiento de las Compuertas Lógicas",
      mainApplications: "Aplicaciones Principales en Electrónica"
    },    labels: {
      downloadPdf: "Descargar Datasheet PDF Completo",
      gateType: "Tipo de Compuerta Lógica",
      configuration: "Configuración del Circuito",
      operatingVoltage: "Voltaje de Operación",
      maxCurrent: "Corriente Máxima",
      propagationDelay: "Retardo de Propagación",
      temperature: "Rango de Temperatura",
      packageType: "Tipo de Encapsulado",
      pinSpacing: "Espaciado de Pines",
      viewDetails: "Ver datasheet y especificaciones completas",
      inputA: "Entrada A",
      inputB: "Entrada B",
      output: "Salida",
      datasheetAndDiagram: "Datasheet y Diagrama del Circuito Integrado",
      allGates: "Todas las compuertas lógicas",
      openMenu: "Abrir menú de compuertas",
      closeMenu: "Cerrar menú de compuertas",
      closeSidebar: "Cerrar barra lateral"
    },
    descriptions: {
      datasheet: "del circuito integrado contiene información técnica esencial incluyendo diagrama de pines, características eléctricas, tabla de verdad y especificaciones del encapsulado.",
      datasheetOfficial: "Datasheet oficial del circuito integrado - Especificaciones técnicas completas",
      booleanFunction: (label) => `La función booleana de la ${label} define matemáticamente cómo la salida (Y o Q) depende de las entradas (A, B, etc.). Esta expresión es fundamental para el diseño de circuitos lógicos.`,
      applications: "Los circuitos integrados de compuertas lógicas se utilizan en sistemas digitales, microcontroladores, procesadores y aplicaciones de electrónica digital.",
      truthTable: (label) => `La tabla de verdad de la ${label} muestra todas las combinaciones posibles de entradas y sus correspondientes salidas lógicas. Es esencial para entender el comportamiento del circuito integrado.`,
      additionalInfo: (label) => `Para dominar el uso de la ${label}, es recomendable estudiar álgebra booleana, diseño de circuitos digitales y practicar con simuladores. El datasheet proporciona las especificaciones técnicas completas del circuito integrado.`,
      heroIntro: (label, configuration) => `La ${label} es un circuito integrado fundamental en electrónica digital. Su configuración es ${configuration}. El funcionamiento se basa en la función lógica`,
      howTheyWorkIntro: "Las compuertas lógicas son circuitos integrados que ejecutan operaciones lógicas básicas del álgebra de Boole. Funcionan con señales binarias (0 y 1, niveles de voltaje bajo y alto) siendo los componentes fundamentales de todos los sistemas digitales modernos.",
      activeLevels: {
        title: "Niveles Lógicos: Activo Alto y Activo Bajo",
        description: "En circuitos integrados, un pin activo bajo requiere conexión a nivel lógico bajo (0V) para activarse, mientras que un pin activo alto necesita nivel lógico alto (3V o 5V) según las especificaciones del datasheet."
      },
      integratedCircuits: {
        title: "Circuitos Integrados TTL y CMOS",
        description: "Las compuertas lógicas se implementan en circuitos integrados de las familias TTL (como 74LS) y CMOS (como 74HC) para optimizar espacio, consumo y rendimiento en aplicaciones digitales."
      }
    },
  },  en: {
    pageTitle: "Logic Gates: Complete Guide with Datasheet and Truth Table",
    pageDescription: "Complete guide to logic gates with datasheet, truth table and applications. Integrated circuits 7408 (AND), 7432 (OR), 7404 (NOT), 7400 (NAND), 7486 (XOR). Electrical characteristics and diagrams.",
    imageAlts: {
      featuredImage: "Logic Gates AND 7408, OR 7432, NOT 7404, NAND 7400, XOR 7486 - Datasheet and truth table",
      datasheetImage: "Logic gates datasheet - Integrated circuits 7408, 7432, 7404, 7400, 7486 with truth table and diagram"
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
    pageTitle: "Portas Lógicas: Guia Completo com Datasheet e Tabela Verdade",
    pageDescription: "Guia completo de portas lógicas com datasheet, tabela verdade e aplicações. Circuitos integrados 7408 (AND), 7432 (OR), 7404 (NOT), 7400 (NAND), 7486 (XOR). Características elétricas e diagramas.",
    imageAlts: {
      featuredImage: "Portas Lógicas AND 7408, OR 7432, NOT 7404, NAND 7400, XOR 7486 - Datasheet e tabela verdade",
      datasheetImage: "Datasheet portas lógicas - Circuitos integrados 7408, 7432, 7404, 7400, 7486 com tabela verdade e diagrama"
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
