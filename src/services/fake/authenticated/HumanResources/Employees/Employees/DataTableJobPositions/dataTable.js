import { faker } from '@faker-js/faker'

const dataTable = async (length) => {
  const elementArray = Array.from({ length }, () => {
    return {
      company: faker.helpers.arrayElement(['La Marina', 'El Bodegón']),
      type: faker.helpers.arrayElement(['Tienda', 'Ubicación operativa']),
      location: faker.helpers.arrayElement(['La Marina Madero', 'El Bodegón San José de García', 'Oficinas centrales']),
      start_date: faker.helpers.arrayElement(['01/09/2023', '02/08/2023', '05/07/2023']),
      finish_date: faker.helpers.arrayElement(['Indefinido', 'Indefinido', '31/07/2023']),
      job_position: faker.helpers.arrayElement(['Gerente de tienda', 'Capacitador']),
      status: faker.datatype.boolean()
    }
  })
  return elementArray
}

export default dataTable