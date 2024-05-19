// 'use client'

import React, { useEffect, useState } from 'react'
import { TabView, TabPanel } from 'primereact/tabview'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'
import styles from './EditInternalUsers.module.scss'
import { FormHookProvider } from '@/components/layouts/Form/FormHookProvider'
import { Alert, Loading, Success } from '@/utils/Loading'
import { Card } from '@/components/molecules/Card/Card'
import { Button } from '@/components/molecules/Button'
import Permissions from '../../UserProfiles/CreateProfile/Forms/Permissions/Permissions'
import Generals from './Forms/Generals/Generals'
import Documents from './Forms/Documents/Documents'
import Record from './Forms/Record/Record'
import CreateDocuments from './Forms/Documents/CreateDocuments/CreateDocuments'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'

export default function EditInternalUsers ({ disabled, title }) {
  const methods = useForm()
  const router = useRouter()
  const handleSubmit2 = () => {
    setOpenModal2Title('Nuevo documento')
    setOpenModal2(true)
  }
  const [OpenModal2Title, setOpenModal2Title] = useState('Nuevo documento')
  const [OpenModal2, setOpenModal2] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const companyOptions = [
    { name: 'La Marina Madero - Gerente de tienda', value: 'La Marina Madero - Gerente de tienda' },
    { name: 'La Marina Guanajuato - Gerente de tienda', value: 'La Marina Guanajuato - Gerente de tienda' }
  ]
  const dropdownCompany = {
    name: 'company',
    options: companyOptions,
    panelClassName: styles.panelCompany,
    optionLabel: 'name',
    filter: true
  }

  const onSubmit = () => {
    Loading('Guardando usuario')
    setTimeout(() => {
      Success('Usuario guardado', 'El usuario se guardó de forma correcta')
    }, 2000)
    setTimeout(() => {
      Alert('Ocurrio un error', 'El usuario no se guardo')
    }, 3000)
    setTimeout(() => {
      Swal.close()
      router.push('/system/configuration-and-management/settings/internal-users')
    }, 4000)
  }

  const tabs = [
    {
      id: 0,
      label: 'Generales'
    },
    {
      id: 1,
      label: 'Perfil'
    },
    {
      id: 2,
      label: 'Documentos'
    },
    {
      id: 3,
      label: 'Historial'
    }
  ]

  useEffect(() => {
    methods.setValue('code', 'U2')
    methods.setValue('name', 'Sofia')
    methods.setValue('lastname', 'Rodríguez')
    methods.setValue('lastname2', 'Pérez')
    methods.setValue('rfc', 'ROPS800905A21')
    methods.setValue('number', '3325151820')
    methods.setValue('email', 'sofia.rodriguez@bodesa.com')
  }, [])

  return (
    <FormHookProvider methods={methods} method='POST' onSubmit={onSubmit}>
      <div className={styles.EditClient}>
        <Card>
          <div className={styles.header}>
            <div className={styles.left}>
              <p className={styles.title}>{title}</p>
              <div className={styles.tabsBtns}>
                {tabs.map((e) => {
                  return (
                    <div key={e.id} className={styles.cont_tabs}>
                      <Button type='button' onClick={() => setActiveIndex(e.id)} className={`${activeIndex === e.id && styles.active}`} label={e.label} variant={activeIndex === e.id ? 'primary' : 'tabBtn'} height='35px' />
                    </div>
                  )
                })}
              </div>
            </div>
            <div className={styles.Buttons}>
              {activeIndex === 0 &&
                <>
                  <div style={{ width: '100px' }}>
                    <Button
                      variant='secondary'
                      type='button'
                      label='Regresar'
                      onClick={() => router.push('/system/configuration-and-management/settings/internal-users')}
                    />
                  </div>
                </>}
              {activeIndex === 2 && !disabled &&
                <>
                  <div style={{ width: '100px' }}>
                    <Button
                      variant='primary'
                      type='button'
                      label='Nuevo'
                      onClick={() => handleSubmit2()}
                    />
                  </div>
                </>}
              {activeIndex === 0 && !disabled &&
                <div style={{ width: '100px' }}>
                  <Button variant='primary' label='Guardar' />
                </div>}
              {activeIndex === 1 &&
                <div style={{ width: '380px' }}>
                  <Dropdown {...dropdownCompany} />
                </div>}
            </div>
          </div>
        </Card>
        <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
          <TabPanel header='' className={styles.tabPanel}>
            <div className='m-0'>
              <Generals methods={methods} disabled={disabled} password />
            </div>
          </TabPanel>
          <TabPanel header='' className={styles.tabPanel}>
            <div className='m-0'>
              <Permissions methods={methods} disabled={disabled} />
            </div>
          </TabPanel>
          <TabPanel header='' className={styles.tabPanel}>
            <div className='m-0'>
              <Documents methods={methods} disabled={disabled} setOpenModal2={setOpenModal2} setOpenModal2Title={setOpenModal2Title} />
            </div>
          </TabPanel>
          <TabPanel header='' className={styles.tabPanel}>
            <div className='m-0'>
              <Record methods={methods} disabled={disabled} />
            </div>
          </TabPanel>
        </TabView>
        {OpenModal2 &&
          <CreateDocuments setOpenModal2={setOpenModal2} title={OpenModal2Title} methods={methods} disabled={OpenModal2Title.includes('Ver')} />}
      </div>
    </FormHookProvider>
  )
}
