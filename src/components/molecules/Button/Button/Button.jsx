import { Button as ButtonAtom } from '@/components/atoms/Button'
import styles from './styles.module.scss'
import PropTypes from 'prop-types'

export const Button = (props) => {
  const {
    variant = 'primary',
    height = '',
    disabled,
    className = '',
    children
  } = props

  return (
    <ButtonAtom
      {...props}
      className={`${styles.button} ${styles[variant]} ${className} ${disabled && styles.button_disabled}`}
      style={{ height }}
    >
      {children}
    </ButtonAtom>
  )
}

Button.propTypes = {
  variant: PropTypes.string,
  height: PropTypes.string,
  fontSize: PropTypes.string,
  className: PropTypes.string
}
