// 'use client'

import { useEffect, useRef } from 'react'
import styles from './styles.module.scss'
import { useForm } from 'react-hook-form'
import { FormHookProvider } from '@/components/layouts/Form/FormHookProvider'
import { Img } from '@/components/atoms/Img'
import { Button } from '@/components/molecules/Button'
import { Menu } from 'primereact/menu'
import logo from '@/../public/images/logo_dark.svg'
import { Avatar } from '@/components/atoms/Avatar'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'
import { useRootContext } from '@/Provider/RootProvider'

export default function Navbar ({ module, collapseSidebar, user }) {
  const { optionsCompanies, setSelectCompany } = useRootContext()
  const methods = useForm()
  const menuRight = useRef(null)
  const userrole = 'Administrador del sistema'
  let moduleIcon = ''
  let moduleName = ''

  const items = [{
    items: [
      { label: 'Perfil de usuario', url: '/system/user-profile' },
      { label: 'Cerrar sesión', url: '/#' }
    ]
  }]

  const onSubmit = () => { }

  switch (module) {
    case 'user-profile':
      moduleIcon = 'i-settings'
      moduleName = 'Sistema Integral de Tecnologías'
      break
    case 'configuration-and-management':
      moduleIcon = 'i-settings'
      moduleName = 'Configuración y gestión'
      break
    case 'human-resources':
      moduleIcon = 'i-hr'
      moduleName = 'Recursos humanos'
      break
    case 'ocr':
      moduleIcon = 'i-ocr'
      moduleName = 'OCR'
      break
    default:
      break
  }

  useEffect(() => {
    if (!optionsCompanies.loading) {
      methods.setValue('company', optionsCompanies.data.data.records.find(e => e.text.includes('La Marina')).id)
    }
  }, [optionsCompanies.loading])

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_container}>
        <div className={styles.navbar_left}>
          <div className={`${styles.navbar_logo} ${collapseSidebar ? styles.navbar_logo_collapse : ''}`} style={module === 'user-profile' ? { margin: '0' } : null}>
            {!collapseSidebar &&
              <Img
                src={logo}
                alt='logo'
                width={130}
                height={36}
              />}
          </div>
          <div className={styles.navbar_item}>
            <div className={styles.module}>
              <div className={styles.module_icon}>
                <i className={moduleIcon} />
              </div>
              <div className={styles.module_label}>
                {moduleName}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.navbar_right}>
          {module !== 'user-profile' &&
            <div className={styles.navbar_item}>
              <FormHookProvider methods={methods} method='POST' onSubmit={onSubmit}>
                <div style={{ width: '200px' }}>
                  <Dropdown
                    name='company'
                    loading={optionsCompanies.loading}
                    onChange={(e) => setSelectCompany(e.value)}
                    options={!optionsCompanies.loading ? optionsCompanies.data.data.records : []}
                    optionLabel='text'
                    optionValue='id'
                    placeholder='- Selecciona una opción -'
                    filter
                    variant='primary'
                    height='45px'
                  />
                </div>
              </FormHookProvider>
            </div>}
          <div className={styles.navbar_item}>
            <Button
              onClick={(event) => menuRight.current.toggle(event)}
              aria-controls='popup_menu_right'
              aria-haspopup
              variant='transparent-gray'
              height='70px'
            >
              <div className={styles.user_template}>
                <Avatar
                  image={user?.image ?? '/images/avatar/default_user.jpg'}
                  imageAlt='profile picture'
                  imageFallback='/images/avatar/default_user.jpg'
                  className={styles.navbar_avatar}
                />
                <div className={styles.user_template_group}>
                  <div>{`${user?.name} ${user?.last_name}`}</div>
                  <div>{userrole}</div>
                </div>
                <i className='i-arrow' />
              </div>
            </Button>
            <Menu
              id='popup_menu_right'
              model={items}
              popup
              ref={menuRight}
              popupAlignment='right'
              className={styles.user_menu}
            />
          </div>
        </div>
      </div>
    </nav>
  )
}
