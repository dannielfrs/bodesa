// import CreateEstablishments from '@/components/organisms/Authenticated/OCR/Establishments/CreateEstablishments/CreateEstablishments'

// import { generateStaticParamsService } from '@/services/axios'
// import { DecryptData } from '@/utils/Encrypt'
// import axios from 'axios'
// import Cookies from 'js-cookie'
// import { cookies } from 'next/headers'

export const metadata = {
  title: 'Establecimientos'
}

// export const dynamic = 'force-dynamic'
// export const dynamicParams = true
// export const revalidate = 0

// export async function generateStaticParams() {
//   const data = await generateStaticParamsService('ocr/establishments/data-table')
//   console.log('response: ', data)
//   return data.data.data.map((item) => ({ id: item.id }))
// }

// export async function generateStaticParams () {
//   const res = await fetch('https://dummyjson.com/products?limit=10&select=title,price')
//   const data = await res.json()
//   console.log('data: ', data.products)
//   return data.products.map((product) => ({ id: product.id.toString() }))
//   // return [{ id: '1' }, { id: '2' }, { id: '3' }]
// }

// async function generateParams() {
//   const res = await fetch('https://dummyjson.com/products?limit=10&select=title,price')
//   const data = await res.json()
//   console.log('data', data.products)
//   return data.products.map((product) => ({ id: product.id.toString() }))
// }
// generateParams()

// const server = process.env.NEXT_PUBLIC_SERVER
// const coockieData = process.env.NEXT_PUBLIC_COOCKIE

// const axiosIntanceAuth = axios.create({ baseURL: `${server}authenticated/` })

// axiosIntanceAuth.interceptors.request.use(async function (config) {

//   const data = Cookies.get(coockieData)

//   const tokenAuth = DecryptData(data)

//   config.headers.Authorization = `Bearer ${tokenAuth.token}`

//   return config
// }, function (error) {
//   return Promise.reject(error)
// })

// export async function generateStaticParams() {
//   const cookieStore = cookies()
//   const theme = cookieStore.get(coockieData)
//   console.log('cookieStore.get: ', theme)
//   const response = await axiosIntanceAuth.post('ocr/general/select/companies')
//   const selectedCompany = response.data.data.records.find(e => e.text.includes('La Marina')).id
//   const form = {
//     company_id: selectedCompany
//   }
//   const data = await axiosIntanceAuth.post('ocr/establishments/data-table', form)
//   return data.data.data.map((item) => ({ id: item.id }))
// }

// async function getData () {
//   const response = await axiosIntanceAuth.post('ocr/general/select/companies')
//   const selectedCompany = response.data.data.records.find(e => e.text.includes('La Marina')).id
//   const form = {
//     company_id: selectedCompany
//   }
//   const data = await axiosIntanceAuth.post('ocr/establishments/data-table', form)
//   return data.data.data.map((item) => ({ id: item.id }))
// }
// getData()

// export function GET (request) {
//   const searchParams = request.nextUrl.searchParams
//   const id = searchParams.get('id')
// }

export default function Page ({ searchParams }) {
  return (
    // <CreateEstablishments title='Ver establecimiento' disabled searchParams={searchParams} />
    <></>
  )
}
