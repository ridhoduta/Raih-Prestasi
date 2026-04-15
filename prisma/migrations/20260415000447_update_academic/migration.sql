/*
  Warnings:

  - You are about to drop the column `semester` on the `academic_scores` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `academic_scores` table. All the data in the column will be lost.
  - Added the required column `periode` to the `academic_scores` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "academic_scores" DROP COLUMN "semester",
DROP COLUMN "year",
ADD COLUMN     "periode" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "academic_files" (
    "id" TEXT NOT NULL,
    "periode" TIMESTAMP(3) NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "academic_files_pkey" PRIMARY KEY ("id")
);
