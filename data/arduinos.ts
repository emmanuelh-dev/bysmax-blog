export interface ArduinoBoard {
  id: string
  name: string
  microcontroller: string
  architecture: string
  flashMemory: string
  sram: string
  eeprom: string
  clockSpeed: string
  operatingVoltage: string
  inputVoltage: string
  digitalIO: string
  analogIO: string
  communication: string
  usb: string
  dimensions: string
  officialLink: string
  pdf: string
  image?: string
  description: {
    es: string
    en: string
    pt: string
  }
  applications: {
    es: string[]
    en: string[]
    pt: string[]
  }
  features: {
    es: string[]
    en: string[]
    pt: string[]
  }
}

// Helper functions for comparisons
export function getBoardById(id: string): ArduinoBoard | undefined {
  return ARDUINO_BOARDS.find(board => board.id === id)
}

export function getComparisonById(id: string): MicrocontrollerComparison | undefined {
  return MICROCONTROLLER_COMPARISONS.find(comparison => comparison.id === id)
}

export function getBoardsByCategory(category: 'arduino' | 'esp' | 'arm' | 'educational'): ArduinoBoard[] {
  switch (category) {
    case 'arduino':
      return ARDUINO_BOARDS.filter(board => 
        board.id.includes('uno') || board.id.includes('mega') || board.id.includes('nano') || 
        board.id.includes('leonardo') || board.id.includes('micro') || board.id.includes('due')
      )
    case 'esp':
      return ARDUINO_BOARDS.filter(board => 
        board.id.includes('esp32') || board.id.includes('esp8266')
      )
    case 'arm':
      return ARDUINO_BOARDS.filter(board => 
        board.architecture.includes('ARM') || board.architecture.includes('Cortex')
      )
    case 'educational':
      return ARDUINO_BOARDS.filter(board => 
        board.id.includes('micro-bit') || board.id.includes('uno') || board.id.includes('nano')
      )
    default:
      return ARDUINO_BOARDS
  }
}

export const BOARD_CATEGORIES = {
  arduino: {
    es: 'Placas Arduino Oficiales',
    en: 'Official Arduino Boards',
    pt: 'Placas Arduino Oficiais'
  },
  esp: {
    es: 'Microcontroladores ESP',
    en: 'ESP Microcontrollers',
    pt: 'Microcontroladores ESP'
  },
  arm: {
    es: 'Procesadores ARM',
    en: 'ARM Processors',
    pt: 'Processadores ARM'
  },
  educational: {
    es: 'Placas Educativas',
    en: 'Educational Boards',
    pt: 'Placas Educacionais'
  }
}

export const ARDUINO_BOARDS: ArduinoBoard[] = [
  {
    id: "uno",
    name: "Arduino Uno Rev3",
    microcontroller: "ATmega328P",
    architecture: "AVR",
    flashMemory: "32 KB",
    sram: "2 KB",
    eeprom: "1 KB",
    clockSpeed: "16 MHz",
    operatingVoltage: "5 V",
    inputVoltage: "7-12 V (recomendado), 6-20 V (límite)",
    digitalIO: "14 (6 PWM)",
    analogIO: "6 (0 DAC)",
    communication: "UART, SPI, I2C, USB",
    usb: "USB Tipo B",
    dimensions: "68.6 x 53.4 mm",
    officialLink: "https://store.arduino.cc/products/arduino-uno-rev3",
    pdf: "https://docs.arduino.cc/resources/datasheets/A000066-datasheet.pdf",
    image: "/static/images/arduino-uno.jpg",
    description: {
      es: "La placa Arduino más popular y ampliamente utilizada. Perfecta para principiantes y proyectos educativos. Basada en el microcontrolador ATmega328P con una arquitectura robusta y fácil de usar.",
      en: "The most popular and widely used Arduino board. Perfect for beginners and educational projects. Based on the ATmega328P microcontroller with a robust and easy-to-use architecture.",
      pt: "A placa Arduino mais popular e amplamente utilizada. Perfeita para iniciantes e projetos educacionais. Baseada no microcontrolador ATmega328P com arquitetura robusta e fácil de usar."
    },
    applications: {
      es: ["Proyectos educativos", "Automatización del hogar", "Robótica básica", "Sensores IoT", "Control de motores"],
      en: ["Educational projects", "Home automation", "Basic robotics", "IoT sensors", "Motor control"],
      pt: ["Projetos educacionais", "Automação residencial", "Robótica básica", "Sensores IoT", "Controle de motores"]
    },
    features: {
      es: ["Fácil de usar", "Gran comunidad", "Compatible con shields", "Programación simple", "Alimentación versátil"],
      en: ["Easy to use", "Large community", "Shield compatible", "Simple programming", "Versatile power supply"],
      pt: ["Fácil de usar", "Grande comunidade", "Compatível com shields", "Programação simples", "Alimentação versátil"]
    }
  },  {
    id: "mega2560",
    name: "Arduino Mega 2560 Rev3",
    microcontroller: "ATmega2560",
    architecture: "AVR",
    flashMemory: "256 KB",
    sram: "8 KB",
    eeprom: "4 KB",
    clockSpeed: "16 MHz",
    operatingVoltage: "5 V",
    inputVoltage: "7-12 V (recomendado), 6-20 V (límite)",
    digitalIO: "54 (15 PWM)",
    analogIO: "16 (0 DAC)",
    communication: "UART, SPI, I2C, USB",
    usb: "USB Tipo B",
    dimensions: "101.52 x 53.3 mm",
    officialLink: "https://store.arduino.cc/products/arduino-mega-2560-rev3",
    pdf: "https://docs.arduino.cc/resources/datasheets/A000067-datasheet.pdf",
    image: "/static/images/arduino-mega.jpg",
    description: {
      es: "La placa Arduino con mayor capacidad de memoria y pines E/S. Ideal para proyectos complejos que requieren múltiples sensores y actuadores. Perfecta para aplicaciones industriales y sistemas avanzados.",
      en: "The Arduino board with the highest memory capacity and I/O pins. Ideal for complex projects requiring multiple sensors and actuators. Perfect for industrial applications and advanced systems.",
      pt: "A placa Arduino com maior capacidade de memória e pinos E/S. Ideal para projetos complexos que requerem múltiplos sensores e atuadores. Perfeita para aplicações industriais e sistemas avançados."
    },
    applications: {
      es: ["Sistemas industriales", "Robótica avanzada", "Adquisición de datos", "Control CNC", "Estaciones meteorológicas"],
      en: ["Industrial systems", "Advanced robotics", "Data acquisition", "CNC control", "Weather stations"],
      pt: ["Sistemas industriais", "Robótica avançada", "Aquisição de dados", "Controle CNC", "Estações meteorológicas"]
    },
    features: {
      es: ["54 pines digitales", "16 entradas analógicas", "256KB memoria flash", "Compatible con shields", "Múltiples puertos serie"],
      en: ["54 digital pins", "16 analog inputs", "256KB flash memory", "Shield compatible", "Multiple serial ports"],
      pt: ["54 pinos digitais", "16 entradas analógicas", "256KB memória flash", "Compatível com shields", "Múltiplas portas seriais"]
    }
  },
  {
    id: "nano",
    name: "Arduino Nano",
    microcontroller: "ATmega328",
    architecture: "AVR",
    flashMemory: "32 KB",
    sram: "2 KB",
    eeprom: "1 KB",
    clockSpeed: "16 MHz",
    operatingVoltage: "5 V",
    inputVoltage: "7-12 V",
    digitalIO: "22 (6 PWM)",
    analogIO: "8 (0 DAC)",
    communication: "UART, SPI, I2C, USB",
    usb: "Mini USB Tipo B",
    dimensions: "45 x 18 mm",
    officialLink: "https://store.arduino.cc/products/arduino-nano",
    pdf: "https://docs.arduino.cc/resources/datasheets/A000005-datasheet.pdf",
    image: "/static/images/arduino-nano.jpg",
    description: {
      es: "Versión compacta del Arduino Uno con el mismo microcontrolador pero en un formato mucho más pequeño. Ideal para proyectos donde el espacio es limitado y se necesita portabilidad.",
      en: "Compact version of Arduino Uno with the same microcontroller but in a much smaller format. Ideal for projects where space is limited and portability is needed.",
      pt: "Versão compacta do Arduino Uno com o mesmo microcontrolador mas em formato muito menor. Ideal para projetos onde o espaço é limitado e a portabilidade é necessária."
    },
    applications: {
      es: ["Wearables", "Drones pequeños", "Sensores IoT", "Proyectos portátiles", "Prototipado rápido"],
      en: ["Wearables", "Small drones", "IoT sensors", "Portable projects", "Rapid prototyping"],
      pt: ["Wearables", "Drones pequenos", "Sensores IoT", "Projetos portáteis", "Prototipagem rápida"]
    },
    features: {
      es: ["Diseño compacto", "Montaje en breadboard", "Bajo consumo", "Compatible con Uno", "Fácil integración"],
      en: ["Compact design", "Breadboard mountable", "Low power", "Uno compatible", "Easy integration"],
      pt: ["Design compacto", "Montável em protoboard", "Baixo consumo", "Compatível com Uno", "Fácil integração"]
    }
  },  {
    id: "nano_every",
    name: "Arduino Nano Every",
    microcontroller: "ATMega4809",
    architecture: "AVR",
    flashMemory: "48 KB",
    sram: "6 KB",
    eeprom: "256 B",
    clockSpeed: "20 MHz",
    operatingVoltage: "5 V",
    inputVoltage: "7-21 V",
    digitalIO: "22 (5 PWM)",
    analogIO: "8 (0 DAC)",
    communication: "UART, SPI, I2C, USB",
    usb: "Micro USB",
    dimensions: "45 x 18 mm",
    officialLink: "https://store.arduino.cc/products/nano-every",
    pdf: "https://docs.arduino.cc/resources/datasheets/ABX00028-datasheet.pdf",
    image: "/static/images/arduino-nano-every.jpg",
    description: {
      es: "Versión mejorada del Arduino Nano con mayor memoria flash y velocidad de reloj. Mantiene la compatibilidad de pines pero ofrece mejor rendimiento para aplicaciones exigentes.",
      en: "Improved version of Arduino Nano with more flash memory and higher clock speed. Maintains pin compatibility but offers better performance for demanding applications.",
      pt: "Versão melhorada do Arduino Nano com mais memória flash e maior velocidade de clock. Mantém compatibilidade de pinos mas oferece melhor desempenho para aplicações exigentes."
    },
    applications: {
      es: ["IoT avanzado", "Procesamiento de señales", "Control de tiempo real", "Sensores múltiples", "Comunicación serie"],
      en: ["Advanced IoT", "Signal processing", "Real-time control", "Multiple sensors", "Serial communication"],
      pt: ["IoT avançado", "Processamento de sinais", "Controle em tempo real", "Múltiplos sensores", "Comunicação serial"]
    },
    features: {
      es: ["48KB memoria flash", "20MHz reloj", "Bajo consumo", "Compatible con Nano", "Mayor rendimiento"],
      en: ["48KB flash memory", "20MHz clock", "Low power", "Nano compatible", "Higher performance"],
      pt: ["48KB memória flash", "Clock 20MHz", "Baixo consumo", "Compatível com Nano", "Maior desempenho"]
    }
  },
  {
    id: "leonardo",
    name: "Arduino Leonardo",
    microcontroller: "ATmega32U4",
    architecture: "AVR",
    flashMemory: "32 KB",
    sram: "2.5 KB",
    eeprom: "1 KB",
    clockSpeed: "16 MHz",
    operatingVoltage: "5 V",
    inputVoltage: "7-12 V (recomendado), 6-20 V (límite)",
    digitalIO: "20 (7 PWM)",
    analogIO: "12 (0 DAC)",
    communication: "UART, SPI, I2C, USB",
    usb: "Micro USB",
    dimensions: "68.6 x 53.3 mm",
    officialLink: "https://store.arduino.cc/products/arduino-leonardo-with-headers",
    pdf: "",
    image: "/static/images/arduino-leonardo.jpg",
    description: {
      es: "Arduino con USB nativo integrado que permite actuar como dispositivo HID (teclado, mouse). Ideal para proyectos de interfaz humana y control de computadoras.",
      en: "Arduino with integrated native USB that allows it to act as an HID device (keyboard, mouse). Ideal for human interface projects and computer control.",
      pt: "Arduino com USB nativo integrado que permite atuar como dispositivo HID (teclado, mouse). Ideal para projetos de interface humana e controle de computadores."
    },
    applications: {
      es: ["Simulador de teclado", "Control de mouse", "Interfaces HID", "Juegos interactivos", "Automatización PC"],
      en: ["Keyboard simulator", "Mouse control", "HID interfaces", "Interactive games", "PC automation"],
      pt: ["Simulador de teclado", "Controle de mouse", "Interfaces HID", "Jogos interativos", "Automação PC"]
    },
    features: {
      es: ["USB nativo", "Emulación HID", "12 entradas analógicas", "Compatible con shields", "Programación simple"],
      en: ["Native USB", "HID emulation", "12 analog inputs", "Shield compatible", "Simple programming"],
      pt: ["USB nativo", "Emulação HID", "12 entradas analógicas", "Compatível com shields", "Programação simples"]
    }
  },  {
    id: "micro",
    name: "Arduino Micro",
    microcontroller: "ATmega32U4",
    architecture: "AVR",
    flashMemory: "32 KB",
    sram: "2.5 KB",
    eeprom: "1 KB",
    clockSpeed: "16 MHz",
    operatingVoltage: "5 V",
    inputVoltage: "7-12 V",
    digitalIO: "20 (7 PWM)",
    analogIO: "12 (0 DAC)",
    communication: "UART, SPI, I2C, USB",
    usb: "Micro USB",
    dimensions: "48 x 18 mm",
    officialLink: "https://store.arduino.cc/products/arduino-micro",
    pdf: "",
    image: "/static/images/arduino-micro.jpg",
    description: {
      es: "Versión ultra compacta del Leonardo con funcionalidad USB nativa. Combina el tamaño pequeño del Nano con las capacidades HID del Leonardo.",
      en: "Ultra-compact version of Leonardo with native USB functionality. Combines the small size of Nano with the HID capabilities of Leonardo.",
      pt: "Versão ultra compacta do Leonardo com funcionalidade USB nativa. Combina o tamanho pequeno do Nano com as capacidades HID do Leonardo."
    },
    applications: {
      es: ["Dispositivos portátiles HID", "Proyectos embebidos", "Control remoto USB", "Wearables avanzados", "Interfaces compactas"],
      en: ["Portable HID devices", "Embedded projects", "USB remote control", "Advanced wearables", "Compact interfaces"],
      pt: ["Dispositivos HID portáteis", "Projetos embarcados", "Controle remoto USB", "Wearables avançados", "Interfaces compactas"]
    },
    features: {
      es: ["Muy compacto", "USB nativo", "HID compatible", "20 pines E/S", "Montaje breadboard"],
      en: ["Very compact", "Native USB", "HID compatible", "20 I/O pins", "Breadboard mountable"],
      pt: ["Muito compacto", "USB nativo", "Compatível HID", "20 pinos E/S", "Montável em protoboard"]
    }
  },
  {
    id: "due",
    name: "Arduino Due",
    microcontroller: "Atmel SAM3X8E",
    architecture: "ARM Cortex-M3",
    flashMemory: "512 KB",
    sram: "96 KB",
    eeprom: "0",
    clockSpeed: "84 MHz",
    operatingVoltage: "3.3 V",
    inputVoltage: "7-12 V (recomendado), 6-16 V (límite)",
    digitalIO: "54 (12 PWM)",
    analogIO: "12 (2 DAC)",
    communication: "UART, SPI, I2C, USB",
    usb: "Micro USB",
    dimensions: "101.5 x 53.3 mm",
    officialLink: "https://store.arduino.cc/products/arduino-due",
    pdf: "https://docs.arduino.cc/resources/datasheets/A000062-datasheet.pdf",
    image: "/static/images/arduino-due.jpg",
    description: {
      es: "La primera placa Arduino basada en ARM de 32 bits con alta velocidad de procesamiento. Ideal para aplicaciones que requieren cálculos intensivos y procesamiento en tiempo real.",
      en: "The first Arduino board based on 32-bit ARM with high processing speed. Ideal for applications requiring intensive calculations and real-time processing.",
      pt: "A primeira placa Arduino baseada em ARM de 32 bits com alta velocidade de processamento. Ideal para aplicações que requerem cálculos intensivos e processamento em tempo real."
    },
    applications: {
      es: ["Procesamiento de audio", "Control de motores avanzado", "Adquisición de datos rápida", "Comunicaciones", "Robótica profesional"],
      en: ["Audio processing", "Advanced motor control", "Fast data acquisition", "Communications", "Professional robotics"],
      pt: ["Processamento de áudio", "Controle avançado de motores", "Aquisição rápida de dados", "Comunicações", "Robótica profissional"]
    },
    features: {
      es: ["ARM 32-bit", "84MHz reloj", "2 conversores DAC", "96KB SRAM", "54 pines E/S"],
      en: ["32-bit ARM", "84MHz clock", "2 DAC converters", "96KB SRAM", "54 I/O pins"],
      pt: ["ARM 32-bit", "Clock 84MHz", "2 conversores DAC", "96KB SRAM", "54 pinos E/S"]
    }
  },
  {
    id: "mkr_wifi_1010",
    name: "Arduino MKR WiFi 1010",
    microcontroller: "SAMD21 Cortex-M0+",
    architecture: "ARM",
    flashMemory: "256 KB",
    sram: "32 KB",
    eeprom: "0",
    clockSpeed: "48 MHz",
    operatingVoltage: "3.3 V",
    inputVoltage: "5 V",
    digitalIO: "8 (13 PWM)",
    analogIO: "7 (1 DAC)",
    communication: "UART, SPI, I2C, USB, Wi-Fi, BLE",
    usb: "Micro USB",
    dimensions: "61.5 x 25 mm",
    officialLink: "https://store.arduino.cc/products/arduino-mkr-wifi-1010",
    pdf: "https://docs.arduino.cc/resources/datasheets/ABX00023-datasheet.pdf",
    image: "/static/images/arduino-mkr-wifi.jpg",
    description: {
      es: "Placa IoT con conectividad Wi-Fi y Bluetooth integradas. Diseñada específicamente para proyectos de Internet de las Cosas con bajo consumo energético.",
      en: "IoT board with integrated Wi-Fi and Bluetooth connectivity. Specifically designed for Internet of Things projects with low power consumption.",
      pt: "Placa IoT com conectividade Wi-Fi e Bluetooth integradas. Projetada especificamente para projetos de Internet das Coisas com baixo consumo energético."
    },
    applications: {
      es: ["Sensores IoT", "Monitoreo remoto", "Smart home", "Edge computing", "Telemetría"],
      en: ["IoT sensors", "Remote monitoring", "Smart home", "Edge computing", "Telemetry"],
      pt: ["Sensores IoT", "Monitoramento remoto", "Casa inteligente", "Computação de borda", "Telemetria"]
    },
    features: {
      es: ["Wi-Fi integrado", "Bluetooth LE", "Bajo consumo", "ARM Cortex-M0+", "Compatible IoT Cloud"],
      en: ["Integrated Wi-Fi", "Bluetooth LE", "Low power", "ARM Cortex-M0+", "IoT Cloud compatible"],
      pt: ["Wi-Fi integrado", "Bluetooth LE", "Baixo consumo", "ARM Cortex-M0+", "Compatível IoT Cloud"]
    }
  },
  {
    id: "mkr_zero",
    name: "Arduino MKR Zero",
    microcontroller: "SAMD21 Cortex-M0+",
    architecture: "ARM Cortex-M0+",
    flashMemory: "256 KB",
    sram: "32 KB",
    eeprom: "0",
    clockSpeed: "48 MHz",
    operatingVoltage: "3.3 V",
    inputVoltage: "5 V",
    digitalIO: "22 (12 PWM)",
    analogIO: "7 (1 DAC)",
    communication: "UART, SPI, I2C, USB",
    usb: "Micro USB",
    dimensions: "61.5 x 25 mm",
    officialLink: "https://store.arduino.cc/products/arduino-mkr-zero-i2s-bus-sd-for-sound-music-digital-audio-data",
    pdf: "",
    image: "/static/images/arduino-mkr-zero.jpg",
    description: {
      es: "Placa con capacidades de audio avanzadas y slot para tarjeta SD. Ideal para proyectos de audio digital, música y almacenamiento de datos.",
      en: "Board with advanced audio capabilities and SD card slot. Ideal for digital audio, music, and data storage projects.",
      pt: "Placa com capacidades de áudio avançadas e slot para cartão SD. Ideal para projetos de áudio digital, música e armazenamento de dados."
    },
    applications: {
      es: ["Procesamiento audio", "Grabación sonido", "Música digital", "Datalogging", "Sintetizadores"],
      en: ["Audio processing", "Sound recording", "Digital music", "Data logging", "Synthesizers"],
      pt: ["Processamento de áudio", "Gravação de som", "Música digital", "Log de dados", "Sintetizadores"]
    },
    features: {
      es: ["Bus I2S", "Slot SD", "DAC integrado", "ARM 32-bit", "Audio digital"],
      en: ["I2S bus", "SD slot", "Integrated DAC", "32-bit ARM", "Digital audio"],
      pt: ["Bus I2S", "Slot SD", "DAC integrado", "ARM 32-bit", "Áudio digital"]
    }
  },
  {
    id: "portenta-h7",
    name: "Arduino Portenta H7",
    microcontroller: "STM32H747XI dual-core",
    architecture: "ARM Cortex-M7/M4",
    flashMemory: "18 MB (2 MB interno + 16 MB externo)",
    sram: "8 MB (externo)",
    eeprom: "0",
    clockSpeed: "480 MHz",
    operatingVoltage: "3.3 V",
    inputVoltage: "5 V",
    digitalIO: "14 (12 PWM)",
    analogIO: "6 (1 DAC)",
    communication: "UART, SPI, I2C, USB, Ethernet",
    usb: "USB-C",
    dimensions: "61.5 x 25 mm",
    officialLink: "https://store.arduino.cc/products/portenta-h7",
    pdf: "https://docs.arduino.cc/resources/datasheets/ABX00042-ABX00045-ABX00046-datasheet.pdf",
    image: "/static/images/arduino-portenta.jpg",
    description: {
      es: "La placa Arduino más potente con procesador dual-core y capacidades industriales. Diseñada para aplicaciones profesionales de alta demanda y IoT industrial.",
      en: "The most powerful Arduino board with dual-core processor and industrial capabilities. Designed for high-demand professional applications and industrial IoT.",
      pt: "A placa Arduino mais poderosa com processador dual-core e capacidades industriais. Projetada para aplicações profissionais de alta demanda e IoT industrial."
    },
    applications: {
      es: ["IoT industrial", "Machine learning", "Visión artificial", "Edge AI", "Automatización industrial"],
      en: ["Industrial IoT", "Machine learning", "Computer vision", "Edge AI", "Industrial automation"],
      pt: ["IoT industrial", "Aprendizado de máquina", "Visão computacional", "IA de borda", "Automação industrial"]
    },
    features: {
      es: ["Dual-core", "480MHz", "18MB memoria", "Ethernet", "Nivel industrial"],
      en: ["Dual-core", "480MHz", "18MB memory", "Ethernet", "Industrial grade"],
      pt: ["Dual-core", "480MHz", "18MB memória", "Ethernet", "Grau industrial"]
    }
  },
  {
    id: "esp32",
    name: "ESP32 DevKit V1",
    microcontroller: "ESP32",
    architecture: "Xtensa Dual Core LX6 32-bit",
    flashMemory: "4 MB",
    sram: "520 KB",
    eeprom: "N/A (Flash emulation)",
    clockSpeed: "240 MHz",
    operatingVoltage: "3.3 V",
    inputVoltage: "5 V (USB), 3.3-5 V (Vin)",
    digitalIO: "36",
    analogIO: "18 (2 DAC)",
    communication: "UART, SPI, I2C, Wi-Fi, Bluetooth, CAN",
    usb: "USB Micro-B",
    dimensions: "55 x 28 mm",
    officialLink: "https://www.espressif.com/en/products/devkits/esp32-devkitc",
    pdf: "https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf",
    image: "/static/images/esp32-devkit.jpg",
    description: {
      es: "Microcontrolador potente con Wi-Fi y Bluetooth integrados. Ideal para proyectos IoT avanzados con conectividad inalámbrica. Ofrece dual core y gran capacidad de procesamiento para aplicaciones complejas.",
      en: "Powerful microcontroller with integrated Wi-Fi and Bluetooth. Ideal for advanced IoT projects with wireless connectivity. Features dual core and high processing capacity for complex applications.",
      pt: "Microcontrolador poderoso com Wi-Fi e Bluetooth integrados. Ideal para projetos IoT avançados com conectividade sem fio. Oferece dual core e grande capacidade de processamento para aplicações complexas."
    },
    applications: {
      es: ["IoT y domótica", "Estaciones meteorológicas", "Control remoto WiFi", "Sistemas de monitoreo", "Drones y robótica avanzada"],
      en: ["IoT and home automation", "Weather stations", "WiFi remote control", "Monitoring systems", "Drones and advanced robotics"],
      pt: ["IoT e domótica", "Estações meteorológicas", "Controle remoto WiFi", "Sistemas de monitoramento", "Drones e robótica avançada"]
    },
    features: {
      es: ["Wi-Fi integrado", "Bluetooth integrado", "Dual core", "Gran memoria", "Múltiples protocolos", "Precio económico"],
      en: ["Integrated Wi-Fi", "Integrated Bluetooth", "Dual core", "Large memory", "Multiple protocols", "Economic price"],
      pt: ["Wi-Fi integrado", "Bluetooth integrado", "Dual core", "Grande memória", "Múltiplos protocolos", "Preço econômico"]
    }
  },
  {
    id: "esp32_s3",
    name: "ESP32-S3 DevKit",
    microcontroller: "ESP32-S3",
    architecture: "Xtensa Dual Core LX7 32-bit",
    flashMemory: "8 MB",
    sram: "512 KB",
    eeprom: "N/A (Flash emulation)",
    clockSpeed: "240 MHz",
    operatingVoltage: "3.3 V",
    inputVoltage: "5 V (USB), 3.3-5 V (Vin)",
    digitalIO: "45",
    analogIO: "20 (2 DAC)",
    communication: "UART, SPI, I2C, Wi-Fi, Bluetooth 5.0, USB OTG",
    usb: "USB-C",
    dimensions: "58 x 31 mm",
    officialLink: "https://www.espressif.com/en/products/devkits/esp32-s3-devkitc-1",
    pdf: "https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf",
    image: "/static/images/esp32-s3.jpg",
    description: {
      es: "Versión mejorada del ESP32 con mejor rendimiento y más memoria. Incluye soporte para USB OTG y Bluetooth 5.0. Ideal para aplicaciones que requieren procesamiento intensivo y conectividad avanzada.",
      en: "Improved version of ESP32 with better performance and more memory. Includes USB OTG and Bluetooth 5.0 support. Ideal for applications requiring intensive processing and advanced connectivity.",
      pt: "Versão melhorada do ESP32 com melhor desempenho e mais memória. Inclui suporte para USB OTG e Bluetooth 5.0. Ideal para aplicações que requerem processamento intensivo e conectividade avançada."
    },
    applications: {
      es: ["IA en el borde", "Visión por computadora", "Audio de alta calidad", "IoT avanzado", "Interfaces touch"],
      en: ["Edge AI", "Computer vision", "High-quality audio", "Advanced IoT", "Touch interfaces"],
      pt: ["IA na borda", "Visão computacional", "Áudio de alta qualidade", "IoT avançado", "Interfaces touch"]
    },
    features: {
      es: ["Mejor rendimiento", "Más memoria", "USB OTG", "Bluetooth 5.0", "AI acelerado", "Pantalla LCD/OLED"],
      en: ["Better performance", "More memory", "USB OTG", "Bluetooth 5.0", "Accelerated AI", "LCD/OLED display"],
      pt: ["Melhor desempenho", "Mais memória", "USB OTG", "Bluetooth 5.0", "IA acelerada", "Display LCD/OLED"]
    }
  },
  {
    id: "esp32_c3",
    name: "ESP32-C3 DevKit",
    microcontroller: "ESP32-C3",
    architecture: "RISC-V Single Core 32-bit",
    flashMemory: "4 MB",
    sram: "400 KB",
    eeprom: "N/A (Flash emulation)",
    clockSpeed: "160 MHz",
    operatingVoltage: "3.3 V",
    inputVoltage: "5 V (USB), 3.3-5 V (Vin)",
    digitalIO: "22",
    analogIO: "6 (0 DAC)",
    communication: "UART, SPI, I2C, Wi-Fi, Bluetooth 5.0",
    usb: "USB-C",
    dimensions: "52 x 25 mm",
    officialLink: "https://www.espressif.com/en/products/devkits/esp32-c3-devkitm-1",
    pdf: "https://www.espressif.com/sites/default/files/documentation/esp32-c3_datasheet_en.pdf",
    image: "/static/images/esp32-c3.jpg",
    description: {
      es: "ESP32 económico basado en arquitectura RISC-V. Mantiene Wi-Fi y Bluetooth pero en un factor de forma más pequeño y precio reducido. Perfecto para aplicaciones IoT de bajo costo.",
      en: "Economic ESP32 based on RISC-V architecture. Maintains Wi-Fi and Bluetooth but in a smaller form factor and reduced price. Perfect for low-cost IoT applications.",
      pt: "ESP32 econômico baseado em arquitetura RISC-V. Mantém Wi-Fi e Bluetooth mas em fator de forma menor e preço reduzido. Perfeito para aplicações IoT de baixo custo."
    },
    applications: {
      es: ["IoT de bajo costo", "Sensores inalámbricos", "Automatización simple", "Wearables", "Beacon Bluetooth"],
      en: ["Low-cost IoT", "Wireless sensors", "Simple automation", "Wearables", "Bluetooth beacon"],
      pt: ["IoT de baixo custo", "Sensores sem fio", "Automação simples", "Wearables", "Beacon Bluetooth"]
    },
    features: {
      es: ["Arquitectura RISC-V", "Bajo costo", "Pequeño tamaño", "Wi-Fi + Bluetooth", "Bajo consumo", "USB-C nativo"],
      en: ["RISC-V architecture", "Low cost", "Small size", "Wi-Fi + Bluetooth", "Low power", "Native USB-C"],
      pt: ["Arquitetura RISC-V", "Baixo custo", "Tamanho pequeno", "Wi-Fi + Bluetooth", "Baixo consumo", "USB-C nativo"]
    }
  },
  {
    id: "raspberry-pi-pico",
    name: "Raspberry Pi Pico",
    microcontroller: "RP2040",
    architecture: "ARM Cortex-M0+",
    flashMemory: "2 MB",
    sram: "264 KB",
    eeprom: "0",
    clockSpeed: "133 MHz",
    operatingVoltage: "3.3 V",
    inputVoltage: "5 V (USB), 1.8-5.5 V (VSYS)",
    digitalIO: "30 (16 PWM)",
    analogIO: "4 (0 DAC)",
    communication: "UART, SPI, I2C, USB",
    usb: "Micro USB",
    dimensions: "51 x 21 mm",
    officialLink: "https://www.raspberrypi.org/products/raspberry-pi-pico/",
    pdf: "https://datasheets.raspberrypi.org/pico/pico-datasheet.pdf",
    image: "/static/images/raspberry-pi-pico.jpg",
    description: {
      es: "Microcontrolador de bajo costo de Raspberry Pi con arquitectura ARM dual-core. Excelente rendimiento y características únicas como PIO para protocolos personalizados.",
      en: "Low-cost microcontroller from Raspberry Pi with dual-core ARM architecture. Excellent performance and unique features like PIO for custom protocols.",
      pt: "Microcontrolador de baixo custo da Raspberry Pi com arquitetura ARM dual-core. Excelente desempenho e recursos únicos como PIO para protocolos personalizados."
    },
    applications: {
      es: ["Robótica educativa", "Protocolos personalizados", "Control de motores", "Interfaces HID", "Procesamiento de señales"],
      en: ["Educational robotics", "Custom protocols", "Motor control", "HID interfaces", "Signal processing"],
      pt: ["Robótica educacional", "Protocolos personalizados", "Controle de motores", "Interfaces HID", "Processamento de sinais"]
    },
    features: {
      es: ["Dual-core ARM", "PIO state machines", "133MHz", "30 GPIO", "Muy económico", "MicroPython/C++"],
      en: ["Dual-core ARM", "PIO state machines", "133MHz", "30 GPIO", "Very affordable", "MicroPython/C++"],
      pt: ["ARM dual-core", "Máquinas de estado PIO", "133MHz", "30 GPIO", "Muito acessível", "MicroPython/C++"]
    }
  },
  {
    id: "stm32-blue-pill",
    name: "STM32F103C8T6 (Blue Pill)",
    microcontroller: "STM32F103C8T6",
    architecture: "ARM Cortex-M3",
    flashMemory: "64 KB",
    sram: "20 KB",
    eeprom: "0 (EEPROM emulada)",
    clockSpeed: "72 MHz",
    operatingVoltage: "3.3 V",
    inputVoltage: "3.3-5 V",
    digitalIO: "37 (20 PWM)",
    analogIO: "16 (0 DAC)",
    communication: "UART, SPI, I2C, USB, CAN",
    usb: "Micro USB (con bootloader)",
    dimensions: "52 x 22 mm",
    officialLink: "https://www.st.com/en/microcontrollers-microprocessors/stm32f103c8.html",
    pdf: "https://www.st.com/resource/en/datasheet/stm32f103c8.pdf",
    image: "/static/images/stm32-blue-pill.jpg",
    description: {
      es: "Microcontrolador ARM de 32 bits muy económico con excelente rendimiento. Popular en la comunidad maker por su bajo costo y alta capacidad de procesamiento.",
      en: "Very economical 32-bit ARM microcontroller with excellent performance. Popular in the maker community for its low cost and high processing capacity.",
      pt: "Microcontrolador ARM de 32 bits muito econômico com excelente desempenho. Popular na comunidade maker por seu baixo custo e alta capacidade de processamento."
    },
    applications: {
      es: ["Proyectos ARM económicos", "Control industrial", "Comunicación CAN", "Procesamiento rápido", "Sistemas embebidos"],
      en: ["Budget ARM projects", "Industrial control", "CAN communication", "Fast processing", "Embedded systems"],
      pt: ["Projetos ARM econômicos", "Controle industrial", "Comunicação CAN", "Processamento rápido", "Sistemas embarcados"]
    },
    features: {
      es: ["ARM 32-bit", "72MHz", "Muy económico", "37 GPIO", "Comunicación CAN", "ST-Link compatible"],
      en: ["32-bit ARM", "72MHz", "Very economical", "37 GPIO", "CAN communication", "ST-Link compatible"],
      pt: ["ARM 32-bit", "72MHz", "Muito econômico", "37 GPIO", "Comunicação CAN", "Compatível ST-Link"]
    }
  },
  {
    id: "teensy-4",
    name: "Teensy 4.0",
    microcontroller: "IMXRT1062",
    architecture: "ARM Cortex-M7",
    flashMemory: "2 MB",
    sram: "1024 KB",
    eeprom: "1080 bytes (emulada)",
    clockSpeed: "600 MHz",
    operatingVoltage: "3.3 V",
    inputVoltage: "3.6-5.5 V",
    digitalIO: "40 (35 PWM)",
    analogIO: "14 (2 DAC)",
    communication: "UART, SPI, I2C, USB",
    usb: "Micro USB",
    dimensions: "35.6 x 17.8 mm",
    officialLink: "https://www.pjrc.com/store/teensy40.html",
    pdf: "https://www.pjrc.com/teensy/pinout.html",
    image: "/static/images/teensy-4.jpg",
    description: {
      es: "El microcontrolador más rápido compatible con Arduino IDE. Diseñado para aplicaciones de alto rendimiento que requieren velocidad extrema y procesamiento en tiempo real.",
      en: "The fastest microcontroller compatible with Arduino IDE. Designed for high-performance applications requiring extreme speed and real-time processing.",
      pt: "O microcontrolador mais rápido compatível com Arduino IDE. Projetado para aplicações de alto desempenho que requerem velocidade extrema e processamento em tempo real."
    },
    applications: {
      es: ["Audio profesional", "Procesamiento DSP", "Control de alta velocidad", "Instrumentación", "Sistemas críticos"],
      en: ["Professional audio", "DSP processing", "High-speed control", "Instrumentation", "Critical systems"],
      pt: ["Áudio profissional", "Processamento DSP", "Controle de alta velocidade", "Instrumentação", "Sistemas críticos"]
    },
    features: {
      es: ["600MHz ARM", "1MB SRAM", "USB nativo", "Audio library", "Floating point", "DMA avanzado"],
      en: ["600MHz ARM", "1MB SRAM", "Native USB", "Audio library", "Floating point", "Advanced DMA"],
      pt: ["ARM 600MHz", "1MB SRAM", "USB nativo", "Biblioteca de áudio", "Ponto flutuante", "DMA avançado"]
    }
  },
  {
    id: "micro-bit",
    name: "BBC micro:bit v2",
    microcontroller: "nRF52833",
    architecture: "ARM Cortex-M4",
    flashMemory: "512 KB",
    sram: "128 KB",
    eeprom: "0",
    clockSpeed: "64 MHz",
    operatingVoltage: "3.3 V",
    inputVoltage: "3.3 V (batería), 5 V (USB)",
    digitalIO: "25 (3 PWM)",
    analogIO: "6 (0 DAC)",
    communication: "UART, SPI, I2C, Bluetooth, Radio",
    usb: "Micro USB",
    dimensions: "52 x 42 mm",
    officialLink: "https://microbit.org/",
    pdf: "https://tech.microbit.org/hardware/schematic/",
    image: "/static/images/microbit-v2.jpg",
    description: {
      es: "Microcontrolador educativo con pantalla LED integrada, sensores y Bluetooth. Diseñado específicamente para enseñanza de programación a niños y principiantes.",
      en: "Educational microcontroller with integrated LED display, sensors, and Bluetooth. Specifically designed for teaching programming to children and beginners.",
      pt: "Microcontrolador educacional com display LED integrado, sensores e Bluetooth. Projetado especificamente para ensinar programação a crianças e iniciantes."
    },
    applications: {
      es: ["Educación STEM", "Juegos interactivos", "Wearables simples", "Sensores básicos", "Robótica educativa"],
      en: ["STEM education", "Interactive games", "Simple wearables", "Basic sensors", "Educational robotics"],
      pt: ["Educação STEM", "Jogos interativos", "Wearables simples", "Sensores básicos", "Robótica educacional"]
    },
    features: {
      es: ["Pantalla LED 5x5", "Bluetooth", "Sensores integrados", "Botones", "Programación visual", "Radio 2.4GHz"],
      en: ["5x5 LED display", "Bluetooth", "Integrated sensors", "Buttons", "Visual programming", "2.4GHz radio"],
      pt: ["Display LED 5x5", "Bluetooth", "Sensores integrados", "Botões", "Programação visual", "Rádio 2.4GHz"]
    }
  }
]

// Comparaciones y diferencias entre microcontroladores
export interface MicrocontrollerComparison {
  id: string
  title: {
    es: string
    en: string
    pt: string
  }
  boards: string[] // IDs de las placas a comparar
  categories: {
    performance: {
      es: string
      en: string
      pt: string
    }
    connectivity: {
      es: string
      en: string
      pt: string
    }
    cost: {
      es: string
      en: string
      pt: string
    }
    usability: {
      es: string
      en: string
      pt: string
    }
    applications: {
      es: string
      en: string
      pt: string
    }
  }
  conclusion: {
    es: string
    en: string
    pt: string
  }
}

export const MICROCONTROLLER_COMPARISONS: MicrocontrollerComparison[] = [
  {
    id: "esp32-vs-arduino-uno",
    title: {
      es: "Diferencia entre ESP32 y Arduino Uno",
      en: "Difference between ESP32 and Arduino Uno",
      pt: "Diferença entre ESP32 e Arduino Uno"
    },
    boards: ["esp32-devkit", "uno"],
    categories: {
      performance: {
        es: "ESP32 es significativamente superior con procesador dual-core a 240MHz vs 16MHz del Arduino Uno, más memoria RAM (520KB vs 2KB) y flash (4MB vs 32KB).",
        en: "ESP32 is significantly superior with dual-core processor at 240MHz vs Arduino Uno's 16MHz, more RAM (520KB vs 2KB) and flash memory (4MB vs 32KB).",
        pt: "ESP32 é significativamente superior com processador dual-core a 240MHz vs 16MHz do Arduino Uno, mais RAM (520KB vs 2KB) e memória flash (4MB vs 32KB)."
      },
      connectivity: {
        es: "ESP32 incluye Wi-Fi y Bluetooth nativos, mientras Arduino Uno requiere módulos externos para conectividad inalámbrica.",
        en: "ESP32 includes native Wi-Fi and Bluetooth, while Arduino Uno requires external modules for wireless connectivity.",
        pt: "ESP32 inclui Wi-Fi e Bluetooth nativos, enquanto Arduino Uno requer módulos externos para conectividade sem fio."
      },
      cost: {
        es: "Ambos tienen precios similares, pero ESP32 ofrece mucho más valor por el dinero con sus características adicionales.",
        en: "Both have similar prices, but ESP32 offers much more value for money with its additional features.",
        pt: "Ambos têm preços similares, mas ESP32 oferece muito mais valor pelo dinheiro com suas características adicionais."
      },
      usability: {
        es: "Arduino Uno es más fácil para principiantes con documentación extensa. ESP32 requiere más conocimiento pero es compatible con Arduino IDE.",
        en: "Arduino Uno is easier for beginners with extensive documentation. ESP32 requires more knowledge but is compatible with Arduino IDE.",
        pt: "Arduino Uno é mais fácil para iniciantes com documentação extensa. ESP32 requer mais conhecimento mas é compatível com Arduino IDE."
      },
      applications: {
        es: "Arduino Uno ideal para aprendizaje y proyectos básicos. ESP32 perfecto para IoT, aplicaciones web y proyectos avanzados.",
        en: "Arduino Uno ideal for learning and basic projects. ESP32 perfect for IoT, web applications and advanced projects.",
        pt: "Arduino Uno ideal para aprendizado e projetos básicos. ESP32 perfeito para IoT, aplicações web e projetos avançados."
      }
    },
    conclusion: {
      es: "Elige Arduino Uno para aprender programación básica y proyectos educativos. Elige ESP32 para proyectos IoT, aplicaciones con conectividad y cuando necesites mayor potencia de procesamiento.",
      en: "Choose Arduino Uno for learning basic programming and educational projects. Choose ESP32 for IoT projects, connectivity applications and when you need more processing power.",
      pt: "Escolha Arduino Uno para aprender programação básica e projetos educacionais. Escolha ESP32 para projetos IoT, aplicações com conectividade e quando precisar de mais poder de processamento."
    }
  },
  {
    id: "esp32-vs-esp8266",
    title: {
      es: "ESP32 vs ESP8266: ¿Cuál elegir?",
      en: "ESP32 vs ESP8266: Which to choose?",
      pt: "ESP32 vs ESP8266: Qual escolher?"
    },
    boards: ["esp32-devkit", "esp8266-nodemcu"],
    categories: {
      performance: {
        es: "ESP32 tiene procesador dual-core a 240MHz vs single-core 160MHz del ESP8266. ESP32 tiene más RAM (520KB vs 160KB) y más GPIO (34 vs 17).",
        en: "ESP32 has dual-core processor at 240MHz vs ESP8266's single-core 160MHz. ESP32 has more RAM (520KB vs 160KB) and more GPIO (34 vs 17).",
        pt: "ESP32 tem processador dual-core a 240MHz vs single-core 160MHz do ESP8266. ESP32 tem mais RAM (520KB vs 160KB) e mais GPIO (34 vs 17)."
      },
      connectivity: {
        es: "Ambos tienen Wi-Fi, pero ESP32 adiciona Bluetooth Classic e BLE. ESP32 es más versátil para diferentes tipos de conectividad.",
        en: "Both have Wi-Fi, but ESP32 adds Bluetooth Classic and BLE. ESP32 is more versatile for different types of connectivity.",
        pt: "Ambos têm Wi-Fi, mas ESP32 adiciona Bluetooth Classic e BLE. ESP32 é mais versátil para diferentes tipos de conectividade."
      },
      cost: {
        es: "ESP8266 es más económico (~$3-5) vs ESP32 (~$5-8). Para proyectos con presupuesto limitado, ESP8266 es mejor opción.",
        en: "ESP8266 is more economical (~$3-5) vs ESP32 (~$5-8). For budget-limited projects, ESP8266 is the better option.",
        pt: "ESP8266 é mais econômico (~$3-5) vs ESP32 (~$5-8). Para projetos com orçamento limitado, ESP8266 é a melhor opção."
      },
      usability: {
        es: "ESP8266 consume menos energía en modo sleep. ESP32 tiene más periféricos y capacidades, pero es más complejo de usar.",
        en: "ESP8266 consumes less power in sleep mode. ESP32 has more peripherals and capabilities, but is more complex to use.",
        pt: "ESP8266 consome menos energia em modo sleep. ESP32 tem mais periféricos e capacidades, mas é mais complexo de usar."
      },
      applications: {
        es: "ESP8266 ideal para sensores IoT simples y aplicaciones de bajo consumo. ESP32 mejor para aplicaciones complejas, Bluetooth y múltiples sensores.",
        en: "ESP8266 ideal for simple IoT sensors and low-power applications. ESP32 better for complex applications, Bluetooth and multiple sensors.",
        pt: "ESP8266 ideal para sensores IoT simples e aplicações de baixo consumo. ESP32 melhor para aplicações complexas, Bluetooth e múltiplos sensores."
      }
    },
    conclusion: {
      es: "Usa ESP8266 para proyectos IoT simples, económicos y de bajo consumo. Usa ESP32 cuando necesites Bluetooth, más GPIO, mayor potencia de procesamiento o aplicaciones complejas.",
      en: "Use ESP8266 for simple, economical and low-power IoT projects. Use ESP32 when you need Bluetooth, more GPIO, higher processing power or complex applications.",
      pt: "Use ESP8266 para projetos IoT simples, econômicos e de baixo consumo. Use ESP32 quando precisar de Bluetooth, mais GPIO, maior poder de processamento ou aplicações complexas."
    }
  },
  {
    id: "raspberry-pi-pico-vs-arduino-nano",
    title: {
      es: "Raspberry Pi Pico vs Arduino Nano",
      en: "Raspberry Pi Pico vs Arduino Nano",
      pt: "Raspberry Pi Pico vs Arduino Nano"
    },
    boards: ["raspberry-pi-pico", "nano"],
    categories: {
      performance: {
        es: "Pico superior con ARM dual-core 133MHz y 264KB RAM vs Nano con 16MHz y 2KB RAM. Pico tiene características únicas como PIO state machines.",
        en: "Pico superior with dual-core ARM 133MHz and 264KB RAM vs Nano with 16MHz and 2KB RAM. Pico has unique features like PIO state machines.",
        pt: "Pico superior com ARM dual-core 133MHz e 264KB RAM vs Nano com 16MHz e 2KB RAM. Pico tem características únicas como máquinas de estado PIO."
      },
      connectivity: {
        es: "Nano tiene conectividad básica (UART, SPI, I2C). Pico igual conectividad básica pero con USB nativo más robusto.",
        en: "Nano has basic connectivity (UART, SPI, I2C). Pico same basic connectivity but with more robust native USB.",
        pt: "Nano tem conectividade básica (UART, SPI, I2C). Pico mesma conectividade básica mas com USB nativo mais robusto."
      },
      cost: {
        es: "Precios similares (~$4-6), pero Pico ofrece mejor relación precio-rendimiento con características ARM modernas.",
        en: "Similar prices (~$4-6), but Pico offers better price-performance ratio with modern ARM features.",
        pt: "Preços similares (~$4-6), mas Pico oferece melhor relação preço-desempenho com características ARM modernas."
      },
      usability: {
        es: "Nano más maduro con ecosistema Arduino establecido. Pico soporta MicroPython y C++, más flexible en lenguajes de programación.",
        en: "Nano more mature with established Arduino ecosystem. Pico supports MicroPython and C++, more flexible in programming languages.",
        pt: "Nano mais maduro com ecossistema Arduino estabelecido. Pico suporta MicroPython e C++, mais flexível em linguagens de programação."
      },
      applications: {
        es: "Nano ideal para proyectos compactos tradicionales. Pico mejor para aplicaciones que requieren procesamiento rápido, protocolos personalizados o MicroPython.",
        en: "Nano ideal for traditional compact projects. Pico better for applications requiring fast processing, custom protocols or MicroPython.",
        pt: "Nano ideal para projetos compactos tradicionais. Pico melhor para aplicações que requerem processamento rápido, protocolos personalizados ou MicroPython."
      }
    },
    conclusion: {
      es: "Elige Nano si prefieres el ecosistema Arduino tradicional y shields compatibles. Elige Pico para mayor rendimiento, MicroPython o aplicaciones que requieran protocolos personalizados.",
      en: "Choose Nano if you prefer traditional Arduino ecosystem and compatible shields. Choose Pico for higher performance, MicroPython or applications requiring custom protocols.",
      pt: "Escolha Nano se preferir o ecossistema Arduino tradicional e shields compatíveis. Escolha Pico para maior desempenho, MicroPython ou aplicações que requeiram protocolos personalizados."
    }
  }
]
