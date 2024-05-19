// 'use client'

import React, { useEffect, useState } from 'react'
import styles from './EditTemplates.module.scss'
import { HeaderViews } from '@/components/molecules/HeaderViews/HeaderViews'
import { Card } from '@/components/molecules/Card/Card'
import { FormHookProvider } from '@/components/layouts/Form/FormHookProvider'
import { useForm } from 'react-hook-form'
import { InputText } from '@/components/molecules/InputText/InputText/InputText'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'
import { Checkbox } from '@/components/molecules/Checkbox'
import { useRouter } from 'next/router'
import { DataTable } from '@/components/molecules/DataTable/DataTable'
import { StatusColumn } from '@/components/molecules/StatusColumn/StatusColumn'
import { Button } from '@/components/molecules/Button'
import ModalDocument from './ModalDocument/ModalDocument'
import { DataTableActions } from '@/components/molecules/DataTableActions/DataTableActions'
import { useRootContext } from '@/Provider/RootProvider'
import { useGetDataRefresh, usePostDataRefresh } from '@/customHooks/useGeneral'
import { useGetDataTable } from '@/services/ocr/templates/versions'
import { ChangeStatus, DeleteRow } from '@/services/general'
import { updateItemService } from '@/services/ocr/templates/templates'

export default function EditTemplates ({ title, showMode, editMode }) {
  const router = useRouter()
  const { id } = router.query
  const methods = useForm()
  const { setValue } = methods
  const [openModal, setOpenModal] = useState(false)
  const [modalMode, setModalMode] = useState('')
  const [versionId, setVersionId] = useState(null)

  const { selectCompany } = useRootContext()
  const documentTypeOptions = usePostDataRefresh('ocr/general/select/document-types', selectCompany)
  const establishmentOptions = usePostDataRefresh('ocr/general/select/establishments', selectCompany)
  const { data, loading } = useGetDataRefresh(`ocr/templates/${id}/edit`, id)
  const { dataTable, loadingTable, setDataTable } = useGetDataTable('ocr/templates/versions/data-table', id, openModal)

  useEffect(() => {
    if ((editMode || showMode) && data.data?.record) {
      for (const propertyName in data.data.record) {
        if (propertyName === 'documentType') {
          setValue(propertyName, data.data.record[propertyName].id)
        } else if (propertyName === 'establishment') {
          setValue(propertyName, data.data.record[propertyName].id)
        } else {
          setValue(propertyName, data.data.record[propertyName])
        }
      }
    }
  }, [data])

  const onSubmit = (data) => {
    updateItemService(`ocr/templates/${id}`, selectCompany, data, router)
  }

  const InputCode = {
    name: 'code',
    type: 'text',
    label: 'Código',
    placeholder: 'Código',
    readOnly: showMode,
    loading,
    required: true,
    rules: { required: true }
  }

  const InputName = {
    name: 'name',
    type: 'text',
    label: 'Nombre',
    placeholder: 'Nombre',
    readOnly: showMode,
    loading,
    required: true,
    rules: { required: true }
  }

  const dropdownType = {
    name: 'documentType',
    label: 'Tipo',
    placeholder: '-Selecciona una opción-',
    options: documentTypeOptions.data?.data?.records,
    optionLabel: 'text',
    optionValue: 'id',
    readOnly: showMode,
    filter: true,
    loading,
    required: true,
    rules: { required: true }
  }

  const dropdownEstablishment = {
    name: 'establishment',
    label: 'Establecimiento',
    placeholder: '-Selecciona una opción-',
    options: establishmentOptions.data?.data?.records,
    optionLabel: 'text',
    optionValue: 'id',
    readOnly: showMode,
    filter: true,
    loading,
    required: true,
    rules: { required: true }
  }

  const handleShow = (rowData) => {
    setOpenModal(true)
    setModalMode('showMode')
    setVersionId(rowData.id)
  }

  const handleEdit = (rowData) => {
    setOpenModal(true)
    setModalMode('editMode')
    setVersionId(rowData.id)
  }

  const handleActivate = (rowData) => {
    ChangeStatus(`ocr/templates/versions/${rowData.id}/change-status`, rowData.id, setDataTable, rowData.status)
  }

  const handleDelete = (rowData) => {
    DeleteRow(rowData.id, `ocr/templates/versions/${rowData.id}`, 'la versión', setDataTable)
  }

  const statusBodyTemplate = (rowData) => {
    return <StatusColumn status={rowData.status} />
  }

  const actionsBodyTemplate = (rowData) => {
    return (
      <DataTableActions
        showButton={rowData.actions?.show}
        editButton={editMode && rowData.actions?.edit}
        activateButton={editMode}
        deleteButton={editMode && rowData.actions?.delete}
        onClickShow={() => handleShow(rowData)}
        onClickEdit={() => handleEdit(rowData)}
        onClickActivate={() => handleActivate(rowData)}
        onClickDelete={() => handleDelete(rowData)}
        status={rowData.status}
      />
    )
  }

  const dataTableColumns = [
    { field: 'version', header: 'Versión', sortable: true, w: '300px' },
    { field: 'text_for_validation', header: 'Texto de identificación', sortable: true, w: '520px' },
    { field: 'observations', header: 'Observaciones', sortable: true, w: '400px' },
    { field: 'status', header: 'Estatus', body: statusBodyTemplate, sortable: true, w: '180px' },
    { field: 'actions', header: 'Acciones', body: actionsBodyTemplate, sortable: true, w: '201px' }
  ]

  return (
    <>
      <FormHookProvider methods={methods} method='POST' onSubmit={onSubmit}>
        <div className={styles.CreateTemplates}>
          <HeaderViews
            title={title}
            onClick={() => router.push('/system/ocr/templates')}
            disabled={showMode}
          />
          <Card>
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'center' }}>
              <div style={{ width: '200px' }}>
                <InputText {...InputCode} />
              </div>
              <div style={{ width: '540px' }}>
                <InputText {...InputName} />
              </div>
              <div style={{ width: '250px' }}>
                <Dropdown {...dropdownType} />
              </div>
              <div style={{ width: '370px' }}>
                <Dropdown {...dropdownEstablishment} />
              </div>
              <Checkbox
                name='save_scan'
                label='Guardar escaneo'
                defaultValue={false}
                disabled={showMode}
              />
            </div>
          </Card>
          <Card>
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <p className={styles.titleV}>Versiones</p>
              {!showMode &&
                <div>
                  <Button
                    variant='primary'
                    label='Nueva versión'
                    type='button'
                    height='35px'
                    width='120px'
                    onClick={() => { setVersionId(null); setOpenModal(true); setModalMode('createMode') }}
                  />
                </div>}
            </div>
            <div className={styles.container}>
              <DataTable
                data={dataTable.data}
                columns={dataTableColumns}
                loading={loadingTable}
                selectionMode='single'
                variant='secondary'
              />
            </div>
          </Card>
        </div>
      </FormHookProvider>
      {openModal &&
        <ModalDocument
          versionId={versionId}
          showMode={showMode || modalMode === 'showMode'}
          editMode={modalMode === 'editMode'}
          createMode={modalMode === 'createMode'}
          setOpenModal2={setOpenModal}
        />}
    </>
  )
}
