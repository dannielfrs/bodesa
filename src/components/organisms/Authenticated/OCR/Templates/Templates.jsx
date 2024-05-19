// 'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FormHookProvider } from '@/components/layouts/Form/FormHookProvider'
import { DataTable } from '@/components/molecules/DataTable/DataTable'
import styles from './Templates.module.scss'
import { HeaderTable } from '@/components/molecules/HeaderTable/HeaderTable'
import { StatusColumn } from '@/components/molecules/StatusColumn/StatusColumn'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useRootContext } from '@/Provider/RootProvider'
import { usePostDataRefresh } from '@/customHooks/useGeneral'
import { ChangeStatus, DeleteRow } from '@/services/general'
import { DataTableActions } from '@/components/molecules/DataTableActions/DataTableActions'

export default function Templates () {
  const methods = useForm()
  const router = useRouter()
  const [search, setSearch] = useState('')
  const [errorImg, setErrorImg] = useState(false)
  const { selectCompany } = useRootContext()
  const { data, loading, setData } = usePostDataRefresh('ocr/templates/data-table', selectCompany)

  const onSubmit = () => { }

  const handleActive = (rowData, setData) => {
    ChangeStatus(`ocr/templates/${rowData.id}/change-status`, rowData.id, setData, rowData.status)
  }

  const handleDelete = (rowData, setData) => {
    DeleteRow(rowData.id, `ocr/templates/${rowData.id}`, rowData.name, setData)
  }

  const imageBodyTemplate = (rowData) => {
    return (
      <div className={styles.table_avatar}>
        {rowData.establishment.logo && !errorImg &&
          <Image
            src={rowData.establishment.logo}
            loader={({ src }) => src}
            alt='logo'
            width={35}
            height={35}
            onError={() => setErrorImg(true)}
          />}
        <p>{rowData.establishment.name}</p>
      </div>
    )
  }

  const statusBodyTemplate = (rowData) => {
    return <StatusColumn status={rowData.status} />
  }

  const actionsBodyTemplate = (rowData) => {
    return (
      <DataTableActions
        showButton={rowData.actions?.show}
        editButton={rowData.actions?.edit}
        activateButton
        deleteButton={rowData.actions?.delete}
        onClickShow={() => router.push(`/system/ocr/templates/${rowData.id}`)}
        onClickEdit={() => router.push(`/system/ocr/templates/${rowData.id}/edit`)}
        onClickActivate={() => handleActive(rowData, setData)}
        onClickDelete={() => handleDelete(rowData, setData)}
        status={rowData.status}
      />
    )
  }

  const dataTableColumns = [
    { field: 'code', header: 'Código', sortable: true, w: '100px' },
    { field: 'establishment', header: 'Establecimiento', body: imageBodyTemplate, sortable: true, w: '350px' },
    { field: 'document_type.name', header: 'Tipo documento', sortable: true, w: '230px' },
    { field: 'name', header: 'Nombre', sortable: true, w: '380px' },
    { field: 'fields', header: 'Campos', sortable: true, w: '160px', t: 'right' },
    { field: 'status', header: 'Estatus', body: statusBodyTemplate, sortable: true, w: '180px' },
    { field: 'actions', header: 'Acciones', body: actionsBodyTemplate, sortable: true, w: '210px' }
  ]

  return (
    <FormHookProvider methods={methods} method='POST' onSubmit={onSubmit}>
      <div className={styles.Templates}>
        <HeaderTable
          title='Plantillas'
          handleNew={() => router.push('/system/ocr/templates/create')}
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
