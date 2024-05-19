import { Sidebar } from '@/components/atoms/Sidebar'
import styles from './styles.module.scss'
import PropTypes from 'prop-types'

export const SidebarModal = ({
  visible,
  onHide,
  position,
  width,
  className = '',
  children
}) => {
  return (
    <Sidebar
      visible={visible}
      onHide={onHide}
      position={position}
      className={`${styles.sidebar} ${className}`}
      style={{ width }}
    >
      <div className={styles.sidebar_container}>
        {children}
      </div>
    </Sidebar>
  )
}

SidebarModal.propTypes = {
  className: PropTypes.string
}