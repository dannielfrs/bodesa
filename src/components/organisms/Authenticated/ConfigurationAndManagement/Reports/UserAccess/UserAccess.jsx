// 'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from './UserAccess.module.scss'
import { FormHookProvider } from '@/components/layouts/Form/FormHookProvider'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'
import { InputText } from '@/components/molecules/InputText/InputText/InputText'
import { Button } from '@/components/molecules/Button'
import Swal from 'sweetalert2'
import { Alert, Loading, Success } from '@/utils/Loading'
import DataTableUserAccess from './DataTableUserAccess/DataTableUserAccess'

export default function UserAccess () {
  const methods = useForm()
  const [reportGenerated, setReportGenerated] = useState(false)

  const onSubmit = () => {
    Loading('Generando reporte')
    setTimeout(() => {
      Success('Reporte generado')
    }, 2000)
    setTimeout(() => {
      Alert('Ocurrio un error')
    }, 3000)
    setTimeout(() => {
      Swal.close()
    }, 4000)
    setTimeout(() => {
      setReportGenerated(true)
    }, 5000)
  }

  const typeOptions = [
    { label: 'Todos', value: 0 },
    { label: 'Interno', value: 1 },
    { label: 'Externo', value: 2 }
  ]

  const companyOptions = [
    { label: 'Todas', value: 0 },
    { label: 'La Marina', value: 1 },
    { label: 'El Bodegón', value: 2 }
  ]

  const profileOptions = [
    { label: 'Todos', value: 0 },
    { label: 'Gestión de perfiles', value: 1 },
    { label: 'Configuración de plantillas', value: 2 },
    { label: 'Escaneo de documentos', value: 3 }
  ]

  return (
    <FormHookProvider methods={methods} method='POST' onSubmit={onSubmit}>
      <div className={styles.section}>
        <div className={styles.section_header}>
          <div className={styles.section_header_title}>
            <div>Reporte</div>
            <div>Acceso de usuarios</div>
          </div>
          <div className={styles.section_column_1}>
            <Dropdown
              name='type'
              defaultValue={0}
              options={typeOptions}
              optionLabel='label'
              label='Tipo'
              placeholder='- Selecciona una opción -'
              filter
              variant='primary'
              height='45px'
            />
          </div>
          <div className={styles.section_column_2}>
            <Dropdown
              name='company'
              defaultValue={0}
              options={companyOptions}
              optionLabel='label'
              label='Empresa'
              placeholder='- Selecciona una opción -'
              filter
              variant='primary'
              height='45px'
            />
          </div>
          <div className={styles.section_column_2}>
            <Dropdown
              name='profile'
              defaultValue={0}
              options={profileOptions}
              optionLabel='label'
              label='Perfil'
              placeholder='- Selecciona una opción -'
              filter
              variant='primary'
              height='45px'
            />
          </div>
          <div className={styles.section_column_1}>
            <InputText
              name='start_date'
              type='date'
              label='Fecha inicial'
              variant='primary'
              height='45px'
            />
          </div>
          <div className={styles.section_column_1}>
            <InputText
              name='finish_date'
              type='date'
              label='Fecha final'
              variant='primary'
              height='45px'
            />
          </div>
          <div className={styles.section_group}>
            <div>
              {reportGenerated &&
                <Button
                  icon='i-excel'
                  type='button'
                  onClick={() => { }}
                  tooltip='Descargar excel'
                  tooltipOptions={{ position: 'top', className: 'tooltip_green' }}
                  variant='transparent-static'
                  height='28px'
                />}
            </div>
            <div>
              <Button
                label='Generar'
                variant='primary'
                height='45px'
              />
            </div>
          </div>
        </div>
        <div className={styles.section_body}>
          {reportGenerated &&
            <DataTableUserAccess />}
        </div>
      </div>
    </FormHookProvider>
  )
}
