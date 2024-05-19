import { faker } from '@faker-js/faker'

const dataTable = async (length) => {
  const elementArray = Array.from({ length }, () => {
    return {
      code: faker.helpers.arrayElement(['E1', 'E2']),
      logo: faker.helpers.arrayElement(['/images/la_marina.svg', '/images/el_bodegon.svg']),
      name: faker.helpers.arrayElement(['La Marina', 'El Bodegón']),
      type: faker.helpers.arrayElement(['Persona moral']),
      status: faker.helpers.arrayElement(['active', 'inactive'])
    }
  })
  return elementArray
}

export default dataTable
