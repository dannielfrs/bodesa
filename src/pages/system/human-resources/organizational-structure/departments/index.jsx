import { RootProvider } from '@/Provider/RootProvider'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import Departments from '@/components/organisms/Authenticated/HumanResources/OrganizationalStructure/Departments/Departments'

// export const metadata = {
//   title: 'Departamentos'
// }

export default function Page() {
  return (
    <Departments />
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <RootProvider>
      <LayoutAuth module='human-resources'>{page}</LayoutAuth>
    </RootProvider>
  )
}
