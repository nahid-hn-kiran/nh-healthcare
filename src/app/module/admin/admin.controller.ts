import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";
import { adminService } from "./admin.service";

const getAllAdmins = catchAsync(async (req: Request, res: Response) => {
  const result = await adminService.getAllAdmins();

  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Admin retrived successfully",
    data: result,
  });
});

const getAdminById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await adminService.getAdminById(id as string);

  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Admin retrived successfully",
    data: result,
  });
});

const updateAdmin = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await adminService.updateAdmin(id as string, req.body);

  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Admin updated successfully",
    data: result,
  });
});

const deleteAdmin = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = req.user;

  const result = await adminService.deleteAdmin(id as string, user);

  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Admin deleted successfully",
    data: result,
  });
});

export const adminController = {
  getAllAdmins,
  getAdminById,
  updateAdmin,
  deleteAdmin,
};
