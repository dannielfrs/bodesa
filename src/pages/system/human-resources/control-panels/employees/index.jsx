import { RootProvider } from '@/Provider/RootProvider'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import Employees from '@/components/organisms/Authenticated/HumanResources/ControlPanels/Employees/Employees'

export default function Page () {
  return (
    <Employees />
  )
}

Page.getLayout = function getLayout (page) {
  return (
    <RootProvider>
      <LayoutAuth module='human-resources'>{page}</LayoutAuth>
    </RootProvider>
  )
}
