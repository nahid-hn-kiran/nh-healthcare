import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import status from "http-status";
import AppError from "../errorHelpers/AppError";
import { envVars } from "./env";

cloudinary.config({
  cloud_name: envVars.CLOUDINARY.CLOUDINARY_CLOUD_NAME,
  api_key: envVars.CLOUDINARY.CLOUDINARY_API_KEY,
  api_secret: envVars.CLOUDINARY.CLOUDINARY_API_SECRET,
});

/**
 * Uploads a Buffer (Image/PDF) to Cloudinary
 */
export const uploadFileToCloudinary = async (
  buffer: Buffer,
  folder: string = "uploads",
): Promise<UploadApiResponse> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder: folder,
          resource_type: "auto", // Automatically detects images, PDFs, and docs
        },
        (error, result) => {
          if (error) {
            console.error("Cloudinary upload error:", error);
            return reject(error);
          }
          if (!result) {
            return reject(new Error("Cloudinary upload returned empty result"));
          }

          resolve(result as UploadApiResponse);
        },
      )
      .end(buffer);
  });
};

/**
 * Deletes a file from Cloudinary using its public_id
 */
export const deleteFileFromCloudinary = async (
  publicId: string,
  resourceType: "image" | "raw" | "video" | "auto" = "auto",
) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId, {
      resource_type: resourceType,
    });

    console.log(`File ${publicId} deletion result:`, result);
    return result;
  } catch (error) {
    console.error("Error deleting file from Cloudinary:", error);
    throw new AppError(
      status.INTERNAL_SERVER_ERROR,
      "Failed to delete file from Cloudinary",
    );
  }
};

export const cloudinaryUpload = cloudinary;
