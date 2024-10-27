import { CopyToClipboard } from '../icons'

interface CopyButtonProps {
  show: boolean
  copyUrl: () => void
  showCopied: boolean
  t: (key: string) => string
}

const CopyButton: React.FC<CopyButtonProps> = ({ show, copyUrl, showCopied, t }) => (
  <div className="relative inline-block">
    {!show && (
      <button
        className="flex flex-row items-center justify-center rounded-md bg-white px-2 py-1 text-neutral-700 shadow-lg ring-1 ring-black ring-opacity-5 hover:bg-neutral-100 hover:text-primary-500 focus:outline-none dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-600 dark:hover:text-primary-500"
        onClick={copyUrl}
      >
        <span className="mr-2">
          <CopyToClipboard />
        </span>
        <div className="sm:hidden">Url</div>
        <div className="hidden sm:block">{t('copyurl')}</div>
      </button>
    )}
    {showCopied && (
      <div className="absolute right-0 top-10 z-50 rounded-md bg-white p-2 text-center shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-neutral-800">
        <p className="text-primary-500 dark:text-primary-400">{t('urlcopied')}</p>
      </div>
    )}
  </div>
)

export default CopyButton
