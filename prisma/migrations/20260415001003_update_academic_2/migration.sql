/*
  Warnings:

  - You are about to drop the column `periode` on the `academic_files` table. All the data in the column will be lost.
  - You are about to drop the column `periode` on the `academic_scores` table. All the data in the column will be lost.
  - Added the required column `academicYear` to the `academic_files` table without a default value. This is not possible if the table is not empty.
  - Added the required column `semester` to the `academic_files` table without a default value. This is not possible if the table is not empty.
  - Added the required column `academicYear` to the `academic_scores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `semester` to the `academic_scores` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Semester" AS ENUM ('GANJIL', 'GENAP');

-- AlterTable
ALTER TABLE "academic_files" DROP COLUMN "periode",
ADD COLUMN     "academicYear" TEXT NOT NULL,
ADD COLUMN     "semester" "Semester" NOT NULL;

-- AlterTable
ALTER TABLE "academic_scores" DROP COLUMN "periode",
ADD COLUMN     "academicYear" TEXT NOT NULL,
ADD COLUMN     "semester" "Semester" NOT NULL;
