'use client'
import React, { useEffect } from 'react'

export default function GoogleAds() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const adsbygoogle = (window as any).adsbygoogle
    if (adsbygoogle && adsbygoogle.push) {
      adsbygoogle.push({})
    }
  }, [])

  return (
    <div>
      <ins
        className="adsbygoogle"
        style={{ display: 'inline-block', width: 220, height: 728 }}
        data-ad-client="ca-pub-3646138644530578"
        data-ad-slot="6731750998"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  )
}
