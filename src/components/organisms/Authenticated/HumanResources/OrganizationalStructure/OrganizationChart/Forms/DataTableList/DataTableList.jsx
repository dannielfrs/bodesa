// 'use client'

import React, { useEffect, useState } from 'react'
import { Tooltip } from 'primereact/tooltip'
import Image from 'next/image'
import dataTable from '@/services/fake/authenticated/HumanResources/OrganizationalStructure/DataTableList/dataTable'
import { InputText } from '@/components/molecules/InputText/InputText/InputText'
import { DataTable } from '@/components/molecules/DataTable/DataTable'
import { Button, ToggleButton } from '@/components/molecules/Button'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'
import { Card } from '@/components/molecules/Card/Card'
import styles from './DataTableList.module.scss'
import iconDelete from '@/../public/images/icons/IconDelete.svg'
import iconEdit from '@/../public/images/icons/IconEdit.svg'
import iconShow from '@/../public/images/icons/IconShow.svg'
import excel from '@/../public/images/icons/excel.svg'

export default function DataTableList ({ methods }) {
  const [search, setSearch] = useState([])
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
            >
              <Image src={iconShow} alt='ver' className={styles.uploadImg} />
            </Button>
            <Button
              type='button'
              tooltip='Editar'
              tooltipOptions={{ position: 'top' }}
              variant='button_edit'
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
  const externaImageLoader = ({ src }) => src

  const imageBodyTemplate = (rowData, tableData) => {
    return (
      <div className={styles.table_avatar}>
        <Image
          loader={externaImageLoader}
          src={rowData.image}
          alt=''
          width={35}
          height={35}
        />
        <p>Alejandro Díaz García</p>
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
      field: 'positions',
      header: 'Puesto',
      sortable: true,
      w: '300px',
      h: '50px'
    },
    {
      field: 'deparment',
      header: 'Departamento',
      sortable: true,
      w: '280px',
      h: '50px'
    },
    {
      field: 'name',
      header: 'Empleado',
      sortable: true,
      body: imageBodyTemplate,
      w: '365px',
      h: '50px'
    },
    {
      field: 'level',
      header: 'Nivel',
      sortable: true,
      w: '140px',
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
  }, [])

  return (
    <div>
      <Card className={styles.card_table}>
        <div className={styles.header}>
          <p className={styles.title}>Listado</p>
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
            <div style={{ width: '203px' }}>
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
          </div>
        </div>
        <div className='tableClients'>
          <DataTable
            columns={dashboardColumns}
            data={branchs}
            loading={false}
            search={search}
            selectionMode='single'
            variant='secondary'
          />
        </div>
      </Card>
    </div>
  )
}
