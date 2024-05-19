import { RootProvider } from '@/Provider/RootProvider'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import { LayoutSubmenu } from '@/components/layouts/LayoutSubmenu/LayoutSubmenu'
import FormDocumentsTypes from '@/components/organisms/Authenticated/OCR/Settings/Catalogs/DocumentsTypes/FormDocumentsTypes/FormDocumentsTypes'

export default function Page () {
  return (
    <FormDocumentsTypes disabled title='Ver tipo de documentos' />
  )
}

Page.getLayout = function getLayout (page) {
  return (
    <RootProvider>
      <LayoutAuth module='ocr'>
        <LayoutSubmenu title='catalogs'>
          {page}
        </LayoutSubmenu>
      </LayoutAuth>
    </RootProvider>
  )
}
