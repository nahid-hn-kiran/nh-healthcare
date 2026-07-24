import { Specialty } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createSpecialty = async (payload: Specialty) => {
  const result = await prisma.specialty.create({
    data: payload,
  });

  return result;
};

export const specialtyService = {
  createSpecialty,
};
