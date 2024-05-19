// 'use client'

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import { InputText } from '@/components/molecules/InputText/InputText/InputText'
import { FormHookProvider } from '@/components/layouts/Form/FormHookProvider'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'
import { Alert, Loading, Success } from '@/utils/Loading'
import { Card } from '@/components/molecules/Card/Card'
import { Button } from '@/components/molecules/Button'
import styles from './CreateOperational.module.scss'

export default function CreateOperational ({ disabled, title }) {
  const methods = useForm()
  const router = useRouter()

  const onSubmit = () => {
    Loading('Guardando ubicación operativa')
    setTimeout(() => {
      Success('Ubicación operativa guardada', 'La ubicación operativa se guardo de forma correcta')
    }, 2000)
    setTimeout(() => {
      Alert('Ocurrio un error', 'La ubicación no se guardo')
    }, 3000)
    setTimeout(() => {
      Swal.close()
      router.push('/system/configuration-and-management/settings/operational-location')
    }, 4000)
  }
  const inputCode = {
    name: 'code',
    type: 'number',
    label: 'Código',
    placeholder: 'Código',
    required: true,
    readOnly: disabled,
    rules: {
      required: 'El código es requerido.'
    },
    error: methods.formState.errors.user
  }

  const inputTextUser = {
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

  const companyOptions = [
    { name: 'La Marina', value: 'La Marina' },
    { name: 'El Bodegón', value: 'El Bodegón' }
  ]
  const dropdownCompany = {
    name: 'company',
    label: 'Empresa',
    placeholder: '-Selecciona una opción-',
    options: companyOptions,
    optionLabel: 'name',
    readOnly: disabled,
    required: true,
    rules: {
      required: 'La empresa es requerida.'
    },
    filter: true
  }

  const inputStreet = {
    name: 'street',
    type: 'text',
    label: 'Calle',
    placeholder: 'Calle',
    readOnly: disabled,
    required: true,
    rules: {
      required: 'El Calle es requerido.'
    }
  }
  const inputNumberExt = {
    name: 'number_ext',
    type: 'number',
    label: 'Número exterior',
    placeholder: 'Número exterior',
    readOnly: disabled,
    required: true,
    rules: {
      required: 'El Número exterior es requerido.'
    }
  }
  const inputNumberInt = {
    name: 'number_int',
    type: 'number',
    label: 'Número interior',
    placeholder: 'Número interior',
    readOnly: disabled,
    optional: true
  }
  const inputCologne = {
    name: 'cologne',
    type: 'text',
    label: 'Colonia',
    placeholder: 'Colonia',
    readOnly: disabled,
    required: true,
    rules: {
      required: 'El Colonia es requerido.'
    }
  }

  const inputLocation = {
    name: 'location',
    type: 'text',
    label: 'Localidad',
    placeholder: 'Localidad',
    readOnly: disabled,
    required: true,
    rules: {
      required: 'El Localidad es requerido.'
    }
  }

  const countryOptions = [
    { name: 'México', value: 'México' },
    { name: 'Estados Unidos de Norteamérica', value: 'Estados Unidos de Norteamérica' },
    { name: 'Canada', value: 'Canada' },
    { name: 'Argentina', value: 'Argentina' },
    { name: 'Alemania', value: 'Alemania' },
    { name: 'Suiza', value: 'Suiza' },
    { name: 'Italia', value: 'Italia' }
  ]
  const dropdownCountry = {
    name: 'country',
    label: 'País',
    placeholder: '-Selecciona una opción-',
    options: countryOptions,
    optionLabel: 'name',
    readOnly: disabled,
    required: true,
    rules: {
      required: 'El país es requerido.'
    },
    filter: true
  }

  const stateOptions = [
    { name: 'Aguascalientes', value: 'Aguascalientes' },
    { name: 'Baja California', value: 'Baja California' },
    { name: 'Baja California Sur', value: 'Baja California Sur' },
    { name: 'Campeche', value: 'Campeche' },
    { name: 'Chiapas', value: 'Chiapas' },
    { name: 'Ciudad de México', value: 'Ciudad de México' },
    { name: 'Jalisco', value: 'Jalisco' }
  ]
  const dropdownState = {
    name: 'state',
    label: 'Estado',
    placeholder: '-Selecciona una opción-',
    options: stateOptions,
    optionLabel: 'name',
    readOnly: disabled,
    required: true,
    rules: {
      required: 'El estado es requerido.'
    },
    filter: true
  }

  const townOptions = [
    { name: 'Guadalajara', value: 'Guadalajara' },
    { name: 'Tlajomulco de Zúñiga', value: 'Tlajomulco de Zúñiga' },
    { name: 'Tlaquepaque', value: 'Tlaquepaque' },
    { name: 'Tonala', value: 'Tonala' },
    { name: 'Acatic', value: 'Acatic' },
    { name: 'Acatlán de Juárez', value: 'Acatlán de Juárez' },
    { name: 'Ahululco de Mercado', value: 'Ahululco de Mercado' }
  ]
  const dropdownTown = {
    name: 'town',
    label: 'Municipio',
    placeholder: '-Selecciona una opción-',
    options: townOptions,
    optionLabel: 'name',
    readOnly: disabled,
    required: true,
    rules: {
      required: 'El municipio es requerido.'
    },
    filter: true
  }

  const inputCodeP = {
    name: 'code',
    type: 'number',
    label: 'Código postal',
    placeholder: 'Código postal',
    readOnly: disabled,
    required: true,
    rules: {
      required: 'El Código postal es requerido.'
    }
  }

  return (
    <>
      <FormHookProvider methods={methods} method='POST' onSubmit={onSubmit}>
        <div className={styles.CreateClient}>
          <Card>
            <div className={styles.header}>
              <p className={styles.title}>{title}</p>
              <div className={styles.Buttons}>
                <div style={{ width: '100px' }}>
                  <Button
                    variant='secondary'
                    type='button'
                    label='Regresar'
                    onClick={() => router.push('/system/configuration-and-management/settings/operational-location')}
                  />
                </div>
                {!disabled &&
                  <div style={{ width: '100px' }}>
                    <Button
                      variant='primary'
                      label='Guardar'
                    />
                  </div>}
              </div>
            </div>
          </Card>
          <div className={styles.rows}>
            <Card className={styles.container_input}>
              <div>
                <p className={styles.pTitle}>Generales</p>
              </div>
              <div className={styles.inputs}>
                <div className={styles.row}>
                  <div className={styles.w248}>
                    <InputText {...inputCode} />
                  </div>
                  <div className={styles.w372}>
                    <Dropdown {...dropdownCompany} />
                  </div>
                  <div className={styles.w393}>
                    <InputText {...inputTextUser} />
                  </div>
                </div>
              </div>
            </Card>
            <Card className={styles.container_input}>
              <div>
                <p className={styles.pTitle}>Domicilio</p>
              </div>
              <div className={styles.inputs}>
                <div className={styles.row}>
                  <div style={{ width: '517px' }}>
                    <InputText {...inputStreet} />
                  </div>
                  <div className={styles.w248}>
                    <InputText {...inputNumberExt} />
                  </div>
                  <div className={styles.w248}>
                    <InputText {...inputNumberInt} />
                  </div>
                  <div className={styles.w248}>
                    <InputText {...inputCologne} />
                  </div>
                  <div className={styles.w248}>
                    <InputText {...inputLocation} />
                  </div>
                </div>
              </div>
              <div className={styles.inputs}>
                <div className={styles.row}>
                  <div className={styles.w248}>
                    <Dropdown {...dropdownCountry} />
                  </div>
                  <div className={styles.w248}>
                    <Dropdown {...dropdownState} />
                  </div>
                  <div className={styles.w248}>
                    <Dropdown {...dropdownTown} />
                  </div>
                  <div className={styles.w248}>
                    <InputText {...inputCodeP} />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </FormHookProvider>
    </>
  )
}
