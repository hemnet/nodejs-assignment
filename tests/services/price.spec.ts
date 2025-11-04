import { afterAll, beforeEach, describe, expect, it } from '@jest/globals'
import { sequelizeConnection } from '../../db/config.ts'
import { Package } from '../../models/package.ts'
import PackageService from '../../services/package.service.ts'

describe('PriceService', () => {
  // Set the db object to a variable which can be accessed throughout the whole test file
  const db = sequelizeConnection

  // Before any tests run, clear the DB and run migrations with Sequelize sync()
  beforeEach(async () => {
    await db.sync({ force: true })
  })

  afterAll(async () => {
    await db.close()
  })

  it('Returns the pricing history for the provided year and package', async () => {
    const basic = await Package.create({ name: 'basic', priceCents: 20_00 })
    const date = new Date()
  })

  it('Supports filtering on municipality', async () => {
    const basic = await Package.create({ name: 'basic', priceCents: 20_00 })
    const date = new Date()
  })
})
