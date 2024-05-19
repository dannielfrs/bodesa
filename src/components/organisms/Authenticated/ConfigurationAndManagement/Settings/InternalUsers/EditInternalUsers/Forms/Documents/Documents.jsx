import React, { useEffect, useState } from 'react'
import styles from './Documents.module.scss'
import { HeaderTable } from '@/components/molecules/HeaderTable/HeaderTable'
import { DataTable } from '@/components/molecules/DataTable/DataTable'
import dataTable from '@/services/fake/authenticated/ConfigurationManagement/Settings/InternalUsers/Documents/dataTable'
import { StatusColumn } from '@/components/molecules/StatusColumn/StatusColumn'
import { ActionsBody } from '@/components/molecules/ActionsBody/ActionsBody'
import { Delete, Success } from '@/utils/Loading'
import Swal from 'sweetalert2'

export default function Documents ({ setOpenModal2, setOpenModal2Title, disabled }) {
  const [branchs, setBranchs] = useState([])
  const [search, setSearch] = useState('')
  const statusColumnTemplate = (rowData) => {
    return <StatusColumn status={rowData.status} />
  }
  const handleActive = (setBranchs, id) => {
    setBranchs((data) => {
      const copy = [...data]
      const index = copy.findIndex(e => e.id === id)
      if (index !== -1) {
        copy[index].status = !copy[index].status
        return copy
      }
    })
  }
  const OnDelete = (setBranchs, id) => {
    const Confirm = () => {
      setBranchs((data) => {
        const copy = [...data]
        const index = copy.findIndex(e => e.id === id)
        if (index !== -1) {
          copy.splice(index, 1)
          return copy
        }
      })
      Success('Documento eliminado', 'El documento se eliminó de forma correcta')
      setTimeout(() => {
        Swal.close()
      }, 2000)
    }
    Delete('¿Estas seguro que desea eliminar?', Confirm)
  }
  const AcctionsBodyTempleate = (rowData) => {
    return (
      <ActionsBody
        id={rowData.id}
        nameModal='documento'
        setOpenModal={setOpenModal2}
        setOpenModalTitle={setOpenModal2Title}
        actionShow
        rowDataActive={rowData.status}
        setBranchs={setBranchs}
        actionEdit={!disabled}
        actionActBtn={!disabled}
        actionDelete={!disabled}
        onDelete={OnDelete}
        handleActive={handleActive}
      />
    )
  }
  const dashboardColumns = [
    {
      field: 'name',
      header: 'Nombre',
      sortable: true,
      w: '760px',
      h: '50px'
    },
    {
      field: 'documents',
      header: 'Archivos',
      sortable: true,
      w: '160px',
      h: '50px'
    },
    {
      field: 'validity',
      header: 'Vigencia',
      sortable: true,
      w: '300px',
      h: '50px'
    },
    {
      field: 'status',
      header: 'Estatus',
      body: statusColumnTemplate,
      sortable: true,
      w: '180px',
      h: '51px'
    },
    {
      field: 'actions',
      header: 'Acciones',
      body: AcctionsBodyTempleate,
      sortable: true,
      w: '201px',
      h: '51px'
    }
  ]
  useEffect(() => {
    const fetchData = async () => {
      const data = await dataTable(10)
      setBranchs(data)
    }
    fetchData()
  }, [])
  return (
    <>
      <div className={styles.Documents}>
        <HeaderTable
          title='Expediente digital de documentos'
          dropCompanies={false}
          search={search}
          setSearch={setSearch}
        />
        <div className='tableUser'>
          <DataTable
            columns={dashboardColumns}
            data={branchs}
            loading={false}
            selectionMode='single'
            variant='primary'
            search={search}
          />
        </div>
      </div>
    </>
  )
}
