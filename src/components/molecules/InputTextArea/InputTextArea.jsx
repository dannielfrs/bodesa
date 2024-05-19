import { InputTextArea as InputTextAreaAtom } from '@/components/atoms/Input/InputTextArea'
import styles from './styles.module.scss'
import PropTypes from 'prop-types'
import { useState } from 'react'

export const InputTextArea = ({
  name,
  type,
  value,
  defaultValue,
  onChange = () => { },
  placeholder = '',
  label,
  loading = false,
  variant = 'primary',
  height,
  width,
  maxLength,
  rows,
  rules,
  readOnly = false,
  disabled = false,
  className = '',
  required = false,
  optional = false,
  error
}) => {
  const [onFocus, setOnFocus] = useState(false)

  const focus = () => {
    if (!readOnly && !disabled) {
      setOnFocus(true)
    }
  }

  const blur = () => {
    setOnFocus(false)
  }

  return (
    <div className={`${styles.input} ${styles[variant]} ${className}`}>
      {label &&
        <div className={styles.titles_inputs}>
          <label htmlFor={name}>{label}</label>
          {required && <span className={`${error ? styles.invalidSpan : ''}`}>Obligatorio</span>}
          {optional && <span>Opcional</span>}
        </div>}
      <InputTextAreaAtom
        name={name}
        type={type}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={placeholder}
        loading={loading}
        height={height}
        maxLength={maxLength}
        rows={rows}
        rules={rules}
        readOnly={readOnly}
        disabled={disabled}
        invalidClassName={styles.invalid}
        invalidMessageClassName={styles.invalid_message}
        className={`${readOnly ? styles.readonly : ''} ${disabled ? styles.disabled : ''}`}
        style={{ height, width }}
        onBlur={blur}
        onFocus={focus}
      />
    </div>
  )
}

InputTextArea.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string
}
