import styles from './styles.module.scss'
import PropTypes from 'prop-types'

export const CardUsers = ({
  value,
  title,
  icon,
  color,
  borderColor,
  className
}) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.card_icon} style={{ backgroundColor: color, '--hover-borderColor': borderColor }}>
        <i className={icon} />
      </div>
      <div>{value}</div>
      <div>{title}</div>
    </div>
  )
}

CardUsers.defaultProps = {
  color: '#edf0fd',
  borderColor: '#374eb3',
  className: ''
}

CardUsers.propTypes = {
  className: PropTypes.string
}
