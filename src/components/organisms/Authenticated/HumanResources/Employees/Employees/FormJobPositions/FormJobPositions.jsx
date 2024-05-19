import { useEffect, useMemo, useState } from 'react'
import styles from './styles.module.scss'
import { InputText } from '@/components/molecules/InputText/InputText/InputText'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'
import { Checkbox } from '@/components/molecules/Checkbox/Checkbox/Checkbox'
import { Button } from '@/components/molecules/Button'

export default function FormJobPositions({ createMode, showMode, editMode, onHide, methods }) {
  const [applyUndefined, setApplyUndefined] = useState(false)
  const [type, setType] = useState(null)
  const loadingData = false

  useEffect(() => {
    setType(methods.watch('type'))
  }, [methods.watch('type')])

  useEffect(() => {
    if (showMode) methods.setValue('type', 0)
  }, [])

  const companyOptions = [
    { label: 'La Marina', value: 0 },
    { label: 'El Bodegón', value: 1 }
  ]

  const typeOptions = [
    { label: 'Tienda', value: 0 },
    { label: 'Ubicación de operación', value: 1 }
  ]

  const storeOptions = [
    { label: 'La Marina Madero', value: 'La Marina Madero' },
    { label: 'La Marina San Fernando', value: 'La Marina San Fernando' },
    { label: 'La Marina Zapotlán', value: 'La Marina Zapotlán' },
    { label: 'La Marina La Piedad', value: 'La Marina La Piedad' },
    { label: 'La Marina Guanajuato', value: 'La Marina Guanajuato' },
    { label: 'La Marina Manzanillo', value: 'La Marina Manzanillo' }
  ]

  const locationOptions = [
    { label: 'Oficina central de administración', value: 0 },
    { label: 'Almacén central', value: 1 }
  ]

  const jobPositionOptions = [
    { label: 'Auxiliar administrativo', value: 0 },
    { label: 'Auxiliar de piso', value: 1 },
    { label: 'Auxiliar general', value: 2 },
    { label: 'Encargado de crédito', value: 3 },
    { label: 'Gerente de tienda', value: 4 },
    { label: 'Vendedor', value: 5 }
  ]

  const inputTextStartDate = useMemo(() => ({
    name: 'start_date',
    type: 'date',
    label: 'Fecha inicial',
    readOnly: showMode,
    variant: 'primary',
    height: '45px',
    loading: loadingData,
    required: true,
    rules: { required: true }
  }), [])

  const inputTextFinishDate = useMemo(() => ({
    name: 'finish_date',
    type: 'date',
    label: 'Fecha final',
    readOnly: showMode,
    disabled: applyUndefined,
    variant: 'primary',
    height: '45px',
    loading: loadingData,
    required: true,
    rules: { required: !applyUndefined }
  }), [applyUndefined])

  const dropdownCompany = useMemo(() => ({
    name: 'company',
    options: companyOptions,
    optionLabel: 'label',
    label: 'Empresa',
    placeholder: '- Selecciona una opción -',
    filter: true,
    readOnly: showMode,
    variant: 'primary',
    height: '45px',
    loading: loadingData,
    required: true,
    rules: { required: true }
  }), [])

  const dropdownType = useMemo(() => ({
    name: 'type',
    options: typeOptions,
    optionLabel: 'label',
    label: 'Tipo',
    placeholder: '- Selecciona una opción -',
    filter: true,
    readOnly: showMode,
    variant: 'primary',
    height: '45px',
    loading: loadingData,
    required: true,
    rules: { required: true }
  }), [])

  const dropdownStore = useMemo(() => ({
    name: 'store',
    options: storeOptions,
    optionLabel: 'label',
    label: 'Tienda',
    placeholder: '- Selecciona una opción -',
    filter: true,
    readOnly: showMode,
    variant: 'primary',
    height: '45px',
    loading: loadingData,
    required: true,
    rules: { required: true }
  }), [])

  const dropdownOperationalLocation = useMemo(() => ({
    name: 'operational_location',
    options: locationOptions,
    optionLabel: 'label',
    label: 'Ubicación operativa',
    placeholder: '- Selecciona una opción -',
    filter: true,
    readOnly: showMode,
    variant: 'primary',
    height: '45px',
    loading: loadingData,
    required: true,
    rules: { required: true }
  }), [])

  const dropdownJobPosition = useMemo(() => ({
    name: 'job_position',
    options: jobPositionOptions,
    optionLabel: 'label',
    label: 'Puesto',
    placeholder: '- Selecciona una opción -',
    filter: true,
    readOnly: showMode,
    variant: 'primary',
    height: '45px',
    loading: loadingData,
    required: true,
    rules: { required: true }
  }), [])

  return (
    <div className={styles.form}>
      <div className={styles.form_header}>
        <div>{createMode && 'Nuevo'}{showMode && 'Ver'}{editMode && 'Editar'} puesto</div>
        <div className={styles.form_header_buttons}>
          <div>
            <Button
              type='button'
              label='Cerrar'
              onClick={onHide}
              variant='secondary'
              height='35px'
            />
          </div>
          {!showMode &&
            <div>
              <Button
                label='Guardar'
                variant='primary'
                height='35px'
              />
            </div>}
        </div>
      </div>
      <div className={styles.form_body}>
        <div className={styles.form_row}>
          <div style={{ width: '180px', padding: '0 10px 0 0' }}>
            <InputText {...inputTextStartDate} />
          </div>
          <div style={{ width: '180px', padding: '0 10px' }}>
            <InputText {...inputTextFinishDate} />
          </div>
          <div className={styles.form_checkbox}>
            <Checkbox
              name='apply_undefined'
              label='Indefinido'
              onChange={(e) => setApplyUndefined(e.checked)}
              readOnly={showMode}
              variant='primary'
            />
          </div>
        </div>
        <div className={styles.form_row}>
          <div className={styles.form_column}>
            <Dropdown {...dropdownCompany} />
          </div>
          <div className={styles.form_column}>
            <Dropdown {...dropdownType} />
          </div>
        </div>
        <div className={styles.form_row}>
          <div className={styles.form_column_2}>
            {type === 0 && <Dropdown {...dropdownStore} />}
            {type === 1 && <Dropdown {...dropdownOperationalLocation} />}
          </div>
        </div>
        <div className={styles.form_row}>
          <div className={styles.form_column_2}>
            {(type === 0 || type === 1) && <Dropdown {...dropdownJobPosition} />}
          </div>
        </div>
      </div>
    </div>
  )
}
