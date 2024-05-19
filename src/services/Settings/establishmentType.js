import Swal from 'sweetalert2'
import { Loading, Success } from '@/utils/Loading'
import { errorResponse, postAxiosAuth, putAxiosAuth } from '../axios'

export function PostEstablishmentType (url, company, data, router) {
  Loading('Guardando tipo de establecimiento')
  const form = {
    company_id: company,
    name: data
  }
  const resThen = (res) => {
    Success('Tipo de establecimiento guardado', 'El tipo de establecimiento se guardó de forma correcta')
    setTimeout(() => {
      Swal.close()
      router.push('/system/ocr/settings/catalogs/establishments-types')
    }, 3000)
  }
  postAxiosAuth(url, form, resThen, errorResponse)
}

export function PutEstablishmentType (url, company, data, router) {
  Loading('Actualizando tipo de establecimiento')
  const form = {
    company_id: company,
    name: data
  }
  const resThen = (res) => {
    Success('Tipo de establecimiento actualizado', 'El tipo de establecimiento se guardó de forma correcta')
    setTimeout(() => {
      Swal.close()
      router.push('/system/ocr/settings/catalogs/establishments-types')
    }, 3000)
  }
  putAxiosAuth(url, form, resThen, errorResponse)
}
