import { faker } from '@faker-js/faker'

const dataTable = async (length) => {
  const elementArray = Array.from({ length }, () => {
    return {
      date: faker.helpers.arrayElement(['14/07/2023 - 12:50:15', '12/07/2023 - 10:50:23', '09/07/2023 - 13:10:57', '02/07/2023 - 10:50:23']),
      action: faker.helpers.arrayElement(['Cambio de estatus - Activo', 'Cambio de estatus - Inactivo', 'Edición', 'Creación']),
      user: faker.helpers.arrayElement(['Verónica Salcedo Robles', 'Juan Carlos Romero Perez', 'Abraham Márquez García']),
      status: faker.helpers.arrayElement(['active', 'inactive']),
      ip: faker.helpers.arrayElement(['190.187.197.17', '189.125.105.23', '188.178.132.15', '188.178.132.15']),
      appliance: faker.helpers.arrayElement(['PC', 'Tableta', 'Smartphone']),
      navigator: faker.helpers.arrayElement(['Windows Chromeg', 'Tableta', 'Smartphone']),
      ubication: faker.helpers.arrayElement(['Colima, Colima, México', 'Manzanillo, Colima, México', 'Guadalajara, Jalisco, México'])
    }
  })
  return elementArray
}

export default dataTable
