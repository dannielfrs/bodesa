import { RootProvider } from '@/Provider/RootProvider'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import CreateStore from '@/components/organisms/Authenticated/ConfigurationAndManagement/Settings/Stores/CreateStore/CreateStore'

export const metadata = {
  title: 'Nueva tienda'
}

export default function Page() {
  return (
    <CreateStore title='Nueva tienda' />
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <RootProvider>
      <LayoutAuth module='configuration-and-management'>{page}</LayoutAuth>
    </RootProvider>
  )
}
