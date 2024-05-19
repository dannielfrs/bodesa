import { RootProvider } from '@/Provider/RootProvider'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import { LayoutSubmenu } from '@/components/layouts/LayoutSubmenu/LayoutSubmenu'
import FormNumberTypes from '@/components/organisms/Authenticated/HumanResources/Employees/Catalogs/NumberTypes/FormNumberTypes/FormNumberTypes'

export default function Page () {
  return (
    <FormNumberTypes showMode title='Ver tipo de número' />
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
