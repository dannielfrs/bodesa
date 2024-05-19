import { RootProvider } from '@/Provider/RootProvider'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import CreateOperational from '@/components/organisms/Authenticated/ConfigurationAndManagement/Settings/OperationalLocation/CreateOperational/CreateOperational'

// export const metadata = {
//   title: 'Ubicación operativa'
// }

export default function Page() {
  return (
    <CreateOperational title='Editar ubicación operativa' />
  )
}

Page.getLayout = function getLayout (page) {
  return (
    <RootProvider>
      <LayoutAuth module='configuration-and-management'>{page}</LayoutAuth>
    </RootProvider>
  )
}