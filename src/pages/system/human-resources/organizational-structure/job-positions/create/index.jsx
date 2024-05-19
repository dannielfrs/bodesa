import { RootProvider } from '@/Provider/RootProvider'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import CreateJobPosition from '@/components/organisms/Authenticated/HumanResources/OrganizationalStructure/JobPositions/CreateJobPosition/CreateJobPosition'

// export const metadata = {
//   title: 'Nuevo puesto'
// }

export default function Page() {
  return (
    <CreateJobPosition title='Nuevo puesto' />
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <RootProvider>
      <LayoutAuth module='human-resources'>{page}</LayoutAuth>
    </RootProvider>
  )
}
