import { faker } from '@faker-js/faker'

const dataTable = async (length) => {
  return Array.from({ length }, () => {
    return {
      code: faker.helpers.arrayElement(['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9', 'P10']),
      name: faker.person.jobDescriptor(),
      modules: faker.helpers.arrayElement(['Todos', '1', '8', '2']),
      licenses: faker.helpers.arrayElement(['Todos', '15', '8', '5']),
      users: faker.helpers.arrayElement(['-', '1', '31', '40']),
      company: faker.helpers.arrayElement(['La marina', 'El Bodegón']),
      active: faker.helpers.arrayElement(['true', 'false']),
      status: faker.helpers.arrayElement(['Inactivo', 'Activo'])
    }
  })
}
export default dataTable
