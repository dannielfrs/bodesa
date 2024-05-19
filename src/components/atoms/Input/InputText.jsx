import { InputText as InputTextPrime } from 'primereact/inputtext'
import { useCallback, useEffect } from 'react'
import { useController } from 'react-hook-form'
import PropTypes from 'prop-types'
import { Skeleton } from 'primereact/skeleton'

export const InputText = ({
  name = '',
  type = 'text',
  value,
  defaultValue,
  onChange = () => { },
  placeholder = '',
  maxLength,
  keyfilter,
  rules,
  readOnly = false,
  disabled = false,
  onFocus = () => { },
  onBlur = () => { },
  onInvalid = () => { },
  onPaste = () => { },
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
    field.onChange(e.target.value)
  }, [field, onChange])

  useEffect(() => {
    onInvalid(error)
  }, [error])

  useEffect(() => {
    field.onChange(value)
  }, [value])

  return (
    loading
      ? <Skeleton width='100%' height={height} />
      : (
        <>
          <InputTextPrime
            {...field}
            name={name}
            type={type}
            value={field.value}
            onChange={handleOnChange}
            placeholder={placeholder}
            maxLength={maxLength}
            keyfilter={keyfilter}
            readOnly={readOnly}
            disabled={disabled}
            className={`${className} ${error ? invalidClassName : ''}`}
            style={style}
            onFocus={onFocus}
            onBlur={onBlur}
            onPaste={onPaste}
          />
          {error?.message && <span className={invalidMessageClassName}>{error.message}</span>}
        </>
        )
  )
}

InputText.propTypes = {
  name: PropTypes.string,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  invalidClassName: PropTypes.string,
  invalidMessageClassName: PropTypes.string
}
