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
  }
]
