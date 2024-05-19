import { useMemo, useState } from 'react'
import styles from './styles.module.scss'
import { InputText } from '@/components/molecules/InputText/InputText/InputText'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'
import { Checkbox } from '@/components/molecules/Checkbox/Checkbox/Checkbox'
import ImageUpload from '@/components/molecules/Upload/ImageUpload/ImageUpload'
import DataTableContactNumbers from '@/components/organisms/Authenticated/HumanResources/Employees/Employees/DataTableContactNumbers/DataTableContactNumbers'

export default function FormEmployeesGeneral({ createMode, showMode, editMode }) {
  const loadingData = false
  const [applyUndefined, setApplyUndefined] = useState(false)

  const genderOptions = [
    { label: 'Hombre', value: 0 },
    { label: 'Mujer', value: 1 },
    { label: 'Otro', value: 2 }
  ]

  const companyOptions = [
    { label: 'La Marina', value: 0 },
    { label: 'El Bodegón', value: 1 }
  ]

  const typeOptions = [
    { label: 'Tienda', value: 0 },
    { label: 'Ubicación de operación', value: 1 }
  ]

  const jobPositionOptions = [
    { label: 'Auxiliar administrativo', value: 0 },
    { label: 'Auxiliar de piso', value: 1 },
    { label: 'Auxiliar general', value: 2 },
    { label: 'Encargado de crédito', value: 3 },
    { label: 'Gerente de tienda', value: 4 },
    { label: 'Vendedor', value: 5 }
  ]

  const countryOptions = [
    { label: 'México', value: 0 },
    { label: 'Estados Unidos de Norteamérica', value: 1 },
    { label: 'Canada', value: 2 },
    { label: 'Argentina', value: 3 },
    { label: 'Alemania', value: 4 },
    { label: 'Suiza', value: 5 }
  ]

  const stateOptions = [
    { label: 'Aguascalientes', value: 0 },
    { label: 'Baja California', value: 1 },
    { label: 'Baja California Sur', value: 2 },
    { label: 'Campeche', value: 3 },
    { label: 'Chiapas', value: 4 },
    { label: 'Jalisco', value: 5 }
  ]

  const municipalityOptions = [
    { label: 'Guadalajara', value: 0 },
    { label: 'Tlajomulco de Zúñiga', value: 1 },
    { label: 'Tlaquepaque', value: 2 },
    { label: 'Tonala', value: 3 },
    { label: 'Acatic', value: 4 },
    { label: 'Acatlán de Juárez', value: 5 }
  ]

  const fileUploadPhoto = useMemo(() => ({
    name: 'photo',
    label: 'Foto',
    disabled: showMode,
    loading: loadingData
  }), [])

  const inputTextCode = useMemo(() => ({
    name: 'code',
    label: 'Código',
    placeholder: 'Código',
    readOnly: showMode,
    variant: 'primary',
    height: '45px',
    loading: loadingData,
    required: true,
    rules: { required: true }
  }), [])

  const inputTextName = useMemo(() => ({
    name: 'name',
    label: 'Nombre (s)',
    placeholder: 'Nombre (s)',
    readOnly: showMode,
    variant: 'primary',
    height: '45px',
    loading: loadingData,
    required: true,
    rules: { required: true }
  }), [])

  const inputTextPaternalSurname = useMemo(() => ({
    name: 'paternal_surname',
    label: 'Apellido paterno',
    placeholder: 'Apellido paterno',
    readOnly: showMode,
    variant: 'primary',
    height: '45px',
    loading: loadingData,
    required: true,
    rules: { required: true }
  }), [])

  const inputTextMaternalSurname = useMemo(() => ({
    name: 'maternal_surname',
    label: 'Apellido materno',
    placeholder: 'Apellido materno',
    readOnly: showMode,
    variant: 'primary',
    height: '45px',
    loading: loadingData,
    required: true,
    rules: { required: true }
  }), [])

  const inputTextBirthdate = useMemo(() => ({
    name: 'birthdate',
    type: 'date',
    label: 'Fecha de nacimiento',
    readOnly: showMode,
    variant: 'primary',
    height: '45px',
    loading: loadingData,
    required: true,
    rules: { required: true }
  }), [])

  const inputTextRfc = useMemo(() => ({
    name: 'rfc',
    label: 'RFC',
    placeholder: 'RFC',
    readOnly: showMode,
    variant: 'primary',
    height: '45px',
    loading: loadingData,
    required: true,
    rules: { required: true }
  }), [])

  const inputTextCurp = useMemo(() => ({
    name: 'curp',
    label: 'CURP',
    placeholder: 'CURP',
    readOnly: showMode,
    variant: 'primary',
    height: '45px',
    loading: loadingData,
    required: true,
    rules: { required: true }
  }), [])

  const inputTextNss = useMemo(() => ({
    name: 'nss',
    label: 'NSS',
    placeholder: 'Número de seguridad social',
    readOnly: showMode,
    variant: 'primary',
    height: '45px',
    loading: loadingData,
    required: true,
    rules: { required: true }
  }), [])

  const dropdownGender = useMemo(() => ({
    name: 'gender',
    options: genderOptions,
    optionLabel: 'label',
    label: 'Género',
    placeholder: '- Selecciona una opción -',
    filter: true,
    readOnly: showMode,
    variant: 'primary',
    height: '45px',
    loading: loadingData,
    required: true,
    rules: { required: true }
  }), [])

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

  const inputTextStreet = useMemo(() => ({
    name: 'street',
    label: 'Calle',
    placeholder: 'Calle',
    readOnly: showMode,
    variant: 'primary',
    height: '45px',
    loading: loadingData,
    required: true,
    rules: { required: true }
  }), [])

  const inputTextExternalNumber = useMemo(() => ({
    name: 'external_number',
    type: 'number',
    label: 'Número exterior',
    placeholder: 'Número exterior',
    readOnly: showMode,
    variant: 'primary',
    height: '45px',
    loading: loadingData,
    required: true,
    rules: { required: true }
  }), [])

  const inputTextInternalNumber = useMemo(() => ({
    name: 'internal_number',
    label: 'Número interior',
    placeholder: 'Número interior',
    readOnly: showMode,
    variant: 'primary',
    height: '45px',
    loading: loadingData,
    optional: true
  }), [])

  const inputTextColony = useMemo(() => ({
    name: 'colony',
    label: 'Colonia',
    placeholder: 'Colonia',
    readOnly: showMode,
    variant: 'primary',
    height: '45px',
    loading: loadingData,
    required: true,
    rules: { required: true }
  }), [])

  const inputTextPlace = useMemo(() => ({
    name: 'place',
    label: 'Localidad',
    placeholder: 'Localidad',
    readOnly: showMode,
    variant: 'primary',
    height: '45px',
    loading: loadingData,
    optional: true
  }), [])

  const dropdownCountry = useMemo(() => ({
    name: 'country',
    options: countryOptions,
    optionLabel: 'label',
    label: 'País',
    placeholder: '- Selecciona una opción -',
    filter: true,
    readOnly: showMode,
    variant: 'primary',
    height: '45px',
    loading: loadingData,
    required: true,
    rules: { required: true }
  }), [])

  const dropdownState = useMemo(() => ({
    name: 'state',
    options: stateOptions,
    optionLabel: 'label',
    label: 'Estado',
    placeholder: '- Selecciona una opción -',
    filter: true,
    readOnly: showMode,
    variant: 'primary',
    height: '45px',
    loading: loadingData,
    required: true,
    rules: { required: true }
  }), [])

  const dropdownMunicipality = useMemo(() => ({
    name: 'municipality',
    options: municipalityOptions,
    optionLabel: 'label',
    label: 'Municipio',
    placeholder: '- Selecciona una opción -',
    filter: true,
    readOnly: showMode,
    variant: 'primary',
    height: '45px',
    loading: loadingData,
    required: true,
    rules: { required: true }
  }), [])

  const inputTextZipCode = useMemo(() => ({
    name: 'zip_code',
    type: 'number',
    label: 'Código postal',
    placeholder: 'Código postal',
    readOnly: showMode,
    variant: 'primary',
    height: '45px',
    loading: loadingData,
    required: true,
    rules: { required: true }
  }), [])

  return (
    <div className={styles.form}>
      <div className={styles.card}>
        <div className={styles.card_header}>
          Generales
        </div>
        <div className={styles.card_body}>
          <div className={styles.card_logo}>
            <ImageUpload {...fileUploadPhoto} />
          </div>
          <div className={styles.card_content}>
            <div className={styles.form_row}>
              <div className={styles.form_column}>
                <InputText {...inputTextCode} />
              </div>
              <div className={styles.form_column}>
                <InputText {...inputTextName} />
              </div>
              <div className={styles.form_column}>
                <InputText {...inputTextPaternalSurname} />
              </div>
              <div className={styles.form_column}>
                <InputText {...inputTextMaternalSurname} />
              </div>
              <div className={styles.form_column}>
                <InputText {...inputTextBirthdate} />
              </div>
            </div>
            <div className={styles.form_row}>
              <div className={styles.form_column}>
                <InputText {...inputTextRfc} />
              </div>
              <div className={styles.form_column}>
                <InputText {...inputTextCurp} />
              </div>
              <div className={styles.form_column}>
                <InputText {...inputTextNss} />
              </div>
              <div className={styles.form_column}>
                <Dropdown {...dropdownGender} />
              </div>
              <div className={styles.form_column} />
            </div>
          </div>
        </div>
      </div>
      {createMode &&
        <div className={styles.card}>
          <div className={styles.card_header}>
            Puesto
          </div>
          <div className={styles.form_row}>
            <div style={{ width: '190px', padding: '0 10px 0 0' }}>
              <InputText {...inputTextStartDate} />
            </div>
            <div style={{ width: '190px', padding: '0 10px' }}>
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
            <div className={styles.form_col}>
              <Dropdown {...dropdownCompany} />
            </div>
            <div className={styles.form_col}>
              <Dropdown {...dropdownType} />
            </div>
          </div>
          <div className={styles.form_row}>
            <div className={styles.form_column}>
              <Dropdown {...dropdownJobPosition} />
            </div>
            <div className={styles.form_column} />
          </div>
        </div>
      }
      {createMode && <DataTableContactNumbers showMode={showMode} />}
      <div className={styles.card}>
        <div className={styles.card_header}>
          Domicilio
        </div>
        <div className={styles.form_row}>
          <div className={styles.form_col_2}>
            <InputText {...inputTextStreet} />
          </div>
          <div className={styles.form_col}>
            <InputText {...inputTextExternalNumber} />
          </div>
          <div className={styles.form_col}>
            <InputText {...inputTextInternalNumber} />
          </div>
          <div className={styles.form_col}>
            <InputText {...inputTextColony} />
          </div>
          <div className={styles.form_col}>
            <InputText {...inputTextPlace} />
          </div>
        </div>
        <div className={styles.form_row}>
          <div className={styles.form_col}>
            <Dropdown {...dropdownCountry} />
          </div>
          <div className={styles.form_col}>
            <Dropdown {...dropdownState} />
          </div>
          <div className={styles.form_col}>
            <Dropdown {...dropdownMunicipality} />
          </div>
          <div className={styles.form_col}>
            <InputText {...inputTextZipCode} />
          </div>
          <div className={styles.form_col} />
        </div>
      </div>
      {!createMode && <DataTableContactNumbers showMode={showMode} />}
    </div>
  )
}
