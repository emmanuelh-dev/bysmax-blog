'use client'
import React, { useEffect } from 'react'

const AdComponent: React.FC = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ;((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({})
    }, 500)

    // Cleanup timeout on component unmount
    return () => clearTimeout(timer)
  }, [])

  return <></>
}

export default AdComponent
