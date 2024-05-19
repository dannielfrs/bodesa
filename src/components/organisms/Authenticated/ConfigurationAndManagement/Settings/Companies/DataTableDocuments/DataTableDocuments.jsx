import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { DataTable } from '@/components/molecules/DataTable/DataTable'
import { Button, ToggleButton } from '@/components/molecules/Button'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'
import { InputText } from '@/components/molecules/InputText/InputText/InputText'
import { SidebarDocuments } from '@/components/molecules/Sidebar/SidebarDocuments/SidebarDocuments'
import dataTable from '@/services/fake/authenticated/ConfigurationManagement/Settings/Companies/CompaniesDocuments/dataTable'

export default function DataTableDocuments ({ showMode, editMode, showModal, onHide = () => { } }) {
  const [selectedRow, setSelectedRow] = useState(null)
  const [testingDataTable, setTestingDataTable] = useState([])
  const [numberRows, setNumberRows] = useState(10)
  const [status, setStatus] = useState('')
  const [search, setSearch] = useState('')
  const [showSidebar, setShowSidebar] = useState(false)
  const [mode, setMode] = useState('')
  const loadingTable = false

  console.log(setSelectedRow)

  const rowsPerPage = [
    { label: '10 / Página', value: 10 },
    { label: '20 / Página', value: 20 },
    { label: '50 / Página', value: 50 },
    { label: '100 / Página', value: 100 }
  ]

  const statusOptions = [
    { label: 'Todos', value: '' },
    { label: 'Activos', value: 'active' },
    { label: 'Inactivos', value: 'inactive' }
  ]

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

  const handleOnHide = () => {
    setShowSidebar(false)
    onHide()
  }

  const handleShow = (rowData, tableData, e) => {
    setShowSidebar(true)
    setMode('show')
  }

  const handleEdit = (rowData, e) => {
    setShowSidebar(true)
    setMode('edit')
  }

  const handleActive = (rowData, tableData, e) => {
    const updatedRows = [...testingDataTable]
    updatedRows[tableData.rowIndex] = { ...rowData, status: e.value ? 'active' : 'inactive' }
    setTestingDataTable(updatedRows)
  }

  const handleDelete = (rowData, tableData, e) => {
    console.log(tableData.rowIndex)
  }

  const handleOnSelection = (e) => {
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
            type='button'
            icon='i-show'
            onClick={(e) => handleShow(rowData, tableData, e)}
            tooltip='Ver'
            tooltipOptions={{ position: 'top' }}
            variant='button_show'
            height='30px'
          />
        </div>
        {!showMode &&
          <>
            <div>
              <Button
                type='button'
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
                type='button'
                icon='i-delete'
                onClick={(e) => handleDelete(rowData, tableData, e)}
                tooltip='Eliminar'
                tooltipOptions={{ position: 'top' }}
                variant='button_delete'
                height='30px'
              />
            </div>
          </>}
      </div>
    )
  }

  const columnsDataTable = [
    { id: 2, field: 'name', header: 'Nombre', w: '760px', t: 'left' },
    { id: 1, field: 'files', header: 'Archivos', w: '160px', t: 'left' },
    { id: 3, field: 'validity', header: 'Vigencia', w: '300px', t: 'left' },
    { id: 4, body: statusBodyTemplate, field: 'status', header: 'Estatus', w: '180px', t: 'center' },
    { id: 5, body: actionBodyTemplate, field: 'actions', header: 'Acciones', w: '210px', t: 'center' }
  ]

  return (
    <div className={styles.table}>
      <div className={styles.table_header}>
        <div>Expediente digital de documentos</div>
        <div className={styles.table_header_group}>
          <div>
            <Button
              icon='i-excel'
              type='button'
              onClick={() => { }}
              tooltip='Descargar excel'
              tooltipOptions={{ position: 'top', className: 'tooltip_green' }}
              variant='transparent-static'
              height='28px'
            />
          </div>
          <div>
            <Dropdown
              name='rows_per_page'
              defaultValue={numberRows}
              onChange={(e) => setNumberRows(e.value)}
              options={rowsPerPage}
              optionLabel='label'
              placeholder='- Selecciona una opción -'
              variant='primary'
              height='45px'
            />
          </div>
          <div>
            <Dropdown
              name='filter_status'
              onChange={(e) => setStatus(e.value)}
              options={statusOptions}
              optionLabel='label'
              placeholder='Estatus'
              filter
              variant='primary'
              height='45px'
            />
          </div>
          <div>
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
      <div className={styles.table_body}>
        <DataTable
          data={testingDataTable}
          columns={columnsDataTable}
          numberRows={numberRows}
          search={search}
          searchStatus={status}
          loading={loadingTable}
          selectionMode='single'
          selection={selectedRow}
          onSelectionChange={(e) => handleOnSelection(e)}
          variant='primary'
        />
      </div>
      <SidebarDocuments
        visible={showSidebar}
        onHide={handleOnHide}
        createMode={mode === 'create'}
        showMode={mode === 'show'}
        editMode={mode === 'edit'}
      />
    </div>
  )
}
