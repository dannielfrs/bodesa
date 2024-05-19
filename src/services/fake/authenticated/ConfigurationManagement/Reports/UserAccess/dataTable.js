import { faker } from '@faker-js/faker'

const dataTable = async (length) => {
  return Array.from({ length }, () => {
    return {
      date_time: faker.helpers.arrayElement(['23/07/2023 - 18:50:23', '22/07/2023 - 20:31:28', '22/07/2023 - 17:03:21']),
      code: faker.helpers.arrayElement(['U25', 'U43', 'U51', 'U51', 'U53', 'U100', 'U102', 'U452', 'U550', 'U610', 'U623']),
      avatar: faker.image.avatar(),
      name: faker.name.fullName(),
      assigned_profile: faker.helpers.arrayElement(['Configuración de plantillas', 'Escaneo de documentos']),
      ip: faker.internet.ipv4(),
      device: faker.helpers.arrayElement(['PC', 'Tableta electrónica', 'Smartphone']),
      browser: faker.helpers.arrayElement(['Google Chrome', 'Safari', 'Firefox']),
      location: faker.helpers.arrayElement(['Guadalajara, Jalisco, México', 'Colima, Colima, México', 'Manzanillo, Colima, México'])
    }
  })
}
export default dataTable
