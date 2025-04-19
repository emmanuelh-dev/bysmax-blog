'use client'

import { useState, useEffect } from 'react'
import { Bell } from 'lucide-react'
import { useParams } from 'next/navigation'
import { LocaleTypes } from '@/app/[locale]/i18n/settings'
import { useTranslation } from '@/app/[locale]/i18n/client'
import { Menu, Transition } from '@headlessui/react'

type Notification = {
  id: string
  title: string
  message: string
  url?: string
  read: boolean
  date: string
}

const NotificationBell = () => {
  const locale = useParams()?.locale as LocaleTypes
  const { t } = useTranslation(locale, 'common')
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const mockNotifications: Notification[] = [
      {
        id: '1',
        title: 'Nuevo artículo',
        message: 'Se ha publicado un nuevo artículo en el blog',
        url: '/',
        read: false,
        date: new Date(Date.now() - 3600000).toISOString(),
      },
      {
        id: '2',
        title: 'Actualización',
        message: 'El sistema ha sido actualizado a la versión más reciente',
        url: '/',
        read: false,
        date: new Date(Date.now() - 86400000).toISOString(),
      },
      {
        id: '3',
        title: 'Open Source',
        message: 'El blog ahora es de codigo abierto. Puedes ver el código en GitHub',
        url: '/',
        read: false,
        date: new Date(Date.now()).toISOString(),
      },
    ]

    // Verificar si hay notificaciones guardadas en localStorage
    const savedNotifications = localStorage.getItem('notifications')
    if (savedNotifications) {
      setNotifications(JSON.parse(savedNotifications))
    } else {
      setNotifications(mockNotifications)
      localStorage.setItem('notifications', JSON.stringify(mockNotifications))
    }
  }, [])

  // Guardar el estado de las notificaciones en localStorage cuando cambie
  useEffect(() => {
    if (notifications.length > 0) {
      localStorage.setItem('notifications', JSON.stringify(notifications))
    }
  }, [notifications])

  const unreadCount = notifications.filter((notification) => !notification.read).length

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    )
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notification) => ({ ...notification, read: true })))
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.RelativeTimeFormat(locale, { numeric: 'auto' }).format(
      Math.round((date.getTime() - Date.now()) / (1000 * 60 * 60 * 24)),
      'day'
    )
  }

  return (
    <div className="relative">
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button
              className="relative rounded-full p-1 text-neutral-700 hover:bg-neutral-100 focus:outline-none dark:text-neutral-200 dark:hover:bg-neutral-800"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">{t('notifications') || 'Notificaciones'}</span>
              <Bell className="h-6 w-6" />
              {unreadCount > 0 && (
                <span className="absolute right-0 top-0 flex h-2 w-2 rounded-full bg-red-500">
                  <span className="sr-only">{unreadCount} notificaciones sin leer</span>
                </span>
              )}
            </Menu.Button>

            <Transition
              show={open}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                className="absolute right-0 z-50 mt-2 w-80 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-neutral-800 dark:ring-neutral-700"
                static
              >
                <div className="border-b border-neutral-200 px-4 py-2 dark:border-neutral-700">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">
                      {t('notifications') || 'Notificaciones'}
                    </h3>
                    {unreadCount > 0 && (
                      <button
                        onClick={markAllAsRead}
                        className="text-xs font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        {t('markAllAsRead') || 'Marcar todas como leídas'}
                      </button>
                    )}
                  </div>
                </div>

                <div className="max-h-60 overflow-y-auto">
                  {notifications.length === 0 ? (
                    <div className="px-4 py-2 text-center text-sm text-neutral-500">
                      {t('noNotifications') || 'No hay notificaciones'}
                    </div>
                  ) : (
                    notifications.map((notification) => (
                      <Menu.Item key={notification.id}>
                        {({ active }) => (
                          <div
                            className={`${active ? 'bg-neutral-100 dark:bg-neutral-700' : ''} ${!notification.read ? 'bg-neutral-50 dark:bg-neutral-800/60' : ''} cursor-pointer px-4 py-2`}
                            onClick={() => markAsRead(notification.id)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault()
                                markAsRead(notification.id)
                              }
                            }}
                            tabIndex={0}
                            role="button"
                            aria-label={`${notification.title}: ${notification.message}`}
                          >
                            <div className="flex items-start justify-between">
                              <div>
                                <p className="text-sm font-medium text-neutral-900 dark:text-white">
                                  {notification.title}
                                </p>
                                <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                                  {notification.message}
                                </p>
                              </div>
                              {!notification.read && (
                                <span className="ml-2 mt-0.5 h-2 w-2 rounded-full bg-primary-500"></span>
                              )}
                            </div>
                            <p className="mt-1 text-xs text-neutral-400">
                              {formatDate(notification.date)}
                            </p>
                          </div>
                        )}
                      </Menu.Item>
                    ))
                  )}
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  )
}

export default NotificationBell
