import Swal from 'sweetalert2'
import { Loading, Success } from '@/utils/Loading'
import { errorResponse, postAxiosAuth, putAxiosAuth } from './axios'

export function PostField (url, company, data, router) {
  Loading('Guardando campo')
  const form = {
    company_id: company,
    name: data.name,
    description: data.description ? data.description : ''
  }
  const resThen = (res) => {
    Success('Campo guardado', 'El campo se guardó de forma correcta')
    setTimeout(() => {
      Swal.close()
      router.push('/system/ocr/fields')
    }, 3000)
  }
  postAxiosAuth(url, form, resThen, errorResponse)
}

export function PutField (url, company, data, router) {
  Loading('Actualizando campo')
  const form = {
    company_id: company,
    name: data.name,
    description: data.description ? data.description : ''
  }
  const resThen = (res) => {
    Success('Campo actualizado', 'El campo se guardó de forma correcta')
    setTimeout(() => {
      Swal.close()
      router.push('/system/ocr/fields')
    }, 3000)
  }
  putAxiosAuth(url, form, resThen, errorResponse)
}
