import { VoltageRegulatorComponent } from './types';

export const VOLTAGE_REGULATORS: VoltageRegulatorComponent[] = [
  // LM317T - Regulador de voltaje lineal ajustable
  {
    url: 'lm317t',
    category: 'voltage-regulators',
    partNumber: 'LM317T',
    manufacturer: 'Texas Instruments',
    series: 'LM317',
    datasheet: '/static/images/lm317t.jpg',
    pdf: 'https://www.ti.com/lit/ds/symlink/lm317.pdf',
    outputVoltage: '1.2V - 37V (adjustable)',
    maxCurrent: '1.5A',
    regulatorType: 'linear',
    packageType: 'TO-220',
    dropout: '2V',
    alternatives: ['LM317', 'LM317K', 'LM317L', 'LM317M', 'L200'],
    translations: {
      es: {
        label: 'Regulador LM317T',
        heading: 'Regulador de Voltaje Lineal Ajustable LM317T',
        description: 'El LM317T es un regulador de voltaje lineal ajustable de tres terminales capaz de suministrar más de 1.5A en un rango de voltaje de salida de 1.2V a 37V. Requiere solo dos resistencias externas para configurar el voltaje de salida.',
        configuration: '3 terminales: IN, OUT, ADJ',
        type: 'Regulador lineal positivo ajustable',
        applications: [
          'Fuentes de alimentación reguladas',
          'Cargadores de baterías',
          'Reguladores de voltaje de precisión',
          'Sistemas de alimentación de laboratorio',
          'Amplificadores de audio',
          'Reguladores de corriente constante'
        ],
        technicalSpecs: {
          operatingVoltage: '1.2V - 37V (salida)',
          maxCurrent: '1.5A',
          temperature: '-55°C a +150°C',
          packageType: 'TO-220',
          dropout: '2V típico',
          regulation: '0.01% típico',
          rippleRejection: '80dB típico'
        },
        pinout: {
          description: 'Configuración de pines del regulador LM317T en encapsulado TO-220',
          pins: [
            { number: 1, name: 'ADJ', function: 'Terminal de ajuste (Adjust)' },
            { number: 2, name: 'OUT', function: 'Voltaje de salida (Output)' },
            { number: 3, name: 'IN', function: 'Voltaje de entrada (Input)' }
          ]
        }
      },
      en: {
        label: 'LM317T Regulator',
        heading: 'LM317T Adjustable Linear Voltage Regulator',
        description: 'The LM317T is a three-terminal adjustable linear voltage regulator capable of supplying more than 1.5A over an output voltage range of 1.2V to 37V. It requires only two external resistors to set the output voltage.',
        configuration: '3 terminals: IN, OUT, ADJ',
        type: 'Positive adjustable linear regulator',
        applications: [
          'Regulated power supplies',
          'Battery chargers',
          'Precision voltage regulators',
          'Laboratory power systems',
          'Audio amplifiers',
          'Constant current regulators'
        ],
        technicalSpecs: {
          operatingVoltage: '1.2V - 37V (output)',
          maxCurrent: '1.5A',
          temperature: '-55°C to +150°C',
          packageType: 'TO-220',
          dropout: '2V typical',
          regulation: '0.01% typical',
          rippleRejection: '80dB typical'
        },
        pinout: {
          description: 'Pin configuration of LM317T regulator in TO-220 package',
          pins: [
            { number: 1, name: 'ADJ', function: 'Adjust terminal' },
            { number: 2, name: 'OUT', function: 'Output voltage' },
            { number: 3, name: 'IN', function: 'Input voltage' }
          ]
        }
      },
      pt: {
        label: 'Regulador LM317T',
        heading: 'Regulador de Tensão Linear Ajustável LM317T',
        description: 'O LM317T é um regulador de tensão linear ajustável de três terminais capaz de fornecer mais de 1.5A em uma faixa de tensão de saída de 1.2V a 37V. Requer apenas dois resistores externos para configurar a tensão de saída.',
        configuration: '3 terminais: IN, OUT, ADJ',
        type: 'Regulador linear positivo ajustável',
        applications: [
          'Fontes de alimentação reguladas',
          'Carregadores de bateria',
          'Reguladores de tensão de precisão',
          'Sistemas de alimentação de laboratório',
          'Amplificadores de áudio',
          'Reguladores de corrente constante'
        ],
        technicalSpecs: {
          operatingVoltage: '1.2V - 37V (saída)',
          maxCurrent: '1.5A',
          temperature: '-55°C a +150°C',
          packageType: 'TO-220',
          dropout: '2V típico',
          regulation: '0.01% típico',
          rippleRejection: '80dB típico'
        },
        pinout: {
          description: 'Configuração de pinos do regulador LM317T em encapsulamento TO-220',
          pins: [
            { number: 1, name: 'ADJ', function: 'Terminal de ajuste (Adjust)' },
            { number: 2, name: 'OUT', function: 'Tensão de saída (Output)' },
            { number: 3, name: 'IN', function: 'Tensão de entrada (Input)' }
          ]
        }
      }
    }
  },

  // LM337T - Regulador de voltaje lineal ajustable negativo
  {
    url: 'lm337t',
    category: 'voltage-regulators',
    partNumber: 'LM337T',
    manufacturer: 'Texas Instruments',
    series: 'LM337',
    datasheet: '/static/images/lm337t.jpg',
    pdf: 'https://www.ti.com/lit/ds/symlink/lm337.pdf',
    outputVoltage: '-1.2V to -37V (adjustable)',
    maxCurrent: '1.5A',
    regulatorType: 'linear',
    packageType: 'TO-220',
    dropout: '2V',
    alternatives: ['LM337', 'LM337K', 'LM337L'],
    translations: {
      es: {
        label: 'Regulador LM337T',
        heading: 'Regulador de Voltaje Lineal Ajustable Negativo LM337T',
        description: 'El LM337T es un regulador de voltaje lineal ajustable negativo de tres terminales, complementario del LM317T. Capaz de suministrar más de 1.5A en un rango de voltaje de salida de -1.2V a -37V.',
        configuration: '3 terminales: IN, OUT, ADJ',
        type: 'Regulador lineal negativo ajustable',
        applications: [
          'Fuentes de alimentación duales',
          'Amplificadores operacionales',
          'Sistemas de audio',
          'Fuentes de laboratorio',
          'Referencias de voltaje negativas'
        ],
        technicalSpecs: {
          operatingVoltage: '-1.2V a -37V (salida)',
          maxCurrent: '1.5A',
          temperature: '-55°C a +150°C',
          packageType: 'TO-220',
          dropout: '2V típico',
          regulation: '0.01% típico',
          rippleRejection: '80dB típico'
        },
        pinout: {
          description: 'Configuración de pines del regulador LM337T en encapsulado TO-220',
          pins: [
            { number: 1, name: 'ADJ', function: 'Terminal de ajuste (Adjust)' },
            { number: 2, name: 'OUT', function: 'Voltaje de salida negativo' },
            { number: 3, name: 'IN', function: 'Voltaje de entrada negativo' }
          ]
        }
      },
      en: {
        label: 'LM337T Regulator',
        heading: 'LM337T Adjustable Negative Linear Voltage Regulator',
        description: 'The LM337T is a three-terminal adjustable negative linear voltage regulator, complementary to the LM317T. Capable of supplying more than 1.5A over an output voltage range of -1.2V to -37V.',
        configuration: '3 terminals: IN, OUT, ADJ',
        type: 'Negative adjustable linear regulator',
        applications: [
          'Dual power supplies',
          'Operational amplifiers',
          'Audio systems',
          'Laboratory supplies',
          'Negative voltage references'
        ],
        technicalSpecs: {
          operatingVoltage: '-1.2V to -37V (output)',
          maxCurrent: '1.5A',
          temperature: '-55°C to +150°C',
          packageType: 'TO-220',
          dropout: '2V typical',
          regulation: '0.01% typical',
          rippleRejection: '80dB typical'
        },
        pinout: {
          description: 'Pin configuration of LM337T regulator in TO-220 package',
          pins: [
            { number: 1, name: 'ADJ', function: 'Adjust terminal' },
            { number: 2, name: 'OUT', function: 'Negative output voltage' },
            { number: 3, name: 'IN', function: 'Negative input voltage' }
          ]
        }
      },
      pt: {
        label: 'Regulador LM337T',
        heading: 'Regulador de Tensão Linear Ajustável Negativo LM337T',
        description: 'O LM337T é um regulador de tensão linear ajustável negativo de três terminais, complementar ao LM317T. Capaz de fornecer mais de 1.5A em uma faixa de tensão de saída de -1.2V a -37V.',
        configuration: '3 terminais: IN, OUT, ADJ',
        type: 'Regulador linear negativo ajustável',
        applications: [
          'Fontes de alimentação duais',
          'Amplificadores operacionais',
          'Sistemas de áudio',
          'Fontes de laboratório',
          'Referências de tensão negativas'
        ],
        technicalSpecs: {
          operatingVoltage: '-1.2V a -37V (saída)',
          maxCurrent: '1.5A',
          temperature: '-55°C a +150°C',
          packageType: 'TO-220',
          dropout: '2V típico',
          regulation: '0.01% típico',
          rippleRejection: '80dB típico'
        },
        pinout: {
          description: 'Configuração de pinos do regulador LM337T em encapsulamento TO-220',
          pins: [
            { number: 1, name: 'ADJ', function: 'Terminal de ajuste (Adjust)' },
            { number: 2, name: 'OUT', function: 'Tensão de saída negativa' },
            { number: 3, name: 'IN', function: 'Tensão de entrada negativa' }
          ]
        }
      }
    }
  },

  // LM7805 - Regulador fijo de 5V
  {
    url: 'lm7805',
    category: 'voltage-regulators',
    partNumber: 'LM7805',
    manufacturer: 'Texas Instruments',
    series: '78xx',
    datasheet: '/static/images/LM7805.jpg',
    pdf: 'https://www.ti.com/lit/ds/symlink/lm7805.pdf',
    outputVoltage: '5V (fixed)',
    maxCurrent: '1A',
    regulatorType: 'linear',
    packageType: 'TO-220',
    dropout: '2V',
    alternatives: ['78L05', '7805', 'MC7805', 'L7805'],
    translations: {
      es: {
        label: 'Regulador LM7805',
        heading: 'Regulador de Voltaje Lineal Fijo LM7805 (+5V)',
        description: 'El LM7805 es un regulador de voltaje lineal fijo de tres terminales que proporciona una salida estable de +5V con una corriente máxima de 1A. Es ampliamente utilizado en sistemas digitales y circuitos lógicos.',
        configuration: '3 terminales: IN, GND, OUT',
        type: 'Regulador lineal positivo fijo',
        applications: [
          'Sistemas digitales',
          'Microcontroladores',
          'Circuitos lógicos TTL',
          'Sistemas embebidos',
          'Fuentes de alimentación de 5V',
          'Proyectos con Arduino'
        ],
        technicalSpecs: {
          operatingVoltage: '5V ±4% (salida)',
          maxCurrent: '1A',
          temperature: '0°C a +125°C',
          packageType: 'TO-220',
          dropout: '2V típico',
          regulation: '4% máximo',
          rippleRejection: '62dB típico'
        },
        pinout: {
          description: 'Configuración de pines del regulador LM7805 en encapsulado TO-220',
          pins: [
            { number: 1, name: 'IN', function: 'Voltaje de entrada (7V-35V)' },
            { number: 2, name: 'GND', function: 'Tierra (Ground)' },
            { number: 3, name: 'OUT', function: 'Voltaje de salida (+5V)' }
          ]
        }
      },
      en: {
        label: 'LM7805 Regulator',
        heading: 'LM7805 Fixed Linear Voltage Regulator (+5V)',
        description: 'The LM7805 is a three-terminal fixed linear voltage regulator that provides a stable +5V output with a maximum current of 1A. It is widely used in digital systems and logic circuits.',
        configuration: '3 terminals: IN, GND, OUT',
        type: 'Positive fixed linear regulator',
        applications: [
          'Digital systems',
          'Microcontrollers',
          'TTL logic circuits',
          'Embedded systems',
          '5V power supplies',
          'Arduino projects'
        ],
        technicalSpecs: {
          operatingVoltage: '5V ±4% (output)',
          maxCurrent: '1A',
          temperature: '0°C to +125°C',
          packageType: 'TO-220',
          dropout: '2V typical',
          regulation: '4% maximum',
          rippleRejection: '62dB typical'
        },
        pinout: {
          description: 'Pin configuration of LM7805 regulator in TO-220 package',
          pins: [
            { number: 1, name: 'IN', function: 'Input voltage (7V-35V)' },
            { number: 2, name: 'GND', function: 'Ground' },
            { number: 3, name: 'OUT', function: 'Output voltage (+5V)' }
          ]
        }
      },
      pt: {
        label: 'Regulador LM7805',
        heading: 'Regulador de Tensão Linear Fixo LM7805 (+5V)',
        description: 'O LM7805 é um regulador de tensão linear fixo de três terminais que fornece uma saída estável de +5V com uma corrente máxima de 1A. É amplamente utilizado em sistemas digitais e circuitos lógicos.',
        configuration: '3 terminais: IN, GND, OUT',
        type: 'Regulador linear positivo fixo',
        applications: [
          'Sistemas digitais',
          'Microcontroladores',
          'Circuitos lógicos TTL',
          'Sistemas embarcados',
          'Fontes de alimentação de 5V',
          'Projetos com Arduino'
        ],
        technicalSpecs: {
          operatingVoltage: '5V ±4% (saída)',
          maxCurrent: '1A',
          temperature: '0°C a +125°C',
          packageType: 'TO-220',
          dropout: '2V típico',
          regulation: '4% máximo',
          rippleRejection: '62dB típico'
        },
        pinout: {
          description: 'Configuração de pinos do regulador LM7805 em encapsulamento TO-220',
          pins: [
            { number: 1, name: 'IN', function: 'Tensão de entrada (7V-35V)' },
            { number: 2, name: 'GND', function: 'Terra (Ground)' },
            { number: 3, name: 'OUT', function: 'Tensão de saída (+5V)' }
          ]
        }
      }
    }
  },

  // LM7812 - Regulador fijo de 12V
  {
    url: 'lm7812',
    category: 'voltage-regulators',
    partNumber: 'LM7812',
    manufacturer: 'Texas Instruments',
    series: '78xx',
    datasheet: '/static/images/lm7812-pinout-equivalent.jpg',
    pdf: 'https://www.ti.com/lit/ds/symlink/lm7812.pdf',
    outputVoltage: '12V (fixed)',
    maxCurrent: '1A',
    regulatorType: 'linear',
    packageType: 'TO-220',
    dropout: '2V',
    alternatives: ['78L12', '7812', 'MC7812', 'L7812'],
    translations: {
      es: {
        label: 'Regulador LM7812',
        heading: 'Regulador de Voltaje Lineal Fijo LM7812 (+12V)',
        description: 'El LM7812 es un regulador de voltaje lineal fijo de tres terminales que proporciona una salida estable de +12V con una corriente máxima de 1A. Ideal para alimentar amplificadores operacionales y circuitos analógicos.',
        configuration: '3 terminales: IN, GND, OUT',
        type: 'Regulador lineal positivo fijo',
        applications: [
          'Amplificadores operacionales',
          'Circuitos analógicos',
          'Motores DC pequeños',
          'Relés y solenoides',
          'Sistemas de audio',
          'LEDs de alta potencia'
        ],
        technicalSpecs: {
          operatingVoltage: '12V ±4% (salida)',
          maxCurrent: '1A',
          temperature: '0°C a +125°C',
          packageType: 'TO-220',
          dropout: '2V típico',
          regulation: '4% máximo',
          rippleRejection: '55dB típico'
        },
        pinout: {
          description: 'Configuración de pines del regulador LM7812 en encapsulado TO-220',
          pins: [
            { number: 1, name: 'IN', function: 'Voltaje de entrada (14V-35V)' },
            { number: 2, name: 'GND', function: 'Tierra (Ground)' },
            { number: 3, name: 'OUT', function: 'Voltaje de salida (+12V)' }
          ]
        }
      },
      en: {
        label: 'LM7812 Regulator',
        heading: 'LM7812 Fixed Linear Voltage Regulator (+12V)',
        description: 'The LM7812 is a three-terminal fixed linear voltage regulator that provides a stable +12V output with a maximum current of 1A. Ideal for powering operational amplifiers and analog circuits.',
        configuration: '3 terminals: IN, GND, OUT',
        type: 'Positive fixed linear regulator',
        applications: [
          'Operational amplifiers',
          'Analog circuits',
          'Small DC motors',
          'Relays and solenoids',
          'Audio systems',
          'High-power LEDs'
        ],
        technicalSpecs: {
          operatingVoltage: '12V ±4% (output)',
          maxCurrent: '1A',
          temperature: '0°C to +125°C',
          packageType: 'TO-220',
          dropout: '2V typical',
          regulation: '4% maximum',
          rippleRejection: '55dB typical'
        },
        pinout: {
          description: 'Pin configuration of LM7812 regulator in TO-220 package',
          pins: [
            { number: 1, name: 'IN', function: 'Input voltage (14V-35V)' },
            { number: 2, name: 'GND', function: 'Ground' },
            { number: 3, name: 'OUT', function: 'Output voltage (+12V)' }
          ]
        }
      },
      pt: {
        label: 'Regulador LM7812',
        heading: 'Regulador de Tensão Linear Fixo LM7812 (+12V)',
        description: 'O LM7812 é um regulador de tensão linear fixo de três terminais que fornece uma saída estável de +12V com uma corrente máxima de 1A. Ideal para alimentar amplificadores operacionais e circuitos analógicos.',
        configuration: '3 terminais: IN, GND, OUT',
        type: 'Regulador linear positivo fixo',
        applications: [
          'Amplificadores operacionais',
          'Circuitos analógicos',
          'Motores DC pequenos',
          'Relés e solenoides',
          'Sistemas de áudio',
          'LEDs de alta potência'
        ],
        technicalSpecs: {
          operatingVoltage: '12V ±4% (saída)',
          maxCurrent: '1A',
          temperature: '0°C a +125°C',
          packageType: 'TO-220',
          dropout: '2V típico',
          regulation: '4% máximo',
          rippleRejection: '55dB típico'
        },
        pinout: {
          description: 'Configuração de pinos do regulador LM7812 em encapsulamento TO-220',
          pins: [
            { number: 1, name: 'IN', function: 'Tensão de entrada (14V-35V)' },
            { number: 2, name: 'GND', function: 'Terra (Ground)' },
            { number: 3, name: 'OUT', function: 'Tensão de saída (+12V)' }
          ]
        }
      }
    }
  },

  // LM2596 - Regulador switching (buck converter)
  {
    url: 'lm2596',
    category: 'voltage-regulators',
    partNumber: 'LM2596',
    manufacturer: 'Texas Instruments',
    series: 'LM259x',
    datasheet: '/static/images/LM2596.jpg',
    pdf: 'https://www.ti.com/lit/ds/symlink/lm2596.pdf',
    outputVoltage: '1.23V - 37V (adjustable)',
    maxCurrent: '3A',
    regulatorType: 'switching',
    packageType: 'TO-220/TO-263',
    alternatives: ['LM2596S', 'LM2596HV', 'MP1584'],
    translations: {
      es: {
        label: 'Regulador LM2596',
        heading: 'Regulador de Voltaje Switching LM2596 (Buck Converter)',
        description: 'El LM2596 es un regulador de voltaje switching (conmutado) step-down de alta eficiencia capaz de manejar hasta 3A de corriente de salida. Ofrece mayor eficiencia que los reguladores lineales tradicionales.',
        configuration: '5 pines: VIN, SW, GND, FB, ON/OFF',
        type: 'Regulador switching step-down (Buck)',
        applications: [
          'Fuentes de alimentación eficientes',
          'Sistemas de batería',
          'Aplicaciones automotrices',
          'Dispositivos portátiles',
          'Conversores DC-DC',
          'Sistemas de alimentación industrial'
        ],
        technicalSpecs: {
          operatingVoltage: '4.5V - 40V (entrada)',
          maxCurrent: '3A',
          temperature: '-40°C a +125°C',
          packageType: 'TO-220-5, TO-263-5',
          frequency: '150kHz fija',
          efficiency: 'Hasta 92%',
          rippleRejection: 'N/A (switching)'
        },
        pinout: {
          description: 'Configuración de pines del regulador LM2596 en encapsulado TO-220-5',
          pins: [
            { number: 1, name: 'VIN', function: 'Voltaje de entrada (4.5V-40V)' },
            { number: 2, name: 'ON/OFF', function: 'Control de encendido/apagado' },
            { number: 3, name: 'GND', function: 'Tierra (Ground)' },
            { number: 4, name: 'FB', function: 'Realimentación (Feedback)' },
            { number: 5, name: 'SW', function: 'Salida del switch interno' }
          ]
        }
      },
      en: {
        label: 'LM2596 Regulator',
        heading: 'LM2596 Switching Voltage Regulator (Buck Converter)',
        description: 'The LM2596 is a high-efficiency step-down switching voltage regulator capable of handling up to 3A of output current. It offers higher efficiency than traditional linear regulators.',
        configuration: '5 pins: VIN, SW, GND, FB, ON/OFF',
        type: 'Step-down switching regulator (Buck)',
        applications: [
          'Efficient power supplies',
          'Battery systems',
          'Automotive applications',
          'Portable devices',
          'DC-DC converters',
          'Industrial power systems'
        ],
        technicalSpecs: {
          operatingVoltage: '4.5V - 40V (input)',
          maxCurrent: '3A',
          temperature: '-40°C to +125°C',
          packageType: 'TO-220-5, TO-263-5',
          frequency: '150kHz fixed',
          efficiency: 'Up to 92%',
          rippleRejection: 'N/A (switching)'
        },
        pinout: {
          description: 'Pin configuration of LM2596 regulator in TO-220-5 package',
          pins: [
            { number: 1, name: 'VIN', function: 'Input voltage (4.5V-40V)' },
            { number: 2, name: 'ON/OFF', function: 'On/Off control' },
            { number: 3, name: 'GND', function: 'Ground' },
            { number: 4, name: 'FB', function: 'Feedback' },
            { number: 5, name: 'SW', function: 'Switch output' }
          ]
        }
      },
      pt: {
        label: 'Regulador LM2596',
        heading: 'Regulador de Tensão Switching LM2596 (Conversor Buck)',
        description: 'O LM2596 é um regulador de tensão switching step-down de alta eficiência capaz de lidar com até 3A de corrente de saída. Oferece maior eficiência que os reguladores lineares tradicionais.',
        configuration: '5 pinos: VIN, SW, GND, FB, ON/OFF',
        type: 'Regulador switching step-down (Buck)',
        applications: [
          'Fontes de alimentação eficientes',
          'Sistemas de bateria',
          'Aplicações automotivas',
          'Dispositivos portáteis',
          'Conversores DC-DC',
          'Sistemas de alimentação industrial'
        ],
        technicalSpecs: {
          operatingVoltage: '4.5V - 40V (entrada)',
          maxCurrent: '3A',
          temperature: '-40°C a +125°C',
          packageType: 'TO-220-5, TO-263-5',
          frequency: '150kHz fixa',
          efficiency: 'Até 92%',
          rippleRejection: 'N/A (switching)'
        },
        pinout: {
          description: 'Configuração de pinos do regulador LM2596 em encapsulamento TO-220-5',
          pins: [
            { number: 1, name: 'VIN', function: 'Tensão de entrada (4.5V-40V)' },
            { number: 2, name: 'ON/OFF', function: 'Controle liga/desliga' },
            { number: 3, name: 'GND', function: 'Terra (Ground)' },
            { number: 4, name: 'FB', function: 'Realimentação (Feedback)' },
            { number: 5, name: 'SW', function: 'Saída do switch interno' }
          ]
        }
      }
    }
  }
];
