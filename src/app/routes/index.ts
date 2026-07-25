import { Router } from "express";
import { specialtyRoutes } from "../module/specialty/specialty.route";
import { authRoutes } from "../module/auth/auth.route";
import { userRoutes } from "../module/user/user.route";

const router = Router();

router.use("/specialty", specialtyRoutes);
router.use("/auth", authRoutes);
router.use("/user", userRoutes);

export const indexRoutes = router;
