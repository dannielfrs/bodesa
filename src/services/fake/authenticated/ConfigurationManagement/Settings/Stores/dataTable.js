import { faker } from '@faker-js/faker'

const dataTable = async (length) => {
  return Array.from({ length }, () => {
    return {
      code: faker.helpers.arrayElement(['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9', 'P10']),
      company: faker.helpers.arrayElement(['La Marina', 'El Bodegón']),
      name: faker.person.jobDescriptor(),
      country: faker.location.country(),
      state: faker.location.city(),
      municipality: faker.location.cityName(),
      active: faker.helpers.arrayElement(['true', 'false']),
      status: faker.helpers.arrayElement(['Inactivo', 'Activo'])
    }
  })
}
export default dataTable
