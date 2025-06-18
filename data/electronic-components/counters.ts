import { CounterComponent, LocaleTypes } from './types';

export const COUNTERS: CounterComponent[] = [
  {
    url: '7490',
    category: 'counters',
    counterType: 'BCD',
    modulus: 10,
    bits: 4,
    partNumber: 'SN74LS90',
    manufacturer: 'Texas Instruments',
    series: '74LS',
    datasheet: '/static/images/SN74LS90.jpg',
    pdf: 'https://www.ti.com/lit/ds/symlink/sn74ls90.pdf',
    alternatives: ['74HC4017', '74HC160'],
    translations: {
      es: {
        label: 'Contador SN74LS90 decádico',
        heading: 'Contador decádico (SN74LS90)',
        description: 'El SN74LS90 es un contador decádico (divide entre 10). Consta de cuatro flip-flops maestros-esclavos y lógica para conteo binario/BCD. Ofrece salidas QA...QD; puede obtener una onda cuadrada de 10 (o ciclo de 10) conectando QD a la entrada de reloj. Dispone de reset síncrono y preset. Muy empleado para contadores de dígitos BCD en proyectos didácticos.',
        configuration: '4 salidas BCD, 2 entradas de reloj',
        type: 'Contador BCD (mod-10)',
        applications: [
          'Contadores de dígitos BCD',
          'Divisores de frecuencia',
          'Relojes digitales',
          'Contadores de eventos',
          'Generadores de secuencias'
        ],
        technicalSpecs: {
          operatingVoltage: '4.75V - 5.25V',
          maxCurrent: '0.8mA por entrada',
          frequency: '35MHz máx',
          temperature: '0°C a +70°C',
          packageType: 'DIP-14',
          pinSpacing: '2.54mm',
          propagationDelay: '16ns típico'
        },
        truthTable: [
          { 'Conteo': 0, 'QD': 0, 'QC': 0, 'QB': 0, 'QA': 0 },
          { 'Conteo': 1, 'QD': 0, 'QC': 0, 'QB': 0, 'QA': 1 },
          { 'Conteo': 2, 'QD': 0, 'QC': 0, 'QB': 1, 'QA': 0 },
          { 'Conteo': 3, 'QD': 0, 'QC': 0, 'QB': 1, 'QA': 1 },
          { 'Conteo': 4, 'QD': 0, 'QC': 1, 'QB': 0, 'QA': 0 },
          { 'Conteo': 5, 'QD': 0, 'QC': 1, 'QB': 0, 'QA': 1 },
          { 'Conteo': 6, 'QD': 0, 'QC': 1, 'QB': 1, 'QA': 0 },
          { 'Conteo': 7, 'QD': 0, 'QC': 1, 'QB': 1, 'QA': 1 },
          { 'Conteo': 8, 'QD': 1, 'QC': 0, 'QB': 0, 'QA': 0 },
          { 'Conteo': 9, 'QD': 1, 'QC': 0, 'QB': 0, 'QA': 1 }
        ],
        pinout: {
          description: 'Configuración de pines para SN74LS90 (DIP-14)',
          pins: [
            { number: 1, name: 'CKB', function: 'Entrada de reloj B' },
            { number: 2, name: 'R0(1)', function: 'Reset a 0, entrada 1' },
            { number: 3, name: 'R0(2)', function: 'Reset a 0, entrada 2' },
            { number: 4, name: 'NC', function: 'No conectado' },
            { number: 5, name: 'VCC', function: 'Alimentación (+5V)' },
            { number: 6, name: 'R9(1)', function: 'Reset a 9, entrada 1' },
            { number: 7, name: 'R9(2)', function: 'Reset a 9, entrada 2' },
            { number: 8, name: 'QC', function: 'Salida C (peso 4)' },
            { number: 9, name: 'QB', function: 'Salida B (peso 2)' },
            { number: 10, name: 'GND', function: 'Tierra' },
            { number: 11, name: 'QD', function: 'Salida D (peso 8)' },
            { number: 12, name: 'QA', function: 'Salida A (peso 1)' },
            { number: 13, name: 'NC', function: 'No conectado' },
            { number: 14, name: 'CKA', function: 'Entrada de reloj A' }
          ]
        }
      },
      en: {
        label: 'SN74LS90 decade counter',
        heading: 'Decade counter (SN74LS90)',
        description: 'The SN74LS90 is a decade counter (divide by 10). It consists of four master-slave flip-flops and logic for binary/BCD counting. It provides QA...QD outputs; can obtain a square wave of 10 (or cycle of 10) by connecting QD to the clock input. It has synchronous reset and preset. Widely used for BCD digit counters in educational projects.',
        configuration: '4 BCD outputs, 2 clock inputs',
        type: 'BCD Counter (mod-10)',
        applications: [
          'BCD digit counters',
          'Frequency dividers',
          'Digital clocks',
          'Event counters',
          'Sequence generators'
        ],
        technicalSpecs: {
          operatingVoltage: '4.75V - 5.25V',
          maxCurrent: '0.8mA per input',
          frequency: '35MHz max',
          temperature: '0°C to +70°C',
          packageType: 'DIP-14',
          pinSpacing: '2.54mm',
          propagationDelay: '16ns typical'
        },
        truthTable: [
          { 'Count': 0, 'QD': 0, 'QC': 0, 'QB': 0, 'QA': 0 },
          { 'Count': 1, 'QD': 0, 'QC': 0, 'QB': 0, 'QA': 1 },
          { 'Count': 2, 'QD': 0, 'QC': 0, 'QB': 1, 'QA': 0 },
          { 'Count': 3, 'QD': 0, 'QC': 0, 'QB': 1, 'QA': 1 },
          { 'Count': 4, 'QD': 0, 'QC': 1, 'QB': 0, 'QA': 0 },
          { 'Count': 5, 'QD': 0, 'QC': 1, 'QB': 0, 'QA': 1 },
          { 'Count': 6, 'QD': 0, 'QC': 1, 'QB': 1, 'QA': 0 },
          { 'Count': 7, 'QD': 0, 'QC': 1, 'QB': 1, 'QA': 1 },
          { 'Count': 8, 'QD': 1, 'QC': 0, 'QB': 0, 'QA': 0 },
          { 'Count': 9, 'QD': 1, 'QC': 0, 'QB': 0, 'QA': 1 }
        ],
        pinout: {
          description: 'Pin configuration for SN74LS90 (DIP-14)',
          pins: [
            { number: 1, name: 'CKB', function: 'Clock input B' },
            { number: 2, name: 'R0(1)', function: 'Reset to 0, input 1' },
            { number: 3, name: 'R0(2)', function: 'Reset to 0, input 2' },
            { number: 4, name: 'NC', function: 'Not connected' },
            { number: 5, name: 'VCC', function: 'Power supply (+5V)' },
            { number: 6, name: 'R9(1)', function: 'Reset to 9, input 1' },
            { number: 7, name: 'R9(2)', function: 'Reset to 9, input 2' },
            { number: 8, name: 'QC', function: 'Output C (weight 4)' },
            { number: 9, name: 'QB', function: 'Output B (weight 2)' },
            { number: 10, name: 'GND', function: 'Ground' },
            { number: 11, name: 'QD', function: 'Output D (weight 8)' },
            { number: 12, name: 'QA', function: 'Output A (weight 1)' },
            { number: 13, name: 'NC', function: 'Not connected' },
            { number: 14, name: 'CKA', function: 'Clock input A' }
          ]
        }
      },
      pt: {
        label: 'Contador SN74LS90 por década',
        heading: 'Contador por década (SN74LS90)',
        description: 'O SN74LS90 é um contador por década (divide por 10). Consiste em quatro flip-flops mestre-escravo e lógica para contagem binária/BCD. Fornece saídas QA...QD; pode obter uma onda quadrada de 10 (ou ciclo de 10) conectando QD à entrada de relógio. Tem reset síncrono e preset. Amplamente usado para contadores de dígitos BCD em projetos educacionais.',
        configuration: '4 saídas BCD, 2 entradas de relógio',
        type: 'Contador BCD (mod-10)',
        applications: [
          'Contadores de dígitos BCD',
          'Divisores de frequência',
          'Relógios digitais',
          'Contadores de eventos',
          'Geradores de sequência'
        ],
        technicalSpecs: {
          operatingVoltage: '4.75V - 5.25V',
          maxCurrent: '0.8mA por entrada',
          frequency: '35MHz máx',
          temperature: '0°C a +70°C',
          packageType: 'DIP-14',
          pinSpacing: '2.54mm',
          propagationDelay: '16ns típico'
        },
        truthTable: [
          { 'Contagem': 0, 'QD': 0, 'QC': 0, 'QB': 0, 'QA': 0 },
          { 'Contagem': 1, 'QD': 0, 'QC': 0, 'QB': 0, 'QA': 1 },
          { 'Contagem': 2, 'QD': 0, 'QC': 0, 'QB': 1, 'QA': 0 },
          { 'Contagem': 3, 'QD': 0, 'QC': 0, 'QB': 1, 'QA': 1 },
          { 'Contagem': 4, 'QD': 0, 'QC': 1, 'QB': 0, 'QA': 0 },
          { 'Contagem': 5, 'QD': 0, 'QC': 1, 'QB': 0, 'QA': 1 },
          { 'Contagem': 6, 'QD': 0, 'QC': 1, 'QB': 1, 'QA': 0 },
          { 'Contagem': 7, 'QD': 0, 'QC': 1, 'QB': 1, 'QA': 1 },
          { 'Contagem': 8, 'QD': 1, 'QC': 0, 'QB': 0, 'QA': 0 },
          { 'Contagem': 9, 'QD': 1, 'QC': 0, 'QB': 0, 'QA': 1 }
        ],
        pinout: {
          description: 'Configuração de pinos para SN74LS90 (DIP-14)',
          pins: [
            { number: 1, name: 'CKB', function: 'Entrada de relógio B' },
            { number: 2, name: 'R0(1)', function: 'Reset para 0, entrada 1' },
            { number: 3, name: 'R0(2)', function: 'Reset para 0, entrada 2' },
            { number: 4, name: 'NC', function: 'Não conectado' },
            { number: 5, name: 'VCC', function: 'Alimentação (+5V)' },
            { number: 6, name: 'R9(1)', function: 'Reset para 9, entrada 1' },
            { number: 7, name: 'R9(2)', function: 'Reset para 9, entrada 2' },
            { number: 8, name: 'QC', function: 'Saída C (peso 4)' },
            { number: 9, name: 'QB', function: 'Saída B (peso 2)' },
            { number: 10, name: 'GND', function: 'Terra' },
            { number: 11, name: 'QD', function: 'Saída D (peso 8)' },
            { number: 12, name: 'QA', function: 'Saída A (peso 1)' },
            { number: 13, name: 'NC', function: 'Não conectado' },
            { number: 14, name: 'CKA', function: 'Entrada de relógio A' }
          ]
        }
      }
    }
  },
  {
    url: '7492',
    category: 'counters',
    counterType: 'divide-by-N',
    modulus: 12,
    bits: 4,
    partNumber: 'SN74LS92',
    manufacturer: 'Texas Instruments',
    series: '74LS',
    datasheet: '/static/images/SN74LS92.jpg',
    pdf: 'https://www.ti.com/lit/ds/symlink/sn74ls92.pdf',
    alternatives: ['74HC4040', '74HC4024'],
    translations: {
      es: {
        label: 'Contador SN74LS92 divide-por-12',
        heading: 'Contador divide-por-12 (SN74LS92)',
        description: 'El SN74LS92 es un contador "Divide-By-12" (4 bits). Similar al 74LS90, pero el conteo se reinicia en 12. También cuenta con flip-flops internos y puertos para cascada con otros contadores. Muy utilizado en divisores de frecuencia y contadores modulares.',
        configuration: '4 salidas binarias, 2 entradas de reloj',
        type: 'Contador mod-12',
        applications: [
          'Divisores de frecuencia',
          'Contadores modulares',
          'Sistemas de temporización',
          'Generadores de patrones',
          'Contadores de horas (reloj 12h)'
        ],
        technicalSpecs: {
          operatingVoltage: '4.75V - 5.25V',
          maxCurrent: '0.8mA por entrada',
          frequency: '35MHz máx',
          temperature: '0°C a +70°C',
          packageType: 'DIP-14',
          pinSpacing: '2.54mm',
          propagationDelay: '16ns típico'
        },
        truthTable: [
          { 'Conteo': 0, 'QD': 0, 'QC': 0, 'QB': 0, 'QA': 0 },
          { 'Conteo': 1, 'QD': 0, 'QC': 0, 'QB': 0, 'QA': 1 },
          { 'Conteo': 2, 'QD': 0, 'QC': 0, 'QB': 1, 'QA': 0 },
          { 'Conteo': 3, 'QD': 0, 'QC': 0, 'QB': 1, 'QA': 1 },
          { 'Conteo': 4, 'QD': 0, 'QC': 1, 'QB': 0, 'QA': 0 },
          { 'Conteo': 5, 'QD': 0, 'QC': 1, 'QB': 0, 'QA': 1 },
          { 'Conteo': 6, 'QD': 0, 'QC': 1, 'QB': 1, 'QA': 0 },
          { 'Conteo': 7, 'QD': 0, 'QC': 1, 'QB': 1, 'QA': 1 },
          { 'Conteo': 8, 'QD': 1, 'QC': 0, 'QB': 0, 'QA': 0 },
          { 'Conteo': 9, 'QD': 1, 'QC': 0, 'QB': 0, 'QA': 1 },
          { 'Conteo': 10, 'QD': 1, 'QC': 0, 'QB': 1, 'QA': 0 },
          { 'Conteo': 11, 'QD': 1, 'QC': 0, 'QB': 1, 'QA': 1 }
        ]
      },
      en: {
        label: 'SN74LS92 divide-by-12 counter',
        heading: 'Divide-by-12 counter (SN74LS92)',
        description: 'The SN74LS92 is a "Divide-By-12" counter (4 bits). Similar to the 74LS90, but counting resets at 12. It also has internal flip-flops and ports for cascading with other counters. Widely used in frequency dividers and modular counters.',
        configuration: '4 binary outputs, 2 clock inputs',
        type: 'mod-12 Counter',
        applications: [
          'Frequency dividers',
          'Modular counters',
          'Timing systems',
          'Pattern generators',
          'Hour counters (12h clock)'
        ],
        technicalSpecs: {
          operatingVoltage: '4.75V - 5.25V',
          maxCurrent: '0.8mA per input',
          frequency: '35MHz max',
          temperature: '0°C to +70°C',
          packageType: 'DIP-14',
          pinSpacing: '2.54mm',
          propagationDelay: '16ns typical'
        },
        truthTable: [
          { 'Count': 0, 'QD': 0, 'QC': 0, 'QB': 0, 'QA': 0 },
          { 'Count': 1, 'QD': 0, 'QC': 0, 'QB': 0, 'QA': 1 },
          { 'Count': 2, 'QD': 0, 'QC': 0, 'QB': 1, 'QA': 0 },
          { 'Count': 3, 'QD': 0, 'QC': 0, 'QB': 1, 'QA': 1 },
          { 'Count': 4, 'QD': 0, 'QC': 1, 'QB': 0, 'QA': 0 },
          { 'Count': 5, 'QD': 0, 'QC': 1, 'QB': 0, 'QA': 1 },
          { 'Count': 6, 'QD': 0, 'QC': 1, 'QB': 1, 'QA': 0 },
          { 'Count': 7, 'QD': 0, 'QC': 1, 'QB': 1, 'QA': 1 },
          { 'Count': 8, 'QD': 1, 'QC': 0, 'QB': 0, 'QA': 0 },
          { 'Count': 9, 'QD': 1, 'QC': 0, 'QB': 0, 'QA': 1 },
          { 'Count': 10, 'QD': 1, 'QC': 0, 'QB': 1, 'QA': 0 },
          { 'Count': 11, 'QD': 1, 'QC': 0, 'QB': 1, 'QA': 1 }
        ]
      },
      pt: {
        label: 'Contador SN74LS92 divide-por-12',
        heading: 'Contador divide-por-12 (SN74LS92)',
        description: 'O SN74LS92 é um contador "Divide-Por-12" (4 bits). Similar ao 74LS90, mas a contagem se reinicia em 12. Também possui flip-flops internos e portas para cascata com outros contadores. Amplamente usado em divisores de frequência e contadores modulares.',
        configuration: '4 saídas binárias, 2 entradas de relógio',
        type: 'Contador mod-12',
        applications: [
          'Divisores de frequência',
          'Contadores modulares',
          'Sistemas de temporização',
          'Geradores de padrões',
          'Contadores de horas (relógio 12h)'
        ],
        technicalSpecs: {
          operatingVoltage: '4.75V - 5.25V',
          maxCurrent: '0.8mA por entrada',
          frequency: '35MHz máx',
          temperature: '0°C a +70°C',
          packageType: 'DIP-14',
          pinSpacing: '2.54mm',
          propagationDelay: '16ns típico'
        },
        truthTable: [
          { 'Contagem': 0, 'QD': 0, 'QC': 0, 'QB': 0, 'QA': 0 },
          { 'Contagem': 1, 'QD': 0, 'QC': 0, 'QB': 0, 'QA': 1 },
          { 'Contagem': 2, 'QD': 0, 'QC': 0, 'QB': 1, 'QA': 0 },
          { 'Contagem': 3, 'QD': 0, 'QC': 0, 'QB': 1, 'QA': 1 },
          { 'Contagem': 4, 'QD': 0, 'QC': 1, 'QB': 0, 'QA': 0 },
          { 'Contagem': 5, 'QD': 0, 'QC': 1, 'QB': 0, 'QA': 1 },
          { 'Contagem': 6, 'QD': 0, 'QC': 1, 'QB': 1, 'QA': 0 },
          { 'Contagem': 7, 'QD': 0, 'QC': 1, 'QB': 1, 'QA': 1 },
          { 'Contagem': 8, 'QD': 1, 'QC': 0, 'QB': 0, 'QA': 0 },
          { 'Contagem': 9, 'QD': 1, 'QC': 0, 'QB': 0, 'QA': 1 },
          { 'Contagem': 10, 'QD': 1, 'QC': 0, 'QB': 1, 'QA': 0 },
          { 'Contagem': 11, 'QD': 1, 'QC': 0, 'QB': 1, 'QA': 1 }
        ]
      }
    }
  },
  {
    url: '7493',
    category: 'counters',
    counterType: 'binary',
    modulus: 16,
    bits: 4,
    partNumber: 'SN74LS93',
    manufacturer: 'Texas Instruments',
    series: '74LS',
    datasheet: '/static/images/SN74LS93.jpg',
    pdf: 'https://www.ti.com/lit/ds/symlink/sn74ls93.pdf',
    alternatives: ['74HC4040', '74HC163'],
    translations: {
      es: {
        label: 'Contador SN74LS93 binario 4-bit',
        heading: 'Contador binario de 4 bits (SN74LS93)',
        description: 'El SN74LS93 es un contador binario de 4 bits (divide entre 16). Compatible con la familia LS, cuenta de 0 a 15 en binario. Incluye flip-flops internos y capacidad de cascada para contadores más grandes.',
        configuration: '4 salidas binarias, 2 entradas de reloj',
        type: 'Contador binario 4-bit',
        applications: [
          'Contadores binarios',
          'Divisores de frecuencia ÷16',
          'Generadores de direcciones',
          'Contadores de eventos',
          'Sistemas de temporización'
        ],
        technicalSpecs: {
          operatingVoltage: '4.75V - 5.25V',
          maxCurrent: '0.8mA por entrada',
          frequency: '35MHz máx',
          temperature: '0°C a +70°C',
          packageType: 'DIP-14',
          pinSpacing: '2.54mm',
          propagationDelay: '16ns típico'
        }
      },
      en: {
        label: 'SN74LS93 4-bit binary counter',
        heading: '4-bit binary counter (SN74LS93)',
        description: 'The SN74LS93 is a 4-bit binary counter (divide by 16). Compatible with the LS family, it counts from 0 to 15 in binary. Includes internal flip-flops and cascade capability for larger counters.',
        configuration: '4 binary outputs, 2 clock inputs',
        type: '4-bit binary counter',
        applications: [
          'Binary counters',
          'Frequency dividers ÷16',
          'Address generators',
          'Event counters',
          'Timing systems'
        ],
        technicalSpecs: {
          operatingVoltage: '4.75V - 5.25V',
          maxCurrent: '0.8mA per input',
          frequency: '35MHz max',
          temperature: '0°C to +70°C',
          packageType: 'DIP-14',
          pinSpacing: '2.54mm',
          propagationDelay: '16ns typical'
        }
      },
      pt: {
        label: 'Contador SN74LS93 binário 4-bit',
        heading: 'Contador binário de 4 bits (SN74LS93)',
        description: 'O SN74LS93 é um contador binário de 4 bits (divide por 16). Compatível com a família LS, conta de 0 a 15 em binário. Inclui flip-flops internos e capacidade de cascata para contadores maiores.',
        configuration: '4 saídas binárias, 2 entradas de relógio',
        type: 'Contador binário 4-bit',
        applications: [
          'Contadores binários',
          'Divisores de frequência ÷16',
          'Geradores de endereços',
          'Contadores de eventos',
          'Sistemas de temporização'
        ],
        technicalSpecs: {
          operatingVoltage: '4.75V - 5.25V',
          maxCurrent: '0.8mA por entrada',
          frequency: '35MHz máx',
          temperature: '0°C a +70°C',
          packageType: 'DIP-14',
          pinSpacing: '2.54mm',
          propagationDelay: '16ns típico'
        }
      }
    }
  }
];

export function getCounterTranslation(
  url: string,
  locale: LocaleTypes = 'es'
) {
  const counter = COUNTERS.find((counter) => counter.url === url);
  if (!counter) return undefined;
  
  return {
    ...counter.translations[locale],
    datasheet: counter.datasheet,
    pdf: counter.pdf,
    url: counter.url,
    partNumber: counter.partNumber,
    manufacturer: counter.manufacturer,
    counterType: counter.counterType,
    modulus: counter.modulus,
    bits: counter.bits,
    alternatives: counter.alternatives
  };
}
