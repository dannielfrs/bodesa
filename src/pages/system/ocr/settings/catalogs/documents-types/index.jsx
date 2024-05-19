import { RootProvider } from '@/Provider/RootProvider'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import { LayoutSubmenu } from '@/components/layouts/LayoutSubmenu/LayoutSubmenu'
import DocumentsTypes from '@/components/organisms/Authenticated/OCR/Settings/Catalogs/DocumentsTypes/DocumentsTypes'

export default function Page () {
  return (
    <DocumentsTypes />
  )
}

Page.getLayout = function getLayout (page) {
  return (
    <RootProvider>
      <LayoutAuth module='ocr' title='Configuraciones'>
        <LayoutSubmenu title='catalogs'>
          {page}
        </LayoutSubmenu>
      </LayoutAuth>
    </RootProvider>
  )
}
