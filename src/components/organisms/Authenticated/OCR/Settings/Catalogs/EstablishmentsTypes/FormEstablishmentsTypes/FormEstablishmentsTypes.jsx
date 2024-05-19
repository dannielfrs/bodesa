// 'use client'

import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import React, { useEffect } from 'react'
import styles from './FormEstablishmentsTypes.module.scss'
import { FormHookProvider } from '@/components/layouts/Form/FormHookProvider'
import { HeaderViews } from '@/components/molecules/HeaderViews/HeaderViews'
import { InputText } from '@/components/molecules/InputText/InputText/InputText'
import { Card } from '@/components/molecules/Card/Card'
import { PostEstablishmentType, PutEstablishmentType } from '@/services/Settings/establishmentType'
import { useRootContext } from '@/Provider/RootProvider'
import { useGetDataRefresh } from '@/customHooks/useGeneral'

export default function FormEstablishmentsTypes ({ title, disabled }) {
  const router = useRouter()
  const { id } = router.query
  const methods = useForm()
  const { selectCompany } = useRootContext()
  const show = useGetDataRefresh(`ocr/configurations/catalogs/establishment-types/${id}`, id)

  const onSubmit = (data) => {
    if (!id) PostEstablishmentType('ocr/configurations/catalogs/establishment-types', selectCompany, data.name, router)
    if (id) PutEstablishmentType(`ocr/configurations/catalogs/establishment-types/${id}`, selectCompany, data.name, router)
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
            onClick={() => router.push('/system/ocr/settings/catalogs/establishments-types')}
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
