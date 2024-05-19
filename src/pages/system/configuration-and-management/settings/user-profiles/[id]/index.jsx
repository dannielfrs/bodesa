import { RootProvider } from '@/Provider/RootProvider'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import CreateProfile from '@/components/organisms/Authenticated/ConfigurationAndManagement/Settings/UserProfiles/CreateProfile/CreateProfile'

// export const metadata = {
//   title: 'Ver perfil'
// }

export default function Page() {
  return (
    <CreateProfile disabled title='Ver perfil' />
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <RootProvider>
      <LayoutAuth module='configuration-and-management'>{page}</LayoutAuth>
    </RootProvider>
  )
}
