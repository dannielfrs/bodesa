import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import dataTable from '@/services/fake/authenticated/ConfigurationManagement/controlPanels/users/dataTable'
import { DataTable } from '@/components/molecules/DataTable/DataTable'
import { SidebarUsersOnline } from '@/components/molecules/Sidebar'

export default function DataTableUsers () {
  const [selectedRow, setSelectedRow] = useState(null)
  const [testingDataTable, setTestingDataTable] = useState([])
  const [showSidebar, setShowSidebar] = useState(false)
  const [module, setModule] = useState('')
  const loadingTable = false

  console.log(setSelectedRow)

  useEffect(() => {
    const fetchData = async () => {
      const data = await dataTable(4)
      setTestingDataTable(data)
    }
    fetchData()
  }, [])

  const handleOnSelection = (e) => {
    setModule(e.value.module)
    setShowSidebar(true)
  }

  const columnsDataTable = [
    { id: 1, field: 'module', header: 'Módulo', w: '430px', t: 'left' },
    { id: 2, field: 'users_online', header: 'Usuarios conectados', w: '170px', t: 'center' }
  ]

  return (
    <div className={styles.table}>
      <DataTable
        data={testingDataTable}
        columns={columnsDataTable}
        numberRows={10}
        loading={loadingTable}
        selectionMode='single'
        selection={selectedRow}
        onSelectionChange={(e) => handleOnSelection(e)}
        paginatorNone
        rowHeight='40px'
        variant='primary'
      />
      <SidebarUsersOnline
        visible={showSidebar}
        onHide={() => setShowSidebar(false)}
        module={module}
      />
    </div>
  )
}
