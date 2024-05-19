import { RootProvider } from '@/Provider/RootProvider'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import Scanner from '@/components/organisms/Authenticated/OCR/Scanner/Scanner'

export default function Page () {
  return (
    <Scanner />
  )
}

Page.getLayout = function getLayout (page) {
  return (
    <RootProvider>
      <LayoutAuth module='ocr' title='Escáner'>{page}</LayoutAuth>
    </RootProvider>
  )
}
