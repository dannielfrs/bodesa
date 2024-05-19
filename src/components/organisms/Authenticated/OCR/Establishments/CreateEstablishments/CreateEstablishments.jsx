// 'use client'

import { useEffect, useState } from 'react'
import styles from './CreateEstablishments.module.scss'
import { FormHookProvider } from '@/components/layouts/Form/FormHookProvider'
import { HeaderViews } from '@/components/molecules/HeaderViews/HeaderViews'
import { Card } from '@/components/molecules/Card/Card'
import { InputText } from '@/components/molecules/InputText/InputText/InputText'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'
import { useRootContext } from '@/Provider/RootProvider'
import { useGetDataRefresh, usePostDataRefresh } from '@/customHooks/useGeneral'
import { PostEstablishment, PutEstablishment } from '@/services/Establishment'
import { LogoUpload } from '@/components/molecules/Upload/LogoUpload/LogoUpload'

export default function CreateEstablishments ({ disabled, edit, title }) {
  const router = useRouter()
  const { id } = router.query
  const methods = useForm()
  const [imgLogo, setImgLogo] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)
  const { selectCompany } = useRootContext()
  const optionsEstableshmentType = usePostDataRefresh('ocr/general/select/establishment-types', selectCompany)
  const show = useGetDataRefresh(`ocr/establishments/${id}`, id)

  const onSubmit = (data) => {
    if (id) PutEstablishment(`ocr/establishments/${id}`, selectCompany, data, imgLogo, router)
    else PostEstablishment('ocr/establishments', selectCompany, data, imgLogo, router)
  }

  const InputName = {
    name: 'name',
    type: 'text',
    label: 'Nombre',
    placeholder: 'Nombre',
    readOnly: disabled,
    obligatory: true,
    required: true,
    rules: { required: 'El nombre es requerido.' }
  }

  const InputCode = {
    name: 'code',
    type: 'text',
    label: 'Código',
    placeholder: 'Código',
    readOnly: disabled,
    obligatory: true,
    required: true,
    rules: { required: 'El código es requerido.' }
  }

  const dropdownType = {
    name: 'type',
    label: 'Tipo',
    placeholder: '-Selecciona una opción-',
    loading: optionsEstableshmentType.loading,
    options: !optionsEstableshmentType.loading ? optionsEstableshmentType.data.data?.records : [],
    optionLabel: 'text',
    optionValue: 'id',
    readOnly: disabled,
    required: true,
    filter: true,
    rules: { required: 'El tipo es requerido.' }
  }

  useEffect(() => {
    if (id && !show.loading) {
      if (show.data.data) {
        methods.setValue('name', show.data.data.record.name)
        methods.setValue('code', show.data.data.record.code)
        methods.setValue('type', show.data.data.record.establishment_type.id)
        setImageUrl(show.data.data.record.logo.url)
      }
    }
  }, [id, show.loading])

  return (
    <FormHookProvider methods={methods} method='POST' onSubmit={onSubmit}>
      <div className={styles.CreateEstablishments}>
        <HeaderViews
          title={title}
          onClick={() => router.push('/system/ocr/establishments')}
          disabled={disabled}
        />
        <Card>
          <div className={styles.container}>
            <div className={styles.ContPhoto}>
              <LogoUpload
                name='fileupload_logo'
                label='Logotipo'
                accept='image/png'
                defaultImage={imageUrl}
                setImageFile={setImgLogo}
                disabled={disabled}
                width='150px'
                height='150px'
                rules={{ required: false }}
              />
            </div>
            <div style={{ width: '248px' }}>
              <InputText {...InputCode} />
            </div>
            <div style={{ width: '371px' }}>
              <InputText {...InputName} />
            </div>
            <div style={{ width: '248px' }}>
              <Dropdown {...dropdownType} />
            </div>
          </div>
        </Card>
      </div>
    </FormHookProvider>
  )
}
