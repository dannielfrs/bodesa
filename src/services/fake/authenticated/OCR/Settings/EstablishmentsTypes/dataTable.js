import { faker } from '@faker-js/faker'

const dataTable = async (length) => {
  return Array.from({ length }, () => {
    return {
      id: faker.string.uuid(),
      name: faker.person.firstName(),
      status: faker.datatype.boolean()
    }
  })
}
export default dataTable
