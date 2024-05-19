import { faker } from '@faker-js/faker'

const dataTable = async (length) => {
  return Array.from({ length }, () => {
    return {
      code: faker.helpers.arrayElement(['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10']),
      deparment: faker.person.jobArea(),
      description: faker.person.jobDescriptor(),
      active: faker.helpers.arrayElement(['true', 'false']),
      status: faker.helpers.arrayElement(['Inactivo', 'Activo'])
    }
  })
}
export default dataTable
