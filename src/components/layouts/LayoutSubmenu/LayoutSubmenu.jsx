// 'use client'

import { useEffect, useState } from 'react'
import styles from './LayoutSubmenu.module.scss'
import { Menu } from '@/components/molecules/Menu/Menu'

export const LayoutSubmenu = ({ title, children }) => {
  const [menu, setMenu] = useState()
  const [menuTitle, setMenuTitle] = useState()
  const prefix = 'system'

  useEffect(() => {
    switch (title) {
      case 'employees-catalogs':
        setMenu([
          { label: 'Tipos de número', url: `/${prefix}/human-resources/employees/catalogs/number-types` },
          { label: 'Géneros', url: `/${prefix}/human-resources/employees/catalogs/genders` }
        ])
        setMenuTitle('Catálogos')
        break
      case 'catalogs':
        setMenu([
          { label: 'Tipos de establecimientos', url: `/${prefix}/ocr/settings/catalogs/establishments-types` },
          { label: 'Tipos de documentos', url: `/${prefix}/ocr/settings/catalogs/documents-types` }
        ])
        setMenuTitle('Catálogos')
        break
      default:
        break
    }
  }, [])

  return (
    <div className={styles.layout}>
      <div className={styles.layout_sidebar}>
        <Menu
          options={menu}
          title={menuTitle}
        />
      </div>
      <div className={styles.layout_page}>
        {children}
      </div>
    </div>
  )
}
