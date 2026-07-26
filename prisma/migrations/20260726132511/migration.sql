/*
  Warnings:

  - You are about to drop the `super_admins` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "super_admins" DROP CONSTRAINT "super_admins_userId_fkey";

-- DropTable
DROP TABLE "super_admins";

-- CreateTable
CREATE TABLE "superadmin" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "profilePhoto" TEXT,
    "contactNumber" TEXT,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "userId" TEXT NOT NULL,

    CONSTRAINT "superadmin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "superadmin_email_key" ON "superadmin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "superadmin_userId_key" ON "superadmin"("userId");

-- CreateIndex
CREATE INDEX "superadmin_email_idx" ON "superadmin"("email");

-- CreateIndex
CREATE INDEX "superadmin_isDeleted_idx" ON "superadmin"("isDeleted");

-- AddForeignKey
ALTER TABLE "superadmin" ADD CONSTRAINT "superadmin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
