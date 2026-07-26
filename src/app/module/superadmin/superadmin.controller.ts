import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";
import { superAdminService } from "./superadmin.service";

const getAllSuperAdmins = catchAsync(async (req: Request, res: Response) => {
  const result = await superAdminService.getAllSuperAdmins();

  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Super Admin retrived successfully",
    data: result,
  });
});

const getSuperAdminById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await superAdminService.getSuperAdminById(id as string);

  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Super Admin retrived successfully",
    data: result,
  });
});

const updateSuperAdmin = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await superAdminService.updateSuperAdmin(
    id as string,
    req.body,
  );

  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Super Admin updated successfully",
    data: result,
  });
});

const deleteSuperAdmin = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await superAdminService.deleteSuperAdmin(id as string);

  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Super Admin deleted successfully",
    data: result,
  });
});

export const superAdminController = {
  getAllSuperAdmins,
  getSuperAdminById,
  updateSuperAdmin,
  deleteSuperAdmin,
};
