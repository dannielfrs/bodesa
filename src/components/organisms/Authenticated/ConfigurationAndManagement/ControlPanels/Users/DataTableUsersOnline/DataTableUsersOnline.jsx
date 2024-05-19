import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import dataTable from '@/services/fake/authenticated/ConfigurationManagement/controlPanels/usersOnline/dataTable'
import { DataTable } from '@/components/molecules/DataTable/DataTable'
import { Avatar } from '@/components/atoms/Avatar'
import { Button } from '@/components/molecules/Button'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'
import { InputText } from '@/components/molecules/InputText/InputText/InputText'

export default function DataTableUsersOnline ({ module }) {
  const [selectedRow, setSelectedRow] = useState(null)
  const [testingDataTable, setTestingDataTable] = useState([])
  const [numberRows, setNumberRows] = useState(10)
  const [search, setSearch] = useState('')
  const loadingTable = false

  console.log(setSelectedRow)

  const rowsPerPage = [
    { label: '10 / Página', value: 10 },
    { label: '20 / Página', value: 20 },
    { label: '50 / Página', value: 50 },
    { label: '100 / Página', value: 100 }
  ]

  useEffect(() => {
    const fetchData = async () => {
      const data = await dataTable(50)
      setTestingDataTable(data)
    }
    fetchData()
  }, [])

  const handleOnSelection = (e) => {
    console.log(e.value)
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
    { id: 1, field: 'code', header: 'Código', w: '100px', t: 'left' },
    { id: 2, body: nameBodyTemplate, field: 'name', header: 'Nombre', w: '290px', t: 'left' },
    { id: 3, field: 'assigned_profile', header: 'Perfil asignado', w: '210px', t: 'left' },
    { id: 4, field: 'ip', header: 'IP', w: '170px', t: 'left' }
  ]

  return (
    <div className={styles.table}>
      <div className={styles.table_header}>
        <div>Módulo: {module}</div>
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
              defaultValue={10}
              onChange={(e) => setNumberRows(e.value)}
              options={rowsPerPage}
              optionLabel='label'
              placeholder='- Selecciona una opción -'
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
      <div className={styles.table_content}>
        <DataTable
          data={testingDataTable}
          columns={columnsDataTable}
          numberRows={numberRows}
          search={search}
          loading={loadingTable}
          selectionMode='single'
          selection={selectedRow}
          onSelectionChange={(e) => handleOnSelection(e)}
          rowHeight='50px'
          variant='primary'
        />
      </div>
    </div>
  )
}
