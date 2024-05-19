import { Button as ButtonPrime } from 'primereact/button'
import PropTypes from 'prop-types'

export const Button = ({
  label,
  type,
  icon,
  iconPos,
  onClick,
  tooltip,
  tooltipOptions,
  severity,
  raised,
  rounded,
  text,
  outlined,
  children,
  disabled = false,
  className = '',
  style
}) => {
  return (
    <ButtonPrime
      label={label}
      type={type}
      icon={icon}
      iconPos={iconPos}
      onClick={onClick}
      tooltip={tooltip}
      tooltipOptions={tooltipOptions}
      severity={severity}
      raised={raised}
      rounded={rounded}
      text={text}
      outlined={outlined}
      disabled={disabled}
      className={className}
      style={style}
    >
      {children}
    </ButtonPrime>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  tooltip: PropTypes.string,
  raised: PropTypes.bool,
  rounded: PropTypes.bool,
  text: PropTypes.bool,
  outlined: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string
}
