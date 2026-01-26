/*
  Warnings:

  - You are about to drop the `competition_registrations` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "FieldType" AS ENUM ('TEXT', 'TEXTAREA', 'NUMBER', 'FILE', 'SELECT', 'CHECKBOX', 'RADIO');

-- DropForeignKey
ALTER TABLE "competition_registrations" DROP CONSTRAINT "competition_registrations_competitionId_fkey";

-- DropForeignKey
ALTER TABLE "competition_registrations" DROP CONSTRAINT "competition_registrations_studentId_fkey";

-- DropTable
DROP TABLE "competition_registrations";

-- CreateTable
CREATE TABLE "CompetitionRegistration" (
    "id" TEXT NOT NULL,
    "competitionId" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "status" "RegistrationStatus" NOT NULL DEFAULT 'MENUNGGU',
    "note" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CompetitionRegistration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompetitionFormField" (
    "id" TEXT NOT NULL,
    "competitionId" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "fieldType" "FieldType" NOT NULL,
    "isRequired" BOOLEAN NOT NULL DEFAULT false,
    "options" JSONB,
    "order" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CompetitionFormField_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RegistrationAnswer" (
    "id" TEXT NOT NULL,
    "registrationId" TEXT NOT NULL,
    "fieldId" TEXT NOT NULL,
    "value" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RegistrationAnswer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CompetitionRegistration" ADD CONSTRAINT "CompetitionRegistration_competitionId_fkey" FOREIGN KEY ("competitionId") REFERENCES "competitions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompetitionRegistration" ADD CONSTRAINT "CompetitionRegistration_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompetitionFormField" ADD CONSTRAINT "CompetitionFormField_competitionId_fkey" FOREIGN KEY ("competitionId") REFERENCES "competitions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RegistrationAnswer" ADD CONSTRAINT "RegistrationAnswer_registrationId_fkey" FOREIGN KEY ("registrationId") REFERENCES "CompetitionRegistration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RegistrationAnswer" ADD CONSTRAINT "RegistrationAnswer_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "CompetitionFormField"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
