import { RootProvider } from '@/Provider/RootProvider'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import Fields from '@/components/organisms/Authenticated/OCR/Fields/Fields'

export default function Page () {
  return (
    <Fields />
  )
}

Page.getLayout = function getLayout (page) {
  return (
    <RootProvider>
      <LayoutAuth module='ocr' title='Campos'>{page}</LayoutAuth>
    </RootProvider>
  )
}
