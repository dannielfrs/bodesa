import { RootProvider } from '@/Provider/RootProvider'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import FormEmployees from '@/components/organisms/Authenticated/HumanResources/Employees/Employees/FormEmployees/FormEmployees'

// export const metadata = {
//   title: 'Empleados'
// }

export default function Page() {
  return (
    <FormEmployees createMode title='Nuevo empleado' />
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <RootProvider>
      <LayoutAuth module='human-resources'>{page}</LayoutAuth>
    </RootProvider>
  )
}
