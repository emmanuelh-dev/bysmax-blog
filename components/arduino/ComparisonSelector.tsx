'use client'

import { ARDUINO_BOARDS } from '@/data/arduinos'
import { useRouter } from 'next/navigation'

interface ComparisonSelectorProps {
  currentBoardId: string
  locale: string
  placeholder: string
}

export default function ComparisonSelector({
  currentBoardId,
  locale,
  placeholder,
}: ComparisonSelectorProps) {
  const router = useRouter()

  const handleComparisonSelect = (selectedBoardId: string) => {
    if (selectedBoardId) {
      window.location.href = `/${locale}/arduino/comparisons/${currentBoardId}-vs-${selectedBoardId}`
    }
  }

  return (
    <select
      className="rounded border border-[#e5e5e5] bg-white px-2 py-1 text-sm dark:border-[#333333] dark:bg-[#0a0a0a] dark:text-white"
      onChange={(e) => handleComparisonSelect(e.target.value)}
      defaultValue=""
    >
      <option value="">{placeholder}</option>
      {ARDUINO_BOARDS.filter((b) => b.id !== currentBoardId).map((b) => (
        <option key={b.id} value={b.id}>
          {b.name}
        </option>
      ))}
    </select>
  )
}
