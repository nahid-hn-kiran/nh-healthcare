import { auth } from "../../lib/auth";
import { prisma } from "../../lib/prisma";

interface IRegisterPatientPayload {
  name: string;
  email: string;
  password: string;
}

interface IUserLoginPayload {
  email: string;
  password: string;
}

const registerPatient = async (payload: IRegisterPatientPayload) => {
  const { name, email, password } = payload;

  const data = await auth.api.signUpEmail({
    body: {
      name,
      email,
      password,
    },
  });

  if (!data) {
    throw new Error("Failed to register user");
  }

  const patient = await prisma.$transaction(async (tx) => {
    try {
      return await tx.patient.create({
        data: {
          userId: data.user.id,
          name: payload.name,
          email: payload.email,
        },
      });
    } catch (error) {
      await tx.user.delete({
        where: {
          id: data.user.id,
        },
      });

      throw error;
    }
  });

  return {
    ...data,
    patient,
  };
};

const loginUser = async (payload: IUserLoginPayload) => {
  const { email, password } = payload;

  const data = await auth.api.signInEmail({
    body: {
      email,
      password,
    },
  });

  if (!data) {
    throw new Error("Failed to Login");
  }

  return data;
};

export const authService = {
  registerPatient,
  loginUser,
};
