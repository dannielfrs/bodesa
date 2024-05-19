import { faker } from '@faker-js/faker'

const dataTable = async (length) => {
  return Array.from({ length }, () => {
    return {
      field: faker.helpers.arrayElement(['Nombre completo', 'Nombre', 'Apellido paterno', 'Apellido materno', 'Domicilio completo', 'Calle', 'Numero exterior', 'Numero interior', 'Estado', 'Municipio']),
      description: faker.helpers.arrayElement(['Nombre completo del titular del documento', 'Domicilio completo del titular del documento', '']),
      status: faker.datatype.boolean(),
      id: faker.string.uuid()
    }
  })
}
export default dataTable
