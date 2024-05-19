import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'
import PropTypes from 'prop-types'
import { Toast } from 'primereact/toast'
import { FileUpload as FileUploadPrime } from 'primereact/fileupload'
import { Button } from '@/components/atoms/Button'
import { Skeleton } from 'primereact/skeleton'
import { Img } from '@/components/atoms/Img'
import pdf from '@/../public/images/icons/pdf.png'

export const FileUpload = ({
  name = '',
  value,
  label,
  placeholder,
  multiple,
  accept,
  url = '',
  maxFileSize,
  required,
  optional,
  readOnly = false,
  disabled = false,
  loading,
  className = '',
  typeUpload
}) => {
  const toast = useRef(null)
  const [totalSize, setTotalSize] = useState(0)
  const fileUploadRef = useRef(null)

  useEffect(() => {
    if (value) {
      fileUploadRef.current.setFiles(value)
    }
  }, [value])

  const onTemplateSelect = (e) => {
    let _totalSize = totalSize
    const files = e.files
    Object.keys(files).forEach((key) => {
      _totalSize += files[key].size || 0
    })
    setTotalSize(_totalSize)
  }

  const onTemplateUpload = (e) => {
    let _totalSize = 0
    e.files.forEach((file) => {
      _totalSize += file.size || 0
    })
    setTotalSize(_totalSize)
    toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' })
  }

  const onTemplateRemove = (file, callback) => {
    setTotalSize(totalSize - file.size)
    callback()
  }

  const onTemplateClear = () => {
    setTotalSize(0)
  }

  const headerTemplate = (options) => {
    const { chooseButton } = options
    return (
      <div className={styles.fileupload_header}>
        {!readOnly && chooseButton}
      </div>
    )
  }

  const itemTemplate = (file, props) => {
    let objectURL = ''
    if (file.type === 'application/pdf') {
      objectURL = pdf
    } else if (file.type.includes('image/')) {
      objectURL = file.objectURL
    }
    return (
      <div className={styles.fileupload_item}>
        <div className={styles.fileupload_item_icon}>
          <Img
            alt={file.name}
            role='thumbnail'
            src={objectURL}
            width={35}
            height={35}
          />
        </div>
        <div className={styles.fileupload_item_content}>
          <div>{file.name}</div>
          <div>{props.formatSize}</div>
        </div>
        {!(disabled || readOnly) && (
          <Button
            type='button'
            icon='pi pi-times'
            className={styles.fileupload_item_delete}
            onClick={() => onTemplateRemove(file, props.onRemove)}
          />
        )}
      </div>
    )
  }

  const emptyTemplate = (file) => {
    return (
      <div className={styles.fileupload_empty}>
        Arrastre y suelte los archivos aquí para cargarlos
      </div>
    )
  }

  const chooseOptions = { label: 'Elegir', icon: '', iconOnly: false, className: styles.fileupload_choose }

  return (
    loading
      ? <Skeleton width='100%' height={70} />
      : (
        <div className={`${styles.fileupload} ${className}`}>
          {label &&
            <div className={styles.fileupload_labels}>
              <label htmlFor={name}>{label}</label>
              {required && <div>Obligatorio</div>}
              {optional && <div>Opcional</div>}
            </div>}
          <Toast ref={toast} />
          <FileUploadPrime
            ref={fileUploadRef}
            name={name}
            url={url}
            multiple={multiple}
            accept={accept}
            maxFileSize={maxFileSize}
            onUpload={onTemplateUpload}
            onSelect={onTemplateSelect}
            onError={onTemplateClear}
            onClear={onTemplateClear}
            disabled={disabled || readOnly}
            headerTemplate={headerTemplate}
            itemTemplate={itemTemplate}
            emptyTemplate={emptyTemplate}
            chooseOptions={chooseOptions}
            className={`${readOnly ? styles.readonly : ''} ${disabled ? styles.disabled : ''}`}
          />
        </div>
        )
  )
}

FileUpload.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  className: PropTypes.string
}
