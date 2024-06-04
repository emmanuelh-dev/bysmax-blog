'use client'
import React, { useEffect } from 'react'

const AdComponent: React.FC = () => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({})
  }, [])

  return <></>
}

export default AdComponent
