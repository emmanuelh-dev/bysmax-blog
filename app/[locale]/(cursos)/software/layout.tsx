import SOFTWARE from '@/data/software'
import SoftwareLayout from '@/layouts/SoftwareLayout'
import React from 'react'

export default function layout({ children }) {
  return (
    <SoftwareLayout
      sidebar={SOFTWARE}
      title={''}
      description={''}
      authorDetails={[]}
      path={{ title: 'Software', href: '/software' }}
      toc={[]}
      slug={'/software'}
    >
      {children}
    </SoftwareLayout>
  )
}
