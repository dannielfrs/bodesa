import { InputTextarea as InputTextareaPrime } from 'primereact/inputtextarea'
import { Skeleton } from 'primereact/skeleton'
import { useCallback } from 'react'
import { useController } from 'react-hook-form'
import PropTypes from 'prop-types'

export const InputTextArea = ({
  name,
  type,
  value = '',
  defaultValue,
  onChange = () => { },
  placeholder = '',
  maxLength,
  rows,
  loading,
  height,
  rules,
  readOnly = false,
  disabled = false,
  invalidClassName = '',
  invalidMessageClassName = '',
  className = '',
  style,
  onBlur = () => { },
  onFocus = () => { }
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
    loading
      ? <Skeleton width='100%' height={height} />
      : (
        <>
          <InputTextareaPrime
            {...field}
            name={name}
            type={type}
            value={field.value}
            onChange={handleOnChange}
            placeholder={placeholder}
            maxLength={maxLength}
            rows={rows}
            readOnly={readOnly}
            disabled={disabled}
            className={`${className} ${error ? invalidClassName : ''}`}
            style={style}
            onBlur={onBlur}
            onFocus={onFocus}
          />
          {error && <span className={invalidMessageClassName}>{error.message}</span>}
        </>
        )
  )
}

InputTextArea.propTypes = {
  name: PropTypes.string
}
