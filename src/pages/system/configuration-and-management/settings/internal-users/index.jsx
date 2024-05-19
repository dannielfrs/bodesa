import { RootProvider } from '@/Provider/RootProvider'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import InternalUsers from '@/components/organisms/Authenticated/ConfigurationAndManagement/Settings/InternalUsers/InternalUsers'

// export const metadata = {
//   title: 'Usuarios internos'
// }

export default function Page() {
  return (
    <InternalUsers />
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <RootProvider>
      <LayoutAuth module='configuration-and-management'>{page}</LayoutAuth>
    </RootProvider>
  )
}
