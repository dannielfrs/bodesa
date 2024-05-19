import { faker } from '@faker-js/faker'

const dataTable = async (length) => {
  return Array.from({ length }, () => {
    return {
      code: faker.helpers.arrayElement(['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P8', 'P9', 'P10']),
      establishment: faker.helpers.arrayElement(['Waltmart', 'Soriana', 'Gasolineras - BP', 'Gasolineras - Pemex', '7 Eleven']),
      type: faker.helpers.arrayElement(['Ticket de consumo', 'Factura', 'Gasolineras - BP', 'Gasolineras - Pemex', '7 Eleven']),
      name: faker.helpers.arrayElement(['Ticket general de consumo en tienda', 'Factura fiscal']),
      fields: faker.helpers.arrayElement(['15', '12']),
      status: faker.datatype.boolean(),
      image: faker.image.avatar(),
      id: faker.string.uuid()
    }
  })
}
export default dataTable
