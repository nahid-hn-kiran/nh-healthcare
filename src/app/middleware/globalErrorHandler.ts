import { NextFunction, Request, Response } from "express";
import { envVars } from "../config/env";
import status from "http-status";
import z from "zod";
import { IErrorResposne, IErrorSources } from "../interfaces/error.interface";
import { handleZodError } from "../errorHelpers/handleZodError";

export const globalErrorHandler = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  err: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  if (envVars.NODE_ENV === "development") {
    console.log("Error from Global Error Handler ", err);
  }

  const errorSource: IErrorSources[] = [];
  let statusCode: number = status.INTERNAL_SERVER_ERROR;
  let message: string = "Internal server error";

  if (err instanceof z.ZodError) {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError.statusCode as number;
    message = simplifiedError.message;

    errorSource.push(...simplifiedError.errorSource!);
  }

  const errorResponse: IErrorResposne = {
    success: false,
    message: message,
    errorSource,
    error: envVars.NODE_ENV === "development" ? err.message : undefined,
  };

  res.status(statusCode).json(errorResponse);
};
