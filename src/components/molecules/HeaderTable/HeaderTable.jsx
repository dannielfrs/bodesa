import React from 'react'

// style🎡
import styles from './HeaderTable.module.scss'

// components 🔨
import { InputText } from '@/components/molecules/InputText/InputText/InputText'
import { Button } from '@/components/molecules/Button'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'

export const HeaderTable = ({
  title,
  dropCompanies = true,
  onClickExcel = () => { },
  onChangeRowsPerPage = () => { },
  onChangeCompany = () => { },
  onChangeStatus = () => { },
  search,
  setSearch,
  handleNew,
  hideBorder,
  className
}) => {
  // const methods = useForm()

  const rowsPerPage = [
    { label: '10 / Página', value: 10 },
    { label: '20 / Página', value: 20 },
    { label: '30 / Página', value: 30 },
    { label: '50 / Página', value: 50 },
    { label: '100 / Página', value: 100 }
  ]

  const statusOptions = [
    { label: 'Todos', value: 'Todos' },
    { label: 'Activos', value: 'Activos' },
    { label: 'Inactivos', value: 'Inactivos' }
  ]

  const companiesOptions = [
    { label: 'Todas', value: 'Todas' },
    { label: 'La marina', value: 'La marina' },
    { label: 'El bodegón', value: 'El bodegón' }
  ]

  return (
    <div className={`${styles.header} ${hideBorder ? styles.header_hideborder : ''} ${className}`}>
      <p className={styles.header_title}>{title}</p>
      <div className={styles.partRight}>
        <div>
          <Button
            icon='i-excel'
            type='button'
            onClick={onClickExcel}
            tooltip='Descargar excel'
            tooltipOptions={{ position: 'top', className: styles.tooltip_excel }}
            variant='transparent-static'
            height='28px'
          />
        </div>
        <div style={{ width: '125px' }}>
          <Dropdown
            name='rows_per_page'
            defaultValue={10}
            onChange={onChangeRowsPerPage}
            options={rowsPerPage}
            optionLabel='label'
            placeholder='- Selecciona una opción -'
            variant='primary'
            height='45px'
          />
        </div>
        {
          dropCompanies &&
            <div style={{ width: '200px' }}>
              <Dropdown
                name='company'
                defaultValue='Todas'
                onChange={onChangeCompany}
                options={companiesOptions}
                optionLabel='label'
                placeholder='- Selecciona una opción -'
                filter
                variant='primary'
                height='45px'
              />
            </div>
        }
        <div style={{ width: '240px' }}>
          <Dropdown
            name='status'
            defaultValue='Todos'
            onChange={onChangeStatus}
            options={statusOptions}
            optionLabel='label'
            placeholder='Estatus'
            filter
            variant='primary'
            height='45px'
          />
        </div>
        <div className={styles.InputSearch}>
          <InputText
            name='search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Buscar'
            icon='i-search'
            variant='primary'
            height='45px'
          />
        </div>
        <div>
          {handleNew &&
            <div className={styles.ButtonNew}>
              <Button
                variant='primary'
                label='Nuevo'
                height='45px'
                width='79px'
                onClick={handleNew}
              />
            </div>}
        </div>
      </div>
    </div>
  )
}
