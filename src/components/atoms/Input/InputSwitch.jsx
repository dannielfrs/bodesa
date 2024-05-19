import { InputSwitch as InputSwitchPrime } from 'primereact/inputswitch'
// import { useController } from 'react-hook-form'
import PropTypes from 'prop-types'

export const InputSwitch = ({
  name,
  checked,
  onChange,
  invalidClassName = '',
  className = ''
}) => {
  // const { field, fieldState: { error } } = useController({
  //   name,
  //   rules: { required: required },
  // });
  const error = false

  return (
    <InputSwitchPrime
      name={name}
      // inputId={field.name}
      // inputRef={field.ref}
      // onChange={(e) => { field.onChange(e.checked), onChange(e) }}
      onChange={onChange}
      checked={checked}
      className={`${className} ${error ? invalidClassName : ''}`}
    // {...field}
    />
  )
}

InputSwitch.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string
}
