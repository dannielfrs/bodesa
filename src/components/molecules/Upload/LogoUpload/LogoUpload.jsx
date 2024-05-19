import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'
import { useController } from 'react-hook-form'
import { Skeleton } from 'primereact/skeleton'
import imageIcon from '@/../public/images/icons/upload.svg'

export const LogoUpload = ({
  name = 'fileupload',
  label,
  accept = 'image/png, image/jpg, image/jpeg',
  setImageFile = () => { },
  defaultImage,
  disabled = false,
  loading = false,
  rules,
  width = '100%',
  height = '150px',
  className = ''
}) => {
  const [imageUploadedUrl, setImageUploadedUrl] = useState(null)
  const inputTypeFile = useRef()

  const { field, fieldState: { error } } = useController({
    name,
    rules
  })

  useEffect(() => {
    if (defaultImage) setImageUploadedUrl(defaultImage)
  }, [defaultImage])

  const onChangeFile = (e) => {
    field.onChange(e)
    if (e.target.value === '') {
      setImageUploadedUrl(null)
    }
    const file = e.target.files[0]
    setImageFile(file)
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setImageUploadedUrl(URL.createObjectURL(file))
      }
      reader.readAsDataURL(file)
    }
  }

  const activateInput = () => {
    if (!disabled) inputTypeFile.current.click()
  }

  const handleDeleteFile = (e) => {
    e.stopPropagation()
    onChangeFile({ target: { value: '', files: [] } })
  }

  return (
    <div className={`${styles.fileupload} ${className}`}>
      {label && <label className={styles.fileupload_label}>{label}</label>}
      {loading
        ? <Skeleton width={width} height={height} />
        : (
          <div
            onClick={activateInput}
            className={`${styles.fileupload_content} ${error ? styles.invalid : ''}`}
            style={{ width, height }}
          >
            <input
              {...field}
              type='file'
              name={name}
              ref={inputTypeFile}
              onChange={(e) => onChangeFile(e)}
              accept={accept}
              className={styles.fileupload_input_hidden}
            />
            {imageUploadedUrl
              ? (
                <>
                  <Image
                    src={imageUploadedUrl}
                    loader={({ src }) => src}
                    alt='image'
                    className={styles.fileupload_image}
                    width={535}
                    height={285}
                  />
                  {!disabled &&
                    <div className={styles.fileupload_delete} onClick={(e) => handleDeleteFile(e)}>
                      <i className='pi pi-times' />
                    </div>}
                </>)
              : (
                <Image
                  src={imageIcon}
                  alt='image'
                  className={styles.fileupload_empty}
                />)}
          </div>)}
      {error && <span className={styles.invalid_message}>{error.message}</span>}
    </div>
  )
}
