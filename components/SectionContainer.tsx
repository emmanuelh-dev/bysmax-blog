import { ReactNode } from 'react'
import GoogleAds from './GoogleAds'

interface Props {
  children: ReactNode
}

export function SectionContainerWithAds({ children }: Props) {
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-6xl xl:px-0">
      {children}
      <GoogleAds />
    </section>
  )
}

export default function SectionContainer({ children }: Props) {
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-6xl xl:px-0">{children}</section>
  )
}
