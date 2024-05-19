import { useMemo, useState } from 'react'
import styles from './styles.module.scss'
import { InputText } from '@/components/molecules/InputText/InputText/InputText'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'
import ImageUpload from '@/components/molecules/Upload/ImageUpload/ImageUpload'

export default function FormGeneral ({ createMode, showMode, editMode }) {
  const loadingData = false
  const [type, setType] = useState(0)

  const typeOptions = [
    { label: 'Persona fisica', value: 0 },
    { label: 'Persona moral', value: 1 }
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

  const fileUploadLogo = useMemo(() => ({
    name: 'logo',
    label: 'Logotipo',
    disabled: showMode
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

  const dropdownType = useMemo(() => ({
    name: 'type',
    defaultValue: 0,
    onChange: (e) => setType(e.value),
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

  const inputTextName = useMemo(() => ({
    name: 'name',
    label: 'Nombre',
    placeholder: 'Nombre',
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

  const inputTextBusinessName = useMemo(() => ({
    name: 'business_name',
    label: 'Razón social',
    placeholder: 'Razón social',
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

  const inputTextTaxName = useMemo(() => ({
    name: 'tax_name',
    label: 'Nombre fiscal',
    placeholder: 'Nombre fiscal',
    readOnly: showMode,
    variant: 'primary',
    height: '45px',
    loading: loadingData,
    required: true,
    rules: { required: true }
  }), [])

  const inputTextTradename = useMemo(() => ({
    name: 'trade_name',
    label: 'Nombre comercial',
    placeholder: 'Nombre comercial',
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
    required: true,
    rules: { required: true }
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
            <ImageUpload {...fileUploadLogo} />
          </div>
          <div className={styles.card_content}>
            <div className={styles.form_row}>
              <div className={styles.form_column}>
                <InputText {...inputTextCode} />
              </div>
              <div className={styles.form_column}>
                <Dropdown {...dropdownType} />
              </div>
              <div className={styles.form_column} />
            </div>
            <div className={styles.form_row}>
              {type === 0 &&
                <>
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
                    <InputText {...inputTextRfc} />
                  </div>
                  <div className={styles.form_column}>
                    <InputText {...inputTextCurp} />
                  </div>
                </>}
              {type === 1 &&
                <>
                  <div className={styles.form_column_3}>
                    <InputText {...inputTextBusinessName} />
                  </div>
                  <div className={styles.form_column}>
                    <InputText {...inputTextRfc} />
                  </div>
                  <div className={styles.form_column} />
                </>}
            </div>
            <div className={styles.form_row}>
              <div className={styles.form_column_2}>
                <InputText {...inputTextTaxName} />
              </div>
              <div className={styles.form_column_2}>
                <InputText {...inputTextTradename} />
              </div>
              <div className={styles.form_column} />
            </div>
          </div>
        </div>
      </div>
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
    </div>
  )
}
