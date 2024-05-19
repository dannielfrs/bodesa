import { useState } from 'react'
import Image from 'next/image'
import styles from './Establishments.module.scss'
import { FormHookProvider } from '@/components/layouts/Form/FormHookProvider'
import { HeaderTable } from '@/components/molecules/HeaderTable/HeaderTable'
import { DataTable } from '@/components/molecules/DataTable/DataTable'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { StatusColumn } from '@/components/molecules/StatusColumn/StatusColumn'
import { ActionsBody } from '@/components/molecules/ActionsBody/ActionsBody'
import { changeStatusService, DeleteRow } from '@/services/general'
import { useRootContext } from '@/Provider/RootProvider'
import { usePostDataRefresh } from '@/customHooks/useGeneral'

export default function Establishments () {
  const methods = useForm()
  const router = useRouter()
  const [search, setSearch] = useState('')
  const [refresh, setRefresh] = useState(false)

  const { selectCompany } = useRootContext()
  const { data, loading, setData } = usePostDataRefresh('ocr/establishments/data-table', selectCompany, refresh)

  const onSubmit = () => { }

  const statusColumnTemplate = (rowData) => {
    return <StatusColumn status={rowData.status} />
  }

  const handleActive = (rowData) => {
    changeStatusService(`ocr/establishments/${rowData.id}/change-status`, setRefresh, rowData.status)
  }

  const OnDelete = (rowData, setData) => {
    DeleteRow(rowData.id, `ocr/establishments/${rowData.id}`, rowData.name, setData)
  }

  const actionsBodyTemplate = (rowData) => {
    return (
      <ActionsBody
        actionShow={rowData.actions.show}
        actionEdit={rowData.actions.edit}
        actionActBtn
        actionDelete={rowData.actions.delete}
        rowDataActive={rowData.status}
        urlShow={`/system/ocr/establishments/${rowData.id}`}
        urlEdit={`/system/ocr/establishments/${rowData.id}/edit`}
        onDelete={() => OnDelete(rowData, setData)}
        handleActive={() => handleActive(rowData)}
      />
    )
  }

  const externaImageLoader = ({ src }) => src

  const ImageBodyTemplate = (rowData) => {
    return (
      <div className={styles.table_avatar}>
        <Image
          loader={externaImageLoader}
          src={rowData.logo?.url}
          alt='logo'
          width={35}
          height={35}
        />
        <p>{rowData.name}</p>
      </div>
    )
  }

  const datatableColumns = [
    { field: 'code', header: 'Código', sortable: true, w: '100px', h: '50px' },
    { field: 'name', header: 'Nombre', sortable: true, body: ImageBodyTemplate, w: '610px', h: '50px' },
    { field: 'establishment_type', header: 'Tipo', sortable: true, w: '300px', h: '50px' },
    { field: 'documents', header: 'Documentos', sortable: true, w: '160px', h: '50px' },
    { field: 'status', header: 'Estatus', body: statusColumnTemplate, sortable: true, w: '180px', h: '51px' },
    { field: 'actions', header: 'Acciones', body: actionsBodyTemplate, sortable: true, w: '201px', h: '51px' }
  ]

  return (
    <FormHookProvider methods={methods} method='POST' onSubmit={onSubmit}>
      <div className={styles.Establishments}>
        <HeaderTable
          title='Establecimientos'
          setSearch={setSearch}
          handleNew={() => router.push('/system/ocr/establishments/create')}
          dropCompanies={false}
        />
        <div className='tableUser'>
          <DataTable
            data={data.data}
            columns={datatableColumns}
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
