import { Dropdown as DropdownPrime } from 'primereact/dropdown'
import { Skeleton } from 'primereact/skeleton'
import { useCallback, useEffect } from 'react'
import { useController } from 'react-hook-form'
import PropTypes from 'prop-types'

export const Dropdown = ({
  name = '', // Name of the input element.
  value, // Value of the component.
  defaultValue,
  onChange = () => { }, //
  options, // An array of selectitems to display as the available options.
  optionLabel, // Name of the label field of an option when arbitrary objects are used as options instead of SelectItems.
  optionValue, // Name of the value field of an option when arbitrary objects are used as options instead of SelectItems.
  placeholder = '', // Default text to display when no option is selected.
  dropdownIcon, // Icon of the dropdown arrow.
  editable, // When present, custom value instead of predefined options can be entered using the editable input field.
  loading = false, //
  filter = false, // When specified, displays an input field to filter the items on keyup.
  filterIcon, // Icon of the filter to search.
  filterPlaceholder, // Placeholder text to show when filter input is empty.
  scrollHeight, // Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
  height, //
  rules, // Rules for required input.
  readOnly = false, // When present, it specifies that the value cannot be changed.
  disabled = false, // When present, it specifies that the component should be disabled.
  onInvalid,
  invalidClassName = '', // Style class for invalid input.
  invalidMessageClassName = '', //
  panelClassName = '', // Style class of the overlay panel element.
  className = '', // Style class of the component.
  style, // Inline style of the element.
  itemTemplate, // The template of items.
  valueTemplate, // The template of selected item.
  focus, //
  blur //
}) => {
  const { field, fieldState: { error } } = useController({
    name,
    rules,
    defaultValue
  })

  const handleOnChange = useCallback((e) => {
    onChange(e)
    field.onChange(e.value)
  }, [field, onChange])

  useEffect(() => {
    if (value) {
      field.onChange(value)
    }
  }, [value])

  useEffect(() => {
    onInvalid(error)
  }, [error])

  return (
    loading
      ? <Skeleton width='100%' height={height} />
      : (
        <>
          <DropdownPrime
            {...field}
            name={name}
            value={field.value}
            onChange={handleOnChange}
            options={options}
            optionLabel={optionLabel}
            optionValue={optionValue}
            placeholder={placeholder}
            dropdownIcon={dropdownIcon}
            itemTemplate={itemTemplate}
            valueTemplate={valueTemplate}
            editable={editable}
            filter={filter}
            filterIcon={filterIcon}
            filterPlaceholder={filterPlaceholder}
            scrollHeight={scrollHeight}
            disabled={disabled || readOnly}
            panelClassName={panelClassName}
            className={`${className} ${error ? invalidClassName : ''}`}
            style={style}
            onFocus={focus}
            onBlur={blur}
          />
          {error?.message && <span className={invalidMessageClassName}>{error.message}</span>}
        </>
        )
  )
}

Dropdown.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  loading: PropTypes.bool,
  filter: PropTypes.bool,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  invalidClassName: PropTypes.string,
  invalidMessageClassName: PropTypes.string,
  className: PropTypes.string
}
