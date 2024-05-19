// 'use client'

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import { InputText } from '@/components/molecules/InputText/InputText/InputText'
import { FormHookProvider } from '@/components/layouts/Form/FormHookProvider'
import { InputTextArea } from '@/components/molecules/InputTextArea'
import { Button } from '@/components/molecules/Button'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'
import { Alert, Loading, Success } from '@/utils/Loading'
import { Card } from '@/components/molecules/Card/Card'
import styles from './CreateDeparment.module.scss'
import { useEffect } from 'react'

export default function CreateDeparment ({ disabled, title }) {
  const methods = useForm()
  const router = useRouter()

  const onSubmit = () => {
    Loading('Guardando departamento')
    setTimeout(() => {
      Success('Departamento guardado', 'El departamento se guardo de forma correcta')
    }, 2000)
    setTimeout(() => {
      Alert('Ocurrio un error', 'El departamento no se guardo')
    }, 3000)
    setTimeout(() => {
      Swal.close()
      router.push('/system/human-resources/organizational-structure/departments')
    }, 4000)
  }
  const inputCode = {
    name: 'code',
    type: 'number',
    label: 'Código',
    placeholder: 'Código',
    required: true,
    readOnly: disabled,
    rules: {
      required: 'El código es requerido.'
    },
    error: methods.formState.errors.user
  }

  const inputTextUser = {
    name: 'name',
    type: 'text',
    label: 'Nombre',
    placeholder: 'Nombre',
    required: true,
    readOnly: disabled,
    rules: {
      required: 'El nombre es requerido.'
    },
    error: methods.formState.errors.user
  }

  const companyOptions = [
    { name: 'La Marina', value: 'La Marina' },
    { name: 'El Bodegón', value: 'El Bodegón' }
  ]
  const dropdownCompany = {
    name: 'company',
    label: 'Empresa',
    placeholder: '-Selecciona una opción-',
    options: companyOptions,
    readOnly: disabled,
    optionLabel: 'name',
    required: true,
    rules: {
      required: 'La empresa es requerida.'
    },
    filter: true
  }

  const typeOptions = [
    { name: 'Tienda', value: 'Tienda' },
    { name: 'Ubicación de operación', value: 'Ubicación de operación' }
  ]
  const dropdownType = {
    name: 'type',
    label: 'Tipo',
    placeholder: '-Selecciona una opción-',
    options: typeOptions,
    readOnly: disabled,
    optionLabel: 'name',
    required: true,
    rules: {
      required: 'El tipo es requerido.'
    },
    filter: true
  }

  const storeOptions = [
    { name: 'La Marina Madero', value: 'La Marina Madero' },
    { name: 'La Marina San Fernando', value: 'La Marina San Fernando' },
    { name: 'La Marina Zapotlán', value: 'La Marina Zapotlán' },
    { name: 'La Marina La Piedad', value: 'La Marina La Piedad' },
    { name: 'La Marina Guanajuato', value: 'La Marina Guanajuato' },
    { name: 'La Marina Manzanillo', value: 'La Marina Manzanillo' }
  ]
  const locationOptions = [
    { name: 'Oficina central de administración', value: 'Oficina central de administración' },
    { name: 'Almacén central', value: 'Almacén central' }
  ]

  const dropdownStore = {
    name: 'store',
    label: methods.watch('type') === 'Tienda' ? 'Tienda' : 'Ubicación operativa',
    placeholder: '-Selecciona una opción-',
    options: methods.watch('type') === 'Tienda' ? storeOptions : locationOptions,
    readOnly: disabled,
    optionLabel: 'name',
    required: true,
    rules: {
      required: methods.watch('type') === 'Tienda' ? 'La tienda es requerida.' : 'La ubicación es requerida'
    },
    filter: true
  }

  const InputComent = {
    name: 'description',
    label: 'Descripción',
    placeholder: 'Descripción',
    rows: 5,
    variant: 'primary',
    readOnly: disabled,
    optional: true,
    height: '150px',
    width: '100%'
  }

  useEffect(() => {
    if (disabled) {
      methods.setValue('type', 'Tienda')
    }
  }, [])

  return (
    <>
      <FormHookProvider methods={methods} method='POST' onSubmit={onSubmit}>
        <div className={styles.CreateDeparment}>
          <Card>
            <div className={styles.header}>
              <p className={styles.title}>{title}</p>
              <div className={styles.Buttons}>
                <div style={{ width: '100px' }}>
                  <Button
                    variant='secondary'
                    type='button'
                    label='Regresar'
                    onClick={() => router.push('/system/human-resources/organizational-structure/departments')}
                  />
                </div>
                {!disabled &&
                  <div style={{ width: '100px' }}>
                    <Button
                      variant='primary'
                      label='Guardar'
                    />
                  </div>}
              </div>
            </div>
          </Card>
          <div className={styles.rows}>
            <Card className={styles.container_input}>
              <div>
                <p className={styles.pTitle}>Generales</p>
              </div>
              <div className={styles.inputs}>
                <div className={styles.row}>
                  <div className={styles.w195}>
                    <InputText {...inputCode} />
                  </div>
                  <div style={{ width: '496px' }}>
                    <InputText {...inputTextUser} />
                  </div>
                  <div className={styles.w248}>
                    <Dropdown {...dropdownCompany} />
                  </div>
                  <div className={styles.w248}>
                    <Dropdown {...dropdownType} />
                  </div>
                  {methods.watch('type') &&
                    <div className={styles.w326}>
                      <Dropdown {...dropdownStore} />
                    </div>}
                </div>
              </div>
              <div className={styles.w80}>
                <InputTextArea {...InputComent} />
              </div>
            </Card>
          </div>
        </div>
      </FormHookProvider>
    </>
  )
}
