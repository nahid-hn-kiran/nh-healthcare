import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";
import { doctorService } from "./doctor.service";

const getAllDoctors = catchAsync(async (req: Request, res: Response) => {
  const result = await doctorService.getAllDoctors();

  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Doctor retrived successfully",
    data: result,
  });
});

export const doctorController = {
  getAllDoctors,
};
