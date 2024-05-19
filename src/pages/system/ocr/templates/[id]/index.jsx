import { RootProvider } from '@/Provider/RootProvider'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import EditTemplates from '@/components/organisms/Authenticated/OCR/Templates/EditTemplates/EditTemplates'

export default function Page () {
  return (
    <EditTemplates showMode title='Ver plantilla' />
  )
}

Page.getLayout = function getLayout (page) {
  return (
    <RootProvider>
      <LayoutAuth module='ocr'>{page}</LayoutAuth>
    </RootProvider>
  )
}
