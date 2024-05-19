import { RootProvider } from '@/Provider/RootProvider'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import Users from '@/components/organisms/Authenticated/ConfigurationAndManagement/ControlPanels/Users/Users'

// export const metadata = {
//   title: 'Usuarios'
// }

export default function Page () {
  return (
    <Users />
  )
}

Page.getLayout = function getLayout (page) {
  return (
    <RootProvider>
      <LayoutAuth module='configuration-and-management'>{page}</LayoutAuth>
    </RootProvider>
  )
}
