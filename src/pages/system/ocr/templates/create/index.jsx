import { RootProvider } from '@/Provider/RootProvider'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import CreateTemplates from '@/components/organisms/Authenticated/OCR/Templates/CreateTemplates/CreateTemplates'

export default function Page () {
  return (
    <CreateTemplates title='Nueva plantilla' />
  )
}

Page.getLayout = function getLayout (page) {
  return (
    <RootProvider>
      <LayoutAuth module='ocr'>{page}</LayoutAuth>
    </RootProvider>
  )
}
