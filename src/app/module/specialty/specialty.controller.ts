import { Request, Response } from "express";
import { specialtyService } from "./specialty.service";

const createSpecialty = async (req: Request, res: Response) => {
  try {
    const result = await specialtyService.createSpecialty(req.body);

    res.status(201).json({
      success: true,
      message: "Specialty created successfully",
      data: result,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Failed to create Specialty",
      data: error,
    });
  }
};

export const specialtyController = {
  createSpecialty,
};
