import { Router } from "express";
import { specialtyController } from "./specialty.controller";
import { checkAuth } from "../../middleware/checkAuth";
import { Role } from "../../../generated/prisma/enums";
import { validateRequest } from "../../middleware/validateRequest";
import { specialtyValidation } from "./specialty.validation";
import { multerUpload } from "../../config/multer.config";

const router = Router();

router.post(
  "/",
  // checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  multerUpload.single("file"),
  validateRequest(specialtyValidation.createSpecialtyZodSchema),

  specialtyController.createSpecialty,
);
router.get("/", specialtyController.getAllSpecialty);
router.delete(
  "/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  specialtyController.deleteSpecialty,
);
router.put(
  "/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  specialtyController.updateSpecialty,
);

export const specialtyRoutes = router;
