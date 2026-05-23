-- AlterTable
ALTER TABLE "achievements" ADD COLUMN     "gradeCompetitionId" TEXT;

-- CreateTable
CREATE TABLE "gradeCompetitions" (
    "id" TEXT NOT NULL,
    "gradeCompetitionName" TEXT NOT NULL,
    "points" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "gradeCompetitions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "gradeCompetitions_gradeCompetitionName_key" ON "gradeCompetitions"("gradeCompetitionName");

-- AddForeignKey
ALTER TABLE "achievements" ADD CONSTRAINT "achievements_gradeCompetitionId_fkey" FOREIGN KEY ("gradeCompetitionId") REFERENCES "gradeCompetitions"("id") ON DELETE SET NULL ON UPDATE CASCADE;
