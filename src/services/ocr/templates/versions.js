import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { Loading, Success } from '@/utils/Loading'
import { errorResponse, postAxiosAuth, putAxiosAuth } from '@/services/axios'
import { PostData } from '@/services/general'

export function useGetDataTable (url, id, openModal) {
  const [dataTable, setDataTable] = useState([])
  const [loadingTable, setLoadingTable] = useState(true)
  const form = {
    template: id
  }
  useEffect(() => {
    if (id) PostData(url, form, setDataTable, setLoadingTable)
  }, [id, loadingTable, openModal])

  return { dataTable, loadingTable, setDataTable, setLoadingTable }
}

export function createItemService (url, id, data, frontFields, frontImageFile, backFields, backImageFile, setOpenModal) {
  Loading('Guardando versión')
  const form = new FormData()
  form.append('template', id)
  form.append('version', data.version)
  data.text_for_validation.forEach((item, index) => {
    form.append(`text_for_validation[${index}]`, item)
  })
  if (data.observations) form.append('observations', data.observations)
  const frontFieldsFiltered = frontFields.filter((item) => item.geometry !== undefined)
  frontFieldsFiltered.forEach((item, index) => {
    form.append(`front_fields[${index}][data][field][id]`, item.data.field.id)
    form.append(`front_fields[${index}][geometry][height]`, item.geometry.height)
    form.append(`front_fields[${index}][geometry][type]`, item.geometry.type)
    form.append(`front_fields[${index}][geometry][width]`, item.geometry.width)
    form.append(`front_fields[${index}][geometry][x]`, item.geometry.x)
    form.append(`front_fields[${index}][geometry][y]`, item.geometry.y)
  })
  form.append('front_document', frontImageFile)
  const backFieldsFiltered = backFields.filter((item) => item.geometry !== undefined)
  if (backFieldsFiltered.length > 0) {
    backFieldsFiltered.forEach((item, index) => {
      form.append(`back_fields[${index}][data][field][id]`, item.data.field.id)
      form.append(`back_fields[${index}][geometry][height]`, item.geometry.height)
      form.append(`back_fields[${index}][geometry][type]`, item.geometry.type)
      form.append(`back_fields[${index}][geometry][width]`, item.geometry.width)
      form.append(`back_fields[${index}][geometry][x]`, item.geometry.x)
      form.append(`back_fields[${index}][geometry][y]`, item.geometry.y)
    })
    form.append('back_document', backImageFile)
  }

  const resThen = (res) => {
    Success('Versión guardada', 'La versión se guardó de forma correcta')
    setTimeout(() => {
      Swal.close()
      setOpenModal(false)
    }, 3000)
  }
  postAxiosAuth(url, form, resThen, errorResponse)
}

export function updateItemService (url, id, data, frontFields, frontImageFile, backFields, backImageFile, setOpenModal) {
  Loading('Actualizando versión')
  const form = new FormData()
  form.append('template', id)
  form.append('version', data.version)
  data.text_for_validation.forEach((item, index) => {
    form.append(`text_for_validation[${index}]`, item)
  })
  if (data.observations) form.append('observations', data.observations)
  const frontFieldsFiltered = frontFields.filter((item) => item.geometry !== undefined)
  frontFieldsFiltered.forEach((item, index) => {
    form.append(`front_fields[${index}][data][field][id]`, item.data.field.id)
    form.append(`front_fields[${index}][geometry][height]`, item.geometry.height)
    form.append(`front_fields[${index}][geometry][type]`, item.geometry.type)
    form.append(`front_fields[${index}][geometry][width]`, item.geometry.width)
    form.append(`front_fields[${index}][geometry][x]`, item.geometry.x)
    form.append(`front_fields[${index}][geometry][y]`, item.geometry.y)
  })
  if (frontImageFile) {
    form.append('front_document', frontImageFile)
  }
  const backFieldsFiltered = backFields.filter((item) => item.geometry !== undefined)
  if (backFieldsFiltered.length > 0) {
    backFieldsFiltered.forEach((item, index) => {
      form.append(`back_fields[${index}][data][field][id]`, item.data.field.id)
      form.append(`back_fields[${index}][geometry][height]`, item.geometry.height)
      form.append(`back_fields[${index}][geometry][type]`, item.geometry.type)
      form.append(`back_fields[${index}][geometry][width]`, item.geometry.width)
      form.append(`back_fields[${index}][geometry][x]`, item.geometry.x)
      form.append(`back_fields[${index}][geometry][y]`, item.geometry.y)
    })
    if (backImageFile) {
      form.append('back_document', backImageFile)
    }
  }

  const resThen = (res) => {
    Success('Versión actualizada', 'La versión se guardó de forma correcta')
    setTimeout(() => {
      Swal.close()
      setOpenModal(false)
    }, 3000)
  }
  putAxiosAuth(url, form, resThen, errorResponse)
}
