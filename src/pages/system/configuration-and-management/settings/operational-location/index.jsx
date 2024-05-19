import { RootProvider } from '@/Provider/RootProvider'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import OperationalLocation from '@/components/organisms/Authenticated/ConfigurationAndManagement/Settings/OperationalLocation/OperationalLocation'

// export const metadata = {
//   title: 'Ubicaciones operativas'
// }

export default function Page() {
  return (
    <OperationalLocation />
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <RootProvider>
      <LayoutAuth module='configuration-and-management'>{page}</LayoutAuth>
    </RootProvider>
  )
}
