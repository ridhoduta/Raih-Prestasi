-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('L', 'P');

-- AlterTable
ALTER TABLE "students" ADD COLUMN     "gender" "Gender";
