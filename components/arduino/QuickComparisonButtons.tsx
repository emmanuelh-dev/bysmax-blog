'use client'

import { useState } from 'react'
import { ARDUINO_BOARDS } from '@/data/arduinos'
import { Trophy, Zap, Wifi } from 'lucide-react'
import DualComparisonSelector from './DualComparisonSelector'

interface QuickComparisonButtonsProps {
  locale: string
}

export default function QuickComparisonButtons({ locale }: QuickComparisonButtonsProps) {
  const [showFullSelector, setShowFullSelector] = useState(false)

  const quickComparisons = [
    { board1: 'uno', board2: 'esp32', label: 'Arduino Uno vs ESP32' },
    { board1: 'nano', board2: 'esp32', label: 'Arduino Nano vs ESP32' },
    { board1: 'mega2560', board2: 'esp32', label: 'Arduino Mega vs ESP32' },
    { board1: 'esp32', board2: 'esp32_s3', label: 'ESP32 vs ESP32-S3' },
  ]

  const translations = {
    es: {
      quickComparisons: 'Comparaciones Rápidas',
      customComparison: 'Comparación Personalizada',
      showMore: 'Mostrar más opciones',
      showLess: 'Mostrar menos opciones',
    },
    en: {
      quickComparisons: 'Quick Comparisons',
      customComparison: 'Custom Comparison',
      showMore: 'Show more options',
      showLess: 'Show fewer options',
    },
    pt: {
      quickComparisons: 'Comparações Rápidas',
      customComparison: 'Comparação Personalizada',
      showMore: 'Mostrar mais opções',
      showLess: 'Mostrar menos opções',
    },
  }

  const t = translations[locale as keyof typeof translations] || translations.es

  const getIconForComparison = (board1: string, board2: string) => {
    if (board1.includes('esp32') || board2.includes('esp32')) {
      return <Wifi className="h-4 w-4" />
    }
    if (board1.includes('mega') || board2.includes('mega')) {
      return <Trophy className="h-4 w-4" />
    }
    return <Zap className="h-4 w-4" />
  }

  return (
    <div className="space-y-8">
      {/* Quick Comparison Buttons */}
      <DualComparisonSelector locale={locale} />
    </div>
  )
}
