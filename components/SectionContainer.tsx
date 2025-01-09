'use client'
import { ReactNode, useEffect } from 'react'

interface Props {
  children: ReactNode
}

export function SectionContainerWithAds({ children }: Props) {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({})
  }, [])
  return <>{children}</>
}

export default function SectionContainer({ children }: Props) {
  return <section className="container mx-auto space-y-8 2xl:px-0">{children}</section>
}
