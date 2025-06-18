import { DisplayComponent, LocaleTypes } from './types';

export const DISPLAYS: DisplayComponent[] = [
  {
    url: 'sc56-11ewa',
    category: 'displays',
    displayType: '7-segment',
    digits: 1,
    color: 'red',
    size: '0.56"',
    commonType: 'common-cathode',
    partNumber: 'SC56-11EWA',
    manufacturer: 'Kingbright',
    datasheet: '/static/images/SC56-11EWA.jpg',
    pdf: 'https://www.kingbrightusa.com/images/catalog/SPEC/SC56-11EWA.pdf',
    alternatives: ['SC56-11SRWA', 'LTS-4801JR'],
    translations: {
      es: {
        label: 'Display 7 segmentos SC56-11EWA',
        heading: 'Display de 7 segmentos (SC56-11EWA)',
        description: 'El SC56-11EWA es un display de 7 segmentos de 1 dígito, 0.56" (~14.2 mm) de altura, color rojo, cara difusa. Es de tipo cátodo común (CC), se conecta cada segmento a un pin con su resistencia limitadora y el pin común a GND. Muy empleado para visualización numérica de circuitos TTL.',
        configuration: '7 segmentos + punto decimal',
        type: 'Display 7-seg CC',
        applications: [
          'Contadores digitales',
          'Relojes digitales',
          'Voltímetros',
          'Instrumentos de medición',
          'Paneles de control'
        ],
        technicalSpecs: {
          operatingVoltage: '1.8V - 2.2V por segmento',
          maxCurrent: '20mA por segmento',
          temperature: '-40°C a +85°C',
          packageType: 'DIP-10',
          pinSpacing: '2.54mm'
        },
        pinout: {
          description: 'Configuración de pines para SC56-11EWA (DIP-10)',
          pins: [
            { number: 1, name: 'e', function: 'Ánodo segmento e' },
            { number: 2, name: 'd', function: 'Ánodo segmento d' },
            { number: 3, name: 'CC', function: 'Cátodo común' },
            { number: 4, name: 'c', function: 'Ánodo segmento c' },
            { number: 5, name: 'dp', function: 'Ánodo punto decimal' },
            { number: 6, name: 'b', function: 'Ánodo segmento b' },
            { number: 7, name: 'a', function: 'Ánodo segmento a' },
            { number: 8, name: 'CC', function: 'Cátodo común' },
            { number: 9, name: 'f', function: 'Ánodo segmento f' },
            { number: 10, name: 'g', function: 'Ánodo segmento g' }
          ]
        }
      },
      en: {
        label: 'SC56-11EWA 7-segment display',
        heading: '7-segment display (SC56-11EWA)',
        description: 'The SC56-11EWA is a 1-digit 7-segment display, 0.56" (~14.2 mm) high, red color, diffused face. It is common cathode (CC) type, each segment connects to a pin with its current limiting resistor and the common pin to GND. Widely used for numerical display in TTL circuits.',
        configuration: '7 segments + decimal point',
        type: '7-seg CC Display',
        applications: [
          'Digital counters',
          'Digital clocks',
          'Voltmeters',
          'Measuring instruments',
          'Control panels'
        ],
        technicalSpecs: {
          operatingVoltage: '1.8V - 2.2V per segment',
          maxCurrent: '20mA per segment',
          temperature: '-40°C to +85°C',
          packageType: 'DIP-10',
          pinSpacing: '2.54mm'
        },
        pinout: {
          description: 'Pin configuration for SC56-11EWA (DIP-10)',
          pins: [
            { number: 1, name: 'e', function: 'Anode segment e' },
            { number: 2, name: 'd', function: 'Anode segment d' },
            { number: 3, name: 'CC', function: 'Common cathode' },
            { number: 4, name: 'c', function: 'Anode segment c' },
            { number: 5, name: 'dp', function: 'Anode decimal point' },
            { number: 6, name: 'b', function: 'Anode segment b' },
            { number: 7, name: 'a', function: 'Anode segment a' },
            { number: 8, name: 'CC', function: 'Common cathode' },
            { number: 9, name: 'f', function: 'Anode segment f' },
            { number: 10, name: 'g', function: 'Anode segment g' }
          ]
        }
      },
      pt: {
        label: 'Display SC56-11EWA 7 segmentos',
        heading: 'Display de 7 segmentos (SC56-11EWA)',
        description: 'O SC56-11EWA é um display de 7 segmentos de 1 dígito, 0.56" (~14.2 mm) de altura, cor vermelha, face difusa. É do tipo cátodo comum (CC), cada segmento se conecta a um pino com seu resistor limitador de corrente e o pino comum ao GND. Amplamente usado para exibição numérica em circuitos TTL.',
        configuration: '7 segmentos + ponto decimal',
        type: 'Display 7-seg CC',
        applications: [
          'Contadores digitais',
          'Relógios digitais',
          'Voltímetros',
          'Instrumentos de medição',
          'Painéis de controle'
        ],
        technicalSpecs: {
          operatingVoltage: '1.8V - 2.2V por segmento',
          maxCurrent: '20mA por segmento',
          temperature: '-40°C a +85°C',
          packageType: 'DIP-10',
          pinSpacing: '2.54mm'
        },
        pinout: {
          description: 'Configuração de pinos para SC56-11EWA (DIP-10)',
          pins: [
            { number: 1, name: 'e', function: 'Ânodo segmento e' },
            { number: 2, name: 'd', function: 'Ânodo segmento d' },
            { number: 3, name: 'CC', function: 'Cátodo comum' },
            { number: 4, name: 'c', function: 'Ânodo segmento c' },
            { number: 5, name: 'dp', function: 'Ânodo ponto decimal' },
            { number: 6, name: 'b', function: 'Ânodo segmento b' },
            { number: 7, name: 'a', function: 'Ânodo segmento a' },
            { number: 8, name: 'CC', function: 'Cátodo comum' },
            { number: 9, name: 'f', function: 'Ânodo segmento f' },
            { number: 10, name: 'g', function: 'Ânodo segmento g' }
          ]
        }
      }
    }
  }
];

export function getDisplayTranslation(
  url: string,
  locale: LocaleTypes = 'es'
) {
  const display = DISPLAYS.find((display) => display.url === url);
  if (!display) return undefined;
  
  return {
    ...display.translations[locale],
    datasheet: display.datasheet,
    pdf: display.pdf,
    url: display.url,
    partNumber: display.partNumber,
    manufacturer: display.manufacturer,
    displayType: display.displayType,
    digits: display.digits,
    color: display.color,
    size: display.size,
    commonType: display.commonType,
    alternatives: display.alternatives
  };
}
