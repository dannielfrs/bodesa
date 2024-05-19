// 'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './CompaniesEdit.module.scss'
import Swal from 'sweetalert2'
import { Button } from '@/components/molecules/Button'
import { useForm } from 'react-hook-form'
import { FormHookProvider } from '@/components/layouts/Form/FormHookProvider'
import { Alert, Loading, Success } from '@/utils/Loading'
import FormGeneral from '@/components/organisms/Authenticated/ConfigurationAndManagement/Settings/Companies/FormGeneral/FormGeneral'
import DataTableDocuments from '@/components/organisms/Authenticated/ConfigurationAndManagement/Settings/Companies/DataTableDocuments/DataTableDocuments'
import DataTableHistorical from '@/components/organisms/Authenticated/ConfigurationAndManagement/Settings/Companies/DataTableHistorical/DataTableHistorical'

export default function CompaniesEdit () {
  const router = useRouter()
  const methods = useForm()
  const [currentTab, setCurrentTab] = useState(1)
  const [showSidebar, setShowSidebar] = useState(false)

  const onSubmit = () => {
    if (currentTab === 1) {
      Loading('Guardando datos generales')
      setTimeout(() => {
        Success('Datos generales registrados')
      }, 2000)
      setTimeout(() => {
        Alert('Ocurrio un error')
      }, 3000)
      setTimeout(() => {
        Swal.close()
        router.push('/system/configuration-and-management/settings/companies')
      }, 4000)
    }
  }

  const onClickCreate = () => {
    setShowSidebar(true)
  }

  return (
    <FormHookProvider onSubmit={onSubmit} method='POST' methods={methods}>
      <div className={styles.section}>
        <div className={styles.section_header}>
          <div className={styles.section_header_buttons}>
            <div>Editar empresa</div>
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
            {currentTab === 1 && (
              <div>
                <Button
                  label='Guardar'
                  variant='primary'
                  height='45px'
                />
              </div>
            )}
            {currentTab === 2 && (
              <div>
                <Button
                  label='Nuevo'
                  type='button'
                  onClick={onClickCreate}
                  variant='primary'
                  height='45px'
                />
              </div>
            )}
          </div>
        </div>
        <div className={styles.section_form}>
          {currentTab === 1 && <FormGeneral editMode />}
          {currentTab === 2 && <DataTableDocuments editMode showModal={showSidebar} onHide={() => setShowSidebar(false)} />}
          {currentTab === 3 && <DataTableHistorical />}
        </div>
      </div>
    </FormHookProvider>
  )
}
