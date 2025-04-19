export const LOGICGATES = [
  {
    url: '7408',
    heading: 'Compuerta AND (7408/74LS08)',
    datasheet: '/static/images/74LS08.jpg',
    description:
      'La compuerta 7408 es una compuerta AND de 2 entradas. Para que la salida de esta compuerta sea alta (1), ambas entradas deben ser altas (1).',
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
    heading: 'Compuerta OR (7432/74LS32)',
    datasheet: '/static/images/74LS32.jpg',
    description:
      'La compuerta 7432 es una compuerta OR de 2 entradas. La salida será alta (1) si al menos una de las entradas es alta (1).',
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
    heading: 'Compuerta NOT (7404/74LS04)',
    datasheet: '/static/images/74LS04.jpg',
    description:
      'La compuerta 7404 es una compuerta NOT, también conocida como inversor. Tiene una sola entrada y una salida, invirtiendo el estado lógico de la entrada.',
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
    heading: 'Compuerta NAND (7400/74LS00)',
    datasheet: '/static/images/74LS00.jpg',
    description:
      'La compuerta 7400 es una compuerta NAND de 2 entradas. Es una combinación de las compuertas AND y NOT. La salida será baja (0) solo cuando ambas entradas sean altas (1).',
    configuration: '2 entradas y 1 salida',
    booleanFunction: 'Salida = NOT (A AND B)',
    applications: ['Circuitos de memoria (Flip-flops)', 'Compuerta universal'],
    truthTable: [
      { 'Entrada A': 0, 'Entrada B': 0, salida: 1 },
      { 'Entrada A': 0, 'Entrada B': 1, salida: 1 },
      { 'Entrada A': 1, 'Entrada B': 0, salida: 1 },
      { 'Entrada A': 1, 'Entrada B': 1, salida: 0 },
    ],
  },
  {
    url: '7486',
    heading: 'Compuerta XOR (7486/74LS86)',
    datasheet: '/static/images/74LS86.jpg',
    description:
      'La compuerta 7486 es una compuerta XOR de 2 entradas. La salida será alta (1) si solo una de las entradas es alta (1).',
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
