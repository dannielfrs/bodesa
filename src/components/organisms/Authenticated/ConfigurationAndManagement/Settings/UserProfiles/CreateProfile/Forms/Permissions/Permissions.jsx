import { useEffect, useState } from 'react'
// components🔨
import { Checkbox } from '@/components/molecules/Checkbox'
import { Card } from '@/components/molecules/Card/Card'
import PanelOptions from './PanelOptions/PanelOptions'

// styles📸
import styles from './Permissions.module.scss'

// assets
import settings from '@/../public/images/icons/settings.svg'
import humans from '@/../public/images/icons/humans.svg'
import qcr from '@/../public/images/icons/qcr.svg'

export default function Permissions ({ methods, disabled }) {
  const [radio, setRadio] = useState('')
  const [selectedModule, setSelectedModule] = useState('')
  const [selectedFunction, setSelectedFunction] = useState('')

  // Configuración y gestión
  const optionsStControlPanel = [
    {
      id: 'scp_1',
      header: [
        { text: 'Reporte / Listado / Formulario', key: 'scp_reports' },
        { text: 'Ver', key: 'scp_view' }
      ],
      childrens: [
        {
          id: 'scp_1',
          key: 'k_scp__1',
          text: 'Usuarios',
          options: [
            { text: '', key: 'scp_sc_view', value: false, name: 'scp__sc_view' }
          ]
        }
      ]
    }
  ]

  const optionsStReports = [
    {
      id: 'str_1',
      header: [
        { text: 'Reporte / Listado / Formulario', key: 'str_reports' },
        { text: 'Ver', key: 'str_view' }
      ],
      childrens: [
        {
          id: 'str_1',
          key: 'key_str_1',
          text: 'Acceso de usuarios',
          options: [
            { text: '', key: 'aus_view', value: false, name: 'aus_view' }
          ]
        }
      ]
    }
  ]

  const optionsStSettings = [
    {
      id: 'sts_1',
      header: [
        { text: 'Reporte / Listado / Formulario', key: 'sts_reports' },
        { text: 'Listado', key: 'sts_list' },
        { text: 'Nuevo', key: 'sts_new' },
        { text: 'Editar', key: 'sts_edit' },
        { text: 'Ver', key: 'sts_show' },
        { text: 'Activar', key: 'sts_active ' },
        { text: 'Inactivar', key: 'sts_inactive ' },
        { text: 'Eliminar', key: 'sts_delete ' },
        { text: 'Historial', key: 'sts_history ' }
      ],
      childrens: [
        {
          id: 'sts_1',
          key: 'key_sts_1',
          text: 'Perfil de usuario',
          options: [
            { text: '', key: 'sts_pf_list', value: false, name: 'sts_c_list' },
            { text: '', key: 'sts_pf_new', value: false, name: 'sts_c_new' },
            { text: '', key: 'sts_pf_edit', value: false, name: 'sts_c_edit' },
            { text: '', key: 'sts_pf_show', value: false, name: 'sts_c_show' },
            { text: '', key: 'sts_pf_active', value: false, name: 'sts_c_active' },
            { text: '', key: 'sts_pf_inactive', value: false, name: 'sts_c_inactive' },
            { text: '', key: 'sts_pf_delete', value: false, name: 'sts_c_delete' },
            { text: '', key: 'sts_pf_history', value: false, name: 'sts_c_history' }
          ]
        },
        {
          key: 'key_sts_2',
          text: 'Usuarios',
          options: [
            { text: '', key: 'sts_sc_list', value: false, name: 'sts_us_list' },
            { text: '', key: 'sts_sc_new', value: false, name: 'sts_us_new' },
            { text: '', key: 'sts_sc_edit', value: false, name: 'sts_us_edit' },
            { text: '', key: 'sts_sc_show', value: false, name: 'sts_us_show' },
            { text: '', key: 'sts_sc_active', value: false, name: 'sts_us_active' },
            { text: '', key: 'sts_sc_inactive', value: false, name: 'sts_us_inactive' },
            { text: '', key: 'sts_sc_delete', value: false, name: 'sts_us_delete' },
            { text: '', key: 'sts_sc_history', value: false, name: 'sts_us_history' }
          ]
        },
        {
          key: 'key_sts_3',
          text: 'Tiendas',
          options: [
            { text: '', key: 'sts_st_list', value: false, name: 'sts_st_list' },
            { text: '', key: 'sts_st_user', value: false, name: 'sts_st_new' },
            { text: '', key: 'sts_st_user', value: false, name: 'sts_st_edit' },
            { text: '', key: 'sts_st_user', value: false, name: 'sts_st_show' },
            { text: '', key: 'sts_st_user', value: false, name: 'sts_st_active' },
            { text: '', key: 'sts_st_user', value: false, name: 'sts_st_inactive' },
            { text: '', key: 'sts_st_user', value: false, name: 'sts_st_delete' },
            { text: '', key: 'sts_st_user', value: false, name: 'sts_st_history' }
          ]
        },
        {
          key: 'key_sts_4',
          text: 'Ubicaciones operativas',
          options: [
            { text: '', key: 'sts_ol_list', value: false, name: 'sts_ol_list' },
            { text: '', key: 'sts_ol_new', value: false, name: 'sts_ol_new' },
            { text: '', key: 'sts_ol_edit', value: false, name: 'sts_ol_edit' },
            { text: '', key: 'sts_ol_show', value: false, name: 'sts_ol_show' },
            { text: '', key: 'sts_ol_active', value: false, name: 'sts_ol_active' },
            { text: '', key: 'sts_ol_inactive', value: false, name: 'sts_ol_inactive' },
            { text: '', key: 'sts_ol_delete', value: false, name: 'sts_ol_delete' },
            { text: '', key: 'sts_ol_history', value: false, name: 'sts_ol_history' }
          ]
        },
        {
          key: 'key_sts_5',
          text: 'Empresas',
          options: [
            { text: '', key: 'sts_cp_list', value: false, name: 'sts_cp_list' },
            { text: '', key: 'sts_cp_new', value: false, name: 'sts_cp_new' },
            { text: '', key: 'sts_cp_edit', value: false, name: 'sts_cp_edit' },
            { text: '', key: 'sts_cp_show', value: false, name: 'sts_cp_show' },
            { text: '', key: 'sts_cp_active', value: false, name: 'sts_cp_active' },
            { text: '', key: 'sts_cp_inactive', value: false, name: 'sts_cp_inactive' },
            { text: '', key: 'sts_cp_delete', value: false, name: 'sts_cp_delete' },
            { text: '', key: 'sts_cp_history', value: false, name: 'sts_cp_history' }
          ]
        }
      ]
    }
  ]

  // Recursos Humanos

  const optionsHRPanelControl = [
    {
      id: 'hrpc_1',
      header: [
        { text: 'Reporte / Listado / Formulario', key: 'hrpc_reports' },
        { text: 'Ver', key: 'hrpc_view' }
      ],
      childrens: [
        {
          id: 'hrpc_1',
          key: 'key_hrpc_1',
          text: 'Empleados',
          options: [
            { text: '', key: 'sc_view', value: false, name: 'hrpc_view' }
          ]
        }
      ]
    }
  ]

  const optionsHREmployees = [
    {
      id: 'hrEmp_1',
      header: [
        { text: 'Reporte / Listado / Formulario', key: 'hrEmp_reports' },
        { text: 'Listado', key: 'hrEmp_list' },
        { text: 'Nuevo', key: 'hrEmp_new' },
        { text: 'Editar', key: 'hrEmp_edit' },
        { text: 'Ver', key: 'hrEmp_show' },
        { text: 'Activar', key: 'hrEmp_active ' },
        { text: 'Inactivar', key: 'hrEmp_inactive ' },
        { text: 'Eliminar', key: 'hrEmp_delete ' },
        { text: 'Historial', key: 'hrEmp_history ' }
      ],
      childrens: [
        {
          id: 'hrEmp_1',
          key: 'key_hrEmp_1',
          text: 'Catálogos',
          options: [
            { text: '', key: 'hrpc_pf_list', value: false, name: 'hrpc_c_list' },
            { text: '', key: 'hrpc_pf_new', value: false, name: 'hrpc_c_new' },
            { text: '', key: 'hrpc_pf_edit', value: false, name: 'hrpc_c_edit' },
            { text: '', key: 'hrpc_pf_show', value: false, name: 'hrpc_c_show' },
            { text: '', key: 'hrpc_pf_active', value: false, name: 'hrpc_c_active' },
            { text: '', key: 'hrpc_pf_inactive', value: false, name: 'hrpc_c_inactive' },
            { text: '', key: 'hrpc_pf_delete', value: false, name: 'hrpc_c_delete' },
            { text: '', key: 'hrpc_pf_history', value: false, name: 'hrpc_c_history' }
          ]
        },
        {
          id: 'hrEmp_1',
          key: 'key_hrEm_emp2',
          text: 'Empleados',
          options: [
            { text: '', key: 'hrEm_list', value: false, name: 'hrpc_us_list' },
            { text: '', key: 'hrEm_new', value: false, name: 'hrpc_us_new' },
            { text: '', key: 'hrEm_edit', value: false, name: 'hrpc_us_edit' },
            { text: '', key: 'hrEm_show', value: false, name: 'hrpc_us_show' },
            { text: '', key: 'hrEm_active', value: false, name: 'hrpc_us_active' },
            { text: '', key: 'hrEm_inactive', value: false, name: 'hrpc_us_inactive' },
            { text: '', key: 'hrEm_delete', value: false, name: 'hrpc_us_delete' },
            { text: '', key: 'hrEm_history', value: false, name: 'hrpc_us_history' }
          ]
        }
      ]
    }
  ]

  const optionsHRStructure = [
    {
      id: 'hrStrc_1',
      header: [
        { text: 'Reporte / Listado / Formulario', key: 'hrStrc_reports' },
        { text: 'Listado', key: 'hrStrc_list' },
        { text: 'Nuevo', key: 'hrStrc_new' },
        { text: 'Editar', key: 'hrStrc_edit' },
        { text: 'Ver', key: 'hrStrc_show' },
        { text: 'Activar', key: 'hrStrc_active ' },
        { text: 'Inactivar', key: 'hrStrc_inactive ' },
        { text: 'Eliminar', key: 'hrStrc_delete ' },
        { text: 'Historial', key: 'hrStrc_history ' }
      ],
      childrens: [
        {
          id: 'hrStrc_1',
          key: 'key_hrStrc_2',
          text: 'Organigrama',
          options: [
            { text: '', key: 'hrStrc_pf_list', value: false, name: 'hrStrc_c_list' },
            { text: '', key: 'hrStrc_pf_new', value: false, name: 'hrStrc_c_new' },
            { text: '', key: 'hrStrc_pf_edit', value: false, name: 'hrStrc_c_edit' },
            { text: '', key: 'hrStrc_pf_show', value: false, name: 'hrStrc_c_show' },
            { text: '', key: 'hrStrc_pf_active', value: false, name: 'hrStrc_c_active' },
            { text: '', key: 'hrStrc_pf_inactive', value: false, name: 'hrStrc_c_inactive' },
            { text: '', key: 'hrStrc_pf_delete', value: false, name: 'hrStrc_c_delete' },
            { text: '', key: 'hrStrc_pf_history', value: false, name: 'hrStrc_c_history' }
          ]
        },
        {
          id: 'hrStrc_1',
          key: 'key_hrpc_sc3',
          text: 'Puestos',
          options: [
            { text: '', key: 'hrpc_sc_list', value: false, name: 'hrpc_us_list' },
            { text: '', key: 'hrpc_sc_new', value: false, name: 'hrpc_us_new' },
            { text: '', key: 'hrpc_sc_edit', value: false, name: 'hrpc_us_edit' },
            { text: '', key: 'hrpc_sc_show', value: false, name: 'hrpc_us_show' },
            { text: '', key: 'hrpc_sc_active', value: false, name: 'hrpc_us_active' },
            { text: '', key: 'hrpc_sc_inactive', value: false, name: 'hrpc_us_inactive' },
            { text: '', key: 'hrpc_sc_delete', value: false, name: 'hrpc_us_delete' },
            { text: '', key: 'hrpc_sc_history', value: false, name: 'hrpc_us_history' }
          ]
        },
        {
          id: 'hrStrc_1',
          key: 'key_hrpc_sc3',
          text: 'Departamentos',
          options: [
            { text: '', key: 'hrpc_dp_list', value: false, name: 'hrpc_dp_list' },
            { text: '', key: 'hrpc_dp_new', value: false, name: 'hrpc_dp_new' },
            { text: '', key: 'hrpc_dp_edit', value: false, name: 'hrpc_dp_edit' },
            { text: '', key: 'hrpc_dp_show', value: false, name: 'hrpc_dp_show' },
            { text: '', key: 'hrpc_dp_active', value: false, name: 'hrpc_dp_active' },
            { text: '', key: 'hrpc_dp_inactive', value: false, name: 'hrpc_dp_inactive' },
            { text: '', key: 'hrpc_dp_delete', value: false, name: 'hrpc_dp_delete' },
            { text: '', key: 'hrpc_dp_history', value: false, name: 'hrpc_dp_history' }
          ]
        }
      ]
    }
  ]

  const optionsHRReports = [
    {
      id: 'hhtReports_1',
      header: [
        { text: 'Reporte / Listado / Formulario', key: 'hhtReports_reports' },
        { text: 'Listado', key: 'hhtReports_list' },
        { text: 'Nuevo', key: 'hhtReports_new' },
        { text: 'Editar', key: 'hhtReports_edit' },
        { text: 'Ver', key: 'hhtReports_show' },
        { text: 'Activar', key: 'hhtReports_active ' },
        { text: 'Inactivar', key: 'hhtReports_inactive ' },
        { text: 'Eliminar', key: 'hhtReports_delete ' },
        { text: 'Historial', key: 'hhtReports_history ' }
      ],
      childrens: [
        {
          id: 'hhtReports_1',
          key: 'key_hhtReports1',
          text: 'Empleados',
          options: [
            { text: '', key: 'hhtReports_list', value: false, name: 'hhtReports_list' },
            { text: '', key: 'hhtReports_new', value: false, name: 'hhtReports_new' },
            { text: '', key: 'hhtReports_edit', value: false, name: 'hhtReports_edit' },
            { text: '', key: 'hhtReports_show', value: false, name: 'hhtReports_show' },
            { text: '', key: 'hhtReports_active', value: false, name: 'hhtReports_active' },
            { text: '', key: 'hhtReports_inactive', value: false, name: 'hhtReports_inactive' },
            { text: '', key: 'hhtReports_delete', value: false, name: 'hhtReports_delete' },
            { text: '', key: 'hhtReports_history', value: false, name: 'hhtReports_history' }
          ]
        }
      ]
    }
  ]

  const optionsHRSettings = [
    {
      id: 'hrSt_1',
      header: [
        { text: 'Reporte / Listado / Formulario', key: 'hrSt_reports' },
        { text: 'Listado', key: 'hrSt_list' },
        { text: 'Nuevo', key: 'hrSt_new' },
        { text: 'Editar', key: 'hrSt_edit' },
        { text: 'Ver', key: 'hrSt_show' },
        { text: 'Activar', key: 'hrSt_active ' },
        { text: 'Inactivar', key: 'hrSt_inactive ' },
        { text: 'Eliminar', key: 'hrSt_delete ' },
        { text: 'Historial', key: 'hrSt_history ' }
      ],
      childrens: [
        {
          id: 'hrSt_1',
          key: 'key_hrSt_1',
          text: 'Catálogos',
          options: [
            { text: '', key: 'hrSt_c_list', value: false, name: 'hrSt_c_list' },
            { text: '', key: 'hrSt_c_new', value: false, name: 'hrSt_c_new' },
            { text: '', key: 'hrSt_c_edit', value: false, name: 'hrSt_c_edit' },
            { text: '', key: 'hrSt_c_show', value: false, name: 'hrSt_c_show' },
            { text: '', key: 'hrSt_c_active', value: false, name: 'hrSt_c_active' },
            { text: '', key: 'hrSt_c_inactive', value: false, name: 'hrSt_c_inactive' },
            { text: '', key: 'hrSt_c_delete', value: false, name: 'hrSt_c_delete' },
            { text: '', key: 'hrSt_c_history', value: false, name: 'hrSt_c_history' }
          ]
        }
      ]
    }
  ]

  // QCR
  const optionsQCPanel = [
    {
      id: 'qcrPa_1',
      header: [
        { text: 'Reporte / Listado / Formulario', key: 'qcrPa_reports' },
        { text: 'Ver', key: 'qcrPa_view' }
      ],
      childrens: [
        {
          id: 'qcrPa_1',
          key: 'key_qcrPa_2',
          text: 'OCR',
          options: [
            { text: '', key: 'qcrPa_view', value: false, name: 'qcrPa_view' }
          ]
        }
      ]
    }
  ]

  const optionsQCScan = [
    {
      id: 'qcs_scan_1',
      header: [
        { text: 'Reporte / Listado / Formulario', key: 'qcs_scan_reports' },
        { text: 'Ver', key: 'qcs_scan_view' }
      ],
      childrens: [
        {
          id: 'qcs_scan_1',
          key: 'key_qcs_scan_2',
          text: 'Escaner',
          options: [
            { text: '', key: 'qcs_scan_view', value: false, name: 'view' }
          ]
        }
      ]
    }
  ]

  const optionsQCTemplate = [
    {
      id: 'qctemp_1',
      header: [
        { text: 'Reporte / Listado / Formulario', key: 'qctemp_reports' },
        { text: 'Listado', key: 'qctemp_list' },
        { text: 'Nuevo', key: 'qctemp_new' },
        { text: 'Editar', key: 'qctemp_edit' },
        { text: 'Ver', key: 'qctemp_show' },
        { text: 'Activar', key: 'qctemp_active ' },
        { text: 'Inactivar', key: 'qctemp_inactive ' },
        { text: 'Eliminar', key: 'qctemp_delete ' },
        { text: 'Historial', key: 'qctemp_history ' }
      ],
      childrens: [
        {
          id: 'qctemp_1',
          key: 1,
          text: 'Plantillas',
          options: [
            { text: '', key: 'qctemp_list', value: false, name: 'qctemp_list' },
            { text: '', key: 'qctemp_new', value: false, name: 'qctemp_new' },
            { text: '', key: 'qctemp_edit', value: false, name: 'qctemp_edit' },
            { text: '', key: 'qctemp_show', value: false, name: 'qctemp_show' },
            { text: '', key: 'qctemp_active', value: false, name: 'qctemp_active' },
            { text: '', key: 'qctemp_inactive', value: false, name: 'qctemp_inactive' },
            { text: '', key: 'qctemp_delete', value: false, name: 'qctemp_delete' },
            { text: '', key: 'qctemp_history', value: false, name: 'qctemp_history' }
          ]
        }
      ]
    }
  ]

  const optionsQCFields = [
    {
      id: 'qcf_1',
      header: [
        { text: 'Reporte / Listado / Formulario', key: 'qcf_reports' },
        { text: 'Listado', key: 'qcf_list' },
        { text: 'Nuevo', key: 'qcf_new' },
        { text: 'Editar', key: 'qcf_edit' },
        { text: 'Ver', key: 'qcf_show' },
        { text: 'Activar', key: 'qcf_active ' },
        { text: 'Inactivar', key: 'qcf_inactive ' },
        { text: 'Eliminar', key: 'qcf_delete ' },
        { text: 'Historial', key: 'qcf_history ' }
      ],
      childrens: [
        {
          id: 'qcf_1',
          key: 'key_qcf_2',
          text: 'Campos',
          options: [
            { text: '', key: 'qcfit_list', value: false, name: 'qcfit_list' },
            { text: '', key: 'qcfit_new', value: false, name: 'qcfit_new' },
            { text: '', key: 'qcfit_edit', value: false, name: 'qcfit_edit' },
            { text: '', key: 'qcfit_show', value: false, name: 'qcfit_show' },
            { text: '', key: 'qcfit_active', value: false, name: 'qcfit_active' },
            { text: '', key: 'qcfit_inactive', value: false, name: 'qcfit_inactive' },
            { text: '', key: 'qcfit_delete', value: false, name: 'qcfit_delete' },
            { text: '', key: 'qcfit_history', value: false, name: 'qcfit_history' }
          ]
        }
      ]
    }
  ]

  const optionsQCEstablishments = [
    {
      id: 'opQCEst_1',
      header: [
        { text: 'Reporte / Listado / Formulario', key: 'opQCEst_reports' },
        { text: 'Listado', key: 'opQCEst_list' },
        { text: 'Nuevo', key: 'opQCEst_new' },
        { text: 'Editar', key: 'opQCEst_edit' },
        { text: 'Ver', key: 'opQCEst_show' },
        { text: 'Activar', key: 'opQCEst_active ' },
        { text: 'Inactivar', key: 'opQCEst_inactive ' },
        { text: 'Eliminar', key: 'opQCEst_delete ' },
        { text: 'Historial', key: 'opQCEst_history ' }
      ],
      childrens: [
        {
          id: 'opQCEst_1',
          key: 'key_opQCEst_1',
          text: 'Establecimientos',
          options: [
            { text: '', key: 'opQCEst_list', value: false, name: 'opQCEst_list' },
            { text: '', key: 'opQCEst_new', value: false, name: 'opQCEst_new' },
            { text: '', key: 'opQCEst_edit', value: false, name: 'opQCEst_edit' },
            { text: '', key: 'opQCEst_show', value: false, name: 'opQCEst_show' },
            { text: '', key: 'opQCEst_active', value: false, name: 'opQCEst_active' },
            { text: '', key: 'opQCEst_inactive', value: false, name: 'opQCEst_inactive' },
            { text: '', key: 'opQCEst_delete', value: false, name: 'opQCEst_delete' },
            { text: '', key: 'opQCEst_history', value: false, name: 'opQCEst_history' }
          ]
        }
      ]
    }
  ]

  const optionsQCReports = [
    {
      id: 'qqcr_1',
      header: [
        { text: 'Reporte / Listado / Formulario', key: 'qqcr_reports' },
        { text: 'Ver', key: 'view' }
      ],
      childrens: [
        {
          id: 'qqcr_1',
          key: 1,
          text: 'Reporte',
          options: [
            { text: '', key: 'qqcr_view', value: false, name: 'qqcr_view' }
          ]
        }
      ]
    }
  ]

  const optionsQCSettings = [
    {
      id: 'opQC_st_1',
      header: [
        { text: 'Reporte / Listado / Formulario', key: 'opQC_st_reports' },
        { text: 'Listado', key: 'opQC_st_list' },
        { text: 'Nuevo', key: 'opQC_st_new' },
        { text: 'Editar', key: 'opQC_st_edit' },
        { text: 'Ver', key: 'opQC_st_show' },
        { text: 'Activar', key: 'opQC_st_active ' },
        { text: 'Inactivar', key: 'opQC_st_inactive ' },
        { text: 'Eliminar', key: 'opQC_st_delete ' },
        { text: 'Historial', key: 'opQC_st_history ' }
      ],
      childrens: [
        {
          id: 'opQC_st_1',
          key: 'key_opQC_st_2',
          text: 'Tipos establecimientos',
          options: [
            { text: '', key: 'opQC_st_list', value: false, name: 'opQC_st_list' },
            { text: '', key: 'opQC_st_new', value: false, name: 'opQC_st_new' },
            { text: '', key: 'opQC_st_edit', value: false, name: 'opQC_st_edit' },
            { text: '', key: 'opQC_st_show', value: false, name: 'opQC_st_show' },
            { text: '', key: 'opQC_st_active', value: false, name: 'opQC_st_active' },
            { text: '', key: 'opQC_st_inactive', value: false, name: 'opQC_st_inactive' },
            { text: '', key: 'opQC_st_delete', value: false, name: 'opQC_st_delete' },
            { text: '', key: 'opQC_st_history', value: false, name: 'opQC_st_history' }
          ]
        },
        {
          id: 'opQC_st_1',
          key: 'key_opQC_st_3',
          text: 'Tipos plantillas',
          options: [
            { text: '', key: 'qc_type_user', value: false, name: 'qc_type_list' },
            { text: '', key: 'qc_type_user', value: false, name: 'qc_type_new' },
            { text: '', key: 'qc_type_user', value: false, name: 'qc_type_edit' },
            { text: '', key: 'qc_type_user', value: false, name: 'qc_type_show' },
            { text: '', key: 'qc_type_user', value: false, name: 'qc_type_active' },
            { text: '', key: 'qc_type_user', value: false, name: 'qc_type_inactive' },
            { text: '', key: 'qc_type_user', value: false, name: 'qc_type_delete' },
            { text: '', key: 'qc_type_user', value: false, name: 'qc_type_history' }
          ]
        }
      ]
    }
  ]

  // funcionOptions

  const optionsSettings = [
    {
      id: 1,
      childrens: [
        {
          id: 'scp_1',
          text: 'Panel de control',
          key: 'cg_control_panel',
          value: false,
          options: optionsStControlPanel
        },
        {
          id: 'str_1',
          text: 'Reportes',
          key: 'cg_reports',
          value: false,
          options: optionsStReports
        },
        {
          id: 'sts_1',
          text: 'Configuraciones',
          key: 'cg_settings',
          value: false,
          options: optionsStSettings
        }
      ]
    }
  ]

  const optionsHumanResources = [
    {
      id: 2,
      childrens: [
        { id: 'hrpc_1', text: 'Panel de control', key: 'hr_control_panel', value: false, options: optionsHRPanelControl },
        { id: 'hrEmp_1', text: 'Empleados', key: 'hr_employees', value: false, options: optionsHREmployees },
        { id: 'hrStrc_1', text: 'Estructura organizacional', key: 'hr_structure', value: false, options: optionsHRStructure },
        { id: 'hhtReports_1', text: 'Reportes', key: 'hr_reports', value: false, options: optionsHRReports },
        { id: 'hrSt_1', text: 'Configuraciones', key: 'hr_settings', value: false, options: optionsHRSettings }
      ]
    }
  ]

  const optionsQCR = [
    {
      id: 3,
      childrens: [
        { id: 'qcrPa_1', text: 'Panel de control', key: 'qcr_control_panel', value: false, options: optionsQCPanel },
        { id: 'qcs_scan_1', text: 'Escaner', key: 'qcr_scanner', value: false, options: optionsQCScan },
        { id: 'qctemp_1', text: 'Plantillas', key: 'qcr_templates', value: false, options: optionsQCTemplate },
        { id: 'qcf_1', text: 'Campos', key: 'qcr_fields', value: false, options: optionsQCFields },
        { id: 'opQCEst_1', text: 'Establecimientos', key: 'qcr_establishments', value: false, options: optionsQCEstablishments },
        { id: 'qqcr_1', text: 'Reportes', key: 'qcr_reports', value: false, options: optionsQCReports },
        { id: 'opQC_st_1', text: 'Configuraciones', key: 'qcr_settings', value: false, options: optionsQCSettings }
      ]
    }
  ]

  const positionOptions = [
    {
      id: 1,
      icon: settings,
      value: disabled,
      text: 'Configuración y gestión',
      options: optionsSettings
    },
    {
      id: 2,
      icon: humans,
      text: 'Recursos humanos',
      options: optionsHumanResources
    },
    {
      id: 3,
      icon: qcr,
      text: 'OCR',
      options: optionsQCR
    }
  ]

  useEffect(() => {
    if (disabled) {
      setSelectedModule(optionsSettings)
      setSelectedFunction(optionsStControlPanel)
    }
  }, [])

  return (
    <>
      <div className={styles.Permissions}>
        <Card className={styles.card_table}>
          <div className={styles.header}>
            <p className={styles.title}>Módulos</p>
          </div>
          <div className={styles.Options}>
            {positionOptions.map((item) => (
              <PanelOptions
                key={item.id}
                item={item}
                image
                radio={radio}
                setRadio={setRadio}
                selectedModule={selectedModule}
                setSelectedModule={setSelectedModule}
                disabled={disabled}
              />
            ))}
          </div>
        </Card>
        <Card className={`${styles.card_table} ${styles.funcionability}`}>
          <div className={styles.header}>
            <p className={styles.title}>Funcionalidades</p>
          </div>
          <div className={styles.Options}>
            {selectedModule &&
              selectedModule[0].childrens.map((item) => (
                <PanelOptions
                  key={item.key}
                  item={item}
                  checkbox={false}
                  radioBtn={false}
                  selectedModule={selectedFunction}
                  setSelectedModule={setSelectedFunction}
                  disabled={disabled}
                />
              ))}
          </div>
        </Card>
        <Card className={styles.card_report}>
          <table className={styles.TablePanelOptions}>
            <thead>
              {selectedFunction && selectedFunction.map((e) => (
                <tr key={e.id}>
                  {e.header.map((e) => (
                    <th key={e.key}>{e.text}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {selectedFunction && selectedFunction.map((e) => (
                <div className={styles.trTd} key={e.id}>
                  {e.childrens.map((e) => (
                    <tr key={e.id}>
                      <td key={e.key}>
                        <p>{e.text}</p>
                      </td>
                      {e.options.map((e) => (
                        <td key={e.key}>
                          <Checkbox name={e.name} disabled={disabled} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </div>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </>
  )
}
