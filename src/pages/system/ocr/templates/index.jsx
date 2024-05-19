import { RootProvider } from '@/Provider/RootProvider'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import Templates from '@/components/organisms/Authenticated/OCR/Templates/Templates'

export default function Page () {
  return (
    <Templates />
  )
}

Page.getLayout = function getLayout (page) {
  return (
    <RootProvider>
      <LayoutAuth module='ocr' title='Plantillas'>{page}</LayoutAuth>
    </RootProvider>
  )
}
