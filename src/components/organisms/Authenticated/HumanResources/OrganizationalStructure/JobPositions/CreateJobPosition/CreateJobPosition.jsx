// 'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Image from 'next/image'
import Swal from 'sweetalert2'
import dataTable from '@/services/fake/authenticated/HumanResources/JobPositions/CreateJobPosition/dataTable'
import { InputText } from '@/components/molecules/InputText/InputText/InputText'
import { FormHookProvider } from '@/components/layouts/Form/FormHookProvider'
import { DataTable } from '@/components/molecules/DataTable/DataTable'
import ModalRight from '@/components/molecules/ModalRight/ModalRight'
import { InputTextArea } from '@/components/molecules/InputTextArea'
import { Button, ToggleButton } from '@/components/molecules/Button'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'
import { Checkbox } from '@/components/molecules/Checkbox'
import { Alert, Loading, Success } from '@/utils/Loading'
import { Card } from '@/components/molecules/Card/Card'
import styles from './CreateJobPosition.module.scss'
import iconDelete from '@/../public/images/icons/IconDelete.svg'
import iconEdit from '@/../public/images/icons/IconEdit.svg'
import iconShow from '@/../public/images/icons/IconShow.svg'

export default function CreateJobPosition ({ disabled, title }) {
  const methods = useForm()
  const router = useRouter()
  const [openModal, setOpenModal] = useState(false)
  const [modalTitle, setModalTitle] = useState('')

  const onSubmit = () => {
    Loading('Guardando puesto')
    setTimeout(() => {
      Success('Puesto guardado', 'El puesto se guardo de forma correcta')
    }, 2000)
    setTimeout(() => {
      Alert('Ocurrio un error', 'El puesto no se guardo')
    }, 3000)
    setTimeout(() => {
      Swal.close()
      router.push('/system/human-resources/organizational-structure/job-positions')
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
    name: 'mision',
    label: 'Misión',
    placeholder: 'Misión',
    rows: 5,
    variant: 'primary',
    readOnly: disabled,
    optional: true,
    height: '150px',
    width: '100%'
  }

  // dataTable

  const [branchs, setBranchs] = useState([])

  const handleActive = (rowData, dataTable, e) => {
    const updatedRows = [...branchs]
    updatedRows[dataTable.rowIndex] = { ...rowData, active: e.value }
    setBranchs(updatedRows)
  }

  const AcctionsBodyTempleate = (rowData, dataTable) => {
    return (
      <>
        <div className={styles.section_table_actions}>
          <div className={styles['cont-btn']}>
            <Button
              type='button'
              tooltip='Ver'
              tooltipOptions={{ position: 'top' }}
              variant='button_show'
              onClick={() => { setOpenModal(true); setModalTitle('Ver función') }}
            >
              <Image src={iconShow} alt='ver' className={styles.uploadImg} />
            </Button>
            {!disabled &&
              <>
                <Button
                  type='button'
                  tooltip='Editar'
                  tooltipOptions={{ position: 'top' }}
                  variant='button_edit'
                  onClick={() => { setOpenModal(true); setModalTitle('Editar función') }}
                >
                  <Image src={iconEdit} alt='editar' className={styles.uploadImg} />
                </Button>
                <div
                  className='custom-tooltip-btn'
                  data-pr-tooltip={rowData.active ? 'Inactivar' : 'Activar'}
                  data-pr-position='top'
                >
                  <ToggleButton
                    onIcon='i-activar'
                    offIcon='i-activar'
                    checked={rowData.active}
                    onChange={(e) => handleActive(rowData, dataTable, e)}
                    variant='primary'
                    tooltip={rowData.active ? 'Inactivar' : 'Activar'}
                    tooltipOptions={{ position: 'top' }}
                  />
                </div>
                <Button
                  type='button'
                  tooltip='Eliminar'
                  tooltipOptions={{ position: 'top' }}
                  variant='button_delete'
                >
                  <Image src={iconDelete} alt='eliminar' className={styles.uploadImg} />
                </Button>
              </>}
          </div>
        </div>
      </>
    )
  }
  const statusColumnTemplate = (rowData) => {
    return (
      <div className={styles.section_table_status}>
        <div className={rowData.status === 'Activo' ? styles.status_active : styles.status_inactive}>
          {rowData.status}
        </div>
      </div>
    )
  }
  const dashboardColumns = [
    {
      field: 'code',
      header: 'Código',
      sortable: true,
      w: '100px',
      h: '50px'
    },
    {
      field: 'function',
      header: 'Función / Desempeño',
      sortable: true,
      w: '800px',
      h: '50px'
    },
    {
      field: 'status',
      header: 'Estatus',
      body: statusColumnTemplate,
      sortable: true,
      w: '180px',
      h: '50px'
    },
    {
      field: 'actions',
      header: 'Acciones',
      body: AcctionsBodyTempleate,
      sortable: true,
      w: '201px',
      h: '50px'
    }
  ]
  useEffect(() => {
    const fetchData = async () => {
      const data = await dataTable(1)
      setBranchs(data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (disabled) {
      methods.setValue('type', 'Tienda')
    }
  }, [])

  return (
    <>
      <FormHookProvider methods={methods} method='POST' onSubmit={onSubmit}>
        <div className={styles.CreateClient}>
          <Card>
            <div className={styles.header}>
              <p className={styles.title}>{title}</p>
              <div className={styles.Buttons}>
                <div style={{ width: '100px' }}>
                  <Button
                    variant='secondary'
                    type='button'
                    label='Regresar'
                    onClick={() => router.push('/system/human-resources/organizational-structure/job-positions')}
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
              <div className={styles.checkBox}>
                <Checkbox name='type_check' label='Asistente / Auxiliar' disabled={disabled} />
              </div>
            </Card>
            <Card className={styles.container_input}>
              <div className={styles.colum}>
                <InputTextArea {...InputComent} />
              </div>
            </Card>
            <Card className={styles.container_function}>
              <div className={styles.tableFunction}>
                <div className={styles.header}>
                  <p className={styles.title_table}>Funciones</p>
                  <div className={styles.partRight}>
                    {!disabled &&
                      <div className={styles.ButtonNew}>
                        <Button
                          variant='primary'
                          type='button'
                          label='Nueva función'
                          onClick={() => { setOpenModal(true); setModalTitle('Nueva función') }}
                          height='35px'
                        />
                      </div>}
                  </div>
                </div>
                <DataTable
                  columns={dashboardColumns}
                  data={branchs}
                  loading={false}
                  selectionMode='single'
                  variant='secondary'
                />
              </div>
            </Card>
          </div>
          {openModal
            ? <ModalRight setOpenModal={setOpenModal} name={modalTitle} methods={methods} disabled={modalTitle.includes('Ver')} />
            : ''}
        </div>
      </FormHookProvider>
    </>
  )
}
