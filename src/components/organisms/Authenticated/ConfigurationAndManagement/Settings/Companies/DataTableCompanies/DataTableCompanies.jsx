import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './styles.module.scss'
import { DataTable } from '@/components/molecules/DataTable/DataTable'
import { Button, ToggleButton } from '@/components/molecules/Button'
import dataTable from '@/services/fake/authenticated/ConfigurationManagement/Settings/Companies/dataTable'
import { Img } from '@/components/atoms/Img'

export default function DataTableCompanies ({ numberRows, search, searchStatus }) {
  const router = useRouter()
  const [selectedRow, setSelectedRow] = useState(null)
  const [testingDataTable, setTestingDataTable] = useState([])
  const loadingTable = false

  console.log(setSelectedRow)

  useEffect(() => {
    const fetchData = async () => {
      const data = await dataTable(50)
      setTestingDataTable(data)
    }
    fetchData()
  }, [])

  const handleShow = (rowData, tableData, e) => {
    router.push('/system/configuration-and-management/settings/companies/:id')
  }

  const handleEdit = (rowData, e) => {
    router.push('/system/configuration-and-management/settings/companies/:id/edit')
  }

  const handleActive = (rowData, tableData, e) => {
    const updatedRows = [...testingDataTable]
    updatedRows[tableData.rowIndex] = { ...rowData, status: e.value ? 'active' : 'inactive' }
    setTestingDataTable(updatedRows)
  }

  const handleDelete = (rowData, tableData, e) => {
    console.log(tableData.rowIndex)
  }

  const handleOnSelection = (e, tableData) => {
  }

  const logoBodyTemplate = (rowData, tableData) => {
    return (
      <div className={styles.table_column_logo}>
        <Img
          src={rowData.logo}
          alt='logo'
          width={140}
          height={35}
        />
      </div>
    )
  }

  const statusBodyTemplate = (rowData, tableData) => {
    return (
      <div className={styles.table_column_status}>
        <div className={rowData.status === 'active' ? styles.status_active : ''}>
          {rowData.status === 'active' ? 'Activo' : 'Inactivo'}
        </div>
      </div>
    )
  }

  const actionBodyTemplate = (rowData, tableData) => {
    return (
      <div className={styles.table_column_actions}>
        <div>
          <Button
            icon='i-show'
            onClick={(e) => handleShow(rowData, tableData, e)}
            tooltip='Ver'
            tooltipOptions={{ position: 'top' }}
            variant='button_show'
            height='30px'
          />
        </div>
        <div>
          <Button
            icon='i-edit'
            onClick={(e) => handleEdit(rowData, tableData, e)}
            tooltip='Editar'
            tooltipOptions={{ position: 'top' }}
            variant='button_edit'
            height='30px'
          />
        </div>
        <div>
          <ToggleButton
            onIcon='i-activate'
            offIcon='i-activate'
            checked={rowData.status === 'active'}
            onChange={(e) => handleActive(rowData, tableData, e)}
            tooltip={rowData.status === 'active' ? 'Inactivar' : 'Activar'}
            tooltipOptions={{ position: 'top' }}
            variant='primary'
            height='30px'
          />
        </div>
        <div>
          <Button
            icon='i-delete'
            onClick={(e) => handleDelete(rowData, tableData, e)}
            tooltip='Eliminar'
            tooltipOptions={{ position: 'top' }}
            variant='button_delete'
            height='30px'
          />
        </div>
      </div>
    )
  }

  const columnsDataTable = [
    { id: 1, field: 'code', header: 'Código', w: '100px', t: 'left' },
    { id: 2, body: logoBodyTemplate, field: 'logo', header: 'Logo', w: '200px', t: 'left' },
    { id: 3, field: 'name', header: 'Nombre o razón social', w: '670px', t: 'left' },
    { id: 4, field: 'type', header: 'Tipo', w: '250px', t: 'left' },
    { id: 5, body: statusBodyTemplate, field: 'status', header: 'Estatus', w: '180px', t: 'center' },
    { id: 6, body: actionBodyTemplate, field: 'actions', header: 'Acciones', w: '210px', t: 'center' }
  ]

  return (
    <DataTable
      data={testingDataTable}
      columns={columnsDataTable}
      numberRows={numberRows}
      search={search}
      searchStatus={searchStatus}
      loading={loadingTable}
      selectionMode='single'
      selection={selectedRow}
      onSelectionChange={(e, tableData) => handleOnSelection(e, tableData)}
      variant='primary'
    />
  )
}
