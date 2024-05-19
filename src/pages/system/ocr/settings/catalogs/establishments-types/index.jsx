import { RootProvider } from '@/Provider/RootProvider'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import { LayoutSubmenu } from '@/components/layouts/LayoutSubmenu/LayoutSubmenu'
import EstablishmentsTypes from '@/components/organisms/Authenticated/OCR/Settings/Catalogs/EstablishmentsTypes/EstablishmentsTypes'

export default function Page () {
  return (
    <EstablishmentsTypes />
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
