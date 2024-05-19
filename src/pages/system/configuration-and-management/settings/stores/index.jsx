import { RootProvider } from '@/Provider/RootProvider'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import Stores from '@/components/organisms/Authenticated/ConfigurationAndManagement/Settings/Stores/Stores'

// export const metadata = {
//   title: 'Tiendas'
// }

export default function Page() {
  return (
    <Stores />
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <RootProvider>
      <LayoutAuth module='configuration-and-management'>{page}</LayoutAuth>
    </RootProvider>
  )
}
