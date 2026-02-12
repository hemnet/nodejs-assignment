import * as express from "express";
import packageController from "../controllers/package.controller.ts";

const router = express.Router();

router.get("/", packageController.getAll);
router.get(
  "/get-municipality-packages",
  packageController.getMunicipalityPackages,
);

export default router;
