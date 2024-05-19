import { faker } from '@faker-js/faker'

const dataTable = async (length) => {
  const elementArray = Array.from({ length }, () => {
    return {
      name: faker.helpers.arrayElement(['Casa', 'Oficina', 'Otro']),
      status: faker.datatype.boolean()
    }
  })
  return elementArray
}

export default dataTable
