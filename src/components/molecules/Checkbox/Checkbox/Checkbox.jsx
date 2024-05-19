import { Checkbox as CheckboxAtom } from '@/components/atoms/Checkbox'
import styles from './styles.module.scss'
import PropTypes from 'prop-types'

export const Checkbox = ({
  inputId,
  name = '',
  value,
  defaultValue,
  onChange = () => { },
  label,
  icon,
  tooltip,
  tooltipOptions,
  required = false,
  variant = 'primary',
  readOnly = false,
  disabled = false,
  className = ''
}) => {
  return (
    <div className={`${styles.checkbox} ${styles[variant]} ${className}`}>
      <CheckboxAtom
        inputId={inputId}
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        icon={icon}
        tooltip={tooltip}
        tooltipOptions={tooltipOptions}
        required={required}
        readOnly={readOnly}
        disabled={disabled}
        invalidClassName={styles.invalid}
        className={`${readOnly ? styles.readonly : ''} ${disabled ? styles.disabled : ''}`}
      />
      {label && <label htmlFor={inputId}>{label}</label>}
    </div>
  )
}

Checkbox.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string
}
