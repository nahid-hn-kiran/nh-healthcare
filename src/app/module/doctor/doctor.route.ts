import { Router } from "express";
import { doctorController } from "./doctor.controller";
import { checkAuth } from "../../middleware/checkAuth";
import { Role } from "../../../generated/prisma/enums";

const router = Router();

router.get("/", checkAuth(Role.PATIENT), doctorController.getAllDoctors);

export const doctorRoutes = router;
