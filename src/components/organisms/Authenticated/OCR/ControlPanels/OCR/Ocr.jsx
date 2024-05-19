// 'use client'

import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import CardEmployeePanel from '@/components/molecules/Cards/CardEmployeePanel/CardEmployeePanel'
import { FormHookProvider } from '@/components/layouts/Form/FormHookProvider'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'
import { Card } from '@/components/molecules/Card/Card'
import styles from './Ocr.module.scss'
import { ChartBar } from '@/components/molecules/ChartBar/ChartBar'
import TableEstablishments from './TableEstablishments/TableEstablishments'
import TableDocuments from './TableDocuments/TableDocuments'
import { useRootContext } from '@/Provider/RootProvider'
import { usePostDataRefresh } from '@/customHooks/useGeneral'

export default function Ocr () {
  const methods = useForm()
  const router = useRouter()

  const { selectCompany } = useRootContext()
  const { data } = usePostDataRefresh('ocr/configurations/catalogs/dashboard', selectCompany)
  const onSubmit = () => { }

  const typeOptions = [
    { name: 'Todos', value: 'Todos' },
    { name: 'Tienda', value: 'Tienda' },
    { name: 'Ubicación de operación', value: 'Ubicación de operación' }
  ]

  const dropdownType = {
    name: 'type',
    defaultValue: 'Todos',
    placeholder: '-Selecciona una opción-',
    options: typeOptions,
    optionLabel: 'name',
    filter: true
  }

  const storeOptions = [
    { name: 'Todas', value: 'Todas' },
    { name: 'La Marina Madero', value: 'La Marina Madero' },
    { name: 'La Marina San Fernando', value: 'La Marina San Fernando' },
    { name: 'La Marina Zapotlán', value: 'La Marina Zapotlán' },
    { name: 'La Marina La Piedad', value: 'La Marina La Piedad' },
    { name: 'La Marina Guanajuato', value: 'La Marina Guanajuato' },
    { name: 'La Marina Manzanillo', value: 'La Marina Manzanillo' }
  ]

  const locationOptions = [
    { name: 'Todas', value: 'Todas' },
    { name: 'Oficina central de administración', value: 'Oficina central de administración' },
    { name: 'Almacén central', value: 'Almacén central' }
  ]

  const dropdownStore = {
    name: 'store',
    placeholder: '-Selecciona una opción-',
    options: methods.watch('type') === 'Tienda' ? storeOptions : locationOptions,
    optionLabel: 'name',
    filter: true
  }

  return (
    <FormHookProvider methods={methods} method='POST' onSubmit={onSubmit}>
      <div className={styles.ControlPanel}>
        <Card className={styles.card_header}>
          <div className={styles.content}>
            <h2>Empleados</h2>
            <div className={styles.selects}>
              <div className={styles.w200}>
                <Dropdown {...dropdownType} />
              </div>
              {methods.watch('type') !== 'Todos' &&
                <div className={styles.w326}>
                  <Dropdown {...dropdownStore} />
                </div>}
            </div>
          </div>
        </Card>
        <div className={styles.Panel}>
          <div className={styles.section_rows}>
            <div className={styles.flexColum}>
              <CardEmployeePanel
                value={data.data?.card?.establishments}
                title='Establecimientos'
                icon='i-stores-blue'
                color='#EDF0FD'
                borderColor='#374EB3'
                className={styles.CardEmployees}
              />
              <CardEmployeePanel
                value={data.data?.card?.documents}
                title='Documentos'
                icon='i-documents-green'
                color='#d6f0f0'
                borderColor='#278787'
                className={styles.CardEmployees}
              />
              <CardEmployeePanel
                value={data.data?.card?.fields}
                title='Campos'
                icon='i-fields-bGreen'
                color='#d5f0e0'
                borderColor='#419663'
                className={styles.CardEmployees}
              />
              <CardEmployeePanel
                value={data.data?.card?.templates}
                title='Plantillas'
                icon='i-templates-blue'
                color='#c9edf5'
                borderColor='#33b0cc'
                className={styles.CardEmployees}
              />
            </div>
            <Card className={styles.tableCard}>
              <div className={styles.card}>
                <ChartBar title='Escaneos' data={data.data?.graph?.scans} methods={methods} />
              </div>
            </Card>
            <div className={styles.flexColumRow}>
              <Card className={styles.miniCardTable}>
                <div className={styles.header}>
                  <p className={styles.title}>Establecimientos</p>
                  <div className={styles.hoverSubtitle}>
                    <p className={styles.subtitle} onClick={() => router.push('/system/ocr/establishments')}>Ver todos</p>
                  </div>
                </div>
                <div className={styles.overflowTable}>
                  <TableEstablishments />
                </div>
              </Card>
              <Card className={styles.miniCardTable}>
                <div className={styles.header}>
                  <p className={styles.title}>Documentos</p>
                  <div className={styles.hoverSubtitle}>
                    <p className={styles.subtitle} onClick={() => router.push('/system/ocr/settings/catalogs/documents-types')}>Ver todos</p>
                  </div>
                </div>
                <div className={styles.overflowTable}>
                  <TableDocuments />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </FormHookProvider>
  )
}
