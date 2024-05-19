import { Calendar as CalendarPrime } from 'primereact/calendar'
import { useCallback } from 'react'
import { addLocale } from 'primereact/api'
import { useController } from 'react-hook-form'
import PropTypes from 'prop-types'

export const Calendar = ({
  name,
  value,
  defaultValue,
  onChange = () => { },
  readOnly = false, // When present, it specifies that the value cannot be changed.
  disabled = false, // When present, it specifies that the component should be disabled.
  rules,
  panelClassName,
  invalidClassName,
  invalidMessageClassName,
  className = '',
  inputStyle
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

  addLocale('es', {
    firstDayOfWeek: 1,
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
    dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
    today: 'Hoy',
    clear: 'Limpiar'
  })

  return (
    <>
      <CalendarPrime
        {...field}
        name={name}
        inputId={field.name}
        value={field.value}
        onChange={handleOnChange}
        dateFormat='dd/mm/yy'
        locale='es'
        placeholder='dd/mm/aaaa'
        disabled={disabled || readOnly}
        panelClassName={panelClassName}
        className={`${className} ${error ? invalidClassName : ''}`}
        inputStyle={inputStyle}
      />
      {error && <span className={invalidMessageClassName}>{error.message}</span>}
    </>
  )
}

Calendar.propTypes = {
  className: PropTypes.string
}
