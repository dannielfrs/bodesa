import { faker } from '@faker-js/faker'

const dataTable = async (length) => {
  return Array.from({ length }, () => {
    return {
      code: faker.helpers.arrayElement(['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10']),
      image: faker.image.avatar(),
      rfc: faker.helpers.arrayElement(['DIGA8801012A8']),
      company: faker.helpers.arrayElement(['La Marina', 'El Bodegón']),
      store: faker.company.bsNoun(),
      positions: faker.person.jobArea(),
      active: faker.helpers.arrayElement(['true', 'false']),
      status: faker.datatype.boolean()
    }
  })
}
export default dataTable
