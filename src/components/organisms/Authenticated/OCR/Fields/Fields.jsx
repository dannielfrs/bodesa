// 'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FormHookProvider } from '@/components/layouts/Form/FormHookProvider'
import { DataTable } from '@/components/molecules/DataTable/DataTable'
import styles from './Fields.module.scss'
import { HeaderTable } from '@/components/molecules/HeaderTable/HeaderTable'
import { ActionsBody } from '@/components/molecules/ActionsBody/ActionsBody'
import { StatusColumn } from '@/components/molecules/StatusColumn/StatusColumn'
import { useRouter } from 'next/navigation'
import { changeStatusService, DeleteRow } from '@/services/general'
import { useRootContext } from '@/Provider/RootProvider'
import { usePostDataRefresh } from '@/customHooks/useGeneral'

export default function Fields () {
  const methods = useForm()
  const router = useRouter()
  const [search, setSearch] = useState('')
  const [refresh, setRefresh] = useState(false)

  const { selectCompany } = useRootContext()
  const { data, loading, setData } = usePostDataRefresh('ocr/fields/data-table', selectCompany, refresh)

  const onSubmit = () => { }

  const statusColumnTemplate = (rowData) => {
    return <StatusColumn status={rowData.status} />
  }

  const handleActive = (rowData) => {
    changeStatusService(`ocr/fields/${rowData.id}/change-status`, setRefresh, rowData.status)
  }

  const OnDelete = (rowData, setData) => {
    DeleteRow(rowData.id, `ocr/fields/${rowData.id}`, rowData.name, setData)
  }

  const AcctionsBodyTempleate = (rowData) => {
    return (
      <ActionsBody
        actionShow={rowData.actions.show}
        actionEdit={rowData.actions.edit}
        actionActBtn
        actionDelete={rowData.actions.delete}
        rowDataActive={rowData.status}
        urlShow={`/system/ocr/fields/${rowData.id}`}
        urlEdit={`/system/ocr/fields/${rowData.id}/edit`}
        onDelete={() => OnDelete(rowData, setData)}
        handleActive={() => handleActive(rowData)}
      />
    )
  }

  const dataTableColumns = [
    { field: 'name', header: 'Campo', sortable: true, w: '450px', h: '50px' },
    { field: 'description', header: 'Descripción', sortable: true, w: '770px', h: '50px' },
    { field: 'status', header: 'Estatus', body: statusColumnTemplate, sortable: true, w: '180px', h: '51px' },
    { field: 'actions', header: 'Acciones', body: AcctionsBodyTempleate, sortable: true, w: '201px', h: '51px' }
  ]

  return (
    <FormHookProvider methods={methods} method='POST' onSubmit={onSubmit}>
      <div className={styles.Fields}>
        <HeaderTable
          title='Campos'
          handleNew={() => router.push('/system/ocr/fields/create')}
          search={search}
          setSearch={setSearch}
          dropCompanies={false}
        />
        <div className='tableUser'>
          <DataTable
            data={data.data}
            columns={dataTableColumns}
            loading={loading}
            variant='primary'
            search={search}
            numberRows={methods.watch('pages')}
            searchStatus={methods.watch('status')?.includes('Todos') ? '' : methods.watch('status')?.includes('Activos')}
          />
        </div>
      </div>
    </FormHookProvider>
  )
}
