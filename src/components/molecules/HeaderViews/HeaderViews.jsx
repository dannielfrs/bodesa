import React from 'react'

// style🎡
import styles from './HeaderViews.module.scss'

// components 🔨
import { Button } from '../Button'
import { Card } from '../Card/Card'

// assets🍕

export const HeaderViews = ({ title, onClick, disabled, disabledCreate, disabledBack, tabs, activeIndex, setActiveIndex, handleNew, urlCreate }) => {
  return (
    <Card>
      <div className={styles.header}>
        <div className={styles.left}>
          <p className={styles.title}>{title}</p>
          {tabs &&
            <div className={styles.tabsBtns}>
              {tabs.map((e) => {
                return (
                  <div key={e.id} className={styles.cont_tabs}>
                    <Button type='button' onClick={() => setActiveIndex(e.id)} className={`${activeIndex === e.id && styles.active}`} label={e.label} variant={activeIndex === e.id ? 'primary' : 'tabBtn'} height='35px' />
                  </div>
                )
              })}
            </div>}
        </div>
        <div className={styles.Buttons}>
          {!disabledBack &&
            <div style={{ width: '100px' }}>
              <Button
                variant='secondary'
                type='button'
                label='Regresar'
                onClick={onClick}
              />
            </div>}
          {!disabled &&
            <div style={{ width: '100px' }}>
              <Button variant='primary' label='Guardar' />
            </div>}
          {urlCreate && !disabledCreate &&
            <div className={styles.ButtonNew}>
              <Button
                variant='primary'
                label='Nuevo'
                type='button'
                height='45px'
                width='79px'
                onClick={handleNew}
              />
            </div>}
        </div>
      </div>
    </Card>
  )
}
