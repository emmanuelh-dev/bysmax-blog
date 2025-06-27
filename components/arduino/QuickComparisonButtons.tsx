'use client'

import { useState } from 'react'
import { ARDUINO_BOARDS } from '@/data/arduinos'
import { Trophy, Zap, Wifi } from 'lucide-react'
import DualComparisonSelector from './DualComparisonSelector'

interface QuickComparisonButtonsProps {
  locale: string
}

export default function QuickComparisonButtons({ locale }: QuickComparisonButtonsProps) {
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
      {/* Interactive Selector */}
      <DualComparisonSelector locale={locale} />
    </div>
  )
}
