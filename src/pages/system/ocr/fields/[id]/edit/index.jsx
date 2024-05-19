import { RootProvider } from '@/Provider/RootProvider'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import CreateFields from '@/components/organisms/Authenticated/OCR/Fields/CreateFields/CreateFields'

export default function Page ({ edit }) {
  return (
    <CreateFields title='Editar campo' edit />
  )
}

Page.getLayout = function getLayout (page) {
  return (
    <RootProvider>
      <LayoutAuth module='ocr'>{page}</LayoutAuth>
    </RootProvider>
  )
}
