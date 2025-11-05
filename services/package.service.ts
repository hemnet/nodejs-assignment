import { sequelizeConnection } from '../db/config.ts'
import { Package } from '../models/package.ts'
import { Price } from '../models/price.ts'

export default {
  async getAll() {
    return await Package.findAll({
      include: [{ model: Price, as: 'prices' }],
    })
  },
  async updatePackagePrice(pack: Package, newPriceCents: number) {
    try {
      const newPackage = await sequelizeConnection.transaction(async (t) => {
        await Price.create(
          {
            packageId: pack.id,
            priceCents: pack.priceCents,
          },
          { transaction: t },
        )

        pack.priceCents = newPriceCents

        return pack.save({ transaction: t })
      })

      return newPackage
    } catch (err: unknown) {
      throw new Error('Error handling the transaction')
    }
  },
  async priceFor(packageName: string) {
    const foundPackage = await Package.findOne({
      where: { name: packageName },
    })

    if (!foundPackage) {
      return null
    }

    return foundPackage.priceCents
  },
}
