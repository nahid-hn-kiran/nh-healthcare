import { Specialty } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createSpecialty = async (payload: Specialty) => {
  const result = await prisma.specialty.create({
    data: payload,
  });

  return result;
};

const getAllSpecialty = async () => {
  const result = await prisma.specialty.findMany();
  return result;
};

const deleteSpecialty = async (id: string) => {
  const specialty = await prisma.specialty.delete({
    where: { id },
  });
  return specialty;
};

const updateSpecialty = async (id: string, payload: Partial<Specialty>) => {
  const specialty = await prisma.specialty.update({
    where: { id },
    data: payload,
  });
  return specialty;
};

export const specialtyService = {
  createSpecialty,
  getAllSpecialty,
  deleteSpecialty,
  updateSpecialty,
};
