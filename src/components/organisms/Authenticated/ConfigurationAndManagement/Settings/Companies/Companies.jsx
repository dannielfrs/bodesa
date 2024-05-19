// 'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './Companies.module.scss'
import { Button } from '@/components/molecules/Button'
import { useForm } from 'react-hook-form'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'
import { FormHookProvider } from '@/components/layouts/Form/FormHookProvider'
import { InputText } from '@/components/molecules/InputText/InputText/InputText'
import DataTableCompanies from '@/components/organisms/Authenticated/ConfigurationAndManagement/Settings/Companies/DataTableCompanies/DataTableCompanies'

export default function Companies () {
  const router = useRouter()
  const methods = useForm()
  const [numberRows, setNumberRows] = useState(10)
  const [status, setStatus] = useState('')
  const [search, setSearch] = useState('')

  const onSubmit = () => { }

  const rowsPerPage = [
    { label: '10 / Página', value: 10 },
    { label: '20 / Página', value: 20 },
    { label: '50 / Página', value: 50 },
    { label: '100 / Página', value: 100 }
  ]

  const statusOptions = [
    { label: 'Todos', value: '' },
    { label: 'Activos', value: 'active' },
    { label: 'Inactivos', value: 'inactive' }
  ]

  return (
    <FormHookProvider onSubmit={onSubmit} method='POST' methods={methods}>
      <div className={styles.section}>
        <div className={styles.section_header}>
          <div>Empresas</div>
          <div className={styles.section_header_group}>
            <div>
              <Button
                icon='i-excel'
                type='button'
                onClick={() => { }}
                tooltip='Descargar excel'
                tooltipOptions={{ position: 'top', className: 'tooltip_green' }}
                variant='transparent-static'
                height='28px'
              />
            </div>
            <div>
              <Dropdown
                name='rows_per_page'
                defaultValue={numberRows}
                onChange={(e) => setNumberRows(e.value)}
                options={rowsPerPage}
                optionLabel='label'
                placeholder='- Selecciona una opción -'
                variant='primary'
                height='45px'
              />
            </div>
            <div>
              <Dropdown
                name='status'
                onChange={(e) => setStatus(e.value)}
                options={statusOptions}
                optionLabel='label'
                placeholder='Estatus'
                filter
                variant='primary'
                height='45px'
              />
            </div>
            <div>
              <InputText
                name='search'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Buscar'
                icon='i-search'
                variant='primary'
                height='45px'
              />
            </div>
            <div>
              <Button
                label='Nuevo'
                type='button'
                onClick={() => router.push('/system/configuration-and-management/settings/companies/create')}
                variant='primary'
                height='45px'
              />
            </div>
          </div>
        </div>
        <div className={styles.section_table}>
          <DataTableCompanies numberRows={numberRows} search={search} searchStatus={status} />
        </div>
      </div>
    </FormHookProvider>
  )
}
