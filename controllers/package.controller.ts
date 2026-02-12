import type { Request, Response } from "express";
import PackageService from "../services/package.service.ts";

export default {
  async getAll(_: Request, response: Response) {
    const packages = await PackageService.getAll();

    response.send({ packages });
  },

  async bulkUpdatePrices(req: Request, res: Response) {
    const { updates } = req.body; // [{ packageId: 1, newPrice: 1000 }, ...]

    const results = await Promise.all(
      updates.map(async ({ packageId, newPrice }) => {
        const pack = await Package.findByPk(packageId);
        return await PackageService.updatePackagePrice(pack, newPrice);
      }),
    );

    res.json({ updated: results.length, packages: results });
  },
};
