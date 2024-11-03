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
  return <section className="container mx-auto space-y-8 px-8 2xl:px-0">{children}</section>
}
