// 'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from './Employees.module.scss'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'
import { FormHookProvider } from '@/components/layouts/Form/FormHookProvider'
import { Button } from '@/components/molecules/Button'
import { CardUsersInline } from '@/components/molecules/Cards/CardUsersInline/CardUsersInline'
import { CardEmployee } from '@/components/molecules/Cards/CardEmployee/CardEmployee'
import { LinkEmployee } from '@/components/molecules/Cards/LinkEmployee/LinkEmployee'

export default function Employees() {
  const methods = useForm()
  const [users, setUsers] = useState()

  const onSubmit = () => { }

  const employeesOptions = [
    { label: 'Todos', value: 0 },
    { label: 'Tiendas', value: 1 },
    { label: 'Ubicaciones operativas', value: 2 }
  ]

  const departments = [
    { department: 'Atención al cliente', location: 'La Marina Madero', url: '#' },
    { department: 'Soporte técnico', location: 'La Marina Guanajuato', url: '#' },
    { department: 'Mercadotecnia', location: 'La Marina Zapotlán', url: '#' },
    { department: 'Crédito y cobranza', location: 'La Marina La Piedad', url: '#' },
  ]

  const jobPositions = [
    { jobPosition: 'Cajero', location: 'La Marina Madero', url: '#' },
    { jobPosition: 'Analista de crédito', location: 'La Marina La Piedad', url: '#' },
    { jobPosition: 'Auxiliar contable', location: 'La Marina Guanajuato', url: '#' },
    { jobPosition: 'Auxiliar de cobranza', location: 'La Marina Madero', url: '#' },
  ]

  const gender = [
    { gender: 'Hombre', employees: 1564, percentage: 55, url: '#' },
    { gender: 'Mujer', employees: 1272, percentage: 44, url: '#' },
    { gender: 'Otro', employees: 9, percentage: 1, url: '#' },
  ]

  const employees = [
    { avatar: '/images/avatar/avatar2.png', name: 'Andrés Arteaga López', jobPosition: 'Gerente General', date: '18 sep 2023', location: 'La Marina Madero' },
    { avatar: '/images/avatar/avatar3.png', name: 'Luisa Pérez Gómez', jobPosition: 'Vendedora de piso', date: '12 sep 2023', location: 'La Marina Zapotlán' },
    { avatar: '/images/avatar/avatar4.png', name: 'Hilda Loera Miranda', jobPosition: 'Contadora', date: '10 sep 2023', location: '  La Marina Guanajuato' },
    { avatar: '/images/avatar/avatar5.png', name: 'Joel Huerta Juárez', jobPosition: 'Analista de crédito', date: '09 sep 2023', location: 'La Marina La Piedad' },
    { avatar: '/images/avatar/avatar6.png', name: 'Cecilia Romero González', jobPosition: 'Cajera', date: '03 sep 2023', location: 'La Marina Madero' }
  ]

  return (
    <FormHookProvider methods={methods} method='POST' onSubmit={onSubmit}>
      <div className={styles.section}>
        <div className={styles.section_header}>
          <div>Empleados</div>
          <div>
            <Dropdown
              name='employees'
              defaultValue={0}
              onChange={(e) => setUsers(e.value)}
              options={employeesOptions}
              optionLabel='label'
              placeholder='- Selecciona una opción -'
              filter
              variant='primary'
              height='45px'
            />
          </div>
        </div>
        <div className={styles.section_body}>
          <div className={styles.section_aside}>
            <CardUsersInline
              value={2845}
              title='Empleados activos'
              icon='i-users-green'
              color='#d5f0e0'
              borderColor='#419663'
            />
            <CardUsersInline
              value={135}
              title='Empleados inactivos'
              icon='i-users-red'
              color='#ffe0e0'
              borderColor='#ff4d4d'
            />
            <CardUsersInline
              value={85}
              title='Departamentos'
              icon='i-departments'
              color='#edf0fd'
              borderColor='#374eb3'
            />
            <CardUsersInline
              value={120}
              title='Puestos'
              icon='i-doc'
              color='#d6f0f0'
              borderColor='#278787'
            />
          </div>
          <div className={styles.section_content}>
            <div className={styles.section_row}>
              <div className={styles.section_column}>
                <div className={styles.card}>
                  <div className={styles.card_header}>
                    <div>Departamentos</div>
                    <div>
                      <Button
                        label='Ver más'
                        type='button'
                        onClick={() => { }}
                        variant='secondary'
                        height='25px'
                        className={styles.button}
                      />
                    </div>
                  </div>
                  <div className={styles.card_body}>
                    {departments.map(item => (
                      <LinkEmployee
                        key={item}
                        href={item.url}
                        title={item.department}
                        content={item.location}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.section_column}>
                <div className={styles.card}>
                  <div className={styles.card_header}>
                    <div>Puestos</div>
                    <div>
                      <Button
                        label='Ver más'
                        type='button'
                        onClick={() => { }}
                        variant='secondary'
                        height='25px'
                        className={styles.button}
                      />
                    </div>
                  </div>
                  <div className={styles.card_body}>
                    {jobPositions.map(item => (
                      <LinkEmployee
                        key={item}
                        href={item.url}
                        title={item.jobPosition}
                        content={item.location}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.section_column}>
                <div className={styles.card}>
                  <div className={styles.card_header}>
                    <div>Personal por género</div>
                    <div>
                    </div>
                  </div>
                  <div className={styles.card_body}>
                    {gender.map(item => (
                      <LinkEmployee
                        key={item}
                        href={item.url}
                        title={item.gender}
                        employees={item.employees}
                        percentage={item.percentage}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.section_row}>
              <div className={styles.card}>
                <div className={styles.card_header}>
                  <div>Empleados</div>
                  <div>
                    <Button
                      label='Ver más'
                      type='button'
                      onClick={() => { }}
                      variant='secondary'
                      height='25px'
                      className={styles.button}
                    />
                  </div>
                </div>
                <div className={styles.card_body}>
                  <div className={styles.card_row}>
                    {employees.map(item => (
                      <div key={item} style={{ width: '20%' }}>
                        <CardEmployee
                          avatar={item.avatar}
                          name={item.name}
                          jobPosition={item.jobPosition}
                          date={item.date}
                          location={item.location}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormHookProvider>
  )
}
