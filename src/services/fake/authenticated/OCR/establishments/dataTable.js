import { faker } from '@faker-js/faker'

const dataTable = async (length) => {
  return Array.from({ length }, () => {
    return {
      code: faker.helpers.arrayElement(['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10']),
      documents: faker.helpers.arrayElement(['1', '2', '3', '4', '5']),
      name: faker.helpers.arrayElement(['Walmart', 'Soriana', 'Gasolineras - BP', 'Gasolineras - Pemex', '7 Eleven', 'Comisión Federal de Electricidad CFE']),
      type: faker.helpers.arrayElement(['Supermercado', 'Gasolinera', 'Tienda de autoservicio', 'Servicios de internet y conectividad', 'Servicios de internet y conectividad']),
      status: faker.datatype.boolean(),
      image: faker.image.avatar()
    }
  })
}
export default dataTable
