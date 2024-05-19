import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from './ModalDocument.module.scss'
import { useForm } from 'react-hook-form'
import { FormHookProvider } from '@/components/layouts/Form/FormHookProvider'
import { Button } from '@/components/molecules/Button'
import { InputText } from '@/components/molecules/InputText/InputText/InputText'
import { InputTextArea } from '@/components/molecules/InputTextArea'
import { FieldType } from './FieldType/FieldType'
import { ImageAnnotation } from '@/components/molecules/ImageAnnotation/ImageAnnotation'
import { ImageTemplateUpload } from '@/components/molecules/Upload/ImageTemplateUpload/ImageTemplateUpload'
import { InputChips } from '@/components/molecules/InputChips/InputChips'
import { useRootContext } from '@/Provider/RootProvider'
import { useGetDataRefresh, usePostDataRefresh } from '@/customHooks/useGeneral'
import { createItemService, updateItemService } from '@/services/ocr/templates/versions'

export default function ModalDocument({ setOpenModal2, versionId, showMode, editMode, createMode }) {
  const router = useRouter()
  const { id } = router.query
  const methods = useForm()
  const { setValue } = methods
  const [activeIndex, setActiveIndex] = useState(0)
  const [frontFields, setFrontFields] = useState([])
  const [frontImageFile, setFrontImageFile] = useState(null)
  const [frontImageUrl, setFrontImageUrl] = useState(null)
  const [frontDisableAnnotation, setFrontDisableAnnotation] = useState(true)
  const [frontCurrentAnnotation, setFrontCurrentAnnotation] = useState(null)
  const [backFields, setBackFields] = useState([])
  const [backImageFile, setBackImageFile] = useState(null)
  const [backImageUrl, setBackImageUrl] = useState(null)
  const [backDisableAnnotation, setBackDisableAnnotation] = useState(true)
  const [backCurrentAnnotation, setBackCurrentAnnotation] = useState(null)

  const { selectCompany } = useRootContext()
  const fieldTypeOptions = usePostDataRefresh('ocr/general/select/fields', selectCompany)
  const { data, loading } = useGetDataRefresh(`ocr/templates/versions/${versionId}`, versionId)

  useEffect(() => {
    if ((editMode || showMode) && data.data?.record) {
      for (const propertyName in data.data.record) {
        if (propertyName === 'text_for_validation') {
          setValue(propertyName, data.data.record[propertyName])
        } else {
          setValue(propertyName, data.data.record[propertyName])
        }
      }
      const frontFieldsData = data.data.record.front.fields.map((item, index) => (
        { ...item, data: { ...item.data, id: index + 1 } }
      ))
      setFrontFields(frontFieldsData)
      const backFieldsData = data.data.record.back.fields.map((item, index) => (
        { ...item, data: { ...item.data, id: index + 1 } }
      ))
      setBackFields(backFieldsData)
      setFrontImageUrl(data.data.record.front.document.url)
      setBackImageUrl(data.data.record.back.document?.url)
    }
  }, [data])

  const onSubmit = (data) => {
    const frontFieldsFiltered = frontFields.filter((item) => item.geometry !== undefined)
    if (frontFieldsFiltered.length > 0) {
      if (versionId) updateItemService(`ocr/templates/versions/${versionId}`, id, data, frontFields, frontImageFile, backFields, backImageFile, setOpenModal2)
      else createItemService('ocr/templates/versions', id, data, frontFields, frontImageFile, backFields, backImageFile, setOpenModal2)
    }
  }

  const handleAddField = () => {
    if (activeIndex === 0) {
      const item = {
        data: {
          field: {},
          id: frontFields.length + 1,
          text: ''
        }
      }
      setFrontFields([...frontFields, item])
    } else {
      const item = {
        data: {
          field: {},
          id: backFields.length + 1,
          text: ''
        }
      }
      setBackFields([...backFields, item])
    }
  }

  const handleDeleteField = (index) => {
    if (activeIndex === 0) {
      const copy = [...frontFields]
      if (copy[index].data.id === frontCurrentAnnotation?.data.id) {
        setFrontCurrentAnnotation(null)
      }
      if (index !== -1) {
        copy.splice(index, 1)
        copy.map((item, i) => (
          item.data.id = i + 1
        ))
        setFrontFields(copy)
      }
    } else {
      const copy = [...backFields]
      if (copy[index].data.id === backCurrentAnnotation?.data.id) {
        setBackCurrentAnnotation(null)
      }
      if (index !== -1) {
        copy.splice(index, 1)
        copy.map((item, i) => (
          item.data.id = i + 1
        ))
        setBackFields(copy)
      }
    }
  }

  const handleOnChangeField = (value, index) => {
    if (activeIndex === 0) {
      const copy = [...frontFields]
      copy[index].data.field.id = value
      copy[index].data.text = fieldTypeOptions.data.data.records.filter((item) => item.id === value)[0].text
      setFrontFields(copy)
    } else {
      const copy = [...backFields]
      copy[index].data.field.id = value
      copy[index].data.text = fieldTypeOptions.data.data.records.filter((item) => item.id === value)[0].text
      setBackFields(copy)
    }
  }

  const handleSelectAnnotation = (item) => {
    if (activeIndex === 0) {
      setFrontCurrentAnnotation(item)
    } else {
      setBackCurrentAnnotation(item)
    }
  }

  const handleDeleteImage = () => {
    if (activeIndex === 0) {
      setFrontImageFile(null)
      setFrontImageUrl(null)
      setValue('fileupload_front', '')
    } else {
      setBackImageFile(null)
      setBackImageUrl(null)
      setValue('fileupload_back', '')
    }
  }

  const tabs = [
    { id: 0, label: 'Frente' },
    { id: 1, label: 'Reverso' }
  ]

  useEffect(() => {
    if (frontCurrentAnnotation) {
      setFrontDisableAnnotation(false)
    } else {
      setFrontDisableAnnotation(true)
    }
  }, [frontCurrentAnnotation])

  useEffect(() => {
    if (backCurrentAnnotation) {
      setBackDisableAnnotation(false)
    } else {
      setBackDisableAnnotation(true)
    }
  }, [backCurrentAnnotation])

  useEffect(() => {
    if (frontImageFile) setFrontImageUrl(URL.createObjectURL(frontImageFile))
  }, [frontImageFile])

  useEffect(() => {
    if (backImageFile) setBackImageUrl(URL.createObjectURL(backImageFile))
  }, [backImageFile])

  return (
    <FormHookProvider methods={methods} method='POST' onSubmit={onSubmit}>
      <div className={styles.Background}>
        <div className={styles.ModalDocument}>
          <div className={styles.header}>
            <p className={styles.titleDocument}>Documento</p>
            <div className={styles.tabsButton}>
              <div className={styles.tabsBtns}>
                {tabs.map((e) => {
                  return (
                    <div key={e.id} className={styles.cont_tabs}>
                      <Button
                        type='button'
                        label={e.label}
                        onClick={() => setActiveIndex(e.id)}
                        className={activeIndex === e.id ? styles.active : ''}
                        variant={activeIndex === e.id ? 'primary' : 'tabBtn'}
                        height='35px'
                      />
                    </div>
                  )
                })}
              </div>
              <div className={styles.buttons}>
                <Button
                  type='button'
                  label='Cerrar'
                  variant='secondary'
                  height='35px'
                  onClick={() => setOpenModal2(false)}
                />
                {!showMode &&
                  <Button
                    label='Guardar'
                    variant='primary'
                    height='35px'
                  />}
              </div>
            </div>
          </div>
          <div className={styles.containers}>
            <div className={styles.inputs} style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '23px' }}>
              <div style={{ width: '445px' }}>
                <InputText
                  name='version'
                  label='Versión'
                  placeholder='Versión'
                  keyfilter='alphanum'
                  readOnly={showMode}
                  loading={!createMode && loading}
                  required
                  rules={{ required: true }}
                />
              </div>
              <div style={{ width: '445px' }}>
                <InputChips
                  name='text_for_validation'
                  label='Texto para validación'
                  placeholder='Texto para validación'
                  variant='primary'
                  readOnly={showMode}
                  loading={!createMode && loading}
                  height='285px'
                  required
                  rules={{ required: true }}
                />
              </div>
              <div style={{ width: '445px' }}>
                <InputTextArea
                  name='observations'
                  label='Observaciones'
                  placeholder='Observaciones'
                  rows={5}
                  variant='primary'
                  readOnly={showMode}
                  loading={!createMode && loading}
                  height='285px'
                  width='445px'
                  optional
                  rules={{ required: false }}
                />
              </div>
            </div>
            <div className={styles.stacking}>
              <div className={styles.stacking_buttons}>
                {!(showMode || (activeIndex === 0 && !frontImageUrl) || (activeIndex === 1 && !backImageUrl)) &&
                  <>
                    <div style={{ width: '160px' }}>
                      <Button
                        variant='white'
                        label='Eliminar imagen'
                        type='button'
                        height='35px'
                        width='145px'
                        onClick={handleDeleteImage}
                      />
                    </div>
                    <div style={{ width: '150px' }}>
                      <Button
                        variant='white'
                        label='Agregar campo'
                        type='button'
                        height='35px'
                        width='145px'
                        onClick={handleAddField}
                      />
                    </div>
                  </>}
              </div>
              <div className={styles.type}>
                <p className={styles.title}>Tipo de campo</p>
                <div className={styles.m_inputs}>
                  {activeIndex === 0 &&
                    frontFields.map((item, index) => (
                      <FieldType
                        key={item.data.id}
                        id={item.data.id}
                        selectedField={item.data.field?.id}
                        onChangeField={(e) => handleOnChangeField(e.value, index)}
                        fieldTypeOptions={fieldTypeOptions.data?.data?.records}
                        onClickSelect={() => handleSelectAnnotation(item)}
                        handleDelete={() => handleDeleteField(index)}
                        readOnly={showMode}
                      />
                    ))}
                  {activeIndex === 1 &&
                    backFields.map((item, index) => (
                      <FieldType
                        key={item.data.id}
                        id={item.data.id}
                        selectedField={item.data.field?.id}
                        onChangeField={(e) => handleOnChangeField(e.value, index)}
                        fieldTypeOptions={fieldTypeOptions.data?.data?.records}
                        onClickSelect={() => handleSelectAnnotation(item)}
                        handleDelete={() => handleDeleteField(index)}
                        readOnly={showMode}
                      />
                    ))}
                </div>
              </div>
            </div>
            <div className={styles.image}>
              <div className={activeIndex === 1 ? styles.section_hide : ''}>
                {frontImageUrl
                  ? (
                    <ImageAnnotation
                      src={frontImageUrl}
                      annotations={frontFields}
                      setAnnotations={setFrontFields}
                      currentAnnotation={frontCurrentAnnotation}
                      disableAnnotation={frontDisableAnnotation}
                      width='605px'
                    />)
                  : (
                    <ImageTemplateUpload
                      name='fileupload_front'
                      accept='image/png, image/jpg, image/jpeg'
                      setImageFile={setFrontImageFile}
                      disabled={showMode}
                      loading={!createMode && loading}
                      width='100%'
                      height='740px'
                      rules={{ required: true }}
                    />)}
              </div>
              <div className={activeIndex === 0 ? styles.section_hide : ''}>
                {backImageUrl
                  ? (
                    <ImageAnnotation
                      src={backImageUrl}
                      annotations={backFields}
                      setAnnotations={setBackFields}
                      currentAnnotation={backCurrentAnnotation}
                      disableAnnotation={backDisableAnnotation}
                      width='605px'
                    />)
                  : (
                    <ImageTemplateUpload
                      name='fileupload_back'
                      accept='image/png, image/jpg, image/jpeg'
                      setImageFile={setBackImageFile}
                      disabled={showMode}
                      loading={!createMode && loading}
                      width='100%'
                      height='740px'
                      rules={{ required: false }}
                    />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormHookProvider>
  )
}
