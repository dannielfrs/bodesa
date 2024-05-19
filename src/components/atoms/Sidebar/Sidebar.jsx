import { Sidebar as SidebarPrime } from 'primereact/sidebar'
import PropTypes from 'prop-types'

export const Sidebar = ({
  visible,
  onHide,
  position,
  children,
  className = '',
  style
}) => {
  return (
    <SidebarPrime
      visible={visible}
      onHide={onHide}
      position={position}
      className={className}
      style={style}
    >
      {children}
    </SidebarPrime>
  )
}

Sidebar.propTypes = {
  className: PropTypes.string
}
