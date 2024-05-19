import Swal from 'sweetalert2'
import { Loading, Success } from '@/utils/Loading'
import { errorResponse, postAxiosAuth, putAxiosAuth } from './axios'

export const PostEstablishment = (url, company, data, img, router) => {
  Loading('Guardando establecimiento')
  const form = new FormData()
  form.append('company_id', company)
  form.append('name', data.name)
  form.append('establishment_type', data.type)
  form.append('code', data.code)
  form.append('logo', img)

  const resThen = (res) => {
    Success('Establecimiento guardado', 'El establecimiento se guardó de forma correcta')
    setTimeout(() => {
      Swal.close()
      router.push('/system/ocr/establishments')
    }, 3000)
  }
  postAxiosAuth(url, form, resThen, errorResponse)
}

export const PutEstablishment = (url, company, data, imageFile, router) => {
  Loading('Actualizando establecimiento')
  const form = new FormData()
  form.append('company_id', company)
  form.append('name', data.name)
  form.append('establishment_type', data.type)
  form.append('code', data.code)
  if (imageFile) form.append('logo', imageFile)

  const resThen = (res) => {
    Success('Establecimiento actualizado', 'El establecimiento se guardó de forma correcta')
    setTimeout(() => {
      Swal.close()
      router.push('/system/ocr/establishments')
    }, 3000)
  }
  putAxiosAuth(url, form, resThen, errorResponse)
}
