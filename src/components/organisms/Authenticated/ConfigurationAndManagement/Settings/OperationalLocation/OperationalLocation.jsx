// 'use client'

import { Tooltip } from 'primereact/tooltip'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import Image from 'next/image'
import dataTable from '@/services/fake/authenticated/ConfigurationManagement/Settings/Stores/dataTable'
import { InputText } from '@/components/molecules/InputText/InputText/InputText'
import { FormHookProvider } from '@/components/layouts/Form/FormHookProvider'
import { DataTable } from '@/components/molecules/DataTable/DataTable'
import { Button, ToggleButton } from '@/components/molecules/Button'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'
import { Card } from '@/components/molecules/Card/Card'
import styles from './OperationalLocation.module.scss'
import iconDelete from '@/../public/images/icons/IconDelete.svg'
import iconEdit from '@/../public/images/icons/IconEdit.svg'
import iconShow from '@/../public/images/icons/IconShow.svg'
import excel from '@/../public/images/icons/excel.svg'

export default function OperationalLocation () {
  const methods = useForm()
  const onSubmit = () => {
    console.log('send form')
  }
  const router = useRouter()
  const [branchs, setBranchs] = useState([])
  const [search, setSearch] = useState([])
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
              onClick={() => router.push('/system/configuration-and-management/settings/operational-location/id')}
            >
              <Image src={iconShow} alt='ver' className={styles.uploadImg} />
            </Button>
            <Button
              type='button'
              tooltip='Editar'
              tooltipOptions={{ position: 'top' }}
              variant='button_edit'
              onClick={() => router.push('/system/configuration-and-management/settings/operational-location/id/edit')}
            >
              <Image src={iconEdit} alt='editar' className={styles.uploadImg} />
            </Button>
            <div
              className='custom-tooltip-btn'
              data-pr-tooltip={rowData.active ? 'Inactivar' : 'Reactivar'}
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
      field: 'company',
      header: 'Empresa',
      sortable: true,
      w: '260px',
      h: '50px'
    },
    {
      field: 'name',
      header: 'Nombre',
      sortable: true,
      w: '260px',
      h: '50px'
    },
    {
      field: 'country',
      header: 'País',
      sortable: true,
      w: '200px',
      h: '50px'
    },
    {
      field: 'state',
      header: 'Estado',
      sortable: true,
      w: '200px',
      h: '50px'
    },
    {
      field: 'municipality',
      header: 'Municipio',
      sortable: true,
      w: '200px',
      h: '50px'
    },
    {
      field: 'status',
      header: 'Estatus',
      body: statusColumnTemplate,
      sortable: false,
      w: '180px',
      h: '50px'
    },
    {
      field: 'actions',
      header: 'Acciones',
      body: AcctionsBodyTempleate,
      sortable: false,
      w: '201px',
      h: '50px'
    }
  ]
  useEffect(() => {
    const fetchData = async () => {
      const data = await dataTable(10)
      setBranchs(data)
    }
    fetchData()
  }, [])

  const PagesOptions = [
    { name: '10 / Página', value: '10 / Página' },
    { name: '20 / Página', value: '20 / Página' },
    { name: '30 / Página', value: '30 / Página' },
    { name: '50 / Página', value: '50 / Página' },
    { name: '100 / Página', value: '100 / Página' }
  ]
  const dropdownPages = {
    name: 'pages',
    value: '10 / Página',
    options: PagesOptions,
    panelClassName: styles.panelPages,
    optionLabel: 'name',
    filter: true
  }
  const companyOptions = [
    { name: 'Empresas', value: 'Empresas' },
    { name: 'La Marina', value: 'La Marina' },
    { name: 'El Bodegón', value: 'El Bodegón' }
  ]
  const dropdownCompany = {
    name: 'company',
    options: companyOptions,
    panelClassName: styles.panelCompany,
    optionLabel: 'name',
    filter: true
  }
  const statusOptions = [
    { name: 'Todos', value: 'Todos' },
    { name: 'Activos', value: 'Activos' },
    { name: 'Inactivos', value: 'Inactivos' }
  ]
  const dropdownStatus = {
    name: 'status',
    value: 'Todos',
    options: statusOptions,
    panelClassName: styles.panelStatus,
    optionLabel: 'name',
    filter: true
  }
  useEffect(() => {
    methods.setValue('pages', '10 / Página')
    methods.setValue('status', 'Todos')
    methods.setValue('company', 'Empresas')
  }, [])

  return (
    <>
      <FormHookProvider methods={methods} method='POST' onSubmit={onSubmit}>
        <div className={styles.OperationsLocation}>
          <Card className={styles.card_header}>
            <div className={styles.header}>
              <p className={styles.title}>Ubicaciones operativas</p>
              <div className={styles.partRight}>
                <Tooltip target='.icon-excel' className={styles.tooltip_excel}>
                  <div className={styles.btnTooltip}>
                    <p>Descargar Excel</p>
                  </div>
                </Tooltip>
                <div>
                  <Image src={excel} className='icon-excel' alt='excel' />
                </div>
                <div className={styles.filterPages}>
                  <Dropdown {...dropdownPages} />
                </div>
                <div style={{ width: '200px' }}>
                  <Dropdown {...dropdownCompany} />
                </div>
                <div style={{ width: '200px' }}>
                  <Dropdown {...dropdownStatus} />
                </div>
                <div className={styles.InputSearch}>
                  <InputText
                    name='search'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Buscar'
                    icon='i-search'
                    variant='primary'
                    height='45px'
                  />
                </div>
                <div className={styles.ButtonNew}>
                  <Button
                    variant='primary'
                    type='button'
                    label='Nuevo'
                    onClick={() => router.push('/system/configuration-and-management/settings/operational-location/create')}
                  />
                </div>
              </div>
            </div>
          </Card>
          <div className='tableUser'>
            <DataTable
              columns={dashboardColumns}
              data={branchs}
              loading={false}
              selectionMode='single'
              variant='primary'
              search={search}
            />
          </div>
        </div>
      </FormHookProvider>
    </>
  )
}
