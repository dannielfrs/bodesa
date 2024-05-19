// 'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from './Users.module.scss'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'
import { FormHookProvider } from '@/components/layouts/Form/FormHookProvider'
import { CardUsers } from '@/components/molecules/Cards/CardUsers/CardUsers'
import { ChartBar } from '@/components/molecules/ChartBar/ChartBar'
import DataTableUsers from './DataTableUsers/DataTableUsers'
import { ChartUsersOnline } from '@/components/molecules/ChartUsersOnline/ChartUsersOnline'

export default function Users() {
  const methods = useForm()
  const [users, setUsers] = useState()

  const onSubmit = () => { }

  const userOptions = [
    { label: 'Todas', value: 0 },
    { label: 'La marina', value: 1 },
    { label: 'El bodegón', value: 2 }
  ]

  return (
    <FormHookProvider methods={methods} method='POST' onSubmit={onSubmit}>
      <div className={styles.section}>
        <div className={styles.section_header}>
          <div>Usuarios del sistema</div>
          <div>
            <Dropdown
              name='users'
              defaultValue={0}
              onChange={(e) => setUsers(e.value)}
              options={userOptions}
              optionLabel='label'
              placeholder='- Selecciona una opción -'
              variant='primary'
              height='45px'
            />
          </div>
        </div>
        <div className={styles.section_row}>
          <div className={styles.section_column}>
            <CardUsers
              value={137}
              title='Perfiles de usuarios'
              icon='i-profiles-blue'
              color='#edf0fd'
              borderColor='#374eb3'
            />
          </div>
          <div className={styles.section_column}>
            <CardUsers
              value={3580}
              title='Usuarios'
              icon='i-users-greendark'
              color='#d6f0f0'
              borderColor='#278787'
            />
          </div>
          <div className={styles.section_column}>
            <CardUsers
              value={3170}
              title='Usuarios activos'
              icon='i-users-green'
              color='#d5f0e0'
              borderColor='#419663'
            />
          </div>
          <div className={styles.section_column}>
            <CardUsers
              value={410}
              title='Usuarios inactivos'
              icon='i-users-red'
              color='#ffe0e0'
              borderColor='#ff4d4d'
            />
          </div>
          <div className={styles.section_column}>
            <CardUsers
              value={15}
              title='Módulos'
              icon='i-modules-green'
              color='#c5ebeb'
              borderColor='#3d7d7d'
            />
          </div>
        </div>
        <div className={styles.section_row}>
          <div className={styles.section_column_3}>
            <div className={styles.card}>
              <div className={styles.card_header}>
                Usuarios conectados
              </div>
              <div className={styles.card_body}>
                <div>
                  <ChartUsersOnline />
                </div>
                <div>
                  <DataTableUsers />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section_column_2}>
            <div className={styles.card}>
              <ChartBar methods={methods} />
            </div>
          </div>
        </div>
      </div>
    </FormHookProvider>
  )
}
