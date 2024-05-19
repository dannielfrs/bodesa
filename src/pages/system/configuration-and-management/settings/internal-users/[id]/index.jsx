import { RootProvider } from '@/Provider/RootProvider'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import EditInternalUsers from '@/components/organisms/Authenticated/ConfigurationAndManagement/Settings/InternalUsers/EditInternalUsers/EditInternalUsers'

// export const metadata = {
//   title: 'Ver usuario interno'
// }

export default function Page() {
  return (
    <EditInternalUsers disabled title='Ver usuario interno' />
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <RootProvider>
      <LayoutAuth module='configuration-and-management'>{page}</LayoutAuth>
    </RootProvider>
  )
}
