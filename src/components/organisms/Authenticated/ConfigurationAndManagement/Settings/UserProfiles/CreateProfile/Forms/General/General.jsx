// components🔨
import { InputText } from '@/components/molecules/InputText/InputText/InputText'
import { Card } from '@/components/molecules/Card/Card'

// styles📸
import styles from './General.module.scss'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'
import { InputTextArea } from '@/components/molecules/InputTextArea'

export default function General ({ methods, disabled }) {
  const inputNumber = {
    name: 'number',
    type: 'text',
    label: 'Código',
    placeholder: 'Código',
    readOnly: disabled,
    obligatory: true,
    required: true,
    rules: {
      required: 'El número es requerido.'
    },
    error: methods.formState.errors.user
  }

  const inputUser = {
    name: 'name',
    type: 'text',
    label: 'Nombre',
    placeholder: 'Nombre',
    readOnly: disabled,
    required: true,
    rules: {
      required: 'El nombre es requerido.'
    },
    error: methods.formState.errors.user
  }

  const optionsCompany = [
    { name: 'La marina', value: 'La marina' },
    { name: 'El Bodegón', value: 'El Bodegón' }
  ]
  const dropdownCompany = {
    name: 'company',
    label: 'Empresa',
    placeholder: '-Selecciona una opción-',
    options: optionsCompany,
    optionLabel: 'name',
    readOnly: disabled,
    required: true,
    filter: true,
    rules: {
      required: 'La empresa es requerida.'
    }
  }

  const InputComent = {
    name: 'description',
    label: 'Descripción',
    placeholder: 'Descripción',
    rows: 5,
    variant: 'primary',
    readOnly: disabled,
    optional: true,
    height: '273px',
    width: '764px'
  }

  return (
    <>
      <div className={styles.General}>
        <Card className={styles.card_table}>
          <div className={styles.header}>
            <p className={styles.title}>Generales</p>
          </div>
          <div className={styles.cont_intern}>
            <div className={styles.cont_inputs}>
              <div className={styles.w248}>
                <InputText {...inputNumber} />
              </div>
              <div style={{ width: '496px' }}>
                <InputText {...inputUser} />
              </div>
              <div className={styles.w372}>
                <Dropdown {...dropdownCompany} />
              </div>
            </div>
            <div className={styles.cont_inputs}>
              <div className={styles.colum}>
                <InputTextArea {...InputComent} />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}
