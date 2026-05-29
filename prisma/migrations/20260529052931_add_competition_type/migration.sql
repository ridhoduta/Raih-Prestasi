-- CreateEnum
CREATE TYPE "CompetitionType" AS ENUM ('INDIVIDU', 'TIM');

-- AlterTable
ALTER TABLE "competitions" ADD COLUMN     "type" "CompetitionType" NOT NULL DEFAULT 'INDIVIDU';
