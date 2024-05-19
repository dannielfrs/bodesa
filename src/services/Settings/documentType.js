import Swal from 'sweetalert2'
import { Loading, Success } from '@/utils/Loading'
import { errorResponse, postAxiosAuth, putAxiosAuth } from '../axios'

export function PostDocumentType (url, company, data, router) {
  Loading('Guardando tipo de documento')
  const form = {
    company_id: company,
    name: data
  }
  const resThen = (res) => {
    Success('Tipo de documento guardado', 'El tipo de documento se guardó de forma correcta')
    setTimeout(() => {
      Swal.close()
      router.push('/system/ocr/settings/catalogs/documents-types')
    }, 3000)
  }
  postAxiosAuth(url, form, resThen, errorResponse)
}

export function PutDocumentType (url, company, data, router) {
  Loading('Actualizando tipo de documento')
  const form = {
    company_id: company,
    name: data
  }
  const resThen = (res) => {
    Success('Tipo de documento actualizado', 'El tipo de documento se guardó de forma correcta')
    setTimeout(() => {
      Swal.close()
      router.push('/system/ocr/settings/catalogs/documents-types')
    }, 3000)
  }
  putAxiosAuth(url, form, resThen, errorResponse)
}
