'use client'
import React from 'react'

export default function GoogleAds() {
  return (
    <div>
      <ins
        className="adsbygoogle"
        style={{ display: 'inline-block', width: 728, height: 90 }}
        data-ad-client="ca-pub-3646138644530578"
        data-ad-slot="6731750998"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script
        dangerouslySetInnerHTML={{
          __html: '(window.adsbygoogle = window.adsbygoogle || []).push({});',
        }}
      />
    </div>
  )
}
