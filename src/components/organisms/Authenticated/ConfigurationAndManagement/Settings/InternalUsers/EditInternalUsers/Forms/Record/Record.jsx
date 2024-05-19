import React, { useEffect, useState } from 'react'
import styles from './Record.module.scss'
import { FormHookProvider } from '@/components/layouts/Form/FormHookProvider'
import { useForm } from 'react-hook-form'
import dataTable from '@/services/fake/authenticated/ConfigurationManagement/Settings/InternalUsers/Record/dataTable'
import { DataTable } from '@/components/molecules/DataTable/DataTable'

export default function Record () {
  const methods = useForm()
  const onSubmit = () => {
    console.log('send form')
  }
  const [branchs, setBranchs] = useState([])
  const [search] = useState([])

  const dashboardColumns = [
    {
      field: 'date',
      header: 'Fecha y hora',
      sortable: true,
      w: '200px',
      h: '50px'
    },
    {
      field: 'action',
      header: 'Acción',
      sortable: true,
      w: '230px',
      h: '50px'
    },
    {
      field: 'user',
      header: 'Usuario',
      sortable: true,
      w: '210px',
      h: '50px'
    },
    {
      field: 'ip',
      header: 'IP',
      sortable: true,
      w: '240px',
      h: '50px'
    },
    {
      field: 'appliance',
      header: 'Dispositivo',
      sortable: true,
      w: '200px',
      h: '50px'
    },
    {
      field: 'navigator',
      header: 'Navegador',
      sortable: true,
      w: '230px',
      h: '50px'
    },
    {
      field: 'ubication',
      header: 'Ubicación',
      sortable: true,
      w: '180px',
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
        <div className={styles.Record}>
          <DataTable
            columns={dashboardColumns}
            data={branchs}
            loading={false}
            selectionMode='single'
            variant='primary'
            search={search}
          />
        </div>
      </FormHookProvider>
    </>
  )
}
