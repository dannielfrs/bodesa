import { RootProvider } from '@/Provider/RootProvider'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import CreateEstablishments from '@/components/organisms/Authenticated/OCR/Establishments/CreateEstablishments/CreateEstablishments'

export default function Page ({ searchParams }) {
  return (
    <CreateEstablishments title='Ver establecimiento' disabled searchParams={searchParams} />
  )
}

Page.getLayout = function getLayout (page) {
  return (
    <RootProvider>
      <LayoutAuth module='ocr'>{page}</LayoutAuth>
    </RootProvider>
  )
}
