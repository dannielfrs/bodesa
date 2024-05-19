// 'use client'

import React, { useEffect } from 'react'
import styles from './CreateFields.module.scss'
import { HeaderViews } from '@/components/molecules/HeaderViews/HeaderViews'
import { useRouter } from 'next/router'
import { InputText } from '@/components/molecules/InputText/InputText/InputText'
import { FormHookProvider } from '@/components/layouts/Form/FormHookProvider'
import { useForm } from 'react-hook-form'
import { Card } from '@/components/molecules/Card/Card'
import { PostField, PutField } from '@/services/Field'
import { useRootContext } from '@/Provider/RootProvider'
import { useGetDataRefresh } from '@/customHooks/useGeneral'  

export default function CreateFields ({ title, disabled, edit }) {
  const router = useRouter()
  const { id } = router.query
  const methods = useForm()
  const { selectCompany } = useRootContext()
  const show = useGetDataRefresh(`ocr/fields/${id}`, id)

  const onSubmit = (data) => {
    if (!id) PostField('ocr/fields', selectCompany, data, router)
    if (id) PutField(`ocr/fields/${id}`, selectCompany, data, router)
  }
  const InputName = {
    name: 'name',
    type: 'text',
    label: 'Nombre',
    placeholder: 'Nombre',
    readOnly: disabled,
    obligatory: true,
    required: true,
    rules: {
      required: 'El nombre es requerido.'
    }
  }
  const InputDescription = {
    name: 'description',
    type: 'text',
    label: 'Descripción',
    placeholder: 'Descripción',
    readOnly: disabled,
    optional: true
  }

  useEffect(() => {
    if (id && !show.loading) {
      methods.setValue('name', show.data.data.record.name)
      methods.setValue('description', show.data.data.record.description)
    }
  }, [id, show.loading])

  return (
    <>
      <FormHookProvider methods={methods} method='POST' onSubmit={onSubmit}>
        <div className={styles.CreateFields}>
          <HeaderViews
            title={title}
            onClick={() => router.push('/system/ocr/fields')}
            disabled={disabled}
          />
          <Card>
            <div className={styles.container}>
              <div style={{ width: '496px' }}>
                <InputText {...InputName} />
              </div>
              <div style={{ width: '1073px' }}>
                <InputText {...InputDescription} />
              </div>
            </div>
          </Card>
        </div>
      </FormHookProvider>
    </>
  )
}
