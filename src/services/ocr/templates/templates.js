import Swal from 'sweetalert2'
import { Loading, Success } from '@/utils/Loading'
import { errorResponse, postAxiosAuth, putAxiosAuth } from '@/services/axios'

export function createItemService (url, id, data, router) {
  Loading('Guardando plantilla')
  const form = new FormData()
  form.append('company_id', id)
  form.append('code', data.code)
  form.append('name', data.name)
  form.append('document_type', data.documentType)
  form.append('establishment', data.establishment)
  form.append('save_scan', data.save_scan)

  const resThen = (res) => {
    Success('Plantilla guardada con éxito', 'La plantilla se guardó de forma correcta')
    setTimeout(() => {
      Swal.close()
      router.push('/system/ocr/templates')
    }, 3000)
  }
  postAxiosAuth(url, form, resThen, errorResponse)
}

export function updateItemService (url, id, data, router) {
  Loading('Actualizando plantilla')
  const form = new FormData()
  form.append('company_id', id)
  form.append('code', data.code)
  form.append('name', data.name)
  form.append('document_type', data.documentType)
  form.append('establishment', data.establishment)
  form.append('save_scan', data.save_scan)

  const resThen = (res) => {
    Success('Plantilla actualizada', 'La plantilla se guardó de forma correcta')
    setTimeout(() => {
      Swal.close()
      router.push('/system/ocr/templates')
    }, 3000)
  }
  putAxiosAuth(url, form, resThen, errorResponse)
}
