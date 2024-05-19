// 'use client'

import { InputText as InputTextAtom } from '@/components/atoms/Input/InputText'
import styles from './styles.module.scss'
import PropTypes from 'prop-types'
import { useState } from 'react'

export const InputText = (props) => {
  const {
    name,
    label,
    icon,
    iconPosRight = false,
    variant = 'primary',
    height = '45px',
    className = '',
    disabled = false,
    readOnly = false,
    required = false,
    optional = false,
    error
  } = props

  const [onFocus, setOnFocus] = useState(false)
  const [isInvalid, setIsInvalid] = useState(null)

  const focus = () => {
    if (!readOnly && !disabled) {
      setOnFocus(true)
    }
  }

  const blur = () => {
    setOnFocus(false)
  }

  const inputTextRender = () => {
    return (
      <InputTextAtom
        {...props}
        focus={focus}
        blur={blur}
        onInvalid={(error) => setIsInvalid(error)}
        invalidClassName={styles.invalid}
        invalidMessageClassName={styles.invalid_message}
        className={`${readOnly ? styles.readonly : ''} ${disabled ? styles.disabled : ''}`}
        height={height}
        style={{ height }}
      />
    )
  }

  return (
    <div className={`${styles.input} ${styles[variant]} ${className}`}>
      {label &&
        <div className={styles.input_labels}>
          <label htmlFor={name}>{label}</label>
          {required && <span className={`${error || isInvalid ? styles.invalid_text : ''}`}>Obligatorio</span>}
          {optional && <span>Opcional</span>}
        </div>}
      {icon
        ? (
          <span className={iconPosRight ? 'p-input-icon-right' : 'p-input-icon-left'}>
            <i className={icon} />
            {inputTextRender()}
          </span>
          )
        : (
            inputTextRender()
          )}
    </div>
  )
}

InputText.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.string,
  iconPosRight: PropTypes.bool,
  className: PropTypes.string
}
