/*
  Warnings:

  - A unique constraint covering the columns `[achievementId]` on the table `academic_scores` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `achievementId` to the `academic_scores` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "academic_scores" ADD COLUMN     "achievementId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "academic_scores_achievementId_key" ON "academic_scores"("achievementId");

-- AddForeignKey
ALTER TABLE "academic_scores" ADD CONSTRAINT "academic_scores_achievementId_fkey" FOREIGN KEY ("achievementId") REFERENCES "achievements"("id") ON DELETE CASCADE ON UPDATE CASCADE;
