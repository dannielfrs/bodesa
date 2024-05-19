import { InputChips as InputChipsAtom } from '@/components/atoms/Input/InputChips'
import styles from './styles.module.scss'
import PropTypes from 'prop-types'
import { useState } from 'react'

export const InputChips = (props) => {
  const {
    name,
    label,
    variant = 'primary',
    height = '45px',
    className = '',
    disabled = false,
    readOnly = false,
    required = false,
    optional = false
  } = props

  const [isInvalid, setIsInvalid] = useState(null)

  return (
    <div className={`${styles.input} ${styles[variant]} ${className}`}>
      {label &&
        <div className={styles.input_labels}>
          <label htmlFor={name}>{label}</label>
          {required && <span className={`${isInvalid ? styles.invalid_text : ''}`}>Obligatorio</span>}
          {optional && <span>Opcional</span>}
        </div>}
      <InputChipsAtom
        {...props}
        onInvalid={(error) => setIsInvalid(error)}
        invalidClassName={styles.invalid}
        invalidMessageClassName={styles.invalid_message}
        className={`${readOnly ? styles.readonly : ''} ${disabled ? styles.disabled : ''}`}
        height={height}
        style={{ height }}
      />
    </div>
  )
}

InputChips.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.string,
  iconPosRight: PropTypes.bool,
  className: PropTypes.string
}
