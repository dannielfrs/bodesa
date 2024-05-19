import { Checkbox as CheckboxPrime } from 'primereact/checkbox'
import { useCallback } from 'react'
import { useController } from 'react-hook-form'
import PropTypes from 'prop-types'

export const Checkbox = ({
  inputId,
  name,
  value,
  defaultValue,
  onChange = () => { },
  icon,
  tooltip,
  tooltipOptions,
  required = false,
  readOnly = false,
  disabled = false,
  invalidClassName = '',
  className = ''
}) => {
  const { field, fieldState: { error } } = useController({
    name,
    rules: { required },
    defaultValue
  })

  const handleOnChange = useCallback((e) => {
    field.onChange(e.checked)
    onChange(e)
  }, [field, onChange])

  return (
    <CheckboxPrime
      {...field}
      inputId={inputId}
      name={name}
      inputRef={field.ref}
      value={value}
      onChange={handleOnChange}
      checked={field.value}
      icon={icon}
      tooltip={tooltip}
      tooltipOptions={tooltipOptions}
      readOnly={readOnly}
      disabled={disabled}
      className={`${className} ${error ? invalidClassName : ''}`}
    />
  )
}

Checkbox.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string
}
