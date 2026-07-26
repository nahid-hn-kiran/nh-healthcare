import { Router } from "express";
import { checkAuth } from "../../middleware/checkAuth";
import { Role } from "../../../generated/prisma/enums";
import { adminController } from "./admin.controller";

const router = Router();

router.get(
  "/",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  adminController.getAllAdmins,
);
router.get(
  "/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  adminController.getAdminById,
);
router.patch(
  "/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  adminController.updateAdmin,
);
router.patch(
  "/:id/delete",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  adminController.deleteAdmin,
);

export const adminRoutes = router;
