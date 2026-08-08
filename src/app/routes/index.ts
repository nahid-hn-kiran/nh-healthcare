import { Router } from "express";
import { specialtyRoutes } from "../module/specialty/specialty.route";
import { authRoutes } from "../module/auth/auth.route";
import { userRoutes } from "../module/user/user.route";
import { doctorRoutes } from "../module/doctor/doctor.route";
import { adminRoutes } from "../module/admin/admin.route";
import { superAdminRoutes } from "../module/superadmin/superadmin.route";
import { scheduleRoutes } from "../module/schedule/schedule.route";

const router = Router();

router.use("/specialty", specialtyRoutes);
router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/doctor", doctorRoutes);
router.use("/admin", adminRoutes);
router.use("/super-admin", superAdminRoutes);
router.use("/schedule", scheduleRoutes);

export const indexRoutes = router;
