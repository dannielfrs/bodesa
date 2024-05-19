// 'use client'

import { useEffect, useState } from 'react'
import styles from './ExternalUsers.module.scss'
import { FormHookProvider } from '@/components/layouts/Form/FormHookProvider'
import { HeaderTable } from '@/components/molecules/HeaderTable/HeaderTable'
import { DataTable } from '@/components/molecules/DataTable/DataTable'
import { useForm } from 'react-hook-form'
import { StatusColumn } from '@/components/molecules/StatusColumn/StatusColumn'
import { ActionsBody } from '@/components/molecules/ActionsBody/ActionsBody'
import dataTable from '@/services/fake/authenticated/ConfigurationManagement/Settings/InternalUsers/dataTable'
import { useRouter } from 'next/navigation'

export default function ExternalUsers () {
  const methods = useForm()
  const router = useRouter()
  const onSubmit = () => {
    console.log('send form')
  }

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
  // const OnDelete = (setBranchs, id) => {
  //   const Confirm = () => {
  //     setBranchs((data) => {
  //       const copy = [...data]
  //       const index = copy.findIndex(e => e.id === id)
  //       if (index !== -1) {
  //         copy.splice(index, 1)
  //         return copy
  //       }
  //     })
  //     Success('Equipo eliminado', 'El equipo se eliminó de forma correcta')
  //     setTimeout(() => {
  //       Swal.close()
  //     }, 2000)
  //   }
  //   // Delete('¿Estas seguro que desea eliminar?', Confirm)
  // }
  const AcctionsBodyTempleate = (rowData) => {
    return (
      <ActionsBody
        id={rowData.id}
        actionShow
        actionEdit
        actionActBtn
        actionDelete
        rowDataActive={rowData.status}
        setBranchs={setBranchs}
        urlShow='/system/configuration-and-management/settings/external-users/id'
        urlEdit='/system/configuration-and-management/settings/external-users/id/edit'
        // onDelete={OnDelete}
        handleActive={handleActive}
      />
    )
  }
  const dashboardColumns = [
    {
      field: 'code',
      header: 'Código',
      sortable: true,
      w: '100px',
      h: '50px'
    },
    {
      field: 'name',
      header: 'Nombre',
      sortable: true,
      w: '320px',
      h: '50px'
    },
    {
      field: 'company',
      header: 'Empresa',
      sortable: true,
      w: '210px',
      h: '50px'
    },
    {
      field: 'supplier',
      header: 'Proveedor',
      sortable: true,
      w: '240px',
      h: '50px'
    },
    {
      field: 'profile',
      header: 'Perfil asignado',
      sortable: true,
      w: '200px',
      h: '50px'
    },
    {
      field: 'position',
      header: 'Puesto',
      sortable: true,
      w: '150px',
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

  useEffect(() => {
    methods.setValue('pages', '10 / Página')
    methods.setValue('status', 'Todos')
    methods.setValue('company', 'Empresas')
  }, [])

  return (
    <>
      <FormHookProvider methods={methods} method='POST' onSubmit={onSubmit}>
        <div className={styles.ExternalUsers}>
          <HeaderTable
            title='Usuarios externos'
            handleNew={() => router.push('/system/configuration-and-management/settings/external-users/create')}
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
      </FormHookProvider>
    </>
  )
}
