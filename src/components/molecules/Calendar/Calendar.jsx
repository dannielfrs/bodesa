import { Calendar as CalendarAtom } from '@/components/atoms/Calendar'
import styles from './styles.module.scss'
import PropTypes from 'prop-types'

export const Calendar = ({
  name,
  value,
  onChange,
  label,
  variant,
  optional,
  required,
  readOnly,
  disabled,
  loading,
  rules,
  height,
  panelClassName,
  className
}) => {
  return (
    <div className={`${styles.calendar} ${styles[variant]} ${className}`}>
      <div className={styles.calendar_labels}>
        {label && <label htmlFor={name}>{label}</label>}
        {required && <span>Obligatorio</span>}
        {optional && <span>Opcional</span>}
      </div>
      <CalendarAtom
        name={name}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        disabled={disabled}
        loading={loading}
        rules={rules}
        panelClassName={`${styles[variant]} ${panelClassName}`}
        invalidClassName={styles.invalid}
        className={`${readOnly ? styles.readonly : ''} ${disabled ? styles.disabled : ''}`}
        inputStyle={{ height }}
      />
    </div>
  )
}

Calendar.defaultProps = {
  label: '',
  variant: 'primary',
  height: '45px',
  className: ''
}

Calendar.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string
}
