import { Router } from "express";
import { userController } from "./user.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { createAdminZodSchema, createDoctorZodSchema } from "./user.validation";

const router = Router();

router.post(
  "/doctor",
  validateRequest(createDoctorZodSchema),
  userController.createDoctor,
);

router.post(
  "/create-admin",
  validateRequest(createAdminZodSchema),
  userController.createAdmin,
);

export const userRoutes = router;
