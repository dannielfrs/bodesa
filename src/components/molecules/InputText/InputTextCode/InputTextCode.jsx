import { InputText as InputTextAtom } from '@/components/atoms/Input'
import styles from './styles.module.scss'
import PropTypes from 'prop-types'

export const InputTextCode = ({
  name,
  type,
  value,
  defaultValue,
  onChange = () => { },
  onPaste = () => { },
  placeholder = '',
  rules,
  height,
  readOnly = false,
  disabled = false,
  className = ''
}) => {
  return (
    <InputTextAtom
      name={name}
      type={type}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      onPaste={onPaste}
      placeholder={placeholder}
      rules={rules}
      maxLength='1'
      invalidClassName={styles.invalid}
      className={`${styles.input_code} ${className} ${readOnly ? styles.readonly : ''} ${disabled ? styles.disabled : ''}`}
      style={{ height }}
    />
  )
}

InputTextCode.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string
}
