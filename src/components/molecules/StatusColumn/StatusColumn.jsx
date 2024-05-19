import React from 'react'
import styles from './StatusColumn.module.scss'

export const StatusColumn = ({ status }) => {
  return (
    <div className={styles.section_table_status}>
      <div className={status ? styles.status_active : styles.statusInactive}>
        {status ? 'Activo' : 'Inactivo'}
      </div>
    </div>
  )
}
