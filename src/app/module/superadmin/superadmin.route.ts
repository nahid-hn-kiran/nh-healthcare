import { Router } from "express";
import { checkAuth } from "../../middleware/checkAuth";
import { Role } from "../../../generated/prisma/enums";
import { superAdminController } from "./superadmin.controller";

const router = Router();

router.get(
  "/",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  superAdminController.getAllSuperAdmins,
);
router.get(
  "/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  superAdminController.getSuperAdminById,
);
router.patch(
  "/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  superAdminController.updateSuperAdmin,
);
router.patch(
  "/:id/delete",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  superAdminController.deleteSuperAdmin,
);

export const superAdminRoutes = router;
