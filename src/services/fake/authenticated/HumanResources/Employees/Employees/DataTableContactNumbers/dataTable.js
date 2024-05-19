import { faker } from '@faker-js/faker'

const dataTable = async (length) => {
  const elementArray = Array.from({ length }, () => {
    return {
      type: faker.helpers.arrayElement(['Casa', 'Celular', 'Otro']),
      number: faker.helpers.arrayElement(['+52 3123237620', '+52 3123237673', '+52 3123237681']),
      contact_person: faker.helpers.arrayElement(['Hermano - Joel Ramirez Pérez', 'Hermana - Claudia Ramirez Pérez']),
      status: faker.datatype.boolean()
    }
  })
  return elementArray
}

export default dataTable