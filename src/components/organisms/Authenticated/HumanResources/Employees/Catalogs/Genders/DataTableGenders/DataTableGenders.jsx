import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './styles.module.scss'
import { DataTable } from '@/components/molecules/DataTable/DataTable'
import { Button, ToggleButton } from '@/components/molecules/Button'
import { StatusColumn } from '@/components/molecules/StatusColumn/StatusColumn'
import dataTable from '@/services/fake/authenticated/HumanResources/Employees/Catalogs/Genders/dataTable'

export default function DataTableGenders({ numberRows, searchStatus, search }) {
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

  console.log(testingDataTable)

  const handleShow = (rowData, tableData, e) => {
    router.push('/system/human-resources/employees/catalogs/genders/:id')
  }

  const handleEdit = (rowData, e) => {
    router.push('/system/human-resources/employees/catalogs/genders/:id/edit')
  }

  const handleActive = (rowData, tableData, e) => {
    const updatedRows = [...testingDataTable]
    updatedRows[tableData.rowIndex] = { ...rowData, status: e.value }
    setTestingDataTable(updatedRows)
  }

  const handleDelete = (rowData, tableData, e) => {
    console.log(tableData.rowIndex)
  }

  const handleOnSelection = (e, tableData) => {
  }

  const statusBodyTemplate = (rowData, tableData) => {
    return <StatusColumn status={rowData.status} />
  }

  const actionsBodyTemplate = (rowData, tableData) => {
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
            checked={rowData.status}
            onChange={(e) => handleActive(rowData, tableData, e)}
            tooltip={rowData.status ? 'Inactivar' : 'Activar'}
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
    { id: 1, field: 'name', header: 'Nombre', w: '970px', t: 'left' },
    { id: 2, body: statusBodyTemplate, field: 'status', header: 'Estatus', w: '180px', t: 'center' },
    { id: 3, body: actionsBodyTemplate, field: 'actions', header: 'Acciones', w: '210px', t: 'center' }
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
