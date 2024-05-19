// 'use client'

import { Dropdown as DropdownAtom } from '@/components/atoms/Selects/Dropdown'
import { useState } from 'react'
import styles from './styles.module.scss'
import PropTypes from 'prop-types'

export const Dropdown = ({
  name,
  value,
  defaultValue,
  onChange,
  options,
  optionLabel = 'label',
  optionValue = 'value',
  label,
  icon,
  dropdownIcon = 'i-arrow',
  placeholder = '- Selecciona una opción -',
  filter = false,
  variant = 'primary',
  rules,
  readOnly = false,
  disabled = false,
  height = '45px',
  loading = false,
  itemTemplate,
  valueTemplate,
  panelClassName,
  className = '',
  required = false,
  optional = false,
  error
}) => {
  const [onFocus, setOnFocus] = useState(false)
  const [isInvalid, setIsInvalid] = useState(null)

  const focus = () => {
    setOnFocus(true)
  }

  const blur = () => {
    setOnFocus(false)
  }

  return (
    <div className={`${styles.dropdown} ${icon && styles.dropdown_icon} ${styles[variant]} ${className}`}>
      {label &&
        <div className={styles.dropdown_labels}>
          <label htmlFor={name}>{label}</label>
          {required && <span className={`${error || isInvalid ? styles.invalid_text : ''}`}>Obligatorio</span>}
          {optional && <span>Opcional</span>}
        </div>}
      {icon && <i className={icon} />}
      <DropdownAtom
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        options={options}
        optionLabel={optionLabel}
        optionValue={optionValue}
        placeholder={placeholder}
        dropdownIcon={dropdownIcon}
        filter={filter}
        filterPlaceholder='Buscar'
        rules={rules}
        readOnly={readOnly}
        disabled={disabled}
        loading={loading}
        onInvalid={(error) => setIsInvalid(error)}
        focus={focus}
        blur={blur}
        panelClassName={`${styles[variant]} ${panelClassName}`}
        invalidClassName={styles.invalid}
        invalidMessageClassName={styles.invalid_message}
        className={`${readOnly ? styles.readonly : ''} ${disabled ? styles.disabled : ''}`}
        itemTemplate={itemTemplate}
        valueTemplate={valueTemplate}
        height={height}
        style={{ height }}
      />
    </div>
  )
}

Dropdown.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool
}
