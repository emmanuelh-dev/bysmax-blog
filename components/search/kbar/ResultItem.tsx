interface ResultItemProps {
  item: {
    name: string
    subtitle?: string
    icon?: React.ReactNode
    shortcut?: string[]
  }
  active: boolean
}

const ResultItem: React.FC<ResultItemProps> = ({ item, active }) => (
  <div
    className={`flex cursor-pointer justify-between px-4 py-2 ${
      active
        ? 'bg-primary-600 text-neutral-100'
        : 'bg-transparent text-neutral-700 dark:text-neutral-100'
    }`}
  >
    <div className="flex space-x-2">
      {item.icon && <div className="mb-1 self-center">{item.icon}</div>}
      <div className="block">
        {item.subtitle && (
          <div className={`${active ? 'text-neutral-200' : 'text-neutral-400'} text-xs`}>
            {item.subtitle}
          </div>
        )}
        <div>{item.name}</div>
      </div>
    </div>
    {item.shortcut?.length ? (
      <div aria-hidden className="flex flex-row items-center justify-center gap-x-2">
        {item.shortcut.map((sc) => (
          <kbd
            key={sc}
            className={`flex h-7 w-6 items-center justify-center rounded border text-xs font-medium ${
              active ? 'border-neutral-200 text-neutral-200' : 'border-neutral-400 text-neutral-400'
            }`}
          >
            {sc}
          </kbd>
        ))}
      </div>
    ) : null}
  </div>
)

export default ResultItem
