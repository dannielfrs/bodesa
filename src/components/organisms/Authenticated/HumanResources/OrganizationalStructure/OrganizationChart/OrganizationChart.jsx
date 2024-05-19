// 'use client'

import { TabView, TabPanel } from 'primereact/tabview'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FormHookProvider } from '@/components/layouts/Form/FormHookProvider'
import { Button } from '@/components/molecules/Button'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'
import { Card } from '@/components/molecules/Card/Card'
import styles from './OrganizationChart.module.scss'
import DataTableList from './Forms/DataTableList/DataTableList'
import Scheme from './Forms/Scheme/Scheme'

export default function OrganizationChart () {
  const methods = useForm()
  const onSubmit = () => {
    console.log('send form')
  }
  const [activeIndex, setActiveIndex] = useState(0)

  const companyOptions = [
    { name: 'La Marina', value: 'La Marina' },
    { name: 'El Bodegón', value: 'El Bodegón' }
  ]
  const dropdownCompany = {
    name: 'company',
    options: companyOptions,
    optionLabel: 'name',
    filter: true
  }

  const deparmentsOptions = [
    { name: 'Oficina central de administración', value: 'Oficina central de administración' },
    { name: 'La Marina Madero', value: 'La Marina Madero' },
    { name: 'La Marina San Fernando', value: 'La Marina San Fernando' },
    { name: 'La Marina Zapotlán', value: 'La Marina Zapotlán' },
    { name: 'La Marina La Piedad', value: 'La Marina La Piedad' },
    { name: 'La Marina Guanajuato', value: 'La Marina Guanajuato' },
    { name: 'La Marina Manzanillo', value: 'La Marina Manzanillo' },
    { name: 'Almacén central', value: 'La Marina Manzanillo' }
  ]
  const dropdownDeparments = {
    name: 'deparments',
    value: 'Oficina central de administración',
    options: deparmentsOptions,
    optionLabel: 'name',
    filter: true
  }
  useEffect(() => {
    methods.setValue('pages', '10 / Página')
    methods.setValue('deparments', 'Oficina central de administración')
    methods.setValue('company', 'La Marina')
  }, [])

  const tabs = [
    {
      id: 0,
      label: 'Listado'
    },
    {
      id: 1,
      label: 'Esquema'
    }
  ]

  return (
    <>
      <FormHookProvider methods={methods} method='POST' onSubmit={onSubmit}>
        <div className={styles.employeeList}>
          <Card className={styles.card_header}>
            <div className={styles.header}>
              <div className={styles.partLeft}>
                <p className={styles.title}>Organigrama</p>
                <div className={styles.partRight}>
                  <div style={{ width: '200px' }}>
                    <Dropdown {...dropdownCompany} />
                  </div>
                  <div style={{ width: '300px' }}>
                    <Dropdown {...dropdownDeparments} />
                  </div>
                </div>
              </div>
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
          </Card>
          <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
            <TabPanel header='' className={styles.tabPanel}>
              <div className='m-0'>
                <DataTableList methods={methods} />
              </div>
            </TabPanel>
            <TabPanel header='' className={styles.tabPanel}>
              <div className={styles.m_0}>
                <Scheme />
              </div>
            </TabPanel>
          </TabView>
        </div>
      </FormHookProvider>
    </>
  )
}
