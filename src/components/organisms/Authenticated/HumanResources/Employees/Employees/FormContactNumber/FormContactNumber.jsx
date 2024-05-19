import { useMemo } from 'react'
import styles from './styles.module.scss'
import { InputText } from '@/components/molecules/InputText/InputText/InputText'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'
import { Button } from '@/components/molecules/Button'

export default function FormContactNumber({ createMode, showMode, editMode, onHide }) {
  const loadingData = false

  const typeOptions = [
    { label: 'Casa', value: 0 },
    { label: 'Celular', value: 1 },
    { label: 'Otro', value: 2 }
  ]

  const dropdownNumberType = useMemo(() => ({
    name: 'number_type',
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

  const inputTextNumber = useMemo(() => ({
    name: 'number',
    label: 'Número',
    placeholder: 'Número',
    readOnly: showMode,
    variant: 'primary',
    height: '45px',
    loading: loadingData,
    required: true,
    rules: { required: true }
  }), [])

  const inputTextContactPerson = useMemo(() => ({
    name: 'contact_person',
    label: 'Persona de contacto',
    placeholder: 'Persona de contacto',
    readOnly: showMode,
    variant: 'primary',
    height: '45px',
    loading: loadingData,
    optional: true
  }), [])

  const inputTextRelationship = useMemo(() => ({
    name: 'relationship',
    label: 'Parentesco',
    placeholder: 'Parentesco',
    readOnly: showMode,
    variant: 'primary',
    height: '45px',
    loading: loadingData,
    optional: true
  }), [])

  return (
    <div className={styles.form}>
      <div className={styles.form_header}>
        <div>{createMode && 'Nuevo'}{showMode && 'Ver'}{editMode && 'Editar'} número de contacto</div>
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
          <div className={styles.form_column}>
            <Dropdown {...dropdownNumberType} />
          </div>
          <div className={styles.form_column}>
            <InputText {...inputTextNumber} />
          </div>
        </div>
        <div className={styles.form_row}>
          <div className={styles.form_column_2}>
            <InputText {...inputTextContactPerson} />
          </div>
        </div>
        <div className={styles.form_row}>
          <div className={styles.form_column_2}>
            <InputText {...inputTextRelationship} />
          </div>
        </div>
      </div>
    </div>
  )
}
