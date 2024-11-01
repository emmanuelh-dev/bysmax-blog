import { ReactNode } from 'react'
import GoogleAds from './GoogleAds'

interface Props {
  children: ReactNode
}

export function SectionContainerWithAds({ children }: Props) {
  return (
    <>
      {children}
      <GoogleAds />
    </>
  )
}

export default function SectionContainer({ children }: Props) {
  return <section className="mx-auto container xl:px-0">{children}</section>
}
