import { RadioButton as RadioButtonPrime } from 'primereact/radiobutton'
import { useController } from 'react-hook-form'
import PropTypes from 'prop-types'

export const RadioButton = ({
  name,
  value,
  setValue,
  defaultValue = false,
  required = false,
  disabled = false,
  invalidClassName = '',
  className = ''
}) => {
  const { field, fieldState: { error } } = useController({
    name,
    rules: { required },
    defaultValue
  })

  const handleChange = (e) => {
    field.onChange(e.checked)
    setValue(e.target.name)
  }

  return (
    <RadioButtonPrime
      {...field}
      name={name}
      inputId={name}
      inputRef={field.ref}
      checked={field.name === value}
      onChange={(e) => handleChange(e)}
      disabled={disabled}
      className={`${className} ${error ? invalidClassName : ''}`}
    />
  )
}

RadioButton.propTypes = {
  className: PropTypes.string
}
