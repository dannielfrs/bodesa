import { RootProvider } from '@/Provider/RootProvider'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import OrganizationChart from '@/components/organisms/Authenticated/HumanResources/OrganizationalStructure/OrganizationChart/OrganizationChart'

// export const metadata = {
//   title: 'Organigrama'
// }

export default function Page() {
  return (
    <OrganizationChart />
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <RootProvider>
      <LayoutAuth module='human-resources'>{page}</LayoutAuth>
    </RootProvider>
  )
}
