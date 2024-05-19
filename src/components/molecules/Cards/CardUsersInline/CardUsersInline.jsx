import styles from './styles.module.scss'
import PropTypes from 'prop-types'

export const CardUsersInline = ({
  value,
  title,
  icon,
  color = '#edf0fd',
  borderColor = '#374eb3',
  className = ''
}) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.card_icon} style={{ backgroundColor: color, '--hover-borderColor': borderColor }}>
        <i className={icon} />
      </div>
      <div className={styles.card_content}>
        <div>{value}</div>
        <div>{title}</div>
      </div>
    </div>
  )
}

CardUsersInline.propTypes = {
  className: PropTypes.string
}
