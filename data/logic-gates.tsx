export const LOGICGATES = [
  {
    url: '7408',
    label: 'Compuerta 7408 AND',
    heading: 'Compuerta lógica AND (Circuito Integrado 7408/74LS08)',
    datasheet: '/static/images/74LS08.jpg',
    pdf: 'https://www.ti.com/lit/ds/symlink/sn74ls08.pdf',
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
  {
    url: '7432',
    label: 'Compuerta 7432 OR',
    heading: 'Compuerta lógica OR (Circuito Integrado 7432/74LS32)',
    datasheet: '/static/images/74LS32.jpg',
    pdf: 'https://www.ti.com/lit/ds/symlink/sn74ls32.pdf',
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
  {
    url: '7404',
    label: 'Compuerta 7404 NOT',
    heading: 'Compuerta lógica NOT (Circuito Integrado 7404/74LS04)',
    datasheet: '/static/images/74LS04.jpg',
    pdf: 'https://www.ti.com/lit/ds/symlink/sn74ls04.pdf',
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
  {
    url: '7400',
    label: 'Compuerta 7400 NAND',
    heading: 'Compuerta lógica NAND (Circuito Integrado 7400/74LS00)',
    datasheet: '/static/images/74LS00.jpg',
    pdf: 'https://www.ti.com/lit/ds/symlink/sn74ls00.pdf',
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
  {
    url: '7486',
    label: 'Compuerta 7486 XOR',
    heading: 'Compuerta lógica XOR (Circuito Integrado 7486/74LS86)',
    datasheet: '/static/images/74LS86.jpg',
    pdf: 'https://www.ti.com/lit/ds/symlink/sn74ls86a.pdf',
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
  {
    url: '7402',
    label: 'Compuerta 7402 NOR',
    heading: 'Compuerta lógica NOR (Circuito Integrado 7402/74LS02)',
    datasheet: '/static/images/7402.webp',
    pdf: 'https://www.ti.com/lit/ds/symlink/sn74ls02.pdf',
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
  {
    url: '74266',
    label: 'Compuerta 74266 XNOR',
    heading: 'Compuerta lógica XNOR (Circuito Integrado 74266/74LS266)',
    datasheet: '/static/images/74266.png',
    pdf: 'https://www.ti.com/lit/ds/symlink/sn74ls266.pdf',
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
  {
    url: '7407',
    label: 'Compuerta 7407 Buffer',
    heading: 'Buffer (Circuito Integrado 7407/74LS07)',
    datasheet: '/static/images/7407.png',
    pdf: 'https://www.ti.com/lit/ds/symlink/sn74ls07.pdf',
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
  }
];
