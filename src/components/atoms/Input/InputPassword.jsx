import { Password } from 'primereact/password'
import { useCallback } from 'react'
import { useController } from 'react-hook-form'
import PropTypes from 'prop-types'

export const InputPassword = ({
  name,
  value,
  defaultValue,
  onChange = () => { },
  placeholder = '',
  feedback,
  toggleMask,
  rules,
  readOnly = false,
  disabled = false,
  onFocus = () => { },
  onBlur = () => { },
  invalidClassName = '',
  className = '',
  type
}) => {
  const { field, fieldState: { error } } = useController({
    name,
    rules,
    defaultValue
  })

  const handleOnChange = useCallback((e) => {
    onChange(e)
    field.onChange(e.target.value)
  }, [field, onChange])

  return (
    <Password
      {...field}
      type={type}
      name={name}
      value={field.value}
      onChange={handleOnChange}
      placeholder={placeholder}
      feedback={feedback}
      toggleMask={toggleMask}
      readOnly={readOnly}
      disabled={disabled}
      className={`${className} ${error ? invalidClassName : ''}`}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  )
}

InputPassword.propTypes = {
  name: PropTypes.string
}
