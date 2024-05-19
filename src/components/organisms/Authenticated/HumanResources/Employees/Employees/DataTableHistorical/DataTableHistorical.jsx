import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { DataTable } from '@/components/molecules/DataTable/DataTable'
import dataTable from '@/services/fake/authenticated/HumanResources/Employees/Employees/DataTableHistorical/dataTable'

export default function DataTableHistorical() {
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
    { id: 1, field: 'date_time', header: 'Fecha y hora', w: '200px', t: 'left' },
    { id: 2, field: 'action', header: 'Acción', w: '230px', t: 'left' },
    { id: 3, field: 'user', header: 'Usuario', w: '250px', t: 'left' },
    { id: 4, field: 'ip', header: 'IP', w: '200px', t: 'left' },
    { id: 5, field: 'device', header: 'Dispositivo', w: '200px', t: 'left' },
    { id: 6, field: 'browser', header: 'Navegador', w: '220px', t: 'left' },
    { id: 7, field: 'location', header: 'Ubicación', w: '310px', t: 'left' }
  ]

  return (
    <DataTable
      data={testingDataTable}
      columns={columnsDataTable}
      numberRows={10}
      loading={loadingTable}
      selectionMode='single'
      selection={selectedRow}
      onSelectionChange={(e) => handleOnSelection(e)}
      scrollable
      scrollHeight='600px'
      variant='primary'
    />
  )
}
