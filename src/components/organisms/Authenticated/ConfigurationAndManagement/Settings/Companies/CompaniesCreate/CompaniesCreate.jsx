// 'use client'

import { useRouter } from 'next/navigation'
import styles from './CompaniesCreate.module.scss'
import Swal from 'sweetalert2'
import { Button } from '@/components/molecules/Button'
import { useForm } from 'react-hook-form'
import { FormHookProvider } from '@/components/layouts/Form/FormHookProvider'
import { Alert, Loading, Success } from '@/utils/Loading'
import FormGeneral from '@/components/organisms/Authenticated/ConfigurationAndManagement/Settings/Companies/FormGeneral/FormGeneral'

export default function CompaniesCreate () {
  const router = useRouter()
  const methods = useForm()

  const onSubmit = () => {
    Loading('Guardando datos')
    setTimeout(() => {
      Success('Datos registrados')
    }, 2000)
    setTimeout(() => {
      Alert('Ocurrio un error')
    }, 3000)
    setTimeout(() => {
      Swal.close()
      router.push('/system/configuration-and-management/settings/companies')
    }, 4000)
  }

  return (
    <FormHookProvider onSubmit={onSubmit} method='POST' methods={methods}>
      <div className={styles.section}>
        <div className={styles.section_header}>
          <div className={styles.section_header_buttons}>
            <div>Nueva empresa</div>
          </div>
          <div className={styles.section_header_group}>
            <div>
              <Button
                label='Regresar'
                type='button'
                onClick={() => router.push('/system/configuration-and-management/settings/companies')}
                variant='secondary'
                height='45px'
              />
            </div>
            <div>
              <Button
                label='Guardar'
                variant='primary'
                height='45px'
              />
            </div>
          </div>
        </div>
        <div className={styles.section_form}>
          <FormGeneral createMode />
        </div>
      </div>
    </FormHookProvider>
  )
}
