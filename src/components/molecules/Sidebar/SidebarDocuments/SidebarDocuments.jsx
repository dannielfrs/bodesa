import { Sidebar } from '@/components/atoms/Sidebar'
import { useMemo, useState } from 'react'
import styles from './styles.module.scss'
import { Button } from '@/components/molecules/Button'
import { InputText } from '@/components/molecules/InputText/InputText/InputText'
import { Checkbox } from '@/components/molecules/Checkbox/Checkbox/Checkbox'
import { FileUpload } from '@/components/molecules/Upload/FileUpload/FileUpload'
import logo from '@/../public/images/logo_dark.svg'

export const SidebarDocuments = ({
  visible,
  onHide,
  createMode,
  showMode,
  editMode,
  className = ''
}) => {
  const [applyValidity, setApplyValidity] = useState(false)
  const loadingData = false

  const currentFiles = [
    { objectURL: '', name: 'documento.pdf', size: 15000, type: 'application/pdf' },
    { objectURL: logo, name: 'imagen.svg', size: 7000, type: 'image/svg' }
  ]

  const inputTextName = useMemo(() => ({
    name: 'doc_name',
    label: 'Nombre',
    placeholder: 'Nombre',
    readOnly: showMode,
    variant: 'primary',
    height: '45px',
    loading: loadingData,
    required: true,
    rules: { required: true }
  }), [showMode])

  const calendarDocDate = useMemo(() => ({
    name: 'doc_date',
    type: 'date',
    label: 'Fecha documento',
    readOnly: showMode,
    variant: 'primary',
    height: '45px',
    required: true,
    rules: { required: true }
  }), [showMode])

  const calendarValidityDate = useMemo(() => ({
    name: 'validity_date',
    type: 'date',
    label: 'Fecha vigencia',
    readOnly: showMode,
    disabled: applyValidity,
    variant: 'primary',
    height: '45px',
    required: true,
    rules: { required: true }
  }), [applyValidity, showMode])

  return (
    <Sidebar
      visible={visible}
      onHide={onHide}
      position='right'
      className={`${styles.sidebar} ${className}`}
    >
      <div className={styles.sidebar_container}>
        <div className={styles.sidebar_header}>
          <div>{createMode && 'Nuevo'}{showMode && 'Ver'}{editMode && 'Editar'} documento</div>
          <div className={styles.sidebar_header_buttons}>
            <div>
              <Button
                type='button'
                label='Cerrar'
                onClick={onHide}
                variant='secondary'
                height='35px'
              />
            </div>
            {!showMode &&
              <div>
                <Button
                  label='Guardar'
                  variant='primary'
                  height='35px'
                />
              </div>}
          </div>
        </div>
        <div className={styles.sidebar_body}>
          <div className={styles.form_row}>
            <InputText {...inputTextName} />
          </div>
          <div className={styles.form_row}>
            <div className={styles.form_col}>
              <InputText {...calendarDocDate} />
            </div>
            <div className={styles.form_col}>
              <InputText {...calendarValidityDate} />
            </div>
            <div className={styles.form_col} style={{ marginBottom: '12px' }}>
              <Checkbox
                name='apply_validity'
                label='No aplica vigencia'
                onChange={(e) => setApplyValidity(e.checked)}
                readOnly={showMode}
                variant='primary'
              />
            </div>
          </div>
          <div className={styles.form_row}>
            <FileUpload
              name='upload_files'
              value={(showMode || editMode) && currentFiles}
              label='Archivos'
              multiple
              readOnly={showMode}
            />
          </div>
        </div>
      </div>
    </Sidebar>
  )
}
