import { RootProvider } from '@/Provider/RootProvider'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import { LayoutSubmenu } from '@/components/layouts/LayoutSubmenu/LayoutSubmenu'
import FormEstablishmentsTypes from '@/components/organisms/Authenticated/OCR/Settings/Catalogs/EstablishmentsTypes/FormEstablishmentsTypes/FormEstablishmentsTypes'

export default function Page () {
  return (
    <FormEstablishmentsTypes disabled title='Ver tipo de establecimiento' />
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
