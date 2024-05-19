import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { DataTable } from '@/components/molecules/DataTable/DataTable'
import { Avatar } from '@/components/atoms/Avatar'
import dataTable from '@/services/fake/authenticated/ConfigurationManagement/Reports/UserAccess/dataTable'

export default function DataTableUserAccess () {
  const [selectedRow, setSelectedRow] = useState(null)
  const [testingDataTable, setTestingDataTable] = useState([])
  const loadingTable = false

  console.log(setSelectedRow)

  useEffect(() => {
    const fetchData = async () => {
      const data = await dataTable(40)
      setTestingDataTable(data)
    }
    fetchData()
  }, [])

  const handleOnSelection = (e, tableData) => {
    console.log(tableData.rowIndex)
  }

  const nameBodyTemplate = (rowData, tableData) => {
    return (
      <div className={styles.table_column_name}>
        <Avatar
          image={rowData.avatar}
          imageAlt='profile picture'
          imageFallback='/images/avatar/default_user.jpg'
          shape='circle'
        />
        <div>{rowData.name}</div>
      </div>
    )
  }

  const columnsDataTable = [
    { id: 1, field: 'date_time', header: 'Fecha y hora', w: '200px', h: '50px', t: 'left' },
    { id: 2, field: 'code', header: 'Código', w: '100px', h: '50px', t: 'left' },
    { id: 3, body: nameBodyTemplate, field: 'name', header: 'Nombre', w: '280px', h: '50px', t: 'left' },
    { id: 4, field: 'assigned_profile', header: 'Perfil asignado', w: '200px', h: '50px', t: 'left' },
    { id: 5, field: 'ip', header: 'IP', w: '170px', h: '50px', t: 'left' },
    { id: 6, field: 'device', header: 'Dispositivo', w: '180px', h: '50px', t: 'left' },
    { id: 7, field: 'browser', header: 'Navegador', w: '180px', h: '50px', t: 'left' },
    { id: 8, field: 'location', header: 'Ubicación', w: '270px', h: '50px', t: 'left' }
  ]

  return (
    <DataTable
      data={testingDataTable}
      columns={columnsDataTable}
      loading={loadingTable}
      paginatorNone
      selectionMode='single'
      selection={selectedRow}
      onSelectionChange={(e, tableData) => handleOnSelection(e, tableData)}
      scrollable
      scrollHeight='730px'
      variant='primary'
    />
  )
}
