// 'use client'

import React, { useState } from 'react'
import { TabView, TabPanel } from 'primereact/tabview'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'
import styles from './CreateProfile.module.scss'
import { FormHookProvider } from '@/components/layouts/Form/FormHookProvider'
import { Alert, Loading, Success } from '@/utils/Loading'
import { Card } from '@/components/molecules/Card/Card'
import { Button } from '@/components/molecules/Button'
import General from './Forms/General/General'
import Permissions from './Forms/Permissions/Permissions'

export default function CreateProfile ({ disabled, title }) {
  const methods = useForm()
  const router = useRouter()

  const [activeIndex, setActiveIndex] = useState(0)

  const onSubmit = () => {
    Loading('Guardando perfil')
    setTimeout(() => {
      Success('Perfil guardado', 'El perfil se guardo de forma correcta')
    }, 2000)
    setTimeout(() => {
      Alert('Ocurrio un error', 'El perfil no se guardo')
    }, 3000)
    setTimeout(() => {
      Swal.close()
      router.push('/system/configuration-and-management/settings/user-profiles')
    }, 4000)
  }

  const tabs = [
    {
      id: 0,
      label: 'Generales'
    },
    {
      id: 1,
      label: 'Permisos'
    }
  ]

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
              <div style={{ width: '100px' }}>
                <Button
                  variant='secondary'
                  type='button'
                  label='Regresar'
                  onClick={() => router.push('/system/configuration-and-management/settings/user-profiles')}
                />
              </div>
              {!disabled &&
                <div style={{ width: '100px' }}>
                  <Button variant='primary' label='Guardar' />
                </div>}
            </div>
          </div>
        </Card>
        <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
          <TabPanel header='' className={styles.tabPanel}>
            <div className='m-0'>
              <General methods={methods} disabled={disabled} />
            </div>
          </TabPanel>
          <TabPanel header='' className={styles.tabPanel}>
            <div className='m-0'>
              <Permissions methods={methods} disabled={disabled} />
            </div>
          </TabPanel>
        </TabView>
      </div>
    </FormHookProvider>
  )
}
