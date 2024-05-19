// 'use client'

import React from 'react'
import styles from './CreateTemplates.module.scss'
import { HeaderViews } from '@/components/molecules/HeaderViews/HeaderViews'
import { Card } from '@/components/molecules/Card/Card'
import { FormHookProvider } from '@/components/layouts/Form/FormHookProvider'
import { useForm } from 'react-hook-form'
import { InputText } from '@/components/molecules/InputText/InputText/InputText'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'
import { Checkbox } from '@/components/molecules/Checkbox'
import { useRouter } from 'next/navigation'
import { useRootContext } from '@/Provider/RootProvider'
import { createItemService } from '@/services/ocr/templates/templates'
import { usePostDataRefresh } from '@/customHooks/useGeneral'

export default function CreateTemplates ({ title }) {
  const router = useRouter()
  const methods = useForm()

  const { selectCompany } = useRootContext()
  const documentTypeOptions = usePostDataRefresh('ocr/general/select/document-types', selectCompany)
  const establishmentOptions = usePostDataRefresh('ocr/general/select/establishments', selectCompany)

  const onSubmit = (data) => {
    createItemService('ocr/templates', selectCompany, data, router)
  }

  const InputCode = {
    name: 'code',
    type: 'text',
    label: 'Código',
    placeholder: 'Código',
    required: true,
    rules: { required: true }
  }

  const InputName = {
    name: 'name',
    type: 'text',
    label: 'Nombre',
    placeholder: 'Nombre',
    required: true,
    rules: { required: true }
  }

  const dropdownType = {
    name: 'documentType',
    label: 'Tipo',
    placeholder: '-Selecciona una opción-',
    options: documentTypeOptions.data?.data?.records,
    optionLabel: 'text',
    optionValue: 'id',
    filter: true,
    required: true,
    rules: { required: true }
  }

  const dropdownEstablishment = {
    name: 'establishment',
    label: 'Establecimiento',
    placeholder: '-Selecciona una opción-',
    options: establishmentOptions.data?.data?.records,
    optionLabel: 'text',
    optionValue: 'id',
    filter: true,
    required: true,
    rules: { required: true }
  }

  return (
    <FormHookProvider methods={methods} method='POST' onSubmit={onSubmit}>
      <div className={styles.CreateTemplates}>
        <HeaderViews
          title={title}
          onClick={() => router.push('/system/ocr/templates')}
        />
        <Card>
          <div style={{ padding: '20px', display: 'flex', flexDirection: 'row', gap: '20px' }}>
            <div style={{ width: '200px' }}>
              <InputText {...InputCode} />
            </div>
            <div style={{ width: '540px' }}>
              <InputText {...InputName} />
            </div>
            <div style={{ width: '250px' }}>
              <Dropdown {...dropdownType} />
            </div>
            <div style={{ width: '370px' }}>
              <Dropdown {...dropdownEstablishment} />
            </div>
            <Checkbox
              name='save_scan'
              label='Guardar escaneo'
              defaultValue={false}
            />
          </div>
        </Card>
      </div>
    </FormHookProvider>
  )
}
