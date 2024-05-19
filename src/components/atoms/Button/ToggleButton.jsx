import { ToggleButton as ToggleButtonPrime } from 'primereact/togglebutton'
import PropTypes from 'prop-types'

export const ToggleButton = ({
  value,
  onChange,
  onClick,
  checked,
  iconPos,
  offIcon,
  offLabel,
  onIcon,
  onLabel,
  tooltip,
  tooltipOptions,
  readOnly = false,
  disabled = false,
  className = '',
  style,
  children
}) => {
  return (
    <ToggleButtonPrime
      // value={value}
      onChange={onChange}
      // onClick={onClick}
      checked={checked}
      iconPos={iconPos}
      offIcon={offIcon}
      offLabel={offLabel}
      onIcon={onIcon}
      onLabel={onLabel}
      tooltip={tooltip}
      tooltipOptions={tooltipOptions}
      readOnly={readOnly}
      disabled={disabled}
      className={className}
      style={style}
    >
      {children}
    </ToggleButtonPrime>
  )
}

ToggleButton.propTypes = {
  tooltip: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string
}
