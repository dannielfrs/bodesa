import { ToggleButton as ToggleButtonAtom } from '@/components/atoms/Button/ToggleButton'
import styles from './styles.module.scss'
import PropTypes from 'prop-types'

export const ToggleButton = (props) => {
  const {
    variant = 'primary',
    height = '45',
    className = '',
    children
  } = props

  return (
    <ToggleButtonAtom
      {...props}
      className={`${styles.button} ${styles[variant]} ${className}`}
      style={{ height }}
    >
      {children}
    </ToggleButtonAtom>
  )
}

ToggleButton.propTypes = {
  variant: PropTypes.string,
  height: PropTypes.string,
  fontSize: PropTypes.string,
  className: PropTypes.string
}
