import status from "http-status";
import AppError from "../../errorHelpers/AppError";
import { prisma } from "../../lib/prisma";
import { IUpdateAdminPayload } from "./admin.interface";

const getAllAdmins = async () => {
  const admin = await prisma.admin.findMany({
    include: {
      user: true,
    },
  });
  return admin;
};

const getAdminById = async (id: string) => {
  const admin = await prisma.admin.findUnique({
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

const updateAdmin = async (id: string, payload: IUpdateAdminPayload) => {
  const existingAdmin = await prisma.admin.findUnique({
    where: { id, isDeleted: false },
  });

  if (!existingAdmin) {
    throw new Error("Doctor not found");
  }

  const updatedAdmin = await prisma.admin.update({
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

const deleteAdmin = async (id: string) => {
  const admin = await prisma.admin.findUnique({
    where: {
      id,
    },
  });

  if (!admin) {
    throw new AppError(status.NOT_FOUND, "No admin Found!");
  }

  if (admin.isDeleted) {
    throw new AppError(status.NOT_FOUND, "Doctor already deleted!");
  }

  const result = await prisma.admin.update({
    where: { id },
    data: {
      isDeleted: true,
      deletedAt: new Date(),
    },
  });

  return result;
};

export const adminService = {
  getAllAdmins,
  getAdminById,
  updateAdmin,
  deleteAdmin,
};
