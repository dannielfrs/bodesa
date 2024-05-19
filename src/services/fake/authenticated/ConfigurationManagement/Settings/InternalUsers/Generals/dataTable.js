import { faker } from '@faker-js/faker'

const dataTable = async (length) => {
  const elementArray = Array.from({ length }, () => {
    return {
      company: faker.helpers.arrayElement(['La Marina', 'El Bodegón']),
      store: faker.helpers.arrayElement(['La Marina Madero', 'La Marina San Fernando', 'Oficina central administrativa', 'La Marina La Piedad']),
      dep: faker.helpers.arrayElement(['Gerencia general', 'Capacitación']),
      status: faker.datatype.boolean(),
      profile: faker.helpers.arrayElement(['Administrador del sistema', 'Gestión de perfiles', 'Configuración de plantillas', 'Escaneo de documentos', 'El Bodegón Colima']),
      job: faker.helpers.arrayElement(['Soporte técnico', 'Auxiliar administrativo', 'Asesor de crédito'])
    }
  })
  return elementArray
}

export default dataTable
