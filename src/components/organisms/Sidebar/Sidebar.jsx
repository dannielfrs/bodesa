// 'use client'

import { useEffect, useRef, useState } from 'react'
// import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import styles from './styles.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import useWindowSize from '@/customHooks/useWindowSize'
import { Button } from '@/components/molecules/Button'
import { Tooltip } from 'primereact/tooltip'
import arrow from '@/../public/images/icons/arrow_right.svg'
import square from '@/../public/images/icons/square.svg'
import controlPanel from '@/../public/images/icons/control_panel.svg'
import IconoEscaner from '@/../public/images/icons/IconoEscaner.svg'
import IconoCampos from '@/../public/images/icons/IconoCampos.svg'
import IconoPlantillas from '@/../public/images/icons/IconoPlantillas.svg'
import IconoReportes from '@/../public/images/icons/IconoReportes.svg'
import IconoEstablecimientos from '@/../public/images/icons/IconoEstablecimientos.svg'
import IconoConfiguraciones from '@/../public/images/icons/IconoConfiguraciones.svg'
import reports from '@/../public/images/icons/reports.svg'
import settings from '@/../public/images/icons/settings.svg'
import employees from '@/../public/images/icons/employees.svg'
import organization from '@/../public/images/icons/organization.svg'

const prefix = 'system'

export default function Sidebar ({ module, onCollapse = () => { } }) {
  const [showSidebar, setShowSidebar] = useState(false)
  const [collapseSidebar, setCollapseSidebar] = useState(false)
  const menuItemLink = useRef([])
  const menuItem = useRef([])
  const submenuItemLink = useRef([])
  const submenuItem = useRef([])
  // const pathname = usePathname()
  const router = useRouter()
  const windowSize = useWindowSize()
  let sidebarLinks = []

  onCollapse(collapseSidebar)

  switch (module) {
    case 'configuration-and-management':
      sidebarLinks = [
        {
          name: 'Paneles de control',
          link: `/${prefix}/${module}/control-panels`,
          icon: controlPanel,
          containSubmenu: true,
          submenu: [
            { name: 'Usuarios', link: `/${prefix}/${module}/control-panels/users`, icon: square }
          ]
        },
        {
          name: 'Reportes',
          link: `/${prefix}/${module}/reports`,
          icon: reports,
          containSubmenu: true,
          submenu: [
            { name: 'Accesos de usuarios', link: `/${prefix}/${module}/reports/user-access`, icon: square }
          ]
        },
        {
          name: 'Configuraciones',
          link: `/${prefix}/${module}/settings`,
          icon: settings,
          containSubmenu: true,
          submenu: [
            { name: 'Perfiles de usuario', link: `/${prefix}/${module}/settings/user-profiles`, icon: square },
            { name: 'Usuarios internos', link: `/${prefix}/${module}/settings/internal-users`, icon: square },
            { name: 'Usuarios externos', link: `/${prefix}/${module}/settings/external-users`, icon: square },
            { name: 'Tiendas', link: `/${prefix}/${module}/settings/stores`, icon: square },
            { name: 'Ubicaciones operativas', link: `/${prefix}/${module}/settings/operational-location`, icon: square },
            { name: 'Empresas', link: `/${prefix}/${module}/settings/companies`, icon: square }
          ]
        }
      ]
      break
    case 'human-resources':
      sidebarLinks = [
        {
          name: 'Paneles de control',
          link: `/${prefix}/${module}/control-panels`,
          icon: controlPanel,
          containSubmenu: true,
          submenu: [
            { name: 'Empleados', link: `/${prefix}/${module}/control-panels/employees`, icon: square }
          ]
        },
        {
          name: 'Empleados',
          link: `/${prefix}/${module}/employees`,
          icon: employees,
          containSubmenu: true,
          submenu: [
            { name: 'Catálogos', link: `/${prefix}/${module}/employees/catalogs/number-types`, icon: square },
            { name: 'Empleados', link: `/${prefix}/${module}/employees/employees`, icon: square }
          ]
        },
        {
          name: 'Estructura organizacional',
          link: `/${prefix}/${module}/organizational-structure`,
          icon: organization,
          containSubmenu: true,
          submenu: [
            { name: 'Organigrama', link: `/${prefix}/${module}/organizational-structure/organization-chart`, icon: square },
            { name: 'Puestos', link: `/${prefix}/${module}/organizational-structure/job-positions`, icon: square },
            { name: 'Departamentos', link: `/${prefix}/${module}/organizational-structure/departments`, icon: square }
          ]
        },
        {
          name: 'Reportes',
          link: `/${prefix}/${module}/reports`,
          icon: reports,
          containSubmenu: true,
          submenu: [
            { name: 'Empleados', link: `/${prefix}/${module}/reports/employees`, icon: square }
          ]
        },
        {
          name: 'Configuraciones',
          link: `/${prefix}/${module}/settings`,
          icon: settings,
          containSubmenu: true,
          submenu: [
            { name: 'Catálogos', link: `/${prefix}/${module}/settings/catalogs`, icon: square }
          ]
        }
      ]
      break
    case 'ocr':
      sidebarLinks = [
        {
          name: 'Paneles de control',
          link: `/${prefix}/${module}/control-panels`,
          icon: controlPanel,
          containSubmenu: true,
          submenu: [
            { name: 'OCR', link: `/${prefix}/${module}/control-panels/employee`, icon: square }
          ]
        },
        {
          name: 'Escáner',
          link: `/${prefix}/${module}/scanner`,
          icon: IconoEscaner
        },
        {
          name: 'Plantillas',
          link: `/${prefix}/${module}/templates`,
          icon: IconoPlantillas
        },
        {
          name: 'Campos',
          link: `/${prefix}/${module}/fields`,
          icon: IconoCampos
        },
        {
          name: 'Establecimientos',
          link: `/${prefix}/${module}/establishments`,
          icon: IconoEstablecimientos
        },
        {
          name: 'Reportes',
          link: `/${prefix}/${module}/control-panels/#`,
          icon: IconoReportes,
          containSubmenu: true,
          submenu: [
            { name: 'Reporte escaner', link: `/${prefix}/${module}/control-panels/employee`, icon: square }
          ]
        },
        {
          name: 'Configuraciones',
          link: `/${prefix}/${module}/catalogs`,
          icon: IconoConfiguraciones,
          containSubmenu: true,
          submenu: [
            { name: 'Catalogos', link: `/${prefix}/${module}/settings/catalogs/establishments-types`, icon: square }
          ]
        }
      ]
      break
    default:
      break
  }

  const toggleSidebar = () => {
    if (windowSize.width > 1399) {
      setCollapseSidebar(!collapseSidebar)
    } else {
      setShowSidebar(!showSidebar)
    }
  }

  const toggleSubmenu = (e) => {
    let preventClose = false
    submenuItemLink.current.forEach((item, index) => {
      if (item === e.target || item === e.target.parentNode) {
        submenuItem.current[index].classList.toggle(styles.sidebar_submenuitem_active)
        if (submenuItem.current[index].children[1]) {
          preventClose = true
        }
      } else {
        submenuItem.current[index].classList.remove(styles.sidebar_submenuitem_active)
      }
    })
    menuItemLink.current.forEach((item, index) => {
      if (item === e.target || item === e.target.parentNode) {
        menuItem.current[index].classList.toggle(styles.sidebar_menuitem_active)
      } else if (preventClose === false) {
        menuItem.current[index].classList.remove(styles.sidebar_menuitem_active)
      }
    })
  }

  useEffect(() => {
    document.body.addEventListener('click', toggleSubmenu)
    return () => document.body.removeEventListener('click', toggleSubmenu)
  }, [])

  return (
    <div className={`${styles.sidebar} ${collapseSidebar ? styles.sidebar_collapse : ''} ${showSidebar ? styles.sidebar_active : ''}`}>
      <div className={styles.sidebar_button}>
        <Button
          icon='i-menu'
          onClick={toggleSidebar}
          variant='transparent'
          height='50px'
        />
      </div>
      <div className={styles.sidebar_header} />
      <ul className={`${styles.sidebar_menu}`}>
        {sidebarLinks.map((item, index) => {
          return (
            <li className={styles.sidebar_menuitem} key={index} ref={element => { menuItem.current[index] = element }}>
              {collapseSidebar && <Tooltip target='.target-tooltip' />}
              <Link
                href={item.containSubmenu ? '#' : item.link}
                className={`${styles.sidebar_menuitem_link} ${router.pathname.includes(item.link) ? styles.sidebar_menuitem_link_active : ''} target-tooltip`}
                ref={element => { menuItemLink.current[index] = element }}
                data-pr-tooltip={item.name}
                data-pr-position='right'
              >
                <Image
                  src={item.icon}
                  alt='icon'
                  width={16}
                  height={16}
                />
                <span>{item.name}</span>
                {item.containSubmenu && (
                  <Image
                    src={arrow}
                    alt='arrow'
                    width={5}
                    height={9}
                    className={styles.menuitem_link_arrow}
                  />
                )}
              </Link>
              {item.containSubmenu && (
                <ul className={styles.sidebar_submenu}>
                  {item.submenu.map((item, index) => {
                    return (
                      <li className={styles.sidebar_submenuitem} key={index} ref={element => { submenuItem.current[index] = element }}>
                        <Link href={item.containSubmenu ? '#' : item.link} className={styles.sidebar_submenuitem_link} ref={element => { submenuItemLink.current[index] = element }}>
                          <Image
                            src={item.icon}
                            alt='icon'
                            width={16}
                            height={16}
                          />
                          <span>{item.name}</span>
                          {item.containSubmenu && (
                            <Image
                              src={arrow}
                              alt='arrow'
                              width={5}
                              height={9}
                              className={styles.menuitem_link_arrow}
                            />
                          )}
                        </Link>
                        {item.containSubmenu && (
                          <ul className={styles.sidebar_submenu}>
                            {item.submenu.map((item, index) => {
                              return (
                                <li className={styles.sidebar_submenuitem} key={index}>
                                  <Link href={item.link} className={styles.sidebar_submenuitem_link}>
                                    <Image
                                      src={item.icon}
                                      alt='icon'
                                      width={16}
                                      height={16}
                                    />
                                    <span>{item.name}</span>
                                  </Link>
                                </li>
                              )
                            })}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
