import { RadioButton as RadioButtonAtom } from '@/components/atoms/RadioButton'
import styles from './styles.module.scss'
import PropTypes from 'prop-types'

export const RadioButton = ({
  name,
  value,
  setValue,
  defaultValue,
  label,
  variant = 'primary',
  required = false,
  readOnly = false,
  disabled = false,
  className = ''
}) => {
  return (
    <div className={`${styles.radiobutton} ${styles[variant]}`}>
      <RadioButtonAtom
        name={name}
        inputId={name}
        value={value}
        setValue={setValue}
        defaultValue={defaultValue}
        required={required}
        readOnly={readOnly}
        disabled={disabled}
        invalidClassName={styles.invalid}
        className={`${readOnly ? styles.readonly : ''} ${disabled ? styles.disabled : ''} ${className}`}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  )
}

RadioButton.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string
}
