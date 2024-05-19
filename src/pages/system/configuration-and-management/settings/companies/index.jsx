import { RootProvider } from '@/Provider/RootProvider'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import Companies from '@/components/organisms/Authenticated/ConfigurationAndManagement/Settings/Companies/Companies'

export const metadata = {
  title: 'Empresas'
}

export default function Page () {
  return (
    <Companies />
  )
}

Page.getLayout = function getLayout (page) {
  return (
    <RootProvider>
      <LayoutAuth module='configuration-and-management'>{page}</LayoutAuth>
    </RootProvider>
  )
}
