import { DecoderComponent, LocaleTypes } from './types';

export const DECODERS: DecoderComponent[] = [
  {
    url: '7447',
    category: 'decoders',
    decoderType: 'BCD-7seg',
    outputType: 'open-collector',
    displayType: 'common-anode',
    partNumber: 'SN7447A',
    manufacturer: 'Texas Instruments',
    series: '74xx',
    datasheet: '/static/images/SN7447A.jpg',
    pdf: 'https://www.ti.com/lit/ds/symlink/sn7447a.pdf',
    alternatives: ['74LS47', '74HC4511'],
    translations: {
      es: {
        label: 'Decodificador SN7447A BCD a 7 segmentos',
        heading: 'Decodificador BCD a 7 segmentos (SN7447A)',
        description: 'El SN7447A es un decodificador BCD a 7 segmentos con salidas de colector abierto activas bajas, diseñado para displays de ánodo común. Incluye control de encendido/apagado de dígitos y prueba de lámparas. Es equivalente en lógica TTL a la LS47 y muy usado en proyectos clásicos.',
        configuration: '4 entradas BCD, 7 salidas para display',
        type: 'Decodificador BCD-7seg',
        applications: [
          'Displays de 7 segmentos',
          'Contadores digitales',
          'Instrumentos de medición',
          'Relojes digitales',
          'Calculadoras'
        ],
        technicalSpecs: {
          operatingVoltage: '4.75V - 5.25V',
          maxCurrent: '40mA por segmento',
          propagationDelay: '46ns típico',
          temperature: '0°C a +70°C',
          packageType: 'DIP-16',
          pinSpacing: '2.54mm'
        },
        truthTable: [
          { 'BCD (DCBA)': '0000', 'Display': '0', 'Segmentos': 'abcdef' },
          { 'BCD (DCBA)': '0001', 'Display': '1', 'Segmentos': 'bc' },
          { 'BCD (DCBA)': '0010', 'Display': '2', 'Segmentos': 'abged' },
          { 'BCD (DCBA)': '0011', 'Display': '3', 'Segmentos': 'abgcd' },
          { 'BCD (DCBA)': '0100', 'Display': '4', 'Segmentos': 'fgbc' },
          { 'BCD (DCBA)': '0101', 'Display': '5', 'Segmentos': 'afgcd' },
          { 'BCD (DCBA)': '0110', 'Display': '6', 'Segmentos': 'afgedc' },
          { 'BCD (DCBA)': '0111', 'Display': '7', 'Segmentos': 'abc' },
          { 'BCD (DCBA)': '1000', 'Display': '8', 'Segmentos': 'abcdefg' },
          { 'BCD (DCBA)': '1001', 'Display': '9', 'Segmentos': 'abcdfg' }
        ],
        pinout: {
          description: 'Configuración de pines para SN7447A (DIP-16)',
          pins: [
            { number: 1, name: 'B', function: 'Entrada BCD bit B' },
            { number: 2, name: 'C', function: 'Entrada BCD bit C' },
            { number: 3, name: 'LT', function: 'Prueba de lámparas (activa baja)' },
            { number: 4, name: 'BI/RBO', function: 'Entrada/Salida de blanking' },
            { number: 5, name: 'RBI', function: 'Entrada de blanking (activa baja)' },
            { number: 6, name: 'D', function: 'Entrada BCD bit D' },
            { number: 7, name: 'A', function: 'Entrada BCD bit A' },
            { number: 8, name: 'GND', function: 'Tierra' },
            { number: 9, name: 'e', function: 'Salida segmento e' },
            { number: 10, name: 'd', function: 'Salida segmento d' },
            { number: 11, name: 'c', function: 'Salida segmento c' },
            { number: 12, name: 'b', function: 'Salida segmento b' },
            { number: 13, name: 'a', function: 'Salida segmento a' },
            { number: 14, name: 'g', function: 'Salida segmento g' },
            { number: 15, name: 'f', function: 'Salida segmento f' },
            { number: 16, name: 'VCC', function: 'Alimentación (+5V)' }
          ]
        }
      },
      en: {
        label: 'SN7447A BCD to 7-segment decoder',
        heading: 'BCD to 7-segment decoder (SN7447A)',
        description: 'The SN7447A is a BCD to 7-segment decoder with open collector active-low outputs, designed for common-anode displays. It includes digit on/off control and lamp test functionality. It is TTL logic equivalent to the LS47 and widely used in classic projects.',
        configuration: '4 BCD inputs, 7 display outputs',
        type: 'BCD-7seg Decoder',
        applications: [
          '7-segment displays',
          'Digital counters',
          'Measuring instruments',
          'Digital clocks',
          'Calculators'
        ],
        technicalSpecs: {
          operatingVoltage: '4.75V - 5.25V',
          maxCurrent: '40mA per segment',
          propagationDelay: '46ns typical',
          temperature: '0°C to +70°C',
          packageType: 'DIP-16',
          pinSpacing: '2.54mm'
        },
        truthTable: [
          { 'BCD (DCBA)': '0000', 'Display': '0', 'Segments': 'abcdef' },
          { 'BCD (DCBA)': '0001', 'Display': '1', 'Segments': 'bc' },
          { 'BCD (DCBA)': '0010', 'Display': '2', 'Segments': 'abged' },
          { 'BCD (DCBA)': '0011', 'Display': '3', 'Segments': 'abgcd' },
          { 'BCD (DCBA)': '0100', 'Display': '4', 'Segments': 'fgbc' },
          { 'BCD (DCBA)': '0101', 'Display': '5', 'Segments': 'afgcd' },
          { 'BCD (DCBA)': '0110', 'Display': '6', 'Segments': 'afgedc' },
          { 'BCD (DCBA)': '0111', 'Display': '7', 'Segments': 'abc' },
          { 'BCD (DCBA)': '1000', 'Display': '8', 'Segments': 'abcdefg' },
          { 'BCD (DCBA)': '1001', 'Display': '9', 'Segments': 'abcdfg' }
        ],
        pinout: {
          description: 'Pin configuration for SN7447A (DIP-16)',
          pins: [
            { number: 1, name: 'B', function: 'BCD input bit B' },
            { number: 2, name: 'C', function: 'BCD input bit C' },
            { number: 3, name: 'LT', function: 'Lamp test (active low)' },
            { number: 4, name: 'BI/RBO', function: 'Blanking input/output' },
            { number: 5, name: 'RBI', function: 'Ripple blanking input (active low)' },
            { number: 6, name: 'D', function: 'BCD input bit D' },
            { number: 7, name: 'A', function: 'BCD input bit A' },
            { number: 8, name: 'GND', function: 'Ground' },
            { number: 9, name: 'e', function: 'Segment e output' },
            { number: 10, name: 'd', function: 'Segment d output' },
            { number: 11, name: 'c', function: 'Segment c output' },
            { number: 12, name: 'b', function: 'Segment b output' },
            { number: 13, name: 'a', function: 'Segment a output' },
            { number: 14, name: 'g', function: 'Segment g output' },
            { number: 15, name: 'f', function: 'Segment f output' },
            { number: 16, name: 'VCC', function: 'Power supply (+5V)' }
          ]
        }
      },
      pt: {
        label: 'Decodificador SN7447A BCD para 7 segmentos',
        heading: 'Decodificador BCD para 7 segmentos (SN7447A)',
        description: 'O SN7447A é um decodificador BCD para 7 segmentos com saídas de coletor aberto ativas baixas, projetado para displays de ânodo comum. Inclui controle liga/desliga de dígitos e função de teste de lâmpadas. É equivalente em lógica TTL ao LS47 e amplamente usado em projetos clássicos.',
        configuration: '4 entradas BCD, 7 saídas para display',
        type: 'Decodificador BCD-7seg',
        applications: [
          'Displays de 7 segmentos',
          'Contadores digitais',
          'Instrumentos de medição',
          'Relógios digitais',
          'Calculadoras'
        ],
        technicalSpecs: {
          operatingVoltage: '4.75V - 5.25V',
          maxCurrent: '40mA por segmento',
          propagationDelay: '46ns típico',
          temperature: '0°C a +70°C',
          packageType: 'DIP-16',
          pinSpacing: '2.54mm'
        },
        truthTable: [
          { 'BCD (DCBA)': '0000', 'Display': '0', 'Segmentos': 'abcdef' },
          { 'BCD (DCBA)': '0001', 'Display': '1', 'Segmentos': 'bc' },
          { 'BCD (DCBA)': '0010', 'Display': '2', 'Segmentos': 'abged' },
          { 'BCD (DCBA)': '0011', 'Display': '3', 'Segmentos': 'abgcd' },
          { 'BCD (DCBA)': '0100', 'Display': '4', 'Segmentos': 'fgbc' },
          { 'BCD (DCBA)': '0101', 'Display': '5', 'Segmentos': 'afgcd' },
          { 'BCD (DCBA)': '0110', 'Display': '6', 'Segmentos': 'afgedc' },
          { 'BCD (DCBA)': '0111', 'Display': '7', 'Segmentos': 'abc' },
          { 'BCD (DCBA)': '1000', 'Display': '8', 'Segmentos': 'abcdefg' },
          { 'BCD (DCBA)': '1001', 'Display': '9', 'Segmentos': 'abcdfg' }
        ],
        pinout: {
          description: 'Configuração de pinos para SN7447A (DIP-16)',
          pins: [
            { number: 1, name: 'B', function: 'Entrada BCD bit B' },
            { number: 2, name: 'C', function: 'Entrada BCD bit C' },
            { number: 3, name: 'LT', function: 'Teste de lâmpadas (ativo baixo)' },
            { number: 4, name: 'BI/RBO', function: 'Entrada/Saída de apagamento' },
            { number: 5, name: 'RBI', function: 'Entrada de apagamento (ativo baixo)' },
            { number: 6, name: 'D', function: 'Entrada BCD bit D' },
            { number: 7, name: 'A', function: 'Entrada BCD bit A' },
            { number: 8, name: 'GND', function: 'Terra' },
            { number: 9, name: 'e', function: 'Saída segmento e' },
            { number: 10, name: 'd', function: 'Saída segmento d' },
            { number: 11, name: 'c', function: 'Saída segmento c' },
            { number: 12, name: 'b', function: 'Saída segmento b' },
            { number: 13, name: 'a', function: 'Saída segmento a' },
            { number: 14, name: 'g', function: 'Saída segmento g' },
            { number: 15, name: 'f', function: 'Saída segmento f' },
            { number: 16, name: 'VCC', function: 'Alimentação (+5V)' }
          ]
        }
      }
    }
  },
  {
    url: '7448',
    category: 'decoders',
    decoderType: 'BCD-7seg',
    outputType: 'totem-pole',
    displayType: 'common-cathode',
    partNumber: 'SN7448',
    manufacturer: 'Texas Instruments',
    series: '74xx',
    datasheet: '/static/images/SN7448.jpg',
    pdf: 'https://www.ti.com/lit/ds/symlink/sn7448.pdf',
    alternatives: ['74LS48', '74HC4543'],
    translations: {
      es: {
        label: 'Decodificador SN7448 BCD a 7 segmentos',
        heading: 'Decodificador BCD a 7 segmentos (SN7448)',
        description: 'El SN7448 es similar al SN7447 pero con salidas activas altas para displays de cátodo común. Incluye resistencias pull-up internas y permite manejar directamente LEDs sin resistencias externas.',
        configuration: '4 entradas BCD, 7 salidas para display',
        type: 'Decodificador BCD-7seg',
        applications: [
          'Displays de cátodo común',
          'Instrumentos digitales',
          'Paneles de control',
          'Sistemas embebidos'
        ],
        technicalSpecs: {
          operatingVoltage: '4.75V - 5.25V',
          maxCurrent: '6.4mA por segmento',
          propagationDelay: '50ns típico',
          temperature: '0°C a +70°C',
          packageType: 'DIP-16',
          pinSpacing: '2.54mm'
        }
      },
      en: {
        label: 'SN7448 BCD to 7-segment decoder',
        heading: 'BCD to 7-segment decoder (SN7448)',
        description: 'The SN7448 is similar to the SN7447 but with active-high outputs for common-cathode displays. It includes internal pull-up resistors and can directly drive LEDs without external resistors.',
        configuration: '4 BCD inputs, 7 display outputs',
        type: 'BCD-7seg Decoder',
        applications: [
          'Common-cathode displays',
          'Digital instruments',
          'Control panels',
          'Embedded systems'
        ],
        technicalSpecs: {
          operatingVoltage: '4.75V - 5.25V',
          maxCurrent: '6.4mA per segment',
          propagationDelay: '50ns typical',
          temperature: '0°C to +70°C',
          packageType: 'DIP-16',
          pinSpacing: '2.54mm'
        }
      },
      pt: {
        label: 'Decodificador SN7448 BCD para 7 segmentos',
        heading: 'Decodificador BCD para 7 segmentos (SN7448)',
        description: 'O SN7448 é similar ao SN7447 mas com saídas ativas altas para displays de cátodo comum. Inclui resistores pull-up internos e pode acionar LEDs diretamente sem resistores externos.',
        configuration: '4 entradas BCD, 7 saídas para display',
        type: 'Decodificador BCD-7seg',
        applications: [
          'Displays de cátodo comum',
          'Instrumentos digitais',
          'Painéis de controle',
          'Sistemas embarcados'
        ],
        technicalSpecs: {
          operatingVoltage: '4.75V - 5.25V',
          maxCurrent: '6.4mA por segmento',
          propagationDelay: '50ns típico',
          temperature: '0°C a +70°C',
          packageType: 'DIP-16',
          pinSpacing: '2.54mm'
        }
      }
    }
  },
  {
    url: '74138',
    category: 'decoders',
    decoderType: '3-to-8',
    partNumber: 'SN74LS138',
    manufacturer: 'Texas Instruments',
    series: '74LS',
    datasheet: '/static/images/SN74LS138.jpg',
    pdf: 'https://www.ti.com/lit/ds/symlink/sn74ls138.pdf',
    alternatives: ['74HC138', '74AC138'],
    translations: {
      es: {
        label: 'Decodificador SN74LS138 3-a-8 líneas',
        heading: 'Decodificador 3-a-8 líneas (SN74LS138)',
        description: 'El SN74LS138 es un decodificador/demultiplexor 3-a-8 líneas. Toma 3 bits de selección y activa una de 8 salidas. Tiene 3 entradas de habilitación, ideal para direccionar chips o expandir líneas de control. Popular en electrónica digital por compatibilidad TTL y bajo costo.',
        configuration: '3 entradas de selección, 8 salidas',
        type: 'Decodificador 3-to-8',
        applications: [
          'Direccionamiento de memoria',
          'Demultiplexación de datos',
          'Selección de chips',
          'Expansión de líneas de control',
          'Decodificación de direcciones'
        ],
        technicalSpecs: {
          operatingVoltage: '4.75V - 5.25V',
          maxCurrent: '8mA por salida',
          propagationDelay: '41ns típico',
          temperature: '0°C a +70°C',
          packageType: 'DIP-16',
          pinSpacing: '2.54mm'
        },
        truthTable: [
          { 'G1': 'H', 'G2A': 'L', 'G2B': 'L', 'C': 'L', 'B': 'L', 'A': 'L', 'Y0': 'L', 'Y1-Y7': 'H' },
          { 'G1': 'H', 'G2A': 'L', 'G2B': 'L', 'C': 'L', 'B': 'L', 'A': 'H', 'Y1': 'L', 'Y0,Y2-Y7': 'H' },
          { 'G1': 'H', 'G2A': 'L', 'G2B': 'L', 'C': 'L', 'B': 'H', 'A': 'L', 'Y2': 'L', 'Y0-Y1,Y3-Y7': 'H' }
        ]
      },
      en: {
        label: 'SN74LS138 3-to-8 line decoder',
        heading: '3-to-8 line decoder (SN74LS138)',
        description: 'The SN74LS138 is a 3-to-8 line decoder/demultiplexer. It takes 3 selection bits and activates one of 8 outputs. It has 3 enable inputs, ideal for addressing chips or expanding control lines. Popular in digital electronics for TTL compatibility and low cost.',
        configuration: '3 selection inputs, 8 outputs',
        type: '3-to-8 Decoder',
        applications: [
          'Memory addressing',
          'Data demultiplexing',
          'Chip selection',
          'Control line expansion',
          'Address decoding'
        ],
        technicalSpecs: {
          operatingVoltage: '4.75V - 5.25V',
          maxCurrent: '8mA per output',
          propagationDelay: '41ns typical',
          temperature: '0°C to +70°C',
          packageType: 'DIP-16',
          pinSpacing: '2.54mm'
        },
        truthTable: [
          { 'G1': 'H', 'G2A': 'L', 'G2B': 'L', 'C': 'L', 'B': 'L', 'A': 'L', 'Y0': 'L', 'Y1-Y7': 'H' },
          { 'G1': 'H', 'G2A': 'L', 'G2B': 'L', 'C': 'L', 'B': 'L', 'A': 'H', 'Y1': 'L', 'Y0,Y2-Y7': 'H' },
          { 'G1': 'H', 'G2A': 'L', 'G2B': 'L', 'C': 'L', 'B': 'H', 'A': 'L', 'Y2': 'L', 'Y0-Y1,Y3-Y7': 'H' }
        ]
      },
      pt: {
        label: 'Decodificador SN74LS138 3-para-8 linhas',
        heading: 'Decodificador 3-para-8 linhas (SN74LS138)',
        description: 'O SN74LS138 é um decodificador/demultiplexador 3-para-8 linhas. Toma 3 bits de seleção e ativa uma de 8 saídas. Tem 3 entradas de habilitação, ideal para endereçar chips ou expandir linhas de controle. Popular em eletrônica digital por compatibilidade TTL e baixo custo.',
        configuration: '3 entradas de seleção, 8 saídas',
        type: 'Decodificador 3-para-8',
        applications: [
          'Endereçamento de memória',
          'Demultiplexação de dados',
          'Seleção de chips',
          'Expansão de linhas de controle',
          'Decodificação de endereços'
        ],
        technicalSpecs: {
          operatingVoltage: '4.75V - 5.25V',
          maxCurrent: '8mA por saída',
          propagationDelay: '41ns típico',
          temperature: '0°C a +70°C',
          packageType: 'DIP-16',
          pinSpacing: '2.54mm'
        },
        truthTable: [
          { 'G1': 'H', 'G2A': 'L', 'G2B': 'L', 'C': 'L', 'B': 'L', 'A': 'L', 'Y0': 'L', 'Y1-Y7': 'H' },
          { 'G1': 'H', 'G2A': 'L', 'G2B': 'L', 'C': 'L', 'B': 'L', 'A': 'H', 'Y1': 'L', 'Y0,Y2-Y7': 'H' },
          { 'G1': 'H', 'G2A': 'L', 'G2B': 'L', 'C': 'L', 'B': 'H', 'A': 'L', 'Y2': 'L', 'Y0-Y1,Y3-Y7': 'H' }
        ]
      }
    }
  }
];

export function getDecoderTranslation(
  url: string,
  locale: LocaleTypes = 'es'
) {
  const decoder = DECODERS.find((decoder) => decoder.url === url);
  if (!decoder) return undefined;
  
  return {
    ...decoder.translations[locale],
    datasheet: decoder.datasheet,
    pdf: decoder.pdf,
    url: decoder.url,
    partNumber: decoder.partNumber,
    manufacturer: decoder.manufacturer,
    decoderType: decoder.decoderType,
    outputType: decoder.outputType,
    displayType: decoder.displayType,
    alternatives: decoder.alternatives
  };
}
