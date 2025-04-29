export const LOGICGATES = [
  {
    url: '7408',
    heading: 'Compuerta lógica AND (Circuito Integrado 7408/74LS08)',
    datasheet: '/static/images/74LS08.jpg',
    description:
      'El circuito integrado 7408 es una compuerta lógica AND de 2 entradas. Consulta su datasheet para detalles técnicos. Para que la salida sea alta (1), ambas entradas deben ser altas (1), como se muestra en su tabla de verdad.',
    configuration: '2 entradas y 1 salida',
    booleanFunction: 'Salida = A AND B',
    applications: ['Sistemas de control', 'Circuitos aritméticos'],
    truthTable: [
      { 'Entrada A': 0, 'Entrada B': 0, salida: 0 },
      { 'Entrada A': 0, 'Entrada B': 1, salida: 0 },
      { 'Entrada A': 1, 'Entrada B': 0, salida: 0 },
      { 'Entrada A': 1, 'Entrada B': 1, salida: 1 },
    ],
  },
  {
    url: '7432',
    heading: 'Compuerta lógica OR (Circuito Integrado 7432/74LS32)',
    datasheet: '/static/images/74LS32.jpg',
    description:
      'El circuito integrado 7432 es una compuerta lógica OR de 2 entradas. La salida será alta (1) si al menos una entrada es alta (1), verifica su tabla de verdad. El datasheet contiene más información.',
    configuration: '2 entradas y 1 salida',
    booleanFunction: 'Salida = A OR B',
    applications: ['Sistemas de detección', 'Circuitos de selección'],
    truthTable: [
      { 'Entrada A': 0, 'Entrada B': 0, salida: 0 },
      { 'Entrada A': 0, 'Entrada B': 1, salida: 1 },
      { 'Entrada A': 1, 'Entrada B': 0, salida: 1 },
      { 'Entrada A': 1, 'Entrada B': 1, salida: 1 },
    ],
  },
  {
    url: '7404',
    heading: 'Compuerta lógica NOT (Circuito Integrado 7404/74LS04)',
    datasheet: '/static/images/74LS04.jpg',
    description:
      'El circuito integrado 7404 es una compuerta lógica NOT (inversor). Tiene 1 entrada y 1 salida, invirtiendo la señal. Revisa su tabla de verdad y datasheet para especificaciones.',
    configuration: '1 entrada y 1 salida',
    booleanFunction: 'Salida = NOT A',
    applications: ['Inversión de señales', 'Osciladores'],
    truthTable: [
      { 'Entrada A': 0, 'Entrada B': 0, salida: 1 },
      { 'Entrada A': 0, 'Entrada B': 1, salida: 0 },
    ],
  },
  {
    url: '7400',
    heading: 'Compuerta lógica NAND (Circuito Integrado 7400/74LS00)',
    datasheet: '/static/images/74LS00.jpg',
    description:
      'El circuito integrado 7400 es una compuerta NAND de 2 entradas (AND + NOT). La salida es baja (0) solo si ambas entradas son altas (1), como indica su tabla de verdad. Consulta el datasheet para más detalles.',
    configuration: '2 entradas y 1 salida',
    booleanFunction: 'Salida = NOT (A AND B)',
    applications: ['Circuitos de memoria (Flip-flops)', 'Compuerta lógica universal'],
    truthTable: [
      { 'Entrada A': 0, 'Entrada B': 0, salida: 1 },
      { 'Entrada A': 0, 'Entrada B': 1, salida: 1 },
      { 'Entrada A': 1, 'Entrada B': 0, salida: 1 },
      { 'Entrada A': 1, 'Entrada B': 1, salida: 0 },
    ],
  },
  {
    url: '7486',
    heading: 'Compuerta lógica XOR (Circuito Integrado 7486/74LS86)',
    datasheet: '/static/images/74LS86.jpg',
    description:
      'El circuito integrado 7486 es una compuerta XOR de 2 entradas. La salida es alta (1) si solo una entrada es alta (1), como se ve en su tabla de verdad. El datasheet proporciona información adicional.',
    configuration: '2 entradas y 1 salida',
    booleanFunction: 'Salida = A XOR B',
    applications: ['Sumadores binarios', 'Comparadores de paridad', 'Cifrado'],
    truthTable: [
      { 'Entrada A': 0, 'Entrada B': 0, salida: 0 },
      { 'Entrada A': 0, 'Entrada B': 1, salida: 1 },
      { 'Entrada A': 1, 'Entrada B': 0, salida: 1 },
      { 'Entrada A': 1, 'Entrada B': 1, salida: 0 },
    ],
  },
]
