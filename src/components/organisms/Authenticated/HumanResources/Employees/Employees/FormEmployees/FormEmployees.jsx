// 'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './FormEmployees.module.scss'
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/molecules/Button'
import { FormHookProvider } from '@/components/layouts/Form/FormHookProvider'
import { Alert, Loading, Success } from '@/utils/Loading'
import FormEmployeesGeneral from '@/components/organisms/Authenticated/HumanResources/Employees/Employees/FormEmployeesGeneral/FormEmployeesGeneral'
import DataTableJobPositions from '@/components/organisms/Authenticated/HumanResources/Employees/Employees/DataTableJobPositions/DataTableJobPositions'
import DataTableDocuments from '@/components/organisms/Authenticated/HumanResources/Employees/Employees/DataTableDocuments/DataTableDocuments'
import DataTableHistorical from '@/components/organisms/Authenticated/HumanResources/Employees/Employees/DataTableHistorical/DataTableHistorical'

export default function FormEmployees({ title, createMode, showMode, editMode }) {
  const router = useRouter()
  const methods = useForm()
  const [currentTab, setCurrentTab] = useState(1)
  const [showSidebar, setShowSidebar] = useState(false)

  const onSubmit = () => {
    if (currentTab === 1) {
      Loading('Guardando empleado')
      setTimeout(() => {
        Success('Empleado guardado')
      }, 2000)
      setTimeout(() => {
        Alert('Ocurrio un error')
      }, 3000)
      setTimeout(() => {
        Swal.close()
        router.push('/system/human-resources/employees/employees')
      }, 4000)
    }
  }

  return (
    <FormHookProvider onSubmit={onSubmit} method='POST' methods={methods}>
      <div className={styles.section}>
        <div className={styles.section_header}>
          <div className={styles.section_header_left}>
            <div>{title}</div>
            {!createMode &&
              <>
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
                    label='Puestos'
                    type='button'
                    onClick={() => setCurrentTab(2)}
                    variant='transparent-gray'
                    height='35px'
                    className={currentTab === 2 ? styles.button_active : ''}
                  />
                </div>
                <div className={styles.tab_button}>
                  <Button
                    label='Documentos'
                    type='button'
                    onClick={() => setCurrentTab(3)}
                    variant='transparent-gray'
                    height='35px'
                    className={currentTab === 3 ? styles.button_active : ''}
                  />
                </div>
                <div className={styles.tab_button}>
                  <Button
                    label='Historial'
                    type='button'
                    onClick={() => setCurrentTab(4)}
                    variant='transparent-gray'
                    height='35px'
                    className={currentTab === 4 ? styles.button_active : ''}
                  />
                </div>
              </>
            }
          </div>
          <div className={styles.section_header_right}>
            <div>
              <Button
                label='Regresar'
                type='button'
                onClick={() => router.push('/system/human-resources/employees/employees')}
                variant='secondary'
                height='45px'
              />
            </div>
            {!showMode &&
              <>
                {currentTab === 1 && (
                  <div>
                    <Button
                      label='Guardar'
                      variant='primary'
                      height='45px'
                    />
                  </div>
                )}
                {(currentTab === 2 || currentTab === 3) && (
                  <div>
                    <Button
                      label='Nuevo'
                      type='button'
                      onClick={() => setShowSidebar(true)}
                      variant='primary'
                      height='45px'
                    />
                  </div>
                )}
              </>
            }
          </div>
        </div>
        <div className={styles.section_form}>
          {currentTab === 1 && <FormEmployeesGeneral createMode={createMode} showMode={showMode} editMode={editMode} />}
          {currentTab === 2 && <DataTableJobPositions createMode={createMode} showMode={showMode} editMode={editMode} showModal={showSidebar} onHide={() => setShowSidebar(false)} methods={methods} />}
          {currentTab === 3 && <DataTableDocuments createMode={createMode} showMode={showMode} editMode={editMode} showModal={showSidebar} onHide={() => setShowSidebar(false)} />}
          {currentTab === 4 && <DataTableHistorical />}
        </div>
      </div>
    </FormHookProvider>
  )
}
