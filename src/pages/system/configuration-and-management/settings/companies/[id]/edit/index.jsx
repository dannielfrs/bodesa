import { RootProvider } from '@/Provider/RootProvider'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import CompaniesEdit from '@/components/organisms/Authenticated/ConfigurationAndManagement/Settings/Companies/CompaniesEdit/CompaniesEdit'

// export const metadata = {
//   title: 'Empresas'
// }

export default function Page () {
  return (
    <CompaniesEdit />
  )
}

Page.getLayout = function getLayout (page) {
  return (
    <RootProvider>
      <LayoutAuth module='configuration-and-management'>{page}</LayoutAuth>
    </RootProvider>
  )
}
