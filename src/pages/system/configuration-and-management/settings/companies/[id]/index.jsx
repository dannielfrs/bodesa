import { RootProvider } from '@/Provider/RootProvider'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import CompaniesShow from '@/components/organisms/Authenticated/ConfigurationAndManagement/Settings/Companies/CompaniesShow/CompaniesShow'

export const metadata = {
  title: 'Empresas'
}

export default function Page () {
  return (
    <CompaniesShow />
  )
}

Page.getLayout = function getLayout (page) {
  return (
    <RootProvider>
      <LayoutAuth module='configuration-and-management'>{page}</LayoutAuth>
    </RootProvider>
  )
}
