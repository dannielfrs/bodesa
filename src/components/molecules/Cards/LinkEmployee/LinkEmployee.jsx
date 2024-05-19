import styles from './styles.module.scss'
import PropTypes from 'prop-types'
import Link from 'next/link'

export const LinkEmployee = ({
  key,
  href,
  title,
  content,
  employees,
  percentage,
  className = ''
}) => {
  return (
    <Link href={href} className={`${styles.link} ${className}`} key={key}>
      <div className={styles.link_content}>
        <div>{title}</div>
        <div className={styles.link_row}>
          <div>{content ? `${content}` : ''}{employees ? `Empleados: ${employees}` : ''}</div>
          <div>{percentage ? `${percentage} %` : ''}</div>
        </div>
      </div>
      <div className={styles.link_arrow}>
        <i className='i-arrow_right'></i>
      </div>
    </Link>
  )
}

LinkEmployee.propTypes = {
  className: PropTypes.string,
  employees: PropTypes.number,
  percentage: PropTypes.number
}
