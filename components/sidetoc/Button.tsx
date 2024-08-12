import { ArrowRightIcon } from './icon'
import useSidebarStore from './store'

const Button = () => {
  const { sidebarOpen, toggleSidebar } = useSidebarStore()

  return (
    <div className="fixed bottom-8 left-6 z-50">
      <button
        onClick={toggleSidebar}
        className="rounded-full bg-black p-2 text-white opacity-100 transition-colors hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-200"
      >
        <ArrowRightIcon
          className={`h-5 w-5 transform transition-transform ${sidebarOpen ? 'rotate-180' : ''}`}
        />
      </button>
    </div>
  )
}

export default Button
