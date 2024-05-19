import Swal from 'sweetalert2'
import { Loading, Success } from '@/utils/Loading'
import { errorResponse, postAxiosAuth } from '@/services/axios'

export function sendScanner (url, id, data, document, setData, front) {
  if (data.version && document) {
    Loading('Escaneando documento')
    const form = new FormData()
    form.append('company_id', id)
    form.append('version', data.version)
    form.append('document', document)
    form.append('front', front)

    const resThen = (response) => {
      Success('Escaneo concluido', 'El escaneo se realizó de forma correcta')
      setTimeout(() => {
        setData(response.data.data.xml)
        Swal.close()
      }, 3000)
    }
    postAxiosAuth(url, form, resThen, errorResponse)
  }
}
