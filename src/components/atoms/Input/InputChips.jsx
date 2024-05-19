import { Chips as ChipsPrime } from 'primereact/chips'
import { useCallback, useEffect } from 'react'
import { useController } from 'react-hook-form'
import PropTypes from 'prop-types'
import { Skeleton } from 'primereact/skeleton'

export const InputChips = ({
  name = '',
  value,
  defaultValue,
  onChange = () => { },
  placeholder = '',
  separator,
  keyfilter,
  rules,
  readOnly = false,
  disabled = false,
  onFocus = () => { },
  onBlur = () => { },
  onInvalid = () => { },
  invalidClassName = '',
  invalidMessageClassName = '',
  className = '',
  style,
  height,
  loading = false
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
    onInvalid(error)
  }, [error])

  useEffect(() => {
    if (value) field.onChange(value)
  }, [value])

  return (
    loading
      ? <Skeleton width='100%' height={height} />
      : (
        <>
          <ChipsPrime
            {...field}
            name={name}
            value={field.value}
            onChange={handleOnChange}
            placeholder={placeholder}
            separator={separator}
            keyfilter={keyfilter}
            readOnly={readOnly}
            disabled={disabled}
            className={`${className} ${error ? invalidClassName : ''}`}
            style={style}
            onFocus={onFocus}
            onBlur={onBlur}
          />
          {error?.message && <span className={invalidMessageClassName}>{error.message}</span>}
        </>)
  )
}

InputChips.propTypes = {
  name: PropTypes.string,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  invalidClassName: PropTypes.string,
  invalidMessageClassName: PropTypes.string
}
