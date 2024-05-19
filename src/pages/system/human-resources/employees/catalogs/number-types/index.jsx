import { RootProvider } from '@/Provider/RootProvider'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import { LayoutSubmenu } from '@/components/layouts/LayoutSubmenu/LayoutSubmenu'
import NumberTypes from '@/components/organisms/Authenticated/HumanResources/Employees/Catalogs/NumberTypes/NumberTypes'

// export const metadata = {
//   title: 'Empleados'
// }

export default function Page () {
  return (
    <NumberTypes />
  )
}

Page.getLayout = function getLayout (page) {
  return (
    <RootProvider>
      <LayoutAuth module='human-resources'>
        <LayoutSubmenu title='employees-catalogs'>
          {page}
        </LayoutSubmenu>
      </LayoutAuth>
    </RootProvider>
  )
}
