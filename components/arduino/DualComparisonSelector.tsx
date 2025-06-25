'use client'

import { ARDUINO_BOARDS } from '@/data/arduinos'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight, Zap, Cpu, HardDrive, Wifi } from 'lucide-react'
import Image from '@/components/Image'

interface DualComparisonSelectorProps {
  locale: string
}

export default function DualComparisonSelector({ locale }: DualComparisonSelectorProps) {
  const [board1Id, setBoard1Id] = useState('')
  const [board2Id, setBoard2Id] = useState('')
  const router = useRouter()

  const board1 = ARDUINO_BOARDS.find((b) => b.id === board1Id)
  const board2 = ARDUINO_BOARDS.find((b) => b.id === board2Id)

  const translations = {
    es: {
      title: 'Comparador de Placas',
      subtitle: 'Selecciona dos placas para compararlas',
      selectBoard1: 'Selecciona primera placa',
      selectBoard2: 'Selecciona segunda placa',
      compare: 'Comparar',
      specs: 'Especificaciones',
      clockSpeed: 'Velocidad',
      memory: 'Memoria',
      pins: 'Pines E/S',
      connectivity: 'Conectividad',
      price: 'Precio aprox.',
      currency: '$',
      wifi: 'Wi-Fi',
      bluetooth: 'Bluetooth',
      none: 'No',
      yes: 'Sí',
    },
    en: {
      title: 'Board Comparator',
      subtitle: 'Select two boards to compare them',
      selectBoard1: 'Select first board',
      selectBoard2: 'Select second board',
      compare: 'Compare',
      specs: 'Specifications',
      clockSpeed: 'Clock Speed',
      memory: 'Memory',
      pins: 'I/O Pins',
      connectivity: 'Connectivity',
      price: 'Approx. price',
      currency: '$',
      wifi: 'Wi-Fi',
      bluetooth: 'Bluetooth',
      none: 'No',
      yes: 'Yes',
    },
    pt: {
      title: 'Comparador de Placas',
      subtitle: 'Selecione duas placas para compará-las',
      selectBoard1: 'Selecione primeira placa',
      selectBoard2: 'Selecione segunda placa',
      compare: 'Comparar',
      specs: 'Especificações',
      clockSpeed: 'Velocidade',
      memory: 'Memória',
      pins: 'Pinos E/S',
      connectivity: 'Conectividade',
      price: 'Preço aprox.',
      currency: '$',
      wifi: 'Wi-Fi',
      bluetooth: 'Bluetooth',
      none: 'Não',
      yes: 'Sim',
    },
  }

  const t = translations[locale as keyof typeof translations] || translations.es

  const handleCompare = () => {
    if (board1Id && board2Id && board1Id !== board2Id) {
      window.location.href = `/${locale}/arduino/comparisons/${board1Id}-vs-${board2Id}`
    }
  }

  const getConnectivityInfo = (board: any) => {
    const hasWifi =
      board.name.toLowerCase().includes('wifi') ||
      board.name.toLowerCase().includes('esp32') ||
      board.id.includes('mkr_wifi')

    const hasBluetooth = board.name.toLowerCase().includes('esp32')

    return { hasWifi, hasBluetooth }
  }

  const getBoardPrice = (boardId: string) => {
    const prices: { [key: string]: number } = {
      uno: 25,
      nano: 20,
      mega2560: 45,
      leonardo: 30,
      micro: 25,
      due: 55,
      mkr_wifi_1010: 35,
      mkr_zero: 40,
      nano_every: 15,
      'portenta-h7': 120,
      esp32: 8,
      esp32_s3: 12,
      esp32_c3: 6,
    }
    return prices[boardId] || 30
  }

  return (
    <div className="mx-auto w-full max-w-6xl">
      {/* Header */}
      <div className="mb-8 text-center">
        <h2 className="mb-2 text-2xl font-semibold text-[#0a0a0a] dark:text-white">{t.title}</h2>
        <p className="text-[#737373]">{t.subtitle}</p>
      </div>

      {/* Selector Row */}
      <div className="mb-8 grid grid-cols-1 items-center gap-4 md:grid-cols-3">
        {/* Board 1 Selector */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#0a0a0a] dark:text-white">
            {t.selectBoard1}
          </label>
          <select
            value={board1Id}
            onChange={(e) => setBoard1Id(e.target.value)}
            className="w-full rounded-lg border border-[#e5e5e5] bg-white px-4 py-3 text-sm focus:border-[#0070f3] focus:outline-none focus:ring-1 focus:ring-[#0070f3] dark:border-[#333333] dark:bg-[#0a0a0a] dark:text-white"
          >
            <option value="">{t.selectBoard1}</option>
            {ARDUINO_BOARDS.map((board) => (
              <option key={board.id} value={board.id}>
                {board.name}
              </option>
            ))}
          </select>
        </div>

        {/* VS Indicator */}
        <div className="flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0070f3] font-semibold text-white">
            VS
          </div>
        </div>

        {/* Board 2 Selector */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#0a0a0a] dark:text-white">
            {t.selectBoard2}
          </label>
          <select
            value={board2Id}
            onChange={(e) => setBoard2Id(e.target.value)}
            className="w-full rounded-lg border border-[#e5e5e5] bg-white px-4 py-3 text-sm focus:border-[#0070f3] focus:outline-none focus:ring-1 focus:ring-[#0070f3] dark:border-[#333333] dark:bg-[#0a0a0a] dark:text-white"
          >
            <option value="">{t.selectBoard2}</option>
            {ARDUINO_BOARDS.filter((b) => b.id !== board1Id).map((board) => (
              <option key={board.id} value={board.id}>
                {board.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Preview Cards */}

      {/* Compare Button */}
      <div className="text-center">
        <button
          onClick={handleCompare}
          disabled={!board1Id || !board2Id || board1Id === board2Id}
          className={`inline-flex items-center gap-2 rounded-lg px-8 py-3 font-semibold transition-all ${
            board1Id && board2Id && board1Id !== board2Id
              ? 'bg-[#0070f3] text-white hover:bg-[#0060d3] hover:shadow-lg'
              : 'cursor-not-allowed bg-[#e5e5e5] text-[#737373] dark:bg-[#333333]'
          }`}
        >
          {t.compare}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
