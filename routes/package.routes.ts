import { Router } from "express";
import packageController from "../controllers/package.controller";

const router = Router();

router.get("/api/packages", packageController.getAll);
router.post(
  "/api/packages/bulk-update-prices",
  packageController.bulkUpdatePrices,
);

export default router;
