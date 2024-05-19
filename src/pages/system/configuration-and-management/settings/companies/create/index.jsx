import { RootProvider } from '@/Provider/RootProvider'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import CompaniesCreate from '@/components/organisms/Authenticated/ConfigurationAndManagement/Settings/Companies/CompaniesCreate/CompaniesCreate'

export const metadata = {
  title: 'Empresas'
}

export default function Page () {
  return (
    <CompaniesCreate />
  )
}

Page.getLayout = function getLayout (page) {
  return (
    <RootProvider>
      <LayoutAuth module='configuration-and-management'>{page}</LayoutAuth>
    </RootProvider>
  )
}
