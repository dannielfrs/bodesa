import { RootProvider } from '@/Provider/RootProvider'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import CreateDeparment from '@/components/organisms/Authenticated/HumanResources/OrganizationalStructure/Departments/CreateDeparment/CreateDeparment'

// export const metadata = {
//   title: 'Editar departamento'
// }

export default function Page() {
  return (
    <CreateDeparment title='Editar departamento' />
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <RootProvider>
      <LayoutAuth module='human-resources'>{page}</LayoutAuth>
    </RootProvider>
  )
}
