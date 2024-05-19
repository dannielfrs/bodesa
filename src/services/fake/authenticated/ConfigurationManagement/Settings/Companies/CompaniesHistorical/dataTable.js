import { faker } from '@faker-js/faker'

const dataTable = async (length) => {
  return Array.from({ length }, () => {
    return {
      date_time: faker.helpers.arrayElement(['23/07/2023 - 18:50:23', '22/07/2023 - 20:31:28', '22/07/2023 - 17:03:21']),
      action: faker.helpers.arrayElement(['Cambio de estatus - Activo', 'Cambio de estatus - Inactivo', 'Edición', 'Creación']),
      user: faker.name.fullName(),
      ip: faker.internet.ipv4(),
      device: faker.helpers.arrayElement(['PC', 'Tableta', 'Smartphone']),
      browser: faker.helpers.arrayElement(['Google Chrome', 'Safari', 'Firefox']),
      location: faker.helpers.arrayElement(['Guadalajara, Jalisco, México', 'Colima, Colima, México', 'Manzanillo, Colima, México'])
    }
  })
}
export default dataTable
