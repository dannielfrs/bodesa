// 'use client'

// import { FormHookProvider } from '@/components/layouts/Form/FormHookProvider'
// import { HeaderViews } from '@/components/molecules/HeaderViews/HeaderViews'
// import CreateExternalUsers from '@/components/organisms/Authenticated/ConfigurationAndManagement/Settings/ExternalUsers/CreateExternalUsers/CreateExternalUsers'
// import { Alert, Loading, Success } from '@/utils/Loading'
// import { useRouter } from 'next/navigation'
// import { useForm } from 'react-hook-form'
// import Swal from 'sweetalert2'

export default function Page () {
  // const router = useRouter()
  // const methods = useForm()
  // const onSubmit = () => {
  //   Loading('Guardando usuario externo')
  //   setTimeout(() => {
  //     Success('Usuario externo guardado', 'El usuario externo se guardó de forma correcta')
  //   }, 2000)
  //   setTimeout(() => {
  //     Alert('Ocurrio un error', 'El usuario externó no se guardó')
  //   }, 3000)
  //   setTimeout(() => {
  //     Swal.close()
  //     router.push('/system/configuration-and-management/settings/external-users')
  //   }, 4000)
  // }

  return (
    <>
      {/* <FormHookProvider methods={methods} method='POST' onSubmit={onSubmit}>
        <HeaderViews
          title='Nuevo usuario externo'
          onClick={() => router.push('/system/configuration-and-management/settings/external-users')}
        />
        <div style={{ marginTop: '20px' }}>
          <CreateExternalUsers create methods={methods} />
        </div>
      </FormHookProvider> */}
    </>
  )
}
