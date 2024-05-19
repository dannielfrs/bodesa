// 'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import styles from './Genders.module.scss'
import { FormHookProvider } from '@/components/layouts/Form/FormHookProvider'
import { HeaderTable } from '@/components/molecules/HeaderTable/HeaderTable'
import DataTableGenders from '@/components/organisms/Authenticated/HumanResources/Employees/Catalogs/Genders/DataTableGenders/DataTableGenders'

export default function Genders() {
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
          title='Géneros'
          dropCompanies={false}
          search={search}
          setSearch={setSearch}
          handleNew={() => router.push('/system/human-resources/employees/catalogs/genders/create')}
        />
        <div className={styles.section_body}>
          <DataTableGenders
            numberRows={numberRows}
            searchStatus={searchStatus}
            search={search}
          />
        </div>
      </div>
    </FormHookProvider>
  )
}
