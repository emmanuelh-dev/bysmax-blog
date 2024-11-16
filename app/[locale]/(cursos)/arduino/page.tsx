import CursoLayout from '@/layouts/CursoLayout'

export default function page() {
  return (
    <CursoLayout
      title="title"
      sidebar={[]}
      path={{ title: 'Arduino', href: '/arduino' }}
      toc={[]}
      description={''}
      authorDetails={[]}
      slug={'/arduino'}
    >
      <div>Hola</div>
    </CursoLayout>
  )
}
