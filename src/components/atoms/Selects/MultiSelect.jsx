import { MultiSelect as MultiSelectPrime } from 'primereact/multiselect'
import PropTypes from 'prop-types'

export const MultiSelect = ({
  name,
  value,
  onChange = () => { },
  options,
  optionLabel,
  placeholder = '',
  editable,
  maxSelectedLabels,
  disabled = false,
  className = ''
}) => {
  return (
    <MultiSelectPrime
      name={name}
      value={value}
      onChange={onChange}
      options={options}
      optionLabel={optionLabel}
      placeholder={placeholder}
      editable={editable}
      maxSelectedLabels={maxSelectedLabels}
      disabled={disabled}
      className={className}
    />
  )
}

MultiSelect.propTypes = {
  type: PropTypes.string
}
