import Swal from 'sweetalert2'
import Cookies from 'js-cookie'
import { Loading, Success } from '@/utils/Loading'
import { errorResponse, postAxiosAuth, postAxiosGuest } from './axios'
import { EncryptData } from '@/utils/Encrypt'

export async function LoginValidate (data, router, setError, setLoading) {
  try {
    const coockieName = process.env.NEXT_PUBLIC_COOCKIE
    Loading('Validando credenciales de acceso')
    setLoading(true)

    const form = {
      username: data.user,
      password: data.password
    }

    const resThen = (res) => {
      setError(false)
      const auth = {
        token: res.data.data.token
      }
      const encrypt = EncryptData(auth)
      Cookies.set(coockieName, encrypt)
      Success('Credenciales correctas')
      setTimeout(() => {
        Swal.close()
        router.push('/verification-code')
      }, 3000)
    }

    await postAxiosGuest('authenticate/login', form, resThen, errorResponse)
  } catch {
    setLoading(false)
    setError(true)
  }
}

export async function CodeValidate (data, router, setError, setLoading) {
  try {
    const coockieName = process.env.NEXT_PUBLIC_COOCKIE
    Loading('Validando código de acceso')
    setLoading(true)
    const form = {
      security_code: data
    }

    const resThen = (res) => {
      setError(false)
      const auth = {
        token: res.data.data.token,
        user: res.data.data.user
      }
      const encrypt = EncryptData(auth)
      Cookies.set(coockieName, encrypt)
      Success('Acceso autorizado', 'Código validado de forma correcta')
      setTimeout(() => {
        Swal.close()
        router.push('/system/ocr/control-panels/employee')
      }, 3000)
    }

    await postAxiosAuth('security-code', form, resThen, errorResponse)
  } catch {
    setLoading(false)
    setError(true)
  }
}
