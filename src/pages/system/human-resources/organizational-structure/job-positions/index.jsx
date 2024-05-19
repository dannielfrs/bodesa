import { RootProvider } from '@/Provider/RootProvider'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import JobPositions from '@/components/organisms/Authenticated/HumanResources/OrganizationalStructure/JobPositions/JobPositions'

// export const metadata = {
//   title: 'Puestos'
// }

export default function Page() {
  return (
    <JobPositions />
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <RootProvider>
      <LayoutAuth module='human-resources'>{page}</LayoutAuth>
    </RootProvider>
  )
}
