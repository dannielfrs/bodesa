import { faker } from '@faker-js/faker'

const dataTable = async (length) => {
  const elementArray = Array.from({ length }, () => {
    return {
      name: faker.helpers.arrayElement(['Acta constitutiva', 'Constancia de situación fiscal', 'Comprobante de domicilio']),
      files: faker.helpers.arrayElement([1, 2, 3]),
      validity: faker.helpers.arrayElement(['Sin vigencia', '15/07/2023 al 31/08/2023', '15/07/2023 al 15/07/2024']),
      status: faker.helpers.arrayElement(['active', 'inactive'])
    }
  })
  return elementArray
}

export default dataTable
