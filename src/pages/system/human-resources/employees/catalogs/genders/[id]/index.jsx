import { RootProvider } from '@/Provider/RootProvider'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import { LayoutSubmenu } from '@/components/layouts/LayoutSubmenu/LayoutSubmenu'
import FormGenders from '@/components/organisms/Authenticated/HumanResources/Employees/Catalogs/Genders/FormGenders/FormGenders'

export default function Page () {
  return (
    <FormGenders showMode title='Ver género' />
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
