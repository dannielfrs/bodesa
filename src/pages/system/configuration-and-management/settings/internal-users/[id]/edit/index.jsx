import { RootProvider } from '@/Provider/RootProvider'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import EditInternalUsers from '@/components/organisms/Authenticated/ConfigurationAndManagement/Settings/InternalUsers/EditInternalUsers/EditInternalUsers'

// export const metadata = {
//   title: 'Editar usuario interno'
// }

export default function Page({ title }) {
  return (
    <EditInternalUsers title='Editar usuario interno' />
  )
}

Page.getLayout = function getLayout (page) {
  return (
    <RootProvider>
      <LayoutAuth module='configuration-and-management'>{page}</LayoutAuth>
    </RootProvider>
  )
}
