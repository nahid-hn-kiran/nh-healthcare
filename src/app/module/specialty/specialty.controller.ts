import { Request, Response } from "express";
import { specialtyService } from "./specialty.service";
import catchAsync from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";

const createSpecialty = catchAsync(async (req: Request, res: Response) => {
  const result = await specialtyService.createSpecialty(req.body);

  sendResponse(res, {
    httpStatusCode: 201,
    success: true,
    message: "Specialty created successfully",
    data: result,
  });
});

const getAllSpecialty = catchAsync(async (req: Request, res: Response) => {
  const result = await specialtyService.getAllSpecialty();

  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Specialty retrived successfully",
    data: result,
  });
});

const deleteSpecialty = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await specialtyService.deleteSpecialty(id as string);

  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Specialty deleted successfully",
    data: result,
  });
});

const updateSpecialty = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const { id } = req.params;
  const result = await specialtyService.updateSpecialty(id as string, payload);

  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Specialty updated successfully",
    data: result,
  });
});

export const specialtyController = {
  createSpecialty,
  getAllSpecialty,
  deleteSpecialty,
  updateSpecialty,
};
