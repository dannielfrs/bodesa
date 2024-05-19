import React, { useEffect, useState } from 'react'
import styles from './ShowPermissions.module.scss'
import { Button } from '@/components/molecules/Button'
import PanelOptions from './PanelOptions/PanelOptions'
import IconoConfiguracion from '@/../public/images/icons/IconoConfiguracion.svg'
import Icorecursoshumanos from '@/../public/images/icons/Icorecursoshumanos.svg'
import IcoOCR from '@/../public/images/icons/IcoOCR.svg'

export default function ShowPermissions ({ title, subtitle, setOpenModal2, disabled }) {
  const [selectedModule, setSelectedModule] = useState('')
  const [radio, setRadio] = useState('radioBtnpc_1')
  const panelControl = [
    {
      id: 'pc_1',
      childrens: [
        {
          id: 'pc_1',
          key: 'pc_2',
          text: 'Paneles de control',
          group: true,
          options: []
        },
        {
          id: 'pc_1',
          key: 'k_cp__1',
          text: 'Usuarios',
          options: [
            { text: 'Ver', key: 'pc_2_user_edit', value: false, name: 'pc_2_user_show' }
          ]
        },
        {
          id: 'pc_1',
          key: 'k_cp__1',
          text: 'Reportes',
          options: [],
          group: true
        },
        {
          id: 'pc_1',
          key: 'k_cp__1',
          text: 'Accesos de usuarios',
          options: [
            { text: 'Ver', key: 'pc_2_au_edit', value: false, name: 'pc_2_au_edit' }
          ]
        },
        {
          id: 'pc_1',
          key: 'k_cp__1',
          text: 'Configuraciones',
          options: [],
          group: true
        },
        {
          id: 'pc_1',
          key: 'k_cp__1',
          text: 'Perfiles',
          options: [
            { text: 'Listado', key: 'pc_2_p_list', value: true, name: 'pc_2_p_list' },
            { text: 'Nuevo', key: 'pc_2_p_new', value: false, name: 'pc_2_p_new' },
            { text: 'Editar', key: 'pc_2_p_edit', value: false, name: 'pc_2_p_edit' },
            { text: 'Ver', key: 'pc_2_p_show', value: false, name: 'pc_2_p_show' },
            { text: 'Activar', key: 'pc_2_p_active', value: false, name: 'pc_2_p_active' },
            { text: 'Inactivar', key: 'pc_2_p_inactive', value: false, name: 'pc_2_p_inactive' },
            { text: 'Eliminar', key: 'pc_2_p_delete', value: false, name: 'pc_2_p_delete' },
            { text: 'Historial', key: 'pc_2_p_historial', value: false, name: 'pc_2_p_historial' }
          ]
        }
      ]
    }
  ]

  const humanResources = [
    {
      id: 'pc_2',
      childrens: [
        {
          id: 'hr',
          key: 'k_cp__1',
          text: 'Paneles de control',
          group: true,
          options: []
        },
        {
          id: 'hr',
          key: 'k_cp__1',
          text: 'Empleados',
          options: [
            { text: 'Ver', key: 'hr_3_edit', value: false, name: 'hr_3_edit' }
          ]
        },
        {
          id: 'hr',
          key: 'k_cp__1',
          text: 'Empleados',
          group: true,
          options: []
        },
        {
          id: 'hr',
          key: 'k_cp__1',
          text: 'Empleados',
          options: [
            { text: 'Listado', key: 'hr_3_list', value: true, name: 'pc_3_list' },
            { text: 'Nuevo', key: 'hr_3_new', value: false, name: 'hr_3_new' },
            { text: 'Editar', key: 'hr_3_edit', value: false, name: 'hr_3_edit' },
            { text: 'Ver', key: 'hr_3_show', value: false, name: 'hr_3_show' },
            { text: 'Activar', key: 'hr_3_active', value: false, name: 'hr_3_active' },
            { text: 'Inactivar', key: 'hr_3_inactive', value: false, name: 'hr_3_inactive' },
            { text: 'Eliminar', key: 'hr_3_delete', value: false, name: 'hr_3_delete' },
            { text: 'Historial', key: 'hr_3_historial', value: false, name: 'hr_3_historial' }
          ]
        }
      ]
    }
  ]

  const ocrOptions = [
    {
      id: 'pc_3',
      childrens: [
        {
          id: 'ocr',
          key: 'ocr_1',
          text: 'Escanear',
          group: true,
          options: []
        },
        {
          id: 'ocr',
          key: 'ocr_1',
          text: 'Escanear',
          options: [
            { text: 'Ver', key: 'ocr_1_show', value: false, name: 'ocr_1_show' }
          ]
        },
        {
          id: 'ocr',
          key: 'ocr_1',
          text: 'Plantillas',
          group: true,
          options: []
        },
        {
          id: 'ocr',
          key: 'ocr_1',
          text: 'Plantillas',
          options: [
            { text: 'Listado', key: 'ocr_2_list', value: true, name: 'ocr_2_list' },
            { text: 'Nuevo', key: 'ocr_2_new', value: false, name: 'ocr_2_new' },
            { text: 'Editar', key: 'ocr_2_edit', value: false, name: 'ocr_2_edit' },
            { text: 'Ver', key: 'ocr_2_show', value: false, name: 'ocr_2_show' },
            { text: 'Activar', key: 'ocr_2_active', value: false, name: 'ocr_2_active' },
            { text: 'Inactivar', key: 'ocr_2_inactive', value: false, name: 'ocr_2_inactive' },
            { text: 'Eliminar', key: 'ocr_2_delete', value: false, name: 'ocr_2_delete' },
            { text: 'Historial', key: 'ocr_2_historial', value: false, name: 'ocr_2_historial' }
          ]
        }
      ]

    }
  ]
  const positionOptions = [
    {
      id: 'pc_1',
      text: 'Configuración y gestión',
      image: IconoConfiguracion,
      options: panelControl,
      radio: true
    },
    {
      id: 'pc_2',
      text: 'Recursos humanos',
      image: Icorecursoshumanos,
      options: humanResources,
      radio: false
    },
    {
      id: 'pc_3',
      text: 'OCR',
      image: IcoOCR,
      options: ocrOptions,
      radio: false
    }
  ]

  useEffect(() => {
    if (disabled) {
      setSelectedModule(panelControl)
    }
  }, [])

  return (
    <>
      <div className={styles.Background}>
        <div className={styles.ShowPermissions}>
          <div className={styles.header}>
            <p className={styles.title}>{title} <b style={{ color: '#33b0cc' }}>{subtitle}</b></p>
            <div style={{ width: '80px' }}>
              <Button
                variant='secondary'
                height='35px'
                type='button'
                label='Cerrar'
                onClick={() => setOpenModal2(false)}
              />
            </div>
          </div>
          <div className={styles.containers}>
            <div className={styles.cont1}>
              <p className={styles.titleM}>Módulos</p>
              <div className={styles.Options}>
                {positionOptions.map((item) => (
                  <PanelOptions
                    key={item.id}
                    item={item}
                    selectedModule={selectedModule}
                    setSelectedModule={setSelectedModule}
                    radio={radio}
                    setRadio={setRadio}
                    disabled={disabled}
                    radioBtn={item.radio}
                  />
                ))}
              </div>
            </div>
            <div className={styles.cont2}>
              <div className={styles.headerTable}>
                <p className={styles.title}>Permisos</p>
              </div>
              <table className={styles.TablePanelOptions}>
                {/* <thead>
                  {selectedModule && selectedModule.map((e) => (
                    <tr key={e.id}>
                      {e.header.map((e) => (
                        <th key={e.key}>{e.text}</th>
                      ))}
                    </tr>
                  ))}
                </thead> */}
                <tbody>
                  {selectedModule && selectedModule.map((e) => (
                    <div className={styles.trTd} key={e.id}>
                      {e.childrens.map((e) => (
                        <tr key={e.id}>
                          <td key={e.key} className={e.group ? styles.tdBackground : ''}>
                            <p>{e.text}</p>
                          </td>
                          {e.options.map((e) => (
                            <td key={e.key}>
                              <p style={{ fontWeight: '700' }} className={e.value ? styles.color2 : styles.color}>{e.text}</p>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </div>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
