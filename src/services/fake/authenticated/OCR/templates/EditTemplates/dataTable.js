import { faker } from '@faker-js/faker'

const dataTable = async (length) => {
  return Array.from({ length }, () => {
    return {
      version: faker.helpers.arrayElement(['CFRE 2023']),
      text: faker.helpers.arrayElement(['CFE Suministrador de Servicios Básivos Río Ródano No. 14, colonia Cuau...']),
      observations: faker.helpers.arrayElement(['Comprobante de domicilio CFE para el año 2023']),
      status: faker.datatype.boolean(),
      id: faker.string.uuid()
    }
  })
}
export default dataTable
