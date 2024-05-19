import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import styles from './styles.module.scss'
import PropTypes from 'prop-types'
import Link from 'next/link'

export const Menu = ({
  options,
  title,
  className
}) => {
  const pathname = usePathname()
  const [menuOptions, setMenuOptions] = useState()

  useEffect(() => {
    setMenuOptions(options)
  }, [options])

  return (
    <div className={`${styles.menu} ${className}`}>
      <div className={styles.menu_header}>
        {title}
      </div>
      <ul className={styles.menu_content}>
        {menuOptions?.map(item => (
          <li className={styles.menu_item} key={item.label}>
            <Link href={item.url} className={`${styles.menu_item_link} ${pathname.includes(item.url) ? styles.link_active : ''}`}>
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

Menu.propTypes = {
  className: PropTypes.string
}
