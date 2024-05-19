// 'use client'

import { useMemo } from 'react'
import { useRouter } from 'next/navigation'
import styles from './FormNumberTypes.module.scss'
import Swal from 'sweetalert2'
import { Button } from '@/components/molecules/Button'
import { useForm } from 'react-hook-form'
import { FormHookProvider } from '@/components/layouts/Form/FormHookProvider'
import { Alert, Loading, Success } from '@/utils/Loading'
import { InputText } from '@/components/molecules/InputText/InputText/InputText'

export default function FormNumberTypes({ title, createMode, showMode, editMode }) {
  const router = useRouter()
  const methods = useForm()
  const loadingData = false

  const onSubmit = () => {
    Loading('Guardando tipo')
    setTimeout(() => {
      Success('Tipo guardado')
    }, 2000)
    setTimeout(() => {
      Alert('Ocurrio un error')
    }, 3000)
    setTimeout(() => {
      Swal.close()
      router.push('/system/human-resources/employees/catalogs/number-types')
    }, 4000)
  }

  const inputTextName = useMemo(() => ({
    name: 'name',
    label: 'Nombre',
    placeholder: 'Nombre',
    readOnly: showMode,
    variant: 'primary',
    height: '45px',
    loading: loadingData,
    required: true,
    rules: { required: true }
  }), [])

  return (
    <FormHookProvider onSubmit={onSubmit} method='POST' methods={methods} className={styles.form_hook}>
      <div className={styles.section}>
        <div className={styles.section_header}>
          <div className={styles.section_header_buttons}>
            <div>{title}</div>
          </div>
          <div className={styles.section_header_group}>
            <div>
              <Button
                label='Regresar'
                type='button'
                onClick={() => router.push('/system/human-resources/employees/catalogs/number-types')}
                variant='secondary'
                height='45px'
              />
            </div>
            {!showMode &&
              <div>
                <Button
                  label='Guardar'
                  variant='primary'
                  height='45px'
                />
              </div>
            }
          </div>
        </div>
        <div className={styles.section_form}>
          <div className={styles.section_row}>
            <div className={styles.section_column}>
              <InputText {...inputTextName} />
            </div>
          </div>
        </div>
      </div>
    </FormHookProvider>
  )
}
