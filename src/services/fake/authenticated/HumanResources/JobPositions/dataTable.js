import { faker } from '@faker-js/faker'

const dataTable = async (length) => {
  return Array.from({ length }, () => {
    return {
      code: faker.helpers.arrayElement(['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9', 'P10']),
      positions: faker.person.jobType(),
      deparment: faker.person.jobDescriptor(),
      depence_position: faker.person.jobType(),
      level: faker.helpers.arrayElement(['Nivel 1', 'Nivel 2', 'Nivel 3', 'Nivel 4']),
      active: faker.helpers.arrayElement(['true', 'false']),
      status: faker.helpers.arrayElement(['Inactivo', 'Activo'])
    }
  })
}
export default dataTable
