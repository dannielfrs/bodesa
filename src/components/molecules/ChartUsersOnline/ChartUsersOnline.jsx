import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'

export const ChartUsersOnline = () => {
  const [usersByDevice, setUsersByDevice] = useState([
    { device: 'Computadora', value: 416, percentage: 40 },
    { device: 'Smartphone', value: 365, percentage: 35 },
    { device: 'Tableta', value: 261, percentage: 25 }
  ])
  const usersOnline = 1042

  useEffect(() => {
    // usersByDevice.map((item)=>{

    // })
  }, [])

  return (
    <div className={styles.chart}>
      <div className={styles.chart_header}>
        {usersOnline}
      </div>
      <div className={styles.chart_body}>
        {usersByDevice.map((item) => (
          <div className={styles.chart_item} key={item.device}>
            <span>{item.device}</span>
            <div className={styles.chart_item_bar}>
              <div style={{ width: '50%' }}>{item.value}</div>
              <div>{item.percentage}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
