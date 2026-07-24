import { Request, Response } from "express";
import { specialtyService } from "./specialty.service";
import catchAsync from "../../shared/catchAsync";

const createSpecialty = catchAsync(async (req: Request, res: Response) => {
  const result = await specialtyService.createSpecialty(req.body);

  res.status(201).json({
    success: true,
    message: "Specialty created successfully",
    data: result,
  });
});

const getAllSpecialty = catchAsync(async (req: Request, res: Response) => {
  const result = await specialtyService.getAllSpecialty();

  res.status(201).json({
    success: true,
    message: "Specialty created successfully",
    data: result,
  });
});

const deleteSpecialty = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await specialtyService.deleteSpecialty(id as string);

  res.status(201).json({
    success: true,
    message: "Specialty created successfully",
    data: result,
  });
});

const updateSpecialty = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const { id } = req.params;
  const result = await specialtyService.updateSpecialty(id as string, payload);

  res.status(201).json({
    success: true,
    message: "Specialty created successfully",
    data: result,
  });
});

export const specialtyController = {
  createSpecialty,
  getAllSpecialty,
  deleteSpecialty,
  updateSpecialty,
};
