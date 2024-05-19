import { faker } from '@faker-js/faker'

const dataTable = async (length) => {
  return Array.from({ length }, () => {
    return {
      module: faker.helpers.arrayElement(['Configuración y gestión', 'Recursos Humanos', 'OCR']),
      users_online: faker.helpers.arrayElement([8, 12, 27])
    }
  })
}
export default dataTable
