import { Router } from "express";
import { specialtyRoutes } from "../module/specialty/specialty.route";
import { authRoutes } from "../module/auth/auth.route";

const router = Router();

router.use("/specialty", specialtyRoutes);
router.use("/auth", authRoutes);

export const indexRoutes = router;
