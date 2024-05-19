import Swal from 'sweetalert2'
import { deleteAxiosAuth, errorResponse, getAxiosAuth, patchAxiosAuth, postAxiosAuth } from './axios'
import { Delete, Loading, Success } from '@/utils/Loading'

export function GetData (url, setData, setLoading) {
  const resThen = (res) => setData(res.data)
  const resFinal = () => setLoading(false)

  getAxiosAuth(url, resThen, errorResponse, resFinal)
}

export function PostData (url, form, setData, setLoading) {
  const resThen = (res) => setData(res.data)
  const resFinal = () => setLoading(false)

  postAxiosAuth(url, form, resThen, errorResponse, resFinal)
}

export function ChangeStatusRow (url, id, setData, status) {
  Loading('Cambiando estatus')
  const resThen = (res) => {
    Success('Se realizo el cambio con exito', `El registro se ${status ? 'inactivo' : 'activo'} de forma correcta`)
    setTimeout(() => {
      setData((data) => {
        const copy = { data: data.data }
        const findIndex = copy.data.content.findIndex(e => e.id === id)
        copy.data[findIndex].status = !status
        return copy
      })
      Swal.close()
    }, 2000)
  }

  patchAxiosAuth(url, resThen, errorResponse)
}

export function ChangeStatus (url, id, setData, status) {
  Loading('Cambiando estatus')
  const resThen = (res) => {
    Success('Se realizo el cambio con exito', `El registro se ${status ? 'inactivo' : 'activo'} de forma correcta`)
    setTimeout(() => {
      setData((data) => {
        const copy = { data: data.data }
        const findIndex = copy.data.findIndex(item => item.id === id)
        copy.data[findIndex].status = !status
        return copy
      })
      Swal.close()
    }, 2000)
  }

  patchAxiosAuth(url, resThen, errorResponse)
}

export function changeStatusService (url, setRefresh, status) {
  Loading('Cambiando estatus')
  const resThen = (res) => {
    Success('Se realizo el cambio con exito', `El registro se ${status ? 'inactivo' : 'activo'} de forma correcta`)
    setTimeout(() => {
      setRefresh((refresh) => !refresh)
      Swal.close()
    }, 2000)
  }
  patchAxiosAuth(url, resThen, errorResponse)
}

export function DeleteRow (id, url, rowName, setData) {
  const resThen = (res) => {
    setData((data) => {
      const newData = data.data.filter(e => e.id !== id)
      return { data: newData }
    })
    Success(`Se elimino ${rowName}`, 'El registro se elimino de forma correcta')
    setTimeout(() => {
      Swal.close()
    }, 2000)
  }

  const onConfirm = () => {
    deleteAxiosAuth(url, resThen, errorResponse)
  }

  Delete(`¿Estas seguro que deseas eliminar ${rowName}?`, onConfirm)
}
