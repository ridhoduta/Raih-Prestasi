/*
  Warnings:

  - You are about to drop the column `achievementId` on the `grades` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[gradeName]` on the table `grades` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `gradeName` to the `grades` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "grades" DROP CONSTRAINT "grades_achievementId_fkey";

-- DropIndex
DROP INDEX "grades_achievementId_key";

-- AlterTable
ALTER TABLE "achievements" ADD COLUMN     "gradeId" TEXT;

-- AlterTable
ALTER TABLE "grades" DROP COLUMN "achievementId",
ADD COLUMN     "gradeName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "grades_gradeName_key" ON "grades"("gradeName");

-- AddForeignKey
ALTER TABLE "achievements" ADD CONSTRAINT "achievements_gradeId_fkey" FOREIGN KEY ("gradeId") REFERENCES "grades"("id") ON DELETE SET NULL ON UPDATE CASCADE;
