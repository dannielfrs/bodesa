import { faker } from '@faker-js/faker'

const dataTable = async (length) => {
  return Array.from({ length }, () => {
    return {
      code: faker.helpers.arrayElement(['U25', 'U43', 'U51', 'U51', 'U53', 'U100', 'U102', 'U452', 'U550', 'U610', 'U623']),
      avatar: faker.image.avatar(),
      name: faker.name.fullName(),
      assigned_profile: faker.helpers.arrayElement(['Configuración de plantillas', 'Escaneo de documentos']),
      ip: faker.internet.ipv4()
    }
  })
}
export default dataTable
