import { RootProvider } from '@/Provider/RootProvider'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import Establishments from '@/components/organisms/Authenticated/OCR/Establishments/Establishments'

export default function Page () {
  return (
    <Establishments />
  )
}

Page.getLayout = function getLayout (page) {
  return (
    <RootProvider>
      <LayoutAuth module='ocr' title='Establecimientos'>{page}</LayoutAuth>
    </RootProvider>
  )
}
