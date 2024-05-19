import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import styles from './styles.module.scss'
import { DataTable } from '@/components/molecules/DataTable/DataTable'
import { StatusColumn } from '@/components/molecules/StatusColumn/StatusColumn'
import dataTable from '@/services/fake/authenticated/HumanResources/Employees/Employees/DataTableEmployees/dataTable'
import { DataTableActions } from '@/components/molecules/DataTableActions/DataTableActions'

export default function DataTableEmployees({ numberRows, searchCompany, searchStatus, search }) {
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

  const handleActive = (rowData, tableData, e) => {
    const updatedRows = [...testingDataTable]
    updatedRows[tableData.rowIndex] = { ...rowData, status: e.value }
    setTestingDataTable(updatedRows)
  }

  const handleDelete = (rowData, tableData, e) => {
    console.log(tableData.rowIndex)
  }

  const handleOnSelection = () => { }

  const imageBodyTemplate = (rowData, tableData) => {
    return (
      <div className={styles.table_avatar}>
        <Image
          loader={({ src }) => src}
          src={rowData.image}
          alt='avatar'
          width={35}
          height={35}
        />
        <p>Alejandro Díaz García</p>
      </div>
    )
  }

  const statusBodyTemplate = (rowData, tableData) => {
    return <StatusColumn status={rowData.status} />
  }

  const actionsBodyTemplate = (rowData, tableData) => {
    return (
      <DataTableActions
        showButton
        editButton
        activateButton
        deleteButton
        onClickShow={() => router.push('/system/human-resources/employees/employees/:id')}
        onClickEdit={() => router.push('/system/human-resources/employees/employees/:id/edit')}
        onClickActivate={(e) => handleActive(rowData, tableData, e)}
        onClickDelete={(e) => handleDelete(rowData, tableData, e)}
        status={rowData.status}
      />
    )
  }

  const columnsDataTable = [
    { id: 1, field: 'code', header: 'Código', w: '100px' },
    { id: 2, field: 'name', header: 'Nombre', body: imageBodyTemplate, w: '300px' },
    { id: 3, field: 'rfc', header: 'RFC', w: '190px' },
    { id: 4, field: 'company', header: 'Empresa', w: '200px' },
    { id: 5, field: 'store', header: 'Tienda / Ubicación operativa', w: '240px' },
    { id: 6, field: 'positions', header: 'Puesto', w: '190px' },
    { id: 7, field: 'status', header: 'Estatus', body: statusBodyTemplate, w: '180px' },
    { id: 8, field: 'actions', header: 'Acciones', body: actionsBodyTemplate, w: '210px' },
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
      scrollable
      scrollHeight='650px'
      variant='primary'
    />
  )
}
