import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { DataTable } from '@/components/molecules/DataTable/DataTable'
import { HeaderTable } from '@/components/molecules/HeaderTable/HeaderTable'
import { SidebarModal } from '@/components/molecules/Sidebar/SidebarModal/SidebarModal'
import { StatusColumn } from '@/components/molecules/StatusColumn/StatusColumn'
import { DataTableActions } from '@/components/molecules/DataTableActions/DataTableActions'
import FormDocument from '@/components/organisms/Authenticated/HumanResources/Employees/Employees/FormDocument/FormDocument'
import dataTable from '@/services/fake/authenticated/HumanResources/Employees/Employees/DataTableDocuments/dataTable'

export default function DataTableDocuments({ showMode, editMode, showModal, onHide = () => { } }) {
  const [selectedRow, setSelectedRow] = useState(null)
  const [testingDataTable, setTestingDataTable] = useState([])
  const [numberRows, setNumberRows] = useState(10)
  const [searchStatus, setSearchStatus] = useState('')
  const [search, setSearch] = useState('')
  const [showSidebar, setShowSidebar] = useState(false)
  const [mode, setMode] = useState('')
  const loadingTable = false

  console.log(setSelectedRow)

  useEffect(() => {
    const fetchData = async () => {
      const data = await dataTable(50)
      setTestingDataTable(data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (showModal) {
      setShowSidebar(true)
      setMode('create')
    }
  }, [showModal])

  const handleStatus = (value) => {
    switch (value) {
      case 'Todos':
        setSearchStatus(null)
        break;
      case 'Activos':
        setSearchStatus(true)
        break;
      case 'Inactivos':
        setSearchStatus(false)
        break;
      default:
        break;
    }
  }

  const handleOnHide = () => {
    setShowSidebar(false)
    onHide()
  }

  const handleShow = () => {
    setShowSidebar(true)
    setMode('show')
  }

  const handleEdit = () => {
    setShowSidebar(true)
    setMode('edit')
  }

  const handleActive = (rowData, tableData, e) => {
    const updatedRows = [...testingDataTable]
    updatedRows[tableData.rowIndex] = { ...rowData, status: e.value }
    setTestingDataTable(updatedRows)
  }

  const handleDelete = (rowData, tableData, e) => {
    console.log(tableData.rowIndex)
  }

  const handleOnSelection = () => { }

  const statusBodyTemplate = (rowData, tableData) => {
    return <StatusColumn status={rowData.status} />
  }

  const actionsBodyTemplate = (rowData, tableData) => {
    return (
      <DataTableActions
        showButton
        editButton={!showMode}
        activateButton={!showMode}
        deleteButton={!showMode}
        onClickShow={(e) => handleShow(rowData, tableData, e)}
        onClickEdit={(e) => handleEdit(rowData, tableData, e)}
        onClickActivate={(e) => handleActive(rowData, tableData, e)}
        onClickDelete={(e) => handleDelete(rowData, tableData, e)}
        status={rowData.status}
      />
    )
  }

  const columnsDataTable = [
    { id: 2, field: 'name', header: 'Nombre', w: '760px', t: 'left' },
    { id: 1, field: 'files', header: 'Archivos', w: '160px', t: 'left' },
    { id: 3, field: 'validity', header: 'Vigencia', w: '300px', t: 'left' },
    { id: 4, field: 'status', header: 'Estatus', body: statusBodyTemplate, w: '180px', t: 'center' },
    { id: 5, field: 'actions', header: 'Acciones', body: actionsBodyTemplate, w: '210px', t: 'center' }
  ]

  return (
    <div className={styles.table}>
      <div className={styles.table_header}>
        <HeaderTable
          title='Expediente digital de documentos'
          onChangeRowsPerPage={(e) => setNumberRows(e.value)}
          onChangeStatus={(e) => handleStatus(e.value)}
          search={search}
          setSearch={setSearch}
          dropCompanies={false}
          hideBorder
        />
      </div>
      <div className={styles.table_body}>
        <DataTable
          data={testingDataTable}
          columns={columnsDataTable}
          numberRows={numberRows}
          search={search}
          searchStatus={searchStatus}
          loading={loadingTable}
          selectionMode='single'
          selection={selectedRow}
          onSelectionChange={(e) => handleOnSelection(e)}
          scrollable
          scrollHeight='600px'
          variant='primary'
        />
      </div>
      <SidebarModal
        visible={showSidebar}
        onHide={handleOnHide}
        position='right'
        width='690px'
      >
        <FormDocument
          createMode={mode === 'create'}
          showMode={mode === 'show'}
          editMode={mode === 'edit'}
          onHide={handleOnHide}
        />
      </SidebarModal>
    </div>
  )
}
