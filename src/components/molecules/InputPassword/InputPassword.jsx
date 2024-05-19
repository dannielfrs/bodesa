import { useState } from 'react'
import { InputText as InputTextAtom } from '@/components/atoms/Input'
import styles from './styles.module.scss'
import PropTypes from 'prop-types'

export const InputPassword = ({
  name,
  value,
  onChange = () => { },
  placeholder = '',
  label,
  icon,
  feedback,
  rules,
  readOnly = false,
  disabled = false,
  className = '',
  visible,
  required = false,
  optional = false,
  error
}) => {
  const [onFocus, setOnFocus] = useState(false)
  const [visibleText, setVisibleText] = useState(true)

  const focus = () => {
    if (!readOnly && !disabled) {
      setOnFocus(true)
    }
  }

  const blur = () => {
    setOnFocus(false)
  }

  return (
    <div className={`${styles.input} ${className}`}>
      {label &&
        <div className={styles.titles_inputs}>
          <label htmlFor={name}>{label}</label>
          {required && <span className={`${error ? styles.invalidSpan : ''}`}>Obligatorio</span>}
          {optional && <span>Opcional</span>}
        </div>}
      {visible && visibleText ? <span className={`${error ? styles.icon_right_invalid : styles.icon_right}`} onClick={() => setVisibleText(false)}>Mostrar</span> : <span className={styles.icon_right} onClick={() => setVisibleText(true)}>Ocultar</span>}
      {icon
        ? (
          <span className='p-input-icon-left'>
            <InputTextAtom
              type={!visibleText ? 'text' : 'password'}
              name={name}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              feedback={feedback}
              toggleMask={visibleText}
              rules={rules}
              readOnly={readOnly}
              disabled={disabled}
              onFocus={focus}
              onBlur={blur}
              invalidClassName={styles.invalid}
              invalidMessageClassName={styles.invalid_message}
              className={`${readOnly ? styles.readonly : ''} ${disabled ? styles.disabled : ''}`}
            />
          </span>
          )
        : (
          <InputTextAtom
            type={!visibleText ? 'text' : 'password'}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            feedback={feedback}
            toggleMask={visibleText}
            rules={rules}
            readOnly={readOnly}
            disabled={disabled}
            onFocus={focus}
            onBlur={blur}
            invalidClassName={styles.invalid}
            invalidMessageClassName={styles.invalid_message}
            className={`${readOnly ? styles.readonly : ''} ${disabled ? styles.disabled : ''}`}
          />
          )}
    </div>
  )
}

InputPassword.propTypes = {
  label: PropTypes.string
}
