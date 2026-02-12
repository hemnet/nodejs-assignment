import { Request, Response } from "express";
import PackageService from "../services/package.service.ts";
import { Package } from "../models/package.ts";

export default {
  async getAll(_: Request, response: Response) {
    const packages = await PackageService.getAll();

    response.send({ packages });
  },

  async getMunicipalityPackages(req, res) {
    const id = req.params.id;
    const packages = await Package.findAll({
      where: {
        municipality_id: id,
      },
    });
    res.json(packages);
  },
};
