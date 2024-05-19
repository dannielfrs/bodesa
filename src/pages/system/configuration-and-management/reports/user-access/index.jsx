import { RootProvider } from '@/Provider/RootProvider'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import UserAccess from '@/components/organisms/Authenticated/ConfigurationAndManagement/Reports/UserAccess/UserAccess'

// export const metadata = {
//   title: 'Accesos de usuarios'
// }

export default function Page () {
  return (
    <UserAccess />
  )
}

Page.getLayout = function getLayout (page) {
  return (
    <RootProvider>
      <LayoutAuth module='configuration-and-management'>{page}</LayoutAuth>
    </RootProvider>
  )
}
