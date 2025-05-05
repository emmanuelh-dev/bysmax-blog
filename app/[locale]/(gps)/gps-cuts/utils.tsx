interface StepIndicatorProps {
  step: number
  label: string
  icon: React.ReactNode
  status: string
}

interface StepConnectorProps {
  active: boolean
}

export const StepIndicator = ({ step, label, icon, status }: StepIndicatorProps) => {
  const getStatusClasses = () => {
    switch (status) {
      case 'complete':
        return 'bg-emerald-600 text-white border-emerald-600'
      case 'current':
        return 'bg-white text-emerald-600 border-emerald-600'
      case 'disabled':
      default:
        return 'bg-gray-100 text-gray-400 border-gray-300'
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${getStatusClasses()}`}
      >
        {icon}
      </div>
      <span
        className={`mt-2 text-xs font-medium dark:text-white ${status === 'disabled' ? 'text-gray-400' : 'text-gray-700'}`}
      >
        {label}
      </span>
    </div>
  )
}

export const StepConnector = ({ active }: StepConnectorProps) => {
  return (
    <div className="mx-2 h-1 flex-1">
      <div className={`h-full ${active ? 'bg-emerald-600' : 'bg-gray-200'} rounded`}></div>
    </div>
  )
}
