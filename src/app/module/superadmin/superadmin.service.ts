import status from "http-status";
import AppError from "../../errorHelpers/AppError";
import { prisma } from "../../lib/prisma";
import { IUpdateSuperAdminPayload } from "./superadmin.interface";

const getAllSuperAdmins = async () => {
  const admin = await prisma.superAdmin.findMany({
    where: {
      isDeleted: false,
    },
    select: {
      user: true,
    },
  });
  return admin;
};

const getSuperAdminById = async (id: string) => {
  const admin = await prisma.superAdmin.findUnique({
    where: {
      id: id,
      isDeleted: false,
    },
    include: {
      user: true,
    },
  });

  if (!admin) {
    throw new AppError(status.NOT_FOUND, "Admin not found!");
  }

  return {
    admin,
  };
};

const updateSuperAdmin = async (
  id: string,
  payload: IUpdateSuperAdminPayload,
) => {
  const existingAdmin = await prisma.superAdmin.findUnique({
    where: { id, isDeleted: false },
  });

  if (!existingAdmin) {
    throw new Error("Admin not found");
  }

  const updatedAdmin = await prisma.superAdmin.update({
    where: { id },
    data: payload,
    include: {
      user: true,
    },
  });

  return {
    updatedAdmin,
  };
};

const deleteSuperAdmin = async (id: string) => {
  const admin = await prisma.superAdmin.findUnique({
    where: {
      id,
    },
  });

  if (!admin) {
    throw new AppError(status.NOT_FOUND, "No Super admin Found!");
  }

  if (admin.isDeleted) {
    throw new AppError(status.NOT_FOUND, "Admin already deleted!");
  }

  const result = await prisma.superAdmin.update({
    where: { id },
    data: {
      isDeleted: true,
      deletedAt: new Date(),
    },
  });

  return result;
};

export const superAdminService = {
  getAllSuperAdmins,
  getSuperAdminById,
  updateSuperAdmin,
  deleteSuperAdmin,
};
