import { RootProvider } from '@/Provider/RootProvider'
import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
// import Users from '@/components/organisms/Authenticated/ConfigurationAndManagement/ControlPanels/Users/Users'
import Employees from '@/components/organisms/Authenticated/OCR/ControlPanels/OCR/Ocr'

export default function Page () {
  return (
    <Employees />
  )
}

Page.getLayout = function getLayout (page) {
  return (
    <RootProvider>
      <LayoutAuth module='ocr' title='Empleados'>{page}</LayoutAuth>
    </RootProvider>
  )
}
