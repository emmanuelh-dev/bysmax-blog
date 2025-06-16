import { ArduinoBoard } from './arduinos'

export interface ComparisonData {
  board1: ArduinoBoard
  board2: ArduinoBoard
  winner: {
    performance: 'board1' | 'board2' | 'tie'
    memory: 'board1' | 'board2' | 'tie'
    io: 'board1' | 'board2' | 'tie'
    power: 'board1' | 'board2' | 'tie'
    connectivity: 'board1' | 'board2' | 'tie'
    price: 'board1' | 'board2' | 'tie'
    overall: 'board1' | 'board2' | 'tie'
  }
  scores: {
    board1: number
    board2: number
  }
}

export interface ComparisonUITranslation {
  pageTitle: string
  pageDescription: string
  sections: {
    overview: string
    specifications: string
    performance: string
    verdict: string
    winner: string
    comparison: string
    advantages: string
    disadvantages: string
    recommendation: string
  }
  labels: {
    vs: string
    winner: string
    tie: string
    score: string
    category: string
    better: string
    worse: string
    equal: string
    recommended: string
    viewDetails: string
    buyNow: string
    readMore: string
    pros: string
    cons: string
    bestFor: string
  }
  categories: {
    performance: string
    memory: string
    io: string
    power: string
    connectivity: string
    price: string
    overall: string
  }
  descriptions: {
    comparisonIntro: string
    performanceDesc: string
    memoryDesc: string
    ioDesc: string
    powerDesc: string
    connectivityDesc: string
    priceDesc: string
  }
}

const ES_TRANSLATIONS: ComparisonUITranslation = {
  pageTitle: 'Arduino {board1} vs {board2} - Comparativa Completa 2025',
  pageDescription: 'Comparativa detallada entre {board1} y {board2}. Descubre cuál es mejor para tu proyecto con especificaciones, precios y recomendaciones de expertos.',
  sections: {
    overview: 'Resumen de la Comparativa',
    specifications: 'Especificaciones Técnicas',
    performance: 'Rendimiento',
    verdict: 'Veredicto Final',
    winner: 'Ganador',
    comparison: 'Comparación',
    advantages: 'Ventajas',
    disadvantages: 'Desventajas',
    recommendation: 'Recomendación'
  },
  labels: {
    vs: 'vs',
    winner: 'Ganador',
    tie: 'Empate',
    score: 'Puntuación',
    category: 'Categoría',
    better: 'Mejor',
    worse: 'Peor',
    equal: 'Igual',
    recommended: 'Recomendado',
    viewDetails: 'Ver Detalles',
    buyNow: 'Comprar Ahora',
    readMore: 'Leer Más',
    pros: 'Ventajas',
    cons: 'Desventajas',
    bestFor: 'Mejor para'
  },
  categories: {
    performance: 'Rendimiento',
    memory: 'Memoria',
    io: 'Entradas/Salidas',
    power: 'Alimentación',
    connectivity: 'Conectividad',
    price: 'Precio',
    overall: 'General'
  },
  descriptions: {
    comparisonIntro: 'Comparamos estas dos populares placas Arduino para ayudarte a elegir la mejor opción para tu proyecto.',
    performanceDesc: 'Velocidad de procesamiento, arquitectura y capacidad de cálculo.',
    memoryDesc: 'Memoria flash, SRAM y capacidad de almacenamiento.',
    ioDesc: 'Cantidad de pines digitales, analógicos y funciones especiales.',
    powerDesc: 'Voltaje de operación, consumo energético y opciones de alimentación.',
    connectivityDesc: 'Protocolos de comunicación, Wi-Fi, Bluetooth y conectores.',
    priceDesc: 'Relación calidad-precio y disponibilidad en el mercado.'
  }
}

const EN_TRANSLATIONS: ComparisonUITranslation = {
  pageTitle: 'Arduino {board1} vs {board2} - Complete Comparison 2025',
  pageDescription: 'Detailed comparison between {board1} and {board2}. Discover which is better for your project with specifications, prices, and expert recommendations.',
  sections: {
    overview: 'Comparison Overview',
    specifications: 'Technical Specifications',
    performance: 'Performance',
    verdict: 'Final Verdict',
    winner: 'Winner',
    comparison: 'Comparison',
    advantages: 'Advantages',
    disadvantages: 'Disadvantages',
    recommendation: 'Recommendation'
  },
  labels: {
    vs: 'vs',
    winner: 'Winner',
    tie: 'Tie',
    score: 'Score',
    category: 'Category',
    better: 'Better',
    worse: 'Worse',
    equal: 'Equal',
    recommended: 'Recommended',
    viewDetails: 'View Details',
    buyNow: 'Buy Now',
    readMore: 'Read More',
    pros: 'Pros',
    cons: 'Cons',
    bestFor: 'Best for'
  },
  categories: {
    performance: 'Performance',
    memory: 'Memory',
    io: 'I/O',
    power: 'Power',
    connectivity: 'Connectivity',
    price: 'Price',
    overall: 'Overall'
  },
  descriptions: {
    comparisonIntro: 'We compare these two popular Arduino boards to help you choose the best option for your project.',
    performanceDesc: 'Processing speed, architecture, and computing capability.',
    memoryDesc: 'Flash memory, SRAM, and storage capacity.',
    ioDesc: 'Number of digital, analog pins, and special functions.',
    powerDesc: 'Operating voltage, power consumption, and power supply options.',
    connectivityDesc: 'Communication protocols, Wi-Fi, Bluetooth, and connectors.',
    priceDesc: 'Value for money and market availability.'
  }
}

const PT_TRANSLATIONS: ComparisonUITranslation = {
  pageTitle: 'Arduino {board1} vs {board2} - Comparação Completa 2025',
  pageDescription: 'Comparação detalhada entre {board1} e {board2}. Descubra qual é melhor para seu projeto com especificações, preços e recomendações de especialistas.',
  sections: {
    overview: 'Visão Geral da Comparação',
    specifications: 'Especificações Técnicas',
    performance: 'Desempenho',
    verdict: 'Veredicto Final',
    winner: 'Vencedor',
    comparison: 'Comparação',
    advantages: 'Vantagens',
    disadvantages: 'Desvantagens',
    recommendation: 'Recomendação'
  },
  labels: {
    vs: 'vs',
    winner: 'Vencedor',
    tie: 'Empate',
    score: 'Pontuação',
    category: 'Categoria',
    better: 'Melhor',
    worse: 'Pior',
    equal: 'Igual',
    recommended: 'Recomendado',
    viewDetails: 'Ver Detalhes',
    buyNow: 'Comprar Agora',
    readMore: 'Ler Mais',
    pros: 'Vantagens',
    cons: 'Desvantagens',
    bestFor: 'Melhor para'
  },
  categories: {
    performance: 'Desempenho',
    memory: 'Memória',
    io: 'E/S',
    power: 'Energia',
    connectivity: 'Conectividade',
    price: 'Preço',
    overall: 'Geral'
  },
  descriptions: {
    comparisonIntro: 'Comparamos essas duas placas Arduino populares para ajudá-lo a escolher a melhor opção para seu projeto.',
    performanceDesc: 'Velocidade de processamento, arquitetura e capacidade de computação.',
    memoryDesc: 'Memória flash, SRAM e capacidade de armazenamento.',
    ioDesc: 'Número de pinos digitais, analógicos e funções especiais.',
    powerDesc: 'Voltagem de operação, consumo de energia e opções de alimentação.',
    connectivityDesc: 'Protocolos de comunicação, Wi-Fi, Bluetooth e conectores.',
    priceDesc: 'Relação custo-benefício e disponibilidade no mercado.'
  }
}

export function getComparisonUITranslation(locale: 'es' | 'en' | 'pt'): ComparisonUITranslation {
  switch (locale) {
    case 'en':
      return EN_TRANSLATIONS
    case 'pt':
      return PT_TRANSLATIONS
    case 'es':
    default:
      return ES_TRANSLATIONS
  }
}

// Función para calcular el ganador en cada categoría
export function calculateComparison(board1: ArduinoBoard, board2: ArduinoBoard): ComparisonData {
  const winner = {
    performance: comparePerformance(board1, board2),
    memory: compareMemory(board1, board2),
    io: compareIO(board1, board2),
    power: comparePower(board1, board2),
    connectivity: compareConnectivity(board1, board2),
    price: comparePrice(board1, board2),
    overall: 'tie' as 'board1' | 'board2' | 'tie'
  }

  // Calcular puntuaciones
  const scores = calculateScores(winner)
  
  // Determinar ganador general
  if (scores.board1 > scores.board2) {
    winner.overall = 'board1'
  } else if (scores.board2 > scores.board1) {
    winner.overall = 'board2'
  } else {
    winner.overall = 'tie'
  }

  return {
    board1,
    board2,
    winner,
    scores
  }
}

function comparePerformance(board1: ArduinoBoard, board2: ArduinoBoard): 'board1' | 'board2' | 'tie' {
  const freq1 = parseInt(board1.clockSpeed)
  const freq2 = parseInt(board2.clockSpeed)
  
  // Considerar arquitectura también
  const isArm1 = board1.architecture.includes('ARM')
  const isArm2 = board2.architecture.includes('ARM')
  
  if (isArm1 && !isArm2) return 'board1'
  if (isArm2 && !isArm1) return 'board2'
  
  if (freq1 > freq2) return 'board1'
  if (freq2 > freq1) return 'board2'
  return 'tie'
}

function compareMemory(board1: ArduinoBoard, board2: ArduinoBoard): 'board1' | 'board2' | 'tie' {
  const flash1 = parseMemory(board1.flashMemory)
  const flash2 = parseMemory(board2.flashMemory)
  const sram1 = parseMemory(board1.sram)
  const sram2 = parseMemory(board2.sram)
  
  const total1 = flash1 + sram1
  const total2 = flash2 + sram2
  
  if (total1 > total2) return 'board1'
  if (total2 > total1) return 'board2'
  return 'tie'
}

function compareIO(board1: ArduinoBoard, board2: ArduinoBoard): 'board1' | 'board2' | 'tie' {
  const digital1 = parseInt(board1.digitalIO)
  const digital2 = parseInt(board2.digitalIO)
  const analog1 = parseInt(board1.analogIO)
  const analog2 = parseInt(board2.analogIO)
  
  const total1 = digital1 + analog1
  const total2 = digital2 + analog2
  
  if (total1 > total2) return 'board1'
  if (total2 > total1) return 'board2'
  return 'tie'
}

function comparePower(board1: ArduinoBoard, board2: ArduinoBoard): 'board1' | 'board2' | 'tie' {
  const voltage1 = parseFloat(board1.operatingVoltage)
  const voltage2 = parseFloat(board2.operatingVoltage)
  
  // 3.3V es mejor para consumo bajo, 5V para compatibilidad
  if (voltage1 === 3.3 && voltage2 === 5) return 'board1'
  if (voltage2 === 3.3 && voltage1 === 5) return 'board2'
  return 'tie'
}

function compareConnectivity(board1: ArduinoBoard, board2: ArduinoBoard): 'board1' | 'board2' | 'tie' {
  const conn1 = board1.communication.split(', ').length
  const conn2 = board2.communication.split(', ').length
  
  const hasWifi1 = board1.communication.includes('Wi-Fi')
  const hasWifi2 = board2.communication.includes('Wi-Fi')
  
  if (hasWifi1 && !hasWifi2) return 'board1'
  if (hasWifi2 && !hasWifi1) return 'board2'
  
  if (conn1 > conn2) return 'board1'
  if (conn2 > conn1) return 'board2'
  return 'tie'
}

function comparePrice(board1: ArduinoBoard, board2: ArduinoBoard): 'board1' | 'board2' | 'tie' {
  // Precios aproximados basados en el modelo (esto podría venir de una API)
  const prices: { [key: string]: number } = {
    'uno': 25,
    'nano': 20,
    'mega2560': 45,
    'leonardo': 30,
    'micro': 25,
    'due': 55,
    'mkr_wifi_1010': 35,
    'mkr_zero': 40,
    'nano_every': 15,
    'portenta-h7': 120
  }
  
  const price1 = prices[board1.id] || 30
  const price2 = prices[board2.id] || 30
  
  if (price1 < price2) return 'board1'
  if (price2 < price1) return 'board2'
  return 'tie'
}

function calculateScores(winner: ComparisonData['winner']): { board1: number; board2: number } {
  const categories = ['performance', 'memory', 'io', 'power', 'connectivity', 'price']
  let board1Score = 0
  let board2Score = 0
  
  categories.forEach(category => {
    const result = winner[category as keyof typeof winner]
    if (result === 'board1') board1Score++
    else if (result === 'board2') board2Score++
  })
  
  return { board1: board1Score, board2: board2Score }
}

function parseMemory(memoryStr: string): number {
  const num = parseInt(memoryStr)
  if (memoryStr.includes('MB')) return num * 1024
  if (memoryStr.includes('GB')) return num * 1024 * 1024
  return num // KB
}

// Comparativas populares predefinidas
export const POPULAR_COMPARISONS = [
  { board1: 'uno', board2: 'nano' },
  { board1: 'uno', board2: 'mega2560' },
  { board1: 'nano', board2: 'nano_every' },
  { board1: 'leonardo', board2: 'micro' },
  { board1: 'due', board2: 'portenta-h7' },
  { board1: 'mkr_wifi_1010', board2: 'mkr_zero' },
  { board1: 'uno', board2: 'due' },
  { board1: 'nano', board2: 'leonardo' }
]
