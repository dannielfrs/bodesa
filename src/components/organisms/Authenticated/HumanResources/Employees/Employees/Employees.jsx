// 'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import styles from './Employees.module.scss'
import { FormHookProvider } from '@/components/layouts/Form/FormHookProvider'
import { HeaderTable } from '@/components/molecules/HeaderTable/HeaderTable'
import DataTableEmployees from '@/components/organisms/Authenticated/HumanResources/Employees/Employees/DataTableEmployees/DataTableEmployees'

export default function Employees() {
  const methods = useForm()
  const router = useRouter()
  const [numberRows, setNumberRows] = useState(10)
  const [searchCompany, setSearchCompany] = useState()
  const [searchStatus, setSearchStatus] = useState()
  const [search, setSearch] = useState()

  const onSubmit = () => { }

  const handleStatus = (value) => {
    switch (value) {
      case 'Todos':
        setSearchStatus(null)
        break;
      case 'Activos':
        setSearchStatus(true)
        break;
      case 'Inactivos':
        setSearchStatus(false)
        break;
      default:
        break;
    }
  }

  return (
    <FormHookProvider methods={methods} method='POST' onSubmit={onSubmit}>
      <div className={styles.section}>
        <HeaderTable
          title='Empleados'
          onChangeRowsPerPage={(e) => setNumberRows(e.value)}
          onChangeCompany={(e) => setSearchCompany(e.value)}
          onChangeStatus={(e) => handleStatus(e.value)}
          search={search}
          setSearch={setSearch}
          handleNew={() => router.push('/system/human-resources/employees/employees/create')}
        />
        <div className={styles.section_body}>
          <DataTableEmployees
            numberRows={numberRows}
            searchCompany={searchCompany}
            searchStatus={searchStatus}
            search={search}
          />
        </div>
      </div>
    </FormHookProvider>
  )
}
