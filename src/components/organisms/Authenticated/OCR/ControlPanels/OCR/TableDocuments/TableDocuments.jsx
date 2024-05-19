// 'use client'

import Image from 'next/image'
import { DataTable } from '@/components/molecules/DataTable/DataTable'
import styles from './TableDocuments.module.scss'
import { useRootContext } from '@/Provider/RootProvider'
import { usePostDataRefresh } from '@/customHooks/useGeneral'

export default function TableDocuments () {
  const { selectCompany } = useRootContext()
  const { data, loading } = usePostDataRefresh('ocr/configurations/catalogs/dashboard', selectCompany)

  const externaImageLoader = ({ src }) => src

  const imageBodyTemplate = (rowData) => {
    return (
      <div className={styles.table_avatar}>
        <Image
          loader={externaImageLoader}
          src={rowData.establishment.logo}
          alt=''
          width={35}
          height={35}
        />
        <p>{rowData.establishment.name}</p>
      </div>
    )
  }

  const dataTableColumns = [
    { field: 'documents', header: 'Documentos', sortable: true, w: '100px', h: '50px' },
    { field: 'establishment', header: 'Establecimiento', sortable: true, body: imageBodyTemplate, w: '260px', h: '50px' },
    { field: 'scans', header: 'Escaneos', sortable: true, w: '100px', h: '50px' }
  ]

  return (
    <div>
      <DataTable
        data={data.data?.list?.documents}
        columns={dataTableColumns}
        loading={loading}
        selectionMode='single'
        variant='secondary'
        paginatorNone
      />
    </div>
  )
}
