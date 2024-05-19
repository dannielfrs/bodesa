import { faker } from '@faker-js/faker'

const dataTable = async (length) => {
  return Array.from({ length }, () => {
    return {
      date: faker.helpers.arrayElement(['04/07/2023 - 18:50', '28/10/2023 - 13:13', '06/08/2023 - 11:11']),
      ip: faker.internet.ip(),
      devices: faker.helpers.arrayElement(['Computadora', 'Tableta', 'Smartphone'])
    }
  })
}
export default dataTable
