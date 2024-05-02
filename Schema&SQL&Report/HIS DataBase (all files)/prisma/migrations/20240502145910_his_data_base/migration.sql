/*
  Warnings:

  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserPreference` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CategoryToPost` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_favById_fkey";

-- DropForeignKey
ALTER TABLE "UserPreference" DROP CONSTRAINT "UserPreference_userId_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryToPost" DROP CONSTRAINT "_CategoryToPost_A_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryToPost" DROP CONSTRAINT "_CategoryToPost_B_fkey";

-- DropTable
DROP TABLE "Category";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "UserPreference";

-- DropTable
DROP TABLE "_CategoryToPost";

-- DropEnum
DROP TYPE "Role";

-- CreateTable
CREATE TABLE "Patient" (
    "PatientId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "contactinfo" TEXT NOT NULL,
    "MedicalHistory" TEXT NOT NULL,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("PatientId")
);

-- CreateTable
CREATE TABLE "Phyician" (
    "phyicianId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "specialization" TEXT NOT NULL,
    "contactinfo" TEXT NOT NULL,

    CONSTRAINT "Phyician_pkey" PRIMARY KEY ("phyicianId")
);

-- CreateTable
CREATE TABLE "Appointment" (
    "appointmentId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "patientId" TEXT NOT NULL,
    "phyicianId" TEXT NOT NULL,

    CONSTRAINT "Appointment_pkey" PRIMARY KEY ("appointmentId")
);

-- CreateTable
CREATE TABLE "MedicalRecord" (
    "recotdId" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "phyicianId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "symptoms" TEXT NOT NULL,
    "diagnosis" TEXT NOT NULL,
    "treatmentPlan" TEXT NOT NULL,

    CONSTRAINT "MedicalRecord_pkey" PRIMARY KEY ("recotdId")
);

-- CreateTable
CREATE TABLE "Prescription" (
    "prescriptionID" TEXT NOT NULL,
    "recotdId" TEXT NOT NULL,
    "medication" TEXT NOT NULL,
    "dosage" TEXT NOT NULL,
    "frequency" TEXT NOT NULL,

    CONSTRAINT "Prescription_pkey" PRIMARY KEY ("prescriptionID")
);

-- CreateTable
CREATE TABLE "Diagnosis" (
    "diagnosisID" TEXT NOT NULL,
    "recotdId" TEXT NOT NULL,
    "descriptionOfDiagnosis" TEXT NOT NULL,
    "severity" TEXT NOT NULL,

    CONSTRAINT "Diagnosis_pkey" PRIMARY KEY ("diagnosisID")
);

-- CreateTable
CREATE TABLE "Test" (
    "testId" TEXT NOT NULL,
    "recotdId" TEXT NOT NULL,
    "typeOfTest" TEXT NOT NULL,
    "result" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("testId")
);

-- CreateTable
CREATE TABLE "treatment" (
    "teatmentId" TEXT NOT NULL,
    "recotdId" TEXT NOT NULL,
    "typeOfTreatment" TEXT NOT NULL,
    "descriptionOfTreatment" TEXT NOT NULL,

    CONSTRAINT "treatment_pkey" PRIMARY KEY ("teatmentId")
);

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("PatientId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_phyicianId_fkey" FOREIGN KEY ("phyicianId") REFERENCES "Phyician"("phyicianId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicalRecord" ADD CONSTRAINT "MedicalRecord_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("PatientId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicalRecord" ADD CONSTRAINT "MedicalRecord_phyicianId_fkey" FOREIGN KEY ("phyicianId") REFERENCES "Phyician"("phyicianId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prescription" ADD CONSTRAINT "Prescription_recotdId_fkey" FOREIGN KEY ("recotdId") REFERENCES "MedicalRecord"("recotdId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Diagnosis" ADD CONSTRAINT "Diagnosis_recotdId_fkey" FOREIGN KEY ("recotdId") REFERENCES "MedicalRecord"("recotdId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Test" ADD CONSTRAINT "Test_recotdId_fkey" FOREIGN KEY ("recotdId") REFERENCES "MedicalRecord"("recotdId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "treatment" ADD CONSTRAINT "treatment_recotdId_fkey" FOREIGN KEY ("recotdId") REFERENCES "MedicalRecord"("recotdId") ON DELETE RESTRICT ON UPDATE CASCADE;
