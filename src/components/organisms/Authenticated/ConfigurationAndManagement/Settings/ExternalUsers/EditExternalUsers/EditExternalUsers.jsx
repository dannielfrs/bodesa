// 'use client'

import { useState } from 'react'
import styles from './EditExternalUsers.module.scss'
import { HeaderViews } from '@/components/molecules/HeaderViews/HeaderViews'
import { useRouter } from 'next/navigation'
import { TabPanel, TabView } from 'primereact/tabview'
import { useForm } from 'react-hook-form'
import Permissions from '../../UserProfiles/CreateProfile/Forms/Permissions/Permissions'
import Documents from '../../InternalUsers/EditInternalUsers/Forms/Documents/Documents'
import Record from '../../InternalUsers/EditInternalUsers/Forms/Record/Record'
import { FormHookProvider } from '@/components/layouts/Form/FormHookProvider'
import { Alert, Loading, Success } from '@/utils/Loading'
import Swal from 'sweetalert2'
import CreateExternalUsers from '../CreateExternalUsers/CreateExternalUsers'
import CreateDocuments from '../../InternalUsers/EditInternalUsers/Forms/Documents/CreateDocuments/CreateDocuments'

export default function EditExternalUsers ({ disabled, disabledBack, urlCreate, title }) {
  const router = useRouter()
  const methods = useForm()
  const handleSubmit2 = () => {
    setOpenModal2Title('Nuevo documento')
    setOpenModal2(true)
  }
  const [OpenModal2Title, setOpenModal2Title] = useState('Nuevo documento')
  const [OpenModal2, setOpenModal2] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
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
  const onSubmit = () => {
    Loading('Guardando usuario externo')
    setTimeout(() => {
      Success('Usuario externo guardado', 'El usuario externo se guardó de forma correcta')
    }, 2000)
    setTimeout(() => {
      Alert('Ocurrio un error', 'El usuario externo no se guardó')
    }, 3000)
    setTimeout(() => {
      Swal.close()
      router.push('/system/configuration-and-management/settings/external-users')
    }, 4000)
  }

  return (
    <>
      <FormHookProvider methods={methods} method='POST' onSubmit={onSubmit}>
        <div className={styles.EditExternalUsers}>
          <HeaderViews
            title={title}
            onClick={() => router.push('/system/configuration-and-management/settings/external-users')}
            tabs={tabs}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            disabled={disabled || activeIndex === 2 || activeIndex === 3 || activeIndex === 1}
            disabledCreate={disabled}
            disabledBack={disabledBack || activeIndex === 2 || activeIndex === 3 || activeIndex === 1}
            urlCreate={urlCreate || activeIndex === 2}
            handleNew={() => handleSubmit2()}
          />
          <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
            <TabPanel header='' className={styles.tabPanel}>
              <div className='m-0'>
                <CreateExternalUsers methods={methods} disabled={disabled} selectedProfile />
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
    </>
  )
}
