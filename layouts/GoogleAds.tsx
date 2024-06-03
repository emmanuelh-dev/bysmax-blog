'use client'
import React, { useEffect } from 'react'

export default function GoogleAds() {
  useEffect(() => {
    if (window.adsbygoogle && window.adsbygoogle.push) {
      window.adsbygoogle.push({})
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
