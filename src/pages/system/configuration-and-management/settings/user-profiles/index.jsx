import { RootProvider } from '@/Provider/RootProvider'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import UserProfiles from '@/components/organisms/Authenticated/ConfigurationAndManagement/Settings/UserProfiles/UserProfiles'

// export const metadata = {
//   title: 'Listado de perfiles'
// }

export default function Page() {
  return (
    <UserProfiles />
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <RootProvider>
      <LayoutAuth module='configuration-and-management'>{page}</LayoutAuth>
    </RootProvider>
  )
}
