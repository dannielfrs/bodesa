import { RootProvider } from '@/Provider/RootProvider'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import EditExternalUsers from '@/components/organisms/Authenticated/ConfigurationAndManagement/Settings/ExternalUsers/EditExternalUsers/EditExternalUsers'

// export const metadata = {
//   title: 'Ver usuario externo'
// }

export default function Page() {
  return (
    <EditExternalUsers disabled selectedProfile title='Ver usuario externo' />
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <RootProvider>
      <LayoutAuth module='configuration-and-management'>{page}</LayoutAuth>
    </RootProvider>
  )
}
