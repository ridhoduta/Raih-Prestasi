/*
  Warnings:

  - Made the column `dateBirth` on table `students` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "students" ALTER COLUMN "dateBirth" SET NOT NULL;

-- CreateTable
CREATE TABLE "grades" (
    "id" TEXT NOT NULL,
    "achievementId" TEXT NOT NULL,
    "points" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "grades_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "grades_achievementId_key" ON "grades"("achievementId");

-- AddForeignKey
ALTER TABLE "grades" ADD CONSTRAINT "grades_achievementId_fkey" FOREIGN KEY ("achievementId") REFERENCES "achievements"("id") ON DELETE CASCADE ON UPDATE CASCADE;
