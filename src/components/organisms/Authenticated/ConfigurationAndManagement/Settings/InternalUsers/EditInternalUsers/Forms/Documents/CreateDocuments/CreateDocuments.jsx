import React from 'react'
import styles from './CreateDocuments.module.scss'
import { Button } from '@/components/molecules/Button'
import { useRouter } from 'next/navigation'
import { InputText } from '@/components/molecules/InputText/InputText/InputText'
import { FormHookProvider } from '@/components/layouts/Form/FormHookProvider'
import { useForm } from 'react-hook-form'
import { Checkbox } from '@/components/molecules/Checkbox'
import { FileUpload } from '@/components/molecules/Upload/FileUpload/FileUpload'
import logo from '@/../public/images/logo_dark.svg'
import { Alert, Loading, Success } from '@/utils/Loading'
import Swal from 'sweetalert2'

export default function CreateDocuments ({ title, setOpenModal2, disabled }) {
  const methods = useForm()
  const router = useRouter()
  const onSubmit = () => {
    Loading('Guardando documento')
    setTimeout(() => {
      Success('Documento guardado', 'El documento se guardó de forma correcta')
    }, 2000)
    setTimeout(() => {
      Alert('Ocurrio un error', 'El documento no se guardó')
    }, 3000)
    setTimeout(() => {
      Swal.close()
      router.push('/system/configuration-and-management/settings/internal-users')
    }, 4000)
  }
  const currentFiles = [
    { objectURL: '', name: 'documento.pdf', size: 15000, type: 'application/pdf' },
    { objectURL: logo, name: 'imagen.svg', size: 7000, type: 'image/svg' }
  ]
  const InputName = {
    name: 'name',
    type: 'text',
    label: 'Nombre',
    placeholder: 'Nombre',
    readOnly: disabled,
    obligatory: true,
    required: true,
    rules: {
      required: 'El nombre es requerido.'
    }
  }
  const inputDate = {
    name: 'date',
    type: 'date',
    label: 'Fecha de documento',
    readOnly: disabled,
    required: true,
    obligatory: true,
    rules: {
      required: 'La fecha es requerida.'
    },
    error: methods.formState.errors.user
  }
  const inputDate2 = {
    name: 'date2',
    type: 'date',
    label: 'Fecha de vigencia',
    readOnly: disabled,
    required: true,
    obligatory: true,
    rules: {
      required: 'La fecha es requerida.'
    },
    error: methods.formState.errors.user
  }
  return (
    <>
      <FormHookProvider methods={methods} method='POST' onSubmit={onSubmit}>
        <div className={styles.Background}>
          <div className={styles.ContCreate}>
            <div className={styles.header}>
              <p className={styles.title}>{title}</p>
              <div className={styles.bothButton}>
                <Button
                  variant='secondary'
                  height='35px'
                  type='button'
                  label='Cerrar'
                  onClick={() => setOpenModal2(false)}
                />
                {!disabled &&
                  <Button
                    variant='primary'
                    height='35px'
                    label='Guardar'
                    type='button'
                    onClick={() => setOpenModal2(false)}
                  />}
              </div>
            </div>
            <div className={styles.form}>
              <InputText {...InputName} />
              <div className={styles.ContDate}>
                <div style={{ width: '215px' }}>
                  <InputText {...inputDate} />
                </div>
                <div style={{ width: '215px' }}>
                  <InputText {...inputDate2} />
                </div>
                <Checkbox name='type_check' label='No aplica vigencia' disabled={disabled} />
              </div>
              <div className={styles.ContFiles}>
                <div className={styles.card}>
                  <FileUpload
                    name='upload_files'
                    value={disabled && currentFiles}
                    label='Archivos'
                    multiple
                    readOnly={disabled}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </FormHookProvider>
    </>
  )
}
