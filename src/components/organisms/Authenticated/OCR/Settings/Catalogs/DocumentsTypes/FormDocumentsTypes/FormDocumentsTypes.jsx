// 'use client'

import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import React, { useEffect } from 'react'
import styles from './FormDocumentsTypes.module.scss'
import { FormHookProvider } from '@/components/layouts/Form/FormHookProvider'
import { HeaderViews } from '@/components/molecules/HeaderViews/HeaderViews'
import { InputText } from '@/components/molecules/InputText/InputText/InputText'
import { Card } from '@/components/molecules/Card/Card'
import { useRootContext } from '@/Provider/RootProvider'
import { useGetDataRefresh } from '@/customHooks/useGeneral'
import { PostDocumentType, PutDocumentType } from '@/services/Settings/documentType'

export default function FormDocumentsTypes ({ title, disabled }) {
  const router = useRouter()
  const { id } = router.query
  const methods = useForm()
  const { selectCompany } = useRootContext()
  const show = useGetDataRefresh(`ocr/configurations/catalogs/document-types/${id}`, id)

  const onSubmit = (data) => {
    if (!id) PostDocumentType('ocr/configurations/catalogs/document-types', selectCompany, data.name, router)
    if (id) PutDocumentType(`ocr/configurations/catalogs/document-types/${id}`, selectCompany, data.name, router)
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

  useEffect(() => {
    if (id && !show.loading) methods.setValue('name', show.data.data.record.name)
  }, [id, show.loading])

  return (
    <>
      <FormHookProvider methods={methods} method='POST' onSubmit={onSubmit}>
        <div className={styles.CreateTemplates}>
          <HeaderViews
            title={title}
            onClick={() => router.push('/system/ocr/settings/catalogs/documents-types')}
            disabled={disabled}
          />
          <Card className={styles.card_establishments}>
            <div className={styles.cont_inputs}>
              <div className={styles.w372}>
                <InputText {...InputName} />
              </div>
            </div>
          </Card>
        </div>
      </FormHookProvider>
    </>
  )
}
