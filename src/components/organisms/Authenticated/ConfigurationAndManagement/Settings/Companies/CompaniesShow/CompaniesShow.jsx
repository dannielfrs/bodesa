// 'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './CompaniesShow.module.scss'
import { Button } from '@/components/molecules/Button'
import { useForm } from 'react-hook-form'
import { FormHookProvider } from '@/components/layouts/Form/FormHookProvider'
import FormGeneral from '@/components/organisms/Authenticated/ConfigurationAndManagement/Settings/Companies/FormGeneral/FormGeneral'
import DataTableDocuments from '@/components/organisms/Authenticated/ConfigurationAndManagement/Settings/Companies/DataTableDocuments/DataTableDocuments'
import DataTableHistorical from '@/components/organisms/Authenticated/ConfigurationAndManagement/Settings/Companies/DataTableHistorical/DataTableHistorical'

export default function CompaniesShow () {
  const router = useRouter()
  const methods = useForm()
  const [currentTab, setCurrentTab] = useState(1)

  const onSubmit = () => { }

  return (
    <FormHookProvider onSubmit={onSubmit} method='POST' methods={methods}>
      <div className={styles.section}>
        <div className={styles.section_header}>
          <div className={styles.section_header_buttons}>
            <div>Ver empresa</div>
            <div className={styles.tab_button}>
              <Button
                label='Generales'
                type='button'
                onClick={() => setCurrentTab(1)}
                variant='transparent-gray'
                height='35px'
                className={currentTab === 1 ? styles.button_active : ''}
              />
            </div>
            <div className={styles.tab_button}>
              <Button
                label='Documentos'
                type='button'
                onClick={() => setCurrentTab(2)}
                variant='transparent-gray'
                height='35px'
                className={currentTab === 2 ? styles.button_active : ''}
              />
            </div>
            <div className={styles.tab_button}>
              <Button
                label='Historial'
                type='button'
                onClick={() => setCurrentTab(3)}
                variant='transparent-gray'
                height='35px'
                className={currentTab === 3 ? styles.button_active : ''}
              />
            </div>
          </div>
          <div className={styles.section_header_group}>
            <div>
              <Button
                label='Regresar'
                type='button'
                onClick={() => router.push('/system/configuration-and-management/settings/companies')}
                variant='secondary'
                height='45px'
              />
            </div>
          </div>
        </div>
        <div className={styles.section_form}>
          {currentTab === 1 && <FormGeneral showMode />}
          {currentTab === 2 && <DataTableDocuments showMode />}
          {currentTab === 3 && <DataTableHistorical />}
        </div>
      </div>
    </FormHookProvider>
  )
}
