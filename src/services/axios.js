import { DecryptData } from '@/utils/Encrypt'
import axios from 'axios'
import Cookies from 'js-cookie'
import Swal from 'sweetalert2'
import alert from '@/../public/images/icons/advertament.svg'

const server = process.env.NEXT_PUBLIC_SERVER
const coockieData = process.env.NEXT_PUBLIC_COOCKIE

const axiosIntance = axios.create({ baseURL: server })
const axiosIntanceAuth = axios.create({ baseURL: `${server}authenticated/` })

axiosIntanceAuth.interceptors.request.use(function (config) {
  const data = Cookies.get(coockieData)
  const tokenAuth = DecryptData(data)

  config.headers.Authorization = `Bearer ${tokenAuth.token}`

  return config
}, function (error) {
  return Promise.reject(error)
})

export const getAxiosGuest = async (url, resThen, resErr, resFinal) => {
  return await axiosIntance.get(url).then((res) => { resThen(res) }).catch((error) => { resErr(error); throw new Error('Ocurrio un problema') }).finally(() => resFinal && resFinal())
}

export const postAxiosGuest = async (url, form, resThen, resErr, resFinal) => {
  return await axiosIntance.post(url, form).then((res) => { resThen(res) }).catch((error) => { resErr(error); throw new Error('Ocurrio un problema') }).finally(() => resFinal && resFinal())
}

export const getAxiosAuth = async (url, resThen, resErr, resFinal) => {
  return await axiosIntanceAuth.get(url).then((res) => { resThen(res) }).catch((error) => { resErr(error); throw new Error('Ocurrio un problema') }).finally(() => resFinal && resFinal())
}

export const postAxiosAuth = async (url, form, resThen, resErr, resFinal) => {
  return await axiosIntanceAuth.post(url, form).then((res) => { resThen(res) }).catch((error) => { resErr(error); throw new Error('Ocurrio un problema') }).finally(() => resFinal && resFinal())
}

export const putAxiosAuth = async (url, form, resThen, resErr, resFinal) => {
  return await axiosIntanceAuth.put(url, form).then((res) => { resThen(res) }).catch((error) => { resErr(error); throw new Error('Ocurrio un problema') }).finally(() => resFinal && resFinal())
}

export const patchAxiosAuth = async (url, resThen, resErr, resFinal) => {
  return await axiosIntanceAuth.patch(url).then((res) => { resThen(res) }).catch((error) => { resErr(error); throw new Error('Ocurrio un problema') }).finally(() => resFinal && resFinal())
}

export const deleteAxiosAuth = async (url, resThen, resErr, resFinal) => {
  return await axiosIntanceAuth.delete(url).then((res) => { resThen(res) }).catch((error) => { resErr(error); throw new Error('Ocurrio un problema') }).finally(() => resFinal && resFinal())
}

export const errorResponse = (res) => {
  if (res.response) {
    const { data } = res.response
    if (typeof data?.error === 'object') {
      const errors = data.error.errors

      let htmlItems = '<ul>'
      errors.forEach(error => {
        htmlItems += `<li>${error.field}: ${error.message}</li>`
      })
      htmlItems += '</ul>'

      Swal.fire({
        title: 'Ocurrió un error',
        iconHtml: `<img src="${alert.src}" style="width: 60px;height: 60px;" >`,
        html: htmlItems,
        showConfirmButton: true,
        customClass: {
          title: 'titleModal',
          popup: 'fontFamily'
        }
      })
    }
    if (typeof data?.error === 'string') {
      Swal.fire({
        title: 'Ocurrió un error',
        iconHtml: `<img src="${alert.src}" style="width: 60px;height: 60px;" >`,
        html: data?.error,
        showConfirmButton: true,
        customClass: {
          title: 'titleModal',
          popup: 'fontFamily'
        }
      })
    }
    if (data?.status === 401 && data.error.includes('Unauthorized')) {
      window.location.href = '/'
    }
  }
}

export const generateStaticParamsService = async (url) => {
  try {
    const response = await axiosIntanceAuth.post('ocr/general/select/companies')
    const selectedCompany = response.data.data.records.find(e => e.text.includes('La Marina')).id
    const form = {
      company_id: selectedCompany
    }
    const data = await axiosIntanceAuth.post(url, form)
    return data
  } catch (error) {
    errorResponse(error)
  }
}
