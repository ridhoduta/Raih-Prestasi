/*
  Warnings:

  - You are about to drop the column `academicYear` on the `academic_files` table. All the data in the column will be lost.
  - You are about to drop the column `academicYear` on the `academic_scores` table. All the data in the column will be lost.
  - Added the required column `yearId` to the `academic_files` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yearId` to the `academic_scores` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "academic_files" DROP COLUMN "academicYear",
ADD COLUMN     "yearId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "academic_scores" DROP COLUMN "academicYear",
ADD COLUMN     "yearId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "achievements" ADD COLUMN     "points" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "academic_years" (
    "id" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "academic_years_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "academic_scores" ADD CONSTRAINT "academic_scores_yearId_fkey" FOREIGN KEY ("yearId") REFERENCES "academic_years"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "academic_files" ADD CONSTRAINT "academic_files_yearId_fkey" FOREIGN KEY ("yearId") REFERENCES "academic_years"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
