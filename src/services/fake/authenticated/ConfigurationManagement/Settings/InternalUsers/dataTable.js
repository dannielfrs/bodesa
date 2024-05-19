import { faker } from '@faker-js/faker'

const dataTable = async (length) => {
  const elementArray = Array.from({ length }, () => {
    return {
      code: faker.helpers.arrayElement(['U1', 'U2', 'U3', 'U4', 'U5', 'U6', 'U7', 'U8']),
      logo: faker.helpers.arrayElement(['/images/la_marina.svg', '/images/el_bodegon.svg']),
      name: faker.helpers.arrayElement(['Alejandro Díaz García', 'Sofía Rodríguez Pérez', 'Valentina López Martínez', 'Juan Martínez Sánchez', 'María Fernández González']),
      company: faker.helpers.arrayElement(['La Marina', 'El Bodegón']),
      store: faker.helpers.arrayElement(['La Marina Madero', 'La Marina San Fernando', 'Oficina central administrativa', 'La Marina La Piedad']),
      profile: faker.helpers.arrayElement(['Administrador del sistema', 'Gestión de perfiles', 'Configuración de plantillas', 'Escaneo de documentos', 'El Bodegón Colima']),
      position: faker.helpers.arrayElement(['Soporte técnico', 'Auxiliar administrativo', 'Asesor de crédito']),
      status: faker.datatype.boolean(),
      id: faker.string.uuid(),
      supplier: faker.helpers.arrayElement(['Consultoría Estratégica Global', 'Asesoría Empresarial Progresiva', 'Consultoría Innovadora Plus', 'Asesores Empresariales', 'Soluciones Consultivas Avanzadas', 'Consultoría Innovadora Plus'])
    }
  })
  return elementArray
}

export default dataTable
