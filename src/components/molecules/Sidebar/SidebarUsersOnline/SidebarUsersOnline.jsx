import { Sidebar } from '@/components/atoms/Sidebar'
import styles from './styles.module.scss'
import { Button } from '@/components/molecules/Button'
import DataTableUsersOnline from '@/components/organisms/Authenticated/ConfigurationAndManagement/ControlPanels/Users/DataTableUsersOnline/DataTableUsersOnline'

export const SidebarUsersOnline = ({
  visible,
  onHide,
  module,
  className = ''
}) => {
  return (
    <Sidebar
      visible={visible}
      onHide={onHide}
      position='right'
      className={`${styles.sidebar} ${className}`}
    >
      <div className={styles.sidebar_container}>
        <div className={styles.sidebar_header}>
          <div>Listado de usuarios conectados</div>
          <div>
            <Button
              type='button'
              label='Cerrar'
              onClick={onHide}
              variant='secondary'
              height='35px'
            />
          </div>
        </div>
        <div className={styles.sidebar_body}>
          <DataTableUsersOnline module={module} />
        </div>
      </div>
    </Sidebar>
  )
}
