import React, { useEffect, useState } from 'react'
import styles from './CreateExternalUsers.module.scss'
import { Card } from '@/components/molecules/Card/Card'
import ChargeImg from '@/components/molecules/ChargeImg/ChargeImg'
import { InputText } from '@/components/molecules/InputText/InputText/InputText'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'
import { Button } from '@/components/molecules/Button'
import { Alert, Loading, Success } from '@/utils/Loading'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'
import ShowPermissions from '../../InternalUsers/EditInternalUsers/Forms/Generals/ShowPermissions/ShowPermissions'

export default function CreateExternalUsers ({ disabled, create, methods }) {
  const [setImgLogo] = useState(null)
  const router = useRouter()
  const handleSubmit2 = () => {
    setOpenModal2Title('Detalle de permisos del perfil:')
    setOpenModal2(true)
  }
  const [selectedProfile, setSelectedProfile] = useState('') // Estado para el perfil seleccionado
  const [OpenModal2Title, setOpenModal2Title] = useState('Detalle de permisos del perfil: ')
  const [OpenModal2, setOpenModal2] = useState(false)
  const modals = () => {
    Loading('Enviando enlace de recuperación')
    setTimeout(() => {
      Success('Enlace de recuperación envidado', 'El enlace de recuperación se envió de forma correcta')
    }, 2000)
    setTimeout(() => {
      Alert('Ocurrio un error', 'El enlace no se envió')
    }, 3000)
    setTimeout(() => {
      Swal.close()
      router.push('')
    }, 4000)
  }
  const InputCode = {
    name: 'code',
    type: 'text',
    label: 'Código',
    placeholder: 'Código',
    readOnly: disabled,
    obligatory: true,
    required: true,
    rules: {
      required: 'El código es requerido.'
    }
  }
  const InputName = {
    name: 'name',
    type: 'text',
    label: 'Nombre (s)',
    placeholder: 'Nombre (s)',
    readOnly: disabled,
    obligatory: true,
    required: true,
    rules: {
      required: 'El nombre es requerido.'
    }
  }
  const LastName = {
    name: 'LastName',
    type: 'text',
    label: 'Apellido paterno',
    placeholder: 'Apellido paterno',
    readOnly: disabled,
    obligatory: true,
    required: true,
    rules: {
      required: 'El apellido es requerido.'
    }
  }
  const LastName2 = {
    name: 'LastName2',
    type: 'text',
    label: 'Apellido materno',
    placeholder: 'Apellido materno',
    readOnly: disabled,
    obligatory: true,
    required: true,
    rules: {
      required: 'El apellido es requerido.'
    }
  }
  const inputDate = {
    name: 'date',
    type: 'date',
    label: 'Fecha de documento',
    readOnly: disabled,
    required: true,
    obligatory: true,
    rules: {
      required: 'La fecha es requerida.'
    }
  }
  const Inputrfc = {
    name: 'rfc',
    type: 'text',
    label: 'RFC',
    placeholder: 'RFC',
    readOnly: disabled,
    obligatory: true,
    required: true,
    rules: {
      required: 'El RFC es requerido.'
    }
  }
  const InputCurp = {
    name: 'curp',
    type: 'text',
    label: 'CURP',
    placeholder: 'CURP',
    readOnly: disabled,
    obligatory: true,
    required: true,
    rules: {
      required: 'La CURP es requerida.'
    }
  }
  const InputNumber = {
    name: 'number',
    type: 'text',
    label: 'Número celular',
    placeholder: 'Número celular',
    readOnly: disabled,
    obligatory: true,
    required: true,
    rules: {
      required: 'El número es requerido.'
    }
  }
  const InputSupplier = {
    name: 'supplier',
    type: 'text',
    label: 'Proveedor / Cliente / Empresa',
    placeholder: 'Proveedor / Cliente / Empresa',
    readOnly: disabled,
    obligatory: true,
    required: true,
    rules: {
      required: 'El Proveedor / Cliente / Empresa es requerido.'
    }
  }
  const InputJob = {
    name: 'job',
    type: 'text',
    label: 'Puesto',
    placeholder: 'Puesto',
    readOnly: disabled,
    obligatory: true,
    required: true,
    rules: {
      required: 'El puesto es requerido.'
    }
  }
  const InputEmail = {
    name: 'email',
    type: 'text',
    label: 'Correo electrónico',
    placeholder: 'Correo electrónico',
    readOnly: disabled,
    obligatory: true,
    required: true,
    rules: {
      required: 'El correo electrónico es requerido.'
    }
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
  const optionsProfile = [
    { name: 'Consultor de datos', value: 'Consultor de datos' },
    { name: 'Consultor de RH', value: 'Consultor de RH' },
    { name: 'Consultor de ventas', value: 'Consultor de ventas' }
  ]
  const dropdownProfile = {
    name: 'profile',
    label: 'Perfil',
    placeholder: '-Selecciona una opción-',
    options: optionsProfile,
    optionLabel: 'name',
    readOnly: disabled,
    required: true,
    filter: true,
    rules: {
      required: 'El perfil es requerido.'
    }
  }
  useEffect(() => {
    setSelectedProfile(methods.watch('profile'))
  }, [methods.watch('profile')])
  useEffect(() => {
    if (disabled) methods.setValue('profile', 'Consultor de datos')
  }, [])
  return (
    <>
      <div className={styles.CreateExternalUsers}>
        <Card>
          <div className={styles.CardExternal}>
            <p className={styles.title}>Generales</p>
            <div className={styles.Container}>
              <p className={styles.text}>Foto</p>
              <div className={styles.externalUsers}>
                <ChargeImg
                  setImgLogo={setImgLogo}
                />
                <div className={styles.form}>
                  <div className='top1' style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
                    <div style={{ width: '248px' }}>
                      <InputText {...InputCode} />
                    </div>
                    <div style={{ width: '248px' }}>
                      <InputText {...InputName} />
                    </div>
                    <div style={{ width: '248px' }}>
                      <InputText {...LastName} />
                    </div>
                    <div style={{ width: '248px' }}>
                      <InputText {...LastName2} />
                    </div>
                    <div style={{ width: '248px' }}>
                      <InputText {...inputDate} />
                    </div>
                  </div>
                  <div className='top2' style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
                    <div style={{ width: '248px' }}>
                      <InputText {...Inputrfc} />
                    </div>
                    <div style={{ width: '248px' }}>
                      <InputText {...InputCurp} />
                    </div>
                    <div style={{ width: '248px' }}>
                      <InputText {...InputNumber} />
                    </div>
                    <div style={{ width: '516px' }}>
                      <InputText {...InputSupplier} />
                    </div>
                  </div>
                  <div className='top3' style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'flex-end' }}>
                    <div style={{ width: '427px' }}>
                      <InputText {...InputJob} />
                    </div>
                    <div style={{ width: '427px' }}>
                      <InputText {...InputEmail} />
                    </div>
                    <div style={{ width: '200px' }}>
                      {disabled || create ?
                        ''
                        :
                        <Button
                          variant='primary'
                          label='Recuperar contraseña'
                          fontSize='14px'
                          type='button'
                          onClick={() => modals()}
                        />}
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'flex-end' }}>
                    <div style={{ width: '372px' }}>
                      <Dropdown {...dropdownCompany} />
                    </div>
                    <div style={{ width: '248px' }}>
                      <Dropdown {...dropdownProfile} />
                    </div>
                    {selectedProfile &&
                      <div style={{ width: '170px' }}>
                        <Button
                          variant='secondary'
                          type='button'
                          label='Consultar permisos'
                          onClick={() => handleSubmit2()}
                        />
                      </div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
        {OpenModal2 &&
          <ShowPermissions setOpenModal2={setOpenModal2} title={OpenModal2Title} subtitle='Consultor de ventas' disabled={OpenModal2Title.includes('Ver')} />}
      </div>
    </>
  )
}
