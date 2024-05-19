import React, { useEffect, useState } from 'react'
import styles from './Generals.module.scss'
import ChargeImg from '@/components/molecules/ChargeImg/ChargeImg'
import { Card } from '@/components/molecules/Card/Card'
import { InputText } from '@/components/molecules/InputText/InputText/InputText'
import { Button } from '@/components/molecules/Button'
import { DataTable } from '@/components/molecules/DataTable/DataTable'
import dataTable from '@/services/fake/authenticated/ConfigurationManagement/Settings/InternalUsers/Generals/dataTable'
import { StatusColumn } from '@/components/molecules/StatusColumn/StatusColumn'
import { ActionsBody } from '@/components/molecules/ActionsBody/ActionsBody'
import ShowPermissions from './ShowPermissions/ShowPermissions'
import { useForm } from 'react-hook-form'
import user from '@/../public/images/Fotousuario.png'
import { Alert, Loading, Success } from '@/utils/Loading'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'

export default function Generals ({ disabled, password }) {
  const router = useRouter()
  const methods = useForm()
  const [setImgLogo] = useState(null)
  const [branchs, setBranchs] = useState([])
  const [search] = useState([])
  const statusColumnTemplate = (rowData) => {
    return <StatusColumn status={rowData.status} />
  }
  const [OpenModal2Title, setOpenModal2Title] = useState('Nuevo documento')
  const [OpenModal2, setOpenModal2] = useState(false)
  const handleActive = (setBranchs, id) => {
    setBranchs((data) => {
      const copy = [...data]
      const index = copy.findIndex(e => e.id === id)
      if (index !== -1) {
        copy[index].status = !copy[index].status
        return copy
      }
    })
  }
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
  const AcctionsBodyTempleate = (rowData) => {
    return (
      <ActionsBody
        id={rowData.id}
        actionShow
        rowDataActive={rowData.status}
        setBranchs={setBranchs}
        // onDelete={OnDelete}
        handleActive={handleActive}
        nameModal='detalle de permisos del perfil -'
        setOpenModal={setOpenModal2}
        setOpenModalTitle={setOpenModal2Title}
      />
    )
  }
  const InputCode = {
    name: 'code',
    type: 'text',
    label: 'Código',
    placeholder: 'Código',
    obligatory: true,
    required: true,
    readOnly: disabled,
    rules: {
      required: 'El código es requerido.'
    }
  }
  const InputName = {
    name: 'name',
    type: 'text',
    label: 'Nombre',
    placeholder: 'Nombre',
    readOnly: true,
    obligatory: false,
    required: false
  }
  const InputLastName = {
    name: 'lastname',
    type: 'text',
    label: 'Apellido paterno',
    placeholder: 'Apellido paterno',
    readOnly: true,
    obligatory: false,
    required: false
  }
  const InputLastName2 = {
    name: 'lastname2',
    type: 'text',
    label: 'Apellido materno',
    placeholder: 'Apellido materno',
    readOnly: true,
    obligatory: false,
    required: false
  }
  const InputRfc = {
    name: 'rfc',
    type: 'text',
    label: 'RFC',
    placeholder: 'RFC',
    readOnly: true,
    obligatory: false,
    required: false
  }
  const InputNumber = {
    name: 'number',
    type: 'text',
    label: 'Número celular',
    placeholder: 'Número celular',
    readOnly: true,
    obligatory: false,
    required: false
  }
  const InputEmail = {
    name: 'email',
    type: 'text',
    label: 'Correo electrónico',
    placeholder: 'Correo electrónico',
    readOnly: true,
    obligatory: false,
    required: false
  }
  const dashboardColumns = [
    {
      field: 'company',
      header: 'Empresa',
      sortable: true,
      w: '179px',
      h: '50px'
    },
    {
      field: 'store',
      header: 'Tienda',
      sortable: true,
      w: '249px',
      h: '50px'
    },
    {
      field: 'dep',
      header: 'Departamento',
      sortable: true,
      w: '280px',
      h: '50px'
    },
    {
      field: 'job',
      header: 'Puesto',
      sortable: true,
      w: '280px',
      h: '50px'
    },
    {
      field: 'profile',
      header: 'Perfil',
      sortable: true,
      w: '231px',
      h: '50px'
    },
    {
      field: 'status',
      header: 'Estatus',
      body: statusColumnTemplate,
      sortable: true,
      w: '180px',
      h: '51px'
    },
    {
      field: 'actions',
      header: 'Acciones',
      body: AcctionsBodyTempleate,
      sortable: true,
      w: '201px',
      h: '51px'
    }
  ]

  const currentFiles = user

  useEffect(() => {
    const fetchData = async () => {
      const data = await dataTable(10)
      setBranchs(data)
    }
    fetchData()
  }, [])
  return (
    <>
      <div className={styles.Generals}>
        <Card>
          <div className={styles.ContData}>
            <p className={styles.title}>Generales</p>
            <div className={styles.ContInfo}>
              <div className={styles.ContPhoto}>
                <p className={styles.text}>Foto</p>
                <ChargeImg
                  setImgLogo={setImgLogo}
                  defaultImg={currentFiles}
                  disabled='true'
                />
              </div>
              <div className={styles.Data}>
                <div className={styles.top}>
                  <div style={{ width: '248px' }}>
                    <InputText {...InputCode} />
                  </div>
                  <div style={{ width: '248px' }}>
                    <InputText {...InputName} />
                  </div>
                  <div style={{ width: '248px' }}>
                    <InputText {...InputLastName} />
                  </div>
                  <div style={{ width: '248px' }}>
                    <InputText {...InputLastName2} />
                  </div>
                  <div style={{ width: '248px' }}>
                    <InputText {...InputRfc} />
                  </div>
                </div>
                <div className={styles.bottom}>
                  <div style={{ width: '248px' }}>
                    <InputText {...InputNumber} />
                  </div>
                  <div style={{ width: '516px' }}>
                    <InputText {...InputEmail} />
                  </div>
                  {!disabled &&
                    <div style={{ width: '190px' }}>
                      <Button
                        variant='primary'
                        label='Recuperar contraseña'
                        fontSize='14px'
                        type='button'
                        onClick={() => modals()}
                      />
                    </div>}
                </div>
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <div className={styles.ContJobs}>
            <p className={styles.title}>Puestos</p>
            <div className='tableUser'>
              <DataTable
                columns={dashboardColumns}
                data={branchs}
                loading={false}
                selectionMode='single'
                variant='primary'
                search={search}
              />
            </div>
            {OpenModal2 &&
              <ShowPermissions setOpenModal2={setOpenModal2} title={OpenModal2Title} subtitle='Gestión de perfiles' methods={methods} disabled={OpenModal2Title.includes('Ver')} />}
          </div>
        </Card>
      </div>
    </>
  )
}
