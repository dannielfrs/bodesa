// 'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import styles from './DocumentsTypes.module.scss'
import { FormHookProvider } from '@/components/layouts/Form/FormHookProvider'
import { DataTable } from '@/components/molecules/DataTable/DataTable'
import { HeaderTable } from '@/components/molecules/HeaderTable/HeaderTable'
import { ActionsBody } from '@/components/molecules/ActionsBody/ActionsBody'
import { StatusColumn } from '@/components/molecules/StatusColumn/StatusColumn'
import { useRootContext } from '@/Provider/RootProvider'
import { usePostDataRefresh } from '@/customHooks/useGeneral'
import { changeStatusService, DeleteRow } from '@/services/general'

export default function DocumentsTypes () {
  const methods = useForm()
  const router = useRouter()
  const [search, setSearch] = useState('')
  const [refresh, setRefresh] = useState(false)

  const { selectCompany } = useRootContext()
  const { data, loading, setData } = usePostDataRefresh('ocr/configurations/catalogs/document-types/data-table', selectCompany, refresh)

  const onSubmit = () => { }

  const statusBodyTemplate = (rowData) => {
    return <StatusColumn status={rowData.status} />
  }

  const handleActive = (rowData) => {
    changeStatusService(`ocr/configurations/catalogs/document-types/${rowData.id}/change-status`, setRefresh, rowData.status)
  }

  const OnDelete = (rowData, setData) => {
    DeleteRow(rowData.id, `ocr/configurations/catalogs/document-types/${rowData.id}`, rowData.name, setData)
  }

  const actionsBodyTemplate = (rowData) => {
    return (
      <ActionsBody
        actionShow={rowData.actions.show}
        actionEdit={rowData.actions.edit}
        actionActBtn
        actionDelete={rowData.actions.delete}
        rowDataActive={rowData.status}
        urlShow={`/system/ocr/settings/catalogs/documents-types/${rowData.id}`}
        urlEdit={`/system/ocr/settings/catalogs/documents-types/${rowData.id}/edit`}
        onDelete={() => OnDelete(rowData, setData)}
        handleActive={() => handleActive(rowData)}
      />
    )
  }

  const dataTableColumns = [
    { id: 1, field: 'name', header: 'Nombre', sortable: true, w: '970px', h: '50px' },
    { id: 2, field: 'status', header: 'Estatus', body: statusBodyTemplate, sortable: true, w: '180px', h: '51px' },
    { id: 3, field: 'actions', header: 'Acciones', body: actionsBodyTemplate, sortable: true, w: '201px', h: '51px' }
  ]

  return (
    <FormHookProvider methods={methods} method='POST' onSubmit={onSubmit}>
      <div className={styles.Templates}>
        <HeaderTable
          title='Tipos documentos'
          setSearch={setSearch}
          dropCompanies={false}
          handleNew={() => router.push('/system/ocr/settings/catalogs/documents-types/create')}
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
