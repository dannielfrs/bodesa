import { RootProvider } from '@/Provider/RootProvider'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import CreateFields from '@/components/organisms/Authenticated/OCR/Fields/CreateFields/CreateFields'

export default function Page ({ disabled }) {
  return (
    <CreateFields title='Ver campo' disabled />
  )
}

Page.getLayout = function getLayout (page) {
  return (
    <RootProvider>
      <LayoutAuth module='ocr'>{page}</LayoutAuth>
    </RootProvider>
  )
}
