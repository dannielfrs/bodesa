import { RootProvider } from '@/Provider/RootProvider'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import ExternalUsers from '@/components/organisms/Authenticated/ConfigurationAndManagement/Settings/ExternalUsers/ExternalUsers'

// export const metadata = {
//   title: 'Usuarios externos'
// }

export default function Page() {
  return (
    <ExternalUsers />
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <RootProvider>
      <LayoutAuth module='configuration-and-management'>{page}</LayoutAuth>
    </RootProvider>
  )
}
