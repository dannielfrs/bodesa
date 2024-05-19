import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { DataTable } from '@/components/molecules/DataTable/DataTable'
import { Button } from '@/components/molecules/Button'
import { SidebarModal } from '@/components/molecules/Sidebar/SidebarModal/SidebarModal'
import { StatusColumn } from '@/components/molecules/StatusColumn/StatusColumn'
import { DataTableActions } from '@/components/molecules/DataTableActions/DataTableActions'
import FormContactNumber from '@/components/organisms/Authenticated/HumanResources/Employees/Employees/FormContactNumber/FormContactNumber'
import dataTable from '@/services/fake/authenticated/HumanResources/Employees/Employees/DataTableContactNumbers/dataTable'

export default function DataTableContactNumbers({ showMode, editMode, onHide = () => { } }) {
  const [selectedRow, setSelectedRow] = useState(null)
  const [testingDataTable, setTestingDataTable] = useState([])
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

  const handleCreateNumber = () => {
    setShowSidebar(true)
    setMode('create')
  }

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
    { id: 1, field: 'type', header: 'Tipo', w: '320px', t: 'left' },
    { id: 2, field: 'number', header: 'Número', w: '450px', t: 'left' },
    { id: 3, field: 'contact_person', header: 'Persona de contacto', w: '450px', t: 'left' },
    { id: 4, field: 'status', header: 'Estatus', body: statusBodyTemplate, w: '180px', t: 'center' },
    { id: 5, field: 'actions', header: 'Acciones', body: actionsBodyTemplate, w: '210px', t: 'center' }
  ]

  return (
    <div className={styles.table}>
      <div className={styles.table_header}>
        <div>Números de contacto</div>
        <div className={styles.table_header_group}>
          {!showMode &&
            <div>
              <Button
                label='Nuevo número'
                type='button'
                onClick={handleCreateNumber}
                variant='primary'
                height='35px'
              />
            </div>
          }
        </div>
      </div>
      <div className={styles.table_body}>
        <DataTable
          data={testingDataTable}
          columns={columnsDataTable}
          numberRows={10}
          loading={loadingTable}
          selectionMode='single'
          selection={selectedRow}
          onSelectionChange={(e) => handleOnSelection(e)}
          variant='primary'
        />
      </div>
      <SidebarModal
        visible={showSidebar}
        onHide={handleOnHide}
        position='right'
        width='520px'
      >
        <FormContactNumber
          createMode={mode === 'create'}
          showMode={mode === 'show'}
          editMode={mode === 'edit'}
          onHide={handleOnHide}
        />
      </SidebarModal>
    </div>
  )
}
