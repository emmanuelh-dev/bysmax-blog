export type LocaleTypes = 'es' | 'en' | 'pt';

export interface LogicGateTranslations {
  label: string;
  heading: string;
  description: string;
  configuration: string;
  type: string;
  booleanFunction: string;
  applications: string[];
  truthTable: Array<{ [key: string]: string | number }>;
}

export interface LogicGate {
  url: string;
  datasheet: string;
  pdf: string;
  translations: Record<LocaleTypes, LogicGateTranslations>;
}

export const LOGICGATES: LogicGate[] = [
  {
    url: '7408',
    datasheet: '/static/images/74LS08.jpg',
    pdf: 'https://www.ti.com/lit/ds/symlink/sn74ls08.pdf',
    translations: {
      es: {
        label: 'Compuerta 7408 AND',
        heading: 'Compuerta lógica AND (Circuito Integrado 7408/74LS08)',
        description:
          'El circuito integrado 7408 es una compuerta lógica AND de 2 entradas. Consulta su datasheet para detalles técnicos. Para que la salida sea alta (1), ambas entradas deben ser altas (1), como se muestra en su tabla de verdad.',
        configuration: '2 entradas y 1 salida',
        type: '2 entradas / 1 salida',
        booleanFunction: 'Salida = A AND B',
        applications: ['Sistemas de control', 'Circuitos aritméticos'],
        truthTable: [
          { 'Entrada A': 0, 'Entrada B': 0, salida: 0 },
          { 'Entrada A': 0, 'Entrada B': 1, salida: 0 },
          { 'Entrada A': 1, 'Entrada B': 0, salida: 0 },
          { 'Entrada A': 1, 'Entrada B': 1, salida: 1 }
        ]
      },
      en: {
        label: '7408 AND Gate',
        heading: 'AND Logic Gate (Integrated Circuit 7408/74LS08)',
        description:
          'The 7408 integrated circuit is a 2-input AND logic gate. Check its datasheet for technical details. For the output to be high (1), both inputs must be high (1), as shown in its truth table.',
        configuration: '2 inputs and 1 output',
        type: '2 inputs / 1 output',
        booleanFunction: 'Output = A AND B',
        applications: ['Control systems', 'Arithmetic circuits'],
        truthTable: [
          { 'Input A': 0, 'Input B': 0, output: 0 },
          { 'Input A': 0, 'Input B': 1, output: 0 },
          { 'Input A': 1, 'Input B': 0, output: 0 },
          { 'Input A': 1, 'Input B': 1, output: 1 }
        ]
      },
      pt: {
        label: 'Porta 7408 AND',
        heading: 'Porta Lógica AND (Circuito Integrado 7408/74LS08)',
        description:
          'O circuito integrado 7408 é uma porta lógica AND de 2 entradas. Consulte sua folha de dados para detalhes técnicos. Para que a saída seja alta (1), ambas as entradas devem ser altas (1), como mostrado em sua tabela verdade.',
        configuration: '2 entradas e 1 saída',
        type: '2 entradas / 1 saída',
        booleanFunction: 'Saída = A AND B',
        applications: ['Sistemas de controle', 'Circuitos aritméticos'],
        truthTable: [
          { 'Entrada A': 0, 'Entrada B': 0, saída: 0 },
          { 'Entrada A': 0, 'Entrada B': 1, saída: 0 },
          { 'Entrada A': 1, 'Entrada B': 0, saída: 0 },
          { 'Entrada A': 1, 'Entrada B': 1, saída: 1 }
        ]
      }
    }
  },
  {
    url: '7432',
    datasheet: '/static/images/74LS32.jpg',
    pdf: 'https://www.ti.com/lit/ds/symlink/sn74ls32.pdf',
    translations: {
      es: {
        label: 'Compuerta 7432 OR',
        heading: 'Compuerta lógica OR (Circuito Integrado 7432/74LS32)',
        description:
          'El circuito integrado 7432 es una compuerta lógica OR de 2 entradas. La salida será alta (1) si al menos una entrada es alta (1), verifica su tabla de verdad. El datasheet contiene más información.',
        configuration: '2 entradas y 1 salida',
        type: '2 entradas / 1 salida',
        booleanFunction: 'Salida = A OR B',
        applications: ['Sistemas de detección', 'Circuitos de selección'],
        truthTable: [
          { 'Entrada A': 0, 'Entrada B': 0, salida: 0 },
          { 'Entrada A': 0, 'Entrada B': 1, salida: 1 },
          { 'Entrada A': 1, 'Entrada B': 0, salida: 1 },
          { 'Entrada A': 1, 'Entrada B': 1, salida: 1 }
        ]
      },
      en: {
        label: '7432 OR Gate',
        heading: 'OR Logic Gate (Integrated Circuit 7432/74LS32)',
        description:
          'The 7432 integrated circuit is a 2-input OR logic gate. The output will be high (1) if at least one input is high (1), check its truth table. The datasheet contains more information.',
        configuration: '2 inputs and 1 output',
        type: '2 inputs / 1 output',
        booleanFunction: 'Output = A OR B',
        applications: ['Detection systems', 'Selection circuits'],
        truthTable: [
          { 'Input A': 0, 'Input B': 0, output: 0 },
          { 'Input A': 0, 'Input B': 1, output: 1 },
          { 'Input A': 1, 'Input B': 0, output: 1 },
          { 'Input A': 1, 'Input B': 1, output: 1 }
        ]
      },
      pt: {
        label: 'Porta 7432 OR',
        heading: 'Porta Lógica OR (Circuito Integrado 7432/74LS32)',
        description:
          'O circuito integrado 7432 é uma porta lógica OR de 2 entradas. A saída será alta (1) se pelo menos uma entrada for alta (1), verifique sua tabela verdade. A folha de dados contém mais informações.',
        configuration: '2 entradas e 1 saída',
        type: '2 entradas / 1 saída',
        booleanFunction: 'Saída = A OR B',
        applications: ['Sistemas de detecção', 'Circuitos de seleção'],
        truthTable: [
          { 'Entrada A': 0, 'Entrada B': 0, saída: 0 },
          { 'Entrada A': 0, 'Entrada B': 1, saída: 1 },
          { 'Entrada A': 1, 'Entrada B': 0, saída: 1 },
          { 'Entrada A': 1, 'Entrada B': 1, saída: 1 }
        ]
      }
    }
  },
  {
    url: '7404',
    datasheet: '/static/images/74LS04.jpg',
    pdf: 'https://www.ti.com/lit/ds/symlink/sn74ls04.pdf',
    translations: {
      es: {
        label: 'Compuerta 7404 NOT',
        heading: 'Compuerta lógica NOT (Circuito Integrado 7404/74LS04)',
        description:
          'El circuito integrado 7404 es una compuerta lógica NOT (inversor). Tiene 1 entrada y 1 salida, invirtiendo la señal. Revisa su tabla de verdad y datasheet para especificaciones.',
        configuration: '1 entrada y 1 salida',
        type: '1 entrada / 1 salida',
        booleanFunction: 'Salida = NOT A',
        applications: ['Inversión de señales', 'Osciladores'],
        truthTable: [
          { 'Entrada A': 0, salida: 1 },
          { 'Entrada A': 1, salida: 0 }
        ]
      },
      en: {
        label: '7404 NOT Gate',
        heading: 'NOT Logic Gate (Integrated Circuit 7404/74LS04)',
        description:
          'The 7404 integrated circuit is a NOT logic gate (inverter). It has 1 input and 1 output, inverting the signal. Check its truth table and datasheet for specifications.',
        configuration: '1 input and 1 output',
        type: '1 input / 1 output',
        booleanFunction: 'Output = NOT A',
        applications: ['Signal inversion', 'Oscillators'],
        truthTable: [
          { 'Input A': 0, output: 1 },
          { 'Input A': 1, output: 0 }
        ]
      },
      pt: {
        label: 'Porta 7404 NOT',
        heading: 'Porta Lógica NOT (Circuito Integrado 7404/74LS04)',
        description:
          'O circuito integrado 7404 é uma porta lógica NOT (inversor). Tem 1 entrada e 1 saída, invertendo o sinal. Verifique sua tabela verdade e folha de dados para especificações.',
        configuration: '1 entrada e 1 saída',
        type: '1 entrada / 1 saída',
        booleanFunction: 'Saída = NOT A',
        applications: ['Inversão de sinais', 'Osciladores'],
        truthTable: [
          { 'Entrada A': 0, saída: 1 },
          { 'Entrada A': 1, saída: 0 }
        ]
      }
    }
  },
  {
    url: '7400',
    datasheet: '/static/images/74LS00.jpg',
    pdf: 'https://www.ti.com/lit/ds/symlink/sn74ls00.pdf',
    translations: {
      es: {
        label: 'Compuerta 7400 NAND',
        heading: 'Compuerta lógica NAND (Circuito Integrado 7400/74LS00)',
        description:
          'El circuito integrado 7400 es una compuerta NAND de 2 entradas (AND + NOT). La salida es baja (0) solo si ambas entradas son altas (1), como indica su tabla de verdad. Consulta el datasheet para más detalles.',
        configuration: '2 entradas y 1 salida',
        type: '2 entradas / 1 salida',
        booleanFunction: 'Salida = NOT (A AND B)',
        applications: ['Circuitos de memoria (Flip-flops)', 'Compuerta lógica universal'],
        truthTable: [
          { 'Entrada A': 0, 'Entrada B': 0, salida: 1 },
          { 'Entrada A': 0, 'Entrada B': 1, salida: 1 },
          { 'Entrada A': 1, 'Entrada B': 0, salida: 1 },
          { 'Entrada A': 1, 'Entrada B': 1, salida: 0 }
        ]
      },
      en: {
        label: '7400 NAND Gate',
        heading: 'NAND Logic Gate (Integrated Circuit 7400/74LS00)',
        description:
          'The 7400 integrated circuit is a 2-input NAND gate (AND + NOT). The output is low (0) only if both inputs are high (1), as indicated by its truth table. Check the datasheet for more details.',
        configuration: '2 inputs and 1 output',
        type: '2 inputs / 1 output',
        booleanFunction: 'Output = NOT (A AND B)',
        applications: ['Memory circuits (Flip-flops)', 'Universal logic gate'],
        truthTable: [
          { 'Input A': 0, 'Input B': 0, output: 1 },
          { 'Input A': 0, 'Input B': 1, output: 1 },
          { 'Input A': 1, 'Input B': 0, output: 1 },
          { 'Input A': 1, 'Input B': 1, output: 0 }
        ]
      },
      pt: {
        label: 'Porta 7400 NAND',
        heading: 'Porta Lógica NAND (Circuito Integrado 7400/74LS00)',
        description:
          'O circuito integrado 7400 é uma porta NAND de 2 entradas (AND + NOT). A saída é baixa (0) apenas se ambas as entradas forem altas (1), como indicado por sua tabela verdade. Consulte a folha de dados para mais detalhes.',
        configuration: '2 entradas e 1 saída',
        type: '2 entradas / 1 saída',
        booleanFunction: 'Saída = NOT (A AND B)',
        applications: ['Circuitos de memória (Flip-flops)', 'Porta lógica universal'],
        truthTable: [
          { 'Entrada A': 0, 'Entrada B': 0, saída: 1 },
          { 'Entrada A': 0, 'Entrada B': 1, saída: 1 },
          { 'Entrada A': 1, 'Entrada B': 0, saída: 1 },
          { 'Entrada A': 1, 'Entrada B': 1, saída: 0 }
        ]
      }
    }
  },
  {
    url: '7486',
    datasheet: '/static/images/74LS86.jpg',
    pdf: 'https://www.ti.com/lit/ds/symlink/sn74ls86a.pdf',
    translations: {
      es: {
        label: 'Compuerta 7486 XOR',
        heading: 'Compuerta lógica XOR (Circuito Integrado 7486/74LS86)',
        description:
          'El circuito integrado 7486 es una compuerta XOR de 2 entradas. La salida es alta (1) si solo una entrada es alta (1), como se ve en su tabla de verdad. El datasheet proporciona información adicional.',
        configuration: '2 entradas y 1 salida',
        type: '2 entradas / 1 salida',
        booleanFunction: 'Salida = A XOR B',
        applications: ['Sumadores binarios', 'Comparadores de paridad', 'Cifrado'],
        truthTable: [
          { 'Entrada A': 0, 'Entrada B': 0, salida: 0 },
          { 'Entrada A': 0, 'Entrada B': 1, salida: 1 },
          { 'Entrada A': 1, 'Entrada B': 0, salida: 1 },
          { 'Entrada A': 1, 'Entrada B': 1, salida: 0 }
        ]
      },
      en: {
        label: '7486 XOR Gate',
        heading: 'XOR Logic Gate (Integrated Circuit 7486/74LS86)',
        description:
          'The 7486 integrated circuit is a 2-input XOR gate. The output is high (1) if only one input is high (1), as seen in its truth table. The datasheet provides additional information.',
        configuration: '2 inputs and 1 output',
        type: '2 inputs / 1 output',
        booleanFunction: 'Output = A XOR B',
        applications: ['Binary adders', 'Parity comparators', 'Encryption'],
        truthTable: [
          { 'Input A': 0, 'Input B': 0, output: 0 },
          { 'Input A': 0, 'Input B': 1, output: 1 },
          { 'Input A': 1, 'Input B': 0, output: 1 },
          { 'Input A': 1, 'Input B': 1, output: 0 }
        ]
      },
      pt: {
        label: 'Porta 7486 XOR',
        heading: 'Porta Lógica XOR (Circuito Integrado 7486/74LS86)',
        description:
          'O circuito integrado 7486 é uma porta XOR de 2 entradas. A saída é alta (1) se apenas uma entrada for alta (1), como visto em sua tabela verdade. A folha de dados fornece informações adicionais.',
        configuration: '2 entradas e 1 saída',
        type: '2 entradas / 1 saída',
        booleanFunction: 'Saída = A XOR B',
        applications: ['Somadores binários', 'Comparadores de paridade', 'Criptografia'],
        truthTable: [
          { 'Entrada A': 0, 'Entrada B': 0, saída: 0 },
          { 'Entrada A': 0, 'Entrada B': 1, saída: 1 },
          { 'Entrada A': 1, 'Entrada B': 0, saída: 1 },
          { 'Entrada A': 1, 'Entrada B': 1, saída: 0 }
        ]
      }
    }
  },
  {
    url: '7402',
    datasheet: '/static/images/7402.webp',
    pdf: 'https://www.ti.com/lit/ds/symlink/sn74ls02.pdf',
    translations: {
      es: {
        label: 'Compuerta 7402 NOR',
        heading: 'Compuerta lógica NOR (Circuito Integrado 7402/74LS02)',
        description:
          'El circuito integrado 7402 es una compuerta lógica NOR de 2 entradas. La salida será alta (1) solo si ambas entradas son bajas (0), como se muestra en su tabla de verdad.',
        configuration: '2 entradas y 1 salida',
        type: '2 entradas / 1 salida',
        booleanFunction: 'Salida = NOT (A OR B)',
        applications: ['Generadores de pulsos', 'Compuerta lógica universal'],
        truthTable: [
          { 'Entrada A': 0, 'Entrada B': 0, salida: 1 },
          { 'Entrada A': 0, 'Entrada B': 1, salida: 0 },
          { 'Entrada A': 1, 'Entrada B': 0, salida: 0 },
          { 'Entrada A': 1, 'Entrada B': 1, salida: 0 }
        ]
      },
      en: {
        label: '7402 NOR Gate',
        heading: 'NOR Logic Gate (Integrated Circuit 7402/74LS02)',
        description:
          'The 7402 integrated circuit is a 2-input NOR logic gate. The output will be high (1) only if both inputs are low (0), as shown in its truth table.',
        configuration: '2 inputs and 1 output',
        type: '2 inputs / 1 output',
        booleanFunction: 'Output = NOT (A OR B)',
        applications: ['Pulse generators', 'Universal logic gate'],
        truthTable: [
          { 'Input A': 0, 'Input B': 0, output: 1 },
          { 'Input A': 0, 'Input B': 1, output: 0 },
          { 'Input A': 1, 'Input B': 0, output: 0 },
          { 'Input A': 1, 'Input B': 1, output: 0 }
        ]
      },
      pt: {
        label: 'Porta 7402 NOR',
        heading: 'Porta Lógica NOR (Circuito Integrado 7402/74LS02)',
        description:
          'O circuito integrado 7402 é uma porta lógica NOR de 2 entradas. A saída será alta (1) apenas se ambas as entradas forem baixas (0), como mostrado em sua tabela verdade.',
        configuration: '2 entradas e 1 saída',
        type: '2 entradas / 1 saída',
        booleanFunction: 'Saída = NOT (A OR B)',
        applications: ['Geradores de pulso', 'Porta lógica universal'],
        truthTable: [
          { 'Entrada A': 0, 'Entrada B': 0, saída: 1 },
          { 'Entrada A': 0, 'Entrada B': 1, saída: 0 },
          { 'Entrada A': 1, 'Entrada B': 0, saída: 0 },
          { 'Entrada A': 1, 'Entrada B': 1, saída: 0 }
        ]
      }
    }
  },
  {
    url: '74266',
    datasheet: '/static/images/74266.png',
    pdf: 'https://www.ti.com/lit/ds/symlink/sn74ls266.pdf',
    translations: {
      es: {
        label: 'Compuerta 74266 XNOR',
        heading: 'Compuerta lógica XNOR (Circuito Integrado 74266/74LS266)',
        description:
          'El circuito integrado 74266 implementa compuertas XNOR de 2 entradas (igualdad lógica). La salida es alta (1) cuando ambas entradas son iguales.',
        configuration: '2 entradas y 1 salida',
        type: '2 entradas / 1 salida',
        booleanFunction: 'Salida = A XNOR B',
        applications: ['Comparadores de igualdad', 'Códigos de detección de errores'],
        truthTable: [
          { 'Entrada A': 0, 'Entrada B': 0, salida: 1 },
          { 'Entrada A': 0, 'Entrada B': 1, salida: 0 },
          { 'Entrada A': 1, 'Entrada B': 0, salida: 0 },
          { 'Entrada A': 1, 'Entrada B': 1, salida: 1 }
        ]
      },
      en: {
        label: '74266 XNOR Gate',
        heading: 'XNOR Logic Gate (Integrated Circuit 74266/74LS266)',
        description:
          'The 74266 integrated circuit implements 2-input XNOR gates (logical equality). The output is high (1) when both inputs are equal.',
        configuration: '2 inputs and 1 output',
        type: '2 inputs / 1 output',
        booleanFunction: 'Output = A XNOR B',
        applications: ['Equality comparators', 'Error detection codes'],
        truthTable: [
          { 'Input A': 0, 'Input B': 0, output: 1 },
          { 'Input A': 0, 'Input B': 1, output: 0 },
          { 'Input A': 1, 'Input B': 0, output: 0 },
          { 'Input A': 1, 'Input B': 1, output: 1 }
        ]
      },
      pt: {
        label: 'Porta 74266 XNOR',
        heading: 'Porta Lógica XNOR (Circuito Integrado 74266/74LS266)',
        description:
          'O circuito integrado 74266 implementa portas XNOR de 2 entradas (igualdade lógica). A saída é alta (1) quando ambas as entradas são iguais.',
        configuration: '2 entradas e 1 saída',
        type: '2 entradas / 1 saída',
        booleanFunction: 'Saída = A XNOR B',
        applications: ['Comparadores de igualdade', 'Códigos de detecção de erros'],
        truthTable: [
          { 'Entrada A': 0, 'Entrada B': 0, saída: 1 },
          { 'Entrada A': 0, 'Entrada B': 1, saída: 0 },
          { 'Entrada A': 1, 'Entrada B': 0, saída: 0 },
          { 'Entrada A': 1, 'Entrada B': 1, saída: 1 }
        ]
      }
    }
  },
  {
    url: '7407',
    datasheet: '/static/images/7407.png',
    pdf: 'https://www.ti.com/lit/ds/symlink/sn74ls07.pdf',
    translations: {
      es: {
        label: 'Compuerta 7407 Buffer',
        heading: 'Buffer (Circuito Integrado 7407/74LS07)',
        description:
          'El circuito integrado 7407 contiene buffers de colector abierto. Se usa para amplificar o aislar señales digitales, sin alterar su lógica.',
        configuration: '1 entrada y 1 salida',
        type: '1 entrada / 1 salida',
        booleanFunction: 'Salida = A',
        applications: ['Aislamiento de señal', 'Interfaz con otros niveles de voltaje'],
        truthTable: [
          { 'Entrada A': 0, salida: 0 },
          { 'Entrada A': 1, salida: 1 }
        ]
      },
      en: {
        label: '7407 Buffer Gate',
        heading: 'Buffer (Integrated Circuit 7407/74LS07)',
        description:
          'The 7407 integrated circuit contains open collector buffers. It is used to amplify or isolate digital signals without altering their logic.',
        configuration: '1 input and 1 output',
        type: '1 input / 1 output',
        booleanFunction: 'Output = A',
        applications: ['Signal isolation', 'Interface with other voltage levels'],
        truthTable: [
          { 'Input A': 0, output: 0 },
          { 'Input A': 1, output: 1 }
        ]
      },
      pt: {
        label: 'Porta 7407 Buffer',
        heading: 'Buffer (Circuito Integrado 7407/74LS07)',
        description:
          'O circuito integrado 7407 contém buffers de coletor aberto. É usado para amplificar ou isolar sinais digitais, sem alterar sua lógica.',
        configuration: '1 entrada e 1 saída',
        type: '1 entrada / 1 saída',
        booleanFunction: 'Saída = A',
        applications: ['Isolamento de sinal', 'Interface com outros níveis de tensão'],
        truthTable: [
          { 'Entrada A': 0, saída: 0 },
          { 'Entrada A': 1, saída: 1 }
        ]
      }
    }
  }
];

// Helper function to get translated content for logic gates
export function getLogicGateTranslation(
  url: string,
  locale: LocaleTypes = 'es'
): (LogicGateTranslations & { datasheet: string; pdf: string; url: string }) | undefined {
  const gate = LOGICGATES.find((gate) => gate.url === url);
  if (!gate) return undefined;
  
  return {
    ...gate.translations[locale],
    datasheet: gate.datasheet,
    pdf: gate.pdf,
    url: gate.url
  };
}
