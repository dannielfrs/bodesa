import React from 'react'
import styles from './CardEmployeePanel.module.scss'
import PropTypes from 'prop-types'

export default function CardEmployeePanel ({
  value,
  title,
  icon,
  color,
  borderColor,
  className
}) {
  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.title}>{title}</div>
      <div className={styles.sub_content}>
        <div className={styles.card_icon} style={{ backgroundColor: color, '--hover-borderColor': borderColor }}>
          <i className={icon} />
        </div>
        <div>{value}</div>
      </div>
    </div>
  )
}

CardEmployeePanel.defaultProps = {
  color: '#edf0fd',
  borderColor: '#374eb3',
  className: ''
}

CardEmployeePanel.propTypes = {
  className: PropTypes.string
}
