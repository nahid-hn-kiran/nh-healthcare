import { prisma } from "../../lib/prisma";

const getAllAdmins = async () => {
  const admin = await prisma.admin.findMany({
    include: {
      user: true,
    },
  });
  return admin;
};

export const adminService = {
  getAllAdmins,
};
