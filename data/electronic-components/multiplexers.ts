import { MultiplexerComponent, LocaleTypes } from './types';

export const MULTIPLEXERS: MultiplexerComponent[] = [
  {
    url: '74151',
    category: 'multiplexers',
    channels: '8-to-1',
    selectLines: 3,
    partNumber: 'SN74LS151',
    manufacturer: 'Texas Instruments',
    series: '74LS',
    datasheet: '/static/images/SN74LS151.jpg',
    pdf: 'https://www.ti.com/lit/ds/symlink/sn74ls151.pdf',
    alternatives: ['74HC151', '74AC151'],
    translations: {
      es: {
        label: 'Multiplexor SN74LS151 8-a-1',
        heading: 'Multiplexor 8-a-1 (SN74LS151)',
        description: 'El SN74LS151 es un multiplexor/demultiplexor 8-a-1. Selecciona una de ocho entradas de datos en un único canal de salida. Incluye señal de habilitación (strobe) y salidas complementarias. Frecuente en aplicaciones de conversión paralela-a-serial.',
        configuration: '8 entradas de datos, 3 líneas de selección',
        type: 'Multiplexor 8:1',
        applications: [
          'Conversión paralela a serie',
          'Selección de fuentes de datos',
          'Multiplexación de señales',
          'Conmutación de canales',
          'Sistemas de adquisición de datos'
        ],
        technicalSpecs: {
          operatingVoltage: '4.75V - 5.25V',
          maxCurrent: '0.8mA por entrada',
          propagationDelay: '35ns típico',
          temperature: '0°C a +70°C',
          packageType: 'DIP-16',
          pinSpacing: '2.54mm'
        },
        truthTable: [
          { 'S2': 'L', 'S1': 'L', 'S0': 'L', 'Entrada seleccionada': 'D0' },
          { 'S2': 'L', 'S1': 'L', 'S0': 'H', 'Entrada seleccionada': 'D1' },
          { 'S2': 'L', 'S1': 'H', 'S0': 'L', 'Entrada seleccionada': 'D2' },
          { 'S2': 'L', 'S1': 'H', 'S0': 'H', 'Entrada seleccionada': 'D3' },
          { 'S2': 'H', 'S1': 'L', 'S0': 'L', 'Entrada seleccionada': 'D4' },
          { 'S2': 'H', 'S1': 'L', 'S0': 'H', 'Entrada seleccionada': 'D5' },
          { 'S2': 'H', 'S1': 'H', 'S0': 'L', 'Entrada seleccionada': 'D6' },
          { 'S2': 'H', 'S1': 'H', 'S0': 'H', 'Entrada seleccionada': 'D7' }
        ],
        pinout: {
          description: 'Configuración de pines para SN74LS151 (DIP-16)',
          pins: [
            { number: 1, name: 'D4', function: 'Entrada de datos 4' },
            { number: 2, name: 'D5', function: 'Entrada de datos 5' },
            { number: 3, name: 'D6', function: 'Entrada de datos 6' },
            { number: 4, name: 'D7', function: 'Entrada de datos 7' },
            { number: 5, name: 'Y', function: 'Salida (no invertida)' },
            { number: 6, name: 'W', function: 'Salida (invertida)' },
            { number: 7, name: 'G', function: 'Habilitación (activa baja)' },
            { number: 8, name: 'GND', function: 'Tierra' },
            { number: 9, name: 'S2', function: 'Línea de selección 2 (MSB)' },
            { number: 10, name: 'S1', function: 'Línea de selección 1' },
            { number: 11, name: 'S0', function: 'Línea de selección 0 (LSB)' },
            { number: 12, name: 'D3', function: 'Entrada de datos 3' },
            { number: 13, name: 'D2', function: 'Entrada de datos 2' },
            { number: 14, name: 'D1', function: 'Entrada de datos 1' },
            { number: 15, name: 'D0', function: 'Entrada de datos 0' },
            { number: 16, name: 'VCC', function: 'Alimentación (+5V)' }
          ]
        }
      },
      en: {
        label: 'SN74LS151 8-to-1 multiplexer',
        heading: '8-to-1 multiplexer (SN74LS151)',
        description: 'The SN74LS151 is an 8-to-1 multiplexer/demultiplexer. It selects one of eight data inputs to a single output channel. It includes enable signal (strobe) and complementary outputs. Common in parallel-to-serial conversion applications.',
        configuration: '8 data inputs, 3 select lines',
        type: '8:1 Multiplexer',
        applications: [
          'Parallel to serial conversion',
          'Data source selection',
          'Signal multiplexing',
          'Channel switching',
          'Data acquisition systems'
        ],
        technicalSpecs: {
          operatingVoltage: '4.75V - 5.25V',
          maxCurrent: '0.8mA per input',
          propagationDelay: '35ns typical',
          temperature: '0°C to +70°C',
          packageType: 'DIP-16',
          pinSpacing: '2.54mm'
        },
        truthTable: [
          { 'S2': 'L', 'S1': 'L', 'S0': 'L', 'Selected input': 'D0' },
          { 'S2': 'L', 'S1': 'L', 'S0': 'H', 'Selected input': 'D1' },
          { 'S2': 'L', 'S1': 'H', 'S0': 'L', 'Selected input': 'D2' },
          { 'S2': 'L', 'S1': 'H', 'S0': 'H', 'Selected input': 'D3' },
          { 'S2': 'H', 'S1': 'L', 'S0': 'L', 'Selected input': 'D4' },
          { 'S2': 'H', 'S1': 'L', 'S0': 'H', 'Selected input': 'D5' },
          { 'S2': 'H', 'S1': 'H', 'S0': 'L', 'Selected input': 'D6' },
          { 'S2': 'H', 'S1': 'H', 'S0': 'H', 'Selected input': 'D7' }
        ],
        pinout: {
          description: 'Pin configuration for SN74LS151 (DIP-16)',
          pins: [
            { number: 1, name: 'D4', function: 'Data input 4' },
            { number: 2, name: 'D5', function: 'Data input 5' },
            { number: 3, name: 'D6', function: 'Data input 6' },
            { number: 4, name: 'D7', function: 'Data input 7' },
            { number: 5, name: 'Y', function: 'Output (non-inverted)' },
            { number: 6, name: 'W', function: 'Output (inverted)' },
            { number: 7, name: 'G', function: 'Enable (active low)' },
            { number: 8, name: 'GND', function: 'Ground' },
            { number: 9, name: 'S2', function: 'Select line 2 (MSB)' },
            { number: 10, name: 'S1', function: 'Select line 1' },
            { number: 11, name: 'S0', function: 'Select line 0 (LSB)' },
            { number: 12, name: 'D3', function: 'Data input 3' },
            { number: 13, name: 'D2', function: 'Data input 2' },
            { number: 14, name: 'D1', function: 'Data input 1' },
            { number: 15, name: 'D0', function: 'Data input 0' },
            { number: 16, name: 'VCC', function: 'Power supply (+5V)' }
          ]
        }
      },
      pt: {
        label: 'Multiplexador SN74LS151 8-para-1',
        heading: 'Multiplexador 8-para-1 (SN74LS151)',
        description: 'O SN74LS151 é um multiplexador/demultiplexador 8-para-1. Seleciona uma de oito entradas de dados para um único canal de saída. Inclui sinal de habilitação (strobe) e saídas complementares. Comum em aplicações de conversão paralelo-para-serial.',
        configuration: '8 entradas de dados, 3 linhas de seleção',
        type: 'Multiplexador 8:1',
        applications: [
          'Conversão paralelo para serial',
          'Seleção de fontes de dados',
          'Multiplexação de sinais',
          'Comutação de canais',
          'Sistemas de aquisição de dados'
        ],
        technicalSpecs: {
          operatingVoltage: '4.75V - 5.25V',
          maxCurrent: '0.8mA por entrada',
          propagationDelay: '35ns típico',
          temperature: '0°C a +70°C',
          packageType: 'DIP-16',
          pinSpacing: '2.54mm'
        },
        truthTable: [
          { 'S2': 'L', 'S1': 'L', 'S0': 'L', 'Entrada selecionada': 'D0' },
          { 'S2': 'L', 'S1': 'L', 'S0': 'H', 'Entrada selecionada': 'D1' },
          { 'S2': 'L', 'S1': 'H', 'S0': 'L', 'Entrada selecionada': 'D2' },
          { 'S2': 'L', 'S1': 'H', 'S0': 'H', 'Entrada selecionada': 'D3' },
          { 'S2': 'H', 'S1': 'L', 'S0': 'L', 'Entrada selecionada': 'D4' },
          { 'S2': 'H', 'S1': 'L', 'S0': 'H', 'Entrada selecionada': 'D5' },
          { 'S2': 'H', 'S1': 'H', 'S0': 'L', 'Entrada selecionada': 'D6' },
          { 'S2': 'H', 'S1': 'H', 'S0': 'H', 'Entrada selecionada': 'D7' }
        ],
        pinout: {
          description: 'Configuração de pinos para SN74LS151 (DIP-16)',
          pins: [
            { number: 1, name: 'D4', function: 'Entrada de dados 4' },
            { number: 2, name: 'D5', function: 'Entrada de dados 5' },
            { number: 3, name: 'D6', function: 'Entrada de dados 6' },
            { number: 4, name: 'D7', function: 'Entrada de dados 7' },
            { number: 5, name: 'Y', function: 'Saída (não invertida)' },
            { number: 6, name: 'W', function: 'Saída (invertida)' },
            { number: 7, name: 'G', function: 'Habilitação (ativo baixo)' },
            { number: 8, name: 'GND', function: 'Terra' },
            { number: 9, name: 'S2', function: 'Linha de seleção 2 (MSB)' },
            { number: 10, name: 'S1', function: 'Linha de seleção 1' },
            { number: 11, name: 'S0', function: 'Linha de seleção 0 (LSB)' },
            { number: 12, name: 'D3', function: 'Entrada de dados 3' },
            { number: 13, name: 'D2', function: 'Entrada de dados 2' },
            { number: 14, name: 'D1', function: 'Entrada de dados 1' },
            { number: 15, name: 'D0', function: 'Entrada de dados 0' },
            { number: 16, name: 'VCC', function: 'Alimentação (+5V)' }
          ]
        }
      }
    }
  },
  {
    url: '74153',
    category: 'multiplexers',
    channels: '4-to-1-dual',
    selectLines: 2,
    partNumber: 'SN74LS153',
    manufacturer: 'Texas Instruments',
    series: '74LS',
    datasheet: '/static/images/SN74LS153.jpg',
    pdf: 'https://www.ti.com/lit/ds/symlink/sn74ls153.pdf',
    alternatives: ['74HC153', '74AC153'],
    translations: {
      es: {
        label: 'Multiplexor SN74LS153 dual 4-a-1',
        heading: 'Multiplexor dual 4-a-1 (SN74LS153)',
        description: 'El SN74LS153 es un multiplexor dual 4-a-1. Cada bloque selecciona entre 4 entradas según dos bits de dirección. Tiene también habilitaciones independientes. Permite convertir paralelo a serie o "mux" de buses de datos. Ampliamente utilizado en sistemas TTL por ofrecer dos canales en un paquete.',
        configuration: '2 multiplexores 4:1 independientes',
        type: 'Multiplexor dual 4:1',
        applications: [
          'Multiplexación de buses de datos',
          'Selección dual de señales',
          'Conmutación de canales múltiples',
          'Sistemas de comunicaciones',
          'Procesamiento de señales digitales'
        ],
        technicalSpecs: {
          operatingVoltage: '4.75V - 5.25V',
          maxCurrent: '0.8mA por entrada',
          propagationDelay: '25ns típico',
          temperature: '0°C a +70°C',
          packageType: 'DIP-16',
          pinSpacing: '2.54mm'
        },
        truthTable: [
          { 'S1': 'L', 'S0': 'L', 'Canal A': 'C0', 'Canal B': 'C4' },
          { 'S1': 'L', 'S0': 'H', 'Canal A': 'C1', 'Canal B': 'C5' },
          { 'S1': 'H', 'S0': 'L', 'Canal A': 'C2', 'Canal B': 'C6' },
          { 'S1': 'H', 'S0': 'H', 'Canal A': 'C3', 'Canal B': 'C7' }
        ]
      },
      en: {
        label: 'SN74LS153 dual 4-to-1 multiplexer',
        heading: 'Dual 4-to-1 multiplexer (SN74LS153)',
        description: 'The SN74LS153 is a dual 4-to-1 multiplexer. Each block selects from 4 inputs according to two address bits. It also has independent enables. Allows parallel-to-serial conversion or data bus "mux". Widely used in TTL systems for offering two channels in one package.',
        configuration: '2 independent 4:1 multiplexers',
        type: 'Dual 4:1 Multiplexer',
        applications: [
          'Data bus multiplexing',
          'Dual signal selection',
          'Multiple channel switching',
          'Communication systems',
          'Digital signal processing'
        ],
        technicalSpecs: {
          operatingVoltage: '4.75V - 5.25V',
          maxCurrent: '0.8mA per input',
          propagationDelay: '25ns typical',
          temperature: '0°C to +70°C',
          packageType: 'DIP-16',
          pinSpacing: '2.54mm'
        },
        truthTable: [
          { 'S1': 'L', 'S0': 'L', 'Channel A': 'C0', 'Channel B': 'C4' },
          { 'S1': 'L', 'S0': 'H', 'Channel A': 'C1', 'Channel B': 'C5' },
          { 'S1': 'H', 'S0': 'L', 'Channel A': 'C2', 'Channel B': 'C6' },
          { 'S1': 'H', 'S0': 'H', 'Channel A': 'C3', 'Channel B': 'C7' }
        ]
      },
      pt: {
        label: 'Multiplexador SN74LS153 duplo 4-para-1',
        heading: 'Multiplexador duplo 4-para-1 (SN74LS153)',
        description: 'O SN74LS153 é um multiplexador duplo 4-para-1. Cada bloco seleciona entre 4 entradas de acordo com dois bits de endereço. Também tem habilitações independentes. Permite conversão paralelo-para-serial ou "mux" de barramentos de dados. Amplamente usado em sistemas TTL por oferecer dois canais em um pacote.',
        configuration: '2 multiplexadores 4:1 independentes',
        type: 'Multiplexador duplo 4:1',
        applications: [
          'Multiplexação de barramentos de dados',
          'Seleção dupla de sinais',
          'Comutação de múltiplos canais',
          'Sistemas de comunicação',
          'Processamento de sinais digitais'
        ],
        technicalSpecs: {
          operatingVoltage: '4.75V - 5.25V',
          maxCurrent: '0.8mA por entrada',
          propagationDelay: '25ns típico',
          temperature: '0°C a +70°C',
          packageType: 'DIP-16',
          pinSpacing: '2.54mm'
        },
        truthTable: [
          { 'S1': 'L', 'S0': 'L', 'Canal A': 'C0', 'Canal B': 'C4' },
          { 'S1': 'L', 'S0': 'H', 'Canal A': 'C1', 'Canal B': 'C5' },
          { 'S1': 'H', 'S0': 'L', 'Canal A': 'C2', 'Canal B': 'C6' },
          { 'S1': 'H', 'S0': 'H', 'Canal A': 'C3', 'Canal B': 'C7' }
        ]
      }
    }
  }
];

export function getMultiplexerTranslation(
  url: string,
  locale: LocaleTypes = 'es'
) {
  const multiplexer = MULTIPLEXERS.find((mux) => mux.url === url);
  if (!multiplexer) return undefined;
  
  return {
    ...multiplexer.translations[locale],
    datasheet: multiplexer.datasheet,
    pdf: multiplexer.pdf,
    url: multiplexer.url,
    partNumber: multiplexer.partNumber,
    manufacturer: multiplexer.manufacturer,
    channels: multiplexer.channels,
    selectLines: multiplexer.selectLines,
    alternatives: multiplexer.alternatives
  };
}
