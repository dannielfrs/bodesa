// 'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import styles from './NumberTypes.module.scss'
import { FormHookProvider } from '@/components/layouts/Form/FormHookProvider'
import { HeaderTable } from '@/components/molecules/HeaderTable/HeaderTable'
import DataTableNumberTypes from '@/components/organisms/Authenticated/HumanResources/Employees/Catalogs/NumberTypes/DataTableNumberTypes/DataTableNumberTypes'

export default function NumberTypes() {
  const methods = useForm()
  const router = useRouter()
  const [numberRows, setNumberRows] = useState()
  const [searchStatus, setSearchStatus] = useState()
  const [search, setSearch] = useState()

  const onSubmit = () => { }

  return (
    <FormHookProvider methods={methods} method='POST' onSubmit={onSubmit}>
      <div className={styles.section}>
        <HeaderTable
          title='Tipos de números'
          dropCompanies={false}
          search={search}
          setSearch={setSearch}
          handleNew={() => router.push('/system/human-resources/employees/catalogs/number-types/create')}
        />
        <div className={styles.section_body}>
          <DataTableNumberTypes
            numberRows={numberRows}
            searchStatus={searchStatus}
            search={search}
          />
        </div>
      </div>
    </FormHookProvider>
  )
}
