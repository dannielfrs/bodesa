// 'use client'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from './Scanner.module.scss'
import { FormHookProvider } from '@/components/layouts/Form/FormHookProvider'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'
import { Button } from '@/components/molecules/Button'
import { TabPanel, TabView } from 'primereact/tabview'
import { ImageAnnotation } from '@/components/molecules/ImageAnnotation/ImageAnnotation'
import { ImageTemplateUpload } from '@/components/molecules/Upload/ImageTemplateUpload/ImageTemplateUpload'
import { useRootContext } from '@/Provider/RootProvider'
import { useGetDataRefresh, usePostDataRefresh, usePostTemplateCodes, usePostVersions } from '@/customHooks/useGeneral'
import { sendScanner } from '@/services/ocr/scanner/scanner'
import { downloadFile } from '@/utils/utilities'

export default function Scanner() {
  const methods = useForm()
  const { setValue } = methods
  const [activeIndex, setActiveIndex] = useState(0)
  const [frontFields, setFrontFields] = useState([])
  const [frontImageUrl, setFrontImageUrl] = useState(null)
  const [frontImageFile, setFrontImageFile] = useState(null)
  const [frontXmlData, setFrontXmlData] = useState(null)
  const [backFields, setBackFields] = useState([])
  const [backImageUrl, setBackImageUrl] = useState(null)
  const [backImageFile, setBackImageFile] = useState(null)
  const [backXmlData, setBackXmlData] = useState(null)

  const { selectCompany } = useRootContext()
  const documentTypeOptions = usePostDataRefresh('ocr/general/select/document-types', selectCompany)
  const establishmentOptions = usePostDataRefresh('ocr/general/select/establishments', selectCompany)
  const codeOptions = usePostTemplateCodes('ocr/general/select/templates', selectCompany, methods.watch('establishment'), methods.watch('documentType'))
  const versionOptions = usePostVersions(`ocr/general/select/templates/${methods.watch('code')}/versions`, selectCompany, methods.watch('code'))
  const { data } = useGetDataRefresh(`ocr/templates/versions/${methods.watch('version')}`, methods.watch('version'))

  useEffect(() => {
    if (data.data?.record) {
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
    if (activeIndex === 0) sendScanner('ocr/scanner', selectCompany, data, frontImageFile, setFrontXmlData, '1')
    else sendScanner('ocr/scanner', selectCompany, data, backImageFile, setBackXmlData, '0')
  }

  useEffect(() => {
    if (activeIndex === 1) {
      setValue('fileupload_front', '')
    } else {
      setValue('fileupload_back', '')
    }
  }, [activeIndex])

  return (
    <FormHookProvider methods={methods} onSubmit={onSubmit}>
      <div className={styles.section}>
        <div className={styles.section_header}>
          <div className={styles.section_title}>Escáner</div>
          <div style={{ width: '300px' }}>
            <Dropdown
              name='establishment'
              placeholder='-Selecciona establecimiento-'
              options={establishmentOptions.data?.data?.records}
              optionLabel='text'
              optionValue='id'
              filter
              variant='primary'
              height='45px'
              rules={{ required: false }}
            />
          </div>
          <div style={{ width: '250px' }}>
            <Dropdown
              name='documentType'
              placeholder='-Selecciona tipo documento-'
              options={documentTypeOptions.data?.data?.records}
              optionLabel='text'
              optionValue='id'
              readOnly={!methods.watch('establishment')}
              filter
              variant='primary'
              height='45px'
              rules={{ required: false }}
            />
          </div>
          <div style={{ width: '300px' }}>
            <Dropdown
              name='code'
              placeholder='-Selecciona código-'
              options={codeOptions.data?.data?.records}
              optionLabel='text'
              optionValue='id'
              readOnly={!methods.watch('documentType')}
              filter
              variant='primary'
              height='45px'
              rules={{ required: false }}
            />
          </div>
          <div style={{ width: '220px' }}>
            <Dropdown
              name='version'
              placeholder='-Selecciona versión-'
              options={versionOptions.data?.data?.records}
              optionLabel='text'
              optionValue='id'
              readOnly={!methods.watch('code')}
              filter
              variant='primary'
              height='45px'
              rules={{ required: false }}
            />
          </div>
        </div>
        <div className={styles.section_body}>
          {methods.watch('version') &&
            <>
              <div className={styles.section_tabbutton}>
                <div style={{ width: '90px' }}>
                  <Button
                    type='button'
                    label='Frente'
                    onClick={() => setActiveIndex(0)}
                    variant={activeIndex === 0 ? 'primary' : 'tabBtn'}
                    height='35px'
                  />
                </div>
                <div style={{ width: '90px' }}>
                  <Button
                    type='button'
                    label='Reverso'
                    onClick={() => setActiveIndex(1)}
                    variant={activeIndex === 1 ? 'primary' : 'tabBtn'}
                    height='35px'
                  />
                </div>
              </div>
              <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                <TabPanel className={styles.section_row}>
                  <div className={styles.section_column}>
                    <div className={styles.section_label}>Plantilla</div>
                    <ImageAnnotation
                      src={frontImageUrl || '/images/gray_background.png'}
                      annotations={frontFields}
                      disableAnnotation
                      width='409px'
                    />
                  </div>
                  <div className={styles.section_column}>
                    <ImageTemplateUpload
                      name='fileupload_front'
                      label='Documento'
                      accept='image/png, image/jpg, image/jpeg'
                      defaultImage={frontImageFile ? URL.createObjectURL(frontImageFile) : null}
                      setImageFile={setFrontImageFile}
                      width='100%'
                      height={frontImageFile ? 'auto' : '500px'}
                      rules={{ required: false }}
                    />
                  </div>
                  <div className={styles.section_group}>
                    <div style={{ width: '100px' }}>
                      <Button
                        label='Escanear'
                        variant='primary'
                        height='45px'
                      />
                    </div>
                    {frontXmlData &&
                      <>
                        <div>Documento</div>
                        <div className={styles.section_download}>
                          <div>{frontXmlData.name}</div>
                          <div>
                            <Button
                              type='button'
                              icon='i-download'
                              onClick={() => window.open(frontXmlData.url, '_blank')}
                              tooltip='Descargar'
                              tooltipOptions={{ position: 'top' }}
                              variant='button_edit'
                            />
                          </div>
                        </div>
                      </>}
                  </div>
                </TabPanel>
                {backImageUrl &&
                  <TabPanel className={styles.section_row}>
                    <div className={styles.section_column}>
                      <div className={styles.section_label}>Plantilla</div>
                      <ImageAnnotation
                        src={backImageUrl || '/images/gray_background.png'}
                        annotations={backFields}
                        disableAnnotation
                        width='409px'
                      />
                    </div>
                    <div className={styles.section_column}>
                      <ImageTemplateUpload
                        name='fileupload_back'
                        label='Documento'
                        accept='image/png, image/jpg, image/jpeg'
                        defaultImage={backImageFile ? URL.createObjectURL(backImageFile) : null}
                        setImageFile={setBackImageFile}
                        width='100%'
                        height={backImageFile ? 'auto' : '500px'}
                        rules={{ required: false }}
                      />
                    </div>
                    <div className={styles.section_group}>
                      <div style={{ width: '100px' }}>
                        <Button
                          label='Escanear'
                          variant='primary'
                          height='45px'
                        />
                      </div>
                      {backXmlData &&
                        <>
                          <div>Documento</div>
                          <div className={styles.section_download}>
                            <div>{backXmlData.name}</div>
                            <div>
                              <Button
                                type='button'
                                icon='i-download'
                                onClick={() => downloadFile(backXmlData.url, 'application/xml', backXmlData.name)}
                                tooltip='Descargar'
                                tooltipOptions={{ position: 'top' }}
                                variant='button_edit'
                              />
                            </div>
                          </div>
                        </>}
                    </div>
                  </TabPanel>}
              </TabView>
            </>}
        </div>
      </div>
    </FormHookProvider>
  )
}
