import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { DataTable } from '@/components/molecules/DataTable/DataTable'
import dataTable from '@/services/fake/authenticated/UserProfile/DataTableLastAccesses/dataTable'

export default function DataTableLastAccesses() {
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

  const handleOnSelection = () => { }

  const columnsDataTable = [
    { id: 1, field: 'date', header: 'Fecha y hora', w: '190px', t: 'left', sortable: true, },
    { id: 2, field: 'ip', header: 'IP', w: '180px', t: 'left', sortable: true, },
    { id: 3, field: 'devices', header: 'Dispositivo', w: '190px', t: 'left', sortable: true, },
  ]

  return (
    <DataTable
      data={testingDataTable}
      columns={columnsDataTable}
      numberRows={10}
      loading={loadingTable}
      paginatorNone
      selectionMode='single'
      selection={selectedRow}
      onSelectionChange={(e) => handleOnSelection(e)}
      scrollable
      scrollHeight='570px'
      variant='primary'
    />
  )
}
